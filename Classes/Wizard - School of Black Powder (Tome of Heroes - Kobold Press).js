/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the wizard, called "School of Black Powder"
				This is taken from Tome of Heroes
				This subclass is made by Kobold Press
	Code by:	Nod_Hero
	Date:		2024-04-15 (sheet v13.1.12)
*/

var iFileName = "Wizard - School of Black Powder (Kobold Press).js";
RequiredSheetVersion("13.1.12");

SourceList["WSoBP"] = {
	name : "Tome of Heroes",
	abbreviation : "WSoBP",
	group : "Third Party",
	url : "https://koboldpress.com/kpstore/product/tome-of-heroes-for-5th-edition/",
	date : "2022/08/09"
};

AddSubClass("wizard","black powder", {
	regExpSearch : /^(?=.*wizard)(?=.*black)(?=.*powder?)(?=.*gun?).*$|black powder/i,
	subname : "School of Black Powder",
	source : [["WSoBP", 150]],
	features : {
	"subclassfeature2" : {
		name : "Gun Savant",
		source : [["WSoBP", 150]],
		minlevel : 2,
		description : desc([
			"I gain proficiency with gunpowder pistol and musket, and my choice of alchemist's supplies",
			"or gunsmith's tools. I can use a firearm as a spellcasting focus and I can use my Intelligence",
			"modifier instead of Strength or Dexterity for firearms"
		]),
		weapons : [false, false, ["firearms"]],
		toolProfs : [["Alchemist's supplies or Gunsmith's tools", 1]],
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.isSpell && (v.theWea.list == "firearm" || v.thisWeapon[1]) && (fields.Mod === 1 || fields.Mod === 2) && Number(What("Int")) > Number(What(fields.Mod === 1 ? "Str" : "Dex"))) {
						fields.Mod = 4;
					}
				},
				'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of firearms.'
			]
		},
	},
	"subclassfeature2.1" : {
		name : "Arcane Arms",
		source : [["WSoBP", 150]],
		minlevel : 2,
		description : desc([
			"As an action, I can imbue a held firearm to create minor magical effects",
			"See the 3rd page's \"Notes\" section for the choices"
		]),
		action : [["action", ""]],
		usages : "Prof. Bonus per ",
		recovery : "short rest",
		usagescalc : "event.value = How('Proficiency Bonus');",
		toNotesPage : [{
		name : "Gunpowder",
		source : [["WSoBP", 187]],
		note : [
			"The firearms in this book use the loading and gunpowder properties. You can find the statistics for the firearms and the details for the gunpowder property in the Weapons section of this chapter.\n",
			"Loading a Firearm",
			'Early firearms use a paper "cartridge," a paper cylinder packed with an iron or lead ball, gunpowder, and a primer. To load a firearm, the wielder opens the paper cartridge, pours the gunpowder into the end of the barrel, followed by the ball and the paper. A rod is used to ram the ball and paper down the barrel. Hit or miss, ammunition from a firearm is destroyed once expended.\n',
			"Obvious Weapons",
			"More than almost any other weapon, firearms draw attention when they are used, and they are loud. When a character makes a ranged attack with a firearm, the firearm releases a thunderous boom audible out to the weapon's maximum range. In addition, firearms release a small puff of smoke when fired. Characters hoping to move or fight undetected would be wise to use other weapons. For game masters, be aware of the sight, sound, and smell of firearms and the possibility of such effects alerting other nearby creatures, but also be aware these effects are just as likely to startle or scare away creatures as it is to draw them.\n",
			"Proficiency",
			"A 'firearm' is any ranged weapon with the gunpowder weapon property. Firearms are designated as simple or martial ranged weapons similar to crossbows and other ranged weapons. A character with simple or martial weapon proficiency also has proficiency with simple or martial firearms, respectively. However, it is up to the GM if gunpowder and firearms are available in the campaign or in a region to which the character has access. If gunpowder and firearms aren't available in the campaign, a character can't use firearms, regardless of the character's weapon proficiencies.\n",
			"Gunpowder Burst",
			"Gunpowder is an often-unpredictable substance. As such, firearms, bombs, and other weapons and items utilizing gunpowder have the potential to deal significant damage. If you roll the highest possible number on an individual damage die (such as a 6 on a d6 or a 12 on a d12) when you attack with this weapon, you can roll that die again and add the result to the total. For example, if your 2d4 roll resulted in a 3 and a 4, you can reroll the 4, adding the result to the current total of 7. When a damage die results in the highest possible number on the die, it is called a 'burst.'",
			"If you roll the highest possible number again, you can roll the damage die again and add the result to the total, further increasing the weapon's damage. Any of the damage dice for this weapon, including extra dice such as from a critical hit or sneak attack , can burst and result in a reroll. For each attack you make with this weapon, you can reroll only a number of burst dice equal to your proficiency bonus, regardless of how many damage dice result in the highest possible number.",
			"For example, a 2nd-level rogue fires a pistol and scores a critical hit with sneak attack. The character rolls 4d6 damage dice that result in a 1, a 3, a 6 and another 6. The character then rerolls each 6, resulting in a 4 and a 6. The character adds those results to the current damage total for a final damage total of 26. Since the character's proficiency bonus is +2, the character can't reroll the new 6, ending the gunpowder bursts for that attack. When that character makes another attack with the pistol, this process starts anew.",
			"If a single attack with a weapon or item with this property hits multiple targets, the damage is treated as one attack or effect for the purposes of determining how many times the damage can experience a burst, regardless of how many targets take the damage."			
			]
			}, {
		name : "Arcane Arms",
		note : [
			"Starting at 2nd level, you can imbue your firearm with arcane power to create minor magical effects. As an action, you can invoke one of the following effects, provided you have a gun in your hand. The effects created by this feature don't cause the firearm to release an audible boom, but other attacks or effects from your firearm still create the sound. You can use this feature a number of times equal to your proficiency bonus. You regain all expended uses when you finish a short or long rest.",
			"\u2022 Arcane Dusting - You shoot a 15-foot cone of magical dust from the barrel of your firearm. Each creature or object in the area that is currently being affected by a spell, such as mage armor, or that is magical, such as bracers of archery, glows until the end of your next turn, shedding dim light in a 5-foot radius.",
			"\u2022 Flare - You fire a bright ball of magical light from the barrel of your firearm. If fired into the air, the ball rises to a maximum height of 100 feet, unless stopped by an intervening obstacle, hovers until the end of your next turn, then falls slowly, reaching the ground by the end of the next round. The light extinguishes when it hits the ground. The flare can be seen up to 1 mile away in daylight or up to 5 miles in darkness. Alternatively, the flare can be fired up to 50 feet away in any other direction. Each creature within 5 feet of the path of the flare must succeed on a Dexterity saving throw against your spell save DC or have disadvantage on Wisdom (Perception) checks that rely on sight for 1 minute.",
			"\u2022 Lockbuster - You fire a magical shot from your firearm at a lock within the weapon's normal range. Make an attack roll with the firearm. If the result is equal to or exceeds the DC required to pick the lock, your shot destroys the lock. You have advantage on this attack roll if the lock is protected by magic, such as the arcane lock spell.",
			"\u2022 Smokescreen - A cloud of smoke billows from your firearm, creating a 10-foot-radius sphere of smoke centered on you. The sphere spreads around corners, and its area is heavily obscured. The cloud lasts until the end of your next turn or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When you reach 6th level, the sphere's radius increases to 20 feet.",
			"\u2022 Starter's Gun - You discharge your firearm into the air. Each friendly creature of your choice within 30 feet of you has its speed increased by 10 feet until the start of your next turn. When you reach 10th level, each affected creature can also Dash as a bonus action on its turn.",
			"\u2022 Tracer Shot - You fire a ball of light at a creature you can see within 60 feet of you. Make a ranged attack with your firearm. On a hit, the attack deals damage as normal, and the target is outlined in light, as if affected by the faerie fire spell, until the start of your next turn. When you reach 10th level, the target is outlined in light for 1 minute.",
		],
	}, {
		name : "Arcane Arms",
		source : [["WSoBP", 150]],
		popupName : "Arcane Arms",
		note : [
			"\u2022 Arcane Dusting: a 15-ft cone of magical dust; all magic items and creatures or objects",
			" affected by a spell glows with dim light in a 5-ft radius until the end of my next turn",
			"\u2022 Flare: I fire a bright ball of light into the air up to 100 ft. Ball hovers until end of my next ",
			"  turn, falls to ground at end of next round. Seen within 1 mile in daylight, 5 miles in darkness",
			"  Alternatively, ball fired in 50-ft line, creatures within 5 ft of path succeed on Dex save or",
			"  disadvantage on sight-based Perception checks for 1 minute",
			"\u2022 Lockbuster: I make an attack roll with firearm at lock within normal range (with adv if lock",
			"  is magically protected). If attack roll exceeds the DC to pick the lock, the lock is destroyed",
			"\u2022 Smokescreen: create 10-ft radius heavily obscured sphere centered on me, spreads around",
			"  corners. Lasts until end of my next turn or 10+ mph wind. At level 10+, sphere = 20-ft radius",
			"\u2022 Starter's Gun: Friendly creatures within 30 ft speed increased by 10 ft until start of my next",
			"  turn. At level 10+, an affected creature may Dash as a bonus action on its turn",
			"\u2022 Tracer Shot: I make a ranged attack against seen creature within 60 ft. If hit, target outlined",
			"  in light (as Faerie Fire spell) until start of my next turn. At level 10+, instead lasts 1 minute",
		],
		page3notes : true
	}],
	},
	"subclassfeature6" : {
		name : "Spell Shot",
		source : [["WSoBP", 151]],
		minlevel : 6,
		description : desc([
			"When I cast a melee attack spell, I can instead cast it through my firearm, up to its",
			"normal range. My attacks with a firearm count as magical"
		]),
		usages : "Prof. Bonus per ",
		recovery : "long rest",
		usagescalc : "event.value = How('Proficiency Bonus');",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/firearm/i).test(v.theWea.type) || (/firearm/i).test(v.theWea.list) && !(/counts as( a)? magical/i).test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
					};
				},
				"My firearms count as magical for overcoming resistances and immunities."
			]
		}
	},
	"subclassfeature10" : {
		name : "Improved Arcane Arms",
		source : [["WSoBP", 150]],
		minlevel : 10,
		description : desc([
			"I gain additional Arcane Arms choices. When I use Arcane Arms, I can expend a 2nd+ level",
			"spell slot to regain a number of expended Arcane Arms uses equal to half the spell slot level",
			"See the 3rd page's \"Notes\" section for the additional choices"
		]),
		toNotesPage : [{
		name : "Improved Arcane Arms",
		note : [
			"At 10th level, you are able to imbue your firearm with more powerful magical effects. When you use your Arcane Arms feature, you can choose one of the following effects instead. In addition, you can expend a spell slot of 2nd level or higher to regain a number of expended uses of your Arcane Arms feature equal to half the level of the spell slot.",
			"\u2022 False Shot - You fire an illusionary shot at a target within 30 feet, your weapon booming and smoking as if you had actually made an attack. The target must make a Wisdom saving throw against your spell save DC. On a failed save, the target is paralyzed with fear until the start of your next turn. On a successful save, the target is frightened of you until the start of your next turn.",
			"\u2022 Invigorating Burst - You discharge your firearm into the air, dispersing a magical dust that settles around you. Each creature of your choice within 20 feet of you, including yourself, gains 2d4 temporary hit points for 1 hour.",
			"\u2022 Shot in the Arm - As a bonus action, you can fire a crackling bolt of energy from your firearm at a friendly creature you can see within 60 feet of you. If the target is suffering from exhaustion, its level of exhaustion is reduced by 1. If not, the target gains 5 temporary hit points for 1 hour and has advantage on its next ability check, attack roll, or saving throw.",
			"\u2022 Warning Shot - You fire a shot into the air, producing a magically enhanced, thunderous boom. Each creature of your choice that you can see within 30 feet of you becomes indifferent about creatures of your choice that it is hostile toward. This indifference lasts for 1 minute. It ends early if an affected target is attacked, is harmed by a spell, witnesses any of its allies being harmed, or if you use your firearm to invoke another Arcane Arms effect before the duration ends.",
		],
	}, {
		name : "Improved Arcane Arms",
		source : [["WSoBP", 151]],
		popupName : "Arcane Arms",
		note : [
			"\u2022 False Shot: 1 creature within 30 ft make Wisdom save. Fail = paralyzed with fear,",
			"  succeed = frightened. Either affect lasts until start of my next turn",
			"\u2022 Invigorating Burst: Creatures of my choice within 20 ft gain 2d4 temporary HP (lasts 1 hr)",
			"\u2022 Shot in the Arm: (Bonus action) One friendly creature within 60 ft reduce exhaustion by",
			"  1 level or, if no exhaustion, gain 5 THP (lasts 1 hour) and Adv on next ability/attack/save roll",
			"\u2022 Warning Shot: Creatures of my choice within 30 ft become indifferent to hostile creatures",
			"  for 1 minute or until attacked, harmed by spell, sees ally harmed, or I use other Arcane Arms"
		],
		page3notes : true
	}],
	action : [["bonus action", "Shot in the Arm"]],
	},
	"subclassfeature14" : {
		name : "Hand Cannon",
		source : [["WSoBP", 152]],
		minlevel : 14,
		description : desc([
			"When I make a firearm ranged attack roll, I can expend a 1st+ level spell slot to gain a bonus",
			"on the attack roll equal to the spell slot level. If the attack hits, it continues as a 30-ft long",
			"by 5-ft wide line that deals 1d6 force damage per slot level to each creature in the line",
			"This damage can Burst (see Gunpowder rules). Dex save against my spell save DC for half"
		]),
	}
	}
});

