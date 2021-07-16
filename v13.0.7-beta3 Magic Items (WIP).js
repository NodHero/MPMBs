var iFileName = "v13.0.7-beta3 Magic Items.js"; 
RequiredSheetVersion(13);

// Wildemount
MagicItemsList["acheron blade"] = {
	name : "Acheron Blade",
	nameTest : "Acheron",
	source : ["W", 265],
	type : "weapon (any sword)",
	rarity : "rare",
	description : "This sword gives +1 to hit and damage. I am immune to effects that turn undead. Action to gain 1d4 + 4 temp hp. Once per dusk, I can give target disadvantage on their next saving throw until the end of my next turn.",
	descriptionFull : "The black blade of this sword is crafted from a mysterious arcane alloy. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you are immune to effects that turn undead. Dark Blessing: While holding the sword, you can use an action to give yourself 1d4 + 4 temporary hit points. This property can't be used again until the next dusk. Disheartening Strike: When you hit a creature with an attack using this weapon, you can fill the target with unsettling dread: the target has disadvantage on the next saving throw it makes before the end of your next turn. The creature ignores this effect if it's immune to the frightened condition. Once you use this property, you can't do so again until the next dusk.",
	attunement : true,
	action : [["action", " (Dark Blessing)"]], 
	savetxt : { immune : ["effects that turn undead"] },
	extraLimitedFeatures : [{
			name : "Acheron Blade (Dark Blessing)",
			usages : 1,
			recovery : "dusk"
		}, {
			name : "Acheron Blade (Disheartening Strike)",
			usages : 1,
			recovery : "dusk"
		}],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "blade"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/acheron/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Action 1d4+4 temp hp; Can give target disadv on next save; see item info';
				}
			},
			'If I include the words "Acheron" in a the name of a sword, it will be treated as the magic weapon Blade of the Medusa.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/acheron/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, 
			'+1 to attack and damage rolls'
		]
	}
};
MagicItemsList["amulet of the drunkard"] = {
	name : "Amulet of the Drunkard",
	source : ["W", 265],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This amulet smells of old, ale-stained wood. While wearing it, you can regain 4d4 + 4 hit points when you drink a pint of beer, ale, mead, or wine. Once the amulet has restored hit points, it can't do so again until the next dawn.",
	descriptionFull : "This amulet smells of old, ale-stained wood. While wearing it, you can regain 4d4 + 4 hit points when you drink a pint of beer, ale, mead, or wine. Once the amulet has restored hit points, it can't do so again until the next dawn.",
	usages : 1, 
	recovery: "dawn",
};
MagicItemsList["arcane cannon"] = {
	name : "Arcane Cannon",
	source : ["W", 265],
	type : "wondrous item",
	rarity : "very rare",
	description : "This Large cannon is imbued with magic. It requires no ammunition and doesn't need to be loaded. It takes one action to aim the cannon and one action to fire it. Recharge 5 minutes. The creature firing the cannon chooses the effect from options listed on the notes page.",
	descriptionFull : "This Large cannon is imbued with magic. It requires no ammunition and doesn't need to be loaded. It takes one action to aim the cannon and one action to fire it. After the cannon has fired, it must recharge for 5 minutes before it can be fired again.\n  The creature firing the cannon chooses the effect from the following options:\n" + [
	toUni("Acid Jet") + ". The cannon discharges acid in a line 300 feet long and 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 22 (4d10) acid damage on a failed save, or half as much damage on a successful one. In addition, a creature that fails its saving throw takes 11 (2d10) acid damage at the start of each of its turns; a creature can end this damage by using its action to wash off the acid with a pint or more of water.",
	toUni("Fire Jet") + ". The cannon discharges fire in a line 300 feet long and 5 feet wide. Each creature in the area must make a DC 15 Dexterity saving throw, taking 33 (6d10) fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.",
	toUni("Frost Shot") + ". The cannon shoots a ball of frost to a point you can see within 1,200 feet of the cannon. The ball then expands to form a 30-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, a creature takes 22 (4d10) cold damage, and its speed is reduced by 10 feet for 1 minute. On a successful save, the creature takes half as much damage, and its speed isn't reduced. A creature whose speed is reduced by this effect can repeat the save at the end of each of its turns, ending the effect on itself on a success.",
	toUni("Lightning Shot") + ". The cannon shoots a ball of lightning to a point you can see within 1,200 feet of the cannon. The lightning then expands to form a 20-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Dexterity saving throw, taking 33 (6d10) lightning damage on a failed save, or half as much damage on a successful one. Creatures wearing metal armor have disadvantage on the save.",
	toUni("Poison Spray") + ". The cannon expels poison gas in a 60-foot cone. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, the creature takes 22 (4d10) poison damage and is poisoned for 1 minute. On a successful save, the creature takes half as much damage and isn't poisoned. A creature poisoned in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	].join("\n \u2022 "),
	action : [["action", " (Aim)"], ["action", " (Fire)"]],
	toNotesPage : [{
		name : "Arcane Cannon",
		note: [
		"This Large cannon is imbued with magic. It requires no ammunition and doesn't need to be loaded. It takes one action to aim the cannon and one action to fire it. After the cannon has fired, it must recharge for 5 minutes before it can be fired again.",
		"The creature firing the cannon chooses the effect from the following options:",
		"\u2022 Acid Jet. The cannon discharges acid in a line 300 feet long and 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 22 (4d10) acid damage on a failed save, or half as much damage on a successful one. In addition, a creature that fails its saving throw takes 11 (2d10) acid damage at the start of each of its turns; a creature can end this damage by using its action to wash off the acid with a pint or more of water.",
		"\u2022 Fire Jet. The cannon discharges fire in a line 300 feet long and 5 feet wide. Each creature in the area must make a DC 15 Dexterity saving throw, taking 33 (6d10) fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.",
		"\u2022 Frost Shot. The cannon shoots a ball of frost to a point you can see within 1,200 feet of the cannon. The ball then expands to form a 30-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, a creature takes 22 (4d10) cold damage, and its speed is reduced by 10 feet for 1 minute. On a successful save, the creature takes half as much damage, and its speed isn't reduced. A creature whose speed is reduced by this effect can repeat the save at the end of each of its turns, ending the effect on itself on a success.",
		"\u2022 Lightning Shot. The cannon shoots a ball of lightning to a point you can see within 1,200 feet of the cannon. The lightning then expands to form a 20-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Dexterity saving throw, taking 33 (6d10) lightning damage on a failed save, or half as much damage on a successful one. Creatures wearing metal armor have disadvantage on the save.",
		"\u2022 Poison Spray. The cannon expels poison gas in a 60-foot cone. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, the creature takes 22 (4d10) poison damage and is poisoned for 1 minute. On a successful save, the creature takes half as much damage and isn't poisoned. A creature poisoned in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		]
	}]
};
MagicItemsList["battering shield"] = {
	name : "Battering Shield",
	source : ["W", 266],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "This shield gives me a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC. It has 3 charges. When I am holding the shield and push a creature 5 feet away, I can expend 1 charge to push that creature an additional 10 feet, knock it prone, or both.",
	descriptionFull : "While holding this iron tower shield, you gain a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC./n Additionally, the shield has 3 charges, and it regains 1d3 expended charges daily at dawn. If you are holding the shield and push a creature within your reach at least 5 feet away, you can expend 1 charge to push that creature an additional 10 feet, knock it prone, or both.",
	usages : 3, 
	recovery: "dawn",
	shieldAdd : ["Battering Shield", 3]
};
MagicItemsList["bloodaxe"] = {
	name : "Bloodaxe",
	source : ["W", 265],
	type : "weapon (greataxe)",
	rarity : "very rare",
	attunement : true,
	description : "This magic greataxe grants a +2 bonus to attack and damage rolls, and deals an additional 1d6 necrotic damage to constructs and undead. If you reduce a creature to 0 hit points with an attack using this axe, you gain 10 temporary hit points.",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic axe. The axe deals an extra 1d6 necrotic damage to creatures that aren't constructs or undead. If you reduce such a creature to 0 hit points with an attack using this axe, you gain 10 temporary hit points./n This axe is forged from a dark, rust-colored metal and once belonged to the goliath barbarian Grog Strongjaw of Vox Machina.",
	weaponsAdd : ["Bloodaxe"],
	weaponOptions : {
		baseWeapon : "greataxe",
		regExpSearch : /bloodaxe/i,
		name : "Bloodaxe",
		source : ["W", 266],
		range : "Melee",
		damage : [1, 12, "slashing"],
		description : "Heavy, two-handed; +1d6 necrotic to all creatures except constructs and undead",
		modifiers : [2, 2]
	},
};
MagicItemsList["breathing bubble"] = {
	name : "Breathing Bubble",
	source : ["W", 266],
	type : "wondrous item",
	rarity : "common",
	description : "This translucent, bubble-like sphere has a slightly tacky outer surface, and you gain the item's benefits only while wearing it over your head like a helmet. The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn.",
	descriptionFull : "This translucent, bubble-like sphere has a slightly tacky outer surface, and you gain the item's benefits only while wearing it over your head like a helmet. The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn.",
	usages : 1,
	recovery : "dawn",
};
MagicItemsList["brooch of living essence"] = {
	name : "Brooch of Living Essence",
	source : ["W", 266],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "While wearing this nondescript brooch, spells and anything else that would detect or reveal your creature type treat you as humanoid, and those that would reveal your alignment treat it as neutral.",
	descriptionFull : "While wearing this nondescript brooch, spells and anything else that would detect or reveal your creature type treat you as humanoid, and those that would reveal your alignment treat it as neutral.",
};
MagicItemsList["butcher's bib"] = {
	name : "Butcher's Bib",
	source : ["W", 266],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "Once per turn when you roll damage for a melee attack with a weapon, you can reroll the weapon's damage dice. If you do so, you must use the second total. Your weapon attacks that deal slashing damage score a critical hit on a roll of 19 or 20 on the d20.",
	descriptionFull : "This black leather apron is perpetually covered by blood, even after being washed off. You gain the following benefits while wearing the apron:/n Once per turn when you roll damage for a melee attack with a weapon, you can reroll the weapon's damage dice. If you do so, you must use the second total. Your weapon attacks that deal slashing damage score a critical hit on a roll of 19 or 20 on the d20.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isSpell && !v.CritChance && v.theWea.damage[2] == "slashing") {
					fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20 (Butchers Bib)';
					v.CritChance = 19;
				}
				if (!v.isSpell && v.theWea.list == "melee") {
				fields.Description += (fields.Description ? '; ' : '') + '1/turn reroll damage, use 2nd result (Butchers Bib)';
				}
			},
			"My weapon attacks that deal slashing damage score a critical on a to hit roll of both 19 and 20. Once per turn, I can reroll the damage of a melee weapon attack and must use the second result."
		]
	}
};
MagicItemsList["coin of delving"] = {
	name : "Coin of Delving",
	source : ["W", 266],
	type : "wondrous item",
	rarity : "common",
	description : "This scintillating copper coin sheds dim light in a 5-foot radius. If dropped a distance greater than 5 feet, the coin issues a melodious ringing sound when it hits a surface. Any creature that can hear the chime can determine the distance the coin dropped based on the tone.",
	descriptionFull : "This scintillating copper coin sheds dim light in a 5-foot radius. If dropped a distance greater than 5 feet, the coin issues a melodious ringing sound when it hits a surface. Any creature that can hear the chime can determine the distance the coin dropped based on the tone.",
};
MagicItemsList["corpse slayer"] = {
	name : "Corpse Slayer",
	nameTest : "Corpse Slaying",
	source : ["W", 265],
	type : "weapon (any)",
	rarity : "rare",
	attunement : true,
	description : "You gain a +1 bonus to attack and damage rolls made with this magic weapon. On hit vs undead, +1d8 damage of the weapon's type and target has disadvantage on saves vs effects that turn undead until the start of your next turn.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n When you hit an undead creature with an attack using this weapon, the attack deals an extra 1d8 damage of the weapon's type, and the creature has disadvantage on saving throws against effects that turn undead until the start of your next turn.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Corpse Slayer"],
		descriptionChange : ["replace", "weapon"],
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*corpse)(?=.*slayer).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d8 damage vs undead; target has disadv against turn undead';
				}
			},
			'If I include the words "Corpse Slayer" in a the name of a weapon, it will be treated as the magic weapon Corpse Slayer Weapon, which has a +1 bonus, +1d8 damage vs undead, and target disadv on turn undead effects on hit.'
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/^(?=.*corpse)(?=.*slayer).*$/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["dispelling stone"] = {
	name : "Dispelling Stone",
	source : ["W", 266],
	type : "wondrous item",
	rarity : "very rare",
	usages : 1,
	recovery : "Never",
	description : "This smooth, rainbow-colored, egg-shaped stone can be thrown up to 30 feet and explodes in a 10-foot-radius sphere of magical energy on impact, destroying the stone. Any active spell of 5th level or lower in the sphere ends.",
	descriptionFull : "This smooth, rainbow-colored, egg-shaped stone can be thrown up to 30 feet and explodes in a 10-foot-radius sphere of magical energy on impact, destroying the stone. Any active spell of 5th level or lower in the sphere ends.",
};
MagicItemsList["duskcrusher"] = {
	name : "Duskcrusher",
	source : ["W", 266],
	type : "weapon (warhammer)",
	rarity : "very rare",
	attunement : true,
	description : "Bonus action transform to a warhammer, action to dismiss it. While transformed, radiant head sheds sunlight bright 15 ft, dim additional 15 ft. Also while transformed: +2 attack/damage, does radiant instead of bludgeoning, +1d8 to undead, 1/dawn action to cast Sunbeam (DC 15). See notes page.",
	descriptionFull : "This item takes the form of a leather-wrapped metal rod emblazoned with the symbol of Pelor, the Dawn Father. While grasping the rod, you can use a bonus action to cause a warhammer head of crackling radiance to spring into existence. The warhammer's radiant head emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. You can use an action to make the radiant head disappear.\n While the radiant head is active, you gain a +2 bonus to attack and damage rolls made with this magic weapon, and attacks with the weapon deal radiant damage instead of bludgeoning damage. An undead creature hit by the weapon takes an extra 1d8 radiant damage.\n While you are holding Duskcrusher and its radiant head is active, you can use an action to cast the sunbeam spell (save DC 15) from the weapon, and this action can't be used again until the next dawn.",
	action : [["bonus action", " (transform)"], ["action", " (dismiss)"], ["action", " (Sunbeam)"]],
	extraLimitedFeatures : [{
		name : "Duskcrusher (Sunbeam)",
		usages : 1,
		recovery : "dawn"
	}],	
	weaponsAdd : ["Duskcrusher"],
	weaponOptions : {
		baseWeapon : "warhammer",
		regExpSearch : /duskcrusher/i,
		name : "Duskcrusher",
		source : ["W", 266],
		range : "Melee",
		damage : [1, 8, "radiant"],
		description : "Versitile (1d10); +1d8 damage vs undead",
		modifiers : [2, 2]
	},
	fixedDC : 15,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["sunbeam"],
		selection : ["sunbeam"],
		firstCol : 'oncelr',
		modifiers : ["dc+7", ""]
	},
	toNotesPage : [{
		name : "Features",
		popupName : "Features of Duskcrusher",
		note: "\n  \u2022 Duskcrusher (EGtW 266)" + desc([
		"While grasping the rod, you can use a bonus action to cause a warhammer head of crackling radiance to spring into existence. The warhammer's radiant head emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. You can use an action to make the radiant head disappear.",
		"While the radiant head is active, you gain a +2 bonus to attack and damage rolls made with this magic weapon, and attacks with the weapon deal radiant damage instead of bludgeoning damage. An undead creature hit by the weapon takes an extra 1d8 radiant damage.",
		"While you are holding Duskcrusher and its radiant head is active, you can use an action to cast the sunbeam spell (save DC 15) from the weapon, and this action can't be used again until the next dawn.",
		])
	}]
};
MagicItemsList["dust of deliciousness"] = {
	name : "Dust of Deliciousness",
	source : ["W", 267],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This reddish brown dust can be sprinkled over any edible substance to greatly improve the flavor. The dust also dulls the eater's senses: anyone eating food treated with this dust has disadvantage on Wisdom ability checks and Wisdom saving throws for 1 hour. There is enough dust to flavor six servings.",
	descriptionFull : "This reddish brown dust can be sprinkled over any edible substance to greatly improve the flavor. The dust also dulls the eater's senses: anyone eating food treated with this dust has disadvantage on Wisdom ability checks and Wisdom saving throws for 1 hour. There is enough dust to flavor six servings.",
	usages : 6,
	recovery : "Never",
};
MagicItemsList["goggles of object reading"] = { //Identify takes a minute to cast. Removed the action.
	name : "Goggles of Object Reading",
	source : ["W", 267],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "While wearing these goggles, you have advantage on Intelligence (Arcana) checks made to reveal information about a creature or object you can see. In addition, you can cast the identify spell using the googles. Once you do so, you can't do so again until the next dawn.",
	descriptionFull : "These leather-framed goggles feature purple crystal lenses. While wearing the goggles, you have advantage on Intelligence (Arcana) checks made to reveal information about a creature or object you can see. In addition, you can cast the identify spell using the googles. Once you do so, you can't do so again until the next dawn.",
	extraLimitedFeatures : [{
		name : "Goggles of Object Reading (Identify)",
		usages : 1,
		recovery : "dawn"
	}],	
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["identify"],
		selection : ["identify"],
		firstCol : 'oncelr',
	},
};
MagicItemsList["hunter's coat"] = {
	name : "Hunter's Coat",
	source : ["W", 267],
	type : "armor (leather)",
	rarity : "very rare",
	attunement : true,
	description : "You have a +1 bonus to AC while wearing this armor. The coat has 3 charges. When you hit a creature with an attack and that creature doesn't have all its hit points, you can expend 1 charge to deal an extra 1d10 necrotic damage to the target. The coat regains 1d3 expended charges at dawn.",
	descriptionFull : "You have a +1 bonus to AC while wearing this armor. The coat has 3 charges. When you hit a creature with an attack and that creature doesn't have all its hit points, you can expend 1 charge to deal an extra 1d10 necrotic damage to the target. The coat regains 1d3 expended charges daily at dawn.",
	extraLimitedFeatures : [{
		name : "Hunter's Coat",
		usages : 3,
		recovery : "dawn"
	}],	
	armorAdd : "Hunter's Coat (Leather)",
	armorOptions : {
		regExpSearch : /^(?=.*hunter's)(?=.*coat)(?=.*leather).*$/i,
		name : "Hunter's Coat (Leather)",
		source : ["W", 267],
		type : "light",
		ac : 12,
		weight : 10
	},
};
MagicItemsList["last stand armor"] = {
	name : "Last Stand Armor",
	nameTest : "Last Stand",
	source : ["W", 267],
	type : "armor (any)",
	rarity : "very rare",
	description : "You have a +1 bonus to AC while wearing this armor. If you die while wearing the armor, it is destroyed, and each celestial, fey, and fiend with 30 feet of you must succeed on a DC 15 Charisma saving throw or be banished to its home plane of existence, unless it is already there.",
	descriptionFull : "You have a +1 bonus to AC while wearing this armor, which shimmers softly. If you die while wearing the armor, it is destroyed, and each celestial, fey, and fiend with 30 feet of you must succeed on a DC 15 Charisma saving throw or be banished to its home plane of existence, unless it is already there.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["suffix", "+1 Last Stand"]
	},
	extraLimitedFeatures : [{
		name : "Last Stand Armor",
		usages : 1,
		recovery : "Never"
	}],	
};
MagicItemsList["luxon beacon"] = {
	name : "Luxon Beacon",
	source : ["W", 268],
	type : "wondrous item",
	rarity : "legendary",
	description : "Once per dawn, the Luxon can grant a Fragment of Possibility, allowing the affected creature to roll an extra d20 for attacking, being attacked, an ability check, or a saving throw before the outcome is determined. If a creature consecuted to the Luxon dies within 100 miles of it, they are reincarnated. See notes.",
	descriptionFull : "This dodecahedron of faintly glowing crystal is heavier than it appears. A set of handles are affixed to its sides, and it pulsates and thrums when touched.\n" + [
	toUni("Fragment of Possibility") + ". A creature that touches the beacon and concentrates for 1 minute receives a Fragment of Possibility, which looks like a Tiny, grayish bead of energy that follows the creature around, staying within 1 foot of it at all times. The fragment lasts for 8 hours or until used. Once the beacon grants a Fragment of Possibility, it can't grant another until the next dawn. A creature with a Fragment of Possibility from a Luxon Beacon can't gain another Fragment of Possibility from any source.\n When a creature with a Fragment of Possibility makes an attack roll, an ability check, or a saving throw, it can expend its fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the creature, it can expend its fragment to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.\n If the original d20 roll has advantage or disadvantage, the creature rolls its d20 after advantage or disadvantage has been applied to the original roll.",
	toUni("Soul Snare") + ". If a follower of the Luxon who has undergone a ritual of consecution dies within 100 miles of a Luxon Beacon, their soul is ensnared by it. This soul will be reincarnated within the body of a random humanoid baby developing within 100 miles of the beacon.",
	].join("\n \u2022 "),
	extraLimitedFeatures : [{
		name : "Luxon Beacon (Fragment of Possibility)",
		usages : 1,
		recovery : "Dawn"
	}],	
	toNotesPage : [{
		name : "Features",
		popupName : "Features of the Luxon Beacon",
		note: "\n  \u2022 Luxon Beacon (EGtW 268)" + desc([
		"This dodecahedron of faintly glowing crystal is heavier than it appears. A set of handles are affixed to its sides, and it pulsates and thrums when touched.",
		"\u2022 Fragment of Possibility. A creature that touches the beacon and concentrates for 1 minute receives a Fragment of Possibility, which looks like a Tiny, grayish bead of energy that follows the creature around, staying within 1 foot of it at all times. The fragment lasts for 8 hours or until used. Once the beacon grants a Fragment of Possibility, it can't grant another until the next dawn. A creature with a Fragment of Possibility from a Luxon Beacon can't gain another Fragment of Possibility from any source.",
		"When a creature with a Fragment of Possibility makes an attack roll, an ability check, or a saving throw, it can expend its fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the creature, it can expend its fragment to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.",
		"If the original d20 roll has advantage or disadvantage, the creature rolls its d20 after advantage or disadvantage has been applied to the original roll.",
		"\u2022 Soul Snare. If a follower of the Luxon who has undergone a ritual of consecution dies within 100 miles of a Luxon Beacon, their soul is ensnared by it. This soul will be reincarnated within the body of a random humanoid baby developing within 100 miles of the beacon.",
		])
	}]
};
MagicItemsList["needle of mending"] = { // Mending has a 1 minute cast time, removed the action
	name : "Needle of Mending",
	source : ["W", 268],
	type : "weapon (dagger)",
	rarity : "rare",
	attunement : true,
	description : "This weapon is a magic dagger disguised as a sewing needle. You can use a bonus action to transform it into a dagger or back into a needle.You gain a +1 bonus to attack and damage rolls made with the dagger. While holding it, you can use an action to cast the mending cantrip from it.",
	descriptionFull : "This weapon is a magic dagger disguised as a sewing needle. When you hold it and use a bonus action to speak its command word, it transforms into a dagger or back into a needle.\n You gain a +1 bonus to attack and damage rolls made with the dagger. While holding it, you can use an action to cast the mending cantrip from it.",
	action : ["bonus action", " (transform)"],
	weaponsAdd : ["Needle of Mending"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*needle)(?=.*mending).*$/i,
		name : "Needle of Mending",
		source : ["W", 268],
		range : "20/60 ft",
		damage : [1, 4, "piercing"],
		description : "Finesse, light, thrown;",
		modifiers : [1, 1]
	},
	spellcastingBonus : {
		name : "at will",
		spells : ["mending"],
		selection : ["mending"],
		firstCol : 'atwill',
	},
};
MagicItemsList["nightfall pearl"] = {
	name : "Nightfall Pearl",
	source : ["W", 268],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	action : [["action", " (dispel)"]],
	description : "You can spend 10 minutes to activate this pearl, causing the area within 10 miles of it at the moment of activation to become night even if it is daytime. This night lasts for 24 hours, until you cancel it as an action, or until your attunement to the pearl ends. Once used, the pearl can't be used again for 24 hours.",
	descriptionFull : "Used to summon night, this 6-inch-diameter, jet-black orb is cold to the touch. You can spend 10 minutes to activate it, causing the area within 10 miles of it at the moment of activation to become night even if it is daytime. This night lasts for 24 hours, until you cancel it as an action, or until your attunement to the pearl ends. Once used, the pearl can't be used again for 24 hours.",
	extraLimitedFeatures : [{
		name : "Nightfall Pearl",
		usages : 1,
		recovery : "24hr"
	}],	
};
MagicItemsList["orb of the veil"] = { //added for items like Flame Tongue that include fire damage in the description
	name : "Orb of the Veil",
	source : ["W", 268],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "This orb increases your Wis score and max Wis score by 2, and is cursed. Gain darkvision to 60 ft, or +60 feet darkvision. Advantage on Wis checks to find hidden doors and paths. You become unwilling to part with it, nonmagical flames within 30 ft of you extinguish, and fire damage you deal is halved.",
	descriptionFull: "This onyx sphere bears deep, spiraling grooves and dangles from an iron chain. While the orb is on your person, you gain the following benefits:\n Your Wisdom score increases by 2, as does your maximum for that score.\n You gain darkvision out to a range of 60 feet. If you already have darkvision, the orb increases its range by 60 feet.\n You have advantage on Wisdom checks to find hidden doors and paths.\n   " + toUni("Curse") + ". The orb is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the orb, keeping it on your person at all times. All nonmagical flames within 30 feet of you automatically extinguish, and fire damage dealt by you is halved.",
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				var testRegex = /^(?=.*fire damage).*$/i;
				if (v.theWea.damage[2] == "fire" || !(testRegex).test(fields.description)) {
					fields.Description += (fields.Description ? '; ' : '') + 'fire damage halved (Orb of the Veil)';
				}
			},
			"All fire damage I deal is halved due to the Orb of the Veil."
		]
	},
	toNotesPage : [{
	name : "Features",
	popupName : "Features of the Orb of the Veil",
	note: "\n  \u2022 Magic Item (EGtW 268)" + desc([
	"This onyx sphere bears deep, spiraling grooves and dangles from an iron chain. While the orb is on your person, you gain the following benefits:",
	"\u2022 Your Wisdom score increases by 2, as does your maximum for that score.",
	"\u2022 You gain darkvision out to a range of 60 feet. If you already have darkvision, the orb increases its range by 60 feet.",
	"\u2022 You have advantage on Wisdom checks to find hidden doors and paths.",
		])
	}],
	eval : function() {
		MagicItemsList["manual of bodily health"].applyStatBonus("Orb of the Veil", "Wisdom");
	}
};
MagicItemsList["potion of maximum power"] = {
	name : "Potion of Maximum Power",
	source : ["W", 268],
	type : "potion",
	rarity : "rare",
	description : "The first time you cast a damage-dealing spell of 4th level or lower within 1 minute after drinking the potion, instead of rolling dice to determine the damage dealt, you can instead use the highest number possible for each die.",
	descriptionFull : "The first time you cast a damage-dealing spell of 4th level or lower within 1 minute after drinking the potion, instead of rolling dice to determine the damage dealt, you can instead use the highest number possible for each die.\n This glowing purple liquid smells of sugar and plum, but it has a muddy taste.",
};
MagicItemsList["potion of possibility"] = {
	name : "Potion of Possibility",
	source : ["W", 268],
	type : "potion",
	rarity : "very rare",
	description : "After drinking this potion you can two Fragments of Possibility. A Fragment may be expended to roll an extra d20 for attacking, being attacked, an ability check, or a saving throw before the outcome is determined. Each fragment lasts for 8 hours or until used.",
	descriptionFull : "When you drink this clear potion, you gain two Fragments of Possibility, each of which looks like a Tiny, grayish bead of energy that follows you around, staying within 1 foot of you at all times. Each fragment lasts for 8 hours or until used.\n When you make an attack roll, an ability check, or a saving throw, you can expend your fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against you, you can expend your fragment to roll a d20 and choose which of the d20s to use, the one you rolled or the one the attacker rolled.\n If the original d20 roll has advantage or disadvantage, you roll your d20 after advantage or disadvantage has been applied to the original roll.\n While you have one or more Fragments of Possibility from this potion, you can't gain another Fragment of Possibility from any source.",
	toNotesPage : [{
		name : "Features",
		popupName : "Features of a Potion of Possibility",
		note: "\n  \u2022 Potion of Possibility (EGtW 268)" + desc([
		"When you drink this clear potion, you gain two Fragments of Possibility, each of which looks like a Tiny, grayish bead of energy that follows you around, staying within 1 foot of you at all times. Each fragment lasts for 8 hours or until used.",
		"When you make an attack roll, an ability check, or a saving throw, you can expend your fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against you, you can expend your fragment to roll a d20 and choose which of the d20s to use, the one you rolled or the one the attacker rolled.",
		"If the original d20 roll has advantage or disadvantage, you roll your d20 after advantage or disadvantage has been applied to the original roll.",
		"While you have one or more Fragments of Possibility from this potion, you can't gain another Fragment of Possibility from any source.",
		])
	}]
};
MagicItemsList["reincarnation dust"] = {
	name : "Reincarnation Dust",
	source : ["W", 268],
	type : "wondrous item",
	rarity : "very rare",
	usages : 1,
	recovery : "Never",
	description : "When this small pouch of purple dust is sprinkled on a dead humanoid or a piece of a dead humanoid, the dust is absorbed by the remains. If willing, the dead creature returns to life with a new body as if the reincarnate spell had been cast on the remains.",
	descriptionFull : "When this small pouch of purple dust is sprinkled on a dead humanoid or a piece of a dead humanoid, the dust is absorbed by the remains. If willing, the dead creature returns to life with a new body as if the reincarnate spell had been cast on the remains.",
	spellcastingAbility : "class",
	spellcastingBonus : {
		spells : ["reincarnate"],
		selection : ["reincarnate"],
		times: 1
	},
};
MagicItemsList["ring of obscuring"] = {
	name : "Ring of Obscuring",
	source : ["W", 269],
	type : "ring",
	rarity : "uncommon",
	attunement : true,
	description : "This ring has 3 charges and regains 1d3 expended charges daily at dawn. As an action while wearing the ring, you can expend 1 of its charges to cast the fog cloud spell from it, with these changes: the cloud is centered on you when it first appears, and the spell lasts for 1 minute (no concentration required).",
	descriptionFull : "This band of iron resembles a skull and is cold to the touch. It has 3 charges and regains 1d3 expended charges daily at dawn. As an action while wearing the ring, you can expend 1 of its charges to cast the fog cloud spell from it, with the following changes: the cloud is centered on you when it first appears, and the spell lasts for 1 minute (no concentration required).",
	action : [["action", ""]],
	extraLimitedFeatures : [{
		name : "Ring of Obscuring",
		usages : 3,
		recovery : "Dawn"
	}],	
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["fog cloud"],
		selection : ["fog cloud"],
		firstCol : '1',
	},
	spellChanges : {
		"fog cloud" : {
			range : "Self",
			duration : "1 min",
			changes : "When I cast fog cloud with the Ring of Obscuring, the spell is centered on me and lasts for 1 minute (no concentration required).",
		}
	}
};
MagicItemsList["ring of temporal salvation"] = {
	name : "Ring of Temporal Salvation",
	source : ["W", 269],
	type : "ring",
	rarity : "rare",
	attunement : true,
	description : "If you die while wearing this ring, you vanish and reappear in an unoccupied space within 5 ft of the space you left. You have hp equal to 3d6 + Con mod. If your hp max is lower than the number of hp you regain, your hp max rises to a similar amount. Exhaustion reduced by 1. After use, this ring turns to dust.",
	descriptionFull : "If you die while wearing this gray crystal ring, you vanish and reappear in an unoccupied space within 5 feet of the space you left (or the nearest unoccupied space). You have a number of hit points equal to 3d6 + your Constitution modifier. If your hit point maximum is lower than the number of hit points you regain, your hit point maximum rises to a similar amount. If you have any levels of exhaustion, reduce your level of exhaustion by 1. Once the ring is used, it turns to dust and is destroyed.",
	extraLimitedFeatures : [{
		name : "Ring of Temporal Salvation",
		usages : 1,
		recovery : "Never"
	}],
};

