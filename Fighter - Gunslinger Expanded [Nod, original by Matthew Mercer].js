/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Fighter, called "Gunslinger Expanded"
				This script also adds the weapons and ammo associated with that subclass
	The original subclass this expanded version is based upon (Gunslinger v 1.3 by Matthew Mercer)
	is taken from the DMs Guild website (http://www.dmsguild.com/product/170778/)
	Please support the creator of this content (Matthew Mercer) and download his material from the DMs Guild website: http://www.dmsguild.com/browse.php?x=0&y=0&author=Matthew%20Mercer
	Note that you can't include both the v1.2 and v1.3 of the Gunslinger, because then the sheet will always use the latest version!
	The weights for the bullets are added by MorePurpleMoreBetter, as none are given in the original document
*/

var iFileName = "Nod's Homebrew - Gunslinger Expanded.js"; 
RequiredSheetVersion(13);

SourceList["GSE"] = {
	name : "Gunslinger Expanded",
	abbreviation : "GSE",
	group : "Nod's Homebrew",
	date : "2020/08/12"
};

// Add Gunslinger Expanded
AddSubClass("fighter", "gunslinger", {
	regExpSearch : /gunslinger/i,
	subname : "Gunslinger",
	source : ["GSE"],
	fullname : "Gunslinger",
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Firearm Proficiency",
			source : ["GSE"],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with firearms",
			weapons : [false, false, ["firearms"]],
			action : ["bonus action", "Firearm Reload"]
		},
		"subclassfeature3.1" : {
			name : "Gunsmith",
			source : ["GSE"],
			minlevel : 3,
			description : desc([
				"I gain proficiency with blacksmith's tools. I can use my blacksmith's tools to craft ammunition and repair",
				"damaged firearms. I can even use them to draw up and create new ones (DM's discretion)"
			]),
			toolProfs : [["Blacksmith's tools", "Dex"]],
			eval : "AddAction('action', 'Repair Misfire (DC 8 + misfire score)', 'Gunslinger (Gunsmith)');",
			removeeval : "RemoveAction('action', 'Repair Misfire (DC 8 + misfire score)');"
		},
		"subclassfeature3.2" : {
			name : "Grit",
			source : ["GSE"],
			minlevel : 3,
			description : desc([
				"I gain grit points which I can spend to perform various Trick Shots with my firearms",
				"I regain a grit point when I roll a 20 on a firearm attack, or deal a significant killing blow"
			]),
			recovery : "short rest",
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));"
		},
		"subclassfeature3.3" : {
			name : "Trick Shots",
			source : ["GSE"],
			minlevel : 3,
			description : desc([
				"Use the \"Choose Feature\" button above to add a Trick Shot to the third page",
				"A trick shot must be declared before the roll; Only one grit shot can be used per attack",
				"The save DC for trick shots, if any, is 8 + my Proficiency Bonus + my Dexterity modifier",
				"Each time I learn a new trick shot, I can also replace one I know with a new one"
			]),
			additional : levels.map(function(n) {
				if (n < 3) return "";
				return (n < 7 ? 3 : n < 10 ? 4 : n < 15 ? 5 : n < 18 ? 6 : 7) + " known";
			}),
			extraname : "Trick Shot",
			extrachoices : ["Bullying Shot", "Covering Shot", "Dazing Shot", "Deadeye Shot", "Disarming Shot", "Executioner's Shot", "Forceful Shot", "Inspiring Shot", "Opportune Shot", "Overwatch Shot", "Piercing Shot", "Snap Shot", "Sniper Shot", "Suppressing Shot", "Violent Shot", "Winging Shot"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 3 : n < 10 ? 4 : n < 15 ? 5 : n < 18 ? 6 : 7;
			}),
			"bullying shot" : {
				name : "Bullying Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : "\n   " + "When making a Cha (intimidation) check, I can spend 1 grit point to gain advantage on it"
			},
			"covering shot" : {
				name : "Covering Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; The target takes damage and the next attack roll against",
					"the target by an attacker other than you has advantage if the attack is made before",
					"the start of your next turn"
				])
			},
			"dazing shot" : {
				name : "Dazing Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; The target takes damage and must make a Constitution save",
					"If failed, the target also has disadvantage on its attack rolls until the end of its next turn"
				])
			},
			"deadeye shot" : {
				name : "Deadeye Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : "\n   " + "I gain advantage on one attack roll with my firearm"
			},
			"disarming shot" : {
				name : "Disarming Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; The target takes damage and must make a Strength save",
					"If failed, the target also drops a held object of my choice, which is pushed 10 ft away"
				])
			},
			"executioner's shot" : {
				name : "Executioner's Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with attack action while wielding two one-handed firearms; fire both firearms",
					"(only the primary one can misfire) and make an attack roll with disadvantage.",
					"If the attack hits, roll the damage twice and take the higher result"
				])
			},
			"forceful shot" : {
				name : "Forceful Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; The target takes damage and must make a Strength save",
					"If failed, the target is also pushed 15 ft away from me"
				])
			},
			"inspiring shot" : {
				name : "Inspiring Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"When making an initiative roll, choose up to four friendly creatures (which can",
					"include yourself) within 30 feet of you who can see or hear you. These creatures gain",
					"temporary hit points equal to your initiative roll. A creature can't gain temporary hit",
					"points from this Trick Shot again until it has finished a short or long rest"
				])
			},
			"opportune shot" : {
				name : "Opportune Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"When a creature provokes an opportunity attack from you, you can use your reaction to",
					"expend one grit point and make one firearm attack against that creature, rather than making",
					"an opportunity attack. On a hit, the target takes damage and must make a Constitution",
					"save or their movement speed is reduced by half until the start of your next turn"
				]),
				action : [["reaction",  " (1 grit point)"]]				
			},	
			"overwatch shot" : {
				name : "Overwatch Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"When a creature you can see moves into the normal range of the firearm you're wielding,", 
					"you can use your reaction to expend one grit point and make one attack against the", 
					"creature, using that firearm"
				]),
				action : [["reaction",  " (1 grit point)"]]				
			},
			"piercing shot" : {
				name : "Piercing Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; After I hit a creature, I can attack every creature in line behind it",
					"I make an attack roll with disadvantage for everyone in a line directly behind the target",
					"This continues out to a range equal to the weapon's first range increment",
					"Only the initial attack roll can misfire, but has a +1 to the firearm's misfire score"
				])
			},
			"snap shot" : {
				name : "Snap Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"As a bonus action, you can expend one grit point to quickly fire without aiming.", 
					"Make a firearm attack against a creature, with disadvantage on the roll. On a hit, the", 
					"target takes damage but you can reroll the weapon’s damage dice and use either total"
				]),
				action : [["bonus",  " (1 grit point)"]]				
			},
			"sniper shot" : {
				name : "Sniper Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; double the long range of your firearm and attacking at",
					"long range doesn't impose disadvantage for this attack"
				]),
			},
			"suppressing shot" : {
				name : "Suppressing Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; The target takes damage and must make a Constitution save",
					"If failed, the target can’t take reactions until the start of your next turn."
				])
			},
			"violent shot" : {
				name : "Violent Shot",
				source : ["GSE"],
				additional : "1 or more grit points",
				description : desc([
					"Use with firearm attack; I roll one additional weapon damage die for each grit point I use",
					"In addition, each grit point used increases the firearm's misfire score by +2 for this attack"
				])
			},
			"winging shot" : {
				name : "Winging Shot",
				source : ["GSE"],
				additional : "1 grit point",
				description : desc([
					"Use with firearm attack; The target takes damage and must make a Strength save",
					"If failed, the target is also knocked prone"
				])
			}
		},
		"subclassfeature7" : {
			name : "Quickdraw",
			source : ["GSE"],
			minlevel : 7,
			description : desc([
				"I add my proficiency bonus to my initiative",
				"I can stow a firearm and draw another as a single object interaction on my turn"
			]),
			addMod : { type : "skill", field : "Init", mod : "Prof", text : "I add my proficiency bonus to my initiative rolls." }
		},
		"subclassfeature10" : {
			name : "Rapid Repair",
			source : ["GSE"],
			minlevel : 10,
			description : "\n   " + "As a bonus action, I can repair a misfired (not broken) firearm by spending 1 grit point",
			additional : "1 grit point",
			action : ["bonus action", " (1 grit point)"]
		},
		"subclassfeature15" : {
			name : "Lightning Reload",
			source : ["GSE"],
			minlevel : 15,
			description : "\n   " + "I can reload one firearm as one of my attacks during an Attack action",
			action : ["action", " (replaces 1 attack)"]
		},
		"subclassfeature18" : {
			name : "Vicious Intent",
			source : ["GSE"],
			minlevel : 18,
			description : desc([
				"My firearm attacks score a critical hit on a roll of both 19 and 20.",
				"When I score a critical hit with a firearm, the target takes additional damage",
				"at the end of its next turn, equal to half of the damage from the attack"
			]),
			calcChanges : {
				atkAdd : ["if (!isSpell && theWea && (/firearm/).test(theWea.type + theWea.list) && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My attacks with firearms score a critical on a to hit roll of both 19 and 20."]
			}
		},
		"subclassfeature18.1" : {
			name : "True Grit",
			source : ["GSE"],
			minlevel : 18,
			description : "\n   " + "I regain one grit point if I have no more remaining when I roll initiative" 
		},
	}
});

