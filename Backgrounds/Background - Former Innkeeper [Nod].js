var iFileName = "Background - Former Innkeeper [Nod].js"; 
RequiredSheetVersion(13);

SourceList["NodHB-Inn"] = {
	name : "Former Innkeeper",
	abbreviation : "NodHB-Inn",
	group : "Nod's Homebrew",
	date : "2021/12/29"
};

BackgroundList["former innkeeper"] = { // former innkeeper
	regExpSearch : /^(?=.*former)(?=.*innkeeper).*$/i,
	name : "Former Innkeeper",
	source : [["NodHB-Inn"]],
	skills : ["Insight"],
	skillstxt : "Insight and choose one from Intimidation or Persuasion",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["message", "prestidigitation", "purify food and drink", "sleep", "calm emotions", "zone of truth", "catnap", "create food and water", "leomund's tiny hut", "aura of purity", "mordenkainen's private sanctum", "rary's telepathic bond"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Message, Prestidigitation, Purify Food and Drink, Sleep, Calm Emotions, Zone Of Truth, Catnap, Create Food and Water, Leomund’s Tiny Hut, Aura Of Purity, Mordenkainen's Private Sanctum, Rary’s Telepathic Bond.",
		],
	},	
	gold : 10,
	equipleft : [
		["Brewer's supplies or Cook's utensils", "1", ""],
		["flask or bottle of alcohol", "1", ""],
		["Shovel", "", 5],
		["Two-person tent", "", 20],		
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Warm Welcome",
	trait : [
		"Everyone has a story to tell.",
		"In my estimation, if you're honest, you're a friend.",
		"I’d rather make a new friend than a new enemy.",
		"I've never been scared to back down from a fight.",
		"My sharp wit and cunning remarks can cut tension like a hot knife.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"I like to collect trinkets and magical objects, even if that means stealing them sometimes.",
		"I know a story relevant to almost every situation, and sometimes they’re true."
	],
	ideal : [
		["Kindness",
			"Kindness: A smile and ale can raise most spirits. (Good)"
		],
		["Frugal",
			"Frugal: Every coin counts, if I can haggle a price I will. (Lawful)"
		],
		["Power",
			"Power: Gold can get you a lot, but a threat can get you more. (Evil)"
		],
		["Curiosity",
			"Curiosity: I'm always thinking of new concoctions and dishes. (Neutral)"
		],
		["Knowledge",
			"Knowledge: With enough alcohol, you can make someone tell you anything. (Chaotic)"
		],
		["Freedom",
			"Freedom: If something is being given away, chances are, I will always take it. (Any)"
		]
	],
	bond : [
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I remember leaner times and will push for all folks to be treated equally.",
		"I want to be famous, whatever it takes.",
		"I wish my childhood sweetheart had come with me to pursue my destiny.",
		"I accidentally served a dangerous criminal and now the guards don't trust me.",
		"The inn where I learned my trade is the most important place in the world to me."
	],
	flaw : [
		"I always speak my mind, for better or worse.",
		"I'm a sucker for a pretty face. I fall in and out of love easily and am always pursuing someone.",
		"I am too enamored of ale, wine, and other intoxicants. Once I start drinking, it's hard to stop.",
		"I'll do anything to win fame and renown. I'm never satisfied with what I have--I always want more.",
		"I tend to get carried away when insulting someone.",
		"I have a 'tell' that reveals when I'm lying."
	],
	toolProfs : [["Brewer's supplies or Cook's utensils", 1]],
	languageProfs : [["Choose one (including Thieves’ Cant)", 1]],
	lifestyle : "modest"
};
BackgroundFeatureList["warm welcome"] = {
	description : "When you first meet new people, your demeanor is such to put them at ease and they usually assume you are friendly. You ran an inn, which you gave up for the life of adventure. However, the new owner of the inn or tavern may give you free room and board at a modest standard. You also know a lot of former patrons hailing from many places near and far, who may offer you favors or jobs.",
	source : [["NodHB-Inn"]]
};	