MagicItemsList["rod of retribution"] = {
	name : "Rod of Retribution",
	source : ["W", 269],
	type : "rod",
	rarity : "uncommon",
	attunement : true,
	description : "The rod has 3 charges. When a creature you can see within 60 ft of you damages you , you can use your reaction to expend a charge to force the creature to make a DC 13 Dexterity saving throw. The creature takes 2d10 lightning damage on a failed save, or half as much damage on a successful one.",
	descriptionFull : "This adamantine rod is tipped with a glowing crystalline eye. The rod has 3 charges and regains all its expended charges daily at dawn.\n When a creature you can see within 60 feet of you damages you while you are holding this rod, you can use your reaction to expend 1 of the rod's charges to force the creature to make a DC 13 Dexterity saving throw. The creature takes 2d10 lightning damage on a failed save, or half as much damage on a successful one.",
	extraLimitedFeatures : [{
		name : "Rod of Retribution",
		usages : 3,
		recovery : "Dawn"
	}],
	action : [["reaction", ""]],
};
MagicItemsList["spell bottle"] = {
	name : "Spell Bottle",
	source : ["W", 269],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	description : "This bottle stores 1 spell of up to 5th level. While holding the bottle, you can cast the spell stored in it. It uses the spellcasting ability of the original caster. When you see a creature casting a spell within 60 ft of you, you can an empty bottle as a reaction in an attempt to interrupt the spell. See notes.",
	descriptionFull : "This glass bottle can store one spell of up to 5th level at a time. When found, roll a d6 and subtract 1; the total determines the level of spell in the bottle (the DM chooses the spell, and 0 means the bottle is empty). A swirling blue vapor fills the bottle while it contains a spell.\n When the bottle is empty, any creature can cast a spell of 1st through 5th level into it by touching it while casting. The spell has no effect other than to be stored in the bottle.\n While holding the bottle, you can cast the spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The bottle becomes empty once the spell is cast.\n If you're holding the empty bottle when you see a creature casting a spell within 60 feet of you, you can open the bottle as a reaction in an attempt to interrupt the spell. If the creature is casting a spell of 3rd level or lower, the spell has no effect, and it is stored in the bottle. If it is casting a spell of 4th level or higher, make an Intelligence check. The DC equals 10 + the spell's level. On a success, the spell has no effect, and it is stored in the bottle.",
	toNotesPage : [{
		name : "Features",
		popupName : "Features of a Spell Bottle",
		note: "\n  \u2022 Spell Bottle (EGtW 269)" + desc([
		"This glass bottle can store one spell of up to 5th level at a time. When found, roll a d6 and subtract 1; the total determines the level of spell in the bottle (the DM chooses the spell, and 0 means the bottle is empty). A swirling blue vapor fills the bottle while it contains a spell.",
		"When the bottle is empty, any creature can cast a spell of 1st through 5th level into it by touching it while casting. The spell has no effect other than to be stored in the bottle.",
		"While holding the bottle, you can cast the spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The bottle becomes empty once the spell is cast.",
		"If you're holding the empty bottle when you see a creature casting a spell within 60 feet of you, you can open the bottle as a reaction in an attempt to interrupt the spell. If the creature is casting a spell of 3rd level or lower, the spell has no effect, and it is stored in the bottle. If it is casting a spell of 4th level or higher, make an Intelligence check. The DC equals 10 + the spell's level. On a success, the spell has no effect, and it is stored in the bottle.",
		])
	}]
};
MagicItemsList["staff of dunamancy"] = {
	name : "Staff of Dunamancy",
	source : ["W", 270],
	type : "staff",
	rarity : "very rare",
	attunement : true,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function (v) { return classes.known.wizard ? true : false; },
	description : "This staff has 10 charges. You can use an action to expend charges to cast one of the following spells from it, with your save DC and spell attack bonus: fortune's favor (2 ch), pulse wave (3 ch), or gravity sinkhole (4 ch). Once per dawn, you can turn failed save vs spell targeting only you into a success.",
	descriptionFull : "This staff of polished gray wood bears numerous runes carved along its length. The staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into dust and is destroyed.\n While holding the staff, you can use an action to expend 2 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: fortune's favor (2 charges), pulse wave (3 charges), or gravity sinkhole (4 charges).\n  New Possibility. If you are holding the staff and fail a saving throw against a spell that targets only you, you can turn your failed save into a successful one. This property can't be used again until the next dawn.",
	extraLimitedFeatures : [{
		name : "Staff of Dunamancy (Charges)",
		usages : 10,
		recovery : "Dawn"
	}, {
		name : "Staff of Dunamancy (New Possibility)",
		usages : 1,
		recovery : "Dawn"
	}],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["fortune's favor"],
		selection : ["fortune's favor"],
		firstCol : 2,
		times : 1
	}, {
		name : "3 charges",
		spells : ["pulse wave"],
		selection : ["pulse wave"],
		firstCol : 3,
		times : 1
	}, {
		name : "4 charges",
		spells : ["gravity sinkhole"],
		selection : ["gravity sinkhole"],
		firstCol : 4,
		times : 1
	}],
	toNotesPage : [{
		name : "Features",
		popupName : "Features of Staff of Dunamancy",
		note: "\n  \u2022 Staff of Dunamancy (EGtW 270)" + desc([
		"This staff of polished gray wood bears numerous runes carved along its length. The staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into dust and is destroyed.",
		"While holding the staff, you can use an action to expend 2 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: fortune's favor (2 charges), pulse wave (3 charges), or gravity sinkhole (4 charges).",
		"New Possibility. If you are holding the staff and fail a saving throw against a spell that targets only you, you can turn your failed save into a successful one. This property can't be used again until the next dawn.",
		])
	}]
};
MagicItemsList["staff of the ivory claw"] = {
	name : "Staff of the Ivory Claw",
	source : ["W", 270],
	type : "staff",
	rarity : "rare",
	attunement : true,
	description : "This gray-and-cerulean staff is topped with a small dragon claw carved from ivory. While holding the staff, you gain a +1 bonus to spell attack rolls. Whenever you score a critical hit with a spell attack, the target takes an extra 3d6 radiant damage.",
	descriptionFull : "This gray-and-cerulean staff is topped with a small dragon claw carved from ivory. While holding the staff, you gain a +1 bonus to spell attack rolls. Whenever you score a critical hit with a spell attack, the target takes an extra 3d6 radiant damage.",
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 1;			
			},
			"While holding the Staff of the Ivory Claw, I have a +1 bonus to spell attack rolls."
		],
		atkAdd : [
			function (fields, v) {
				if (v.isSpell && !v.theWea.dc) {
					fields.Description += (fields.Description ? '; ' : '') + 'On crit, +3d6 radiant damage (Staff of the Ivory Claw)';
				}
			},
			"Whenever I score a critical hit with a spell attack, the target takes an extra 3d6 radiant damage."
		]
	},
};
MagicItemsList["vox seeker"] = {
	name : "Vox Seeker",
	source : ["W", 270],
	type : "wondrous item",
	rarity : "common",
	description : "This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up this clockwork device allows it to operate for 1 minute, to a maximum of 10 minutes, and turn into a Vox Seeker. This automaton is under the DM's control. A vox seeker reduced to 0 hit points is destroyed.",
	descriptionFull : "This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up the device allows it to operate for 1 minute, to a maximum of 10 minutes. While operational, the item uses the accompanying Vox Seeker stat block. This automaton is under the DM's control. A vox seeker reduced to 0 hit points is destroyed.",
	toNotesPage : [{
		name : "Features",
		popupName : "Features of a Vox Seeker",
		note: "\n  \u2022 Magic Item (EGtW 270)" + desc([
		"This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up the device allows it to operate for 1 minute, to a maximum of 10 minutes. While operational, the item uses the accompanying Vox Seeker stat block. This automaton is under the DM's control. A vox seeker reduced to 0 hit points is destroyed.\n",
		"Vox Seeker",
		"Tiny constuct, unaligned",
		"AC: 14 (natural armor)",
		"HP: 7 (2d4 + 2)",
		"Speed: 20 ft, climb 20 ft\n\nABILITY\tSCORE\tMODIFIER",
		"Str\t2\t-4",
		"Dex\t10\t+0",
		"Con\t12\t+1",
		"Int\t1\t-5",
		"Wis\t10\t+0",
		"Cha\t1\t-5\n",
		"Damage immunities: poison, psychic",
		"Condition immunities: blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
		"Senses: blindsight 60ft. (blind beyond this radius), passive Perception 10",
		"Languages: -",
		"Challenge: 1/8 (25 XP)\n",
		"Voice Lock. The vox seeker must move toward and attack the source of the nearest voice within 60 feet of it, to the exclusion of all other targets, for as long as it remains operational.",
		"Spider Climb. The vox seeker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.\n",
		"Actions:",
		"Pincer. Melee Weapon Attack: +2 to hit, reach 5ft., one target.",
		"Hit: 2 (1d4) piercing damage plus 3 lightning damage.",
		])
	}]
};
MagicItemsList["weapon of certain death"] = {
	name : "Weapon of Certain Death",
	nameTest : "of Certain Death",
	source : ["W", 270],
	type : "weapon (any)",
	rarity : "rare",
	description : "When you damage a creature with an attack using this magic weapon, the target can't regain hit points until the start of your next turn.",
	descriptionFull : "When you damage a creature with an attack using this magic weapon, the target can't regain hit points until the start of your next turn.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/certain death/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On hit, target cannot heal until start of my next turn';
				}
			},
			'If I include the words "Certain Death" in a the name of a weapon, it will be treated as the magic weapon Weapon of Certain Death. On a hit, the target cannot regain hit points until the start of my next turn.'
		]
	}
};