//Add Firearms
//pocket pistol
WeaponsList["pocket pistol"] = { 
	regExpSearch : /pocket pistol/i,
	name : "Pocket Pistol",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 8, "piercing"],
	range : "15/60 ft",
	weight : 1,
	description : "Light, covert, reload 1, misfire 1; ",
	abilitytodamage : true,
	ammo : "pistol bullets"
};
AmmoList["pocket pistol bullets"] = {
	name : "Pocket Pistol Bullets",
	source : ["GSE"],
	weight : 0.015,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, pocket pistol"
};
GearList["ammunition: bullets pocket pistol (20)"] = {
	infoname : "   Pocket pistol bullets (20) [2 gp]",
	source : ["GSE"],
	name : "Bullets, pocket pistol",
	amount : 20,
	weight : 0.015
};
// light pistol
WeaponsList["light pistol"] = {
	regExpSearch : /^(?=.*light)(?!.*pistol).*$/i,
	name : "Light Pistol",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 8, "piercing"],
	range : "30/120 ft",
	weight : 2,
	description : "Light, reload 4, misfire 1",
	abilitytodamage : true,
	ammo : "pistol bullets"
};
AmmoList["light pistol bullets"] = {
	name : "Light Pistol Bullets",
	source : ["GSE"],
	weight : 0.015,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, pistol"
};
GearList["ammunition: bullets light pistol (20)"] = {
	infoname : "   Pistol bullets (20) [4 gp]",
	source : ["GSE"],
	name : "Bullets, light pistol",
	amount : 20,
	weight : 0.015
};
// pistol
WeaponsList["pistol-gse"] = {
	regExpSearch : /^(?=.*pistol)(?!.*automatic).*$/i,
	name : "Pistol",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 8, "piercing"],
	range : "60/120 ft",
	weight : 3,
	description : "Light, reload 4, misfire 1",
	abilitytodamage : true,
	ammo : "pistol bullets"
};
AmmoList["pistol bullets"] = {
	name : "Pistol Bullets",
	source : ["GSE"],
	weight : 0.015,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, pistol"
};
GearList["ammunition: bullets pistol (20)"] = {
	infoname : "   Pistol bullets (20) [4 gp]",
	source : ["GSE"],
	name : "Bullets, pistol",
	amount : 20,
	weight : 0.015
};
//heavy pistol
WeaponsList["heavy pistol"] = {
	regExpSearch : /heavy pistol/i,
	name : "Heavy Pistol",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 10, "piercing"],
	range : "60/120 ft",
	weight : 5,
	description : "Reload 6, misfire 2",
	abilitytodamage : true,
	ammo : "pistol bullets"
};
AmmoList["heavy pistol bullets"] = {
	name : "Heavy Pistol Bullets",
	source : ["GSE"],
	weight : 0.015,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, heavy pistol"
};
GearList["ammunition: bullets heavy pistol (20)"] = {
	infoname : "   Heavy Pistol bullets (20) [4 gp]",
	source : ["GSE"],
	name : "Bullets, heavy pistol",
	amount : 20,
	weight : 0.015
};
//scatter pistol
WeaponsList["scatter pistol"] = {
	regExpSearch : /scattergun/i,
	name : "Scatter Pistol",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 12, "piercing"],
	range : "15/60 ft",
	weight : 10,
	description : "Scatter, reload 2, misfire 2; ",
	abilitytodamage : true,
	ammo : "pistol bullets"
};
AmmoList["scatter pistol bullets"] = {
	name : "Scatter Pistol bullets",
	source : ["GSE"],
	weight : 0.2,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, scatter pistol"
};
GearList["ammunition: bullets scatter pistol (5)"] = {
	infoname : "   Scatter Pistol bullets (5) [5 gp]",
	source : ["GSE"],
	name : "Bullets, scatter pistol",
	amount : 5,
	weight : 0.2
};
// dragon pistol
WeaponsList["dragon pistol"] = {
	regExpSearch : /dragon pistol/i,
	name : "Dragon Pistol",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 12, "fire"],
	range : "30/60 ft",
	weight : 10,
	description : "Explosive, reload 1, misfire 3; ",
	abilitytodamage : true,
	ammo : "dragon grenades"
};
AmmoList["dragon pistol grenades"] = {
	name : "Dragon Pistol grenades",
	source : ["GSE"],
	weight : 0.65,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Grenades, dragon pistol"
};
GearList["ammunition: grenades dragon pistol (2)"] = {
	infoname : "   Dragon pistol grenades (2) [10 gp]",
	source : ["GSE"],
	name : "Grenades, dragon pistol",
	amount : "",
	weight : 0.65
};
// pepper gun
WeaponsList["peppergun"] = {
	regExpSearch : /peppergun/i,
	name : "Peppergun",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 10, "piercing"],
	range : "80/160 ft",
	weight : 6,
	description : "Braced, burst(1d10), reload 6, misfire 2; ",
	abilitytodamage : true,
	ammo : "pistol bullets"
};
AmmoList["peppergun bullets"] = {
	name : "Peppergun bullets",
	source : ["GSE"],
	weight : 0.015,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, peppergun"
};
GearList["ammunition: bullets peppergun (12)"] = {
	infoname : "   Peppergun bullets (12) [4 gp]",
	source : ["GSE"],
	name : "Bullets, peppergun",
	amount : 20,
	weight : 0.015
};
// scatter gun
WeaponsList["scattergun"] = {
	regExpSearch : /scattergun/i,
	name : "Scattergun",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [2, 6, "piercing"],
	range : "25/100 ft",
	weight : 10,
	description : "Braced, scatter, reload 2, misfire 3; ",
	abilitytodamage : true,
	ammo : "scattergun shells"
};
AmmoList["scattergun shells"] = {
	name : "Scattergun Shells",
	source : ["GSE"],
	weight : 0.2,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Scattergun shells"
};
GearList["ammunition: scattergun shells (5)"] = {
	infoname : "   Scattergun shells (5) [5 gp]",
	source : ["GSE"],
	name : "Scattergun shells",
	amount : 5,
	weight : 0.2
};
// short rifle
WeaponsList["short rifle"] = {
	regExpSearch : /short rifle/i,
	name : "Short Rifle",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [1, 10, "piercing"],
	range : "100/400 ft",
	weight : 8,
	description : "Two-handed, reload 1, misfire 1; ",
	abilitytodamage : true,
	ammo : "rifle bullets"
};
AmmoList["short rifle bullets"] = {
	name : "Short Rifle Bullets",
	source : ["GSE"],
	weight : 0.025,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, short rifle"
};
GearList["ammunition: bullets short rifle (15)"] = {
	infoname : "   Rifle bullets (15) [5 gp]",
	source : ["GSE"],
	name : "Bullets, short rifle",
	amount : 20,
	weight : 0.025
};
// rifle
WeaponsList["rifle-gse"] = {
	regExpSearch : /rifle/i,
	name : "Rifle",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [2, 6, "piercing"],
	range : "120/480 ft",
	weight : 10,
	description : "Two-handed, reload 2, misfire 2",
	abilitytodamage : true,
	ammo : "rifle bullets"
};
AmmoList["rifle bullets"] = {
	name : "Rifle Bullets",
	source : ["GSE"],
	weight : 0.025,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, rifle"
};
GearList["ammunition: bullets rifle (10)"] = {
	infoname : "   Rifle bullets (10) [5 gp]",
	source : ["GSE"],
	name : "Bullets, rifle",
	amount : 20,
	weight : 0.025
};
// pepper rifle
WeaponsList["pepper rifle"] = {
	regExpSearch : /pepper rifle/i,
	name : "Pepper Rifle",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [2, 8, "piercing"],
	range : "120/480 ft",
	weight : 10,
	description : "Two-handed, burst(2d10), reload 4, misfire 2; ",
	abilitytodamage : true,
	ammo : "rifle bullets"
};
AmmoList["pepper rifle bullets"] = {
	name : "Pepper rifle bullets",
	source : ["GSE"],
	weight : 0.015,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, pepper rifle"
};
GearList["ammunition: bullets pepper rifle (10)"] = {
	infoname : "   Pepper rifle bullets (10) [5 gp]",
	source : ["GSE"],
	name : "Bullets, pepper rifle",
	amount : 20,
	weight : 0.015
};
// long rifle
WeaponsList["long rifle"] = {
	regExpSearch : /long rifle/i,
	name : "Long Rifle",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [2, 12, "piercing"],
	range : "200/800 ft",
	weight : 20,
	description : "Two-handed, reload 1, misfire 2",
	abilitytodamage : true,
	ammo : "rifle bullets"
};
AmmoList["long rifle bullets"] = {
	name : "Long Rifle Bullets",
	source : ["GSE"],
	weight : 0.05,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, long rifle"
};
GearList["ammunition: bullets long rifle (5)"] = {
	infoname : "   Long Rifle bullets (5) [10 gp]",
	source : ["GSE"],
	name : "Bullets, long rifle",
	amount : 5,
	weight : 0.05
};
// volley rifle
WeaponsList["volley rifle"] = {
	regExpSearch : /volley rifle/i,
	name : "Volley Rifle",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [2, 12, "piercing"],
	range : "200/800 ft",
	weight : 32,
	description : "Two-handed, bulky, reload 7, misfire 3",
	abilitytodamage : true,
	ammo : "rifle bullets"
};
AmmoList["volley rifle bullets"] = {
	name : "Volley Rifle Bullets",
	source : ["GSE"],
	weight : 0.05,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, volley rifle"
};
GearList["ammunition: bullets volley rifle (7)"] = {
	infoname : "   Volley Rifle bullets (7) [15 gp]",
	source : ["GSE"],
	name : "Bullets, volley rifle",
	amount : 7,
	weight : 0.05
};
// pepper cannon
WeaponsList["pepper cannon"] = {
	regExpSearch : /pepper cannon/i,
	name : "Pepper Cannon",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [2, 8, "piercing"],
	range : "100/400 ft",
	weight : 32,
	description : "Two-handed, cumbersome, burst(2d12), reload 6, misfire 3; ",
	abilitytodamage : true,
	ammo : "cannon bullets"
};
AmmoList["pepper cannon bullets"] = {
	name : "Pepper cannon bullets",
	source : ["GSE"],
	weight : 0.2,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, pepper cannon"
};
GearList["ammunition: pepper cannon bullets (6)"] = {
	infoname : "   Pepper cannon bullets (6) [15 gp]",
	source : ["GSE"],
	name : "Bullets, pepper cannon",
	amount : 5,
	weight : 0.2
};
// dragon canon
WeaponsList["dragon cannon"] = {
	regExpSearch : /dragon cannon/i,
	name : "Dragon Cannon",
	source : ["GSE"],
	list : "firearm",
	ability : 2,
	type: "Firearms",
	damage : [4, 8, "fire"],
	range : "40/240 ft",
	weight : 25,
	description : "Two-handed, bulky, cumbersome, explosive, reload 2, misfire 5; ",
	abilitytodamage : true,
	ammo : "dragon grenades"
};
AmmoList["dragon cannon grenades"] = {
	name : "Dragon Cannon grenades",
	source : ["GSE"],
	weight : 0.65,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Grenades, dragon cannon"
};
GearList["ammunition: dragon cannon grenades (2)"] = {
	infoname : "   Dragon cannon grenades (2) [10 gp]",
	source : ["GSE"],
	name : "Grenades, dragon cannon",
	amount : "",
	weight : 0.65
};