WeaponsList["gunpowder pistol"] = {
	regExpSearch : /gunpowder pistol/i,
	name : "Gunpowder Pistol",
	source : ["WSoBP", 193],
	list : "firearm",
	ability : 2,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "30/120 ft",
	weight : 5,
	description : "Ammunition, gunpowder, light, loading",
	abilitytodamage : true,
	ammo : "paper cartridge",
};
WeaponsList["gunpowder musket"] = {
	regExpSearch : /gunpowder musket/i,
	name : "Gunpowder Musket",
	source : ["WSoBP", 193],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "80/320 ft",
	weight : 10,
	description : "Ammunition, gunpowder, loading, two-handed",
	abilitytodamage : true,
	ammo : "paper cartridge",
};
AmmoList["paper cartridge"] = {
	name : "Cartridge, Paper",
	source : ["WSoBP", 198],
	weight : 0.16,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 10,
	invName : "Cartridge, paper",
	alternatives : [/^(?=.*cartridge)(?=.*paper).*$/i],
};
GearList["paper cartridges"] = {
	infoname : "Paper cartridges (10) [2 gp]",
	name : "Paper Cartridges",
	source : ["WSoBP", 198],
	amount : 10,
	weight : .1,
	type : "ammunition"
};

// Add Spells
SpellsList["adjust position"] = {
	name : "Adjust Position",
	source : [["WSoBP", 237]],
	classes : ["bard","cleric","warlock","wizard"],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "30 ft",
	components : "V", 
	duration : "Instantaneous",
	description : "Move 1+1/SL willing creature 5ft;does not provoke an opportunity attack.",
	descriptionFull : "You adjust the location of an ally to a better tactical position. You move one willing creature 5 feet. This movement does not provoke opportunity attacks. The creature moves bodily through the intervening space (as opposed to teleporting or gating), so there can be no physical blockage (wall, door) between them." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can target an additional willing creature for each slot level above 1st."
};
SpellsList["inspiring speech"] = {
	name : "Inspiring Speech",
	source : [["WSoBP", 289]],
	classes : ["bard", "cleric", "paladin"],
	level : 4,
	school : "Ench",
	time : "10 min",
	range : "60 ft",
	components : "V", 
	duration : "1 h",
	description : "Each creature that listens, +1 to attack rolls, advt vs charm and frightened;+ temp hp=spellcasting mod",
	descriptionFull : "The verbal component of this spell is a 10-minute-long, rousing speech by you. At the end of the speech, all your allies within the area of effect who heard the speech gain a +1 bonus on attack rolls and have advantage on saving throws against effects that cause the charmed or frightened condition for 1 hour. Additionally, each recipient gains temporary hit points equal to your spellcasting ability modifier. If you move farther than 1 mile from your allies or you die, this spell ends. A character can be affected by only one inspiring speech at a time; subsequent, overlapping castings have no additional effect and don't extend the spell's duration."
};
SpellsList["mass faerie fire"] = {
	name : "Mass Faerie Fire",
	source : [["WSoBP", 294]],
	classes : ["artificer","bard","druid"],
	level : 3,
	school : "Ench",
	time : "1 bns",
	range : "S:60-ft rad",
	components : "V", 
	duration : "Conc, 1 min",
	save : "Dex",
	description : "up to 3 20-ft cubes all obj/crea save or outlined in 10 ft dim light and attacks have adv.; see invisible crea",
	descriptionFull : "You can place up to three 20-foot cubes each centered on a point you can see within range. Each object in a cube is outlined in blue, green, or violet light (your choice). Any creature in a cube when the spell is cast is also outlined in light if it fails a Dexterity saving throw. A creature in the area of more than one cube is affected only once. Each affected object and creature sheds dim light in a 10-foot radius for the duration." + "\n   " + "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
};
SpellsList["reposition"] = {
	name : "Reposition",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["WSoBP", 300]],
	level : 4,
	school : "Conj",
	time : "1 bns",
	range : "30 ft",
	components : "V",
	duration : "Instantaneous",
	description : "3+1/SL friendly creatures teleports to an unoccupied space of its choosing that it can see within 30 ft",
	descriptionFull : "You designate up to three friendly creatures (one of which can be yourself) within range. Each target teleports to an unoccupied space of its choosing that it can see within 30 feet of itself." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the spell targets one additional friendly creature for each slot level above 4th."
};

