/*	-WHAT IS THIS?-
	This file adds optiional variants for the PHB Ranger's class features to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

var iFileName = "Ranger - Nod's Notebook to Hardly Anything.js";
RequiredSheetVersion(13);

SourceList["NNHA"] = {
	name : "Ranger - Nod's Notebook to Hardly Anything",
	abbreviation : "NNHA",
	abbreviationSpellsheet: "HA",
	group : "Nod's Homebrew",
	date : "2022/03/01"
};

// Add Optional Features 
var TCoE_Natural_Explorer_Bonus_Movement = {
	name : "Natural Explorer (Bonus Movement)",
	source : [["NNHA", 1]],
	name : "Natural Explorer (Bonus Movement)",
	source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
	minlevel : 1,
	description : desc([
		"I am not slowed by difficult terrain, I have benefits in travel, see page 3",
		'Use the "Choose Feature" button above to add a favored terrain to the third page',
	]),
	"bonus movement" : {
		name : "Natural Explorer (Bonus Movement)",
		extraname : "Ranger 6",
		source : [["NNHA", 1]],
		description : "\n   I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed",
		speed : {
			walk : { spd : "+5", enc : "+5" },
			climb : { spd : "walk", enc : "walk" },
			swim : { spd : "walk", enc : "walk" }
		}
	},
	additional :  levels.map(function (n) {
		return n < 6 ? "1 favored terrain" : (n < 10 ? 2 : 3) + " favored terrains";
	}),
	extraname : "Favored Terrain",
	extrachoices : ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Swamp", "Underdark"],
	extraTimes : levels.map(function (n) { return n < 6 ? 1 : n < 10 ? 2 : 3; }),
	"arctic" : {
		name : "Arctic",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"coast" : {
		name : "Coast",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"desert" : {
		name : "Desert",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"forest" : {
		name : "Forest",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"grassland" : {
		name : "Grassland",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"mountain" : {
		name : "Mountain",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"swamp" : {
		name : "Swamp",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"underdark" : {
		name : "Underdark",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"travel benefits" : {
		name : "Favored Terrain Travel Benefits",
		source : [["NNHA", 1], ["SRD", 36], ["P", 91]],
		extraname : "Ranger 1",
		description : desc([
			"I can double my proficiency bonus for Int/Wis checks concerning my favored terrains",
			"While traveling for an hour or more in a favored terrain, I gain the following benefits:",
			" \u2022 My allies and I are not slowed by difficult terrain and can't get lost except by magic",
			" \u2022 I am alert to danger even when doing something else; I forage twice as much food",
			" \u2022 If alone (or alone with beast companion), I can move stealthily at my normal pace",
			" \u2022 When tracking, I also learn the exact number, size, and time since passing"
		])
	},
	autoSelectExtrachoices : [{
		extrachoice : "travel benefits"
		}, {
		extrachoice : "bonus movement",
		minlevel : 6
	}],
};
CreateClassFeatureVariant("ranger", "natural explorer", "Natural Explorer (Bonus Movement)", TCoE_Natural_Explorer_Bonus_Movement);

/*  Natural Explorer (Bonus Movement)
You are a master of navigating the natural world. This grants you the following benefits:
• You are not slowed by difficult terrain.
• You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits:
	• Difficult terrain doesn't slow your group's travel.
   	• Your group can't become lost except by magical means.
   	• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
    • If you are traveling alone, you can move stealthily at a normal pace.
    • When you forage, you find twice as much food as you normally would.
    • While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.
	
You choose additional favored terrain types at 6th and 10th level. Additionally at 6th level, your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.
*/

