var iFileName = "Race - Storm Genasi [astrarche].js";

RequiredSheetVersion(13);
// This file adds the Storm Genasi from GMBinder (https://www.gmbinder.com/share/-LcWQWaWbWq7kTjxCuJK) requested by u/PieceDue2026

// Define the sources
SourceList["HB:SG"] = {
	name : "Race - Storm Genasi",
	abbreviation : "SG",
	group : "Third Party",
};

RaceList["storm genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bstorms?\b).*$/i,
	name : "Storm Genasi",
	sortname : "Genasi, Storm",
	source : [["HB"]],
	plural : "Storm Genasi",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Auran"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 2, 0, 0, 0],
	trait : "Storm Genasi (+1 Dexterity, +2 Constitution)"+
	"\n \u2022 Swift like the Wind. My base walking speed increases to 35 ft."+
	"\n \u2022 Embrace the Storm: I know the Shocking Grasp cantrip. When I reach 5th level, I can cast the Call Lightning spell  with this trait, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for these spells."+
	"\n \u2022 Tempestborn. I have resistance to either Lightning or Thunder damage (chosen when I select this race).",
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Embrace the Storm (level 1)",
		spells : ["shocking grasp"],
		selection : ["shocking grasp"],
		firstCol : 'atwill'
	},
	features : {
		"call lightning" : {
			name : "Embrace the Storm (level 5)",
			limfeaname : "Call Lightning",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Embrace the Storm (level 5)",
				spells : ["call lightning"],
				selection : ["call lightning"],
				firstCol : 'oncelr'
			}
		}
	}
};
AddRacialVariant("storm genasi", "lightning", {
	regExpSearch : /lightning/i,
	name : "Lightning Storm Genasi",
	source : [["HB"]],
	plural : "Storm Genasi",
	dmgres : ["Lightning"],
	trait : "Storm Genasi (+1 Dexterity, +2 Constitution)"+
	"\n \u2022 Swift like the Wind. My base walking speed increases to 35 ft."+
	"\n \u2022 Embrace the Storm: I know the Shocking Grasp cantrip. When I reach 5th level, I can cast the Call Lightning spell  with this trait, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for these spells."+
	"\n \u2022 Tempestborn (Lightning): I have resistance to Lightning damage.",
});
AddRacialVariant("storm genasi", "thunder", {
	regExpSearch : /thunder/i,
	name : "Thunder Storm Genasi",
	source : [["HB"]],
	plural : "Storm Genasi",
	dmgres : ["Lightning"],
	trait : "Storm Genasi (+1 Dexterity, +2 Constitution)"+
	"\n \u2022 Swift like the Wind. My base walking speed increases to 35 ft."+
	"\n \u2022 Embrace the Storm: I know the Shocking Grasp cantrip. When I reach 5th level, I can cast the Call Lightning spell  with this trait, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for these spells."+
	"\n \u2022 Tempestborn (Thunder): I have resistance to Thunder damage.",
});

/* Genasi Traits
All Genasi share the following traits:
Ability Score Increase. Your Constitution score can be increased by 2.
Age. Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.
Alignment. Independent and self-reliant, genasi tend toward a neutral alignment.
Size. Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.
Speed. Your base walking speed is 30 feet. */

/* Variant: Storm Genasi
Storm Genasi are an offshoot of Air Genasi representing the electricity, energy, and power of storms in the sky. They are free-spirited and intense, their moods blowing over as quickly as a thunderstorm.
They often have blue skin, with almost a bruised appearance, and have a bad habit of shocking those who touch them with the static electricity generated in their movement.
Ability Score Increase. Your Dexterity score can be increased by 1.
Tempestborn. You have resistance to your choice of Lightning Damage or Thunder Damage.
Swift like the Wind. Your base movement speed is 35 ft.
Embrace the Storm. You know the Shocking Grasp cantrip. Once you reach 5th level, you can cast Call Lightning once with this trait and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells. */