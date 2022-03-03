/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds the Myconid race
				This is taken from the DMs Guild website (https://www.dmsguild.com/product/229989/)
	Code by:	NodHero
	Date:		2019-11-21 (sheet v13.0.9)
	Please support the creator(s) of this content (M.T. Black and others) and download their materials from the DMs Guild website: https://www.dmsguild.com/browse.php?author=M.T.%20Black
*/

var iFileName = "Race - Myconid [MT Black].js";
RequiredSheetVersion("13.0.8");


SourceList["MTB:PC"]={
	name : "MT Black: Player's Companion",
	abbreviation : "MTB:PC",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/229989/",
	date : "2017-12-29"
};

RaceList["myconid"] = {
	regExpSearch : /myconid/i,
	name : "Myconid",
	source : [["MTB:PC", 15]],
	plural : "Myconid",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Undercommon", "Can't Speak", "Empathic Spores Telepathy"],
	vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]],
	savetxt : { adv_vs : ["poison"], text : ["Magic can't put me to sleep"] },
	dmgres : ["Poison"],
	age : " reach adulthood at age four and live less than 25 years",
	height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight : " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric : " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Myconid (+2 Wisdom, +1 Constitution)\nMeditate: Myconid don't need to sleep, but meditate semiconsciously for 4 hours a day. (long rest takes only 4 hours).\nSunlight Sensitivity: Disadvantage on attack rolls and sight-based Perception checks if I or what I'm trying to see is in direct sunlight.\nEmpathic Spores: Over one minute, release spores that allow any Int 3+ non-undead/non-construct creatures to telepathically communicate as long as they are within 30 feet of each other.\nSoporific Spores: 1st level: Sleep spell in 20' radius, once per long rest; 3rd level: Cast as 2nd level; 5th level: Cast at 3rd level.", 
	spellcastingAbility : 5,
	features : {
		"soporific spores" : {
			name : "Soporific Spores",
			limfeaname : "Soporific Spores",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Soporific Spores",
				spells : ["sleep"],
				selection : ["sleep"],
				firstCol : "oncelr",
			},
			spellChanges : {
				"sleep" : {
					components : "",
					compMaterial : "",
					range : "20-ft rad",
					description : "20-ft rad /5d8/CL3:7d8/CL5:9d8/ HP conscious creatures fall asleep, starting with lowest HP creatures",
					changes : "I can cast this spell once per long rest without requiring components."
				},
			}
		},
	},
};