/* School of Black Powder
ToH p150
The school of black powder bridges magic and technology. Wizards of this school form a magical bond with a firearm, allowing them to channel their magic through the weapon to enhance its effects. Students go beyond simple offensive magics, using their black powder magic to great utility in aiding allies and hindering foes. Practitioners of this school refer to themselves as powdermancers, though manyfolk refer to all spellcasters with an affinity for firearms as "gun mages," not fully understanding firearms or the differences between the various magical disciplines and styles that utilize them.
--------------------------
Gun Savant ToH p150
When you select this school at 2nd level, you gain proficiency with simple firearms and with the musket (see the Adventuring Gear chapter for details on these weapons). When attacking with firearms, you can use your Intelligence modifier, instead of Dexterity, for the attack and damage rolls. You can use a firearm as a spellcasting focus. In addition, you gain proficiency with alchemist's supplies or gunsmith's tools (your choice).
--------------------------
Arcane Arms ToH p150
Starting at 2nd level, you can imbue your firearm with arcane power to create minor magical effects. As an action, you can invoke one of the following effects, provided you have a gun in your hand. The effects created by this feature don't cause the firearm to release an audible boom, but other attacks or effects from your firearm still create the sound. You can use this feature a number of times equal to your proficiency bonus. You regain all expended uses when you finish a short or long rest.

Arcane Dusting.
You shoot a 15-foot cone of magical dust from the barrel of your firearm. Each creature or object in the area that is currently being affected by a spell, such as mage armor, or that is magical, such as bracers of archery, glows until the end of your next turn, shedding dim light in a 5-foot radius.

Flare.
You fire a bright ball of magical light from the barrel of your firearm. If fired into the air, the ball rises to a maximum height of 100 feet, unless stopped by an intervening obstacle, hovers until the end of your next turn, then falls slowly, reaching the ground by the end of the next round. The light extinguishes when it hits the ground. The flare can be seen up to 1 mile away in daylight or up to 5 miles in darkness. Alternatively, the flare can be fired up to 50 feet away in any other direction. Each creature within 5 feet of the path of the flare must succeed on a Dexterity saving throw against your spell save DC or have disadvantage on Wisdom (Perception) checks that rely on sight for 1 minute.

Lockbuster.
You fire a magical shot from your firearm at a lock within the weapon's normal range. Make an attack roll with the firearm. If the result is equal to or exceeds the DC required to pick the lock, your shot destroys the lock. You have advantage on this attack roll if the lock is protected by magic, such as the arcane lock spell.

Smokescreen.
A cloud of smoke billows from your firearm, creating a 10-foot-radius sphere of smoke centered on you. The sphere spreads around corners, and its area is heavily obscured. The cloud lasts until the end of your next turn or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When you reach 6th level, the sphere's radius increases to 20 feet.

Starter's Gun.
You discharge your firearm into the air. Each friendly creature of your choice within 30 feet of you has its speed increased by 10 feet until the start of your next turn. When you reach 10th level, each affected creature can also Dash as a bonus action on its turn.

Tracer Shot.
You fire a ball of light at a creature you can see within 60 feet of you. Make a ranged attack with your firearm. On a hit, the attack deals damage as normal, and the target is outlined in light, as if affected by the faerie fire spell, until the start of your next turn. When you reach 10th level, the target is outlined in light for 1 minute.
--------------------------
Spell Shot ToH p151
Starting at 6th level, when you cast a spell that requires a melee spell attack roll, you can instead project the spell through your firearm, using the firearm's normal range as the range of the spell. You can use this feature a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.

In addition, your attacks with a firearm count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.
--------------------------
Improved Arcane Arms ToH p151
At 10th level, you are able to imbue your firearm with more powerful magical effects. When you use your Arcane Arms feature, you can choose one of the following effects instead. In addition, you can expend a spell slot of 2nd level or higher to regain a number of expended uses of your Arcane Arms feature equal to half the level of the spell slot.

False Shot.
You fire an illusionary shot at a target within 30 feet, your weapon booming and smoking as if you had actually made an attack. The target must make a Wisdom saving throw against your spell save DC. On a failed save, the target is paralyzed with fear until the start of your next turn. On a successful save, the target is frightened of you until the start of your next turn.

Invigorating Burst.
You discharge your firearm into the air, dispersing a magical dust that settles around you. Each creature of your choice within 20 feet of you, including yourself, gains 2d4 temporary hit points for 1 hour.

Shot in the Arm.
As a bonus action, you can fire a crackling bolt of energy from your firearm at a friendly creature you can see within 60 feet of you. If the target is suffering from exhaustion, its level of exhaustion is reduced by 1. If not, the target gains 5 temporary hit points for 1 hour and has advantage on its next ability check, attack roll, or saving throw.

Warning Shot.
You fire a shot into the air, producing a magically enhanced, thunderous boom. Each creature of your choice that you can see within 30 feet of you becomes indifferent about creatures of your choice that it is hostile toward. This indifference lasts for 1 minute. It ends early if an affected target isattacked, is harmed by a spell, witnesses any of its allies being harmed, or if you use your firearm to invoke another Arcane Arms effect before the duration ends.
--------------------------
Hand Cannon ToH p152
At 14th level, when you make a ranged attack roll with a firearm, you can expend a spell slot of 1st level or higher to imbue the firearm with great arcane power. If you do, you gain a bonus on the attack roll equal to the spell's level. If you hit the target, the force of the shot continues in a 30-foot line that is 5 feet wide directly away from you and originating from the target. Each creature in that line must make a Dexterity saving throw against your spell save DC.

On a failed save, a creature takes 1d6 force damage for each slot level of the spell expended. On a successful save, a creature takes half as much damage. This damage can experience bursts, as described in the gunpowder weapon property, but this effect counts as a single effect for the purposes of determining how many times the damage can burst, regardless of the number of targets affected. */
/* Gunpowder
ToH p187
Gunpowder and firearms typically appear in fantasy settings that gravitate toward late-medieval, renaissance, or swashbuckling themes, though they can appear in any setting where alchemists or tinkerers have access to sulfur, charcoal, and saltpeter. Presented here are rules for incorporating gunpowder and firearms into your games.

The first gunpowder weapons included the pistol, musket, and blunderbuss, among others. These early firearms were matchlock, muzzle-loaded weapons. A curved lever held a burning slow match or length of cording. When the trigger was pulled, the lever dropped into the firing chamber, igniting the gunpowder and propelling the ball down the barrel of the firearm.

The firearms in this book use the loading and gunpowder properties. You can find the statistics for the firearms and the details for the gunpowder property in the Weapons section of this chapter.

Loading a Firearm
Early firearms use a paper "cartridge," a paper cylinder packed with an iron or lead ball, gunpowder, and a primer. To load a firearm, the wielder opens the paper cartridge, pours the gunpowder into the end of the barrel, followed by the ball and the paper. A rod is used to ram the ball and paper down the barrel. Hit or miss, ammunition from a firearm is destroyed once expended.

Obvious Weapons
More than almost any other weapon, firearms draw attention when they are used, and they are loud. When a character makes a ranged attack with a firearm, the firearm releases a thunderous boom audible out to the weapon's maximum range. In addition, firearms release a small puff of smoke when fired. Characters hoping to move or fight undetected would be wise to use other weapons. For game masters, be aware of the sight, sound, and smell of firearms and the possibility of such effects alerting other nearby creatures, but also be aware these effects are just as likely to startle or scare away creatures as it is to draw them.

Proficiency
A "firearm" is any ranged weapon with the gunpowder weapon property. Firearms are designated as simple or martial ranged weapons similar to crossbows and other ranged weapons. A character with simple or martial weapon proficiency also has proficiency with simple or martial firearms, respectively. However, it is up to the GM if gunpowder and firearms are available in the campaign or in a region to which the character has access. If gunpowder and firearms aren't available in the campaign, a character can't use firearms, regardless of the character's weapon proficiencies. */
/* Gunpowder Burst
ToH p190
Gunpowder is an often-unpredictable substance. As such, firearms, bombs, and other weapons and items utilizing gunpowder have the potential to deal significant damage. If you roll the highest possible number on an individual damage die (such as a 6 on a d6 or a 12 on a d12) when you attack with this weapon, you can roll that die again and add the result to the total. For example, if your 2d4 roll resulted in a 3 and a 4, you can reroll the 4, adding the result to the current total of 7. When a damage die results in the highest possible number on the die, it is called a "burst."

If you roll the highest possible number again, you can roll the damage die again and add the result to the total, further increasing the weapon's damage. Any of the damage dice for this weapon, including extra dice such as from a critical hit or sneak attack , can burst and result in a reroll. For each attack you make with this weapon, you can reroll only a number of burst dice equal to your proficiency bonus, regardless of how many damage dice result in the highest possible number.

For example, a 2nd-level rogue fires a pistol and scores a critical hit with sneak attack. The character rolls 4d6 damage dice that result in a 1, a 3, a 6 and another 6. The character then rerolls each 6, resulting in a 4 and a 6. The character adds those results to the current damage total for a final damage total of 26. Since the character's proficiency bonus is +2, the character can't reroll the new 6, ending the gunpowder bursts for that attack. When that character makes another attack with the pistol, this process starts anew.

If a single attack with a weapon or item with this property hits multiple targets, the damage is treated as one attack or effect for the purposes of determining how many times the damage can experience a burst, regardless of how many targets take the damage. */