// Add Feats
FeatsList["firearm expert"] = {
	name : "Firearm Expert",
	source : ["GSE"],
	descriptionFull : "Thanks to extensive practice with firearms, you are adept at using guns effectively. You gain the following benefits:\n \u2022 If you roll a misfire on an attack with a firearm, you can use your reaction to roll a d20. If the number rolled is higher than the weapon’s misfire score, the firearm does not misfire. You cannot use this feature again on the same firearm until you complete a short or long rest.\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.\n \u2022 When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a one-handed firearm you are holding.",
	description : "If firearm misfires, I can reaction roll a d20. If higher than misfire score, no misfire (once per weapon per short rest). No disadvantage on ranged attack rolls within 5 ft of a hostile. When I attack with a one-handed weapon in my Attack action, I can use a bonus action to attack with a one-handed firearm.",
	action : [
		["bonus action", " (with Attack action)"],
		["reaction", "Prevent Misfire"],
		],
};
FeatsList["gunslinger determination"] = {
	name : "Gunslinger Determination",
	source : ["GSE", 0],
	prerequisite : "Proficiency with firearms",
	prereqeval : function(v) {
		return v.FirearmsWeaponsProf;
	},
	descriptionFull : "You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:\n \u2022 Increase your Dexterity, Constitution, or Intelligence by 1, to a maximum of 20.\n \u2022 When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest.",
	description : "When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 Dexterity, Constitution, or Intelligence]",
	scorestxt : "+1 to Dexterity, Constitution, or Intelligence",
	usages : 1,
	recovery : "short rest",
	additional : "attack/check/save"
};
FeatsList["gunsmithing ingenuity"] = {
	name: "Gunsmithing Ingenuity",
	source: ["GSE"],
	descriptionFull : "You are extraordinarily skilled in the creation of firearms, granting you the following benefits:\n \u2022Increase your Intelligence by 1, to a maximum of 20.\n \u2022You gain proficiency with your choice of Tinker’s Tools or Alchemist’s Supplies.\n \u2022When you make a check using your proficiency with Blacksmith's Tools, you add double your proficiency bonus to the check.\n \u2022When you score a critical hit to a creature with a firearm you created, you can roll one additional damage die when determining the extra piercing damage the target takes.",
	description: "I gain proficiency with Tinker's tools or Alchemist's supplies, and expertise with Blacksmith's tools. If I make a critical hit to a target with a firearm I created, I can roll one additional damage die. [+1 Intelligence]",
	toolProfs: ["Tinker's Tools or Alchemist's Supplies", 1],
		eval : function () {
			if ((/blacksmith.?s.*tools/i).test(What('Too Text'))) {
				Checkbox('Too Exp', true);
			};
		},
		removeeval : function () {
			if ((/blacksmith.?s.*tools/i).test(What('Too Text'))) {
				Checkbox('Too Exp', false);
			};
		},
	tools : "\n\n" + toUni("Gunsmithing Ingenuity (feat)") + ": Tinker's Tools or Alchemist's Supplies.",
	improvements: "Gunsmithing Ingenuity (feat): +1 Intelligence;",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.list == "firearm") {
					fields.Description += (fields.Description ? '; ' : '') + 'crit = one extra damage die';
				}
			},
		]
	},
	scores: [0, 0, 0, 1, 0, 0],
};
FeatsList["holster diplomacy"] = {
	name : "Holster Diplomacy",
	source : ["GSE"],
	descriptionFull : "You develop your conversational skill to better deceive others. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Deception skill. If you are already proficient in the skill, you gain expertise with it.\n \u2022 When you take the Attack action on your turn, you can replace one attack with an attempt to deceive one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 1 hour.",
	description : "I gain expertise with Deception, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft makes its Insight vs. my Deception or until end of my next turn, I gain adv. on attacks and don't provoke its opportunity attacks. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"]]
};
FeatsList["mounted gunner"] = {
	name : "Mounted Gunner",
	source : ["GSE"],
	descriptionFull : "You feel as comfortable shooting from the saddle as you do with your feet on the ground. While you are mounted and aren't incapacitated, you gain the following benefits:\n \u2022 Against any unmounted creature that is smaller than your mount, you have advantage on firearm attack rolls within the firearm's normal range if it does not have the bulky or cumbersome properties. \n \u2022 You can force an attack targeted at your mount to target you instead.\n \u2022 If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
	description : "I have advantage on normal range firearm attack rolls (no bulky or cumbersome) against unmounted creatures smaller than my mount. I can force attacks targeting my mount to target me instead. When a Dex save would halve damage, my mount takes no damage on success and half damage on failure."
};
FeatsList["the good, the bad, and the ugly"] = {
	name : "The Good, The Bad, and the Ugly",
	source : ["GSE"],
	descriptionFull : "No matter where you go, due to your reputation, people are either afraid of you, in awe of you, or both. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you gain expertise with it.\n \u2022 When you take the Attack action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Intimidation) check contested by the target's Wisdom (Insight) check. If your check succeeds, the target is frightened until the end of your next turn. If your check fails, the target can't be frightened by you in this way for 1 hour.",
	description : "I gain expertise with Intimidation, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft I can see and that can see and hear me must make its Insight vs. my Intimidation or be frightened until end of my next turn. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Intimidation", "increment"]]
};
FeatsList["when the dealin’s done"] = {
	name : "When the Dealin’s Done",
	source : ["GSE"],
	descriptionFull : "You know when to hold’em and when to fold’em. You know when to walk away and know when to run. You never count your money when you’re sittin’ at the table. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Persuasion skill. If you are already proficient in the skill, you gain expertise with it.\n \u2022 If you spend 1 minute talking to someone who can understand what you say, you can make a Charisma (Persuasion) check contested by the creature's Wisdom (Insight) check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is charmed by you as long as it remains within 60 feet of you and for 1 minute thereafter.",
	description : "I gain expertise with Persuasion, or proficiency if not so already. With a one minute long conversation outside of combat, I can make a Persuasion vs. its Insight. If successful, it is charmed by me as long as it remains within 30 ft and up to 10 minutes after that [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Persuasion", "increment"]]
};

