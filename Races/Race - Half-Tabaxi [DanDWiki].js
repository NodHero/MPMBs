/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds the Half-tabaxi race
				This is taken from the Dandwiki website (https://www.dandwiki.com/wiki/Half-Tabaxi_(5e_Race))
	Code by:	NodHero
	Date:		2023-10-19
*/

var iFileName = "Race - Half-Tabaxi [DanDWiki].js";
RequiredSheetVersion("13.0.8");

SourceList["HB:HT"]={
	name : "Half-Tabaxi",
	abbreviation : "HB:HT",
	group : "Third Party",
	url : "https://www.dandwiki.com/wiki/Half-Tabaxi_(5e_Race)",
	date : "2019-12-10"
};

RaceList["half-tabaxi"] = {
	regExpSearch : /half-tabaxi/i,
	name : "Half-tabaxi",
	source : [["HB:HT"]],
	plural : "Half-tabaxi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 }
	},
	skills : ["Perception", "Stealth"],
	skillstxt : "Perception, Stealth and choose any one skill",
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	features : {
		"feline agility" : {
			name : "Feline Agility",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	trait : "Half-tabaxi (+2 Dexterity, +1 Charisma)"+
	"\n \u2022 Cat's Talent: I have proficiency in Perception, Stealth, and one other skill of my choice."+
	"\n \u2022 Feline Agility: When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns."
};
/* Half-Tabaxi
Physical Description
Half-Tabaxi are a result of contact between Humans and Tabaxi. They appear mostly Human, with a few cat-like traits, such as ears, tails, and fangs. Just pick one out those three. Pick any cat’s eyes on your own.

History
Half-Tabaxi are often subject to a lot of discrimination

Society
Half-Tabaxi haven’t had a chance to form their own society or culture due to their sparse population.
Half-Tabaxi Names
Male:
Female:

Half-Tabaxi Traits
Ability Score Increase. Your Dexterity score increases by 2, and one other ability scores of your choice increase by 1.
Age. Half-Tabaxi age at about the same rate as Humans.
Alignment. Half-Tabaxi tend towards chaos similarly to Tabaxi, but have no strong tendency towards good or evil.
Size. Half-Tabaxi are very similar in size to Humans, if not a bit slimmer. Your size is Medium
Speed. Your base walking speed is 30 feet.
Darkvision. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
Cat’s Talent. You gain proficiency in Perception, Stealth, and one other skill of your choice
Feline Agility. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the tum. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.
Languages. You can speak, read, and write Common and one other language of your choice. */