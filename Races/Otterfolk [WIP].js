/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Races
	Effect:		This script adds a race, Otterfolk, with 2 subraces: Sea Otter and River Otter
	Code by:	Alcatraz077
	Date:		8 DEC 2022
    Source: Otterfolk by HicksDude, found online at https://www.gmbinder.com/share/-MJtHXBmBCfSD5G_IDXR
*/

var iFileName = "Otterfolk with 2 Subraces (Sea Otter and River Otter) [by HicksDude, transcribed by Alcatraz077].js";
RequiredSheetVersion("13.1");

RaceList["otterfolk"] = {
	regExpSearch :  /otterfolk/i,
	name : "Otterfolk",
	sortname : "Otterfolk",
	source : ["HB", 0],
	plural : "Otterfolk",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 5 },
		swim : { spd : 30, enc : 30 }
	},
	languageProfs : ["Common", "Otteren"],
	age : " reach adulthood around 5 or 6 and live around 100 years",
	height : " range from 3 to 4 feet tall (4'9\" + 2d10\")",
	weight : " weigh between 40-80lbs (110 + 2d10 \xD7 2d4 lb)",
	improvements : "Otterfolk: +2 Charisma;",
	scores : [0, 0, 0, 0, 0, 2],
	trait : "Otterfolk (+2 Charisma) Darkvision:  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.\nCreature of the Water: While Otterfolk do not breathe underwater, you are well equipped to survive in watery terrains. You can hold your breath for up to an hour at a time. You also have a swimming speed equal to your base walking speed and can see up to 30 feet in murky water as if it were clear.\nInnate Voyager: You gain proficiency in the Survival skill\nPart of the Family: You are able to lend a hand to your friends as if they were your own family. You can use the Help action as a bonus action, and its range increases to 10 feet.",
	weapons : ["claws"],
    vision : ["Darkvision", 60],
    skills : ["Survival"],
};
AddRacialVariant("otterfolk", "sea otter", {
	regExpSearch : /^(?=.*otterfolk)(?=.*(sea)).*$/i,
	name : "Sea Otter",
	sortname : "Otterfolk, Sea",
	source : ["HB", 0],
	plural : "Otterfolk",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 5 },
		swim : { spd : 30, enc : 30 }
	},
	languageProfs : ["Common", "Otteren"],
	age : " reach adulthood around 5 or 6 and live around 100 years",
	height : " range from 3 to 4 feet tall (4'9\" + 2d10\")",
	weight : " weigh between 40-80lbs (110 + 2d10 \xD7 2d4 lb)",
	improvements : "Otterfolk: +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Sea Otter (+2 Charisma, +1 Constitution) Darkvision:  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.\nCreature of the Water: While Otterfolk do not breathe underwater, you are well equipped to survive in watery terrains. You can hold your breath for up to an hour at a time. You also have a swimming speed equal to your base walking speed and can see up to 30 feet in murky water as if it were clear.\nInnate Voyager: You gain proficiency in the Survival skill\nDense Fur: You gain an unarmored AC of 12 + your Dexterity modifier due to your thick coat of fur, and you can apply a shields bonus if you are using a shield.\nInsulated Coat: You gain resistance to cold damage\nPart of the Family: You are able to lend a hand to your friends as if they were your own family. You can use the Help action as a bonus action, and its range increases to 10 feet.",
	weapons : ["claws"],
    vision : ["Darkvision", 60],
    skills : ["Survival"],
    addarmor : "Dense Fur",
    dmgres : ["Cold"]
});
AddRacialVariant("otterfolk", "river otter", {
	regExpSearch : /^(?=.*otterfolk)(?=.*(river)).*$/i,
	name : "River Otter",
	sortname : "Otterfolk, River",
	source : ["HB", 0],
	plural : "Otterfolk",
	size : 4,
	speed : {
		walk : { spd : 35, enc : 5 },
		swim : { spd : 35, enc : 30 }
	},
	languageProfs : ["Common", "Otteren"],
	age : " reach adulthood around 5 or 6 and live around 100 years",
	height : " range from 3 to 4 feet tall (4'9\" + 2d10\")",
	weight : " weigh between 40-80lbs (110 + 2d10 \xD7 2d4 lb)",
	improvements : "Otterfolk: +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "River Otter (+2 Charisma, +1 Dexterity) Darkvision:  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.\nCreature of the Water: While Otterfolk do not breathe underwater, you are well equipped to survive in watery terrains. You can hold your breath for up to an hour at a time. You also have a swimming speed equal to your base walking speed and can see up to 30 feet in murky water as if it were clear.\nInnate Voyager: You gain proficiency in the Survival skill\nHard to Pin Down: Creatures have disadvantage when making a grappling check against you. Additionally, you can ignore non-magical difficult terrain.\nSwift foot: Your movement speed increases by 5 feet.\nSlice of Home: Whenever you and any additional creatures of your choice take a short or long rest, they gain hit points equal to your Charisma modifier as you make the area cozier to be in.\nPart of the Family: You are able to lend a hand to your friends as if they were your own family. You can use the Help action as a bonus action, and its range increases to 10 feet.",
	weapons : ["claws"],
    vision : ["Darkvision", 60],
    skills : ["Survival"],
});