//Vestiges of Divergence
MagicItemsList["danoth's visor"] = {
	name : "Danoth's Visor",
	source : ["W", 270],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	description : "These mithral-frame goggles with clear diamond lenses were used by the evoker Danoth Oro to spot invisible enemies and scout areas from afar. See notes page for more information.",
	choices : ["dormant state", "awakened state", "exaulted state"],
	"dormant state" : {
		name : "Danoth's Visor: Dormant",
		vision : [["Danoth's Visor", "fixed 60"]],
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Danoth's Visor",
			note : "\n  \u2022 Dormant State (EGtW 270)" + desc([
				"The wearer can see normally in darkness, both magical and nonmagical, to a distance of 60 feet.",
				"The wearer has advantage on Intelligence (Investigation) and Wisdom (Perception) checks that rely on sight.",
			])  
		}]
	},
	"awakened state" : {
		name : "Danoth's Visor: Awakened",
		vision : [["Danoth's Visor", "fixed 60"]],
		action : [["bonus action", " (see thru matter)"], ["bonus action", " (spyglass mode)"]], 
		extraLimitedFeatures : [{
			name : "Danoth's Visor (see thru matter)",
			usages : 1,
			recovery : "dawn"
		}],
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Danoth's Visor",
			note : "\n  \u2022 Dormant State (EGtW 270)" + desc([
				"The wearer can see normally in darkness, both magical and nonmagical, to a distance of 60 feet.",
				"The wearer has advantage on Intelligence (Investigation) and Wisdom (Perception) checks that rely on sight.",
			]) + "\n  \u2022 Awakened State (EGtW 270)" + desc([
				"The wearer sees invisible creatures and objects within 60 feet as if they were visible, and they can see into the Ethereal Plane.",
				"Using a bonus action, the wearer can speak a command word and use the goggles to see into and through solid matter. This vision has a radius of 60 feet and lasts for 1 minute. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead. This property can't be used again until the next dawn.",	
				"As a bonus action, the wearer can speak a command word to switch the goggles into spyglass mode. While in this mode, creatures and objects viewed through the goggles are magnified to twice their size.",
			]) 
		}]
	},
	"exaulted state" : {
		name : "Danoth's Visor: Exaulted",
		vision : [["Danoth's Visor", "fixed 60"]],
		action : [["action", " (Antimagic Field)"], ["bonus action", " (see thru matter)"], ["bonus action", " (spyglass mode)"]],
		extraLimitedFeatures : [{
			name : "Danoth's Visor (see thru matter)",
			usages : 1,
			recovery : "dawn"
		}, {
			name : "Danoth's Visor (Antimagic Field)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingAbility : "class",
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["antimagic field"],
			selection : ["antimagic field"],
			firstCol : 'oncelr',
			times : 1
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Danoth's Visor",
			note : "\n  \u2022 Dormant State (EGtW 270)" + desc([
				"The wearer can see normally in darkness, both magical and nonmagical, to a distance of 60 feet.",
				"The wearer has advantage on Intelligence (Investigation) and Wisdom (Perception) checks that rely on sight.",
			]) + "\n  \u2022 Awakened State (EGtW 270)" + desc([
				"The wearer sees invisible creatures and objects within 60 feet as if they were visible, and they can see into the Ethereal Plane.",
				"Using a bonus action, the wearer can speak a command word and use the goggles to see into and through solid matter. This vision has a radius of 60 feet and lasts for 1 minute. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead. This property can't be used again until the next dawn.",	
				"As a bonus action, the wearer can speak a command word to switch the goggles into spyglass mode. While in this mode, creatures and objects viewed through the goggles are magnified to twice their size.",
			]) + "\n  \u2022 Exaulted State (EGtW 270)" + desc([
				"The wearer automatically detects illusions he or she can see and automatically succeeds on saving throws against them. In addition, they see a bright aura around any creature that isn't in its true form.",
				"As an action, the wearer can cast the antimagic field spell from the visor. This property can't be used again until the next dawn.",
			]) 
		}]
	}
};
MagicItemsList["hide of the feral guardian"] = {
	name : "Hide of the Feral Guardian",
	source : ["W", 271],
	type : "armor (studded leather)",
	rarity : "legendary",
	attunement : true,
	description : "It is believed that this polished and beautifully detailed leather armor was a gift from Melora, bestowed on a long-forgotten archdruid and champion of the natural world before the terrors of the Calamity. See notes page for more info.",
	extraLimitedFeatures : [{
			name : "Hide of the Feral Guardian (Polymorph)",
			usages : 1,
			recovery : "dawn"
		}],
	choices : ["dormant state", "awakened state", "exaulted state"],
	"dormant state" : {
		name : "Hide of the Feral Guardian: Dormant",
		armorAdd : "Hide of the Feral Guardian",
		armorOptions : {
			regExpSearch : /^(?=.*hide)(?=.*feral)(?=.*guardian).*$/i,
			name : "Hide of the Feral Guardian",
			source : ["W", 271],
			type : "light",
			ac : 13,
			weight : 13,
		},
		action : [["action", " (polymorph)"]],
		spellcastingBonus : [{
			name : "1/LR no spell slot",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr",
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a giant owl, but I keep my Int, Wis, Cha.",
				changes : "Using my Hide of the Feral Guardian, I can cast Polymorph once per dawn without using a spell slot, but when I do so I can only cast it on myself and transform into a giant owl. I keep my Int, Wis, Cha."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Hide of the Feral Guardian",
			note : "\n  \u2022 Dormant State (EGtW 271)" + desc([
				"The armor grants you a +1 bonus to AC.",
				"While you are transformed by an effect that replaces any of your game statistics with those of another creature, you have a +1 bonus to melee attack and damage rolls, and you retain the benefits of this armor.",
				"As an action, you can use the armor to cast polymorph on yourself, transforming into a giant owl while retaining your Intelligence, Wisdom, and Charisma scores. This property can’t be used again until the next dawn.",
			])  
		}]
	},
	"awakened state" : {
		name : "Hide of the Feral Guardian: Awakened",
		armorAdd : "Hide of the Feral Guardian: Awakened",
		armorOptions : {
			regExpSearch : /^(?=.*hide)(?=.*feral)(?=.*guardian).*$/i,
			name : "Hide of the Feral Guardian: Awakened",
			source : ["W", 271],
			type : "light",
			ac : 14,
			weight : 13,
		},
		action : [["action", " (polymorph)"]],
		spellcastingBonus : [{
			name : "1/LR no spell slot",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr",
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a giant owl/cave bear (polar bear), but I keep my Int, Wis, Cha.",
				changes : "Using my Hide of the Feral Guardian, I can cast Polymorph once per dawn without using a spell slot, but when I do so I can only cast it on myself and transform into a giant owl or a cave bear (polar bear). I keep my Int, Wis, Cha."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Hide of the Feral Guardian",
			note : "\n  \u2022 Awakened State (EGtW 271)" + desc([
				"The armor grants you a +2 bonus to AC.",
				"While you are transformed by an effect that replaces any of your game statistics with those of another creature, you have a +2 bonus to melee attack and damage rolls, and you retain the benefits of this armor.",
				"As an action, you can use the armor to cast polymorph on yourself, transforming into a giant owl or a cave bear (polar bear) while retaining your Intelligence, Wisdom, and Charisma scores. This property can’t be used again until the next dawn.",
			]) 
		}]
	},
	"exaulted state" : {
		name : "Hide of the Feral Guardian: Exaulted",
		armorAdd : "Hide of the Feral Guardian: Exaulted",
		armorOptions : {
			regExpSearch : /^(?=.*hide)(?=.*feral)(?=.*guardian).*$/i,
			name : "Hide of the Feral Guardian: Exaulted",
			source : ["W", 271],
			type : "light",
			ac : 15,
			weight : 13,
		},
		action : [["action", " (polymorph)"]],
		spellcastingBonus : [{
			name : "1/LR no spell slot",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr",
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a giant owl/cave bear (polar bear)/guardian wolf, but I keep my Int, Wis, Cha.",
				changes : "Using my Hide of the Feral Guardian, I can cast Polymorph once per dawn without using a spell slot, but when I do so I can only cast it on myself and transform into a giant owl, cave bear (polar bear), or guardian wolf. I keep my Int, Wis, Cha."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Hide of the Feral Guardian",
			note : "\n  \u2022 Exaulted State (EGtW 271)" + desc([
				"The armor grants you a +3 bonus to AC.",
				"While you are transformed by an effect that replaces any of your game statistics with those of another creature, you have a +3 bonus to melee attack and damage rolls, and you retain the benefits of this armor.",
				"As an action, you can use the armor to cast polymorph on yourself, transforming into a giant owl, cave bear (polar bear), or guardian wolf while retaining your Intelligence, Wisdom, and Charisma scores. This property can’t be used again until the next dawn.",
			]) 
		}]
	}
};
MagicItemsList["infiltrator's key"] = {
	name : "Infiltrator's Key",
	source : ["W", 273],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	description : "This mithral skeleton key was forged using the blood of twelve master thieves executed for trying to steal magic items during the Age of Arcanum. See notes page for more information.",
	choices : ["dormant state", "awakened state", "exaulted state"],
	"dormant state" : {
		name : "Infiltrator's Key: Dormant",
		toolProfs : [["Thieves' tools", "Dex"]],
		eval : function () {
			if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
				SetProf("advantage", true, ["Stealth", true], "Infiltrator's Key (magic items)");
			}
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Infiltrator's Key",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"The key can be used as thieves’ tools for the purpose of opening locks. When using the key, you are considered proficient in thieves’ tools and you have advantage on ability checks made to open locks.",
				"While holding the key, your steps are muffled, giving you advantage on Dexterity (Stealth) checks made to move silently.",
			])  
		}]
	},
	"awakened state" : {
		name : "Infiltrator's Key: Awakened",
		toolProfs : [["Thieves' tools", "Dex"]],
		eval : function () {
			if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
				SetProf("advantage", true, ["Stealth", true], "Infiltrator's Key (magic items)");
			}
		},
		action : [["bonus action", " (transform dagger)"], ["bonus action", " (create opening)"]], 
		weaponsAdd : ["Infiltrator's Key"],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*infiltrators)(?=.*key).*$/i,
			name : "Infiltrator's Key",
			source : ["W", 273],
			range : "20/60 ft",
			damage : [1, 4, "piercing"],
			description : "Finesse, light, thrown",
			modifiers : [1, 1]
		},
		spellcastingAbility : "class",
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["alter self", "invisibility", "knock", "pass without trace"],
			selection : ["alter self", "invisibility", "knock", "pass without trace"],
			firstCol : 'oncelr',
			times : 4
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Infiltrator's Key",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"The key can be used as thieves’ tools for the purpose of opening locks. When using the key, you are considered proficient in thieves’ tools and you have advantage on ability checks made to open locks.",
				"While holding the key, your steps are muffled, giving you advantage on Dexterity (Stealth) checks made to move silently.",
			]) + "\n  \u2022 Awakened State (EGtW 273)" + desc([
				"While holding the key, you can use a bonus action to transform the key into a magic dagger or back into a key. While the key is in the form of a dagger, you gain a +1 bonus to attack and damage rolls made with it, and it returns to your hand immediately after it is used to make a ranged attack.",
				"While holding the key, you can use an action to cast one of the following spells from it: alter self, invisibility, knock, or pass without trace. Once a spell has been cast using the key, it can’t be used to cast that spell again until the next dawn.",		
			]) 
		}]
	},
	"exaulted state" : {
		name : "Infiltrator's Key: Exaulted",
		toolProfs : [["Thieves' tools", "Dex"]],
		eval : function () {
			if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
				SetProf("advantage", true, ["Stealth", true], "Infiltrator's Key (magic items)");
			}
		},
		action : [["bonus action", " (transform dagger)"], ["bonus action", " (create opening)"]], 
		weaponsAdd : ["Infiltrator's Key"],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*infiltrator)(?=.*key).*$/i,
			name : "Infiltrator's Key",
			source : ["W", 273],
			range : "20/60 ft",
			damage : [1, 4, "piercing"],
			description : "Finesse, light, thrown",
			modifiers : [1, 1]
		},
		spellcastingAbility : "class",
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["alter self", "invisibility", "knock", "pass without trace", "dimension door", "gaseous form", "mislead"],
			selection : ["alter self", "invisibility", "knock", "pass without trace", "dimension door", "gaseous form", "mislead"],
			firstCol : 'oncelr',
			times : 7
		},
		extraLimitedFeatures : [{
			name : "Infiltrator's Key (create opening)",
			usages : 1,
			recovery : "dawn"
		}],
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Infiltrator's Key",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"The key can be used as thieves’ tools for the purpose of opening locks. When using the key, you are considered proficient in thieves’ tools and you have advantage on ability checks made to open locks.",
				"While holding the key, your steps are muffled, giving you advantage on Dexterity (Stealth) checks made to move silently.",
			]) + "\n  \u2022 Awakened State (EGtW 273)" + desc([
				"While holding the key, you can use a bonus action to transform the key into a magic dagger or back into a key. While the key is in the form of a dagger, you gain a +1 bonus to attack and damage rolls made with it, and it returns to your hand immediately after it is used to make a ranged attack.",
				"While holding the key, you can use an action to cast one of the following spells from it: alter self, invisibility, knock, or pass without trace. Once a spell has been cast using the key, it can’t be used to cast that spell again until the next dawn.",		
			]) + "\n  \u2022 Exaulted State (EGtW 273)" + desc([
				"As a bonus action, you can touch the key to a floor, wall, or ceiling that is no more than 5 feet thick and cause a magical opening to appear in the surface. When you create the opening, you choose its length and width, up to 10 feet for each dimension. The opening lasts until the key passes through it to the other side, at which point it disappears (if a creature is in the opening when the doorway closes, the creature is safely shunted to the nearest unoccupied space). The key can’t be used to create another opening until the next dawn.",
				"While holding the key, you can use an action to cast one of the following spells from it: dimension door, gaseous form, or mislead. Once a spell has been cast using the key, it can’t be used to cast that spell again until the next dawn.",
			]) 
		}]
	}
};
MagicItemsList["stormgirdle"] = {
	name : "Stormgirdle",
	source : ["W", 273],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	choices : ["dormant state", "awakened state", "exaulted state"],
	"dormant state" : {
		name : "Stormgirdle: Dormant",
		description : "A wide belt of leather branded with the symbol of Kord. While attuned to and wearing this belt, I am resistant to lightning and thunder damage. My Strength score becomes 21, provided my Strength is not already 21 or higher. As an action, I can become a Storm Avatar for 1 minute. See notes page for more info.",
		scoresOverride : [21, 0, 0, 0, 0, 0],
		dmgres : [["Lightning"], ["Thunder"]],
		action : [["action", " (Storm Avatar)"], ["bonus action", " (Lightning Strike)"]],
		extraLimitedFeatures : [{
			name : "Storm Girdle (Storm Avatar)",
			usages : 1,
			recovery : "dawn"
		}],	
		weaponsAdd : ["Stormgirdle: Lightning Strike"],
		weaponOptions : {
			regExpSearch : /^(?=.*stormgirdle)(?=.*lightning)(?=.*strike).*$/i,
			name : "Stormgirdle: Lightning Strike",
			source : [["W", 273]],
			ability : 0,
			type : "Magic Item",
			damage : [3, 6, "lightning"],
			range : '30 ft',
			description : "Bonus action; Dex save, success - half damage",
			abilitytodamage : true,
			modifiers : ["dc+7", ""]
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Stormgirdle",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"You have resistance to lightning damage and thunder damage, and your Strength score becomes 21 if it isn’t already 21 or higher.",
				"You can use an action to become a Storm Avatar for 1 minute, gaining the following benefits for the duration. Once you use the girdle’s Storm Avatar property, that property can’t be used again until the next dawn.",
				"\u2022 You have immunity to lightning damage and thunder damage.",
				"\u2022 When you hit with a weapon attack that normally deals bludgeoning damage, it deals thunder damage instead. When you hit with a weapon attack that normally deals piercing or slashing damage, it deals lightning damage instead.",
				"\u2022 As a bonus action, you can choose one creature you can see within 30 feet of you to be struck by lightning. The target must make a DC 15 Dexterity saving throw, taking 3d6 lightning damage on a failed save, or half as much damage on a successful one.",
			])  
		}]
	},
	"awakened state" : {
		name : "Stormgirdle: Awakened",
		description : "A wide belt of leather branded with the symbol of Kord. While attuned to and wearing this belt, I am resistant to lightning and thunder damage. My Strength score becomes 23, provided my Strength is not already 23 or higher. As an action, I can become a Storm Avatar for 1 minute. See notes page for more info.",
		scoresOverride : [23, 0, 0, 0, 0, 0],
		dmgres : [["Lightning"], ["Thunder"]],
		action : [["action", " (Storm Avatar)"], ["bonus action", " (Lightning Strike)"]],
		extraLimitedFeatures : [{
			name : "Storm Girdle (Storm Avatar)",
			usages : 1,
			recovery : "dawn"
		}],	
		weaponsAdd : ["Stormgirdle: Lightning Strike"],
		weaponOptions : {
			regExpSearch : /^(?=.*stormgirdle)(?=.*lightning)(?=.*strike).*$/i,
			name : "Stormgirdle: Lightning Strike",
			source : [["W", 273]],
			ability : 0,
			type : "Magic Item",
			damage : [4, 6, "lightning"],
			range : '30 ft',
			description : "Bonus action; Dex save, success - half damage",
			abilitytodamage : true,
			modifiers : ["dc+7", ""]
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Stormgirdle",
			note : "\n  \u2022 Awakened State (EGtW 273)" + desc([
				"You have resistance to lightning damage and thunder damage, and your Strength score becomes 23 if it isn’t already 23 or higher.",
				"You can use an action to become a Storm Avatar for 1 minute, gaining the following benefits for the duration. Once you use the girdle’s Storm Avatar property, that property can’t be used again until the next dawn.",
				"\u2022 You have immunity to lightning damage and thunder damage.",
				"\u2022 When you hit with a weapon attack that normally deals bludgeoning damage, it deals thunder damage instead. When you hit with a weapon attack that normally deals piercing or slashing damage, it deals lightning damage instead.",
				"\u2022 As a bonus action, you can choose one creature you can see within 30 feet of you to be struck by lightning. The target must make a DC 15 Dexterity saving throw, taking 4d6 lightning damage on a failed save, or half as much damage on a successful one.",
				"\u2022 While transformed into a Storm Avatar, you gain a flying speed of 30 feet and can hover.",
			]) 
		}]
	},
	"exaulted state" : {
		name : "Stormgirdle: Exaulted",
		description : "A wide belt of leather branded with the symbol of Kord. While attuned to and wearing this belt, I am resistant to lightning and thunder damage. My Strength score becomes 25, provided my Strength is not already 25 or higher. As an action, I can become a Storm Avatar for 1 minute. See notes page for more info.",
		scoresOverride : [25, 0, 0, 0, 0, 0],
		dmgres : [["Lightning"], ["Thunder"]],
		action : [["action", " (Storm Avatar)"], ["bonus action", " (Lightning Strike)"]],
		extraLimitedFeatures : [{
			name : "Storm Girdle (Storm Avatar)",
			usages : 1,
			recovery : "dawn"
		}],	
		weaponsAdd : ["Stormgirdle: Lightning Strike"],
		weaponOptions : {
			regExpSearch : /^(?=.*stormgirdle)(?=.*lightning)(?=.*strike).*$/i,
			name : "Stormgirdle: Lightning Strike",
			source : [["W", 273]],
			ability : 0,
			type : "Magic Item",
			damage : [5, 6, "lightning"],
			range : '30 ft',
			description : "Bonus action; Dex save, success - half damage",
			abilitytodamage : true,
			modifiers : ["dc+7", ""]
		},
		spellcastingAbility : "class",
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["control weather"],
			selection : ["control weather"],
			firstCol : 'oncelr',
			times : 1
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Stormgirdle",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"You have resistance to lightning damage and thunder damage, and your Strength score becomes 25 if it isn’t already 25 or higher.",
				"You can use an action to become a Storm Avatar for 1 minute, gaining the following benefits for the duration. Once you use the girdle’s Storm Avatar property, that property can’t be used again until the next dawn.",
				"\u2022 You have immunity to lightning damage and thunder damage.",
				"\u2022 When you hit with a weapon attack that normally deals bludgeoning damage, it deals thunder damage instead. When you hit with a weapon attack that normally deals piercing or slashing damage, it deals lightning damage instead.",
				"\u2022 As a bonus action, you can choose one creature you can see within 30 feet of you to be struck by lightning. The target must make a DC 15 Dexterity saving throw, taking 5d6 lightning damage on a failed save, or half as much damage on a successful one.",
				"\u2022 While transformed into a Storm Avatar, you gain a flying speed of 30 feet and can hover.",
				"You can cast the control weather spell from the girdle. This property can’t be used again until the next dawn.",
			])
		}]
	}
};
MagicItemsList["verminshroud"] = {
	name : "Verminshroud",
	source : ["W", 273],
	type : "wondrous item",
	rarity : "legendary",
	description : "This patchy cloak was pieced together from the pelts of rats found feasting on the dead in Blightshore and is dotted with the bloated corpses of magically preserved insects along its seams. See notes page for more info.",
	attunement : true,
	savetxt : { immune : ["disease"] },
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	extraLimitedFeatures : [{
		name : "Verminshroud (Polymorph)",
		usages : 1,
		recovery : "dawn"
	}],
	choices : ["dormant state", "awakened state", "exaulted state"],
	"dormant state" : {
		name : "Verminshroud: Dormant",
		action : [["action", " (polymorph)"]],
		spellcastingBonus : [{
			name : "1/LR no spell slot",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr",
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a rat or giant rat, but I keep my Int, Wis, Cha.",
				changes : "Using Verminshroud, I can cast Polymorph once per dawn without using a spell slot, but when I do so I can only cast it on myself and transform into a rat or giant rat. I keep my Int, Wis, Cha."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Verminshroud",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"You have advantage on Wisdom (Perception) checks that rely on smell, you are immune to disease, and you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the cloak increases the range of your darkvision by 60 feet.",
				"As an action, you can use the verminshroud to cast polymorph on yourself, transforming into a giant rat or rat while retaining your Intelligence, Wisdom, and Charisma scores, as well as the properties of the cloak. This property can’t be used again until the next dawn.",
			])  
		}]
	},
	"awakened state" : {
		name : "Verminshroud: Awakened",
		action : [["action", " (polymorph)"], ["action", " (insect plague)"]],
		dmgres : [["Poison"]],
		fixedDC : 15,
		action : [["action", " (insect plague)"]],
		extraLimitedFeatures : [{
			name : "Verminshroud (Insect Plague)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["polymorph", "insect plague"],
			selection : ["polymorph", "insect plague"],
			firstCol : "oncelr",
			times : 2
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a rat, giant rat, or giant wasp, but I keep my Int, Wis, Cha.",
				changes : "Using Verminshroud, I can cast Polymorph once per dawn without using a spell slot, but when I do so I can only cast it on myself and transform into a rat, giant rat, or giant wasp. I keep my Int, Wis, Cha."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Verminshroud",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"You have advantage on Wisdom (Perception) checks that rely on smell, you are immune to disease, and you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the cloak increases the range of your darkvision by 60 feet.",
				"As an action, you can use the verminshroud to cast polymorph on yourself, transforming into a giant rat or rat while retaining your Intelligence, Wisdom, and Charisma scores, as well as the properties of the cloak. This property can’t be used again until the next dawn.",
			]) + "\n  \u2022 Awakened State (EGtW 273)" + desc([
				"You have resistance to poison damage.",
				"You can use an action to cast the insect plague spell (save DC 15) from the verminshroud, requiring no material components. This property can’t be used again until the next dawn.",		
				"When you cast the polymorph spell using the verminshroud, you can transform into a giant wasp.",
			]) 
		}]
	},
	"exaulted state" : {
		name : "Verminshroud: Exaulted",
		action : [["action", " (polymorph)"], ["action", " (insect plague)"]],
		dmgres : [["Poison"]],
		fixedDC : 15,
		speed : { climb : { spd : "walk", enc : "walk" } },
		extraLimitedFeatures : [{
			name : "Verminshroud (Insect Plague)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["polymorph", "insect plague"],
			selection : ["polymorph", "insect plague"],
			firstCol : "oncelr",
			times : 2
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a rat, giant rat, giant wasp, or giant scorpion, but I keep my Int, Wis, Cha.",
				changes : "Using Verminshroud, I can cast Polymorph once per dawn without using a spell slot, but when I do so I can only cast it on myself and transform into a rat, giant rat, giant wasp, or giant scorpion. I keep my Int, Wis, Cha."
			},
		},
		weaponsAdd : ["Verminshroud: Bite"],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*verminshroud)(?=.*bite).*$/i,
			name : "Verminshroud: Bite",
			source : ["W", 273],
			damage : [1, 6, "piercing"],
			description : "Bonus action; DC17 Con save, failure - poisoned 1 min; repeat save end of their turn",
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Verminshroud",
			note : "\n  \u2022 Dormant State (EGtW 273)" + desc([
				"You have advantage on Wisdom (Perception) checks that rely on smell, you are immune to disease, and you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the cloak increases the range of your darkvision by 60 feet.",
				"As an action, you can use the verminshroud to cast polymorph on yourself, transforming into a giant rat or rat while retaining your Intelligence, Wisdom, and Charisma scores, as well as the properties of the cloak. This property can’t be used again until the next dawn.",
			]) + "\n  \u2022 Awakened State (EGtW 273)" + desc([
				"You have resistance to poison damage.",
				"You can use an action to cast the insect plague spell (save DC 15) from the verminshroud, requiring no material components. This property can’t be used again until the next dawn.",		
				"When you cast the polymorph spell using the verminshroud, you can transform into a giant wasp.",
			]) + "\n  \u2022 Exaulted State (EGtW 273)" + desc([
				"You gain a climbing speed equal to your walking speed.",
				"Your teeth become razor-sharp natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. You can make this attack as a bonus action. When you bite a creature and deal damage to it, the creature must succeed on a DC 17 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the condition on itself on a success.",		
				"When you cast the polymorph spell using the verminshroud, you can transform into a giant scorpion.",
			])
		}]
	}
};
MagicItemsList["wreath of the prism"] = {
	name : "Wreath of the Prism",
	source : ["W", 274],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	choices : ["dormant state", "awakened state", "exaulted state"],
	"dormant state" : {
		name : "Wreath of the Prism: Dormant",
		description : "This loop of golden thorns is inset with dozens of gems representing the five colors of Tiamat. I gain darkvision to 60 ft, or extend my darkvision by 60 ft. When I hit a beast, dragon, or monstrosity of CR 5 or lower with an attack, I can cast dominate monster on that creature (save DC 13). See notes page for info.",
		fixedDC : 13,
		spellcastingBonus : [{
			name : "CR 5 or lower, DC 13",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
		}],
		spellChanges : {
			"dominate monster" : {
				name : "Dominate Monster (special)",
				description : "Beast, dragon, or monstrosity, CR =<5, on attack hit (DC 13).",
				changes : "I can cast dominate monster on a beast, dragon, or monstrosity of CR 5 when I hit it with an attack (save DC 13). If I use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by me."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Wreath of the Prism",
			note : "\n  \u2022 Dormant State (EGtW 274)" + desc([
				"You have darkvision out to a range of 60 feet. If you already have darkvision, wearing the wreath increases the range of your darkvision by 60 feet.",
				"When you hit a beast, dragon, or monstrosity of challenge rating 5 or lower with an attack, or when you grapple it, you can use the wreath to cast dominate monster on the creature (save DC 13). On a successful save, the target is immune to the power of the wreath for 24 hours. On a failure, a shimmering, golden image of the wreath appears as a collar around the target’s neck or as a crown on its head (your choice) until it is no longer charmed by the spell. If you use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by you.",
			])  
		}]
	},
	"awakened state" : {
		name : "Wreath of the Prism: Awakened",
		description : "This loop of golden thorns is inset with dozens of gems representing the five colors of Tiamat. I gain darkvision to 60 ft, or extend my darkvision by 60 ft. When I hit a beast, dragon, or monstrosity of CR 10 or lower with an attack, I can cast dominate monster on that creature (save DC 15). See notes page for info.",
		fixedDC : 15,
		spellcastingBonus : [{
			name : "CR 10 or lower, DC 15",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
		}],
		spellChanges : {
			"dominate monster" : {
				name : "Dominate Monster (special)",
				description : "Beast, dragon, or monstrosity, CR =<10, on attack hit (DC 15).",
				changes : "I can cast dominate monster on a beast, dragon, or monstrosity of CR 10 when I hit it with an attack (save DC 15). If I use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by me."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Wreath of the Prism",
			note : "\n  \u2022 Awakened State (EGtW 274)" + desc([
				"You have darkvision out to a range of 60 feet. If you already have darkvision, wearing the wreath increases the range of your darkvision by 60 feet.",
				"When you hit a beast, dragon, or monstrosity of challenge rating 10 or lower with an attack, or when you grapple it, you can use the wreath to cast dominate monster on the creature (save DC 15). On a successful save, the target is immune to the power of the wreath for 24 hours. On a failure, a shimmering, golden image of the wreath appears as a collar around the target’s neck or as a crown on its head (your choice) until it is no longer charmed by the spell. If you use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by you.",
			]) 
		}]
	},
	"exaulted state" : {
		name : "Wreath of the Prism: Exaulted",
		description : "This loop of golden thorns is inset with dozens of gems representing the five colors of Tiamat. I gain darkvision to 60 ft, or extend my darkvision by 60 ft. When I hit a beast, dragon, or monstrosity of CR 15 or lower with an attack, I can cast dominate monster on that creature (save DC 17). See notes page for info.",
		fixedDC : 17,
		spellcastingBonus : [{
			name : "CR 15 or lower, DC 17",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
		}],
		spellChanges : {
			"dominate monster" : {
				name : "Dominate Monster (special)",
				description : "Beast, dragon, or monstrosity, CR =<15, on attack hit (DC 17).",
				changes : "I can cast dominate monster on a beast, dragon, or monstrosity of CR 15 when I hit it with an attack (save DC 17). If I use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by me."
			},
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Wreath of the Prism",
			note : "\n  \u2022 Exaulted State (EGtW 274)" + desc([
				"You have darkvision out to a range of 60 feet. If you already have darkvision, wearing the wreath increases the range of your darkvision by 60 feet.",
				"When you hit a beast, dragon, or monstrosity of challenge rating 15 or lower with an attack, or when you grapple it, you can use the wreath to cast dominate monster on the creature (save DC 17). On a successful save, the target is immune to the power of the wreath for 24 hours. On a failure, a shimmering, golden image of the wreath appears as a collar around the target’s neck or as a crown on its head (your choice) until it is no longer charmed by the spell. If you use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by you.",
			]) 
		}]
	}
};
MagicItemsList["grimoire infinitus"] = {
	name : "Grimoire Infinitus",
	source : ["W", 271],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	description : "Several of these spellbooks with gilded pages and silver-plated covers were created during the Age of Arcanum, but only one has been found since the Calamity ended. See notes page for more info.",
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function (v) { return classes.known.wizard ? true : false; },
	spellcastingAbility : "class",
	spellcastingBonus : {
		spells : ["alarm", "antimagic field", "bigby's hand", "blight", "charm person", "confusion", "control weather", "create undead", "detect thoughts", "enlarge/reduce", "fear", "foresight", "gaseous form", "glyph of warding", "legend lore", "leomund's tiny hut", "mass suggestion", "mislead", "misty step", "mordenkainen's faithful hound"],
		selection : ["alarm", "antimagic field", "bigby's hand", "blight", "charm person", "confusion", "control weather", "create undead", "detect thoughts", "enlarge/reduce", "fear", "foresight", "gaseous form", "glyph of warding", "legend lore", "leomund's tiny hut", "mass suggestion", "mislead", "misty step", "mordenkainen's faithful hound"],
		times: 20
	},
	eval : function () {
		// get the CurrentSpells object or create it if it didn't exists yet.
		var spObj = CreateCurrentSpellsEntry("items", "grimoire infinitus");
		// now set some of the attributes for it, adding the 5 spells that didn't fit as spellcastingBonus
		spObj.typeSp = "known";
		spObj.known = { cantrips : 0, spells : 5 };
		spObj.list = { spells : ["prismatic spray", "ray of enfeeblement", "silent image", "teleport", "thunderwave"] };
		spObj.selectSp = ["prismatic spray", "ray of enfeeblement", "silent image", "teleport", "thunderwave"];
		spObj.typeList = 2;
	},
	removeeval : function () {
		if (CurrentSpells["grimoire infinitus"]) {
			// delete the CurrentSpells object
			delete CurrentSpells["grimoire infinitus"];
			SetStringifieds('spells');
			CurrentUpdates.types.push("spells");
		}
	},
	choices : ["dormant state", "awakened state", "exaulted state"],
	"dormant state" : {
		name : "Grimoire Infinitus: Dormant",
		calcChanges: {
			spellCalc: [
                function (type, spellcasters, ability) {
                    if (type == "prepare") return 1;
                },
			],
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Grimoire Infinitus",
			note : "\n  \u2022 Dormant State (EGtW 274)" + desc([
				"Most of the book is blank, but the following spells are recorded in the first pages of the tome: alarm, antimagic field, Bigby's hand, blight, charm person, confusion, control weather, create undead, detect thoughts, enlarge/reduce, fear, foresight, gaseous form, glyph of warding, legend lore, Leomund's tiny hut, mass suggestion, mislead, misty step, Mordenkainen's faithful hound, prismatic spray, ray of enfeeblement, silent image, teleport, and thunderwave.",
				"You can use the grimoire as your spellbook, and you can scribe new spells into it as normal.",
				"When you prepare wizard spells using the grimoire, the number of wizard spells you can prepare increases by 1.",
			])  
		}]
	},
	"awakened state" : {
		name : "Grimoire Infinitus: Awakened",
		calcChanges: {
			spellCalc: [
                function (type, spellcasters, ability) {
                    if (type == "prepare") return 2;
                },
			],
		},
		savetxt : { adv_vs : ["spells and other magical effects"] },
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Grimoire Infinitus",
			note : "\n  \u2022 Awakened State (EGtW 274)" + desc([
				"Most of the book is blank, but the following spells are recorded in the first pages of the tome: alarm, antimagic field, Bigby's hand, blight, charm person, confusion, control weather, create undead, detect thoughts, enlarge/reduce, fear, foresight, gaseous form, glyph of warding, legend lore, Leomund's tiny hut, mass suggestion, mislead, misty step, Mordenkainen's faithful hound, prismatic spray, ray of enfeeblement, silent image, teleport, and thunderwave.",
				"You can use the grimoire as your spellbook, and you can scribe new spells into it as normal.",
				"When you prepare wizard spells using the grimoire, the number of wizard spells you can prepare increases by 2.",
				"While you carry the spellbook, you have advantage on saving throws against spells and magical effects.",
			]) 
		}]
	},
	"exaulted state" : {
		name : "Grimoire Infinitus: Exaulted",
		calcChanges: {
			spellCalc: [
                function (type, spellcasters, ability) {
                    if (type == "prepare") return 3;
                },
			],
		},
		savetxt : { adv_vs : ["spells and other magical effects"] },
		extraLimitedFeatures : [{
			name : "Arcane Recovery (Grimoire Infinitus)",
			usages : 1,
			recovery : "long rest"
		}],	
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Grimoire Infinitus",
			note : "\n  \u2022 Exaulted State (EGtW 274)" + desc([
				"Most of the book is blank, but the following spells are recorded in the first pages of the tome: alarm, antimagic field, Bigby's hand, blight, charm person, confusion, control weather, create undead, detect thoughts, enlarge/reduce, fear, foresight, gaseous form, glyph of warding, legend lore, Leomund's tiny hut, mass suggestion, mislead, misty step, Mordenkainen's faithful hound, prismatic spray, ray of enfeeblement, silent image, teleport, and thunderwave.",
				"You can use the grimoire as your spellbook, and you can scribe new spells into it as normal.",
				"When you prepare wizard spells using the grimoire, the number of wizard spells you can prepare increases by 3.",
				"While you carry the spellbook, you have advantage on saving throws against spells and magical effects.",
				"You gain one additional use of your Arcane Recovery feature between long rests.",
			]) 
		}]
	}
};

