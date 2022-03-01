var iFileName = "Race - Variant Satyr (Veggie) [DanDWiki].js";

RequiredSheetVersion(13);
// This file adds the Variant Satyr from DanDWiki (https://www.dandwiki.com/wiki/Satyr,_Variant_(5e_Race)) with requested changes by u/theVeggieJerk

// Define the sources
SourceList["HB:VS"] = {
	name : "Race - Variant Satyr",
	abbreviation : "VS",
	group : "Third Party",
};

RaceList["pipes satyr"] = {
	regExpSearch : /^(?=.*pipes)(?=.*satyr).*$/i,
	name : "Pipes Satyr",
	sortname : "Satyr, Pipes",
	source : [["HB:VS", 1]],
	plural : "Satyr",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
		savetxt : {
			text : [["Magic can't put me to sleep", " Play music/dance/sing without exhaustion"]],
			adv_vs : ["charmed", "ingested"]
		},
	languageProfs : ["Common", "Sylvan"],
	skills : ["Persuasion"],
	toolProfs : [["Panpipes"]],
	vision : [["Advantage on Investigation to find social gatherings", 0]],
	weaponOptions : {
		baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*(satyr|\bram\b))(?=.*headbutt).*$/i,
		name : "Satyr Headbutt",
		source : [["HB:VS", 25]],
		damage : [1, 4, "bludgeoning"]
	},
	weaponsAdd : ["Satyr Headbutt"],
	age : " mature and age at about the same rate as humans",
	height : " range from just under 5 feet to about 6 feet in height, with generally slender builds (4'8\" + 2d8\")",
	weight : " weigh around 145 lbs (100 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from just under 1,5 metres to about 1,8 metres in height, with generally slender builds (145 + 5d8 cm)",
	weightMetric : " weigh around 66 kg (45 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Pipes Satyr (+2 Charisma, +1 Dexterity)"+
		"\n \u2022 Fey: My creature type is Fey, rather than humanoid."+
		"\n \u2022 Pipes: I can use my Panpipes as an Arcane Focus. I know the Vicious Mockery cantrip. At 3rd level, I can cast Sleep. At 5th level, Suggestion. I can cast each without using a spell slot once per long rest. Charisma is my spellcasting ability for these."+
		"\n \u2022 Exotic Body. Garments/armor must be custom-made, 150% base."+
		"\n \u2022 Drunken Foolery. I have adv on saves against anything I ingest and on Int (Investigation) checks to locate social gatherings. I can dance, sing, or play music without experiencing exhaustion.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Pipes (level 1)",
		spells : ["vicious mockery"],
		selection : ["vicious mockery"],
		firstCol : 'atwill'
	},
	features : {
		"sleep" : {
			name : "Pipes (level 3)",
			limfeaname : "Sleep",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Pipes (level 3)",
				spells : ["sleep"],
				selection : ["sleep"],
				firstCol : 'oncelr'
			},
		},
		"suggestion" : {
			name : "Pipes (level 5)",
			limfeaname : "Suggestion",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Pipes (level 5)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				firstCol : 'oncelr'
			},
		},
	}
};


/* Satyr Traits

The goatfolk of the woods.
Ability Score Increase. Your Charisma score increases by 2, and your Dexterity score increases by 1.
Age. Satyrs reach adulthood at the age of 50, and live to be 500.
Alignment. Satyrs tend to have chaotic alignments, and most are good if not neutral. However, evil satyrs do exist, taking what they want from others to feed their insatiable appetite for pleasure.
Size. Satyrs are usually around 5 feet in height and weigh around 170 pounds. Your size is Medium.
Speed. Your base walking speed is 30 feet.
Fey Ancestry. You have advantage on saving throws against being charmed and magic can't put you to sleep.
Pipes. You can use panpipes (that you begin play with) as an arcane focus to cast spells. You know the vicious mockery cantrip. Once you reach 3rd level, you can cast sleep with this trait, and starting at 5th level, you can also cast suggestion with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.
Exotic Body. Normal articles don't fit you, and your people do not clothe or armor themselves. Any garments you wish to wear must be custom-made with a material cost equal to the base item plus 50%. This does not include any service fee a craftsman may charge you.
Charmed Speech. You are proficient in the Persuasion skill.
Drunken Foolery. You have advantage on saving throws against anything you ingest and on Intelligence (Investigation) checks to locate social gatherings. In addition, you can dance, sing, or play music without experiencing exhaustion.
Languages. You can speak, read and write Common and Sylvan. */