var TCoE_Favored_Enemy_Bonus_Damage = {
	name : "Favored Enemy (Bonus Damage)",
	source : [["NNHA", 1]],
	description : desc([
		"Use the \"Choose Feature\" button above to add a favored enemy to the third page",
		"When selecting a favored enemy, I also learn one of the languages it speaks",
		"I have adv. on Wis (Survival) checks to track and Int checks to recall info about them",
		"I get a bonus to damage rolls with weapon attacks against my favored enemies"
	]),
	additional : levels.map(function (n) {
	return n < 6 ? "1 favored enemy" : (n < 14 ? 2 : 3) + " favored enemies", (n < 6 ? "+2" : "+4") + " weapon attack damage";
	}),
	extraname : "Favored Enemy (Bonus Damage)",
	extrachoices : ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead", "Two Races of Humanoids"],
	extraTimes : levels.map(function (n) { return n < 6 ? 1 : n < 14 ? 2 : 3; }),
	"aberrations" : {
		name : "Aberrations",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"beasts" : {
		name : "Beasts",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"celestials" : {
		name : "Celestials",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"constructs" : {
		name : "Constructs",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"dragons" : {
		name : "Dragons",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"elementals" : {
		name : "Elementals",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"fey" : {
		name : "Fey",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"fiends" : {
		name : "Fiends",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"giants" : {
		name : "Giants",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"monstrosities" : {
		name : "Monstrosities",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"oozes" : {
		name : "Oozes",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"plants" : {
		name : "Plants",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"undead" : {
		name : "Undead",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	"two races of humanoids" : {
		name : "Two Races of Humanoids",
		description : "",
		source : [["NNHA", 1], ["SRD", 35], ["P", 91]],
		languageProfs : [1]
	},
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (!v.isSpell && classes.known.ranger && classes.known.ranger.level && (/favou?red/i).test(v.WeaponTextName)) {
					output.extraDmg += classes.known.ranger.level < 6 ? 2 : 4;
				};
			},
			"If I include the word 'Favored' in the name or description of a weapon, it gets bonus damage, depending on my Ranger level."
		]
	}
};
CreateClassFeatureVariant("ranger", "favored enemy", "Favored Enemy (Bonus Damage)", TCoE_Favored_Enemy_Bonus_Damage);

/* Favored Enemy (Bonus Damage)
Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy commonly encountered in the wilds. Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. You gain a +2 bonus to damage rolls with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
When you gain this feature, you also learn one language of your choice, typically one spoken by your favored enemy or creatures associated with it. However, you are free to pick any language you wish to learn.
You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures. Additionally at 6th level, your bonus to damage rolls against all your favored enemies increases to +4.
*/

var TCoE_Primeval_Awareness_Bonus_Spells = {
	name : "Primeval Awareness (Bonus Spells)",
	source : [["NNHA", 2]],
	description : desc([
		"As an action, I can use a spell slot to focus my awareness for 1 min per spell slot level",
		"Out to 1 mile (6 in favored terrain), I sense if the following types of creatures are present:",
		"aberrations, celestials, dragons, elementals, fey, fiends, and undead.", 
		"This doesn't reveal the creatures' location, distance, or number, unless a favored enemy",
		"I get bonus spells known, can cast each once per long rest without expending a spell slot",
	]),
	action : ["action", "Primeval Awareness"],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the bonus spells from the normally selectable list
				if ((spName === "ranger" || spName === "rangerua") && spType.indexOf("bonus") === -1) {
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(["speak with animals", "locate animals or plants", "speak with plants", "guardian of nature", "commune with nature"]);
				}
			},
			"I know the following spells, without them counting towards the maximum number of spells I can know: Speak with Animals, Beast Sense, Speak with Plants, Locate Creature, and Commune with Nature."
		]
	},
	spellcastingBonus : {
		name : "Primeval Awareness (Bonus Spells)",
		spells : ["speak with animals", "locate animals or plants", "speak with plants", "guardian of nature", "commune with nature"],
		selection : ["speak with animals", "locate animals or plants", "speak with plants", "guardian of nature", "commune with nature"],
		firstCol : "oncelr",
		times : levels.map(function (n) {
			return n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : 5;
		})
	}
};
CreateClassFeatureVariant("ranger", "primeval awareness", "Primeval Awareness (Bonus Spells)", TCoE_Primeval_Awareness_Bonus_Spells);

/* Primeval Awareness (Bonus Spells)
Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): 
aberrations, celestials, dragons, elementals, fey, fiends, and undead. 
This feature doesn't reveal the creatures' location or number, unless it is one of your favored enemies, in which case you learn their numbers, and the creatures’ general direction and distance (in miles) from you. If there are multiple groups of your favored enemies within range, you learn this information for each group.

Your interconnections with nature also enable you to learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Bonus Spells table. These spells don't count against the number of ranger spells you know.
Bonus Spells
[Ranger Level]	[Spell]
	3rd			speak with animals
	5th			locate animals or plants
	9th			speak with plants
	13th		guardian of nature
	17th		commune with nature

You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest. */

var TCoE_Lands_Stride_Fleet_of_Foot = {
	name : "Land's Stride (Fleet of Foot)",
	source : [["NNHA", 2], ["SRD", 37], ["P", 92]],
	description : desc([
		"I can travel through nonmagical plants without penalty or taking damage",
		"I have advantage on saves vs. plants that impede movement by magical influence",
		"I can take the Dash action as a bonus action", 
	]),
	savetxt : { adv_vs : ["magical plants that impede movement"] },
	action : ["bonus action", "Fleet of Foot"]
};
CreateClassFeatureVariant("ranger", "land's stride", "Land's Stride (Fleet of Foot)", TCoE_Lands_Stride_Fleet_of_Foot);

/* Land's Stride (Fleet of Foot)
Beginning at 8th level, you can use the Dash action as a bonus action on your turn. 
Additionally, you can pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. You also have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell. */

var TCoE_Hide_in_Plain_Sight_Tireless = {
	name : "Hide in Plain Sight (Tireless)",
	source : [["NNHA", 2], ["SRD", 37], ["P", 92], ["T", 56]],
	description : desc([
		"I can hide with +10 to Dex (Stealth) after spending 1 minute creating camouflage",
		"Once I move or take an action or a reaction, the benefit is lost",
		"Whenever I finish a short rest, I reduce my exhaustion level, if any, by 1",
		"My prof modifier per long rest, as an Action, I can give myself temp HP of 1d8 + Wis mod"
	]),
	action : [["action", "Tireless"]],
	additional : "1d8 + Wis Mod",
	usages: "Prof. Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest"
};
CreateClassFeatureVariant("ranger", "hide in plain sight", "Hide in Plain Sight (Tireless)", TCoE_Hide_in_Plain_Sight_Tireless);

/* Hide in Plain Sight (Tireless)
Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.

Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.

Also, as an action, you can give yourself a number of temporary hit points equal to 1d8 + your Wisdom modifier (minimum of 1 temporary hit point). You can use this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.

In addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1. */

// Add Spells
SpellsList["call nature spirits"] = {
	name: "Call Nature Spirits",
	classes: ["druid", "ranger"],
	source: ["NNHA", 3],
	ritual: true,
	level: 1,
	school: "Trans",
	time: "1 min",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Call nature spirits to aid you with camping or finding food/drink/tracks/shelter; see description",
	descriptionFull: "You call out to the spirits of nature to aid you. When you cast this spell, choose up to three of the following effects:\n  \u2022 If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again.\n  \u2022 If there is edible forage within range, you know it and where to find it.\n  \u2022 If there is clean drinking water within range, you know it and where to find it.\n  \u2022 If there is suitable shelter for you and your companions with range, you know it and where to find.\n  \u2022 Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption.\n  \u2022 Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish."
};
/* Call Nature Spirits
1st-level transmutation (ritual)
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You call out to the spirits of nature to aid you. 
When you cast this spell, choose up to three of the following effects:
•    If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again.
•    If there is edible forage within range, you know it and where to find it.
•    If there is clean drinking water within range, you know it and where to find it.
•    If there is suitable shelter for you and your companions with range, you know it and where to find.
•    Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption.
•    Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish.

Classes: Druid, Ranger */

SpellsList["rapid rise"] = {
	name : "Rapid Rise",
	classes : ["artificer", "bard", "ranger", "sorcerer", "wizard"],
	source : ["NNHA", 3],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "10 ft",
	components : "V",
	duration : "Instantaneous",
	description : "Any creatures within range awaken and can then stand up from prone without expending movement",
	descriptionFull : "Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
};
/* Rapid Rise
1st-level enchantment
Casting Time: 1 bonus action
Range: 10 feet
Components: V
Duration: Instantaneous

Each sleeping creature you choose within range 
awakens, and then each prone creature within range can stand up without expending any movement.

Classes: Artificer, Bard, Ranger, Sorcerer, Wizard */

SpellsList["shift shape"] = {
	name : "Shift Shape",
	classes : ["druid", "ranger", "sorcerer"],
	source : ["NNHA", 3],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "1 creature save or transformed into beast of my choice of CR 1 or lower without flight; charmed if not immune",
	descriptionFull : "This spell transforms a creature you can see within range into a new beast form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw." + "\n   " + "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast of CR 1 or less that does not have a fly speed. While in this new form, the target is charmed by you and views you as a trusted ally. The target can understand simple commands such as “attack” or “stay.” The charm affects creatures that are immune to charm in their normal form. The charm ends immediately when the target reverts to its normal form." + "\n   " + "The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The creature's gear melds into its new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment." + "\n   " + "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form."
};
/* Shift Shape
3rd-level transmutation
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Concentration, up to 10 minutes

This spell transforms a creature you can see within range into a new beast form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.
The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast of CR 1 or less without a fly speed. The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The creature's gear melds into its new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment.

The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form.
While in this new form, the target is charmed by you and views you as a trusted ally. The target can understand simple commands such as “attack” or “stay.” The charm affects creatures that are immune to charm in their normal form. The charm ends immediately when the target reverts to its normal form.

Classes: Druid, Ranger, Sorcerer */