// MOT
MagicItemsList["flying chariot"] = {
	name : "Flying Chariot",
	source : ["MOT", 196],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	allowDuplicates : true,
	description : "I gain +1 AC while riding this chariot, as do any passengers and the creatures pulling it. If this chariot is pulled by one or more flying creatures, it too can fly.",
	descriptionFull : "The chariot's riders and creatures pulling the chariot gain a + 1 bonus to their AC. " + "\n   " + "If this magic chariot is pulled by one or more flying creatures, it too can fly. "
};
var helmOfTheGodsFullDescription = [
	"While wearing this helm, you know whether there is a celestial or fiend within 30 feet of you, as well as where the creature is located, provided the creature isn't behind total cover.",
	"Whenever you finish a long rest while wearing the helm, you can pray to one of the gods listed on the Helm of the Gods table and store the listed spell in the helm, replacing any spell that is already stored there. The save DC for the spell is 13.",
	"The helm has 3 charges. To cast a spell from the helm, you must expend 1 charge, and the helm regains ld3 charges daily at dawn.",
	">>God\t\tSpell<<",
	"  Athreos!!\tprotection from evil and good",
	"  Ephara\t\tsanctuary",
	"  Erebos\t\tinflict wounds",
	"  Heliod\t\tguiding bolt",
	"  Iroas\t\theroism",
	"  Karametra\tgoodberry",
	"  Keranos!!\tthunderous smite",
	"  Klothys\t\tentagle",
	"  Kruphix!!\tdissonant whispers",
	"  Mogis\t\thellish rebuke",
	"  Nylea\t\tfaerie fire",
	"  Pharika\t\tlesser restoration",
	"  Phenax\t\tcharm person",
	"  Purphoros\tsearing smite",
	"  Thassa\t\tidentify"
];
MagicItemsList["helm of the gods"] = {
	name : "Helm of the Gods",
	source : ["MOT", 196],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	allowDuplicates : true,
	description : "While wearing this helm, I know the location of any celestials or fiends within 30ft, provided they aren't behind total cover. The helm has 3 charges, regaining 1d3 charges at dawn. I can use a charge to cast a spell stored in the helm, with a DC of 13. After a long rest, I can pray to a god to store a spell. See Notes.",
	descriptionFull : helmOfTheGodsFullDescription.join("\n   ").replace("!!", "").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	fixedDC : 13,
	usages : 3,
	recovery : "dawn",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["protection from evil and good"],
		selection : ["protection from evil and good"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["sanctuary"],
		selection : ["sanctuary"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["inflict wounds"],
		selection : ["inflict wounds"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["guiding bolt"],
		selection : ["guiding bolt"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["heroism"],
		selection : ["heroism"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["goodberry"],
		selection : ["goodberry"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["thunderous smite"],
		selection : ["thunderous smite"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["entangle"],
		selection : ["entangle"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["dissonant whispers"],
		selection : ["dissonant whispers"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["hellish rebuke"],
		selection : ["hellish rebuke"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["faerie fire"],
		selection : ["faerie fire"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["lesser restoration"],
		selection : ["lesser restoration"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["charm person"],
		selection : ["charm person"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["searing smite"],
		selection : ["searing smite"],
		firstCol : 1
	}, {
		name : "1 charge",
		spells : ["identify"],
		selection : ["identify"],
		firstCol : 1
	}],
	spellChanges : {
		"protection from evil and good" : {
			changes : "I can cast this spell if I prayed to Athreos after a long rest and expend 1 charge."
		},
		"sanctuary" : {
			changes : "I can cast this spell if I prayed to Ephara after a long rest and expend 1 charge."
		},
		"inflict wounds" : {
			changes : "I can cast this spell if I prayed to Erebos after a long rest and expend 1 charge."
		},
		"guiding bolt" : {
			changes : "I can cast this spell if I prayed to Heliod after a long rest and expend 1 charge."
		},
		"heroism" : {
			changes : "I can cast this spell if I prayed to Iroas after a long rest and expend 1 charge."
		},
		"goodberry" : {
			changes : "I can cast this spell if I prayed to Karametra after a long rest and expend 1 charge."
		},
		"thunderous smite" : {
			changes : "I can cast this spell if I prayed to Keranos after a long rest and expend 1 charge."
		},
		"entangle" : {
			changes : "I can cast this spell if I prayed to Klothys after a long rest and expend 1 charge."
		},
		"dissonant whispers" : {
			changes : "I can cast this spell if I prayed to Kruphix after a long rest and expend 1 charge."
		},
		"hellish rebuke" : {
			changes : "I can cast this spell if I prayed to Mogis after a long rest and expend 1 charge."
		},
		"faerie fire" : {
			changes : "I can cast this spell if I prayed to Nylea after a long rest and expend 1 charge."
		},
		"lesser restoration" : {
			changes : "I can cast this spell if I prayed to Pharika after a long rest and expend 1 charge."
		},
		"charm person" : {
			changes : "I can cast this spell if I prayed to Phenax after a long rest and expend 1 charge."
		},
		"searing smite" : {
			changes : "I can cast this spell if I prayed to Purphoros after a long rest and expend 1 charge."
		},
		"identify" : {
			changes : "I can cast this spell if I prayed to Thassa after a long rest and expend 1 charge."
		}
	},
	toNotesPage : [{
		name : "Helm of the Gods Spells Table",
		source : ["MOT", 196],
		popupName : "Helm of the Gods Spells Table",
		note : desc(helmOfTheGodsFullDescription.slice(3)).replace("!!", "\t").replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
	}]
};
MagicItemsList["molten bronze skin"] = {
	name : "Molten Bronze Skin",
	source : ["MOT", 197],
	type : "armor (breastplate, half plate, or plate)",
	rarity : "rare",
	description : "This armor appears as a jug of molten bronze. When I attune to it, it adheres and contours to my skin. It can be worn under clothes and doesn't impede bodily functions. This armor can't be removed unless I choose to do so, grants resistance to fire damage, and doesn't impose disadv. on Dex (Stealth) checks.",
	descriptionFull : "This magical armor appears as a jug of molten bronze. When you attune to it, the bronze adheres and contours to your skin. The armor can be worn under normal clothes, but it doesn't impede bodily functions. Once you put it on, it can't be removed unless you choose to do so." + "\n" + "While wearing the armor, you have resistance to fire damage. The armor also doesn't impose disadvantage on Dexterity (Stealth) checks.",
	attunement : true,
	allowDuplicates : true,
	dmgres : ["Fire"],
	chooseGear : {
		type : "armor",
		descriptionChange : ["replace", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /breastplate|half plate|plate/i;
			return !(testRegex).test(inObjKey);
		}
	}
};
MagicItemsList["potion of aqueous form"] = {
	name : "Potion of Aqueous Form",
	source : ["MOT", 197],
	type : "potion",
	rarity : "rare",
	description : "Once as an action, I can drink this potion or administer it to another. The consumer of the potion turns into a pool of water and reverts back to their true form after 10 minutes, becoming incapacitated, or dying. This form grants several benefits and limitations. See Notes.",
	descriptionFull : "When you drink this potion, you transform into a pool of water. You return to your true form after 10 minutes or if you are incapacitated or die." + "\n" + "You're under the following effects while in this form:" + "\n\n" + toUni("Liquid Movement") + ". You have a swimming speed of 30 feet. You can move over or through other liquids. You can enter and occupy the space of another creature. You can rise up to your normal height, and you can pass through even Tiny openings. You extinguish nonmagical flames in any space you enter." + "\n\n" + toUni("Watery Resilience") + ". You have resistance to nonmagical damage. You also have advantage on Strength, Dexterity, and Constitution saving throws." + "\n\n" + toUni("Limitations") + ". You can't talk, attack, cast spells, or activate magic items. Any objects you were carrying or wearing meld into your new form and are inaccessible, though you continue to be affected by anything you're wearing, such as armor.",
	allowDuplicates : true,
	toNotesPage : [{
		name : "Effects",
		popupName : "Potion of Aqueous Form Effects",
		note : "\n  " + "The consumer of the potion is under the following effects:" + desc([
			"\u2022 They have a swimming speed of 30ft",
			"\u2022 They can move over or through other liquids",
			"\u2022 They can enter and occupy the space of another creature",
			"\u2022 They can rise up to their normal height and pass through tiny openings",
			"\u2022 They extinguish nonmagical flames in any space they enter",
			"\u2022 They have resistance to nonmagical damage",
			"\u2022 They have advantage on Strength, Dexterity, and Constitution saving throws",
			"\u2022 They can't talk, attack, cast spells, or activate magic items",
			"\u2022 Their equipment merges into their new form, but still gain their benefits"
		])
	}]
};
var pyxisOfPandemoniumDescription = [
	"A creature that touches this ornate wooden vessel for 1 minute gains the benefits of a short rest. That creature also gains the effects of the bless spell until the creature finishes a short or long rest. The creature can't gain these benefits again until it finishes a long rest.",
	"If the vessel is opened, roll on the Pyxis of Pandemonium table to determine what happens. Any spells cast by the vessel have a spell save DC of 17. One minute after the vessel is opened, it disappears. It reappears, sealed, in a random location on the same plane of existence 24 hours later.",
	toUni("Curse") + ". Any creature that gains the benefit of a short rest from the vessel hears cloying telepathic whispers emanating it. That creature must make a DC 17 Wisdom saving throw. On a failed save, the creature is charmed by the vessel for 1 hour. The charmed creature does everything it can to open the vessel as soon as possible. On a successful save, the creature is immune to the vessel's whispers for 24 hours.",
	">>d8  Calamity<<",
	"1   >>Androphagia<<. Each creature within 60 feet of the vessel must succeed on a DC 17 Wisdom saving throw or go berserk for l minute. The berserk creature must begin its turn using the Attack action to make one melee or ranged attack (its choice) against the creature nearest to it. The berserk creature can repeat the save at the end of its turn, ending the effect on itself on a success.",
	"2   >>Bile Blight<<. The vessel casts the harm spell on each creature within 30 feet of it.",
	"3   >>Flood<<. The vessel casts the tsunami spell at a point of the DM's choice within 120 feet of it.",
	"4   >>Medusa's Gaze<<. The vessel casts the flesh to stone spell on each creature within 30 feet of it.",
	"5   >>Labyrinth<<. The vessel casts the maze spell on each creature within 30 feet of it.",
	"6   >>Nightmare<<. Tendrils of shadow seep from the vessel and form into ld4 shadow demons (see the Monster Manual for their stat block), which appear in unoccupied spaces within 30 feet of it and are hostile.",
	"7   >>Swarming Insects<<. The vessel casts the insect plague spell, centered on itself and with a radius of 30 feet.",
	"8   >>Unbridled Revel<<. The vessel casts the Otto's irresistible dance spell on each creature within 30 feet of it."
];
var pyxisOfPandemoniumNote = [
	"A creature who benefits from this vessel makes a DC 17 Wisdom save", 
	"On a success, that creature is immune to the vessel's charm for 24 hours",
	"On a failure, that creature is charmed by the vessel for 1 hour",
	"A charmed creature does everything it can to open the vessel",
	"Once opened, roll a d8 to determine the effect on the table below",
	"Each spell cast by the vessel has a DC of 17",
	"It then teleports, resealed, somewhere else on the same plane after 1 min"
];
MagicItemsList["pyxis of pandemonium"] = {
	name : "Pyxis of Pandemonium",
	source : ["MOT", 197],
	type : "wondrous item",
	rarity : "legendary",
	description : "Once per long rest, I gain the benefits of a short rest after touching this vessel for 1 minute. I also gain the benefit of the bless spell until my next rest. After benefiting from this vessel I make a DC 17 Wis save or become charmed by the vessel for 1 hour. If charmed, I only focus on opening it. See Notes.",
	descriptionLong : "Once per long rest, I can touch this vessel for 1 minute to gain the benefits of a short rest. I also gain the benefit of the bless spell until my next rest. After benefiting from a short rest from this vessel, I must make a DC 17 Wisdom saving throw or become charmed by the vessel for 1 hour. On a success, I am immune to the vessel's charm for 24 hours. On a failure I am charmed and I will do everything I can to open the vessel as soon as possible. Once opened, the vessel causes a random effect to occur, then it disappears after 1 minute. It reappears, sealed, in random location on the same plane. See Notes.",
	descriptionFull : pyxisOfPandemoniumDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	allowDuplicates : true,
	toNotesPage : [{
		name : "Pyxis of Pandemonium Effects",
		source : ["MOT", 197],
		popupName : "Pyxis of Pandemonium Effects",
		note : desc(pyxisOfPandemoniumNote) + desc(
			pyxisOfPandemoniumDescription.slice(3)).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
	}],
	usages : 1,
	recovery : "long rest"
};
MagicItemsList["siren song lyre"] = {
	name : "Siren Song Lyre",
	source : ["MOT", 198],
	type : "wondrous item",
	rarity : "rare",
	allowDuplicates : true,
	description : "As an action, I can play this lyre and cast one of the following spells from it: animal friendship, charm person, enthrall, suggestion. The DC for these spells is 13. Once I cast a spell, it can't be cast again until the next dawn.",
	descriptionFull : "",
	allowDuplicates : true,
	fixedDC : 13,
	extraLimitedFeatures : [{
		name : "Siren's Song Lyre [Animal Friendship]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Siren's Song Lyre [Charm Person]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Siren's Song Lyre [Enthrall]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Siren's Song Lyre [Suggestion]",
		usages : 1,
		recovery : "dawn"
	}],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : "oncelr"
	}, {
		name : "Once per dawn",
		spells : ["charm person"],
		selection : ["charm person"],
		firstCol : "oncelr"
	}, {
		name : "Once per dawn",
		spells : ["enthrall"],
		selection : ["enthrall"],
		firstCol : "oncelr"
	}, {
		name : "Once per dawn",
		spells : ["suggestion"],
		selection : ["suggestion"],
		firstCol : "oncelr"
	}],
	action : ["action", "Siren Song Lyre (cast spell)"]
};
var slingBulletsOfAlthemoneDescription = [
	"The sling bullets come in a pouch, which contains ld4 + 4 bullets. Roll on the Magic Sling Bullets table for each bullet to determine its magical property.",
	"You have a +2 bonus to attack and damage rolls made with each of these bullets. If a bullet misses its target, the bullet teleports back into the pouch. Once a bullet hits a target, the bullet loses its magic.",
	">>d4  Bullet<<",
	"1   >>Banishment<<. A creature that takes damage from this bullet must succeed on a DC 15 Charisma saving throw or be banished as though affected by the banishment spell.",
	"2   >>Fulguration<<. On a hit, this bullet deals an extra 2d8 lightning damage to its target. All other creatures within 10 feet of the target must each succeed on a DC 15 Constitution saving throw or take ld8 thunder damage.",
	"3   >>Stunning<<. On a hit, this bullet deals an extra ldlO force damage, and the target is stunned until the end of your next turn.",
	"4   >>Tracking<<. A creature that takes damage from this bullet is marked with a glowing rune where the bullet hit. The mark lasts 24 hours. While the creature is marked, you always know the direction to it.",
];
MagicItemsList["sling bullets of althemone"] = {
	name : "Sling Bullets of Althemone",
	source : ["MOT", 198],
	type : "weapon (sling bullet)",
	rarity : "very rare",
	description : "These bullets come in a pouch containing 1d4 + 4 bullets. Attacks made with these sling bullets add +2 to hit and damage. If a bullet misses, it teleports to its pouch. On a hit, the bullet's effect happens and the bullet loses its magic. I roll on the table to determine each bullet's magical effect. See Notes.",
	descriptionFull : slingBulletsOfAlthemoneDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	allowDuplicates : true,
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (!v.isDC) output.extraHit += 2;
			},
			"I add a +2 bonus on the To Hit of all my attack rolls."
		]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isMeleeWeapon && !v.isSpell && (/sling/i).test(v.WeaponText) && (/althemone/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description += (fields.Description ? '; ' : '') + 'Ammunition returns on a miss; Magical effect on hit';
				}
			},'If I include the word "Althemone" in the name of a sling, it will be treated as using the Sling Bullets of Althemone. It has +2 to hit and damage, bullets return on a miss, and cause a magical effect on a hit.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (!v.isMeleeWeapon && !v.isSpell && (/sling/i).test(v.WeaponText) && (/althemone/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 2;
				}
			}
		]
	},
	toNotesPage : [{
		name : "Sling Bullets of Althemone Table",
		source : ["MOT", 198],
		popupName : "Sling Bullets of Althemone Table",
		note : desc(
			slingBulletsOfAlthemoneDescription.slice(2)).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
	}]
};
MagicItemsList["two-birds sling"] = {
	name : "Two-Birds Sling",
	source : ["MOT", 198],
	type : "weapon (sling)",
	rarity : "rare",
	description : "This sling adds +1 to hit and damage. On a hit, I can cause the ammunition to ricochet towards a second target within 10 ft of the first, rolling a ranged attack against the second target.",
	descriptionFull : "You have a +l bonus to attack and damage rolls made with this weapon." + "\n" + "When you make a ranged attack with this sling and hit a target, you can cause the ammunition to ricochet toward a second target within 10 feet of the first, and then make a ranged attack against the second target.",
	weight : 0.001,
	weaponsAdd : ["Two-Birds Sling"],
	weaponOptions : {
		baseWeapon : "sling",
		regExpSearch : /two-birds sling/i,
		name : "Two-Birds Sling",
		source : ["MOT", 198],
		range : "30/120 ft",
		description : "Ammunition; On hit ricochet to another target within 10ft",
		modifiers : [1,1]
	}
};

// Frostmaiden
MagicItemsList["abracadabrus"] = {
	name : "Abracadabrus",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "very rare",
	description : "This gemstone-studded wooden chest has a volume of 1.5 cu ft. and 20 charges. I can touch it to use an action and a charge to cause up to 1gp of nonmagical objects to form inside, provided they fit and the chest is empty. Regains 1d20 charges at dawn. See Notes page.",
	descriptionLong : "This gemstone-studded chest has a volume of 1.5 cu ft. and 20 charges. I can use an action and a charge to cause up to 1gp of mundane objects to form inside, provided they fit and the chest is empty. Food/drink produced by the chest is delicious and spoils after 24 hrs. Gems/precious metals produced by the chest disappear after 1 min. Regains 1d20 charges at dawn. If the last charged is used, there is a 5% chance the chest loses its magic, becoming a mundane chest, and the gemstones turn to dust.",
	descriptionFull : "An abracadabrus is an ornate, gemstone-studded wooden chest that weighs 25 pounds while empty. Its interior compartment is a cube measuring 1½ feet on a side." + "\n" + "The chest has 20 charges. A creature can use an action to touch the closed lid of the chest and expend 1 of the chest's charges while naming one or more nonmagical objects (including raw materials, foodstuffs, and liquids) worth a total of 1 gp or less. The named objects magically appear in the chest, provided they can all fit inside it and the chest doesn't contain anything else. For example, the chest can conjure a plate of strawberries, a bowl of hot soup, a flagon of water, a stuffed animal, or a bag of twenty caltrops. Food and drink conjured by the chest are delicious, and they spoil if not consumed after 24 hours. Gems and precious metals created by the chest disappear after 1 minute." + "\n" + "The chest regains 1d20 expended charges daily at dawn. If the item's last charge is expended, roll a d20. On a 1, the chest loses its magic (becoming an ordinary chest), and its gemstones turn to dust.",
	toNotesPage : [{
		name : "Abracadabrus Details",
		popupName : "Abracadabrus Details",
		note : [
			" \u2022 Food/drink made by the chest are delicious; spoil after 24 hrs if not eaten",
			" \u2022 Gems/precious metals made by the chest disappear after 1 min",
			" \u2022 If last charge is used, roll d20; on a 1 it loses its magic & gems turn to dust"
		]
	}],
	attunement : false,
	weight : 25,
	allowDuplicates : true,
	usages : 20,
	recovery : "dawn",
	action : [["action", " (create objects)"]]
};
MagicItemsList["cauldron of plenty"] = {
	name : "Cauldron of Plenty",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "rare",
	description : "This cauldron is 4 ft wide, 3.5 ft in diameter, and holds 30 gal. It has a lid, handles, and 5 feet. I can stir water in it for 1 min to make a hot stew for 4 people per gal. Stew stays hot in the cauldron, cools if removed; surface of the cauldron remains cool. Can be used 3 times per day, regaining all uses at dawn.",
	descriptionLong : "This thick copper cauldron is 4ft wide, has a 3.5 ft diameter mouth, and holds 30 gal. It has a lid, handles, and 5 clawed feet. I can stir water in it for 1 min to turn it into a hot, hearty stew that feeds 4 people per gal. The stew stays hot while in the cauldron, cooling normally if it's removed. The surface of the cauldron remains cool, despite keeping the stew hot. It can be used 3 times a day, regaining all uses at dawn.",
	descriptionFull : "This cauldron is made of thick copper that has turned green with age. It is 4 feet wide, has a mouth 3½ feet in diameter, weighs 50 pounds, and can hold up to 30 gallons of liquid. Embossed on its bulging sides are images of satyrs and nymphs in repose, holding ladles. The cauldron comes with a lid and has side handles. It sits on five little clawed feet that keep it from tipping." + "\n" + "If water is poured into the cauldron and stirred for 1 minute, it transforms into a hearty, hot stew, which can provide one nourishing meal for up to four people per gallon. The stew remains hot while in the cauldron, then cools naturally after it is removed. The outside of the cauldron remains safe to touch despite the heat of the stew." + "\n" + "The cauldron can create stew three times. It then ceases to function until the next dawn, when it regains all its uses.",
	attunement : false,
	weight : 50,
	allowDuplicates : true,
	usages : 3,
	recovery : "dawn"
};
var hookOfFishersDelightDescription = [
	"This tiny silver fishhook has a little gold feather attached to it. For it to function, the feathered hook must be tied to the end of a fishing line and immersed in enough water to fill at least a 10-foot cube. At the end of each uninterrupted hour of immersion, roll a d6. On a 6, a floppy, 6-inch-long magical fish appears on the end of the hook. The color and properties of the conjured fish are determined by rolling on the Hook of Fisher's Delight table. Once the hook conjures a fish, it can't do so again until the next dawn.",
	">>d20\tFish color\t\tResult<<",
	"  1-10!!\tGreen with copper bands\tThis tasty fish provides a day's worth of nourishment to one creature that eats it. The fish loses this property and rots if it's not eaten within 24 hours of being caught.",
	"  11-14\tYellow with black stripes\t" + (typePF ? "" : "\t") + "Once removed from the hook, this awful-tasting fish can be thrown up to 120 feet, targeting a creature the thrower can see. The target must succeed on a DC 15 Strength saving throw or be knocked prone. The fish then disappears.",
	"  15-18\tBlue with white bands\t@@When released from the hook, this fish squirms free, sprouts wings, follows you around, and sings a beautiful tune in Aquan. It disappears after 2d4 hours or when reduced to 0 hit points. The fish uses the quipper stat block, except that it can breathe air and has a flying speed of 30 feet.",
	"  19-20\tGold with silver stripes\t##This tasty fish provides a day's worth of nourishment to one creature that eats it and grants 2d10 temporary hit points to that creature. The fish loses these properties and rots if it's not eaten within 24 hours of being caught."
];
MagicItemsList["hook of fisher's delight"] = {
	name : "Hook of Fisher's Delight",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "rare",
	description : "For this hook to work, I must attach it to the end of a fishing line and immerse it in enough water to fill at least 10 ft cube. Then, at the end of each uninterrupted hour of immersion, I roll a d6. On a 6, a fish appears on the hook; roll a d20 to determine the fish's properties. See Notes page.",
	descriptionFull : hookOfFishersDelightDescription.join("\n   ").replace("!!", "").replace("@@", "").replace("##", "").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Fish Properties Table",
		popupName : "Hook of Fisher's Delight Fish Table",
		note : desc(hookOfFishersDelightDescription.slice(1)).replace("!!", "").replace("@@", "\t").replace("##", "\t").replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
	}],
	attunement : false,
	allowDuplicates : true,
	usages : 1,
	recovery : "dawn"
};
var lanternOfTrackingFullDescription = [
	"This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet." + "\n" + "Each lantern of tracking is designed to track down a certain type of creature, which is determined by rolling on the Lantern of Tracking table. Once determined, this creature type can't be changed. While the lantern is within 300 feet of any creature of that type, its flame turns bright green. The lantern doesn't pinpoint the creature's exact location, however.",
	">>d10\tCreature Type<<",
	"  1\tAberrations",
	"  2\tCelestials",
	"  3\tConstructs",
	"  4\tDragons",
	"  5\tElementals",
	"  6\tFey",
	"  7\tFiends",
	"  8\tGiants",
	"  9\tMonstrosities",
	"  10\tUndead"
];
var lanternOfTrackingDescription = "This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30 ft radius and dim light for an additional 30 ft. While this lantern is within 300 ft of any !!, its flame turns bright green.";
MagicItemsList["lantern of tracking"] = {
	name : "Lantern of Tracking",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "common",
	description : "This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. While this lantern is within 300 ft of a specified creature type, its flame turns bright green.",
	descriptionFull : lanternOfTrackingFullDescription.join("\n   ").replace("!!", "").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : false,
	allowDuplicates : true,
	usages : 1,
	recovery : "dawn",
	choices : ["Aberrations", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Undead"],
	"aberrations" : {
		name : "Lantern of Tracking (Aberrations)",
		description : lanternOfTrackingDescription.replace("!!", "Aberrations")
	},
	"celestials" : {
		name : "Lantern of Tracking (Celestials)",
		description : lanternOfTrackingDescription.replace("!!", "Celestials")
	},
	"constructs" : {
		name : "Lantern of Tracking (Constructs)",
		description : lanternOfTrackingDescription.replace("!!", "Constructs")
	},
	"dragons" : {
		name : "Lantern of Tracking (Dragons)",
		description : lanternOfTrackingDescription.replace("!!", "Dragons")
	},
	"elementals" : {
		name : "Lantern of Tracking (Elementals)",
		description : lanternOfTrackingDescription.replace("!!", "Elementals")
	},
	"fey" : {
		name : "Lantern of Tracking (Fey)",
		description : lanternOfTrackingDescription.replace("!!", "Fey")
	},
	"fiends" : {
		name : "Lantern of Tracking (Fiends)",
		description : lanternOfTrackingDescription.replace("!!", "Fiends")
	},
	"giants" : {
		name : "Lantern of Tracking (Giants)",
		description : lanternOfTrackingDescription.replace("!!", "Giants")
	},
	"monstrosities" : {
		name : "Lantern of Tracking (Monstrosities)",
		description : lanternOfTrackingDescription.replace("!!", "Monstrosities")
	},
	"undead" : {
		name : "Lantern of Tracking (Undead)",
		description : lanternOfTrackingDescription.replace("!!", "Undead")
	}
};
MagicItemsList["professor orb"] = { // contains contributions by Pengsloth
	name : "Professor Orb",
	source : ["IDRotF", 0],
	type : "wondrous item",
	rarity : "rare",
	description : "This orb is sentient with the personality of a scholar, but no will of its own. It has Int 18, Wis and Cha of 3d6 each. It knows and reads 4 languages, can see/hear as a human out to 60 ft, and has extensive knowledge of 4 narrow academic subjects (+9 on checks). It knows Mage Hand, which it uses to move around.",
	descriptionFull : "Each professor orb takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere.\n   A Professor Orb is sentient and has the personality of a scholar. Its alignment is determined by rolling on the alignment table in the \"Sentient Magic Items\" section in chapter 7 of the Dungeon Master's Guide. Regardless of its disposition, the orb has an Intelligence of 18, and Wisdom and Charisma scores determined by rolling 3d6 for each ability. The orb speaks, reads, and understands four languages, and can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it.\n   A Professor Orb has extensive knowledge of four narrow academic subjects. When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier).\n   In addition to the knowledge it possesses, a professor orb can cast the Mage Hand cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
};
MagicItemsList["professor skant"] = { // contains contributions by Pengsloth
	name : "Professor Skant",
	source : ["IDRotF", 315],
	type : "wondrous item",
	rarity : "rare",
	description : "This orb is sentient with the personality of a scholar, but no will of its own. It has Int 18, Wis 11, and Cha 9. It knows and reads 4 languages, can see/hear as a human out to 60 ft, and has expertise in 4 academic subjects (+9 on checks). It knows Mage Hand, which it uses to move around. See Notes Page.",
	descriptionLong: "This sentient orb, which calls itself Professor Skant, has the personality of a scholar, but no will of its own. It's alignment is lawful good and has Int 18, Wis 11, and Cha 9. It knows and reads Common, Draconic, Elvish, and Loross. It has expertise in the following academic topics: history of Netheril, vampirism and the traits of vampires, rituals surrounding the making, bottling, and drinking of Elverquisst, and the tarrasque (+9 on checks).",
	descriptionFull : "The professor orb owned by Vellynne Harpell and stolen by Nass Lantomir calls itself Professor Skant. It is lawful good, and it has a Wisdom of 11 and a Charisma of 9. It speaks and reads Common, Draconic, Elvish, and Loross (the dead language of the Empire of Netheril). Professor Skant is a chatterbox and assumes all humanoids are dunderheads. When elaborating on its areas of expertise, it adopts an unintentionally patronizing tone. It has the following four areas of expertise:" + "\n" + "\u2022 The history of Netheril (see the \"Fate of Netheril\" sidebar)" + "\n" + "\u2022 Vampirism and the traits of vampires" + "\n" + "\u2022 Rituals surrounding the making, bottling, and drinking of Elverquisst (a rare, ruby-colored elven liquor distilled from sunshine and rare summer fruits)" + "\n" + "\u2022 The tarrasque (see the Monster Manual)",
	toNotesPage : [{
		name : "Traits",
		popupName : "Professor Skant Traits",
		note : [
			"Professor Skant is a sentient, lawful good orb with the following traits:",
			" \u2022 Knows and reads Common, Draconic, Elvish, and Loross",
			" \u2022 Has expertise on 4 academic topics, which are:",
			"    \u2022 History of Netheril",
			"    \u2022 Vampirism and the traits of vampires",
			"    \u2022 Rituals surrounding the making, bottling, and drinking of Elverquisst",
			"    \u2022 The tarrasque",
		]
	}]
};
var psiCrystalFullDescription = [
	"This crystal grants you telepathy for as long as you remain attuned to it. See the introduction of the Monster Manual for rules on how this telepathy works.",
	"The crystal also glows with a purplish inner light while you are attuned to it.",
	"The higher your intelligence, the greater the light's intensity and the greater the range of the telepathy (see the Psi Crystal Properties table).",
	">>Intelligence Score    Range of Telepathy    Light Intensity<<",
	" 3-7\t\t    15 feet\t\t       !!Dim light out to a range of 5 feet",
	" 8-11\t\t    30 feet\t\t       @@Bright light in a 5-foot radius and dim light for an additional 5 feet",
	" 12-15\t\t    60 feet\t\t       ##Bright light in a 10-foot radius and dim light for an additional 10 feet",
	" 16 or higher\t   120 feet\t\t       $$Bright light in a 15-foot radius and dim light for an additional 15 feet"
];
MagicItemsList["psi crystal"] = {
	name : "Psi Crystal",
	source : ["IDRotF", 315],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	prerequisite : "Requires attunement by a creature with an intelligence score of 3 or higher",
	prereqeval : function(v) { return Number(What("Int")) >= 3; },
	description : "While attuned to this orb, it glows with an inner purplish light and gives me telepathy. The range of telepathy and intensity of light are determined by my Intelligence score. See Notes page.",
	descriptionFull : psiCrystalFullDescription.join("\n   ").replace("!!", "  ").replace("@@", "  ").replace("##", "  ").replace("$$", "  ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Psi Crystal Properties Table",
		popupName : "Psi Crystal Properties Table",
		note : desc(psiCrystalFullDescription.slice(3)).replace("!!", "").replace("@@", "").replace("##", "").replace("$$", "").replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
	}],
};
MagicItemsList["scroll of tarrasque summoning"] = {
	name : "Scroll of Tarrasque Summoning",
	source : ["IDRotF", 315],
	type : "scroll",
	rarity : "legendary",
	description : "Once as an action, I can use this to cause the tarrasque to appear in an unoccupied space I can see within 1 mile. The tarrasque disappears when it drops to 0 hit points and is hostile toward all creatures other than itself.",
	descriptionFull : "Using an action to read the scroll causes the tarrasque (see the creature's entry in the Monster Manual) to appear in an unoccupied space you can see within 1 mile of you. The tarrasque disappears when it drops to 0 hit points and is hostile toward all creatures other than itself."
};
MagicItemsList["scroll of the comet"] = {
	name : "Scroll of the Comet",
	source : ["IDRotF", 315],
	type : "scroll",
	rarity : "legendary",
	description : "Once as an action outdoors, I can use this to cause a comet to fall on a point I can see within 1 mile, which creates a 50 ft deep, 500 ft radius crater. Any creature in the radius makes a DC 20 Dex save, taking 30d10 force damage on a failure, or half as much on a success. Destroys nonmagical objects within the area.",
	descriptionFull : "By using an action to read the scroll, you cause a comet to fall from the sky and crash to the ground at a point you can see up to 1 mile away from you. You must be outdoors when you use the scroll, or nothing happens and the scroll is wasted." + "\n" + "The comet creates a 50-foot-deep, 500-foot-radius crater on impact. Any creature in that radius must make a DC 20 Dexterity saving throw, taking 30d10 force damage on a failed saving throw, or half as much damage on a successful one. All structures in the crater are destroyed, as are all nonmagical objects that aren't being worn or held."
};
MagicItemsList["thermal cube"] = {
	name : "Thermal Cube",
	source : ["IDRotF", 316],
	type : "wondrous item",
	rarity : "common",
	description : "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius).",
	descriptionFull : "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius)."
};
MagicItemsList["ythryn mythallar"] = {
	name : "Ythryn Mythallar",
	source : ["IDRotF", 316],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "This 50 ft diameter crystal ball sheds light in a 300 ft radius and dim light for an additional 300 ft. Up to 8 creatures can attune to it at one time, a 9th creature's attunement fails. All those attuned to it can sense when it is used and they all must agree to any properties being used. See Notes page.",
	descriptionFull : "A mythallar looks like an enormous crystal ball held in an ornate cradle. The globe sheds bright light in a 300-foot radius and dim light for an additional 300 feet. The globe draws magic from the Weave that can be harnessed for various purposes. For example, Netherese mages used mythallars to keep their cities aloft and empower their magic items. The bigger the mythallar, the more magic it can hold. The largest mythallars are 150 feet in diameter." + "\n" + "The Ythryn mythallar is a relatively small device—a mere 50 feet in diameter. To attune to this mythallar, a creature must finish a short rest within 30 feet of it, meditating on the mythallar. Up to eight creatures can be attuned to it at one time; otherwise, the Ythryn mythallar follows the attunement rules in the Dungeon Master's Guide. If a ninth creature tries to attune to the mythallar, nothing happens." + "\n" + "All creatures attuned to the Ythryn mythallar can sense when the device is being used. A creature attuned to the device can use any of its properties, but only if all other creatures attuned to the device agree to allow it. The Ythryn mythallar's properties are as follows:" + "\n" + " \u2022 While you're on the same plane of existence as the Ythryn mythallar, you can use an action to cause it to fly in any direction you choose at a speed of 30 feet. All matter within 500 feet of the device moves with it. The Ythryn mythallar and all structures held aloft by it hover in place when not in motion." + "\n" + "\u2022 As an action, you can cause one magic item you are holding within 30 feet of the Ythryn mythallar to immediately regain all its expended charges or uses. A magic item recharged in this manner can't be recharged by the Ythryn mythallar again until after the item regains expended charges or uses on its own." + "\n" + "\u2022 You can use the Ythryn mythallar to cast the control weather spell without requiring any components and without the need for you to be outdoors. This casting of the spell has a 50-mile radius. For the duration of the spell's casting time, you must be within 30 feet of the Ythryn mythallar or the spell fails." + "\n" + toUni("Touching the Mythallar") + ". Any creature that touches the globe of the mythallar must make a DC 22 Constitution saving throw, taking 180 (20d10 + 70) radiant damage on a failed save, or half as much damage on a successful one. Undead have disadvantage on this saving throw. Any object that touches the globe, other than an artifact or the mythallar's cradle, is disintegrated instantly (no save).",
	toNotesPage : [{
		name : "Ythryn Mythallar Properties",
		popupName : "Ythryn Mythallar Properties",
		note : [
			"The Ythryn Mythallar is a 50 ft diamter crystal ball that sits on a cradle",
			"It has the following properties:",
			" \u2022 Sheds light in a 300 ft radius and dim light for an additional 300 ft",
			" \u2022 Up to 8 creatures can attune to it, a 9th attunement fails",
			"   \u2022 To attune, a creature must short rest within 30 ft of it",
			" \u2022 All those attuned to it can sense when sense when it is being used",
			" \u2022 All those attuned must agree to allow any properties to be used",
			" \u2022 You can use an action to use the Ythryn Mythallar in the following ways:",
			"   \u2022 While on the same plane, give it a flying speed of 30 ft",
			"     All matter within 500 ft of it moves with it",
			"     The ball and all structures held aloft by it hover in place when not in motion",
			"   \u2022 Cause one magic item to regain all charges/uses",
			"     I must be within 30 ft of the ball and holding the item",
			"     It cannot be recharged again until all charges/uses are expended",
			"   \u2022 Case the control weather spell without components or spell slots",
			"     It has a radius of 50 miles and can be cast inside",
			"     I must be within 30 ft of the ball for the casting time, or it will fail",
			"Any creature that touches the ball must make a DC 22 Constitution save",
			"On a failure, they take 20d10 + 70 radiant damage, or half that on a success",
			"Undead have disadvantage on this saving throw",
			"Any object touching the ball, except artifacts or the cradle, is destroyed"
		]
	}]
};
MagicItemsList["chwinga charm"] = {
		name : "Chwinga Charm",
		source : ["IDRotF"],
		type : "wondrous item",
		rarity : "rare",
		descriptionFull : "This tiny object looks like a snowflake. Different types of chwinga charms exist, each with a different effect.",
		allowDuplicates : true,
		choices : ["Animal Conjuring", "Biting Cold", "Bounty", "Cold Resistance", "Heroism", "Snowball Strike", "The Ice Troll", "The Snow Walker", "The Traveler's Haven", "Vitality"],
		"animal conjuring" : {
			name : "Chwinga Charm - Animal Conjuring",
			description : "This tiny object looks like a snowflake. As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
			name : "1 charge",
			spells : ["conjure animals"],
			selection : ["conjure animals"],
			firstCol : "1",
			}],
			action : [["action", ""]]
		},
		"biting cold" : {
			name : "Chwinga Charm - Biting Cold",
			description : "This tiny object looks like a snowflake. As a bonus action, I can can expend 1 of the charm's charges to wreathe my weapon attacks with biting cold for 1 minute. Until this effect ends, I deal an extra 1d6 cold damage when I hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			action : [["bonus action", ""]]
		},
		"bounty" : {
			name : "Chwinga Charm - Bounty",
			description : "This tiny object looks like a snowflake. As an action, I can can expend 1 of the charm's charges to cast the Create Food And Water spell, requiring no components. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
			name : "1 charge",
			spells : ["create food and water"],
			selection : ["create food and water"],
			firstCol : "1",
			}],
			action : [["action", ""]]
		},
		"cold resistance" : {
			name : "Chwinga Charm - Cold Resistance",
			description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself resistance to cold damage for 24 hours.",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		},
		"heroism" : {
			name : "Chwinga Charm - Heroism",
			description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself the benefit of a Potion of Heroism. I gain 10 temporary hit points that last for 1 hour and am under the effect of the Bless spell (no concentration required).",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		},
		"snowball strike" : {
			name : "Chwinga Charm - Snowball Strike",
			description : "As a bonus action, I can can expend 1 of the charm's charges to create a magical snowball in my hand and throw it. The snowball is a magic ranged weapon , has a 20/60 range, deals 1d4 cold damage, and scores a critical hit on a roll of 19 or 20. On a critical hit, the target is blinded until the end of its next turn",
			usages : 5,
			recovery : "never",
			action : [["bonus action", ""]]
		},
		"the ice troll" : {
			name : "Chwinga Charm - The Ice Troll",
			description : "This tiny object looks like a snowflake. As a reaction when I take cold damage, I can expend the charm to reduce the damage to 0. I regain a number of hit points equal to half the cold damage I would have taken.",
			usages : 1,
			recovery : "never",
			action : [["reaction", "Chwinga Charm (cold damage)"]]
		},
		"the snow walker" : {
			name : "Chwinga Charm - The Snow Walker",
			description : "As an action, I can expend 1 of the charm's charges to gain these 24 hour benefits: I can see 60 ft through areas heavily obscured by snow, I am immune to the effects of extreme cold (described in DMG), and I and my allies within 15 feet of me ignore snow/ice difficult terrain. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			action : [["action", ""]]
		},
		"the traveler's haven" : {
			name : "Chwinga Charm - The Traveler's Haven",
			description : "This tiny object looks like a snowflake. As an action, I can expend 1 of the charm's charges to cast the Leomund's Tiny Hut spell, no components required. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
			name : "1 charge",
			spells : ["leomund's tiny hut"],
			selection : ["leomund's tiny hut"],
			firstCol : "1",
			}],
		},
		"vitality" : {
			name : "Chwinga Charm - Vitality",
			description : "As an action, I can can expend the charm to give myself the benefit of a Potion of Vitality. I remove any exhaustion I am suffering and am cured of any disease or poison affecting me. For the next 24 hours, I regain the maximum number of hit points for any Hit Die I spend.",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		}
	};