/* Pistol
ToH p193
Weapon
Firearm, simple weapon, ranged weapon
25 gp, 5 lb. 	1d6 piercing - ammunition (30/120 ft.), gunpowder, light, loading
This small firearm fits easily in one hand, and its wooden handle often features unique engravings, similar to those found on muskets. */
/* Musket
ToH p193
Weapon
Firearm, martial weapon, ranged weapon
50 gp, 10 lb. 	1d10 piercing - ammunition (80/320 ft.), gunpowder, loading, two-handed
This long-barreled firearm comes in different styles. Its wooden handle often features engravings and other decorative embellishments that have significance to the owner or the original craftsperson. */
/* Paper Cartridge (10)
ToH p198
Ammunition
2 gp, 1 lb.
This small tube of beeswax-coated paper contains gunpowder and a metal bullet, and it is the primary ammunition for weapons with the gunpowder property. */

/* Adjust Position
ToH p273
1st-level transmutation
Casting Time: 1 bonus action
Range: 30 feet
Components: V
Duration: Instantaneous

You adjust the location of an ally to a better tactical position. You move one willing creature within range 5 feet. This movement does not provoke opportunity attacks. The creature moves bodily through the intervening space (as opposed to teleporting), so there can be no physical obstacle (such as a wall or a door) in the path.
At Higher Levels.

When you cast this spell using a spell slot of 2nd level or higher, you can target an additional willing creature for each slot level above 1st.
Classes: Bard, Cleric, Warlock, Wizard */
/* Inspiring Speech
ToH p289
4th-level enchantment
Casting Time: 10 minutes
Range: 60 feet
Components: V
Duration: 1 hour

The verbal component of this spell is a 10-minute-long, rousing speech. At the end of the speech, all your allies within the affected area who heard the speech gain a +1 bonus on attack rolls and advantage on saving throws for 1 hour against effects that cause the charmed or frightened condition. Additionally, each recipient gains temporary hit points equal to your spellcasting ability modifier. If you move farther than 1 mile from your allies or you die, this spell ends. A character can be affected by only one casting of this spell at a time; subsequent, overlapping castings have no additional effect and don't extend the spell's duration.
Classes: Bard, Cleric, Paladin */
/* Mass Faerie Fire
ToH p294
3rd-level enchantment
Casting Time: 1 action
Range: Self (60-foot radius)
Components: V
Duration: Concentration, up to 1 minute

You can place up to three 20-foot cubes each centered on a point you can see within range. Each object in a cube is outlined in blue, green, or violet light (your choice). Any creature in a cube when the spell is cast is also outlined in light if it fails a Dexterity saving throw. A creature in the area of more than one cube is affected only once. Each affected object and creature sheds dim light in a 10-foot radius for the duration.

Any attack roll against an affected object or creature has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.
Classes: Bard, Druid */
/* Reposition
ToH p300
4th-level conjuration
Casting Time: 1 bonus action
Range: 30 feet
Components: V
Duration: Instantaneous

You designate up to three friendly creatures (one of which can be yourself) within range. Each target teleports to an unoccupied space of its choosing that it can see within 30 feet of itself.
At Higher Levels.

When you cast this spell using a spell slot of 5th level or higher, the spell targets one additional friendly creature for each slot level above 4th.
Classes: Bard, Sorcerer, Warlock, Wizard */