// Add Magic Items
MagicItemsList["bandoleer vest"] = {
	name : "Bandoleer Vest",
	source : ["GSE"],
	type : "wondrous item",
	rarity: "uncommon",
	description : "This bandoleer vest has multiple extra-dimensional compartments and weighs 2 lbs, regardless of its contents. It has slots for up to 60 rounds of ammunition and four holster straps that can each hold a one-handed firearm. Four small pockets can each hold an additional 20 rounds, a  one-handed firearm, a set of artisan tools or a similarly sized object. Three large pockets can each hold a two-handed firearm or similarly sized object. The  bandoleer vest alters itself as needed to accommodate the contents. The wearer can draw an item stored in the bandoleer vest as easily as if from an ordinary pouch.",
	descriptionFull : "This bandoleer vest is made of finely tanned leather. It has multiple compartments and weighs 2 lbs, regardless of its contents. It has slots for up to 60 rounds of ammunition and four holster straps that can each hold a one-handed firearm. Additionally, the seven thin pockets on the bandoleer vest are extra-dimensional spaces meant to hold extra guns and gear. The four small pockets can each hold an additional 20 rounds of ammunition, a one-handed firearm, a set of artisan tools or a similarly sized object. The three large pockets are large enough to each hold a two-handed firearm or similarly sized object. The  bandoleer vest alters itself as needed to accommodate the contents. The wearer can draw an item stored in the bandoleer vest as easily as if from an ordinary pouch.",
	attunement : false,
	weight : 3,
};
MagicItemsList["empowering holster"] = {
	name : "Empowering Holster",
	source : ["GSE"],
	type : "wondrous item",
	rarity: "uncommon",
	description : "As a bonus action you can say the command phrase, 'I'm the fastest gun' to cast the Magic Weapon spell from it. The holster can’t be used this way again until the next dawn.",
	descriptionFull : "This leather holster can hold a pistol-sized firearm. As a bonus action it allows you to cast the Magic Weapon spell from it by whispering the command phrase, 'I'm the fastest gun.' This special ability can't be used again until the next dawn.",
	attunement : false,
	usages : 1,
	recovery : "dawn",
	additional : "Empowering Holster",
	action : [["bonus", "Empowering Holster"]],
		spellcastingBonus : {
		name : "Once per dawn",
		spells : ["magic weapon"],
		selection : ["magic weapon"],
		firstCol : "oncelr",
	},	
};
MagicItemsList["first"] = {
	name : "First",
	source : ["GSE"],
	type : "weapon (firearm)",
	rarity: "uncommon",
	description : "This rifle adds +1 to attack and damage rolls made with it. Once per dawn I can cast the Speak with Dead spell from it",
	descriptionFull : "This magical firearm adds +1 to attack and damage rolls made with it. The rifle has 1 charge. While holding it, you can use an action to expend that charge to cast the Speak with Dead spell from it. First regains an expended charge at dawn.",
	attunement : true,
	usages : 1,
	recovery : "dawn",
	additional : "Speak with Dead",
	action : [["action", " (Speak with Dead)"]],
		spellcastingBonus : {
		name : "Once per dawn",
		spells : ["speak with dead"],
		selection : ["speak with dead"],
		firstCol : "oncelr",
	},
	weaponsAdd : ["First"],
	weaponOptions : {
	baseWeapon : "rifle-gse",
	regExpSearch : /First/i,
	name : "First",
	source : ["GSE"],
	ability : 2,
	damage : [2, 6, "piercing"],
	range : "120/480 ft",
	weight : 10,
	description : "Two-handed, reload 2, misfire 2; ",
	abilitytodamage : true,
	ammo : "rifle bullets",
	modifiers : [1, 1]
	},
};
MagicItemsList["fishface special"] = {
	name : "Fishface",
	source : ["GSE"],
	type : "weapon (any firearm)",
	rarity : "unknown",
	description : "This firearm suffers no penalties underwater",
	descriptionFull : "This weapon functions normally while underwater and suffers no penalties. The weapon is decorated with fish and shell motifs. ",
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Fishface"],
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return inObj.list != "firearm";
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.list == "firearm" && (/fishface/i).test(v.WeaponText)) {
					fields.Description += (fields.Description ? '; ' : '') + 'no underwater penalties';
				}
			},
			'If I include the word "Fishface" in a the name of a firearm, it will be treated as the magic item Fishface Special. It suffers no underwater penalties.'
		]
	}
};
MagicItemsList["get to stepping boots"] = {
		name : "Get to Stepping Boots",
		source : ["GSE"],
		type : "wondrous item",
		rarity : "rare",
		attunement : true,
		description : "While I wear these boots, +10 ft walking speed. In addition, as a reaction I can jump up to twice my normal distance without provoking opportunity attacks.",
		descriptionFull : "While you wear these boots, your walking speed increases by 10 feet. In addition, as a reaction, you can jump up to twice your normal jumping distance. While you are jumping in this manner, your movement does not provoke opportunity attacks.",
		speed : { walk : {spd : "+10", enc : "+10" } },
		action : ["reaction", " (jump)"]
	};