// Candlekeep
MagicItemsList["book flail"] = {
	name : "Book Flail",
	source : ["CM"],
	type : "weapon (flail)",
	rarity : "uncommon",
	magicItemTable : "F",
	attunement : false,
	description : "A remnant from Fistania's animated library, this book is connected to a length of chain and is entitled Martial Attack Techniques. It may be used as a magical flail that grants a +1 bonus to attack and damage rolls.",
	weight : 2,
	weaponsAdd : ["Book Flail"],
	weaponOptions : {
		baseWeapon : "flail",
		regExpSearch : /^(?=.*book)(?=.*flail).*$/i,
		name : "Book Flail",
		source : ["CM"],
		range : "Melee",
		modifiers : [1,1]
	}
};
MagicItemsList["radiance"] = {
	name : "Radiance, Wand of the War Mage +1",
	source : ["CM"],
	type : "wand",
	rarity : "uncommon",
	magicItemTable : "F",
	attunement : true,
	description : "While holding this golden hand mirror, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack. While in darkness, Radiance sheds dim light in a 5-foot radius. An attuned creature can use a bonus action while holding the mirror to cast the enhance ability spell, chosing itself and no other creature as the spell’s target. Once this property is used, it can’t be used again until the next dawn.",
	descriptionFull : "This wand of the war mage takes the form of an exquisite golden hand mirror and graints a +1 bonus to spell attack rolls while you are holding it. In addition, you ignore half cover when making a spell attack. When surrounded by darkness, it sheds dim light in a 5-foot radius. A creature that is attuned to Radiance can use a bonus action while holding the mirror to cast the enhance ability spell, chosing itself and no other creature as the spell’s target. Once this property of the wand is used, it can’t be used again until the next dawn.",
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	usages : 1,
	recovery : "dawn",
	limfeaname : "Radiance (Cast Enhance Ability)",
	action : [["bonus action", ""]],
	spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["enhance ability"],
			selection : ["enhance ability"],
			firstCol : "oncelr"}],
	spellChanges : {
		"enhance ability" : {
			time : "1 ba",
			range : "Self",
			changes : "Casting time is one bonus action and the range is self."
			},
		},
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 1;
				},
				"I gain a +1 bonus to spell attack rolls."
				]
			}
};
MagicItemsList["orcus figurine"] = {
	name : "Orcus Figurine",
	source : ["CM"],
	type : "wondrous item",
	rarity : "",
	storyItemAL : true,
	attunement : false,
	description: "The figurine is a Tiny object with AC 17, 3 hit points, and immunity to all dmg types except radiant. It has the following properties: 1. Undead w/i 30 ft of the figurine can’t be turned. 2. Dead creatures w/i 30 ft of the figurine can’t be returned to life. 3. A creature that holds the figurine while praying to Orcus for 1+ hours has a 10 % chance of summoning an avatar of Orcus. The avatar can’t be summoned again for 30 days and has the statistics of a wraith except that it’s chaotic evil. It attacks all non-undead creatures, and disappears after 1 hour or when reduced to 0 hp.",
	descriptionFull : "Vinique the wereraven stole this six-inch-tall sculpture from an evil merchant before it could be sold at auction in a major city. Carved from an ogre’s petrified heart, the gray figurine depicts the Demon Prince of Undeath in ghastly detail, clutching his skull-topped wand in one hand and three severed heads by the hair in the other. The figurine smells like decaying flesh, and this scent is detectable out to a range of 5 feet." + "\n   " + "The figurine is a Tiny object with AC 17, 3 hit points, and immunity to all types of damage except radiant damage. A detect evil and good spell or similar magic reveals that the figurine has been desecrated. As long as it has at least 1 hit point, the figurine has the following magical properties:" + "\n   " + "1.Undead within 30 feet of the figurine can’t be turned." + "\n   " + "2.Dead creatures within 30 feet of the figurine can’t be brought back to life." + "\n   " + "3.A creature that holds the figurine while praying to Orcus for at least 1 hour has a 10 percent chance of summoning a smoky avatar of the demon lord. Once this avatar is summoned, it can’t be summoned again for 30 days. Orcus’s avatar has the statistics of a wraith except that it’s chaotic evil. It attacks all non-undead creatures it encounters, and it disappears after 1 hour or when reduced to 0 hit points.",
};
MagicItemsList["serpent scale armor"] = {
	name : "Serpent Scale Armor",
	source : ["CM"],
	type : "armor (scale mail)",
	rarity : "uncommon",
	attunement : false,
	description : "This suit of magic armor is made from shimmering scales. While wearing it, you can apply your full Dexterity modifier when determining your AC. In addition, this armor does not impose disadvantage on your Dexterity (Stealth) checks.",
	descriptionFull : "This suit of magic armor is made from shimmering scales. While wearing it, you can apply your full Dexterity modifier (instead of a maximum of +2) when determining your Armor Class. In addition, this armor does not impose disadvantage on your Dexterity (Stealth) checks.",
	eval : function () {
		Value('Medium Armor Max Mod', 6);
		ApplyArmor(What("AC Armor Description"));
	},
	removeeval : function () {
		tDoc.resetForm(['Medium Armor Max Mod']);
		ApplyArmor(What("AC Armor Description"));
	},
	armorAdd : "Serpent Scale Armor",
	armorOptions : [{
		regExpSearch : /^(?=.*serpent)(?=.*scale).*$/i,
		name : "Serpent Scale Armor",
		source: ["CM"],
		type : "medium",
		ac : 14,
		stealthdis : false,
		weight : 45
		}]
};
MagicItemsList["serpent's fang"] = {
	name : "Serpent's Fang",
	source : ["CM"],
	type : "weapon (longsword)",
	rarity : "rare",
	attunement : false,
	description : "This single-edged magic sword is made from the scrimshawed fang of a giant serpent. The weapon deals an extra 1d10 poison damage to any target it hits.",
	descriptionFull : "This single-edged magic sword is made from the scrimshawed fang of a giant serpent. Its hilt changes shape to adjust to the grasp of any creature that picks it up. The weapon deals an extra 1d10 poison damage to any target it hits.",
	weight : 2,
	weaponsAdd : ["Serpent's Fang"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*serpent)(?=.*fang).*$/i,
		name : "Serpent's Fang",
		source : ["CM"],
		description : "Versatile (d10), +1d10 poison dmg per hit",
	}
};
MagicItemsList["gloves of soul catching"] = {
	name : "Gloves of Soul Catching",
	source : ["CM"],
	type : "wondrous item",
	rarity : "legendary",	
	notLegalAL : true,
	attunement : true,
	scoresOverride : [0, 0, 20, 0, 0, 0],
	description : "Your Constitution score is 20 while you wear these gloves. This property has no effect on you if your Constitution is already 20 or more. After hitting w/ an unarmed strike while wearing these gloves, you can deal an extra 2d10 force dmg to target. You also regain a number of hp equal to the force dmg dealt or you can gain advantage on one atk roll, ability check, or saving throw you make before the end of your next turn.",
	descriptionFull : "Your Constitution score is 20 while you wear these gloves. This property of the gloves has no effect on you if your Constitution is already 20 or higher" + "\n   " + "After making a successful unarmed strike while wearing these gloves, you can use the gloves to deal an extra 2d10 force damage to the target, and you regain a number of hit points equal to the force damage dealt. Alternatively, instead of regaining hit points in this way, you can choose to gain advantage on one attack roll, ability check, or saving throw you make before the end of your next turn.",
	weight : 2,
	weaponsAdd : ["Gloves of Soul Catching"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*gloves)(?=.*soul)(?=.*catching).*$/i,
		name : "Gloves of Soul Catching",
		source : ["CM"],
		range : "Melee",
		description : "+2d10 force dmg. Regain hp equal to force dmg OR adv. on 1 atk/ability chk/saving throw before end of next turn",
	}
};
MagicItemsList["watchful helm"] = {
	name : "Watchful Helm",
	source : ["CM"],
	type : "wondrous item",
	rarity : "very rare",	
	attunement : true,
	description : "While you wear this helm, you gain a +1 bonus to AC, remain aware of your surroundings even while asleep, and have advantage on Wisdom (Perception) checks that rely on sight. As a bonus action, you can cast the see invisibility spell from the helm. Once this property of the helm is used, it can’t be used again until the next dawn.",
	descriptionFull : "While you wear this helm, you gain a +1 bonus to AC and remain aware of your surroundings even while you’re asleep, and you have advantage on Wisdom (Perception) checks that rely on sight." + "\n   " + "As a bonus action, you can cast the see invisibility spell from the helm. Once this property of the helm is used, it can’t be used again until the next dawn.",
	weight : 1,
	extraAC : [{name : "Watchful Helm", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
	usages : 1,
	recovery : "dawn",
	limfeaname : "Watchful Helm (Cast See Invis.)",
	action : ["bonus action", ""],
	advantages : ["Perception", true],
	vision : [["Adv. on Perception checks that rely on sight", 0]],
	spellcastingBonus : {
			name : "Once per dawn",
			spells : ["see invisibility"],
			selection : ["see invisibility"],
			firstCol : "oncelr",
		},
	spellChanges : {
		"see invisibility" : {
			time : "1 ba",
			changes : "Casting time is one bonus action."
		}
	}
};
MagicItemsList["staff of fate"] = {
	name : "Staff of Fate",
	source : ["CM"],
	type : "staff (quarterstaff)",
	rarity : "very rare",
	attunement : true,
	description : "This crystal staff can be wielded as a magic quarterstaff that grants a +3 bonus to atk & dmg rolls. The staff has 6 charges. As a bns action, you can expend 1 charge to give a creature you can see a d4. The recipient can roll the d4 & add the result to 1 ability chk, atk roll, dmg roll, or saving throw made before the start of your next turn. If the extra die isn't used by then, it is lost. If you use the last charge, roll a d20. On a 9 or lwr, the staff becomes a nonmagical quarterstaff & breaks the 1st time it deals dmg. On a roll of 10+, the staff regains 1d6 charges.",
	descriptionFull : "This transparent crystal staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it." + "\n   " + "Altered Outcome. The staff has 6 charges. As a bonus action, you can expend 1 of the staff's charges to give yourself or one other creature that you can see a d4. The recipient can roll this d4 and add the number rolled to one ability check, attack roll, damage roll, or saving throw it makes before the start of your next turn. If this extra die is not used before then, it is lost." + "\n   " + "If you expend the staff's last charge, roll a d20. On a roll of 9 or lower, the staff becomes a nonmagical quarterstaff that breaks the first time it scores a hit and deals damage. On a roll of 10 or higher, the staff regains 1d6 of its expended charges." + "\n   " + "Proficiency with a quarterstaff allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
	weight : 4,
	usages : 6,
	recovery : "special",
	limfeaname : "Staff of Fate (Alter Outcome)",
	action : ["bonus action", ""],
	weaponsAdd : ["Staff of Fate"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*fate).*$/i,
		name : "Staff of Fate",
		source : ["CM"],
		range : "Melee",
		modifiers : [3,3],
	}
};
MagicItemsList["nether scroll"] = {
	name : "Nether Scroll of Azumar",
	source : ["CM"],
	type : "scroll",
	rarity : "legendary",
	storyItemAL : true,
	attunement : false,
	description : "After 30 days of study (8+ hrs/day), make a DC 25 Int (Arcana) check. If fail, take 16d10 psychic dmg & you must study scroll for another 30 days before repeating the attempt. On a success, your Int score increases to a max of 22, you gain adv. on saving throws against spells & magical effects, a stone golem appears w/i 60 ft in unoccupied space & acts as ally. If you die, the golem turns to dust.",
	descriptionFull : "Unlike most scrolls, a Nether Scroll of Azumar is not a consumable magic item. It takes 30 days of concentrated study—at least 8 hours per day—to attempt to understand this scroll. After completing this study, you must make a DC 25 Intelligence (Arcana) check. If this check fails, you take 16d10 psychic damage, and you can attempt the check again after another 30 days of concentrated study." + "\n   " + "When you succeed on the check, you gain the following benefits:" + "\n   " + "Your Intelligence score increases by 2, to a maximum of 22. Once you gain this benefit, you can’t use this scroll to increase your Intelligence again. You gain advantage on saving throws against spells and other magical effects." + "\n   " + "When you gain the scroll’s benefits, a stone golem magically appears in an unoccupied space within 60 feet of you and acts as your ally. If you die, the golem turns to dust.",
	scorestxt : "Int max changed based on score when used",
	scores : [0, 0, 0, 2, 0, 0],
	savetxt : { text : ["Adv. on saves vs. spells and other magical effects"] },
	choices : ["Int < 19", "Int = 19", "Int > 19"],
	"int < 19" : {
			scoresMaximum : [0, 0, 0, 0, 0, 0]
		},
	"int = 19" : {
			scoresMaximum : [0, 0, 0, 21, 0, 0]
		},
	"int > 19" : {
			scoresMaximum : [0, 0, 0, 22, 0, 0]
		},
};
MagicItemsList["candlekeep alchemy jug"] = {
	name : "Alchemy Jug (Candlekeep)",
	source : ["CM"],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "As an action, command the jug to produce liquid; or an action to uncorked it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal), Boiling Hot tea (1 qt - blue jug only), Soy Sauce (1 gal - orange jug only).",
	descriptionFull : "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty." + "\n   " + "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named." + "\n   " + "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n" + toUni("Max\tLiquid\t\tMax\tLiquid") + "\n1 quart\tOil\t\t1 quart\tBoiling Tea (Bl. J.)\n1 gallon\tSoy Sauce (Or. J.)\t2 gallons\tVinegar\n4 gallons\tBeer\t\t8 gallons\tWater, fresh\n1 gallon\tHoney\t\t12 gallons\tWater, salt\n2 gallons\tMayonnaise\t1 gallon\tWine",
	weight : 12,
	allowDuplicates : true,
	choices : ["Alchemy Jug (Blue)", "Alchemy Jug (Orange)"],
	"alchemy jug (blue)" : {
		name : "Alchemy Jug (Blue)",
		description: "As an action, command the jug to produce liquid; or an action to uncorked it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal), Boiling Hot Tea (1 qt).",
		descriptionLong: "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): beer (4 gallons), boiling hot tea (1 quart), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon)."
		},
	"alchemy jug (orange)" : {
		name : "Alchemy Jug (Orange)",
		description: "As an action, command the jug to produce liquid; or an action to uncorked it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal), Soy Sauce (1 gal).",
		descriptionLong: "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), soy sauce (1 gallon), wine (1 gallon)."
		},
};

// Tashas

MagicItemsList["absorbing tattoo"] = {
    name : "Absorbing Tattoo",
    source : ["TCoE",119],
    type : "wondrous item",
    rarity : "very rare",
    description : "This magic tattoo features designs that emphasize one color.",
    descriptionFull : "Produced by a special needle, this magic tattoo features designs that emphasize one color.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Damage Resistance. While the tattoo is on your skin, you have resistance to a type of damage associated with that color, as shown on the table below. The DM chooses the color or determines it randomly.\n  1 : Acid : Green\n  2 : Cold : Blue\n  3 : Fire : Red\n  4 : Force : White\n  5 : Lightning : Yellow\n  6 : Necrotic : Black\n  7 : Poison : Violet\n  8 : Psychic : Silver\n  9 : Radiant : Gold\n  10 : Thunder : Orange\n  Damage Absorption. When you take damage of the chosen type, you can use your reaction to gain immunity against that instance of the damage, and you regain a number of hit points equal to half the damage you would have taken. Once this reactino is used, it can't be used again until the next dawn.",
    attunement : true,
    usages : "1",
    recovery : "dawn",
    choices : ["acid", "cold", "fire", "force", "lightning", "necrotic", "poison", "psychic", "radiant", "thunder"],
    "acid" : {        
        name : "Acid Absorbing Tattoo",
        action : ["reaction", "Acid Immunity"],
        description : "This magic tattoo features designs that emphasize the color green.  While on my skin, this tattoo gives me resistance to acid damage. I can use my reaction when hit with acid damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Acid"]
    },
    "cold" : {        
        name : "Cold Absorbing Tattoo",
        action : ["reaction", "Cold Immunity"],
        description : "This magic tattoo features designs that emphasize the color blue.  While on my skin, this tattoo gives me resistance to cold damage. I can use my reaction when hit with cold damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Cold"]
    },
    "fire" : {        
        name : "Fire Absorbing Tattoo",
        action : ["reaction", "Fire Immunity"],
        description : "This magic tattoo features designs that emphasize the color red.  While on my skin, this tattoo gives me resistance to fire damage. I can use my reaction when hit with fire damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Fire"]
    },
    "force" : {        
        name : "Force Absorbing Tattoo",
        action : ["reaction", "Force Immunity"],
        description : "This magic tattoo features designs that emphasize the color white.  While on my skin, this tattoo gives me resistance to force damage. I can use my reaction when hit with force damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Acid"]
    },
    "lightning" : {        
        name : "Lightning Absorbing Tattoo",
        action : ["reaction", "Lightning Immunity"],
        description : "This magic tattoo features designs that emphasize the color yellow.  While on my skin, this tattoo gives me resistance to lightning damage. I can use my reaction when hit with lightning damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Lightning"]
    },
    "necrotic" : {        
        name : "Necrotic Absorbing Tattoo",
        action : ["reaction", "Necrotic Immunity"],
        description : "This magic tattoo features designs that emphasize the color black.  While on my skin, this tattoo gives me resistance to necrotic damage. I can use my reaction when hit with necrotic damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Necrotic"]
    },
    "poison" : {        
        name : "Poison Absorbing Tattoo",
        action : ["reaction", "Poison Immunity"],
        description : "This magic tattoo features designs that emphasize the color violet.  While on my skin, this tattoo gives me resistance to poison damage. I can use my reaction when hit with poison damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Poison"]
    },
    "psychic" : {        
        name : "Psychic Absorbing Tattoo",
        action : ["reaction", "Psychic Immunity"],
        description : "This magic tattoo features designs that emphasize the color silver.  While on my skin, this tattoo gives me resistance to psychic damage. I can use my reaction when hit with psychic damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Psychic"]
    },
    "radiant" : {        
        name : "Radiant Absorbing Tattoo",
        action : ["reaction", "Radiant Immunity"],
        description : "This magic tattoo features designs that emphasize the color gold.  While on my skin, this tattoo gives me resistance to radiant damage. I can use my reaction when hit with radiant damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Radiant"]
    },
    "thunder" : {        
        name : "Thunder Absorbing Tattoo",
        action : ["reaction", "Thunder Immunity"],
        description : "This magic tattoo features designs that emphasize the color orange.  While on my skin, this tattoo gives me resistance to thunder damage. I can use my reaction when hit with thunder damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Thunder"]
    }
}

