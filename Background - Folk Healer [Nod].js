var iFileName = "Background - Folk Healer [Nod].js"; 
RequiredSheetVersion(13);

SourceList["NodHB-Doc"] = {
	name : "Folk Healer",
	abbreviation : "NodHB-Doc",
	group : "Nod's Homebrew",
	date : "2021/12/29"
};

BackgroundList["folk healer"] = { // folk healer
	regExpSearch : /^(?=.*folk)(?=.*healer).*$/i,
	name : "Folk Healer",
	source : [["NodHB-Doc"]],
	skills : ["Medicine"],
	skillstxt : "Medicine and choose one from Nature or Investigation",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["guidance", "resistance", "spare the dying", "detect poison and disease", "healing word", "calm emotions", "gentle repose", "beacon of hope", "mass healing word", "aura of purity", "death ward", "mass cure wounds"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Guidance, Resistance, Spare the Dying, Detect Poison and Disease, Healing Word, Calm Emotions, Gentle Repose, Beacon of Hope, Mass Healing Word, Aura of Purity, Death Ward, Mass Cure Wounds.",
		],
	},
	gold : 15,
	equipleft : [
		["Herbalism kit", "", 3],
		["Poisoner’s kit", "", 2]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Badge or emblem of profession", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "The Doctor Is In",
	trait : [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"I wear a badge that marks me as a healer a little too proudly.",
		"You don’t get into this trade unless you like people. I've never met someone I couldn’t relate to in some way.",
		"Sometimes you have to break the rules a little if it is in the name of helping others or advancing knowledge."
	],
	ideal : [
		["Charity",
			"Charity. All creatures have a right to proper medical care. (Good)"
		],
		["Control",
			"Control. Death is an implacable foe, but with my skills I can change the world. (Lawful)"
		],
		["Prestige",
			"Prestige. Healers are held in high esteem; I like the job perks. (Chaotic)"
		],
		["Power",
			"Power. The power to heal gives me power over people. (Evil)"
		],
		["Sincerity",
			"Sincerity: There's no good in pretending to be something I'm not. (Neutral)"
		],
		["Excitement",
			"Excitement. People see me when there is a problem, and I love solving problems. (Any)"
		]
	],
	bond : [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I learned the healing arts after someone I loved died and there was nothing I could do to help them.",
		"I have a fascination with a particularly specialized field of medicine, such as leeching or amputation.",
		"There are many charlatans who call themselves healers but are dangerous quacks. They must be exposed.",
		"I have a precious research diary which contains all my medical observations and thoughts.",
		"There is a particular plague that has struck my people - my life’s work is to find a cure."
	],
	flaw : [
		"I care so much about the people who come to me that when I can’t help it is a devastating blow.",
		"I treat my patients as problems to be solved rather than real people.",
		"I have a habit of self-medicating with tinctures of my own creation.",
		"I treated a high-ranking person who died - their kin blamed me and have sworn vengeance.",
		"I see sickness everywhere whether real or imagined, even in myself.",
		"I do not have a sense of humor, especially when it comes to jokes at my expense."
	],
	toolProfs : [["Herbalism Kit"], ["Poisoner’s Kit"]],
	lifestyle : "modest"
};
BackgroundFeatureList["the doctor is in"] = {
	description : "Healers are almost universally seen positively. I can gain the trust of almost any intelligent creature that is sick or hurt if I seem willing to help. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown yourself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source : [["NodHB-Doc"]]
};




