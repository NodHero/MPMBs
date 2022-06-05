var iFileName = "Race - Avariel.js"; 
RequiredSheetVersion(13);

SourceList["NHB"] = {
	name : "Nod's Homebrew Collection",
	abbreviation : "NHB",
	abbreviationSpellsheet: "N",
	group : "Nod's Homebrew",
	date : "2021/12/29"
};

// Add Races
RaceList["avariel-ua"] = { // originally from UA
	regExpSearch : /^(?!.*half)((?=.*avariel)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(winged?|wings?|flying|air)\b))).*$/i,
	name : "Avariel",
	sortname : "Elf, Winged (Avariel)",
	source : [["NHB"]],
	plural : "Avariel",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
	},
	languageProfs : ["Common", "Elvish", "Auran"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from 5 to over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Avariel (+2 Dexterity)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nFlight: I have a flying speed of 30 feet. To use this speed, I can't be wearing medium or heavy armor."
};
AddRacialVariant("half-elf", "winged", {
	regExpSearch : /winged/i,
	name : "Half-sky elf",
	source : ["NHB"],
	plural : "Half-sky elves",
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 0 }
	},
	skillstxt : "",
	trait : "Half-Sky Elf (+2 Charisma and +1 to two other ability scores of my choice)\n\nFlying Speed:\n   My Avariel heritage grants me wings, which gives me a flying speed equal to my walking speed. To use this speed, I can't be wearing medium or heavy armor."
});