MagicItemsList["alchemical compendium"] = {
	name : "Alchemical Compendium",
	source : ["TCoE", 119],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function(v) {
		return v.isSpellcaster && classes.known.wizard ? true : false;
	},
	description : "When found, this spellbook contains the following spells: enlarge/reduce, feather fall, flesh to stone, gaseous form, magic weapon, and polymorph. The book has 3 charges that regains 1d3 expended charges at dawn. ",
	descriptionFull : "Acrid odors cling to this stained, heavy volume. The book's metal fittings are copper, iron, lead, silver, and gold, some frozen mid-transition from one metal to another. When found, the book contains the following spells: enlarge/reduce, feather fall, flesh to stone, gaseous form, magic weapon, and polymorph. It functions as a spellbook for you.\n  While you are holding the book, you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the transmutation school.\n  As an action, you can touch a nonmagical object that isn't being worn or carried and spend a number of charges to transform the target into another object. For 1 charge, the object can be no larger than 1 foot on a side. You can spend additional charges to increase the maximum dimensions by 2 feet per charge. The new object must have a gold value equal to or less than the original.",
	usages : 3,
	recovery : "dawn",
    action : ["action", "Transform Non-magic Object (1+ charge)"],
    spellcastingBonus : [{
        name : "Enlarge/Reduce",
        spells: ["enlarge/reduce"],
        selection : ["enlarge/reduce"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Feather Fall",
        spells: ["feather fall"],
        selection : ["feather fall"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Flesh to Stone",
        spells: ["flesh to stone"],
        selection : ["flesh to stone"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Gaseous Form",
        spells: ["gaseous form"],
        selection : ["gaseous form"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Magic Weapon",
        spells: ["magic weapon"],
        selection : ["magic weapon"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Polymorph",
        spells: ["polymorph"],
        selection : ["polymorph"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["all-purpose tool"] = {
    name : "All-Purpose Tool",
    source : ["TCoE", 119],
    type : "wondrous item",
    description : "While holding this screwdriver I gain a bonus to spell attack rolls and saving throw DCs of my artificer spells.\n  I can transform this screwdriver into any type of artisan's tools as an action.\n  As an action I can choose any cantrip that I don't know from any class list and can cast is as an artificer cantrip for 8 hours. This can't be used again until the next dawn.",
    descriptionFull : "This simple screwdriver can transform into a variety of tools; as an action, you can touch the item and transform it into any type of artisan's tool of your choice (see the \"Equipment\" chapter in the Player's Handbook for a list of artisan's tools). Whatever form the tool takes, you are proficient with it.\n  While holding this tool, you gain a bonus to the spell attack rolls and the saving throw DCs of your artificer spells. The bonus is determined by the tool's rarity.\n  As an action, you can focus on the tool to channel your creative forces. Choose a cantrip that you don't know from any class list. For 8 hours, you can cast that cantrip, and it counts as an artificer cantrip for you. Once this property is used, it can't be used again until the next dawn.",
    attunement : true,
    prerequisite : "Requires attunement by an artificer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.artificer ? true : false;
    },
    choices : ["+1 tool (uncommon)", "+2 tool (rare)", "+3 tool (very rare)"],
    usages : 1,
    recovery : "dawn",
    action : ["action", "Choose Unknown Cantrip (8 hours)"],
    "+1 tool (uncommon)" : {
        name : "All-Purpose Tool +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While holding this screwdriver I gain a +1 bonus to spell attack rolls and saving throw DCs of my artificer spells. As an action I can transform this screwdriver into any type of artisan's tools. Once per day, as an action I can choose any cantrip that I don't know and can cast it as an artificer cantrip for 8 hours.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/artificer/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my artificer spells."
            ]
        }
    },
    "+2 tool (rare)" : {
        name : "All-Purpose Tool +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While holding this screwdriver I gain a +2 bonus to spell attack rolls and saving throw DCs of my artificer spells. As an action I can transform this screwdriver into any type of artisan's tools. Once per day, as an action I can choose any cantrip that I don't know and can cast it as an artificer cantrip for 8 hours.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/artificer/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my artificer spells."
            ]
        }
    },
    "+3 tool (very rare)" : {
        name : "All-Purpose Tool +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While holding this screwdriver I gain a +3 bonus to spell attack rolls and saving throw DCs of my artificer spells. As an action I can transform this screwdriver into any type of artisan's tools. Once per day, as an action I can choose any cantrip that I don't know and can cast it as an artificer cantrip for 8 hours.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/artificer/).test(spellcasters)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my artificer spells."
            ]
        }
    }
}

MagicItemsList["amulet of the devout"] = {
    name : "Amulet of the Devout",
    source : ["TCoE", 119],
    type : "wondrous item",
    description : "While I wear this holy symbol, I gain a bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
    descriptionFull : "This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol you gain a bonus to spell attack rolls and the saving throw DCs of your spells. The bonus is determined by the amulet's rarity.\n  While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn.",
    attunement : true,
    prerequisite : "Requires attunement by a cleric or paladin",
    prereqeval : function(v) {
        return (classes.known.cleric ? true : false || classes.known.paladin ? true : false);
    },
    choices : ["+1 amulet (uncommon)", "+2 amulet (rare)", "+3 amulet (very rare)"],
    usages : 1,
    recovery : "dawn",
    "+1 amulet (uncommon)" : {
        name : "Amulet of the Devout +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While I wear this holy symbol, I gain a +1 bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/cleric|paladin/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+2 amulet (rare)" : {
        name : "Amulet of the Devout +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While I wear this holy symbol, I gain a +2 bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/cleric|paladin/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+3 amulet (very rare)" : {
        name : "Amulet of the Devout +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While I wear this holy symbol, I gain a +3 bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/cleric|paladin/).test(spellcasters)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    }
}

MagicItemsList["arcane grimoire"] = {
    name : "Arcane Grimoire",
    source : ["TCoE", 120],
    type : "wondrous item",
    description : "While I hold this spellbook, I gain a bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
    descriptionFull : "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a bonus to spell attack rolls and the saving throw DCs of your wizard spells. The bonus is determined by the book's rarity.\n  You can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1.",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    choices : ["+1 grimoire (uncommon)", "+2 grimoire (rare)", "+3 grimoire (very rare)"],
    usages : 1,
    recovery : "dawn",
    "+1 grimoire (uncommon)" : {
        name : "Arcane Grimoire +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While I hold this spellbook, I gain a +1 bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/wizard/).test(spellcasters)|ability == 4)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+2 grimoire (rare)" : {
        name : "Arcane Grimoire +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While I hold this spellbook, I gain a +2 bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/wizard/).test(spellcasters)|ability == 4)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+3 grimoire (very rare)" : {
        name : "Arcane Grimoire +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While I hold this spellbook, I gain a +3 bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/wizard/).test(spellcasters)|ability == 4)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    }
}

MagicItemsList["astral shard"] = {
    name : "Astral Shard",
    source : ["TCoE", 120],
    type : "wondrous item",
    rarity : "rare",
    description : "While I hold or wear this crystal, I can teleport to an unoccupied space within 30 feet that I can see immediately following the use of a metamagic option while casting a sorcerer spell.",
    descriptionFull : "This crystal is a solidified shard of the Astral Plane, swirling with silver mist. As an action, you can attatch the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus for your sorcerer spells while you hold or wear it.\n  When you use a Metamagic option on a spell while you are holding or wearing the shard, immediately after casting the spell you can teleport to an unoccupied space you can see within 30 feet of you.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
    action : [
        ["action", "Tentacle Attack (w/metamagic)"],
        ["action", "Attach/Detach Shard"]
    ]
}

MagicItemsList["astromancy archive"] = {
    name : "Astromancy Archive",
    source : ["TCoE", 120],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While I hold this disc, I can expend a charge to replace one of my prepared divination spells with one from the archive. Using my reaction I can force a creature making a saving throw or ability check within 30 ft to roll a d4 and add or subract the result from their roll.",
    descriptionFull : "This brass disc of articulated concentric rings unfolds into an armillary sphere. As a bonus action, you can unfold it into the sphere or back into a disc. When found, it contains the following spells, which are wizard spells for you while you are attuned to it: augury, divination, find the path, foresight, locate creature, and locate object. It functions as a spellbook for you, with spells encoded on the rings.\n  While you are holding the archive, you can use it as a spellcasting foucs for your wizard spells\n  The archive has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the archive, you can expend 1 charge to replace one of your prepeared wizard spells with a different spell in the archive. The new spell must be of the divination school.\n  When a creature you can see within 30 feet of you makes an attack roll, an ability check or a saving throw, you can use your reaction to expend 1 charge and force the creature to roll a d4 and apply the number rolled as a bonus or penalty (your choice) to the original roll. You can do this after you see the roll but before its effects are applied.",
    usages : 3,
	recovery : "dawn",
    action : ["reaction", "+/- 1d4 to atk/save/skill (1 chg)"],
    spellcastingBonus : [{
        name : "Augury",
        spells : ["augury"],
        selection : ["augury"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Divination",
        spells : ["divination"],
        selection : ["divination"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Find the path",
        spells : ["find the path"],
        selection : ["find the path"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Foresight",
        spells : ["foresight"],
        selection : ["foresight"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Locate Creature",
        spells : ["locate creature"],
        selection : ["locate creature"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Locate Object",
        spells : ["locate object"],
        selection : ["locate object"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["atlas of endless horizons"] = {
    name : "Atlas of Endless Horizons",
    source : ["TCoE", 120],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While I hold this book, I can expend a charge to replace one of my prepared spells with one from the atlas. When I am hit by an attack, I can use my reactionto teleport up to 10 feet to an unoccupied space I can see. If out of range of the attack, it misses.",
    descriptionFull : "This thick book is bound in dark leather, criss-crossed with inlaid silver lines suggesting a map or chart. When found, the book contains the following spells, which are wizard spells for you while you are attuned to the book: arcane gate, dimension door, gate, misty step, plane shift, teleportation circle, and word of recall. It functions as a spellbook for you.\n  While you are holding the book, you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.\n  When you are hit by an attack you can use your reaction to expend 1 charge to teleport up to 10 feet to an unoccupied space you can see. If your new position is out of range of the attack, it misses you.",
    usages : 3,
	recovery : "dawn",
    spellcastingBonus : [{
        name : "Arcane Gate",
        spells : ["arcane gate"],
        selection : ["arcane gate"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Dimension door",
        spells : ["dimension door"],
        selection : ["dimension door"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Gate",
        spells : ["gate"],
        selection : ["gate"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Misty step",
        spells : ["misty step"],
        selection : ["misty step"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Plane Shift",
        spells : ["plane shift"],
        selection : ["plane shift"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Teleportation Circle",
        spells : ["teleportation circle"],
        selection : ["teleportation circle"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Word of Recall",
        spells : ["word of recall"],
        selection : ["word of recall"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }],
    action : ["reaction", "Teleport 10ft (1 charge)"]
}

MagicItemsList["baba yaga's mortar and pestle"] = {
    name : "Baba Yaga's Mortar and Pestle",
    source : ["TCoE", 121],
    type : "wondrous item",
    rarity : "artifact",
    description : "I can expand the mortar to fit up to a Large creature. I can make the pestle a quarterstaff and back at will. When hitting with a melee attack I can add 1d8 force for each charge expended up to 3. Holding both, I can fill the mortar with any nonmagical plant, fluid or mineral worth 10 gp by speaking its name.",
    descriptionFull : "The creations of the immortal Bab Yaga defy the laws of mortal magic. Among the notorious implements that cement her legend on countless worlds are the artifacts that propel her through the planes: Baba Yaga's Mortar and Pestle. These signature tools of Baba Yaga are a single artifact for purposes of attunement. Should the two objects become separated, the pestle appears next to the mortar at the next dawn.\n  Random Properties. This artifact has the following random properties, which you can determine by rolling on the teables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n  Properties of the Mortar. The mortar is a Tiny wooden bowl. However, the mortar increases in size to accommodate anything you place inside, expanding--if there's enough space--up to Large size, meaning it can hold even a Large creature.\n  Properties of the Pestle. The pestle is a 6-inch-long, worn wooden tool. Once during your turn while you are holding the pestle, you can extend it into a quarterstaff or shrink it back into a pestle (no action required). As a quarterstaff, the pestle is a magic weapon that grants a +3 bonus to attack and damage rolls made with it.\n  The pestle has 12 charges. When you hit with a melee attack using the pestle, you can expend up to 3 of its charges to deal an extra 1d8 force damage for each charge expended. The pestle regains all expended charges daily at dawn.\n  Perfect Tools. While holding the mortar and pestle, you can use your action to say the name of any nonmagical plant, mineral, or fluid worth 10 gp or less. The mortar instantly fills with the desired amount of that material. Once you use this action you can't do so again until you finish a short or long rest.\n  You can also use the artifact as alchemist's supplies, brewer's supplies, cook's utensils, an herbalism kit, and a poisoner's kit. You have advantage on any check you make using the artifact as one of these tools.\n  Primal Parts. As an action while the pestle and the mortar is within 5 geet of you, you can command the pestle to grind. For the next minute, or until you use your action to verbally command it to stop, the pestle moves on its own, grinding the contents of the mortar into a mush or fine powder that's equally useful for cooking or alchemy. At the start of each of your turns, whatever is in the mortar takes 4d10 force damage. If this reduces the target's hit points to 0, the target is reduce to powder, pulp, or paste, as appropriate. Only magic items are unaffected. If you wish, when the pestle stops, you can have the mortar separate its contents--like powdered bone, crushed herbs, pulped organs--into separate piles.\n  Traverse the Night. If you are holding the pestle while you are inside the mortar, you can use your action to verbally command the mortar to travel to a specific place or creature. You don't need to know where your destination is, but it must be a specific destination--not just the nearest river or a red dragon's lair. If the stated destination is within 1,000 miles of you, the mortar lifts into the air and vanishes. You and any creatures in the mortar travel through a dreamlike sky, with hazy reflections of the world passing by below. Creatures might see images of you streaking through the sky between your point of origin and the destination. You arrive at the location 1 hour later or, if it is night, 1 minute later.\n  Bones Know Their Home. When you command the mortar to travel, you can instead throw out the dust or paste of something ground by the mortar and name a location on a different plane of existence or a different world on the Material Plane. If that material came from a creature native to the named plane or world, the mortar travels through an empty night sky to an unoccupied space at that destination, arriving in 1 minute.\n  Destroying the Mortar and Pestle. The mortar and pestle are destroyed if they are crushed underfoot by the Dancing Hut of Baba Yaga or by Baba Yaga herself.",
    attunement : true,
    usages : 12,
    recovery : "dawn",
    action : [
        ["action", "Traverse the Night"],
        ["action", "Primal Parts"],
        ["action", "Perfect Tools"]
    ],
    weaponOptions : [{
        name : "Baba Yaga's Pestle",
        source : ["TCoE", 121],
        regExpSearch : /^(?=.*pestle)(?=.*yaga's)(?=.*baba).*$/i,
        description : "Versatile (1d8); 1-3 charges per attack add 1d8 force damage per charge",
        modifiers : [3,3],
        type: "simple",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 6, "bludgeoning"],
        range : "Melee",
        tooltip : "I have to expand Baba Yaga's Pestle into a quarterstaff before I may use it as a weapon.",
        defaultExcluded : true
    }]
}

MagicItemsList["barrier tattoo"] = {
    name : "Barrier Tattoo",
    source : ["TCoE",122],
    type : "wondrous item",
    description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing armor, this tatoo grants me an Armor Class related to the rarity of the tattoo.",
    descriptionFull : "Produced by a special needle, this magic tatoo depicts protective imagery and uses ink that resembles liquid metal.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Protection. While you aren't wearing armor, the tattoo grants you an Armor Class depending on the tattoo's rarity, as shown below. You can use a shield and still gain this benefit.\n  Uncommon : 12 + your Dexterity modifier\n  Rare : 15 + your Dexterity modifier (maximum of +2)\n  Very Rare : 18",
    attunement : true,
    choices : ["uncommon", "rare", "very rare"],
    "uncommon" : {
        rarity : "uncommon",
        name : "Barrier Tattoo (uncommon)",
        description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing any armor, this tattoo grants me an Armor Class of 12 plus my Dexterity Modifier.",
        addArmor : "Barrier Tattoo (uncommon)",
        armorOptions : {
            regExpSearch : /^(?=.*barrier)(?=.*(tattoo)).*$/i,
            name : "Barrier Tattoo (uncommon)",
            source : ["TCoE",122],
            ac : 12
        }
    },
    "rare" : {
        rarity : "rare",
        name : "Barrier Tattoo (rare)",
        description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing any armor, this tattoo grants me an Armor Class of 15 plus my Dexterity Modifier (maximum of 2).",
        addArmor : "Barrier Tattoo (rare)",
        armorOptions : {
            regExpSearch : /^(?=.*barrier)(?=.*(tattoo)).*$/i,
            name : "Barrier Tattoo (rare)",
            source : ["TCoE",122],
            ac : 15,
            dex : 2
        }
    },
    "very rare" : {
        rarity : "very rare",
        name : "Barrier Tattoo (very rare)",
        description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing any armor, this tattoo grants me an Armor Class of 18.",
        addArmor : "Barrier Tattoo (very are)",
        armorOptions : {
            regExpSearch : /^(?=.*barrier)(?=.*(tattoo)).*$/i,
            name : "Barrier Tattoo (very rare)",
            source : ["TCoE",122],
            ac : 18,
            dex : -10
        }
    }
}

MagicItemsList["bell branch"] = {
    name : "Bell Branch",
    source : ["TCoE", 122],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a druid or warlock",
	prereqeval : function(v) {
		return v.isSpellcaster && (classes.known.druid ? true : false || classes.known.warlock ? true : false);
	},
    description : "This silver implement is shaped like a tree branch and is strung with small golden bells. As a bonus action I can expend 1 charge to detect the presence of aberrations, celestials, constructs, elementals, fey, fiends, or undead within 60 feet. As an action I can expend 1 charge to cast protection from evil and good.",
    descriptionFull : "This silver implement is shaped like a tree branch and is strung with small golden bells. The branch is a spellcasting focus for your spells while you hold it.\n  The branch has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it.\n  As a bonus action, you can expend 1 charge to detect the presence of aberrations, celestials, constructs, elementals, fey, fiends, or undead within 60 feet of you. If such creatures are present and don't have total cover from you, the bells ring softly, their tone indicating the creature types present.\n  As an action, you can expend 1 charge to cast protection from evil and good.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : [
        ["bonus action", "Detect Presence"],
        ["action","Cast Protection from Evil/Good"]
    ],
    spellcastingBonus : [{
        name : "Protection from Evil/Good",
        spells : ["protection from evil and good"],
        selection : ["protection from evil and good"],
        spellcastingAbility : "class"
    }]
}

MagicItemsList["blood fury tattoo"] = {
    name : "Blood Fury Tattoo",
    source : ["TCoE",122],
    type : "wondrous item",
    rarity : "legendary",
    description : "When I hit with a weapon attack I can expend a charge to add 4d6 necrotic damage and regain HP equal to the necrotic damage dealt. When I am damaged by a creature I can see, I can expend a charge and use my reation to make a melee attack against that creature with advantage.",
    descriptionFull : "Produced by a special needle, this magic tatoo evokes fury in its form and colors.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Bloodthirsty Strikes. The tattoo has 10 charges, and it regains all expended charges daily at dawn. While this tattoo is on your skin, you gain the following benefits:\n  When you hit a creature with a weapon attack, you can expend a charge to deal an extra 4d6 necrotic damage to the target, and you regain a number of hit points equal to the necrotic damage dealt.\n  When a creature you can see damages you, you can expend a charge and use your reaction to make a melee attack against that creature with advantage on your attack roll.",
    attunement : true,
    usages : 10,
    recovery : "dawn",
    action : ["reaction", "Melee Attack w/adv (1 chg)"]
}

MagicItemsList["bloodwell vial"] = {
    name : "Bloodwell Vial",
    source : ["TCoE",122],
    type : "wondrous item",
    attunement : true,
    description : "While I hold this vial, I gain a bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can gain 5 sorcery points once per day.",
    descriptionFull : "To attune this vial, you must place a few drops of your blood in it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells. The bonus is determined by the vial's rarity.\n  In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn.",
    usages : "1",
    recovery : "dawn",
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
    limfeaname : "Roll Hit Dice Recover 5 SP",
    choices : ["+1 vial (uncommon)", "+2 vial (rare)", "+3 vial (very rare)"],
    "+1 vial (uncommon)" : {
        name : "Bloodwell Vial +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While I hold this vial, I gain a +1 bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can regain 5 sorcery points once per day.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/sorcerer/).test(spellcasters)|ability == 6)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+2 vial (rare)" : {
        name : "Bloodwell Vial +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While I hold this vial, I gain a +2 bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can regain 5 sorcery points once per day.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/sorcerer/).test(spellcasters)|ability == 6)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+3 vial (very rare)" : {
        name : "Bloodwell Vial +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While I hold this vial, I gain a +3 bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can regain 5 sorcery points once per day.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/sorcerer/).test(spellcasters)|ability == 6)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
}

MagicItemsList["cauldron of rebirth"] = {
    name : "Cauldron of Rebirth",
    source : ["TCoE",122],
    type : "wondrous item",
    rarity : "very rare",
    description : "After a long rest, I can make a potion of greater healing that lasts up to 24 hours. As an action I can make the cauldron grow large enough for a Medium creature to crouch in. I can place a dead creature inside with 200 pounds of salt for 8 hours to raise dead.",
    descriptionFull : "This Tiny pot bears relief scenes of heroes on its cast iron sides. You can use the cauldron as a spellcasting focus for your druid spells, and it functions as a suitable component for the scrying spell. When you finish a long rest, you can use the cauldron to create a potion of greater healing. The potion lasts for 24 hours, the loses its magic if not consumed.\n  As an action you can use the cauldron to grow large enough for a Medium creature to crouch within. You can revert the cauldron to its normal size as an action, harmlessly shuntin anything that can't fit inside to the neares unoccupied space.\n  If you place the corpse of a humanoid into the cauldron and cover the corpse with 200 pounds of salt (which costs 10 gp) for at least 8 hours, the salt is consumed and the creature returns to life as if by raise dead at the next dawn. Once used, this property can't be used again for 7 days.",
    attunement : true,
    prerequisite : "Requires attunement by a druid or warlock",
    prereqeval : function(v) {
        return v.isSpellcaster && (classes.known.druid ? true : false || classes.known.warlock ? true : false);
    },
    action : ["action", "Cauldron of Rebirth grow/shrink"],
    limfeaname : "CoR: Grow/Shrink",
    extraLimitedFeatures : [{
        name : "Cauldron of Rebirth: Rebirth",
        usages : "1",
        recovery : "7 days"
    }]
}

MagicItemsList["coiling grasp tattoo"] = {
    name : "Coiling Grasp Tattoo",
    source : ["TCoE",123],
    type : "wondrous item",
    rarity : "uncommon",
    description : "As an action, I can cause this tattoo to extrude inky tendrils and grapple a creature within 15 feet of me.\n  The creature takes 3d6 force damage and are grappled if they fail a DC 14 Strength save.",
    descriptionFull : "Produced by a special needle, this magic tatoo has long intertwining designs.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Grasping Tendrils. While the tattoo is on your skin, you can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature you can see within 15 feet of you. The creature must succeed on a DC 14 Strength saving throw or take 3d6 force damage and be grappled by you. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength (Athletics) or Dexterity (Acrobatics) check. The grapple also ends if you halt it (no action requred), if the creature is ever more than 15 feet away from you, or if you use this tattoo on a different creature.",
    attunement : true,
    usages : 10,
    recovery : "dawn",
    action : ["action", "Grasping Tendrils"]
}

MagicItemsList["crook of rao"] = {
    name : "Crook of Rao",
    source : ["TCoE",123],
    type : "wondrous item",
    rarity : "artifact",
    description : "While holding the crook, I can expend 1 or more charges to cast one of its spells. I can spend 10 minutes to banish all fiends below CR 19 within 1 mile to their home plane for 100 years.",
    descriptionFull : "Ages ago, the serene god Rao created a tool to shield his fledgling faithful against the evils of the Lower Planes. Yet, as eons passed, mortals developed their own methods of dealing with existential threats, and the crook was largely forgotten. In recent ages, though, the Crook of Rao was rediscovered and leveraged against the rising power of the Witch Queen Iggwilv (one of the names of the wizard Tasha). Although she was defeated, Iggwilv managed to damage the crook during the battle, infecting it with an insidious curse--and the potential for future victory. In the aftermath, the crook was again lost. Occasionally it reappears, but the famed artifact is not what it was. Whether or not the artifact's bearers realize its full threat, few risk using the Crook of Rao--potentially for the final time.\n  Random Properties. The artifact has the following random properties, which you can determine by reolling on the tables in the \"Arifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n  Spells. The crook has 6 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells (save DC 18) from it: aura of life (2 charges), aura of purity (2 charges), banishment (1 charge), beacon of hope (1 charge), mass cure wounds (3 charges). The crook regains 1d6 expended charges daily at dawn.\n  Absolute Banishment. While you are attuned to the crook and holding it, you can spend 10 minutes to banish all but the mightiest fiends within 1 mile of you. Any fiend with a challenge rating of 19 or higher is unaffected. Each banished fiend is sent back to its home plane and can't return to the plane the Crook of Rao banished it from for 100 years.\n\nSee the Notes section for further information.",
    toNotesPage : [{
        name : "Crook of Rao",
        note : [
            "\nFailing Matrix",
            "Whenvever the Crook of Rao's Absolute Banishment property is used, or when its last charge is expended, roll on the Extraplanar Reversal table. Any creature conjured as a result of this effect appear in random unoccupied spaces within 60 feet of you and are not under your control.",
            "\nExtraplanar Reversal",
            " d100   Effect",
            "01-25   A portal to a random plane opens. The portal closes after 5 mintues.",
            "26-45   2d4 imps and 2d4 quasits appear.",
            "46-60   1d8 succubi/incubi appear.",
            "61-70   1d10 barbed devils and 1d10 vrocks appear.",
            "71-80   1 arcanoloth, 1 night hag, and 1 rakshasa appear.",
            "81-85   1 ice devil and 1 marilith appear.",
            "86-90   1 balor and 1 pit fiend appear. At the DM's discretion, a portal opens\n       into the presence of a archdevil or demon lord instead, then closes\n       after 5 minutes.",
            "91-00   Iggwilv's Curse (see the Iggwilv's Curse property).",
            "\nIggwilv's Curse",
            "When the Crook was last used against Iggwilv, the Witch Queen lashed out at the artifact, infecting its magical matrix. Over the years, this curse has spread within the crook, threatening to violently pervert its ancient magic. If this occurs, the Crook of Rao, as it is currently known, is destroyed, its magical matrix inverting and exploding into a 50-foot diameter portal. This portal functions as a permanent gate spell cast by Iggwilv. The gate then, once per round on an initiateve count 20, audibly speaks a fiend's name in Iggwilv's voice, doing so until the gate calls on every fiend ever banished by the Crook of Rao. If the fiend still exists, it is drawn through the gate. This process takes eighteen years to complete, at the end of which the gate becomes a permanent portal to Pazunia, the first layer of the Abyss.",
            "\nDestroying or Repairing the Crook",
            "The Crook of Rao can either be destroyed or repaired by journeying to Mount Celestiaand obtaining a tear from the eternally serene god Rao. One way to make the emontionless god cry would be to reunite Rao with the spirit of his first worshipper who sought revelations byond the multiverse long ago. The Crook dissolves if immersed in teh god's tear for a year and a day. If washed in the tear daily for 30 days the Crook loses its Failing Matrix Property.",
        ]
    }],
    attunement : true,
    usages : 6,
    recovery : "dawn",
    action : ["action", "Absolute Banishment"],
    spellcastingBonus : [{
        name : "Aura of Life",
        spells : ["aura of life"],
        selection : ["aura of life"],
        firstCol : "2c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Aura of Purity",
        spells : ["aura of purity"],
        selection : ["aura of purity"],
        firstCol : "2c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Banishment",
        spells : ["banishment"],
        selection : ["banishment"],
        firstCol : "1c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Beacon of Hope",
        spells : ["beacon of hope"],
        selection : ["beacon of hope"],
        firstCol : "1c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Mass Cure Wounds",
        spells : ["mass cure wounds"],
        selection : ["mass cure wounds"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 18,
    }]
}

MagicItemsList["crystalline chronicle"] = {
    name : "Crystalline Chronicle",
    source : ["TCoE", 124],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While I am holding the crystal, I can use it as a spellcasting focus. I know the cantrips mage hand, mind sliver, and message if I don't already know them.",
    descriptionFull : "An etched crystal sphere the size of a grapefruit hums faintly and pulses with irregular flares of inner light. While you are touching the crystal, you can retrieve and store information and spells within the crystal at the same rate as reading and writing. When found the crystal contains the following spells: detect thoughts, intellect fortress, Rary's telepathic bond, sending, telekinesis, Tasha's mind whip, and Tenser's floating disk. It functions as a spellbook for you, with its spells and other writing psychically encoded within it.\n  While you are holding the crystal, you can use it as a spellcasting focus for your wizard spells, and you know the mage hand, mind sliver and message cantrips if you don't already know them.\n  The crystal has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the information within the crystal, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book.\n  When you cast a wizard spell, you can expend 1 charge to cast the spell without verbal, somatic, or material components of up to 100 gp value.",
    usages : 3,
	recovery : "dawn",
    spellcastingBonus : [{
        name : "Detect Thoughts",
        spells : ["detect thoughts"],
        selection : ["detect thoughts"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Intellect Fortress",
        spells : ["intellect fortress"],
        selection : ["intellect fortress"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Mage Hand",
        spells : ["mage hand"],
        selection : ["mage hand"],
        firstCol : "atwill",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Message",
        spells : ["message"],
        selection : ["message"],
        firstCol : "atwill",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Mind Sliver",
        spells : ["mind sliver"],
        selection : ["mind sliver"],
        firstCol : "atwill",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Rary's Telepathic Bond",
        spells : ["rary's telepathic bond"],
        selection : ["rary's telepathic bond"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Sending",
        spells : ["sending"],
        selection : ["sending"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Telekinesis",
        spells : ["telekinesis"],
        selection : ["telekinesis"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Tasha's Mind Whip",
        spells : ["tasha's mind whip"],
        selection : ["tasha's mind whip"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Tenser's Floating Disk",
        spells : ["tenser's floating disk"],
        selection : ["tenser's floating disk"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }],
    action : [
        ["action", "Swap Prepared Spell"],
        ["action", "Cast Without Components"]
    ]
}

MagicItemsList["demonomicon of iggwilv"] = {
    name : "Demonomicon of Iggwilv",
    source : ["TCoE",125],
    type : "wondrous item",
    rarity : "artifact",
    description : "While holding the Demonomicon, when I make an Intelligence check regarding demons or a Wisdom check related to the Abyss I can add double my proficiency bonus to the check. When I make a spell damage roll against a fiend I apply the maximum damage.",
    descriptionFull : "An expansive treatise documenting the Abyss's infinite layers and inhabitants, the Demonomicon of Iggwilv is the most thorough and blasphemous tome of demonology in the multiverse. The tome recounts both the oldest and most current profanities of the Abyss and demons. Demons have attempted to censor the text, and while sections have been ripped from the book's spine, the general chapters remain, ever revealing demonic secrets. And the book holds more than blasphemies. Caged behind lines of script roils a secret piece of the Abyss itself, which keeps the book up-to-date, no matter how many pages are removed, and it longs to be more than mere reference material.\n  Random Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 minor detrimental property\n  1 major detrimental property\n  Spells. The book has 8 charges. It regains 1d8 expended charges daily at dawn. While holding it, you can use an action to cast Tasha's hideous laughter from it or to expend 1 or more of its charges to cast one of the following spells (save DC 20) from it: magic circle (1 charge), magic jar (2 charges), planar ally (3 charges), planar binding (2 charges), plane shift (to layers of the Abyss only; 3 charges), summon fiend (3 charges).\n  Abyssal Reference. You can reference the Demonomicon whenever you make an Intelligence check to discern information about demons or a Wisdom (Survival) check related to the Abyss. When you do so, you can add double your proficiency bonus to the check.\n\nSee the Notes section for further information.",
    attunement : true,
    toNotesPage : [{
        name : "Demonomicon of Iggwilv",
        note : [
            "\nFiendish Scourging",
            "Your magic causes pain to fiends. While carrying the book, when you make a damage roll for a spell you cast against a fiend, you use the maximum possible result instead of rolling.",
            "\nEnsnarement",
            "While carrying the book, whenever you cast the magic circle spell naming only fiends, or the planar binding spell targeting a fiend, the spell is cast at 9th level, regardless of what level spell slot you used, if any. Additionally, the fiend has disadvantage on its saving throw against the spell.",
            "\nContainment",
            "The first 10 pages of the Demonomicon are blank. As an action while holding the book, you can target a fiend that you can see that is trapped within a magic circle. The fiend must succeed on a DC 20 Charisma saving throw with disadvantage or become trapped within one of the Demonomicon's empty blank pages, which fills with writing detailing the trapped creature's widely known name and depravities. Once Used, this action can't be used again until the next dawn.\n  When you finish a long rest, if you and the Demonomicon are on the same plan of existence, the trapped creature of the highest challenge rating within the book can attempt to possess you. You must make a DC 20 Charisma saving throw. On a failure, you are possessed by the creature, which controls you like a puppet. The possessing creature can release you as an action, appearing in the closest unoccupied space. On a successful save, the fiend can't try to possess you again for 7 days.\n  When the tome is discovered it has 1d4 fiends occupying its pages, typically an assortment of demons.",
            "\nDestroying the Demonomicon",
            "To destroy the book, six different demon lords must each tear out a sixth of the book's pages. If this occurs, the pages reappear after 24 hours. Before all those hours pass, anyone who opens the book's remaining binding is transported to a nascent layer of the Abyss that lies hidden within the book. At the heart of this dadly, semi-sentient domain lies a long-lost artifact, Fraz-Urb'luu's Staff. If the staff is dragged from the pocket plane, the tome is reduced to a mundane and quite out-of-date copy of the Tome of Zyx, the work that served as the foundation for the Demonomicon. Once the staff emerges, the demon lord Fraz-Urb'luu instantly knows.",
        ]
    }],
    usages : 8,
    recovery : "dawn",
    action : ["action", "Containment"],
    spellcastingBonus : [{
        name : "Magic Circle",
        spells : ["magic circle"],
        selection : ["magic circle"],
        firstCol : "1c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Magic Jar",
        spells : ["magic jar"],
        selection : ["magic jar"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Planar Ally",
        spells : ["planar ally"],
        selection : ["planar ally"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Planar Binding",
        spells : ["planar binding"],
        selection : ["planar binding"],
        firstCol : "2c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Plane Shift (Abyss)",
        spells : ["plane shift"],
        selection : ["plane shift"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Summon Fiend",
        spells : ["summon fiend"],
        selection : ["summon fiend"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    }]
}

MagicItemsList["devotee's censer"] = {
    name : "Devotee's Censer",
    source : ["TCoE", 126],
    type : "weapon",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a cleric or paladin",
    prereqeval : function(v) {
        return (classes.known.cleric ? true : false || classes.known.paladin ? true : false);
    },
    description : "While using this flail, when I hit with an attack roll the target takes 1d8 extra radiant damage. As an action I can speak the command word to emanate a 10 foot radius cloud for 1 minute that heals 1d4 hit points at the beginning of my turn.",
    descriptionFull : "The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail counts as a holy symbol for you. When you hit with an attack using this magic flail, the target takes an extra 1d8 radiant damage.\n  As a bonus action you can speak the command word to cause the flail to emanage a thin cloud of incense out to 10 feet for 1 minute. At the start of each of your turns, you and any other creatures in the incense each regain 1d4 hit points. This property can't be used again until the next dawn.",
    usages : 1,
    recovery : "dawn",
    action : ["bonus action", "Incense Cloud"],
    weaponOptions : [{
        name : "Devotee's Censer",
        source : ["TCoE", 126],
        regExpSearch : /^(?=.*devotee's)(?=.*censer).*$/i,
        description : "+1d8 radiant damage",
        type : "Martial",
        ability : 1,
        abilitytodamage : true,
        damage : [1,8, "bludgeoning"],
        range : "Melee",
        weight : 2,
        baseWeapon : "flail"
    }]
}

MagicItemsList["duplicitous manuscript"] = {
    name : "Duplicitous Manuscript",
    source : ["TCoE",126],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "I can use an action to change the book's appearance or plot. I can use the book as a spellcasting focus. I can spend 1 minute and 1 charge to replace a prepared spell with one from the book. I can expend 1 charge to impose disadvantage on checks against my illusion spells.",
    descriptionFull : "To you, this book is a magical spellbook. To anyone else, the book appears to be a volume of verbose romance fiction. As an action, you can change the book's appearance and alter the plot of the romance.\n  When found, the book contains the following spells: hallucinatory terrain, major image, mirror image, mislead, Nystul's magic aura, phantasmal force and silent image. It functions as a spellbook for you.\n  While you are holding the book, you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the illusion school.\n  When a creature you can see makes an Intelligence (Investigation) check to discern the true nature of an illusion spell you cast, or makes a saving throw against an illusion spell you cast, you can use your reaction and expend 1 charge to impose disadvantage on the roll.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : [
        ["reaction", "Add Disadvantage (1 chg)"],
        ["action", "Change Book"]
    ],    
    spellcastingBonus : [{
        name : "Hallucinatory Terrain",
        spells : ["hallucinatory terrain"],
        selection : ["hallucinatory terrain"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Major Image",
        spells : ["major image"],
        selection : ["major image"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Mirror Image",
        spells : ["mirror image"],
        selection : ["mirror image"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Mislead",
        spells : ["mislead"],
        selection : ["mislead"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Nystul's Magic Aura",
        spells : ["nystul's magic aura"],
        selection : ["nystul's magic aura"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Phantasmal Force",
        spells : ["phantasmal force"],
        selection : ["phantasmal force"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Sient Image",
        spells : ["silent image"],
        selection : ["silent image"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    }]
}

MagicItemsList["eldritch claw tattoo"] = {
    name : "Eldritch Claw Tattoo",
    source : ["TCoE",126],
    type : "wondrous item",
    rarity : "uncommon",
    description : "While this tattoo is on my skin, my unarmed strikes count as magical attacks and gain a +1 bounus to attack and damge rolls. Once per day I can empower the tattoo and hit creatures 15 feet away with a weapon or unarmed strike and deal an additional 1d6 force damage on a hit.",
    descriptionFull : "Produced by a special needle, this magic tatoo depicts clawlike forms and other jagged shapes.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Magical Strikes. While the tattoo is on your skin, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and you gain a +1 bonus to attack and damage rolls with unarmed strikes.\n  Eldritch Maul. As a bonus action, you can empower the tattoo for 1 minute. For the duration, each of your melee attacks with a weapon or an unarmed strike can reach a target up to 15 feet away from you, as inky tendrils launch toward the target. In addition, your melee attacks dal an extra 1d6 force damage on a hit. Once used, this bonus action can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : ["bonus action", "Eldritch Maul"],
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.baseWeaponName == "unarmed strike") {
                    fields.Description += (fields.Description ? '; ' : '') + '+1 to damage and hit from Eldritch Claw Tattoo';
                    fields.to_Hit_Bonus = '+1';
                    fields.Damage_Bonus = '+1';
                };
            },
            "If I include the words 'Fire Snake' in the name of an unarmed strike, it gets +10 ft reach, does fire damage, and gains the option to deal +1d10 fire damage by spending 1 additional ki point."
        ]
    }
}

MagicItemsList["elemental essence shard"] = {
    name : "Elemental Essence Shard",
    source : ["TCoE", 127],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;},
    description : "While I hold or wear this crystal, I can attach it to an Tiny object or remove it.",
    descriptionFull : "This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.\n  Roll a d4 and consult the Elemental Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.\n  Elemental Essence Shards\nd4\tProperty\n 1\tAir. You can immediately fly up to 60 feet without\n\tprovoking opportunity attacks\n 2\tEarth. You gain resistance to a damage type of\n\tyour choice until the start of your next turn.\n 3\tFire. One target of the spell that you can see\n\tcatches fire. The burning target takes 2d10 fire\n\tdamage at the start of its next turn, and then the\n\tflames go out.\n 4\tWater. You create a wave of water that bursts out\n\tfrom you in a 10-foot-radius. Each creature of\n\tyour choice that you can see in that area takes\n\t2d6 cold tdamage and must succeed on a\n\tStrength saving throw against your spell save DC\n\tor be tpushed 10 feet away from you and fall\n\tprone.",
    action : [
        ["action", "Attach/Detach Shard"]
    ],
    choices : ["air", "earth", "fire", "water"],
    "air" : {
        name : "Air Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option I can immediately fly up to 60 feet without provoking opportunity attacks."
    },
    "earth" : {
        name : "Earth Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option I gain resistance to a damage type of my choice until the start of my next turn."
    },
    "fire" : {
        name : "Fire Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option one target of the spell that I can see catches fire. The target takes 2d10 fire damage at the start of its next turn."
    },
    "water" : {
        name : "Water Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option I create a wave of water effects a 10-foot-radius. Each crature I choose in that area takes 2d6 cold damage and is pushed back 10 feet if it fails a Strength saving throw."
    }
}

MagicItemsList["far realm shard"] = {
    name : "Far Realm Shard",
    source : ["TCoE", 127],
    type : "wondrous item",
    rarity : "rare",
    description : "With this crystal, when I use a metamagic option on a sorcerer spell I can cause a tentacle to attack a creature I can see within 30 ft. They must make a Charisma save against my spell DC or take 3d6 psychic damge and become frightened of me.",
    descriptionFull : "This writhing crystal is steepd in the warped essence of the Far Realm. As an action, you can attatch the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus for your sorcerer spells while you hold or wear it.\n  When you use a Metamagic option on a spell while you are holding or wearing the shard, you can cause a slimy tentacle to rip through the fabric of reality and strike one creature you can see within 30 feet of you. The creature must succeed on a Charisma saving throw against your spell save DC or take 3d6 psychic damage and become frightened of you until the start of your next turn.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
    action : [
        ["action", "Tentacle Attack (w/metamagic)"],
        ["action", "Attach/Detach Shard"]
    ]
}

MagicItemsList["feywild shard"] = {
    name : "Feywild Shard",
    source : ["TCoE", 127],
    type : "wondrous item",
    rarity : "uncommon",
    description : "With this crystal, when I use a metamagic option on a sorcerer spell I can roll on the Wild Magic Surge table. If I roll a spell, it's unaffected by the Metamagic and if it's concentration, it lasts the full duration without using concentration.",
    descriptionFull : "This warm crystal glints with the sunset colors of the Feywild sky and evokes whispers of emotional memory. As an action, you can attatch the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus for your sorcerer spells while you hold or wear it.\n  When you use a Metamagic option on a spell while you are holding or wearing the shard, you can roll on the Wild Magic Surge table in the Player's Handbook. If the result is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case, the spell lasts for its full duration.\n  If you don't have the Wild Magic Sorcerous Origin, once the propery is uesd to roll on the Wild Magic Surge table, it can't be used again until the next dawn.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
    action : ["action", "Attach/Detach Shard"],
    eval : function() {
        if(classes.known.sorcerer ? true : false){
            if(classes.known.sorcerer.subclass.indexOf("wild magic") == -1) AddAction("action", "Wild Magic Surge", "Feywild Shard");
        }
    }
}

MagicItemsList["fulminating treatise"] = {
    name : "Fulminating Treatise",
    source : ["TCoE",128],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While I hold this book, I can use it as a spellcasting focus. If I spend 1 minute studying the book I can replace one of my prepared spells with one from the book. I can cause an extra 2d6 force damage and knock prone a creature I can see that I hit with an evocation spell.",
    descriptionFull : "This think, scorched spellbook reeks of smoke and ozone, and sparks of energy crackle along the edges of its pages. When found, the book contains the following spells: contingency, fireball, gust of wind, Leomund's tiny hut, magic missile, thunderwave, and wall of force. It functions as a spellbook for you.\n  While you are holding the book, you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the evocation school.\n  When one creature you can see takes damage from an evocation spell you cast, you can use your reaction to expend 1 charge to deal an extra 2d6 force damage to the creature and knock the creature prone if it is Large or smaller.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : ["reaction", "Add 2d6 Force Dmg (1 chg)"],    
    spellcastingBonus : [{
        name : "Contingency",
        spells : ["contingency"],
        selection : ["contingency"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Fireball",
        spells : ["fireball"],
        selection : ["fireball"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Gust of Wind",
        spells : ["gust of wind"],
        selection : ["gust of wind"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Leomund's Tiny Hut",
        spells : ["leomund's tiny hut"],
        selection : ["leomund's tiny hut"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Magic Missile",
        spells : ["magic missile"],
        selection : ["magic missile"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Thunderwave",
        spells : ["thunderwave"],
        selection : ["thunderwave"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Wall of Force",
        spells : ["wall of force"],
        selection : ["wall of force"],
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    }]
}

MagicItemsList["ghost step tattoo"] = {
    name : "Ghost Step Tattoo",
    source : ["TCoE",128],
    type : "wondrous item",
    rarity : "very rare",
    description : "While this tattoo is on my skin, as a bonus action, I can expend 1 charge to become incorporeal until the end of my next turn. When incorporeal I gain resistance to non-magical attacks, can't be grappled or restrained, and can move through creatures or solid objects.",
    descriptionFull : "Produced by a special needle, this tatoo shifts and wavers on the skin, parts of it appearing blurred.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Ghostly Form. The tattoo has 3 charges, and it regains all expended charges daily at dawn. As a bonus action while the tattoo is on your skin, you can expend 1 of the tattoo's charges to become incorporeal unti the end of your next turn. For the duration, you gain the following benefits:\n  You have resistence to bludgeoning, piercing, and slashing damage from nonmagical attacks.\n  You can move through creatures and solid objects as if they were difficult terrain. If you end your turn in a solid object, you take 1d10 force damage. If the effect ends while your are inside a solid object, you instead are shunted to the nearest unoccupied space, and you take 1d10 force damage for every 5 feet traveled.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : ["bonus action", "Ghostly Form"]
}

MagicItemsList["guardian emblem"] = {
    name : "Guardian Emblem",
    source : ["TCoE",128],
    type : "wondrous item",
    rarity : "uncommon",
    prerequisite : "Requires attunement by a cleric or paladin",
    prereqeval : function(v) {
        return v.isSpellcaster && (classes.known.cleric ? true : false || classes.known.paladin ? true: false);
    },
    description : "This emblem lets me turn a critical hit on myself or a creature I can see within 30 feet into a normal hit using 1 charge. I can use an action to attach the emblem to a suit of armor or a shield or remove it.",
    descriptionFull : "This emblem is the symbol of a deity or a spiritual tradition. As an action, you can attach the emblem to a suit of armor or a shield or remove it.\n  The emblem has 3 charges. When you or a creature you can see within 30 feet of you suffers a critical hit while you're wearing the emblem, you can use your reaction to expend 1 charge to turn the critical hit into a normal hit instead.\n  The emblem regains all expended charges daily at dawn.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : [
        ["action", "Attach/Detach Emblem"],
        ["reaction", "Cancel Critical Hit"]
    ]
}

MagicItemsList["heart weaver's primer"] = {
    name : "Heart Weaver's Primer",
    source : ["TCoE",128],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "I can use this primer as a spellbook. I can spend 1 charge to replace a prepared spell with one from the book after studying it for 1 minute. I can use 1 charge to add disadvantage to the first saving throw of the target of my enchantment spell.",
    descriptionFull : "This pristine book smells faintly of a random scent you find pleasing. When found, the book contains the following spells: antipathy/sympathy, charm person, dominate person, enthrall, hypnotic pattern, modify memory, and suggestion. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\m  If you sepnd 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the enchantment school.\n  When you cast an enchantment spell, you can expend 1 charge to impose disadvantage on the first saving throw one target makes against the spell.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Antipathy/Sympathy",
        spells : ["antipathy/sympathy"],
        selection : ["antipathy/sympathy"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Charm Person",
        spells : ["charm person"],
        selection : ["charm person"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
        firstCol : "checkbox"
    },{
        name : "Dominate Person",
        spells : ["dominate person"],
        selection : ["dominate person"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Enthrall",
        spells : ["enthrall"],
        selection : ["enthrall"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Hypnotic Pattern",
        spells : ["hypnotic pattern"],
        selection : ["hypnotic pattern"],
        firstCol : "atwill",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Modify Memory",
        spells : ["modify memory"],
        selection : ["modify memory"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Suggestion",
        spells : ["suggestion"],
        selection : ["suggestion"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["illuminator's tattoo"] = {
    name : "Illuminator's Tattoo",
    source : ["TCoE",129],
    type : "wondrous item",
    rarity : "common",
    description : "While this tatoo is on my skin, I can write with my fingertip as if it is an ink pen that never runs out of ink. As an action, I can touch writing up to one page, speak a creature's name and make it invisible for up to 24 hours or until I or the named creature touch it.",
    descriptionFull : "Produced by a special needle, this magic tatoo features beautiful calligraphy, images of writing implements and the like.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Magical Scribing. While the tattoo is on your skin, you can write with your fingertip as if it were an ink pen that never runs out of ink.\n  As an action, you can touch a piece of writing up to one page in length and speak a creature's name. The writing becomes invisible to everyone other than you and the named creature for the next 24 hours. Either of you can dismiss the invisibility by touching the script (no action required). Once used, this action can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : ["action", "Magical Scribing"]
}

MagicItemsList["libram of souls and flesh"] = {
    name : "Libram of Souls and Flesh",
    source : ["TCoE",129],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While i hold this book, I can use it as a spellcasting focus. I can spend 1 mintue studying it to replace a prepared spell with another of the necromancy school from the book. I can spend a charge to appear undead for 10 minutes or until I deal damage or cause a creature to make a saving throw.",
    descriptionFull : "  Whith covers made of skin and fittings of bone, this tome is cold to the touch, and it whispers faintly. When found the book contains the following spells, which are wizard spells for you while you are attuned to the book: animate dead, circle of death, false life, finger of death, speak with dead, summon undead, vampiric touch. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus fro your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while hoding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the necromancy school.\n  As an action, you can expend 1 charge to take on a semblance of undeath for 10 minutes. For the duration, you take on a deathly appearance, and undead creatures are indifferent to you, unless you have damaged them. You also appear undead to all outward inspection and to spells used to determine the target's status. This effect ends if you deal damage or force a creature to make a saving throw.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : ["action", "Semblance of Undeath"],
    spellcastingBonus : [{
        name : "Animate Dead",
        spells : ["animate dead"],
        selection : ["animate dead"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Circle of Death",
        spells : ["circle of death"],
        selection : ["circle of death"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "False Life",
        spells : ["false life"],
        selection : ["false life"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Finger of Death",
        spells : ["finger of death"],
        selection : ["finger of death"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Speak With Dead",
        spells : ["speak with dead"],
        selection : ["speak with dead"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Summon Undead",
        spells : ["summon undead"],
        selection : ["summon undead"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Vampiric Touch",
        spells : ["vampiric touch"],
        selection : ["vampiric touch"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["lifewell tattoo"] = {
    name : "Lifewell Tattoo",
    source : ["TCoE",129],
    type : "wondrous item",
    rarity : "very rare",
    description : "While this tattoo is on my skin, I gain resistance to necrotic damage. When I would be reduced to 0 hit points, I drop to 1 hit point instead. This can't be used again until the next dawn.",
    descriptionFull : "  Produced by a special needle, this magic tattoo features symbols of life and rebirth.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Necrotic Resistance. You have resistance to necrotic damage.\n  Life Ward. When you would be reduced to 0 hit points, you drop to 1 hit point instead. Once used, this property can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    dmgres : ["Necrotic"]
}

MagicItemsList["luba's tarokka of souls"] = {
    name : "Luba's Tarokka of Souls",
    source : ["TCoE",129],
    type : "wondrous item",
    rarity : "artifact",
    description : "When holding this deck, I can use an action to cast one of the spells from it. I automatically succeed on Constitution saving throws for divination spells. I can draw a card from the deck to add advantage or disadvantage for a creature I can see within 15 feet.",
    descriptionFull : "  Not all lingering spirits are tragic souls, lost on their way to the hereafter. Some languish as prisoners, souls so wicked mortals dare not free them upon an unsuspecting afterlife.\n  Created by a figure of Vistani legend, Luba's Tarokka of Souls shaped the destiny of countless heroes. The prophecies of this deck of cards also revealed great evils and guided its creator into the path of nefarious forces. Untold times the deck's creator, Mother Luba, narrowly escaped doom, spared only by her keen insigths. But even for her, not all wickedness could be escaped. In the most dire cases, Mother Luba managed to ensnare beings of pure evil amid the strands of fate, imprisoning them within her tarroka deck. There these foul spirits dwell still, trapped within a nether realm hidden amid shuffling cards, waiting for fate to turn foul--as it inevitably will.\n  Like all tarokka decks, the Tarokka of Souls is a lavishly illustrated collection of fifty-four cards, comprising the fourteen cards of the high deck and forty other cards divided into four suits: coins, glyphs, stars, and swords.\n  Random Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor detrimental properties\n  2 minor beneficial properties\n  Spells. While holding the deck, you can use an action to cast one of the following spells (save DC 18) from it: comprehend languages, detect evil and good, detect magic, detect poison and disease, locate object, or scrying. Once you use the deck to cast a spell, you can't cast that spell again from it until the next dawn.\n Enduring Vision. While holding the deck, you automatically succeed on Constitution saving throws made to maintain your concentration on divination spells.\n\nSee the Notes section for further information.",
    toNotesPage : [{
        name : "Luba's Tarokka of Souls",
        note : [
            "\nTwist of Fate",
            "As an action, you can draw a card from the deck and twist the fortune of another creature you can see within 15 feet of you. Choose one of the following effects:\n",
            "Weal. The creature has advantage on attack rolls, ability checks, and saving throws for the next hour.",
            "Woe. The creature has disadvantage on attack rolls, ability checks, and saving throws for the next hour.",
            "\n  The deck can be used in this way twice, and you regain all expended uses at the next dawn.",
            "\nPrisoners of Fate",
            "Whenever you use the Twist of Fate property, there is a chance that one of the souls trapped in the deck escapes. Roll d100 and consult the Souls of the Tarokka table. If you roll one of the high cards, the soul associated with it escapes. You can find its statistics in the Monster Manual. If you roll a soul that has already escaped, roll again.",
            "\nSouls of the Tarokka",
            "d100\tCard\t\tSoul",
            "  1\tArtifact\t\tFlameskull",
            "  2\tBeast\t\tWraith",
            "  3\tBroken One\tBanshee",
            "  4\tDarklord\t\tVampire",
            "  5\tDonjon\t\tMummy",
            "  6\tExecutioner\t\tDeath knight",
            "  7\tGhost\t\tGhost",
            "  8\tHorseman\t\tMummy lord",
            "  9\tInnocent\t\tGhost",
            " 10\tMarionette\t\tMummy",
            " 11\tMists\t\tWraith",
            " 12\tRaven\t\tVampire spawn",
            " 13\tSeer\t\tVampire",
            " 14\tTempter\t\tVampire spawn",
            "15-00\t--\t\t--",
            "\n  The released soul appears at a random location within 10d10 miles of you and terrorizes the living. Until the released soul is destroyed, it gains the benefit of a weal from the deck's Twist of Fate property, and both you and the original target of Twist of Fate suffer the effect of Woe.",
            "\nShuffling Fate",
            "If you go 7 days without using the Twist of Fate property, your attunement to Luba's Tarroka of Souls ends, and you can't attune to it again until after another creature uses Twist of Fate on you.",
            "\nDestroying the Deck",
            "Luba's Tarokka of Souls can be destroyed only if all fourteen souls within are released and destroyed. This reveals a fifteenth soul, a lich, that inhabits the Nether card, which appears only when the fourteen souls are defeated. If this ancient entity is destroyed, the Nether card vanishes and the deck becomes a normal tarokka deck, with no special properties, but it inlcudes a new card of the DM's design."
        ]
    }],
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : ["action", "Cast Spell from Tarokka"],
    extraLimitedFeatures : [{
        name : "Twist of Fate",
        usages : "2",
        recovery : "dawn"
    }],
    spellcastingBonus : [{
        name : "Comprehend Languages",
        spells : ["comprehend languages"],
        selection : ["comprehend languages"],
        fixedDC : 18,
    },{
        name : "Detect Evil and Good",
        spells : ["detect evil and good"],
        selection : ["detect evil and good"],
        fixedDC : 18,
    },{
        name : "Detect Magic",
        spells : ["detect magic"],
        selection : ["detect magic"],
        fixedDC : 18,
    },{
        name : "Detect Poison and Disease",
        spells : ["detect poison and disease"],
        selection : ["detect poison and disease"],
        fixedDC : 18,
    },{
        name : "Locate Object",
        spells : ["locate object"],
        selection : ["locate object"],
        fixedDC : 18,
    },{
        name : "Scrying",
        spells : ["scrying"],
        selection : ["scrying"],
        fixedDC : 18,
    }]
}

MagicItemsList["lyre of building"] = {
    name : "Lyre of Building",
    source : ["TCoE",131],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a bard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.bard ? true : false;
    },
    description : "While holding this lyre, I can cast mending as an action. As a reaction, I can protect an object or structure that takes damage from that damage type until the start of my next turn. I can play the lyre to cast spells from it once each per day.",
    descriptionFull : "  While holding this lyre, you can cast mending as an action. You can also play the lyre as a reaction when an object or structure you can see within 300 feet of you takes damage, causing it to be immune to that damage and any further damage of the same type until the start of your next turn.\n  In addition, you can play the lyre as an action to cast fabricate, move earth, passwall, or summon construct, and that spell can't be cast from it again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Fabricate",
        spells : ["fabricate"],
        selection : ["fabricate"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Move Earth",
        spells : ["move earth"],
        selection : ["move earth"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Passwall",
        spells : ["passwall"],
        selection : ["passwall"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Summon Construct",
        spells : ["summon construct"],
        selection : ["summon construct"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Mending",
        spells : ["mending"],
        selection : ["mending"],
        spellcastingAbility : 6,
        firstCol : "atwill"
    }],
    action : [
        ["action", "Cast Mending"],
        ["reaction", "Protect Object/Structure"]
    ]
}

MagicItemsList["masquerade tattoo"] = {
    name : "Masquerade Tattoo",
    source : ["TCoE",131],
    type : "wondrous item",
    rarity : "common",
    description : "While this tattoo is on my body, I can use a bonus action to change the shape, color and location of the tattoo. As an action, once per day I can cast Disguise Self with a DC of 13 to discern the disguise.",
    descriptionFull : "  Produced by a special needle, this tattoo appears on your body as whatever you desire.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Fluid Ink. As a bonus action, you can shape the tattoo into any color or pattern and move it to any area of your skin. Whatever form it takes, it is always obviously a tattoo. It can range in size from no smaller than a copper piece to an intricate work of ar that covers all your skin.\n  Disguise Self. As an action, you can use the tattoo to cast the disguise self spell (DC 13 to discern the disguise). Once the spell is cast from the tattoo, it can't be cast from the tattoo again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : [
        ["action", "Cast Disguise Self"],
        ["bonus action", "Fluid Ink"]
    ],
    spellcastingBonus : [{
        name : "Disguise Self",
        spells : ["disguise self"],
        selection : ["disguise self"],
        fixedDC : 13
    }]
}

MagicItemsList["mighty servant of leuk-o"] = {
    name : "Mighty Servant of Leuk-o",
    source : ["TCoE",131],
    type : "wondrous item",
    rarity : "artifact",
    description : "While attuned to this construct, I can enter it and control it along with one other creature. See the Notes section for full information and stat block.",
    descriptionFull : "  Named for the warlord who infamously employed it, the Mighty Servant of Leuk-o is a fantastically powerful, 10-foot-tall machine that turns into an animate construct when piloted. Crafted of a gleaming black alloy of unknown origin, the servant is often described as a combination of a disproportioned dwarf and an oversized beetle. The servant contains enough space for 1 ton of cargo and a crew compartment within, from which up to two Medium creatures can control it--and potentially execute a spree of unstoppable destruction.\n  Tales of the servant's origins involve more conjecture than fact, often referring to otherworldly beings, the mysterious Barrier Peaks in Oerth, and the supposedly related device known as the Machine of Lum the Mad. The best details on the device's origins and operation can be found in the Mind of Metal, a tome of artificer's secrets that connects the device to the traditions of the lost Olman people, and which was written by Lum the Mad's several tiems over granddaughter, Lum the Maestro, while she reconstructed the long disassembled Mighty Servant of Leuk-o.\n  Dangerous Attunement. Two creatures can be attuned to the servant at a time. If a third creature tries to attune to it, nothing happens.\n  The servant's controls are accessed by a hatch in its upper back, which is easily opened while there are no creatures attuned to the artifact.\n  Attuning to the artifact requires two hours, which can be undertaken as part of a long rest, during which time you must be inside the servant, interating with its controls. While crew memebers are attuning themselves, any creature or structure outside and within 50 feet of the servant has a 25 percent chance of being accidentally targeted by one of its Destructive Fist attacks once during the attunement. This process must be undergone every time a creature attunes itself to the artifact.\n\n  See the Notes section for further information.",
        toNotesPage : [{
        name : "Mighty Servant of Leuk-o",
        note : [
            "\nControlling the Servant.",
            "  While any creatures are attuned to the artifact, attuned creatures can open the hatch as easily as any other door. Other creatures can open the hatch as an action with a successful DC 25 Dexterity check using thieve's tools. A knock spell cast on the hatch also opens it until the start of the caster's next turn.\n  A creature can enter or exit through the hatch by spending 10 feet of momvement. Those inside the servant have total cover from effects originating outside it. The controls within it allow creatures to see outside without obstruction.\n  While you are inside the servant, you can command it by using the controls. During your turn (for either attuned creature), you can command it in the following ways:\n \u2022 Open or close the hatch (no action required, once per turn)\n \u2022 Move the servant up to its speed (no action requred)\n \u2022 As an action, you can command the servant to take one of the actions in its stat block or some other action.\n \u2022 When a creature provokes an opportunity attack from the servant, you can use your reaction to command the servant to make one Destructive Fist attack against that creature.\n  While there are no attuned creatures inside the servant, it is an inert object.\n ",
            "\nGhost in the Machine.",
            "  Upon his death, the soul of the mighty warlord Leuk-o was drawn into the artifact and has become its animating force. The servant has been known to attack or move of its own accord, particularly if doing so will cause destruction. Once every 24 hours, the servant, at the DM's discretion, takes one action while uncrewed.\n  If the servant loses half of its hit points or more, each creature attuned to it must succeed on a DC 20  Wisdom saving throw or be charmed for 24 hours. While charmed in this way, the creature goes on a destructive spree, seeking to destroy structures and attack any unattuned creatures within sight of the servant, starting with those threatening the artifact--preferably using the servant, if possible.",
            "\nSelf-Destruct",
            "  By inputting a specific series of lever pulls and button presses, the servant's two crew members can cause it to explode. The self-destruct code is not revealed to crew members when they attune to the artifact. If the code is discovered (the DM determines how), it requires two attuned crew members to be inside the servant and spend their actions on 3 consecutive rounds performing the command. Should the crew members begin the process of entering the code, though, the servant uses its Ghost in the Machine property and turns the crew memebers against each other.\n  If the crew members successfully implement the code, at the end of the third round, the servant explodes. Every creature in a 100-foot-radius sphere centered on the servant must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 87 (25d6) force damage, 87 (25d6) lightning damage, and 87 (25d6) thunder damage. On a successful save, a creature takes half as much damage. Objects and structures in the area take triple damage. Creatures inside the servant are slain instantly and leave behind no remains.\n  This does not destroy the servant permanently. Rather, 2d6 days later, its parts--left arm, left leg, right arm, right leg, lower torso, and upper torso--drop from the sky in random places within 1,000 miles of the explosion. If brought within 5 feet of one another, the pieces reconnect and reform the servant.",
            "\nDestroying the Servant",
            "  The servant can be destroyed in two ways. After it has self-destructed, its disconnected pieces can be melted down in on of the forge-temples of its ancient Olman creators. Alternatively, if the servant strikes the Machine of Lum the Mad, both artifacts explode in an erubtion that is three times the size and three times the damage as the servant's self-destruct property."
        ]},{
        name : "Mighty Servant of Leuko-o Stat Block",
        note : [
            "\nMighty Servant of Leuk-o",
            "Huge construct",
            "\nArmor Class: 22 (natural armor)\nHit Points: 310 (27d12 + 135)\nSpeed: 60 ft.",
            " STR       DEX      CON      INT      WIS       CHA\n30 (+10)  14 (+2)  20 (+5)  1 (-5)  14 (+2)  10 (+0)",
            "\nSaving Throws: Wis +9, Cha +7\nSkills: Perception +9\nDamage Resistances: piercing, slashing\nDamage Immunities: acid, bludgeoning, cold, fire, lightning, necrotic, poison, psychic, radiant\nCondition Immunities: all conditions but invisible and prone\nSenses: blindsight 120 ft., passive Perception: 19\nLanguages: understands the languages of creatures attuned to it but can't speak\nChallenge: --\tProficiency Bonus: +7",
            "\nImmutable Existence. The servant is immune to any spell or effect that would alter its form or send it to another plane of existence.\nMagic Resistant Construction. The servant has advantage on saving throws against spells and other magical effects, and spell attacks made against it have disadvantage.\nRegeneration. The servant regains 10 hit points at the start of its turn. If it is reduced to 0 hit points, this trait doesn't function until an attuned creature spends 24 hours repairing the artifact or until the artifact is subjected to lightning damage.\nStanding Leap. The servant's long jump is up to 50 feet and its high jump is up to 25 feet, with or without a running start.\nUnusual Nature. The servant doesn't require air, food, drink, or sleep.",
            "\nActions\nDestructive Fist. Melee or Ranged Weapon Attack: +17 to hit, reach 10 ft. or range 120 ft., one target. Hit: 36 (4d12 + 10) force damage. If the target is an object, it takes triple damage.\nCrushing Leap. If the servant jumps at least 25 feet as a part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures is pushed to an unoccupied space within 5 feet of the servant and must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 26 (4d12) bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone."
        ]
    }],
    attunement : true,
    action : ["reaction", "Destructive Fist Attack"],
}

MagicItemsList["moon sickle"] = {
    name : "Moon Sickle",
    nameTest : /^(?=.*moon)(?=sickle).*$/i,
    source : ["TCoE", 133],
    defaultExcluded : true,
    type : "weapon",
    attunement : true,
    prerequisite : "Requires attunement by a druid or ranger",
    prereqeval : function(v) {
        return classes.known.druid ? true : false || classes.known.ranger ? true : false;
    },
    description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
    descriptionFull : "This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, an dyou gain a bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells.\n  When you cast a spell that restores hit points, you can rol a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
    choices : ["+1 sickle (uncommon)", "+2 sickle (rare)", "+3 sickle (very rare)"],
    "+1 sickle (uncommon)" : {
        name : "Moon Sickle +1",
        rarity : "uncommon",
        description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a +1 bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 1;
                },
                "I add +1 to all spell attack rolls and saving throw DCs of my druid and ranger spells",
            ]
        },
        weaponOptions : [{
            name : "Moon Sickle +1",
            source : ["TCoE", 133],
            RegExpSearch : /^(?=.*moon)(?=.*sickle).*$/i,
            description : "Light",
            modifiers : [1,1],
            type : "simple",
            ability : 1,
            damage : [1, 4, "slashing"],
            range : "Melee",
        }]
    },
    "+2 sickle (rare)" : {
        name : "Moon Sickle +2",
        rarity : "rare",
        description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a +2 bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
        calcChanges : {
                spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 2;
                },
                "I add +2 to all spell attack rolls and saving throw DCs of my druid and ranger spells",
            ]
        },
        weaponOptions : [{
            name : "Moon Sickle +2",
            source : ["TCoE", 133],
            RegExpSearch : /^(?=.*moon)(?=.*sickle).*$/i,
            description : "Light",
            modifiers : [2,2],
            type : "simple",
            ability : 1,
            damage : [1, 4, "slashing"],
            range : "Melee",
        }]
    },
    "+3 sickle (very rare)" : {
        name : "Moon Sickle +3",
        rarity : "very rare",
        description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a +3 bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 3;
                },
                "I add +3 to all spell attack rolls and saving throw DCs of my druid and ranger spells",
            ]
        },
        weaponOptions : [{
            name : "Moon Sickle +3",
            source : ["TCoE", 133],
            RegExpSearch : /^(?=.*moon)(?=.*sickle).*$/i,
            description : "Light",
            modifiers : [3,3],
            type : "simple",
            ability : 1,
            damage : [1, 4, "slashing"],
            range : "Melee",
        }]
    }
}

MagicItemsList["nature's mantle"] = {
    name : "Nature's Mantle",
    source : ["TCoE", 133],
    type : "wonderous item",
    rarity : "uncommon",
    description : "While wearing this cloak, I can Hide as a bonus action in an area that is lightly obscured even if being directly observed. I can also use it as a spellcasting focus for my druid and ranger spells.",
    descriptionFull : "This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a spellcasting focus for your druid and ranger spells.\n  While you are in an area that is lightly obscured, you can Hide as a bonus action even if you are being directly observed.",
    attunement : true,
    prerequisite : "Requires attunement by a druid or ranger.",
    prereqeval : function(v) {
        return classes.known.druid ? true : false || classes.known.ranger ? true : false || classes.known.rangerua ? true : false;
    },
    action : ["bonus action", "Hide in Light Obscurment"]
}

MagicItemsList["outer essence shard"] = {
    name : "Outer Essence Shard",
    source : ["TCoE", 133],
    type : "wondrous item",
    rarity : "rare",
    description : "While I hold or wear this crystal, I can teleport to an unoccupied space within 30 feet that I can see immediately following the use of a metamagic option while casting a sorcerer spell.",
    descriptionFull : "  This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.\n  Roll a d4 and consult the Outer Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.\nd4\tProperty\n 1\tLawful. You can end one of the following\n\tconditions affecting yourself or one creature\n\tyou can see within 30 feet of you: charmed,\n\tblinded, deafened, frightened, poisoned, or\n\tstunned\n 2\tChaotic. Choose one creature who takes damage\n\tfrom the spell. That target has disadvantage on\n\tattack rolls and ability checks made before the\n\tstart of your next turn.\n 3\tGood. You or one creature of your choice that you\n\tcan see within 30 feet of you gains 3d6\n\ttemporary hit points.\n 4\tEvil. Choose one creature who takes damage from\n\tthe spell. That target takes an extra 3d6 necrotic\n\tdamage.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
}

MagicItemsList["planecaller's codex"] = {
    name : "Planecaller's Codex",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "I can use this codex as a spellbook. I can spend 1 charge to replace a prepared spell with one from the book after studying it for 1 minute. I can use 1 charge to give advantage for 1 minute to a creature when I summon or create it.",
    descriptionFull : "  The pages of this book are bound in fiend hide, and its cover is embossed with a diagram of the Great Wheel of the multiverse. When found, the book contains the following spells: banishment, find familiar, gate, magic circle, planar binding, and summon elemental. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n \u2022 If you sepnd 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.\n \u2022 When you cast an conjuration spell that summmons or creates one creature, you can expend 1 charge to grant that creature advantage on attack rolls for 1 minute.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Banishment",
        spells : ["banishment"],
        selection : ["banishment"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Find Familiar",
        spells : ["find familiar"],
        selection : ["find familiar"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Gate",
        spells : ["gate"],
        selection : ["gate"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Magic Circle",
        spells : ["magic circle"],
        selection : ["magic circle"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Planar Binding",
        spells : ["planar binding"],
        selection : ["planar binding"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Summon Elemental",
        spells : ["summon elemental"],
        selection : ["summon elemental"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["prosthetic limb"] = {
    name : "Prosthetic Limb",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "common",
    description : "I use this prosthetic to replace a lost body part. It cannot be removed against my will. I can attach or reattach it as an action. It detaches if I die.",
    descriptionFull : "This item replaces a lost limb--a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action and it can't be removed against your will. It detaches if you die.",
    action : ["action", "Detach/Reattach Prosthetic Limb"]
}

MagicItemsList["protective verses"] = {
    name : "Protective Verses",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "I can use this book as a spellbook. I can spend 1 charge to replace a prepared spell with one from the book after studying it for 1 minute. I can use 1 charge to give 2d10 temporary hit points to a creature I can see within 30 ft when I cast an abjuration spell.",
    descriptionFull : "  This leather-bound spellbook is reinforced with iron and silver fittings and an iron lock (DC 20 to open). As an action, you can touch the book's cover and cause it to lock as if you cast arcane lock on it. When found, the book contains the following spells: arcane lock, dispel magic, globe of invulnerability, glyph of warning, Mordenkainen's private sanctum, protection from evil, and symbol. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n \u2022 If you sepnd 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the abjuration school.\n \u2022 When you cast an abjuration spell, you can expend 1 charge to grant a creature you can see within 30 feet of you 2d10 temporary hit points.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : ["action", "Lock Protective Verses"],
    spellcastingBonus : [{
        name : "Arcane Lock",
        spells : ["arcane lock"],
        selection : ["arcane lock"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Dispel Magic",
        spells : ["dispel magic"],
        selection : ["dispel magic"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Globe of Invulnerability",
        spells : ["globe of invulnerability"],
        selection : ["globe of invulnerability"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Glyph of Warding",
        spells : ["glyph of warding"],
        selection : ["glyph of warding"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Mordenkainen's Private Sanctum",
        spells : ["mordenkainen's private sanctum"],
        selection : ["mordenkainen's private sanctum"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Protection from Evil and Good",
        spells : ["protection from evil and good"],
        selection : ["protection from evil and good"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Symbol",
        spells : ["symbol"],
        selection : ["symbol"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["reveler's concertina"] = {
    name : "Reveler's Concertina",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a bard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.bard ? true : false;
    },
    description : "While holding this concertina, I gain a +2 bonus to the saving throw DC of my bard spells.\n  As an action, I can use the concertina to cast Otto's irresistible dance from the item. This propery of the concertina can't be used again until the next dawn.",
    descriptionFull : "  While holding this concertina, you gain a +2 bonus to the saving throw DC of your bard spells.\n  As an action, you can use the concertina to cast Otto's irresistible dance from the item. This propery of the concertina can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Otto's Irresistible Dance",
        spells : ["otto's irresistible dance"],
        selection : ["otto's irresistible dance"],
        spellcastingAbility : 6,
        firstCol : "1d"
    }],
    action : [
        ["action", "Cast Otto's Irresistible Dance"]
    ],
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if(type !== "prepare") return 2;
            },
            "I add +2 to all spell attack rolls and the saving throw DCs of my bard spells."
        ]
    }
}

MagicItemsList["rhythm maker's drum"] = {
    name : "Rhythm Maker's Drum",
    source : ["TCoE",134],
    type : "wondrous item",
    prerequisite : "Requires attunement by a bard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.bard ? true : false;
    },
    description : "While holding this drum, I gain a bonus to spell attack rolls and to the spell saving throw DCs of your bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
    descriptionFull : "  While holding this drum, you gain a bonus to spell attack rolls and to the spell saving throw DCs or your bard spells. The bonus is determined by the drum's rarity.\n  As an action, you can play the drum to regain one use of your Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : ["action", "Regain 1 Bardic Inspiration"],
    choices : ["+1 drum (uncommon)", "+2 drum (rare)", "+3 drum (very rare)"],
    "+1 drum (uncommon)" : {
        name : "Rhythm-Makesr's Drum +1",
        rarity : "uncommon",
        description : "While holding this drum, I gain a +1 bonus to spell attack rolls and to the spell saving throw DCs of me bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 1;
                },
                "I add +1 to all spell attack rolls and the saving throw DCs of my bard spells."
            ]
        }
    },
    "+2 drum (rare)" : {
        name : "Rhythm-Makesr's Drum +2",
        rarity : "uncommon",
        description : "While holding this drum, I gain a +2 bonus to spell attack rolls and to the spell saving throw DCs of me bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 2;
                },
                "I add +2 to all spell attack rolls and the saving throw DCs of my bard spells."
            ]
        }
    },
    "+3 drum (very rare)" : {
        name : "Rhythm-Makesr's Drum +3",
        rarity : "uncommon",
        description : "While holding this drum, I gain a +3 bonus to spell attack rolls and to the spell saving throw DCs of me bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 3;
                },
                "I add +3 to all spell attack rolls and the saving throw DCs of my bard spells."
            ]
        }
    }
}

MagicItemsList["shadowfell brand tattoo"] = {
    name : "Shadowfell Brand Tattoo",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    description : "While this tattoo is on my body, I gain darvision to 60 ft and advantage on Dexterity (Stealth) checks. When I take damage, I can use my reaction to become insubstantial for a moment, halving the damage I take. This can't be used again until the next sunset.",
    descriptionFull : "  Produced by a special needle, this magic tattoo is dark in color and abstract.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Shadow Essence. You gain darkvision with a range of 60 feet, and you have advantage on Dexterity (Stealth) checks.\n  Shadowy Defense. When you take damage, you can use your reaction to become insubstantial for a moment, halving the damage you take. Then the reaction can't be used again until the next sunset.",
    attunement : true,
    usages : 1,
    recovery : "sunset",
    action : ["reaction", "Shadowy Defense"],
    advantages : ["Stealth", true],
    vision : ["Darkvision", 60],
}

MagicItemsList["shadowfell shard"] = {
    name : "Shadowfell Shard",
    source : ["TCoE", 135],
    type : "wondrous item",
    rarity : "rare",
    description : "With this crystal, when I use a metamagic option on a sorcerer spell I can curse one creature targeted by the spell. I choose one ability score and the creature has disadvantage on all ability checks and saving throws using that attribute.",
    descriptionFull : "  This dull, cold crystal sits heavy and leaden, saturated by the Shadowfell's despair. As an action, you can attatch the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus for your sorcerer spells while you hold or wear it.\n  When you use a Metamagic option on a spell while you are holding or wearing the shard, you can momentarily curse one creature targeted by the spell; choose one ability score, and until the end of your next turn, the creature has disadvantage on ability checks and saving throws that use that ability.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
    action : ["action", "Attach/Detach Shard"]
}

MagicItemsList["spellwrought tattoo"] = {
    name : "Spellwrought Tattoo",
    source : ["TCoE",135],
    type : "wondrous item",
    description : "While this tattoo is on my body, I can cast the spell that is contained within it. The tattoo glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from my skin.",
    descriptionFull : "  Produced by a special needle, this magic tattoo contains a single spell of up to 5th level, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns in to ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast teh spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.\n  The level of the spell in the tattoo determines the spell's saving throw DC, attack bonus, spellcasting ability modifier, and the tattoo's rarity, as shown in the Spellwrought Tattoo table.\n\nSpellwrought Tattoo\n Spell\t\t     Spellcasting\tSave\tAttack\n Level\tRarity\t     Ability Mod.\t DC\tBonus\nCantrip\tCommon\t\t+3\t 13\t  +5\n  1st\tCommon\t\t+3\t 13\t  +5\n  2nd\tUncommon\t+3\t 13\t  +5\n  3rd\tUncommon\t+4\t 15\t  +7\n  4th\tRare\t\t+4\t 15\t  +7\n  5th\tRare\t\t+5\t 17\t  +9\n"
};