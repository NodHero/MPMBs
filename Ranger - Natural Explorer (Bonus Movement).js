/*	-WHAT IS THIS?-
	This file adds a variant that adds movement bonuses for the Ranger's 'Natural Explorer' feature to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

var iFileName = "Ranger - Natural Explorer (Bonus Movement).js";
RequiredSheetVersion(13);

SourceList["NEBM"] = {
	name : "Ranger - Natural Explorer (Bonus Movement)",
	abbreviation : "NEBM",
	group : "Nod's Homebrew",
	date : "2022/03/01"
};

var TCoE_Natural_Explorer_Bonus_Movement = {
	name : "Natural Explorer (Bonus Movement)",
	source : [["NEBM"]],
	name : "Natural Explorer (Bonus Movement)",
	source : [["NEBM"], ["SRD", 36], ["P", 91]],
	minlevel : 1,
	description : desc([
		"I am not slowed by difficult terrain, I have benefits in travel, see page 3",
		'Use the "Choose Feature" button above to add a favored terrain to the third page',
	]),
	"bonus movement" : {
		name : "Natural Explorer (Bonus Movement)",
		extraname : "Ranger 6",
		source : [["NEBM"]],
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
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"coast" : {
		name : "Coast",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"desert" : {
		name : "Desert",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"forest" : {
		name : "Forest",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"grassland" : {
		name : "Grassland",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"mountain" : {
		name : "Mountain",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"swamp" : {
		name : "Swamp",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"underdark" : {
		name : "Underdark",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
		description : ""
	},
	"travel benefits" : {
		name : "Favored Terrain Travel Benefits",
		source : [["NEBM"], ["SRD", 36], ["P", 91]],
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
