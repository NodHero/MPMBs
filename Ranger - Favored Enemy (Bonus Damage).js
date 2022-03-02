/*	-WHAT IS THIS?-
	This file adds a variant that adds aditional damage for the Ranger's 'Favored Enemy' feature to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

var iFileName = "Ranger - Favored Enemy (Bonus Damage).js";
RequiredSheetVersion(13);

SourceList["FEBD"] = {
	name : "Ranger - Favored Enemy (Bonus Damage)",
	abbreviation : "FEBD",
	group : "Nod's Homebrew",
	date : "2022/03/01"
};

var TCoE_Favored_Enemy_Bonus_Damage = {
	name : "Favored Enemy (Bonus Damage)",
	source : [["FEBD"]],
	description : "\n   " + "Use the \"Choose Feature\" button above to add a favored enemy to the third page" + "\n   " + "When selecting a favored enemy, I also learn one of the languages it speaks" + "\n   " + "I have adv. on Wis (Survival) checks to track and Int checks to recall info about them" + "\n   " + "I get a bonus to damage rolls with weapon attacks against the chosen favored enemy",
		additional : levels.map(function (n) {
		return n < 6 ? "1 favored enemy" : (n < 14 ? 2 : 3) + " favored enemies", (n < 6 ? "+2" : "+4") + " weapon attack damage";
		}),
		extraname : "Favored Enemy (Bonus Damage)",
		extrachoices : ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead", "Two Races of Humanoids"],
		extraTimes : levels.map(function (n) { return n < 6 ? 1 : n < 14 ? 2 : 3; }),
		"aberrations" : {
			name : "Aberrations",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"beasts" : {
			name : "Beasts",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"celestials" : {
			name : "Celestials",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"constructs" : {
			name : "Constructs",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"dragons" : {
			name : "Dragons",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"elementals" : {
			name : "Elementals",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"fey" : {
			name : "Fey",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"fiends" : {
			name : "Fiends",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"giants" : {
			name : "Giants",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"monstrosities" : {
			name : "Monstrosities",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"oozes" : {
			name : "Oozes",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"plants" : {
			name : "Plants",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"undead" : {
			name : "Undead",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
			languageProfs : [1]
		},
		"two races of humanoids" : {
			name : "Two Races of Humanoids",
			description : "",
			source : [["FEBD"], ["SRD", 35], ["P", 91]],
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