MagicItemsList["glorious gloves of bucket beckoning"] = {
		name : "Glorious Gloves of Bucket Beckoning",
		source : ["GSE"],
		type : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		description : "I can use a bonus action to beckon a bucket into either or both of my empty hands. Buckets can be dismissed with a bonus action or by releasing the handle.",
		descriptionFull : "You cannot wear any other kind of handwear or rings while wearing these gloves. You can take a Bonus Action on your turn to make the somatic command gesture to summon a bucket into either or both of your empty hands. If you let go of a bucket's handle or use a Bonus Action to dismiss either or both buckets, it and all of its contents disappear until summoned again. The contents of the buckets are not magically preserved and will be normally affected by the passage of time. Each bucket weighs 2 pounds while empty and can hold 3 gallons of liquid or 1/2 cubic foot (15 pounds) of solid material.",
		action : ["bonus action", "Beckon/Dismiss Bucket(s)"]
	};
MagicItemsList["hushed gun"] = {
	name : "Hushed Gun",
	source : ["GSE"],
	type : "weapon (any firearm)",
	rarity : "unknown",
	description : "This firearm produces no muzzle flare and is silent when fired. With this firearm, when I'm hidden from a creature and miss it, my position is not revealed unless it was a misfire. When I am hidden from a creature and hit it, I can reroll one of the attack's damage dice, and must use the new roll",
	descriptionFull : "Firearms made of or coated with hush-metal produce no muzzle flare and are almost entirely silent when fired. When you are hidden from a creature and miss it with an attack with this weapon, making the attack doesn't reveal your position unless it was a misfire. When you are hidden from a creature and hit it with an attack with this weapon, you can reroll one of the attack's damage dice, and you must use the new roll",
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Hushed"],
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return inObj.list != "firearm";
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.list == "firearm" && (/hushed/i).test(v.WeaponText)) {
					fields.Description += (fields.Description ? '; ' : '') + 'if Hidden = reroll 1 damage die on hit, stay Hidden if miss';
				}
			},
			'If I include the word "Hushed" in the name of a firearm, it will be treated as the magic item Hushed Gun. Whenever it is fired while Hidden, reroll 1 damage die on a hit or remain Hidden on a miss (unless it was a misfire).'
		]
	}
};
MagicItemsList["longsight scope"] = {
	name : "Longsight Scope",
	source : ["GSE"],
	type : "wondrous item",
	rarity : "common",
	description : "By pressing this scope to a firearm for 10 minutes, it attaches itself to the weapon. I can then use that weapon at long range without disadvantage. Once attached, it can't be removed unless my attunement ends, I detach it as an action, or the weapon is destroyed.",
	descriptionFull : "Objects viewed through the scope are magnified to twice their size. This lens allows you to attack at long range without disadvantage on your ranged weapon attack rolls. For this property to work, you must attach the scope to a firearm by pressing it against the weapon for at least 10 minutes. Thereafter, the scope can't be removed unless you detach it as an action or the weapon is destroyed. Not even an antimagic field causes it to fall off. The scope does fall off the weapon if your attunement to it ends.",
	attunement : true,
	action : ["action", " Detach"],
};
MagicItemsList["lucky hat"] = {
		name : "Lucky Hat",
		source : ["GSE"],
		type : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		description : "While wearing this hat, any creature who critically hits me with a ranged attack must succeed on a DC 13 Wisdom saving throw or be charmed by me until the end of its next turn.",
		descriptionFull : "While wearing this hat, any creature who critically hits you with a ranged attack must succeed on a DC 13 Wisdom saving throw or be charmed by you until the end of its next turn.",
	};
