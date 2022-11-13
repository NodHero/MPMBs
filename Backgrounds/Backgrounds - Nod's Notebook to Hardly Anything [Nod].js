var iFileName = "Backgrounds - Nod's Notebook to Hardly Anything [Nod].js"; 
RequiredSheetVersion(13);

SourceList["NN:B"] = {
	name : "Backgrounds - Nod's Notebook to Hardly Anything [Nod]",
	abbreviation : "NN:B",
	abbreviationSpellsheet: "HA",
	group : "Nod's Homebrew",
	date : "2022/02/26"
};

// Add Appendix C: Character Backgrounds (Baldur’s Gate, the Fall of Elturel, pg 19)
BackgroundList["hellrider"] = { // Hellrider
	regExpSearch : /hellrider/i,
	name : "Hellrider",
	source : [["NN:B", 19]],
	skills : ["Animal Handling", "Persuasion"],
	calcChanges : {
	spellList : [
		function(spList, spName, spType) {
			if (!ClassList[spName] || spList.spells || spList.psionic) return;
			if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
			spList.extraspells = spList.extraspells.concat(["friends", "message", "beast bond", "command", "beast sense", "calm emotions", "counterspell", "phantom steed", "compulsion", "dominate beast", "awaken"]);
		},
		"My background adds extra spells to the spell list(s) of my spellcasting class(es): Friends, Message, Beast Bond, Command, Beast Sense, Calm Emotions, Counterspell, Phantom Steed, Compulsion, Dominate Beast, Awaken"
		]
	},
	gold : 9,
	languageProfs : [1],
	toolProfs : [["Gaming set or Musical instrument", 1]],
	equipright : [
		["Traveler's clothes", "", 4],
		["a signet", "", ""],
		["a banner or seal with the crest of Elturgard", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Respected Rider",
	trait : [
		"I tell other Hellriders’ stories as if they were my own.",
		"My armor must remain spotless so that it may reflect the light of the Companion.",
		"My horse goes wherever I do.",
		"Only death frees a Hellrider from their post. Some say I welcome it.",
		"I was a hellion growing up. I often take the time to educate (or chastise) children I meet in my adventures.",
		"When I’m on the job, I never crack a smile.",
		"I reserve eye contact for those I respect.",
		"I haven’t cut my hair since I joined the Hellriders."
	],
	ideal : [
		["Kindness", "Kindness: The light of the Companion burns bright within my soul. (Good)"],
		["Justice", "Justice: By upholding the law, we defend the rights of all. (Lawful)"],
		["Fury", "Fury: I am relentless in the pursuit and destruction of my enemies. (Evil)"],
		["Freedom", "Freedom: Everyone should be free to pursue their livelihood. (Chaotic)"],
		["Loyalty", "Loyalty: When I make an ally, it’s for life. (Any)"],
		["Nation", "Nation: My city, kingdom, and its people are all that matter: (Any)"]
	],
	bond : [
		"So long as the Companion burns over Elturel, there is still hope for Faerûn.",
		"My name and deeds will be immortalized in the songs of the Hellriders.",
		"I idolize the High Rider and dutifully follow their commands.",
		"I have a mighty steed that I prize above all others.",
		"I’m not the first Hellrider in my family, and I won’t be the last.",
		"I have sworn the strict oaths of the Creed Resolute. I vow to uphold the laws of Elturgard, protect its citizens, and serve the greater good."
	],
	flaw : [
		"I am always honest with those of higher authority.",
		"When I’m off duty, I am somewhat inattentive.",
		"Though I have sworn to vanquish evil, I secretly fear it.",
		"I trained for years to be a Hellrider. I have little patience for those who are privileged by birth.",
		"I am suspicious of those who extend offers to me.",
		"I was never supposed to be a Hellrider. I worry that one day I’ll be discovered as a fraud."
	],
	extra : ["Rank Name (Role)",
		"Hoof (Knight)",
		"Quarter (Standard Bearer)",
		"Stallion (Under-Marshal)",
		"Destrier (Marshal)",
		"High Rider (Commander)",
	],
	lifestyle : "modest"
};
BackgroundFeatureList["respected rider"] = {
	description : "While in the Kingdom of Two Suns, I can commandeer fresh mounts for myself and my party. Hellriders are held in high regard and can resupply in any Elturgard settlement. Use the warhorse statistics for my mount and the riding horse statistics for those of my comrades. Outside of the Elturgard, I can purchase nonexotic mounts from merchants sympathetic to the Hellriders at half price.",
	source : [["NN:B", 19]],
};

BackgroundList["order of the gauntlet "] = { // Order of the Gauntlet
	regExpSearch : /^(?=.*order)(?=.*gauntlet).*$/i,
	name : "Order of the Gauntlet ",
	source : [["NN:B", 20]],
	skills : ["Insight", "Religion"],
	languageProfs : [2],
	calcChanges : {
	spellList : [
		function(spList, spName, spType) {
			if (!ClassList[spName] || spList.spells || spList.psionic) return;
			if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
			spList.extraspells = spList.extraspells.concat(["fire bolt", "sacred flame", "guiding bolt", "heroism", "aid", "scorching ray", "beacon of hope", "blinding smite", "death ward", "wall of fire", "flame strike"]);
		},
		"My background adds extra spells to the spell list(s) of my spellcasting class(es): Fire Bolt, Sacred Flame, Guiding Bolt, Heroism, Aid, Scorching Ray, Beacon of Hope, Blinding Smite, Death Ward, Wall of Fire, Flame Strike"
		]
	},
	gold : 15,
	equipleft : [
		["a scroll containing the tenets of the Order", "", ""],
	],
	equipright : [
		["Common clothes", "", 3],
		["A heraldic pendant", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Constant Vigilance",
	trait : [
		"I clutch my pendant for strength when threatened with fear or temptation.",
		"I see omens in every event and action. The gods are speaking to us, we just need to listen.",
		"I don’t like to go into situations unprepared.",
		"I impart my earnings and possessions to those in need during my travels.",
		"I never throw the first punch, but I always throw the last.",
		"I am always honest in my intentions. Only evil works in the shadows.",
		"There’s never a bad time to teach someone a lesson through a religious fable.",
		"I’m a reformed criminal. Sometimes I slip into old habits."

	],
	ideal : [
		["Integrity", "Integrity: To stand against evil, I must be righteous. (Good)"],
		["Mercy", "Mercy: Repentance begets forgiveness. Forgiveness begets righteousness. (Good)"],
		["Retribution", "Retribution: When evil strikes, I administer a swift and just penalty. (Lawful)"],
		["Honor", "Honor: Punishing an evil act is just. Punishing an evil thought is not. (Lawful)"],
		["Bravery", "Bravery: I face my fears head-on. (Any)"],
		["Faith", "Faith: The greatest weapon against adversity is devotion to my god. (Any)"]
	],
	bond : [
		"My town was razed by a vicious cult. I won’t rest until they pay for their crimes.",
		"An evil prophecy has begun, and I will do everything in my power to stop it.",
		"I protect those who cannot protect themselves.",
		"My mentor’s approval means everything to me.",
		"I never leave a comrade behind.",
		"The Order of the Gauntlet saved me when I was a child. I owe them my life.",
	],
	flaw : [
		"I am always willing to grant someone a second chance.",
		"I never strike a creature when it’s down.",
		"The burdens of others are mine to bear.",
		"My ancestors committed horrible atrocities. My name carries their shame.",
		"I am trusting of clerics and other overtly religious figures.",
		"I’m still grieving the loss of one of my comrades. Reminders of their death shake me to my core."
	],
	extra : ["Rank Name (Role)",
		"Chevall (Initiate)",
		"Marcheon (Agent)",
		"Whitehawk (Stalwart)",
		"Vindicator (Mentor)",
		"Righteous Hand (Exemplar)"
	],
	lifestyle : "modest"
};
BackgroundFeatureList["constant vigilance"] = {
	description : "The Order of the Gauntlet must be poised to retaliate should evil misbehave. To stay prepared, the organization works openly with local groups to identify and monitor evil threats such as cults, crime syndicates, or inherently evil creatures. When I enter a new settlement, I can request an audience on behalf of the order with faction agents, law enforcement, or clergy sympathetic to my cause.",
	source : [["NN:B", 20]],
};

BackgroundList["flaming fist"] = { // Flaming Fist
	regExpSearch : /^(?=.*flaming)(?=.*fist).*$/i,
	name : "Flaming Fist",
	source : [["NN:B", 21]],
	skills : ["Athletics", "Intimidation"],
	calcChanges : {
	spellList : [
		function(spList, spName, spType) {
			if (!ClassList[spName] || spList.spells || spList.psionic) return;
			if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
			spList.extraspells = spList.extraspells.concat(["friends", "shocking grasp", "alarm", "faerie fire", "hold person", "rime’s binding ice", "clairvoyance", "blinding smite", "arcane eye", "locate creature", "dominate person"]);
		},
		"My background adds extra spells to the spell list(s) of my spellcasting class(es): Friends, Shocking Grasp, Alarm, Faerie Fire, Hold Person, Rime’s Binding Ice, Clairvoyance, Blinding Smite, Arcane Eye, Locate Creature, Dominate Person"
		]
	},
	gold : 10,
	toolProfs : [["Gaming set", 1], ["Vehicles (land)"]],
	equipleft : [
		["a gaming set of your choice", "", ""],
	],
	equipright : [
		["Flaming Fist uniform", "", 4],
		["an insignia of your rank", "", ""],
		["a banner or seal with the crest of Elturgard", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Tighten the Grip",
	trait : [
		"I like to make an example of those who step out of line.",
		"As long as I’m compensated fairly, I’ll carry out any task without question.",
		"I love a good flogging.",
		"I use my ties to the Flaming Fist to influence others and get what I want.",
		"I have a hot temper and a short fuse. I’m working on it.",
		"Actions speak louder than words.",
		"I go out of my way to prove I’m not like the other members of the Flaming Fist.",
		"The fists are underpaid, and I’m trying to start a union."
	],
	ideal : [
		["Redemption", "Redemption: Everyone deserves a second chance. (Good)"],
		["Order", "Order: Respect the badge, or you’ll respect the club. (Lawful)"],
		["Punishment", "Punishment: Violence is the solution to preventing recidivism and copycats. (Evil)"],
		["Greed", "Greed: My services are for sale to the highest bidder. When there’s treasure involved, that bidder is me. (Chaotic)"],
		["People", "People: I’m committed to the people of Baldur’s Gate, not the Grand Dukes who pay my wages. (Neutral)"],
		["Aspiration", "Aspiration: Only by climbing the ladder can I bring about lasting change. (Any)"]
	],
	bond : [
		"I joined the Flaming Fist to find a criminal who wronged me long ago. Every mission is a potential new lead.",
		"I signed a contract stamped by the Council of Four to accomplish a special task. They own me until my deed is done.",
		"I have a friend or family member within the organization. I joined to make sure they don’t get in over their head.",
		"I have a different vision for the Flaming Fist. Rising in rank is the only way I’ll ever make a difference.",
		"I’ve seen my share of problems in Baldur’s Gate. It’s my job to make the city a better place.",
		"My reputation is spotless, and I intend to keep it that way.",
	],
	flaw : [
		"I always have to have the last word.",
		"I sometimes get carried away when administering punishment to those who violate the law.",
		"I got where I am by backstabbing someone else. I’m paranoid that I’ll meet the same fate.",
		"On occasion, I’ll turn a blind eye in exchange for a bribe.",
		"I go easy on those I deem weak.",
		"I judge anyone with a criminal record."
	],
	extra : ["Rank Name (Role)",
		"Fist (Private)",
		"Gauntlet (Corporal)",
		"Manip (Sergeant)",
		"Flame (Lieutenant)",
		"Blaze (Major)",
		"Marshal (General)"
	],
	lifestyle : "modest"
};
BackgroundFeatureList["tighten the grip"] = {
	description : "I can enact justice on behalf of the Flaming Fist or the city of Baldur’s Gate. If I compel a creature to surrender or knock it unconscious, I may choose to place it under arrest. I may confiscate any of an arrested creature’s possessions or contraband on behalf of the Flaming Fist. At my DM’s discretion, my commanding officer may allow me to keep a portion of these items as payment.",
	source : [["NN:B", 21]],
};

// Add Backgrounds
BackgroundList["angelfire brigade"] = { // angelfire brigade
	regExpSearch : /^(?=.*angelfire)(?=.*brigade).*$/i,
	name : "Angel Brigade",
	source : ["NN:B"],
	skills : ["Athletics", "Intimidation"],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["fire bolt", "sacred flame", "guiding bolt", "heroism", "aid", "scorching ray", "beacon of hope", "blinding smite", "death ward", "wall of fire", "flame strike"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Fire Bolt, Sacred Flame, Guiding Bolt, Heroism, Aid, Scorching Ray, Beacon of Hope, Blinding Smite, Death Ward, Wall of Fire, and Flame Strike."
		]
	},
	gold : 2,
	equipleft : [
		["Feather from angel's wing", "", ""],
		["Tattered piece of Angel banner", 1, ""],
		["Ink pen (quill)", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Angel insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Celestial, Draconic, or Elvish", 1]],
	toolProfs : [["Gaming set", 1]],
	feature : "Brigade Station",
	trait : [
		"I approach every task with the same high degree of military precision.",
		"I am always the first into the fray.",
		"I bear any injury or indignity with stoic discipline.",
		"My righteous wrath is easily inflamed by the slightest iniquity.",
		"My honor is more important to me than my life.",
		"Dangerous work is best accomplished by an orderly group working with common purpose.",
		"I treat my weapons, uniform, and insignia with reverence, for they are gifts of the angels.",
		"I pace when standing and fidget incessantly when forced to sit."
	],
	ideal : [
		["Greater Good", "Greater Good: Our lot is to lay down our lives in defense of others. (Good)"],
		["Justice", "Justice: Achieving justice requires establishing fair, equitable, and compassionate relationships within a community. (Good)"],
		["Protection", "Protection: It isn't right for innocents to suffer because of the arrogance of the powerful. (Good)"],
		["Solidarity", "Solidarity: It is most crucial to act with a single will, marching side by side in perfect accord. (Lawful)"],
		["Order", "Order: Society functions only if people do their duty and respect the chain of command. (Lawful)"],
		["Conviction", "Conviction: Anything worth doing is worth doing with your whole heart. (Lawful)"]
	],
	bond : [
		"I would lay down my life for the angels.",
		"I owe my life to the Angelfire Brigade captain who took me in when I was living on the streets.",
		"My fellow brigade members are my family.",
		"I wield the same Angel weapon my grandparent did, for the honor of our family.",
		"I ran with criminals in my youth, and I'm striving to atone for my past misdeeds.",
		"I do what I can to help out the spouse of a comrade who died in battle."
	],
	flaw : [
		"I act bravely when I'm in a group, but I'm a coward when I'm alone.",
		"I see everything in clear-cut black and white.",
		"I'm just a little fascinated by the ways of the Gruul.",
		"I trust the chain of command more than anything\u2014more even than my closest friends.",
		"I'm slow to trust members of other military forces.",
		"I've been known to turn a blind eye to injustice, with the help of a modest bribe."
	],
	lifestyle : "poor"
};
BackgroundList["folk healer"] = { // folk healer
	regExpSearch : /^(?=.*folk)(?=.*healer).*$/i,
	name : "Folk Healer",
	source : [["NN:B"]],
	skills : ["Medicine"],
	skillstxt : "Medicine and choose one from Nature or Investigation",
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
	lifestyle : "modest",
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
	eval : function() { AddFeat("Home Remedy"); },
	removeeval : function() { RemoveFeat("Home Remedy"); }
};
BackgroundList["former innkeeper"] = { // former innkeeper
	regExpSearch : /^(?=.*former)(?=.*innkeeper).*$/i,
	name : "Former Innkeeper",
	source : [["NN:B"]],
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
BackgroundList["grifter"] = { // Baldur's Gate Criminal with Orzhov Representative spell list
	regExpSearch : /grifter/i,
	name : "Grifter",
	source : [["NN:B", 128]],
	skills: ["Deception"],
	skillstxt: "Deception and choose one from Insight, Sleight of Hand, or Stealth",
	languageProfs: ["Thieves' Cant"],
	toolProfs: [["Disguise kit, forgery kit, or thieves' tools", 1]],
	gold : 15,
	equipleft: [["Set of tools with which I'm proficient", "", ""]],
	equipright: [
		["Inconspicuous common clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Down Low",
	trait : [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value."
	],
	ideal : [
		["Independence",
			"Independence: I am a free spirit \u2015 no one tells me what to do. (Chaotic)"
		],
		["Fairness",
			"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
		],
		["Charity",
			"Charity: I distribute the money I acquire to the people who really need it. (Good)"
		],
		["Creativity",
			"Creativity: I never run the same con twice. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Aspiration",
			"Aspiration: I'm determined to make something of myself. (Any)"
		]
	],
	bond : [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
	],
	flaw : [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
	],
	extra : [
		"Select a Favorite Scheme",
		"Blackmailer",
		"Change identity",
		"Cheat at games of chance",
		"Fence",
		"Pickpocket",
		"Sell junk as expensive necessities",
		"Shave coins, forge documents",
		"Sleight-of-hand cons",
		"Smuggler",
		"Spy",
		"User/manipulator",		
	],
	lifestyle : "comfortable",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["friends", "guidance", "command", "illusory script", "enthrall", "ray of enfeeblement", "zone of truth", "bestow curse", "speak with dead", "spirit guardians", "blight", "death ward", "leomund's secret chest", "geas"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Friends, Guidance, Command, Illusory Script, Enthrall, Ray of Enfeeblement, Zone of Truth, Bestow Curse, Speak with Dead, Spirit Guardians, Blight, Death Ward, Leomund's Secret Chest, and Geas."
		]
	},
};
BackgroundList["guild craftsperson"] = { // Guild Artisan with Izzet Engineer spells
	regExpSearch : /^(?=.*guild)(?=.*craftsperson).*$/i,
	name : "Guild Craftsperson",
	source : [["NN:B", 132], ["P", 132], ["ALbackground", 0]],
	skills : ["Insight", "Persuasion"],
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : [1],
	gold : 15,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Letter of introduction from guild", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Guild Membership",
	trait : [
		"I believe that anything worth doing is worth doing right. I can't help it\u2015 I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
	],
	ideal : [
		["Community", "Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"],
		["Generosity", "Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"],
		["Freedom", "Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"],
		["Greed", "Greed: I'm only in it for the money. (Evil)"],
		["People", "People: I'm committed to the people I care about, not to ideals. (Neutral)"],
		["Aspiration", "Aspiration: I work hard to be the best there is at my craft. (Any)"]
	],
	bond : [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
	],
	flaw : [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have\u2015 I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
	],
	extra : [
		"Select a Guild Business",
		"Alchemists and apothecaries",
		"Armorers, locksmiths, and finesmiths",
		"Brewers, distillers, and vintners",
		"Calligraphers, scribes, and scriveners",
		"Carpenters, roofers, and plasterers",
		"Cartographers, surveyors, and chart-makers",
		"Cobblers and shoemakers",
		"Cooks and bakers",
		"Glassblowers and glaziers",
		"Jewelers and gemcutters",
		"Leatherworkers, skinners, and tanners",
		"Masons and stonecutters",
		"Painters, limners, and sign-makers",
		"Potters and tile-makers",
		"Shipwrights and sailmakers",
		"Smiths and metal-forgers",
		"Tinkers, pewterers, and casters",
		"Wagon-makers and wheelwrights",
		"Weavers and dyers",
		"Woodcarvers, coopers, and bowyers"
	],
	lifestyle : "comfortable",
	calcChanges : {
	spellList : [
		function(spList, spName, spType) {
			if (!ClassList[spName] || spList.spells || spList.psionic) return;
			if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
			spList.extraspells = spList.extraspells.concat(["produce flame", "shocking grasp", "chaos bolt", "create or destroy water", "unseen servant", "heat metal", "rope trick", "call lightning", "elemental weapon", "glyph of warding", "conjure minor elementals", "divination", "otiluke's resilient sphere", "animate objects", "conjure elemental"]);
		},
		"My background adds extra spells to the spell list(s) of my spellcasting class(es): Produce Flame, Shocking Grasp, Chaos Bolt, Create or Destroy Water, Unseen Servant, Heat Metal, Rope Trick, Call Lightning, Elemental Weapon, Glyph of Warding, Conjure Minor Elementals, Divination, Otiluke's Resilient Sphere, Animate Objects, and Conjure Elemental."
	]},
	eval : function() { AddFeat("Vocational Magic"); },
	removeeval : function() { RemoveFeat("Vocational Magic"); }
};
AddBackgroundVariant("noble", "highborn", {
	regExpSearch : /^(?!.*(waterdhavian|waterdeep|knight))(?=.*highborn).*$/i,
	name : "Highborn",
	source : [["NN:B", 135], ["P", 135], ["ALbackground", 0]],
	skills : ["History", "Persuasion"],
	gold : 25,
	equipleft : [
		["Scroll of pedigree", "", ""],
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
	],
	feature : "Position of Privilege",
	toolProfs : [["Gaming set", 1]],
	languageProfs : [1],
	lifestyle : "wealthy",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["friends", "guidance", "command", "illusory script", "enthrall", "ray of enfeeblement", "zone of truth", "bestow curse", "speak with dead", "spirit guardians", "blight", "death ward", "leomund's secret chest", "geas"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Friends, Guidance, Command, Illusory Script, Enthrall, Ray of Enfeeblement, Zone of Truth, Bestow Curse, Speak with Dead, Spirit Guardians, Blight, Death Ward, Leomund's Secret Chest, and Geas."
		]
	},
});
BackgroundList["inquisitor"] = {
	regExpSearch : /inquisitor/i,
	name : "Inquisitor",
	source : ["NN:B"],
	skills : ["Investigation", "Religion"],
	gold : 15,
	equipright : [
		["Traveler's clothes", "", 3],
		["Holy symbol", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Legal Authority",
	trait : [
		"It will all go smoothly if everyone just does as I say.",
		"Despair is an extravagance we can ill afford.",
		"I know the writings of Saint Raban backward and forward.",
		"I try to see the bright side in the very worst situations.",
		"It helps me feel better when others show sympathy or appreciation for the horrors I've endured.",
		"I prefer to face evil with a strong group of friends in front of me.",
		"I want to see the wicked burn for the evil they've brought on us.",
		"I feel the sin being purged from me as I help cleanse the world."
	],
	ideal : [
		["Honesty",
			"Honesty: The smallest deception paves the way to grievous sin. (Lawful)"
		],
		["Piety",
			"Piety: Devotion to the angels and the rites of the church is all that keeps the world from destruction. (Good)"
		],
		["Order",
			"Order: The laws of Avacyn are meant to preserve the social order—everything in its proper place. (Lawful)"
		],
		["Humanity",
			"Humanity: Human life is to be cherished and preserved against the horrors of the night. (Good)"
		],
		["Knowledge",
			"Knowledge: The path to holiness comes through understanding of the world. (Any)"
		],
		["Punishment",
			"Punishment: It is better for the innocent to suffer than for the guilty to escape their due. (Evil)"
		]
	],
	bond : [
		"Thraben is the heart of the world. The cathedral must stand even if the hinterlands are lost.",
		"One day, I will claim vengeance against the monster that took my family from me.",
		"My weapon is all I have to remember my beloved mentor by.",
		"The geist of my beloved speaks to me sometimes.",
		"My dear sibling is now a werewolf.",
		"A small crossways chapel is my spiritual home."
	],
	flaw : [
		"I am troubled by the wild rage and bloodlust that lurks in my own heart.",
		"I have come to believe that I executed an innocent person.",
		"I enjoy the prestige of my position more than service to the angels.",
		"I drink to forget the horrors I've seen.",
		"I might have made a promise to a demon that I can't keep.",
		"I'll do whatever grim task must be done, for my soul is already lost."
	],
	toolProfs : [["Artisan's tools", 1], ["Thieves' tools", "Dex"]],
	variant : []
};
/* Inquisitor Background
Historically, inquisitors were church detectives who investigated crimes both mundane and supernatural. They
were known for traveling to remote parishes plagued by unexplained murders, and for exposing werewolves living among normal humans. During darker times, the inquisitors led a series of brutal forays into unsuspecting villages. They executed suspected lycanthropes with little or no proof, and punished accused heretics in unsanctioned trials. This savage form of inquisition has become the norm, and inquisitors who still pry into dark mysteries have become a minority.
Skill Proficiencies: Investigation, Religion
Tool Proficiencies: Thieves’ tools, one set of artisan’s tools of your choice
Equipment: A holy symbol, a set of traveler’s clothes, and a belt pouch containing 15 gp
Feature: Legal Authority
As an inquisitor of the church, you have the authority to arrest criminals. In the absence of other authorities, you are authorized to pass judgment and even carry out sentencing. If you abuse this power, however, your superiors in the church might strip it from you.
*/
BackgroundList["military veteran"] = { // Soldier with Boros Legionnaire spells
	regExpSearch : /^(?=.*military)(?=.*(veteran)).*$/i,
	name : "Military Veteran",
	source : [["NN:B", 140], ["P", 140], ["ALbackground", 0]],
	skills : ["Athletics", "Intimidation"],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"],
	gold : 10,
	equipright : [
		["Common clothes", "", 3],
		["Insignia of rank", "", ""],
		["Trophy from fallen enemy", "", ""],
		["Bone dice or playing cards", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Military Rank",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good", "Greater Good: Our fate is to give our lives in the defense of others. (Good)"],
		["Responsibility", "Responsibility: I do what I have to and follow just authority. (Lawful)"],
		["Independence", "Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"],
		["Might", "Might: In life as in war, the mightier force prevails. (Evil)"],
		["Live and Let Live", "Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"],
		["Nation", "Nation: My city, state, or people are the only things that matter. (Any)"]
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	extra : ["Select a Specialty",
		"Officer",
		"Scout",
		"Infantry",
		"Cavalry",
		"Healer",
		"Quartermaster",
		"Standard-bearer",
		"Support staff"
	],
	lifestyle : "modest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["fire bolt", "sacred flame", "guiding bolt", "heroism", "aid", "scorching ray", "beacon of hope", "blinding smite", "death ward", "wall of fire", "flame strike"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Fire Bolt, Sacred Flame, Guiding Bolt, Heroism, Aid, Scorching Ray, Beacon of Hope, Blinding Smite, Death Ward, Wall of Fire, and Flame Strike."
		]
	},
	eval : function() { AddFeat("Soldier's Superstition"); },
	removeeval : function() { RemoveFeat("Soldier's Superstition"); }
};
BackgroundList["monastic traveller"] = { // monastic traveller
	regExpSearch : /^(?=.*monastic)(?=.*traveller).*$/i,
	name : "Monastic Traveller",
	source : ["NN:B"],
    skills : ["History", "Perception"],
		gold : 10,
	equipleft : [
		["Choose one set of Artisan's Tools from this list: Calligrapher's Supplies, Cook's Utensils, Painter's Supplies, Herbalism Kit", "1", ""]
	],
	equipright : [
		["Clothes, Traveler's", "1", 4],
		["Trinket from your Monastery", "1", ""],
		["Belt pouch (with coins)", "1", 1],
	],
	feature : "Monastic Influence",
	trait : [
		"The roads are open to me, I follow my feet and enjoy the journey that they take, like water filling a cup.",
		"Like the gale winds I am direct and fierce, always respectful of those who respect others, but as the winds change I also provoke through sarcasm and jokes.",
		"I am a peaceful forest lake. I am serene with my thoughts and my tranquility overflows unto those around me.",
		"I strive for a better me tomorrow, always improving both physically and spiritually through hard work.",
		"I am one with myself. I strive for balance in all things. I work hard but play just as hard.",
		"I am shattered. Something has happened that has shaken my beliefs and I will not find peace until I can face what has happened.",
		"I have never found a problem that a good boot to the head could not cure.",
		"I am only an extension of my monastery, and only seek the adventures travelling on its behalf brings because the spiritual guidance elude me still..."
    ],
    ideal : [
		["Brotherhood",
			"Brotherhood: I never feel alone as long as I know my brothers (and/or sisters) are out there. (Any)"
		],
		["Pacifist",
			"Pacifist: My skills are only to be used for defense. I will not kill my opponent unless it is unavoidable. (Good)"
		],
		["Respect",
			"Respect: I will advocate against any sighted injustice, especially those that disrespect the core beliefs of my Monastery (Lawful/Good)"
		],
		["Power",
			"Power: All this training and meditation is just a means to an end. (Evil)"
		],
		["Unchained",
			"Unchained: I am a free spirit, roaming the land and bringing change. (Chaotic)"
		],
		["Meditation",
			"Meditation: In order to understand the world, I must first understand myself. (Any)"
		],
    ],
    bond : [
		"I have a duty to my order and will stand with them in all things.",
		"I have received enlightenment but the world is still in darkness. I must bring enlightenment to others.",
		"My mentor was a fallen monk, who's ideals have twisted my outlook on the temple.",
		"My mentor was struck down protecting me from a powerful foe, I seek to defeat this foe with my own two hands.",
		"I strive to bring balance to the land.",
		"I love my fellow brothers (and/or sisters) at the temple but I can not help but wonder who my parents were or why they brought me to the monastery."
    ],
    flaw : [
		"I am still unable to instill my masters teachings, and I am unable to hold still in the presence of injustice, provocation or disrespect towards me or others.",
		"I am extremely uncomfortable around (opposite sex, specific race, nobility, etc.) and I find myself stammering, blushing, and loose all my composure.",
		"I panic in large cities and usually try to avoid them.",
		"I have no respect for those who do not respect themselves.",
		"I left my monastery after a bad argument with my master. I am NEVER going back.",
		"My way of peace and meditation is the only way. Those who travel with me must meditate with me at least once a day or I will refuse to help."
    ],
	toolProfs : ["Calligrapher's supplies, Cook's utensils, Painter's supplies, Herbalism kit", 1],
	languageProfs : ["Celestial, Draconic, Dwarvish, Elvish, Gnomish, or Halfling", 1],
};
/* Monastic Traveller
At a young age a travelling monk requested from your parents that you travel with him. During this time you and your master's tasks were to gather information from the outside world and bring supplies back to support your local monastery.  During these trips your master would instruct you on the local customs and history of the surrounding lands near your monastery.  You trained with your brothers and sisters in the temple whenever given the opportunity but mostly accompanied your master and almost all of your training came directly from his or her teachings. */
BackgroundList["native tribe member"] = { // native tribe member
	regExpSearch: /^(?=.*(barbarian|native|nomad|clan))(?=.*tribe)(?=.*member).*$/i,
	name: "Native Tribe Member",
	source : ["NN:B"],
	skills : ["Nature",],
	skillstxt : "Nature and choose one from Animal Handling, Athletics, Stealth, or Survival",
	equipright: [["Traveler's clothes", "", 4], ["Hunting trap", "", 25], ["Totemic token or tattoos of tribal totem", "", ""], ["Belt pouch (with coins)", "", 1]],
	feature: "Native Tribe Heritage",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		]
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	extra: "",
	toolProfs : [["Any tool", 1]],
	languageProfs: [1],
	lifestyle: "poor"
};
AddBackgroundVariant("outlander", "outlands wanderer", { // Outlander with Selesnya Initiate spell list
	regExpSearch : /^(?!.*urban)(?=.*(outlander|outlands|guide|exile|outcast|bounty.?hunter|tribal nomad|wanderer|tribal.?marauder)).*$/i,
	name : "Outlands Wanderer",	
	source : [["NN:B", 136], ["P", 136], ["ALbackground", 0]],
	skills : ["Athletics", "Survival"],
	gold : 10,
	equipright : [
		["Traveler's clothes", "", 4],
		["Staff", "", 4],
		["Healer's kit", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Wanderer",
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "poor",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["druidcraft", "friends", "aid", "animal friendship", "charm person", "animal messenger", "calm emotions", "warding bond", "plant growth", "speak with plants", "aura of life", "conjure minor elementals", "awaken", "commune with nature"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Druidcraft, Friends, Aid, Animal Friendship, Charm Person, Animal Messenger, Calm Emotions, Warding Bond, Plant Growth, Speak with Plants, Aura of Life, Conjure Minor Elementals, Awaken, and Commune with Nature."
		]
	},
});
BackgroundList["performer"] = { // Entertainer w/ Azorius spell list
	regExpSearch : /(performer)/i,
	name : "Performer",
	source : [["NN:B", 130], ["P", 130], ["ALbackground", 0]],
	skills : ["Acrobatics", "Performance"],
	gold : 15,
	equipright : [
		["Costume", "", 4],
		["Favor of an admirer", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Musical instrument of my choice", "", ""]
	],
	feature : "By Popular Demand",
	trait : [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song."
	],
	ideal : [
		["Beauty",
			"Beauty: When I perform, I make the world better than it was. (Good)"
		],
		["Tradition",
			"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
		],
		["Creativity",
			"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money and fame. [Evil]"
		],
		["People",
			"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
		],
		["Honesty",
			"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
		]
	],
	bond : [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe."
	],
	flaw : [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends."
	],
	extra : [
		"Select an Entertainer Routine",
		"Actor",
		"Dancer",
		"Fire-eater",
		"Jester",
		"Juggler",
		"Instrumentalist",
		"Poet",
		"Singer",
		"Storyteller",
		"Tumbler"
	],
	toolProfs : ["Disguise kit", ["Musical instrument", 1]],
	lifestyle : "modest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["friends", "message", "command", "ensnaring strike", "arcane lock", "calm emotions", "hold person", "clairvoyance", "counterspell", "compulsion", "divination", "dominate person"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Friends, Message, Command, Ensnaring Strike, Arcane Lock, Calm Emotions, Hold Person, Clairvoyance, Counterspell, Compulsion, Divination, and Dominate Person."
		]
	},
};
BackgroundList["refugee athlete"] = { // refugee athlete
	regExpSearch : /^(?=.*refugee)(?=.*athlete).*$/i,
    name: "Refugee Athlete",
    source: ["NN:B"],
    skills: ["acrobatics" /* Acrobatics */, "athletics" /* Athletics */],
    gold: 10,
    equipleft: [
        ["A bronze discus or leather ball", "", ""],
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["A lucky charm or past trophy", "", ""],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Long Way from Home",
    trait: [
        "I feel most at peace during physical exertion, be it exercise or battle.",
        "I don't like to sit idle. I have a daily exercise routine that I refuse to break.",
        "To me, a tavern brawl is a nice way to get to know a new city.",
        "Obstacles exist to be overcome. I face problems head-on. A simple direct solution is the best path to success.",
        "When I see others struggling, I offer to help.",
        "I love to trade banter and gibes, and enjoy a good insult, even one directed at me.",
        "Anything worth doing is worth doing best. I'm confident in my own abilities and do what I can to instill confidence in others.",
        "I'm well known for my triumphs, and I want to make sure everyone appreciates it. I'm taken aback when people haven't heard of me.",
    ],
    ideal: [
        ["Competition", "Competition: I strive to test myself in all things. (Chaotic)"],
        ["Triumph", "Triumph: The best part of winning is seeing my rivals brought low. (Evil)"],
        ["Camaraderie", "Camaraderie: The strongest bonds are forged through struggle. (Good)"],
        ["People", "People: I strive to inspire my spectators. (Neutral)"],
        ["Tradition", "Tradition: Every game has rules, and the playing field must be level. (Lawful)"],
        ["Growth", "Growth: Lessons hide in victory and defeat. (Any)"],
    ],
    bond: [
        "My teammates are my family. I watch over them as if they were a kindle of newborn kittens.",
        "I will overcome a rival and prove myself their better.",
        "My mistake got someone hurt. I'll never make that mistake again.",
        "I will be the best for the glory of my home. My honor is my life.",
        "The person who trained me is the most important person in my world. I owe everything to my mentor.",
        "I strive to live up to a specific hero's example.",
    ],
    flaw: [
        "I indulge in a habit that threatens my reputation or my health.",
        "I'll do absolutely anything to win. I let my need to win overshadow friendships and harmony.",
        "I have little respect for anyone who doesn't compete and anyone who loses to me.",
        "I have lingering pain from old injuries. I would stubbornly deny it to others to keep it a secret.",
        "Any defeat or failure on my part is because my opponent cheated. My pride will probably lead to my ruination.",
        "People who don't take care of themselves get what they deserve.",
    ],
    languageProfs: [1],
    toolProfs: ["Vehicles (land)"],
};
BackgroundList["scrivener"] = { // scrivener [Izzet Engineer (GGtR) as a Sage]
	regExpSearch : /scrivener/i,
	name : "Scrivener",
	source : [["EYE"]],
	skills : ["Arcana", "Investigation"],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
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
BackgroundList["sideshow act"] = { // Entertainer/Witchlight mix with Prismari spells
	regExpSearch : /^(?=.*(sideshow))(?=.*act).*$/i,
	name : "Sideshow Act",
	source : [["NN:B", 130]],
	skills : ["Acrobatics", "Performance"],
	toolProfs : [["Disguise kit or Smith's tools", 1]],
	languageProfs : [1],
	gold : 8,
	equipleft : [
		["Disguise kit or Smith's tools", "", ""],
		["Deck of cards", "", ""],
		["Feywild trinket", "", ""]
	],
	equipright : [
		["Carnival uniform or Costume", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "By Popular Demand",
	trait : [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"When I have a new idea, I get wildly excited about it until I come up with another, better idea.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"Like a nomad, I can't settle down in one place for very long.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song."
	],
	ideal : [
		["Beauty", "Beauty: When I perform, I make the world better than it was. (Good)"],
		["Honor", "Honor: A deal is a deal, and I would never break one. (Lawful)"],
		["Creativity", "Creativity: The world is in need of new ideas and bold action. (Chaotic)"],
		["Greed", "Greed: I'm only in it for the money and fame. [Evil]"],
		["People", "People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"],
		["Honesty", "Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"]
	],
	bond : [
		"I would never break my word.",
		"I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to a hated rival.",
		"I feel indebted to members of my old troupe for giving me a home and a purpose."
	],
	flaw : [
		"I'll do anything to win fame and renown.",
		"I have many vices and tend to indulge them.",
		"I'm forgetful. Sometimes I can't remember even the simplest things.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends."
	],
	extra : [
		"Select a Sideshow Routine",
		"Contortion Act",
		"Fire Breathing/Eating",
		"Impalement Arts",
		"Juggling Stunts",
		"Magic Tricks",
		"Museum Freakshow",
		"Piercing Stunts",
		"Strongman Act",
		"Sword Swallowing Act",
		"Tumbling Stunts",
	],
	lifestyle : "modest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["chromatic orb", "thunderwave", "flaming sphere", "kinetic jaunt", "haste", "water walk", "freedom of movement", "wall of fire", "cone of cold", "conjure elemental"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): Chromatic Orb, Thunderwave, Flaming Sphere, Kinetic Jaunt, Haste, Water Walk, Freedom of Movement, Wall of Fire, Cone of Cold, and Conjure Elemental."
		]
	},
	eval : function() { AddFeat("Sideshow Magic"); },
	removeeval : function() { RemoveFeat("Sideshow Magic"); }
};
BackgroundList["spirited away"] = { // Feylost with Witherbloom spell list and feat
	regExpSearch : /^(?=.*(spirited))(?=.*away).*$/i,
	name : "Spirited Away",
	source : [["NN:B", 9], ["WBtW", 9], ["ALbackground", 0]],
	skills : ["Deception", "Survival"],
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [["Elvish, Gnomish, Goblin, or Sylvan", 1]],
	gold : 8,
	equipleft : [
		["Musical instrument of my choice", "", ""],
		["Three Feywild trinkets", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Feywild Demeanor",
	trait : [
		"I'm haunted by fey laughter that only I can hear, though I know it's just my mind playing tricks on me.",
		"Like a nomad, I can't settle down in one place for very long.",
		"Good music makes me weep like a baby.",
		"Wherever I go, I try to bring a little of the warmth and tranquility of home with me.",
		"I have never lost my childlike sense of wonder.",
		"When I have a new idea, I get wildly excited about it until I come up with another, better idea.",
		"I live by my own set of weird and wonderful rules.",
		"I can't bring myself to trust most adults."
	],
	ideal : [
		["Friendship", "Friendship: I never leave a friend behind. (Good)"],
		["Empathy", "Empathy: No creature should be made to suffer. (Good)"],
		["Wanderlust", "Wanderlust: I prefer to take the less traveled path. (Chaotic)"],
		["Changeability", "Changeability: Change is good, which is why I live by an ever-changing set of rules. (Chaotic)"],
		["Honor", "Honor: A deal is a deal, and I would never break one. (Lawful)"],
		["Rule of Three", 'Rule of Three: Everything in the multiverse happens in threes. I see the "rule of three" everywhere. (Lawful)'],
		["Obsession", "Obsession: I won't let go of a grudge. (Evil)"],
		["Greed", "Greed: I will do whatever it takes to get what I want, regardless of the harm it might cause. (Evil)"]
	],
	bond : [
		"I would never break my word.",
		"I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it.",
		"I do what I can to protect the natural world.",
		"A trusted friend is the most important thing in the multiverse to me.",
		"I can't bring myself to harm a Fey creature, either because I consider myself one or because I fear the repercussions.",
		"The Witchlight Carnival feels like home to me.",
		"I'm drawn to the Feywild and long to return there, if only for a short while.",
		"I feel indebted to Mister Witch and Mister Light for giving me a home and a purpose."
	],
	flaw : [
		"I easily lose track of time. My poor sense of time means I'm always late.",
		"I think the whole multiverse is out to get me.",
		"I'm always operating under a tight timeline, and I'm obsessed with keeping everything on schedule.",
		"I'm a kleptomaniac who covets shiny, sparkling treasure.",
		"I'm forgetful. Sometimes I can't remember even the simplest things.",
		"I never give away anything for free and always expect something in return.",
		"I have many vices and tend to indulge them.",
		"I'm always changing my mind—well, almost always."
	],
	extra : [
		"Select a Fey Mark",
		"Iridescent color eyes",
		"Sweet scent",
		"Long whiskers",
		"Furry ears",
		"Skin sparkles in moonlight",
		"Flowers bloom in my presence",
		"Flowers wilt in my presence",
		"Vines for hair",
		"Brambles for hair",
		"Tail"
	],
	toNotesPage : [{
		name : "Feywild Visitor",
		note : [
			"Whenever I'm sound asleep or in a deep trance during a long rest, a spirit of the Feywild might pay me a visit, if the DM wishes it. Determine the spirit's form by rolling on the table below. No harm ever comes to me as a result of such visits, which can last for minutes or hours, and I remember each visit when I wake up. Conversations that occur with a visitor can contain any number of things, from messages and insights to nonsense and red herrings, at the DM's discretion. Such conversations are always conducted in a language I can understand, even if the Feywild visitor can't speak that language normally.",
			"d8\tVisitor",
			" 1\tAwakened creature (beast/plant that had the Awaken spell cast on it)",
			" 2\tCentaur",
			" 3\tDryad",
			" 4\tFaerie dragon",
			" 5\tPixie",
			" 6\tSatyr",
			" 7\tSprite",
			" 8\tUnicorn"
		]
	}],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["cure wounds", "inflict wounds", "lesser restoration", "wither and bloom", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "greater restoration"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): Cure Wounds, Inflict Wounds, Lesser Restoration, Wither and Bloom, Revivify, Vampiric Touch, Blight, Death Ward, Antilife Shell, and Greater Restoration."
		]
	},
};
BackgroundList["tribal nomad"] = { // tribal nomad
	regExpSearch: /^(?=.*tribal)(?=.*nomad).*$/i,
	name: "Tribal Nomad",
	source : ["NN:B"],
	skills : ["Nature",],
	skillstxt : "Nature and choose one from Animal Handling, Athletics, Stealth, or Survival",
	toolProfs: ["Herbalism Kit"],
	gold: 5,
	equipleft: [["Herbalism kit", "", 3], ["Small tribal jewelry", "", ""], ["Hunting trap", "", 25]],
	equipright: [["Common clothes", "", 3], ["Belt Pouch (with coins)", "", ""]],
	feature: "At Home in the Wild",
	trait: ["I eagerly inject myself into the unknown.", "Villages, towns, and cities do not suit me. I'd rather be out in the wilderness any day.", "I accomplish my tasks efficiently, using as few resources as possible.", "It's difficult for me to remain in one place for long.", "I loudly brag about my tribe every chance I get.", "Having walked among giants, I am fearless in the face of bigger creatures.", "I am quiet and reserved, but observant. Nothing escapes my attention.", "My word is my bond. I see a promise to completion, even if it conflicts with my beliefs."],
	ideal: [["Kinship", "Kinship: Family is most important in life. Though I may be far from my own, the bonds of family must be protected in others' lives as well. (Good)"], ["Preservation", "Preservation: Nature must not be despoiled by encroaching civilization. (Any)"], ["Wanderlust", "Wanderlust: One must expand their horizons by seeing the world and exploring. (Chaos)"], ["Isolation", "Isolation: My tribe and its ways must be protected and shielded from outside influence. (Neutral)"], ["Protection", "Protection: Threats to the land and to the people must be dealt with at any and all costs. (Law)"], ["Belonging", "Belonging: All creatures have a place in the world, so I strive to help others find theirs. (Good)"]],
	bond: ["I ache to return to my tribe and the family I left, but cannot until my obligations are fulfilled.", "The dragon cultists that invaded my homeland stole away one of my tribe's people. I will not know rest until I've found them.", "The dragon's presence in the hills destroyed valuable territory and resulted in deaths within my tribe. The creature must pay for what it has done.", "I carry a trinket that spiritually and emotionally ties me to my people and my home.", "I discovered a strange relic in the hills during my tribe's wanderings. I must discover what it is.", "One of the stone giant clans from the Giant's Cairn has graced me with a mark of kinship."],
	flaw: ["I throw myself and my friends into situations rarely ever thinking about consequences.", "Unfamiliar people and surroundings put me on edge.", "I have absolutely no patience for slowpokes and those who prove indecisive.", "My desire to experience new things causes me to make unsafe choices.", "I am overly protective of nature, sometimes to the detriment of my companions and myself.", "My lack of worldliness often proves my undoing in social, commercial, and hostile situations."],
	languageProfs: [1],
	lifestyle: "poor"
};
BackgroundList["undeserved end"] = {
	regExpSearch : /undeserved.end/i,
	name : "Undeserved End",
	source : [["NN:B", 209]],
	skillstxt : "Choose two from Insight, Investigation, Perception, and Survival",
	toolProfs : [["Herbalism kit"], ["Artisan's tools", 1]],
	gold : 0.01,
	equipleft : [
		["Chest, with:", "", 25],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Wooden Stakes", 3, 1],
		["Holy symbol", "", 1],
		["Holy water, flasks of", "", 1],
		["Manacles", "", 6],
		["Steel Mirror", "", 0.5],
		["Oil, flasks of", "", 1],
		["Tinderbox", "", 1],
		["Torch", 3, 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Trinket of special significance", "", ""]
	],
	feature : "Task Unfinished",
	trait : [
		"I don't run from evil. Evil runs from me.",
		"I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
		"I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
		"I live for the thrill of the hunt.",
		"I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
		"I expect danger around every corner.",
		"I refuse to become a victim, and I will not allow others to be victimized.",
		"I put no trust in divine beings."
	],
	ideal : [
		["Sacrifice", "Sacrifice: I try to help those in need, no matter what the personal cost. (Good)"],
		["Desperation", "Desperation: I'll stop the spirits that haunt me or die trying. (Any)"],
		["Cleansing", "Cleansing: I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)"],
		["Vigilante", "Vigilante: I have a dark calling that puts me above the law. (Chaotic)"],
		["Preparation", "Preparation: I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)"],
		["Destruction", "Destruction: I'm a monster that destroys other monsters, and anything else that gets in my way. (Evil)"]
	],
	bond : [
		"I keep my thoughts and discoveries in a journal. My journal is my legacy.",
		"I would sacrifice my life and my soul to protect the innocent.",
		"My torment drove away the person I love. I strive to win back the love I've lost.",
		"A terrible guilt consumes me. I hope that I can find redemption through my actions.",
		"There's evil in me, I can feel it. It must never be set free.",
		"I have a child to protect. I must make the world a safer place for him (or her)."
	],
	flaw : [
		"I have certain rituals that I must follow every day. I can never break them.",
		"I assume the worst in people.",
		"I feel no compassion for the dead. They're the lucky ones.",
		"I have an addiction.",
		"I am a purveyor of doom and gloom who lives in a world without hope.",
		"I talk to spirits that no one else can see."
	],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["cure wounds", "inflict wounds", "lesser restoration", "wither and bloom", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "greater restoration"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): Cure Wounds, Inflict Wounds, Lesser Restoration, Wither and Bloom, Revivify, Vampiric Touch, Blight, Death Ward, Antilife Shell, and Greater Restoration."
		]
	},
};
AddBackgroundVariant("criminal", "urban bounty hawk", { // Urban Bounty Hunter with Dimir Operative spell list
	regExpSearch : /^(?=.*urban)(?=.*bounty)(?=.*hawk).*$/i,
	name : "Urban Bounty Hawk",
	source : [["NN:B", 153], ["S", 153], ["ALbackground", 0]],
	skills : "",
	skillstxt : "Choose two from Deception, Insight, Persuasion, and Stealth",
	gold : 20,
	equipright : [
		["Appropriate Clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	equipleft : [
		["Thieves' tools", "", 1]
	],
	feature : "Ear to the Ground",
	extra : "",
	toolProfs : [["Gaming set, instrument, or thieves' tools", 2]],
	lifestyle : "poor",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["message", "mage hand", "disguise self", "sleep", "detect thoughts", "pass without trace", "gaseous form", "meld into stone", "nondetection", "arcane eye", "freedom of movement", "modify memory"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Message, Mage Hand, Disguise Self, Sleep, Detect Thoughts, Pass Without Trace, Gaseous Form, Meld into Stone, Nondetection, Arcane Eye, Freedom of Movement, and Modify Memory."
		]
	},	
});
BackgroundList["wild blood"] = {
	regExpSearch : /^(?=.*blood)(?=.*wild).*$/i,
	name : "Wild Blood",
	source : ["NN:B"],
	skills : ["Nature", "Survival"],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["druidcraft", "message", "animal friendship", "speak with animals", "thunderwave", "animal messenger", "beast sense", "shatter", "conjure animals", "sending", "dominate beast", "stoneskin", "awaken"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Druidcraft, Message, Animal Friendship, Speak with Animals, Thunderwave, Animal Messenger, Beast Sense, Shatter, Conjure Animals, Sending, Dominate Beast, Stoneskin, and Awaken."
		]
	},
	gold : 10,
	equipleft : [
		["Winter blanket", "", 3],
		["Herbalism kit", "", 3]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Hunting trap", "", 25],
		["Beast-hide cloak", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Elvish, Gnomish, or Sylvan", 1]],
	toolProfs : ["Herbalism kit"],
	feature : "Voice in the Wild",
	trait : [
		"Unlike people, the beasts of the wild are friends who won't stab me in the back.",
		"Go ahead and insult me\u2014I dare you.",
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I was, in fact, raised by wild animals.",
		"HarrRRAAGGHH! [I rarely form a coherent sentence and prefer to express myself by breaking things.]"
	],
	ideal : [
		["Clan", "Clan: My clan is all that really matters. (Any)"],
		["Anarchy", "Anarchy: No person or law or custom can tell another what to do. (Chaotic)"],
		["Nature", "Nature: We weren't born tame or domesticated, so we shouldn't have to live that way. (Neutral)"],
		["Might", "Might: The strongest are meant to dominate the weak. (Evil)"],
		["Rage", "Rage: AAAAAARRRRggggh! [To live is to feel and express the rage burning in your belly.] (Chaotic)"],
		["Tradition", "Tradition: The Old Ways must be preserved and upheld. (Any)"]
	],
	bond : [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"I am devoted to a sacred site in the midst of the wilderness.",
		"GrrrRRAAAAGGHH! [I will do anything to prove myself greater than my siblings or ancestors.]"
	],
	flaw : [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I like keeping secrets and won't share them with anyone.",	
		"I'm as stubborn as a boar.",
		"I'm easily manipulated by people I find attractive.",
	]
};
/* Wild Blood
You grew up in the wilds, far from civilization and the comforts of town and technology. Part of a savage society that clings desperately to the Old Ways, the wilds are in your blood—attuned to nature, full of primal rage, and given short shrift by a world consumed with continuing civilization's march of progress. You found quiet, solitude, and perhaps deeper spiritual communion with the wild world. In your time apart from the clamor of society, you've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. */
BackgroundList["wild survivor"] = { // wild survivor
	regExpSearch : /^(?=.*wild)(?=.*survivor).*$/i,
	name: "Wild Survivor",
	source: ["NN:B"],
	skills: ["Medicine", "Survival"],
	gold: 5,
	equipleft: [
		["Knife hidden in boot", "1", ""]
	],
	equipright: [
		["Used furs and blankets", "", ""],
		["Cold weather clothing", "", ""],
		["Hemp Rope", "50", ""]
	],
	feature: "Wild Reputation",
	tragedy: [
		"I am missing some fingers or toes from frostbite",
		"My face is scarred from a beast's claws.",
		"My skin is blemished by evil magic.",
		"My hair has been burned off and my scalp is scarred.",
		"I walk with a noticeable limp.",
		"I wear an eyepatch to cover a missing eye."
	],
	trait: [
		"I am haunted by my past and have trouble speaking about it.",
		"After living through tragedy, I run towards danger.",
		"I celebrate life with great enthusiasm.",
		"The gods may be real but they are uncaring.",
		"Some food reminds me of my torment and I can’t stomach it",
		"I put faith in rituals, symbols, and hedge magic to protect me from evil.",
		"My inner pain makes me gruff when I deal with others.",
		"I always expect the worst and jump at loud noises and sudden movements."
	],
	ideal: [
		["Intimidation",
			"Intimidation: I have seen evil and make certain that others fear me before they can hurt me or mine. (Evil)"
		],
		["Nihilism",
			"Nihilism: Nothing matters anymore and the world will burn. (Chaotic)"
		],
		["Bulwark",
			"Bulwark: I stand against chaos to prevent these things from happening again. (Lawful)"
		],
		["Runner",
			"Runner: I am running from my past and can’t stay in any place for long. (Any)"
		],
		["Compassion",
			"Compassion: I don’t want anyone else to suffer as I have. (Good)"
		],
		["Order",
			"Order: I try to gain strength by controlling my environment with rules and rituals. (Lawful)"
		],
	],
	bond: [
		"I have family or friends to protect.",
		"I am hunting for the creature that wronged me.",
		"I have a token that I believe protects me.",
		"With evil in the land, I have to appreciate beauty when I find it.",
		"I am drawn to lucky people, hoping their luck will rub off on me.",
		"I will sacrifice myself for others."
	],
	flaw: [
		"My tragedy has made me a secret coward.",
		"Evil surrounds the world and has won. I have trouble caring what happens to others.",
		"I try to forget my past through excessive drink.",
		"I covet safety and gather wealth and magic items to protect myself.",
		"I pretend to know what’s going on at all times so others don’t think I am weak.",
		"Trust is a lie."
	],
	toolProfs: [["Herbalism kit"]],
	languageProfs: [1],
};

// Background Features
BackgroundFeatureList["at home in the wild"] = {
	description: "In the wilderness, my home, I can find a place to hide, rest, or recuperate that is secure enough to conceal me from most natural threats, but not all supernatural, magical, or threats that actively seek me out. However, this feature doesn't shield or conceal me from scrying, mental probing, nor from threats that don't need the five senses to find me.",
	source : ["NN:B"],
};
BackgroundFeatureList["brigade station"] = {
	description : "I am established in the hierarchy of the Angelfire Brigade. I can requisition simple equipment for temporary use. I have access to any Angelfire garrison in my homeland where I can rest in safety and have access to medics. I'm paid 1 gp per week, allowing me (together with the free brigade lodging) to have a poor lifestyle between adventures.",
	source : ["NN:B"]
};
BackgroundFeatureList["deep miner"] = {
	description : "I am used to navigating the deep places of the earth. I never get lost in caves or mines if I have either seen an accurate map of them or have been through them before. Furthermore, I am able to scrounge fresh water and food for myself and as many as five other people each day if I am in a mine or natural caves.",
	source : [["NN:B"], ["AL:EE", 3], ["ALbackground", 0]]
};
BackgroundFeatureList["down low"] = {
	description : "I am acquainted with a network of smugglers who are willing to help me out of tight spots. While in a particular town, city, or other similarly sized community, my companions and I can stay for free in safe houses. Safe houses provide a poor lifestyle. While staying at a safe house, I can choose to keep my presence (and that of my companions) a secret.",
	source : [["NN:B", 128], ["GoS", 34], ["ALbackground", 0]]
};
BackgroundFeatureList["feywild demeanor"] = {
	description : "My mannerisms and knowledge of fey customs are recognized by natives of the Feywild, who see me as one of their own. Because of this, friendly Fey creatures are inclined to come to my aid if I am lost or need help in the Feywild.",
	source : [["NN:B", 11], ["WBtW", 11], ["ALbackground", 0]],
	eval : function() { AddFeat("Fey and Fell"); },
	removeeval : function() { RemoveFeat("Fey and Fell"); }
};
BackgroundFeatureList["legal authority"] = {
	description : "As an inquisitor of the church, I have the authority to arrest criminals. In the absence of other authorities, I am authorized to pass judgment and even carry out sentencing. If I abuse this power, however, my superiors in the church might strip it from me.",
	source : ["NN:B"]
};
BackgroundFeatureList["long way from home"] = {
    description: "I can move twice the normal amount of time each day before being subject to the effects of a forced march. Additionally, stories of my past athletic victories have attracted admiration among spectators, fellow athletes, and trainers. I can always find a place to perform (arena/pit fight/inn/tavern), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night.",
    source: ["NN:B"]
};
BackgroundFeatureList["monastic influence"] = {
    description : "While within the lands where the local monastery has influence, people will tend to be helpful and friendly to the monk and his party. Additionally merchants and locals tend to be more likely to share information.  Gain advantage on persuasion or investigation checks to gather local information as long you maintain good standing with the local monastery.",
    source : ["NN:B"],
};
BackgroundFeatureList["native tribe heritage"] = {
	description: "I have an excellent knowledge of my tribe's territory, and surrounding terrain and natural resources. I am familiar enough with any wilderness area that I can find twice as much food and water as one normally would. I can call upon the hospitality of my people, and those allied, often including members of druid circles, nomadic elves, and priesthoods.",
	source : ["NN:B"],
};
BackgroundFeatureList["task unfinished"] = {
	description : "Those who look into my eyes can see that I have faced unimaginable horror and that I am no stranger to darkness. Though they might fear me, commoners will extend me every courtesy and do their utmost to help. Unless I have shown myself to be a danger to them, they will even take up arms to fight with me, should I find myself facing an enemy alone.",
	source : [["NN:B", 209]],
	eval : function() { AddFeat("Vitality Sacrifice"); },
	removeeval : function() { RemoveFeat("Vitality Sacrifice"); }
};
BackgroundFeatureList["the doctor is in"] = {
	description : "Healers are almost universally seen positively. I can gain the trust of almost any intelligent creature that is sick or hurt if I seem willing to help. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown yourself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source : [["NN:B"]]
};
BackgroundFeatureList["voice in the wild"] = {
	description: "I can always recall the general layout of natural terrain features around me. I can find a hidden place to rest that is secure enough to conceal me from most natural threats, but not supernatural or magical threats (scrying, mental probing, etc.). Each day I can find food and water for myself and up to five other creatures, provided that the land offers berries, small game, water, and so forth.",
	source : ["NN:B"]
};
BackgroundFeatureList["warm welcome"] = {
	description : "When you first meet new people, your demeanor is such to put them at ease and they usually assume you are friendly. You ran an inn, which you gave up for the life of adventure. However, the new owner of the inn or tavern may give you free room and board at a modest standard. You also know a lot of former patrons hailing from many places near and far, who may offer you favors or jobs.",
	source : [["NN:B"]]
};
BackgroundFeatureList["wild reputation"] = {
	description: "People whisper behind my back about the trials I have suffered. Some fear me. Others offer pity. But all avoid getting to close to me, worried that they will be the next loss I suffer. People are happy to see me move on so I get away with minor offenses such as rude behavior or leaving the tavern before paying my tab.",
	source: ["NN:B"],
};

// Background Feats
FeatsList["fey and fell"] = {
	name : "Fey and Fell",
	source : [["NN:B", 36]],
	description : "I learn two cantrips (Chill Touch, Druidcraft, or Spare the Dying) and a 1st-level spell from the druid or wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Cantrip",
		spells : ["chill touch", "druidcraft", "spare the dying"],
		firstCol : "atwill",
		times : 2
	}, {
		name : "1st-level spell",
		"class" : ["druid", "wizard"],
		level : [1, 1],
		firstCol : "oncelr"
	}]
};
FeatsList["home remedy"] = {
	name : "Home Remedy",
	source : [["NN:B", 36]],
	description : "I learn two cantrips (Light, Sacred Flame, or Thaumaturgy) and a 1st-level spell from the cleric or druid spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Cantrip",
		spells : ["light", "sacred flame", "thaumaturgy"],
		firstCol : "atwill",
		times : 2
	}, {
		name : "1st-level spell",
		"class" : ["cleric", "druid"],
		level : [1, 1],
		firstCol : "oncelr"
	}]
};
FeatsList["sideshow magic"] = {
	name : "Sideshow Magic",
	source : [["NN:B", 36]],
	description : "I learn two cantrips (Fire Bolt, Prestidigitation, or Ray of Frost) and a 1st-level spell from the bard or sorcerer spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Cantrip",
		spells : ["fire bolt", "prestidigitation", "ray of frost"],
		firstCol : "atwill",
		times : 2,
	}, {
		name : "1st-level spell",
		"class" : ["bard", "sorcerer"],
		level : [1, 1],
		firstCol : "oncelr",
	}],
};
FeatsList["soldier's superstition"] = {
	name : "Soldier's Superstition",
	source : [["NN:B", 140]],
	description : "I learn two cantrips (Light, Sacred Flame, or Thaumaturgy) and a 1st-level spell from the bard or cleric spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Cantrip",
		spells : ["light", "sacred flame", "thaumaturgy"],
		firstCol : "atwill",
		times : 2,
	}, {
		name : "1st-level spell",
		"class" : ["bard", "cleric"],
		level : [1, 1],
		firstCol : "oncelr",
	}],
};
FeatsList["vitality sacrifice"] = {
  name: "Vitality Sacrifice",
  source: [["NN:B", 191]],
  descriptionFull:
    "You've learned secrets that grant you esoteric power at the price of your own life force. As a bonus action, you can choose to take 1d6 necrotic damage to gain a blood boon. Your blood boon lasts for 1 hour or until expended." +
    "\n   " +
    "You can expend this blood boon to gain one of the following benefits:" +
    "\n" +
    "\u2022 When you make an attack roll, you roll 1d6 and add it to the total." +
    "\n" +
    "\u2022 When you hit with an attack or spell, you deal an additional 2d6 necrotic damage." +
    "\n" +
    "\u2022 When you cause a creature to make a Strength, Dexterity, or Constitution saving throw, roll a d4 and reduce their save by the amount rolled." +
    "\n   " +
    "The damage you take to gain a blood boon can't be reduced in any way.",
  description:
    "As a bonus action, I can take 1d6 necrotic damage, which cannot be reduced, to gain a blood boon. This boon lasts for 1 hour or until it is expended. I can expend this blood boon to gain benefits. See third page.",
  action: ["bonus action", " (1d6 necrotic damage)"],
  toNotesPage: [
    {
      name: "Vitality Sacrifice",
      source: [["NN:B", 191]],
      popupName: "Vitality Sacrifice (Feat)",
      page3notes: true,
      note: [
        "As a bonus action, I can take 1d6 necrotic damage for a blood boon",
        "This damage cannot be reduced in any way",
        "This boon lasts for 1 hour, or until it is expended",
        "I can expend the blood boon to gain one of the following benefits:",
        " \u2022 When I make an attack roll, add 1d6 to the total",
        " \u2022 When I hit with an attack or spell, it deals an extra 2d6 necrotic damage",
        " \u2022 When I force a creature to make a Str/Dex/Con save, reduce their save by 1d4",
      ],
    },
  ],
};
FeatsList["vocational magic"] = {
	name : "Vocational Magic",
	source : [["NN:B", 36]],
	description : "I learn two cantrips (Druidcraft, Guidance, or Mage Hand) and a 1st-level spell from the druid or wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Cantrip",
		spells : ["druidcraft", "guidance", "mage hand"],
		firstCol : "atwill",
		times : 2
	}, {
		name : "1st-level spell",
		"class" : ["druid", "wizard"],
		level : [1, 1],
		firstCol : "oncelr"
	}]
};

