/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the druid, called "Mage of Witherbloom"
				This is taken from UA21MoS 
				This subclass is made by WOTC
	Code by:	Hebi
	Date:		2022-10-01 (sheet v13.1.2)
*/

var iFileName = "Druid - Mage (Circle) of Witherbloom.js";

SourceList["MoW"] = {
	name : "Mage of Witherbloom",
	abbreviation : "MoW",
	url : "https://dnd.wizards.com/unearthed-arcana/strixhaven",
	date : "2021/6/08"
};

var theCoD = AddSubClass("druid", "circle of witherbloom", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*\bwitherbloom\b).*$/i,
	subname : "Circle of Witherbloom",
	source : ["MoW", 0],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : [["MoW", 8]],
			minlevel : 2,
			description : desc([
				"I learn the Spare the Dying cantrip and gain the ability to cast certain spells",
				"These are always prepared, but don't count against the number of spells I can prepare"
			]),
			spellcastingBonus : {
				name : "Circle Spells",
				spells : ["spare the dying"],
				selection : ["spare the dying"]
			},
			spellcastingExtra : ["cure wounds", "inflict wounds", "lesser restoration", "ray of enfeeblement", "blight", "greater restoration", "antilife shell", "mass cure wounds", "revivify", "vampiric touch"]
		},
		"subclassfeature2.1" : {
			name : "Essence Tap",
			source : ["MoW", 0],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can empower myself for 1 minute, or until I use this feature again.",
				" I choose one of the following benefits for the duration:",
				"\u2022 Overgrowth. When I choose this benefit, and as a bonus action on subsequent turns, I can",
				"expend and roll one Hit Die. I regain hp equal to the roll + my spellcasting ability modifier.",
				"\u2022 Withering Strike. When I deal damage, I can change the damage type to necrotic, and I",
				"ignore resistance to necrotic damage.",
			]),
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature2.3" : {
			name : "Witherbloom Brew",
			source : ["MoW", 0],
			minlevel : 6,
			toolProfs : ["Herbalism kit"],
			description : desc([
				"I gain proficiency with herbalism kits if I don't already have it.",
				"When I finish a long rest, I can use an herbalism kit and a pot or cauldron to create magical",
				"brews. Each brew requires its own flask and retains its magical potency for 24 hours or until",
				"used. For each brew, choose one of the following effects:",
				"\u2022 Fortifying. I choose a damage type from the following list: cold, fire, necrotic, poison, or",
				"radiant. As an action, a creature can drink this brew or administer it to another creature to",
				"gain resistance to the chosen type for 1 hour.",
				"\u2022 Quickening. As an action, a creature can drink this brew or administer it to another creature",
				"to regain 2d6 hit points, and end one disease or condition chosen from the following list:",
				"charmed, frightened, paralyzed, poisoned, stunned.",
				"\u2022 Toxifying. As an action, apply this brew to a simple or martial weapon. The first time within", 
				"one hour the weapon hits a creature, it 2d6 poison damage and must succeed on a Con save",
				"against your spell save DC or be poisoned for 1 minute.",
			]),
			additional : ProficiencyBonusList.map(function(n) { return n + " brews"; })
		},
		"subclassfeature3" : {
			name : "Witherbloom Adept",
			source : ["MoW", 0],
			minlevel : 10,
			description : desc([
				"Once per turn, when I deal necrotic damage or restore hp using a spell, one target of the spell",
				"takes additional damage or regains additional hp."
			]),
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " damage/healing"; })
		},
		"subclassfeature4" : {
			name : "Withering Vortex",
			source : ["MoW", 0],
			minlevel : 14,
			description : desc([
				"When I cast a spell using a spell slot that deals necrotic damage to creatures that aren't",
				"Undead or Constructs, I choose one of the creatures. One creature other than myself that I",
				"can see within 30 ft regains hp equal to half the damage dealt to the chosen creature."
			]),
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}
	}
});