MagicItemsList["marshal's pardon"] = {
	name : "Marshal's Pardon",
	source : ["GSE"],
	type : "weapon (heavy pistol)",
	rarity: "rare",
	description : "This magical pistol adds +2 to attack and damage rolls made with it, and can render enemies reduced to 0 hit points unconscious instead of dead or dying",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic firearm. This pistol allows you to decide to render a victim unconscious instead of dying or dead when you reduce it to 0 hit points. (Normally, you can only do so with a melee weapon.)",
	attunement : true,
	weaponsAdd : ["Marshal's Pardon"],
	weaponOptions : {
	baseWeapon : "heavy pistol",
	regExpSearch : /Marshal's Pardon/i,
	name : "Marshal's Pardon",
	source : ["GSE"],
	ability : 2,
	damage : [1, 10, "piercing"],
	range : "60/120 ft",
	weight : 5,
	description : "Reload 6, misfire 2; can render unconscious instead of dead/dying",
	abilitytodamage : true,
	ammo : "pistol bullets",
	modifiers : [2, 2]
	},
};
MagicItemsList["perpetual feedbag"] = {
		name : "Perpetual Feedbag",
		source : ["GSE"],
		type : "wondrous item",
		rarity : "uncommon",
		description : "Each time I complete a long rest, this saddlebag magically fills with enough food to feed five Medium (or smaller) or one Large creature(s).",
		descriptionFull : "Each time you complete a long rest, this saddlebag magically fills with enough food to feed five Medium (or smaller) or one Large creature(s). The food is bland but nourishing, and spoils if uneaten after 24 hours.",
		weight : 8
	};
