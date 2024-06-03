/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds the Lupin race and a racial feat for same
	Code by:	NodHero
	Date:		2023-03-20 (sheet v13.0.9)
*/

var iFileName = "Race - Lupin [Nod].js"; 
RequiredSheetVersion(13);

SourceList["LUP"] = {
	name : "Race - Lupin",
	abbreviation : "Lupin",
	group : "Nod's Homebrew",
	date : "2023/03/20"
};

/* Lupin
Ability Scores: Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1
Size: Medium
Speed: 35 ft
-----
Darkvision. You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
Daunting Growl. As a bonus action, you can let out an especially menacing growl. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw or become frightened of you until the end of your next turn. The DC of the save equals 8 + your proficiency bonus + your Constitution modifier. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
Lupin Fangs. You have four pointy teeth, two on top and two on the bottom of your mouth, that you can use to make unarmed strikes. When you hit with them, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
Hunter's Instincts. You have proficiency in one of the following skills of your choice: Athletics, Intimidation, Perception, or Survival.
Languages. You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.
*/

RaceList["lupin"] = {
	regExpSearch : /lupin/i,
	name : "Lupin",
	source : [["LUP"]],
	plural : "Lupin",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	skillstxt : "Choose one from Athletics, Intimidation, Perception, or Survival",
	vision : [["Darkvision", 60]],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(lupin|\bdogs?\b))(?=.*fangs).*$/i,
		name : "Lupin Fangs",
		source : [["LUP", 21]],
		damage : [1, 6, "piercing"]
	}],
	weaponsAdd : ["Lupin Fangs"],
	abilitySave : 3,
	age : " mature and age at about the same rate as humans",
	height : " are typically over 6 feet tall, with some standing over 7 feet (5'6\" + 2d10\")",
	weight : " weigh around 250 lb (180 + 2d10 \xD7 2d6 lb)",
	heightMetric : " are typically over 1,8 metres tall, with some standing over 2,1 metres (167 + 5d10 cm)",
	weightMetric : " weigh around 120 kg (80 + 5d10 \xD7 4d6 / 10 kg)",
	scoresGeneric : true,
	features : {
		"daunting growl" : {
			name : "Daunting Growl",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
			action : [["bonus action", ""]]
		}
	},
	trait : "Lupin (+2/+1 or +1/+1/+1)" + desc([
		"Fangs: I can use my fangs to make unarmed strikes that deal 1d6 piercing damage.",
		"Daunting Growl: As a bonus action proficiency modifier per short rest, I can let out a menacing growl. Creatures of my choice within 10 ft of me that can hear me must make a Wisdom saving throw (DC 8 + Constitution modifier + Proficiency Bonus) or become frightened of me until the end of my next turn.",
		"Hunter's Instincts: I'm proficient in either Athletics, Intimidation, Perception, or Survival."
	])
};
WeaponsList["daunting growl"] = { 
		regExpSearch : /^(?=.*daunting)(?=.*growl).*$/i,
		name : "Daunting Growl",
		source : ["LUP"],
		ability : 3,
		type : "Natural",
		damage : ["", "", ""],
		save : "Wis",
		range : "within 10 ft",
		description : "Chosen creatures that see/hear me make Wis save or frightened until end of my next turn",
		abilitytodamage : false,
		dc : true,
};

// Add Racial Feats for Lupin
FeatsList["blood of hounds"] = { 
	name : "Blood of Hounds",
	source : ["LUP"],
	prerequisite : "Being a Lupin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('lupin') !== -1; },
	description : "When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns. I have advantage on Perception, Survival, and Investigation checks that involve smell. I count as one size larger for my carrying capacity and push/drag/lift. [+1 to one]",
	descriptionFull : "insert clever description. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Chase. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.\n \u2022 Powerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
	scorestxt : "+1 to one ability score of my choice",
	vision : [["Keen Smell (one month)", 0]],
	features : {
		"chase" : {
			name : "Chase",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	carryingCapacity : 2
};
/* Blood of Hounds
Prerequisite: Lupin
Your bloodline has a strong pedigree. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• Keen Smell. You have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell. You can accurately recall anything you have smelled within the past month.
• Chase. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.
• Powerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
*/
