/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds the Kuo-toa race and a racial feat for same
	Code by:	NodHero
	Date:		2023-04-13 (sheet v13.0.9)
*/

var iFileName = "Race - Kuo-toa [Nod].js"; 
RequiredSheetVersion(13);

SourceList["KUO"] = {
	name : "Race - Kuo-toa",
	abbreviation : "Kuo-toa",
	abbreviationSpellsheet: "KU",
	group : "Nod's Homebrew",
	date : "2022/13/04"
};

RaceList["kuo-toa"] = {
    source : [["KUO"]],
    regExpSearch : /kuo-toa/i,
    name : "Kuo-toa",
    plural : "Kuo-toa",
    size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : 0 }
	},
    languageProfs : ["Common", 1],
    skills : ["perception"],
	vision : [["Darkvision", 60]],
	savetxt : {adv_vs : ["escape grapple"]},
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Random Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Random Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scoresGeneric : true,
	trait : "\u2022 Kuo-toa (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Amphibious. I can breathe air and water."+
		"\n \u2022 Swimmer's Perception. I have a swimming speed equal to my walking speed and I have proficiency in the Perception skill."+
		"\n \u2022 Slippery. I have advantage on ability checks and saving throws made to escape a grapple.",
};
/* Kuo-toa
Ability Scores: Choose one of: (a) Choose any +2; choose any other +1 (b) Choose any +1; choose any other +1; choose any other +1
Size: Medium
Speed: 30 ft., swim equal to your walking speed
-----
Darkvision. You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.
Languages. You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.
Amphibious. You breathe air and water.
Slippery. You have advantage on ability checks and saving throws made to escape a grapple.
Keen Senses. You have proficiency in the Perception skill.
*/

// Kuo-toa Racial Feat
FeatsList["otherwordly perception"] = { 
	name : "Otherwordly Perception",
	source : ["KUO"],
	prerequisite : "Being a Kuo-toa",
	prereqeval : "CurrentRace.known.indexOf('kuo-toa') !== -1",
	description : "I have advantage on Perception checks based on sight. I can cast See Invisibility. I can cast it without using a spell slot once per long rest, as well as by using spell slots as normal. Wisdom is my spellcasting ability for this spell. My darkvision extends to 120 feet. [+1 Wisdom]",
	scorestxt : "Otherwordly Perception (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	vision: [["Darkvision", "+60"],["Adv. on Perception checks based on sight", 0]],
	spellcastingBonus : [{
		name : "See Invisibility",
		spells : ["see invisibility"],
		selection : ["see invisibility"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	spellChanges : {
		"see invisibility" : {
			components : "",
			changes : "My Otherwordly Perception feat allows me to cast See Invisibility once per long rest without requiring a spell slot or spell components, or by using a spell slot and cast it with components as normal."
		}
	},
	extraLimitedFeatures : [{
		name : "See Invisibility",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 2+"
	}]
};
/* Otherwordly Perception
Prerequisite: Being a Kuo-toa
• Increase your Wisdom by 1, to a maximum of 20.
• You have advantage on Wisdom (Perception) checks that rely on sight.
• Your darkvision has a radius of 120 feet.
• You can cast the See Invisibility spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is Wisdom. If you have spell slots of 2nd level or higher, you can cast this spell with them.
*/
