var iFileName = "Background - Scrivener [Nod].js"; 
RequiredSheetVersion(13);

SourceList["NodHB-Scv"] = {
	name : "Scrivener",
	abbreviation : "NodHB-Scv",
	group : "Nod's Homebrew",
	date : "2021/12/29"
};

BackgroundList["scrivener"] = { // scrivener [Izzet Engineer (GGtR) as a Sage]
	regExpSearch : /scrivener/i,
	name : "Scrivener",
	source : [["NodHB-Scv"]],
	skills : ["Arcana", "Investigation"],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["produce flame", "shocking grasp", "chaos bolt", "create or destroy water", "unseen servant", "heat metal", "rope trick", "call lightning", "elemental weapon", "glyph of warding", "conjure minor elementals", "divination", "otiluke's resilient sphere", "animate objects", "conjure elemental"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Produce Flame, Shocking Grasp, Chaos Bolt, Create or Destroy Water, Unseen Servant, Heat Metal, Rope Trick, Call Lightning, Elemental Weapon, Glyph of Warding, Conjure Minor Elementals, Divination, Otiluke's Resilient Sphere, Animate Objects, and Conjure Elemental."
		]
	},
	gold : 10,
	equipleft : [
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""],
		["Small knife", "", 0.5],
		["Letter from dead colleague", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : [["Artisan's tools", 1]],
	feature : "Researcher",
	trait : [
		"I use polysyllabic words that convey the impression of great erudition.",
		"I've read every book in the world's greatest libraries\u2015 or I like to boast that I have.",
		"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
		"There's nothing I like more than a good mystery.",
		"I'm willing to listen to every side of an argument before I make my own judgment.",
		"I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost. . . everyone . . . is . . . compared . . . to me.",
		"I am horribly, horribly awkward in social situations.",
		"I'm convinced that people are always trying to steal my secrets."
	],
	ideal : [
		["Knowledge",
			"Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
		],
		["Beauty",
			"Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our logical thinking. (Lawful)"
		],
		["No Limits",
			"No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
		],
		["Power",
			"Power: Knowledge is the path to power and domination. (Evil)"
		],
		["Self-Improvement",
			"Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
		]
	],
	bond : [
		"It is my duty to protect my students.",
		"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
		"I work to preserve a library, university, scriptorium, or monastery.",
		"My life's work is a series of tomes related to a specific field of lore.",
		"I've been searching my whole life for the answer to a certain question.",
		"I sold my soul for knowledge. I hope to do great deeds and win it back."
	],
	flaw : [
		"I am easily distracted by the promise of information.",
		"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
		"Unlocking an ancient mystery is worth the price of a civilization.",
		"I overlook obvious solutions in favor of complicated ones.",
		"I speak without really thinking through my words, invariably insulting others.",
		"I can't keep a secret to save my life, or anyone else's."
	],
};