MagicItemsList["silversheen oil"] = {
		name : "Silversheen Oil",
		source : ["GSE"],
		type : "potion",
		rarity : "uncommon",
		description : "This clear, slick oil sparkles with tiny silver specks. The oil can coat one weapon or up to 8 pieces of ammunition. Applying the oil takes 1 minute. For 1 hour, the coated ammo or item is magical and counts as silvered.",
		descriptionFull : "This clear, slick oil sparkles with tiny silver specks. The oil can coat one weapon or up to 8 pieces of ammunition. Applying the oil takes 1 minute. For 1 hour, the coated ammo or item is magical and counts as silvered.",
		weight : 0.5
	};
MagicItemsList["snake-waker"] = {
	name : "Snake-Waker",
	source : ["GSE"],
	type : "weapon (any firearm)",
	rarity : "unknown",
	attunement : true,
	description : "This magical firearm adds +2 to attack and damage rolls made with it. Advantage on initiative roll when wielded. Maximum damage against surprised enemies.",
	descriptionFull : "This magical firearm adds +2 to attack and damage rolls made with it. Whenever you roll for initiative, this weapon magically leaps into your hand(s) unless you choose for it not to do so. As long as the weapon is in your hand(s) when you roll for initiative, you gain advantage on the roll. Furthermore, the weapon deals maximum damage against surprised enemies.",
	allowDuplicates : true,
	advantages : [["Initiative", true]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Snake-Waker"],
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return inObj.list != "firearm";
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.list == "firearm" && (/snake-waker/i).test(v.WeaponText)) {
					fields.Description += (fields.Description ? '; ' : '') + 'maximum damage vs surprised opponents';
				}
			},
			'If I include the word "Snake-Waker" in a the name of a firearm, it will be treated as the magic item Snake-Waker Gun. +2 to attack and damage rolls, advantage on initiative rolls when wielded and maximum damage against surprised oppenents.'
		],
			atkCalc : [
				function (fields, v, output) {
					if (v.theWea.list == "firearm" && (/snake-waker/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			],
	}
};
MagicItemsList["the messenger"] = {
		name : "The Messenger",
		source : ["GSE"],
		type : "weapon (long rifle)",
		rarity : "legendary",
		description : "+3 bonus to attack and damage rolls. I can attack and use command phrase to make target my sworn enemy. Attacks vs. sworn enemy get advantage, do +3d6 damage, ignore cover (not full), and suffer no disadvan. from long range. While my sworn enemy lives, I have disadvan. when I use other weapons.",
		descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you use this weapon to make a ranged attack and say its command phrase \"I've come to deliver.\", the target of that attack becomes your sworn enemy until it dies or until dawn. You can have only one such sworn enemy at a time and when it dies, you can choose a new one after the next dawn. Your ranged attack rolls with this weapon against your sworn enemy have advantage, do +3d6 piercing damage, ignore all cover except full, and don't suffer disadvantage due to long range. While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.",
		attunement : true,
		weight : 2,
		weaponsAdd : ["The Messenger"],
		weaponOptions : {
			baseWeapon : "long rifle",
			regExpSearch : /the messenger/i,
			name : "The Messenger",
			source : ["GSE"],
			ability : 2,
			type: "Firearms",
			damage : [2, 12, "piercing"],
			range : "200/800 ft",
			weight : 20,
			description : "Two-handed, reload 1, misfire 2; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties",
			abilitytodamage : true,
			ammo : "rifle bullets",		
			modifiers : [3, 3],
		}
};
