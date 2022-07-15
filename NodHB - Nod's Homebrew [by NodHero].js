/* Nod's Homebrew Collection
A collection of things made by me and things made by others found from all around the internet.
Credit goes to the original creators of the stuff I didn't make myself! 
*/

var iFileName = "Nod's Homebrew Collection.js"; 
RequiredSheetVersion(13);

SourceList["NHB"] = {
	name : "Nod's Homebrew Collection",
	abbreviation : "NHB",
	abbreviationSpellsheet: "N",
	group : "Nod's Homebrew",
	date : "2021/12/29"
};

// Add Races
RaceList["aven"] = {  // originally from Plane Shift
	regExpSearch : /aven/i,
	name : "Aven",
	source : [["NHB"]],
	plural : "Avens",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 30, enc : 0 }
		},
	languageProfs : ["Common", "Aven"],
	age : " age like humans and can live into their 80s",
	height : " stand between 5 and 6 feet tall",
	weight : " are very slender and their bones are partially hollow to facilitate their flight",
	scores : [0, 2, 0, 0, 2, 0],
	skills : ["Perception"],
	trait : "Aven (+2 Dexterity, +2 Wisdom)\n\nHawkeyed: I have proficiency in the Perception skill.\n\nAttacking at long range doesn't impose disadvantage on my ranged weapon attack rolls.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isRangedWeapon || (!v.isSpell && (/thrown/i).test(fields.Description))) {
					fields.Description += (fields.Description ? '; ' : '') + "No disadv. at long range; ";
				}
			},
			"My ranged weapon attacks suffer no disadvantage for long range."
		]
	},
};
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

RaceList["kobold growler"] = { // reflavored Cower into Growl
	regExpSearch : /^(?=.*\b(kobolds?|draconic?)\b)(?=.*growler).*$/i,
	name : "Kobold Growler",
	sortname : "Kobold, Growler",
	source : ["NHB"],
	plural : "Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]],
	age : " reach adulthood at age 6 and can live up to 120 years, but rarely do so",
	height : " are between 2 and 3 feet tall (2'1\" + 2d4\")",
	weight : " weigh between 25 and 35 lb (25 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 65 and 90 cm tall (63 + 5d4 cm)",
	weightMetric : " weigh between 10 and 15 kg (11 + 5d4 \xD7 2 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	features : {
		"draconic growl" : {
			name : "Draconic Growl",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	},
	trait : "Kobold (+2 Dexterity)\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDragon Growl: As an action, I can distract all foes within 10 feet of me that can see me so that my allies gain advantage on attack rolls against them.\nPack Tactics: I have advantage on attack rolls against creatures when at least one of my allies is within 5 feet of that creature and that ally is not incapacitated."
};

// Add Backgrounds
BackgroundList["angelfire brigade"] = { // angelfire brigade
	regExpSearch : /^(?=.*angelfire)(?=.*brigade).*$/i,
	name : "Angel Brigade",
	source : ["NHB"],
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
	source : [["NHB"]],
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
BackgroundList["former innkeeper"] = { // former innkeeper
	regExpSearch : /^(?=.*former)(?=.*innkeeper).*$/i,
	name : "Former Innkeeper",
	source : [["NHB"]],
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
AddBackgroundVariant("noble", "highborn", {
	regExpSearch : /^(?!.*(waterdhavian|waterdeep|knight))(?=.*highborn).*$/i,
	name : "Highborn",
	source : [["NHB", 135], ["P", 135], ["ALbackground", 0]],
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
	source : ["NHB"],
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
BackgroundList["monastic traveller"] = { // monastic traveller
	regExpSearch : /^(?=.*monastic)(?=.*traveller).*$/i,
	name : "Monastic Traveller",
	source : ["NHB"],
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
	source : ["NHB"],
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
	source : [["NHB", 136], ["P", 136], ["ALbackground", 0]],
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
BackgroundList["refugee athlete"] = { // refugee athlete
	regExpSearch : /^(?=.*refugee)(?=.*athlete).*$/i,
    name: "Refugee Athlete",
    source: ["NHB"],
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
BackgroundList["tribal nomad"] = { // tribal nomad
	regExpSearch: /^(?=.*tribal)(?=.*nomad).*$/i,
	name: "Tribal Nomad",
	source : ["NHB"],
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
AddBackgroundVariant("criminal", "urban bounty hawk", { // Urban Bounty Hunter with Dimir Operative spell list
	regExpSearch : /^(?=.*urban)(?=.*bounty)(?=.*hawk).*$/i,
	name : "Urban Bounty Hawk",
	source : [["NHB", 153], ["S", 153], ["ALbackground", 0]],
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
	source : ["NHB"],
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
	source: ["NHB"],
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
	source : ["NHB"],
};
BackgroundFeatureList["brigade station"] = {
	description : "I am established in the hierarchy of the Angelfire Brigade. I can requisition simple equipment for temporary use. I have access to any Angelfire garrison in my homeland where I can rest in safety and have access to medics. I'm paid 1 gp per week, allowing me (together with the free brigade lodging) to have a poor lifestyle between adventures.",
	source : ["NHB"]
};
BackgroundFeatureList["legal authority"] = {
	description : "As an inquisitor of the church, I have the authority to arrest criminals. In the absence of other authorities, I am authorized to pass judgment and even carry out sentencing. If I abuse this power, however, my superiors in the church might strip it from me.",
	source : ["NHB"]
};
BackgroundFeatureList["long way from home"] = {
    description: "I can move twice the normal amount of time each day before being subject to the effects of a forced march. Additionally, stories of my past athletic victories have attracted admiration among spectators, fellow athletes, and trainers. I can always find a place to perform (arena/pit fight/inn/tavern), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night.",
    source: ["NHB"]
};
BackgroundFeatureList["monastic influence"] = {
    description : "While within the lands where the local monastery has influence, people will tend to be helpful and friendly to the monk and his party. Additionally merchants and locals tend to be more likely to share information.  Gain advantage on persuasion or investigation checks to gather local information as long you maintain good standing with the local monastery.",
    source : ["NHB"],
};
BackgroundFeatureList["native tribe heritage"] = {
	description: "I have an excellent knowledge of my tribe's territory, and surrounding terrain and natural resources. I am familiar enough with any wilderness area that I can find twice as much food and water as one normally would. I can call upon the hospitality of my people, and those allied, often including members of druid circles, nomadic elves, and priesthoods.",
	source : ["NHB"],
};
BackgroundFeatureList["the doctor is in"] = {
	description : "Healers are almost universally seen positively. I can gain the trust of almost any intelligent creature that is sick or hurt if I seem willing to help. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown yourself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source : [["NHB"]]
};
BackgroundFeatureList["voice in the wild"] = {
	description: "I can always recall the general layout of natural terrain features around me. I can find a hidden place to rest that is secure enough to conceal me from most natural threats, but not supernatural or magical threats (scrying, mental probing, etc.). Each day I can find food and water for myself and up to five other creatures, provided that the land offers berries, small game, water, and so forth.",
	source : ["NHB"]
};
BackgroundFeatureList["warm welcome"] = {
	description : "When you first meet new people, your demeanor is such to put them at ease and they usually assume you are friendly. You ran an inn, which you gave up for the life of adventure. However, the new owner of the inn or tavern may give you free room and board at a modest standard. You also know a lot of former patrons hailing from many places near and far, who may offer you favors or jobs.",
	source : [["NHB"]]
};
BackgroundFeatureList["wild reputation"] = {
	description: "People whisper behind my back about the trials I have suffered. Some fear me. Others offer pity. But all avoid getting to close to me, worried that they will be the next loss I suffer. People are happy to see me move on so I get away with minor offenses such as rude behavior or leaving the tavern before paying my tab.",
	source: ["NHB"],
};

// Add Subclasses
AddSubClass("druid", "circle of the tundra", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*circle)(?=.*tundra).*$/i,
	subname: "Circle of the Tundra",
	source: ["NHB"],
	features: {
		"subclassfeature2": {
			name: "Circle Spells",
			source: ["NHB"],
			minlevel: 2,
			description: desc ([
				"My link to the tundra infuses me with the ability to cast Ice Barrage and choose certain",
				"spells as druid spells. My Circle of the Tundra spells are always prepared, but don't count",
				"against the number of spells I can prepare"
			]),
			calcChanges : {
			spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["ray of frost", "wall of ice"]);
			},
		]
	},
			spellcastingBonus: {
				name: "Circle Spells",
				spells: ["ice barrage"],
				selection : ["ice barrage"],
			},
			spellcastingExtra: ["hold person", "buffeting eddies", "sleet storm", "slow", "freedom of movement", "auroral winds", "hold monster", "control winds"]
		},
		"subclassfeature2.1" : {
			name : "Arctic Recovery",
			source: ["NHB"],
			minlevel : 2,
			description : "\n   " + "After a short rest, I can recover a number of 5th-level or lower spell slots",
			additional : ["1 level spell slots", "1 level spell slots", "2 levels spell slots", "2 levels spell slots", "3 levels spell slots", "3 levels spell slots", "4 levels spell slots", "4 levels spell slots", "5 levels spell slots", "5 levels spell slots", "6 levels spell slots", "6 levels spell slots", "7 levels spell slots", "7 levels spell slots", "8 levels spell slots", "8 levels spell slots", "9 levels spell slots", "9 levels spell slots", "10 levels spell slots", "10 levels spell slots"],
			usages : 1,
			recovery : "long rest"
			},
		"subclassfeature6" : {
			name : "Tundral Respite",
			source: ["NHB"],
			minlevel : 6,
			description: desc([
			"I can travel through nonmagical, difficult terrain without penalty and through nonmagical",
			"plants without being slowed or taking damage. When I start a short rest, I chose up to six",
			"creatures and one of them can remove one level of exhaustion at the end of that short rest"
			]),
			usages : 1,
			recovery : "long rest"
			},
		"subclassfeature10": {
			name: "Boreal Safeguard",
			source: ["NHB"],
			minlevel: 10,
			description: desc([
				"As a bonus action, I can create a 30-ft radius aura of cool air that moves with me",
				"The aura gives resistance to cold and fire damage to creatures of my choice within it",
				"The aura lasts for 1 minute or until I am incapacitated or I die."
			]),
			action: ["bonus", ""],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = Number(What('Proficiency Bonus'));",
			recovery: "long rest"
		},
		"subclassfeature14": {
			name: "Polar Succor",
			source: ["NHB"],
			minlevel: 14,
			description: desc([
				"If I drop to 0 hp and don't die outright, I drop to 1hp instead. I also gain a fly|swim|burrow",
				"speed equal to my walking speed for half my druid level in minutes. In addition, each",
				"creature of my choice within 30-ft that I can see takes 2d10 + Druid level cold dmg.",
				"I also gain fly speed equal to my walking speed for 1 minute."
			]),
			usages: 1,
			recovery: "long rest"
		}
	}
});
AddSubClass("monk", "way of the mirror", {
	regExpSearch : /^(?=.*mirror)((?=.*(monk|monastic|dancer))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Mirror",
	source : ["NHB-WM", 1],
	features : {
		"subclassfeature3" : {
			name : "Cast Reflection",
			source : [["NHB-WM", 1]],
			minlevel : 3,
			description : ' [see 3rd page]',
			action: [["bonus action", "Reflection (summon/dismiss)"], ["bonus action", "Reflection (swap location)"]],
			creaturesAdd : [["Reflection (Monk)"]],
			creatureOptions : [{
				name : "Reflection (Monk)",
				source : [["NHB-WM", 1]],
				size : 3,
				type : "Object",
				alignment : "",
				ac : "14+oProf",
				hp : 1,
				hd : [],
				speed : "fly 30 ft (hover)",
				scores : ["", "", "", "", "", ""],
				savesLinked : true,
				condition_immunities : "all conditions",
				damage_immunities : "poison, psychic",
				passivePerception : 0,
				languages : "",
				challengeRating : "0",
				proficiencyBonus : 0,
				attacksAction : 0,
				attacks : [],
				features : [{
					name : "Reflection",
					description : "The reflection is a magical, translucent, silver image of its creator that doesn't act and has no turn in combat. It lasts until destroyed, dismissed, another is manifested, or its creator is incapacitated. The reflection is also destroyed if it is ever more than 30 ft away from its creator at the end of its creator's turn."
				}],
				traits : [{
					name : "Swap Place",
					description : "The reflection's creator can, as a bonus action, teleport, magically swapping places with the reflection at a cost of 15 feet of the creator's movement, regardless of the distance between the two."
				}, {
					name : "Attack Origin",
					description : "When the reflection's creator takes the Attack action on their turn or makes an unarmed strike as part of a bonus action, any attack they make can originate from the reflection's space. This choice is made for each attack separately.\n   In addition, when a creature that the reflection's creator can see within 5 ft of the reflection moves at least 5 ft away from it, its creator can use their reaction to make an opportunity attack with an unarmed strike or a monk weapon against that creature as if its creator was in the reflection's space."
				}],
				header : "Reflection",
				eval : function(prefix, lvl) {
					// Same size as character
					PickDropdown(prefix + "Comp.Desc.Size", tDoc.getField("Size Category").currentValueIndices);
					Value(prefix + "Comp.Desc.Age", What("Age"));
					Value(prefix + "Comp.Desc.Sex", What("Sex"));
					Value(prefix + "Comp.Desc.Height", What("Height"));
					Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
				}
			}],
			"cast reflection" : {
			name : "Cast Reflection",
			extraname : "Way of the Mirror 3",
			source : [["NHB-WM", 1]],
			description : desc([
				"As a bonus action, I can magically manifest a translucent silver image of myself within 15 ft",
				"It counts as an object, has 1 HP, AC 14 + Prof. Bonus, immunity to poison/psychic damage",
				"and all conditions. It uses my save bonuses, and lasts until destroyed, I dismiss it, manifest",
				"another, or I'm incapacitated. If it is ever more than 30 ft away from me at the end of my turn,",
				"it is destroyed. On my turn, I can move it (no action required) up to 30 ft in any direction",
				"As a bonus action, I can teleport to swap places with it, at a cost of 15 ft movement",
				"When I use the Attack action or make an unarmed strike as part of a bonus action, attacks",
				"can originate from my reflection. I can also make opportunity attacks as if I were in its space",
			]),
			},
			autoSelectExtrachoices : [{
				extrachoice : "cast reflection",
			}],
		"subclassfeature3.1" : {
			name : "Mirror Incantations",
			source : ["NHB-WM", 1],
			minlevel : 3,
			description : "\n   " + "I know the Minor Illusion cantrip and can cast certain spells by using ki (see page 3)",
			spellcastingBonus : {
				name : "Mirror Incantations",
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				firstCol : "atwill",
			},
			spellFirstColTitle : "Ki",
			"mirror spells" : {
				name : "Mirror Spells",
				extraname : "Mirror Incantations",
				source : ["NHB-WM", 1],
				description : " [2 ki points, no material components]" + "\n   " + "As an action, I can cast Alter Self, Blur, Disguise Self, or Mirror Image",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mirror Incantations",
					spells : ["alter self", "blur", "disguise self", "mirror image"],
					selection : ["alter self", "blur", "disguise self", "mirror image"],
					firstCol : 2,
					times : 4
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "mirror spells" }],
		},
		},
		"subclassfeature6" : {
			name : "Glass Looking",
			source : [["NHB-WM", 1]],
			minlevel : 6,
			description : desc([
				"As an action, I can temporarily transfer my consciousness to my reflection for up to 10 min",
				"During this time, I see and hear through its eyes and ears, but not my own eyes and ears",
				"While I use my reflection this way, it can be up to 1000 ft away from me without issue",
				"I can end this at any time, requiring no action",
			]),
			action : [["action", ""]],
			usages : "Prof. Bonus per ",
			recovery : "long rest",
			usagescalc : "event.value = How('Proficiency Bonus');",
			altResource : "1 ki",
		},
		"subclassfeature11" : {
			name : "Interpose Reflection",
			source : [["NHB-WM", 1]],
			minlevel : 11,
			description : desc([
				"As a reaction when a creature I can see is attacked, I can make my reflection the target",
				"Before the attack roll, the reflection teleports to an empty space within 5 ft of the creature",
				"The attack roll of the triggering attack is then made against the reflection instead",
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "2 ki",
		},
		"subclassfeature17" : {
			name : "Mirror Dance",
			source : ["NHB-WM", 1],
			minlevel : 17,
			description : desc([
				"As a reaction, if a creature within 5 ft of me or my reflection is hit by another, I can make a", 
				"melee attack with an unarmed strike or a monk weapon against that creature from my or",
				"the reflection's space. In addition, when my reflection is destroyed by taking damage, I gain",
				"five times my Prof. Bonus in temp HP if I don't already have temporary hit points",
			]),
			action : [["reaction", " (when other attacks)"], ["reaction", " (when Reflection destroyed)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "3 ki",
			additional : "gain temp HP"
		}
	}
});
/* Monastic Tradition - Way of the Mirror
“If you’re searching for that one person who will change your life…take a look in the mirror.”

While monks of every Tradition strive for mastery over their physical form, honing their bodies 
into deadly weapons, and mastering ancient martial arts techniques, the Monastic Tradition of the 
Way of the Mirror see their ki as a way to bring about a Reflection of their true form. This Reflection 
has the capacity to be a force of order or disorder, with some monasteries training students to use 
their power to protect the weak and other instructing aspirants in how to manifest their Reflections 
in service to the mighty.

Having mastered the art of manipulating these mirrored representations of themselves during combat, 
these monks, often called Mirror Dancers, charge into the fray as a flurry of silver streaks and sudden strikes. 
*/
SourceList["XLNtEE2"] = {
	name : "Xanathar's Lost Notes to Everything Else v2.0",
	abbreviation : "XLNtEE",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/228484/",
	date : "2018/08/30"
};
AddSubClass( "paladin", "oath of providence", {
	regExpSearch : /^(((?=.*(providence|fated|fate|destined|destiny))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(providence|fated|destined|chosen))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of Providence",
	source : ["XLNtEE", 26],
	spellcastingExtra : ["bless", "divine favor", "aid", "augury", "bestow curse", "clairvoyance", "death ward", "divination", "commune", "legend lore"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Predestination",
			source : ["XLNtEE", 26],
			minlevel : 3,
			description : desc([
				"As a reaction, a creature I can see within 60 ft can make a saving throw with advantage",
				"If it would take half-damage on a success, it takes none, and half-damage on a failure.",
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Kiss of Calamity",
			source : ["XLNtEE", 26],
			minlevel : 3,
			description : desc([
				"As an action, all unfriendly creatures within 30 ft that can see or hear me must make a",
				"Charisma saving throw, gaining disadvantage on all saving throws for 1 min on a failure.",
			]),
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Favor the Brave",
			source : ["XLNtEE", 26],
			minlevel : 7,
			description : desc([
				"I can turn a miss with a weapon attack into a hit. When I use this feature, my target takes",
				"extra radiant damage equal to my Charisma modifier (minimum of 1)",
			]),
			recovery : "long rest",
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Cha Mod').value);",
		},
		"subclassfeature15" : {
			name : "Gift of Foresight",
			source : ["XLNtEE", 26],
			minlevel : 15,
			description : desc([
				"When I finish a short or long rest, I roll a d20 and record the prophetic roll number.",
				"I can replace any attack roll, saving throw, or ability check made by me or a creature I can see",
				"with my prophetic roll. I must choose to do so before the roll, and I can use the roll in this",
				"way only once. When I finish a short or long rest, I lose any unused prophetic roll",
			]),
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature20" : {
			name : "Hand of Fate",
			source : ["XLNtEE", 26],
			minlevel : 20,
			description : desc([
				"For 1 min, I project an aura of dim, silver light in a 10-foot radius.",
				"Whenever an enemy creature starts its turn in my aura, it has disadvantage on attacks and",
				"saving throws, while I and friendly creatures have advantage on attack rolls and saving",
				"throws. When the aura fades away, I regain all expended uses of my Favor the Bold feature.",
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});

// Add option to allow Dunamancy spells for the Artificer
AddFeatureChoice(ClassList.artificer.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Artificer 1",
	source : [["NHB"]],
	description : desc([
		"All dunamancy spells are added to the artificer spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "artificer" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the artificer class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level artificer features");

// Add Primaeval Heritage Feats
/* Primaeval Heritage
Your heritage carries magic left over from ancient times, granting you the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn two spells based on your chosen primaeval element. 
	Air - Feather Fall, Levitate
	Earth - Earth Tremor, Maximilian's Earthen Grasp
	Fire - Hellish Rebuke, Flame Blade
	Water - Create or Destroy Water, ‌‌‌‌‌‌‌‌‌​​​​​Blur 
You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.
*/
FeatsList["primaeval air heritage"] = {
    name : "Primaeval Air Heritage",
    source : ["NHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Feather Fall and Levitate spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Feather Fall",
		spells : ["feather fall"],
		selection : ["feather fall"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Levitate",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["primaeval earth heritage"] = {
    name : "Primaeval Earth Heritage",
    source : ["NHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Earth Tremor",
		spells : ["earth tremor"],
		selection : ["earth tremor"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp",
		spells : ["maximilian's earthen grasp"],
		selection : ["maximilian's earthen grasp"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["primaeval fire heritage"] = {
    name : "Primaeval Fire Heritage",
    source : ["NHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Hellish Rebuke",
		spells : ["hellish rebuke"],
		selection : ["hellish rebuke"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Flame Blade",
		spells : ["flame blade"],
		selection : ["flame blade"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["primaeval water heritage"] = {
    name : "Primaeval Water Heritage",
    source : ["NHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Create or Destroy Water",
		spells : ["create or destroy water"],
		selection : ["create or destroy water"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Blur",
		spells : ["blur"],
		selection : ["blur"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};

// Add General Feats
FeatsList["adventurousness"] = {
	name : "Adventurousness",
	source : ["NHB", 1],
	descriptionFull : "You are filled with a determination to excel on your adventures. You have so much self-confidence that you believe you can draw the unreachable within your reach. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency with one skill, one tool, and one language of your choice.\n \u2022 When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a long rest.",
	description : "I learn one language and gain proficiency in one tool and one skill. When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a long rest.\n[+1 to one ability score]",
	scorestxt : "+1 to one ability score of your choice",
	languageProfs : [1],
	skillstxt : "Choose any one skill and any one tool",
	toolProfs : [["Any tool", 1]],
	extraLimitedFeatures : {
		name : "Advantage (attack/check/save)",
		usages : 1,
		recovery : "long rest"
	},
};
/* Adventurousness
You are filled with a determination to excel on your adventures. You have so much self-confidence that you believe you can draw the unreachable within your reach. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You gain proficiency with one skill and one tool of your choice.
• You learn a language of your choice.
• When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a long rest. */
FeatsList["explorer"] = {
	name : "Explorer",
	source : [["NHB"]],
	description : "I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed. While traveling, I am alert to danger even when doing something else. [+1 Strength, Dexterity, Intelligence, or Wisdom]",
	scorestxt : "+1 Strength, Dexterity, Intelligence or Wisdom",
	speed : {
			walk : { spd : "+5", enc : "+5" },
			climb : { spd : "walk", enc : "walk" },
			swim : { spd : "walk", enc : "walk" }
			}
};		
/* Explorer
You are an unsurpassed explorer. You gain the following benefits:
• Increase your Strength, Dexterity, Intelligence or Wisdom by 1, to a maximum of 20.
• Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.
• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. */
FeatsList["fellowship"] = {
	name: "Fellowship",
	source: [["NHB"]],
	descriptionFull : "Most adventurers believe that the members of a group have a responsibility to look out for each other. You gain the following benefits:\n \u2022You can use the Help action as a bonus action.\n \u2022When you use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. Additionally, you can help two allies targeting the same creature within range when you use the Help action this way.\n \u2022When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.",
	description: "When I use the Help action to aid in combat, its a bonus action, I add 10 ft range, and I can help two allies targeting the same creature. When I use the Help action to help a creature that can understand me with an ability check, I can make a DC 15 Int (History) check to give a bonus equal to my proficiency bonus.",
	action : [
		["bonus action", "Fellowship (10' Dual Help)"],
		["action", "Fellowship (Help Ability Check)"]
		]
};
/* Fellowship
Most adventurers believe that the members of a group have a responsibility to look out for each other. You gain the following benefits:
• You can use the Help action as a bonus action.
• When you use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. Additionally, you can help two allies targeting the same creature within range when you use the Help action this way.
• When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.   */
FeatsList["sailor's sea legs"] = {
	name : "Sailor's Sea Legs",
	source : ["NHB"],
	description : "I gain proficiency with Vehicles (water). If I am already proficient with them, I add double my proficiency bonus to checks I make with them. Whenever I have advantage on an attack roll that uses Dexterity, I can reroll one of the dice once. [+1 Dexterity]",
	descriptionFull : "Your childhood fascination with the water and the many vessels that travel on it led to you to becoming a crew member of a vessel, whether sailing into battle on a navy warship, swashbuckling across the oceans as a pirate, or working on a fishing boat striving to feed a nearby village. Even on land, you walk with a particular gait from having your sea legs. You gain the following benefits:\n \u2022 You gain proficiency with Vehicles (water). If you are already proficient with them, you add double your proficiency bonus to checks you make with them.\n \u2022 Whenever you have advantage on an attack roll that uses Dexterity, you can reroll one of the dice once.\n \u2022 Increase your Dexterity by 1, to a maximum of 20.",
	scorestxt : "+1 Dexterity; ",
	prerequisite : "An appropriate background related to being around the water.",
	toolProfs : [["Vehicles (water)", "Dex"]],
	eval : function () {
		if ((/vehicles.*water/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/vehicles.*water/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	},
	scores : [0, 1, 0, 0, 0, 0],
};
/* Sailor's Sea Legs
Prerequisites: An appropriate background related to being around the water.
Your childhood fascination with the water and the many vessels that travel on it led to you to becoming a crew member of a vessel, whether sailing into battle on a navy warship, swashbuckling across the oceans as a pirate, or working on a fishing boat striving to feed a nearby village. Even on land, you walk with a particular gait from having your sea legs. You gain the following benefits:
• Increase your Dexterity by 1, to a maximum of 20.
• Whenever you have advantage on an attack roll that uses Dexterity, you can reroll one of the dice once.
• You gain proficiency with Vehicles (water). If you are already proficient with them, you add double your proficiency bonus to checks you make with them. */
FeatsList["sidestepper"] = {
	name : "Sidestepper",
	source : ["NHB"],
	descriptionFull : "Thanks to extensive footwork practice, you are adept at moving in combat. You gain the following benefits:\n \u2022 Whenever an opponent misses you with a melee attack, you may move 5 feet as a reaction. This movement does not provoke opportunity attacks and does not count against your total movement.\n \u2022 As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of your next turn.",
	description : "As a reaction, when an opponent misses me I can move 5 feet without provoking an opportunity attack. As a bonus action, I can make a DC 15 Dexterity (Acrobatics) check to have difficult terrain not cost me extra movement until end of my next turn. [+1 Dexterity]",
	scorestxt : "+1 Dexterity",
	scores : [0, 1, 0, 0, 0, 0],
	prereqeval : function(v) { return What('Dex') >= 13; },
	action : [
	["reaction", " (when missed in melee)"],
	["bonus action", " (terrain)"],
	],
};
/* Sidestepper
Prerequisites: Dexterity 13 or higher
Thanks to extensive footwork practice, you are adept at moving in combat. You gain the following benefits:
• Increase your Dexterity score by 1, to a maximum of 20.
• Whenever an opponent misses you with a melee attack, you may move 5 feet as a reaction. This movement does not provoke opportunity attacks and does not count against your total movement.
• As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of your next turn. 
*/

// Add Combat and/or Weapon-centric Feats
FeatsList["advanced shield training"] = {
	name : "Advanced Shield Training",
	source : [["NHB"]],
	prerequisite : "Proficiency with shields",
	prereqeval : function(v) { return v.shieldProf; },
	descriptionFull : "You’ve learned advanced techniques of shield wielding. Your shield is no longer just a means of defense but has become an extension of your body, combining your prowess with a shield and your weapons training to improve many offensive capabilities in combat:\n \u2022 In combat, you can don or doff a shield as the free object interaction on your turn.\n \u2022 You can use your shield hand to use any non weapon item (e.g. a torch or spellcasting focus) or to make somatic component gestures.\n \u2022 While you are wielding a shield, before you make a melee attack with a one-handed weapon you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
	description : "I can don or doff a shield as the free object interaction on my turn. I can use my shield hand to use non-weapon items and make somatic component gestures. While wielding a shield and a one-handed weapon, I can choose to take a -5 penalty on the attack roll for +10 on the attack's damage.",
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && !(/\b(two-handed)\b/i).test(fields.Description) && (/\bast\b|power.{0,3}attack|advanced.{0,3}shield.{0,3}training/i).test(v.WeaponText)) {
					output.extraDmg += 10;
					output.extraHit -= 5;
				};
			},
			"If I include the words 'Power Attack', 'Advanced Shield Training', or just 'AST' in a one-handed melee weapon's name or description, the calculation will put a -5 penalty on the attack's To Hit and +10 on its Damage."
		]
	}
};
/* Advanced Shield Training
Prerequisite: Proficiency with Shields
You’ve learned advanced techniques of shield wielding. Your shield is no longer just a means of defense but has become an extension of your body, combining your prowess with a shield and your weapons training to improve many offensive capabilities in combat:
• In combat, you can don or doff a shield as the free object interaction on your turn.
• You can use your shield hand to use any non weapon item (e.g. a torch or spellcasting focus) or to make gestures for somatic spells.
• While you are wielding a shield, before you make a melee attack with a one-handed weapon you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.

This feat does not enable you to make any weapon related actions you wouldn't be able to do while you are wielding a shield (e.g. Two-Handed attacks or Two-Weapon Fighting). */
FeatsList["battlewise"] = { // originally by BoneDealer
	name : "Battlewise",
	source : [["NHB"]],
	prerequisite : "Wisdom 13 or higher",
	prereqeval : function(v) { return What('Wis') >= 13; },
	descriptionFull : "Your experience on the battlefield has hardened you and gifted you with tactical instinct. You gain the following benefits:\n \u2022 Increase your Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022 You gain a bonus to initiative equal to your Wisdom modifier.\n \u2022 You can use the Help action as a bonus action.",
	description : "I gain a bonus to my initiative rolls equal to my Wisdom modifier. I can take the Help action as a bonus action. [+1 Constitution or Wisdom]",
	scorestxt : "+1 Constitution or Wisdom",
	action : ["bonus action", " (Help action)"],
	addMod : { type : "skill", field : "Init", mod : "max(Wis|0)", text : "I add my Wisdom modifier to initiative rolls." }
};
/* Battlewise
Prerequisite: Requires a Wisdom score of 13 or higher
Your experience on the battlefield has hardened you and gifted you with tactical instinct. You gain the following benefits:
• Increase your Constitution or Wisdom score by 1, to a maximum of 20.
• You gain a bonus to initiative equal to your Wisdom modifier.
• You can use the Help action as a bonus action. */
FeatsList["dogfighting maneuvers"] = { // Prerequisite: A flying speed
	name : "Dogfighting Maneuvers",
	source : [["NHB"]],
	prerequisite : "Flying Speed",
	description : "While flying, enemies I make a melee attack against in my turn can't use opportunity attacks on me and as a Bonus action after my Attack action, I can move up to half my fly speed and make a single melee attack. Once per turn, if I dive 30 ft and hit with a melee attack, the attack deals +1d6 damage.  [+1 Dex or Wis]",
	descriptionFull : "You can skillfully use aerial maneuvers consisting of many varying tactical turns, rolls, and other actions to get behind or above an enemy, before the opponent can do the same. You gain the following benefits:\n \u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20.\n \u2022 Fancy Flightwork. While flying during your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.\n \u2022 Dive Attack. Once per turn, if you are flying and dive at least 30 feet straight toward a target and then hit it with a melee weapon attack, the attack deals an extra 1d6 damage to the target.\n \u2022 Swoop Attack. When you use the Attack action while flying, you can use your Bonus action to make a Swoop attack, moving up to half of your flying speed and making a single melee attack against a creature.",
	scorestxt : "+1 Dexterity or Wisdom",
	action : ["bonus action", "Swoop Attack (with flying Attack action)"],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isMeleeWeapon) {
					fields.Description += (fields.Description ? '; ' : '') + 'Extra 1d6 damage after straight 30 ft dive';
				}
			}, ""]
	}
};
/* Dogfighting Maneuvers
Prerequisite: A flying speed
You can skillfully use aerial maneuvers consisting of many varying tactical turns, rolls, and other actions to get behind or above an enemy, before the opponent can do the same. You gain the following benefits:
• Increase your Dexterity or Wisdom score by 1, to a maximum of 20.
• Fancy Flightwork. While flying during your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.
• Dive Attack. Once per turn, if you are flying and dive at least 30 feet straight toward a target and then hit it with a melee weapon attack, the attack deals an extra 1d6 damage to the target.
• Swoop Attack. When you use the Attack action while flying, you can use your Bonus action to make a Swoop attack, moving up to half of your flying speed and making a single melee attack against a creature. */
FeatsList["firearm expert"] = {
	name : "Firearm Expert",
	source : ["NHB"],
	descriptionFull : "Thanks to extensive practice with firearms, you are adept at using guns effectively. You gain the following benefits:\n \u2022 If you roll a misfire on an attack with a firearm, you can use your reaction to roll a d20. If the number rolled is higher than the weapon’s misfire score, the firearm does not misfire. You cannot use this feature again on the same firearm until you complete a short or long rest.\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.\n \u2022 When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a one-handed firearm you are holding.",
	description : "If firearm misfires, I can reaction roll a d20. If higher than misfire score, no misfire (once per weapon per short rest). No disadvantage on ranged attack rolls within 5 ft of a hostile. When I attack with a one-handed weapon in my Attack action, I can use a bonus action to attack with a one-handed firearm.",
	action : [
		["bonus action", " (with Attack action)"],
		["reaction", "Prevent Misfire"],
		],
};
/* Firearm Expert
Thanks to extensive practice with firearms, you gain the following benefits:
• When you roll a misfire on an attack with a firearm with which you are proficient, you can use your reaction to roll a d20. If the number rolled is higher than the weapon’s misfire score, the firearm does not misfire. You cannot use this feature again on the same firearm until you complete a short or long rest.
• Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.
• When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a one-handed firearm you are holding. */
FeatsList["retiarius weapons training"] = {  
	name : "Retiarius Weapons Training",
	source : ["NHB"],
	descriptionFull : "You have received extensive training with equipment styled on that of a fisherman. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 \n \u2022 When you use a net, it becomes a melee weapon with the thrown property instead of a ranged weapon and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.\n \u2022 When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property.",
	description : "I can use two-weapon fighting with tridents and nets. Tridents have the finesse property and do d8 damage (versatile d10). Nets have the finesse property, count as a melee weapon, and no disadvantage if hostile within 5 ft. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.baseWeaponName == 'trident') {
                    fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
                    fields.Description = fields.Description.replace('Thrown, versatile (1d8)', 'Finesse, thrown, versatile (1d10)');
                    fields.Mod = v.StrDex;
                } else if (v.baseWeaponName == 'net') {
                    fields.Description = fields.Description.replace('Thrown, only 1 attack, up to large creature hit is restrained (PHB 148)', 'Finesse, thrown, no disadvantage if hostile within 5 ft, restrain up to large creature (DC 10)'); 
					fields.Range = 'Melee, 5/15' + ' ft';
                    fields.Mod = v.StrDex;
                };
            },
            "With a trident, I get the following benefits:\n - Finesse and two-weapon fighting;\n - The trident damage die increases to d8 (versatile d10).\n \u2022 With a net, I get the following benefits:\n - Finesse and two-weapon fighting;\n - Becomes melee weapon and no disadvantage if hostile within 5 ft."
        ]
    }
};
/*Retiarius Weapons Training
You have received extensive training with equipment styled on that of a fisherman. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands.
• When you use a net, it becomes a melee weapon instead of a ranged weapon, and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.
• When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property. 
*/
FeatsList["rough-and-tumble"] = {
	name : "Rough-and-Tumble",
	source : [["NHB"]],
	descriptionFull : "Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Acrobatics or Athletics skill (your choice. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.\n \u2022 You have advantage on attack rolls against a creature you are grappling.\n \u2022 When you shove a creature you are grappling, you can double the distance you push that creature.",
	description : "I gain expertise with Athletics or Acrobatics, or proficiency if not so already. I have advantage on attack rolls against a creature I am grappling. I can double the distance I shove a creature I am grappling. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	skills : [["Athletics", "increment"]],
	skillstxt : "Proficiency with Acrobatics or Athletics, or\n   Expertise if already proficient",
};
/* Rough-and-Tumble
Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• You gain proficiency in the Athletics or Acrobatics skill. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.
• You have advantage on attack rolls against a creature you are grappling.
• When you shove a creature you are grappling, you can double the distance you push that creature. */
FeatsList["spear expertise"] = {
	name : "Spear Expertise",
	source : ["NHB"],
	descriptionFull : "Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:\n \u2022 When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)\n \u2022 A spear has the finesse property when you wield it and you gain a +1 bonus to attack rolls you make with a spear.\n \u2022 As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn.",
	description : "With a spear, I get +1 to hit and it does d8 damage (versatile d10). My expertise with the spear allows me to treat it as having the finesse trait. As a bonus action, I can increase the spear's reach by 5 ft.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'spear') {
					fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
					fields.Description = fields.Description.replace('versatile (1d8)', 'Finesse, versatile (1d10)');
					fields.Mod = v.StrDex;
				};
			},
			"With a spear, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 The spear damage die increases to d8 (versatile d10)."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'spear') output.extraHit += 1;
			}, ""]
	},
	action : ['bonus action', ' (increase reach)']
};
/* Spear Expertise
Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:
• A spear has the finesse property when you wield it and you gain a +1 bonus to attack rolls you make with a spear.
• When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.) 
• As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn. */
FeatsList["trident expertise"] = {
	name : "Trident Expertise",
	source : ["NHB"],
	descriptionFull : "Though the trident is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:\n \u2022 You gain a +1 bonus to attack rolls you make with a trident.\n \u2022 When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)\n \u2022 A trident has the finesse property when you wield it.\n \u2022 As a bonus action on your turn, you can increase your reach with a trident by 5 feet for the rest of your turn.",
	description : "With a trident, I get +1 to hit and it does d8 damage (versatile d10). My expertise with the trident allows me to treat it as having the finesse trait. As a bonus action, I can increase the trident's reach by 5 ft.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'trident') {
					fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
					fields.Description = fields.Description.replace('versatile (1d8)', 'Finesse, versatile (1d10)');
					fields.Mod = v.StrDex;
				};
			},
			"With a trident, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 The trident damage die increases to d8 (versatile d10)."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'trident') output.extraHit += 1;
			}, ""]
	},
	action : ['bonus action', ' (increase reach)']
};
/* Trident Expertise
Though the trident is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:
• A trident has the finesse property when you wield it and you gain a +1 bonus to attack rolls you make with a trident.
• When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.) 
• As a bonus action on your turn, you can increase your reach with a trident by 5 feet for the rest of your turn. */
FeatsList["wrestler"] = {
	name : "Wrestler",
	source : [["NHB"]],
	descriptionFull : "Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:\n \u2022 You gain proficiency in the Athletics skill. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.\n \u2022 When you hit a creature with an unarmed strike on your turn, you can use a bonus action to attempt to grapple the target.\n \u2022 You have advantage on attack rolls against a creature you are grappling.",
	description : "I gain expertise with Athletics, or proficiency if not so already. When I hit a creature with an unarmed strike on my turn, I can attempt to grapple the target as a bonus action. I have advantage on attack rolls against a creature I am grappling.",
	prerequisite : "Strength 13 or higher",
	prereqeval : function(v) { return What('Str') >= 13; },
	action : ['bonus action', 'Grapple (on hit with unarmed)'],
	skills : [["Athletics", "increment"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike" || (/improvised/i).test(v.WeaponName + v.baseWeaponName) || (/improvised weapon/i).test(v.theWea.type)) {
					fields.Proficiency = true;
					if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + 'After hit, can grapple as a bonus action';
				};
			},
			"After hitting a creature with an unarmed strike in melee, I can attempt to start a grapple as a bonus action."
		]
	}
};
/* Wrestler
Prerequisite: Strength 13 or higher
Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:
• You gain proficiency in the Athletics skill. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.
• When you hit a creature with an unarmed strike on your turn, you can use a bonus action to attempt to grapple the target.
• You have advantage on attack rolls against a creature you are grappling. */

// Add Campaign Feats
FeatsList["blessing of the wolf queen"] = {
	name : "Blessing of the Wolf Queen",
	source : ["NHB"],
	description : "Ainu the Wolf Queen considers me worthy and has granted her blessing upon me. I can attune to a maximum of four magical items, rather than three; other attunement limitations still apply."
};
FeatsList["silverblood vision"] = {
	name : "Silverblood Vision",
	source : ["NHB"],
	description : "When you finish a long rest, roll a d20 and record the number. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with this foretelling roll. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.",
	usages : 1,
	recovery : "long rest",
};
FeatsList["witness gift"] = {
	name : "Witness Gift",
	source : ["NHB"],
	description : "I learn a cantrip and a 1st-level spell, using Con as my spellcasting ability. I can cast the spell once per long rest without a spell slot. I can use a Hit Die when casting the spell, casting it as if with a level 2 spell slot and taking the HD as damage. [+1 Con]",
	scorestxt : "+1 Constitution",
	scores : [0, 0, 1, 0, 0, 0],
	spellcastingBonus : [{
		name : "cantrip",
		spellcastingAbility : 3,
		level : [0, 0],
		atwill : true
	}, {
		name : "1st-level spell",
		level : [1, 1],
		oncelr : true
	}]
};

// Add Racial Feats
// Aasimar
FeatsList["celestial constitution"] = {
	name : "Celestial Constitution",
	source : ["NHB"],
	prerequisite : "Being an Aasimar",
	prereqeval : function(v) { return CurrentRace.known.indexOf('aasimar') !== -1; },
	descriptionFull : "Celestial blood runs strong in you, unlocking a resilience akin to that possessed by some inhabitants of the Seven Heavens. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You have resistance to cold and poison damage.\n \u2022 You have advantage on saving throws against being poisoned.",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
/* Celestial Constitution
Prerequisite: Aasimar
Celestial blood runs strong in you, unlocking a resilience akin to that possessed by some inhabitants of the Seven Heavens. You gain the following benefits:
• Increase your Constitution score by 1, to a maximum of 20.
• You have resistance to cold damage and poison damage.
• You have advantage on saving throws against being poisoned. */
FeatsList["divine ascendant"] = { // Aasimar (Protector)
	name: "Divine Ascendant",
	source: [["NHB", 81]],
	prerequisite : "Being an Aasimar",
	prereqeval : "CurrentRace.known.indexOf('aasimar') !== -1",
	descriptionFull : "The blood of your celestial ancestor is exceptionally strong within you, granting you power uncommon even among Aasimar. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the Sacred Flame cantrip. The spells' spellcasting ability is the ability increased by this feat.\n \u2022 You can use your Healing Hands trait twice before you need to finish a long rest to use them again.",
	description : "I learn the Sacred Flame cantrip. I can use my 'Healing Hands' trait twice per long rest. [+1 Int, Wis, or Cha]",
	extraLimitedFeatures : {
		name : "Healing Hands",
		usages : 2,
		recovery : "long rest",
	},
	spellcastingBonus : [{
		name : "Sacred Flame",
		spells : ["sacred flame"],
		selection : ["sacred flame"],
		firstCol : "atwill"
	}],
	spellcastingAbility : 4,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Sacred Flame cantrip. Intelligence is my spellcasting ability for this. I can use my 'Healing Hands' trait twice per long rest.  [+1 Int" + (typePF ? "" : "elligence") + "]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Sacred Flame cantrip. Wisdom is my spellcasting ability for this. I can use my 'Healing Hands' trait twice per long rest.  [+1 Wis" + (typePF ? "" : "dom") + "]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Sacred Flame cantrip. Charisma is my spellcasting ability for this. I can use my 'Healing Hands' trait twice per long rest.  [+1 Cha" + (typePF ? "" : "risma") + "]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
/* Divine Ascendant
Prerequisite: Protector Aasimar
The blood of your celestial ancestor is exceptionally strong within you, granting you power uncommon even among Aasimar. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
• You learn the Sacred Flame cantrip. The spells' spellcasting ability is the ability increased by this feat.
• You can use your Healing Hands trait twice before you need to finish a long rest to use them again. */
FeatsList["sacred soul of the storm"] = { 
	name : "Sacred Soul of the Storm",
	source : ["NHB"],
	prerequisite : "Being an Aasimar",
	prereqeval : "CurrentRace.known.indexOf('aasimar') !== -1",
	description : "When I cast a lightning damage spell, I can reroll any 1 on lightning damage dice once. I then sheathe myself in a storm cloud until my next turn ends. The storm sheds bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 lightning damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
};
/* Sacred Soul of the Storm
Prerequisite: Aasimar
You learn to call on primal energies to serve your commands. You gain the following benefits:
• Increase your Intelligence or Charisma by 1, to a maximum of 20.
• When you roll lightning damage for a spell you cast, you can reroll any roll of 1 on the lightning damage dice, but you must use the new roll, even if it is another 1.
• Whenever you cast a spell that deals lightning damage, you can cause a storm cloud to wreathe you until the end of your next turn. The storm cloud doesn't harm you or your possessions, and it shed bright light out to 30 feet and dim light for an additional 30 feet. While the storm cloud is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 lightning damage. */

// Bird [aarakocra|aven|kenku|owlfolk]
FeatsList["hawkeyed accuracy"] = { 
	name : "Hawkeyed Accuracy",
	source : ["NHB"],
	prerequisite : "Being a bird race",
	prereqeval : function(v) { return (/aarakocra|aven|kenku|owlfolk/i).test(CurrentRace.known); },
	descriptionFull : "You have uncanny aim with ranged attacks that rely on precision and pinpoint targeting. You gain the following benefits:\n \u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20.\n \u2022 You have advantage on Perception checks based on sight.\n \u2022 Whenever you have advantage on a ranged attack roll using Dexterity or Wisdom, you can reroll one of the dice once.",
	description : "I have advantage on Perception checks based on sight. Whenever I have advantage on a ranged attack roll that uses Dexterity or Wisdom, I can reroll one of the dice once. [+1 Dexterity or Wisdom]",
	vision: [["Adv. on Perception checks based on sight", 0]],
	scorestxt : "+1 Dexterity or Wisdom"
};
/* Hawkeyed Accuracy
Prerequisite: Being a bird race
You have uncanny aim with ranged attacks that rely on precision and pinpoint targeting. You gain the following benefits:
•    Increase your Dexterity or Wisdom score by 1, to a maximum of 20.
•    You have advantage on Wisdom (Perception) checks that rely on sight.
•    Whenever you have advantage on a ranged attack roll using Dexterity or Wisdom, you can reroll one of the dice once.
*/

// Bugbear
FeatsList["quiet and deadly skulker"] = { // Bugbear
	name : "Quiet and Deadly Skulker",
	source : ["NHB", 3],
	prerequisite : "Being a Bugbear",
	prereqeval : "CurrentRace.known.indexOf('bugbear') !== -1",
	description : "I gain expertise in Stealth. If a creature can't see me, I can add one of the weapon's damage dice. When I hit with an attack of opportunity using Strength, I can make the target succeed on a Strength saving throw (DC 8 + my prof bonus + my Strength mod) or be knocked prone. [+1 Strength or Dexterity]",
	descriptionFull : "With roots in the Feywild, early bugbears resided in hidden places, in hard-to-reach and shadowed spaces. Long ago and from out of the corner of your eye, they came to the Material Plane. Centuries later, they still bear a fey gift for lurking just out of sight. Despite their formidable build, bugbears are quiet and deadly skulkers. You gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.\n \u2022 You gain expertise with Stealth, which means your proficiency bonus is doubled for any ability check you make with it.\n \u2022 Unseen Advantage: If you have advantage on a weapon attack roll against a creature that can't see you, you can roll one of the weapon's damage dice one additional time and add it to the damage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 Unexpected Aggression: When you hit with an opportunity attack using Strength, you can attempt to knock the target down. The target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	scorestxt : "+1 Strength or Dexterity",
	skills : [["Stealth", "increment"]],
	action : ["reaction", "Unexpected Aggression (w/ opp att)"],
	extraLimitedFeatures : [{
		name : "Unseen Advantage",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Unexpected Aggression",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
};
/* Quiet and Deadly Skulker
Prerequisites: Bugbear
With roots in the Feywild, early bugbears resided in hidden places, in hard-to-reach and shadowed spaces. Long ago and from out of the corner of your eye, they came to the Material Plane. Centuries later, they still bear a fey gift for lurking just out of sight. Despite their formidable build, bugbears are quiet and deadly skulkers. You gain the following benefits:
• Increase your Strength or Dexterity score by 1, to a maximum of 20.
• You gain expertise with Stealth, which means your proficiency bonus is doubled for any ability check you make with it.
• Unseen Advantage: If you have advantage on a weapon attack roll against a creature that can't see you, you can roll one of the weapon's damage dice one additional time and add it to the damage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
• Unexpected Aggression: When you hit with an opportunity attack using Strength, you can attempt to knock the target down. The target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
*/

// Centaur
FeatsList["centaur orcish heritage"] = { 
	name : "Centaur Orcish Heritage",
	source : ["NHB"],
	prerequisite : "Being a Centaur",
	prereqeval : "CurrentRace.known.indexOf('centaur') !== -1",
	description : "I have darkvision out to a range of 60 feet. My melee weapon attacks roll 1 additional dice on a critical hit. [+1 Str or Con]",
	vision : [["Darkvision", 60]],
	scorestxt : "+1 Strength or Constitution",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
			if (v.isMeleeWeapon && (/d\d+/).test(fields.Damage_Die)) {
			if (v.extraCritM) {
				v.extraCritM += 1;
			var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
			fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + '$1');
			} else {
			v.extraCritM = 1;
			fields.Description += (fields.Description ? '; ' : '') + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, '$1') + ' extra on a crit in melee';
					}
					}
				},
				"My melee weapon attacks roll 1 additional dice on a critical hit."
				]
		},	
};
/* Centaur Orcish Heritage
Through a twist of fate, an ancestor's legacy, or by some other means, you might not look like other centaurs. Your orcish heritage is plain for all to see. Rather than having the physical characteristics described in the usual centaur description, you may choose any of the following features: grayish pigmentation, sloping forehead, jutting jaws, or prominent teeth. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Darkvision. Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
• Savage Attacks. When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.
*/

// Changeling
FeatsList["changeling instinctive adjustment"] = {
	name : "Changeling Instinctive Adjustment",
	source : ["NHB"],
	prerequisite : "Being a Changeling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('changeling') !== -1; },
	descriptionFull : "The instinctive ability of changelings to adjust their body on the spur of the moment gives them uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:\n \u2022 Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.",
	description : "Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, Wisdom, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Dexterity, Intelligence, Wisdom, or Charisma"
};
/* Changeling Instinctive Adjustment
Prerequisite: Changeling
The instinctive ability of changelings to adjust their body on the spur of the moment gives them uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:
• Increase your Dexterity, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once. */
FeatsList["morphic body"] = {
	name : "Morphic Body",
	source : ["NHB"],
	prerequisite : "Being a Changeling",
	prereqeval : "CurrentRace.known.indexOf('changling') !== -1",
	descriptionFull : "Your control over your body allows you some control of your internal organs as well as your external appearance. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 You can use your reaction to make yourself resistant to bludgeoning, piercing or slashing damage until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 You can use your reaction to make a critical hit of bludgeoning, piercing or slashing damage against you a normal hit. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a Reaction, I gain resistance to bludgeoning, piercing or slashing damage until the start of my next turn. I can also use my Reaction to make a critical hit dealing bludgeoning, piercing or slashing damage to me a normal hit. I can use each of these Reactions my Prof Bonus per long rest. [+1 Str, Dex, or Con]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
		action : [['reaction', 'Resistance to B/P/S'],['reaction', 'Cancel B/P/S Critical']],
	extraLimitedFeatures : [{
		name : "Resistance to B/P/S",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	},
	{
		name : "Cancel B/P/S Critical Hit",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
};
/* Morphic Body
Prerequisite: Changeling
Your control over your body allows you some control of your internal organs as well as your external appearance. You gain the following benefits:
• Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.
• You can use your reaction to make yourself resistant to bludgeoning, piercing or slashing damage until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
• You can use your reaction to make a critical hit of bludgeoning, piercing or slashing damage against you a normal hit. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
 */

// Dhampir
FeatsList["touched by the mists"] = {  
	name : "Touched by the Mists",
	source : ["NHB"],
	prerequisite : "Being a Dhampir",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dhampir') !== -1; },
	descriptionFull : "Through fell magic, you are touched by the corruptive power of a Dread Domain. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 You have resistance to necrotic damage.\n \u2022 Whenever you spend one or more hit dice during a short rest, you can regain an extra 1d6 hit points.\n \u2022 Your Vampiric Bite damage die increases to a d6.",
	description : "I am resistant to necrotic damage. When I spend 1 or more hit dice during a short rest, I can regain an extra 1d6 hit points. My Vampiric Bite damage die increases to a d6.[+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	dmgres : ["Necrotic"],
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.theWea.name == 'Vampiric Bite') {
                    fields.Damage_Die = fields.Damage_Die === '1d4' ? '1d6' : fields.Damage_Die;
                };
            },
            "My Vampiric Bite damage die increases to a d6."
        ]
    }
};
/* Touched by the Mists
Prerequisite: Dhampir
Through fell magic, you are touched by the corruptive power of a Dread Domain. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• You have resistance to necrotic damage.
• Whenever you spend one or more hit dice during a short rest, you can regain an extra 1d6 hit points.
• Your Vampiric Bite damage die increases to a d6.
*/

// Firbolg
FeatsList["walker in the woods"] = {  // Firbolg
    name : "Walker in the Woods",
    source : ["NHB"],
	prerequisite : "Being a Firbolg",
	prereqeval : "CurrentRace.known.indexOf('firbolg') !== -1",
	descriptionFull : "You lean further into your connection with nature, gaining additional abilities:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Speak with Animals spell and can cast it at will, without expending a spell slot.\n \u2022 You learn the Speak with Plants and Plant Growth spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I can cast Speak with Animals at will. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "At will",
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		firstCol : 'atwill'
	},	{
		name : "Speak with Plants",
		spells : ["speak with plants"],
		selection : ["speak with plants"],
		firstCol : "oncelr"
	}, {
		name : "Plant Growth",
		spells : ["plant growth"],
		selection : ["plant growth"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I can cast Speak with Animals at will, without expending a spell slot. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I can cast Speak with Animals at will, without expending a spell slot. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I can cast Speak with Animals at will, without expending a spell slot. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	},
	extraLimitedFeatures : [{
		name : "Plant Growth",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 3+"
	},{
		name : "Speak with Plants",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 3+"
	}],
};
/* Walker in the Woods
Prerequisites: Firbolg
You lean further into your connection with nature, gaining additional abilities:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Speak with Animals spell and can cast it at will, without expending a spell slot.
• You learn the Speak with Plants and Plant Growth spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.*/

// Genasi (Earth)
FeatsList["pasha heritage"] = {
	name : "Pasha Heritage",
	source : ["NHB"],
	prerequisite : "Being an Earth Genasi",
	prereqeval : "CurrentRace.known.indexOf('earth genasi') !== -1",
	description : "I learn the Move Earth cantrip. I learn Earth Tremor, which I can cast it without using a spell slot once per long rest, and by using spell slots as normal. Con is my spellcasting ability for these. I gain heritage armor, giving me an AC of 13 + my Con mod + shield while I'm not wearing armor. [+1 Con, Int, Wis, or Cha]",
	scorestxt : "+1 Constitution, Intelligence, Wisdom, or Charisma",
	armorOptions : {
		regExpSearch : /^(?=.*heritage)(?=.*(natural|hide|skin)).*$/i,
		name : "Heritage Natural Armor",
		source : ["NHB"],
		ac : "13+Con",
		dex : -10
	},
	armorAdd : "Heritage Natural Armor",
	spellcastingBonus : [{
		name : "Pasha Heritage",
		spellcastingAbility : 3,
		spells : ["mold earth"],
		selection : ["mold earth"],
		firstCol : "atwill"
	}, {
		name : "Pasha Heritage",
		spells : ["earth tremor"],
		selection : ["earth tremor"],
		firstCol : 'oncelr',
		allowUpCasting : true
	}],
	extraLimitedFeatures : [{
		name : "Earth Tremor",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 1+"
	}],
};
/* Pasha Heritage
Prerequisites: being a Genasi (Earth)
You manifest more of the magical power of your Pasha (Noble Shaitan) heritage. You gain the following benefits:
• Increase your Constitution, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Move Earth cantrip. You learn the Earth Tremor spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell using spell slots you have. These spell's spellcasting ability is Constitution.
• Your skin hardens like stone. While you aren't wearing armor, you can calculate your AC as 13 + your Constitution modifier. You can use a shield and still gain this benefit. */

// Genasi (Water)
FeatsList["shahzada heritage"] = { 
	name : "Shahzada Heritage",
	source : ["NHB"],
	prerequisite : "Being a Water Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('water') !== -1",
	description : "I can cast Detect Evil and Good at will. I have resistance to lightning damage. Once per rest, I can transform the lower half of my body into a waterspout for up to 10 minutes. I gain flying speed of 30 ft and double swim speed. [+1 Con, Int, Wis, or Cha]",
	descriptionFull : "You manifest more of the magical power of your Shahzada (noble marid) heritage. You gain the following benefits:\n \u2022 Increase your Constitution, Intelligence, Wisdom or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the detect evil and good spell and can cast it at will, without expending a spell slot.\n \u2022 You have resistance to lightning damage.\n \u2022 As an action, you can transform the lower half of your body into a spiraling waterspout, allowing you to float through the air and dart through water. While transformed, your swim speed is doubled and you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you cannot use it again until you finish a short or long rest.",
	scorestxt : "+1 Constitution, Intelligence, Wisdom, or Charisma",
	dmgres : ["Lightning"],
	action : ["action", "Waterspout Transformation"],
	usages : 1,
	recovery : "short rest",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 3,
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		firstCol : 'atwill'
	}]
};
/* Shahzada Heritage
Prerequisites: being a Genasi (Water)
You manifest more of the magical power of your Shahzada (Noble Marid) heritage. You gain the following benefits:
• Increase your Constitution, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Detect Evil and Good spell and can cast it at will, without expending a spell slot.
• You have resistance to Lightning damage.
• As an action, you can transform the lower half of your body into a spiraling waterspout, allowing you to float through the air and dart through water. While transformed, your swim speed is doubled and you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you cannot use it again until you finish a short or long rest. */

// Goblin
FeatsList["favor of the queen of air and darkness"] = { // Goblin
	name: "Favor of the Queen of Air and Darkness",
	source: [["NHB", 81]],
	prerequisite : "Being a Goblin",
	prereqeval : "CurrentRace.known.indexOf('goblin') !== -1",
	descriptionFull : "Long before the god Maglubiyet conquered the goblins, early goblins served in the court of the Queen of Air and Darkness, one of the Feywild's archfey. Goblins thrived in her dangerous domain thanks to a special boon from her—a supernatural knack for finding the weak spots in foes larger than themselves and for getting out of trouble. For reasons unknown, the Queen of Air and Darkness has taken special notice of you and granted you a further boon, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic.\n \u2022 You can cast the invisibility spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them.",
	description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. My spellcasting ability is the ability I increase with this feat. [+1 Int, Wis, or Cha]",
	spellcastingBonus : [{
		name : "Invisibility",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : "oncelr"
	},
	{
		name : "Abjur/Ench/Illus/Necro cantrip",
		'class': "any",
		school : ["Abjur", "Ench", "Illus", "Necro"],
		level : [0, 0],
		firstCol : "atwill"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	spellChanges : {
		"invisibility" : {
			components : "(V,S,M)",
			changes : "My Favor of the Queen of Air and Darkness feat allows me to cast Invisibility once per long rest without requiring a spell slot or spell components, or by using a spell slot and cast it with components as normal."
		}
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Intelligence is my spellcasting ability for this. [+1 Int" + (typePF ? "" : "elligence") + "]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Wisdom is my spellcasting ability for this. [+1 Wis" + (typePF ? "" : "dom") + "]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Charisma is my spellcasting ability for this. [+1 Cha" + (typePF ? "" : "risma") + "]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
/* Favor of the Queen of Air and Darkness
Prerequisite: Goblin
Long before the god Maglubiyet conquered the goblins, early goblins served in the court of the Queen of Air and Darkness, one of the Feywild's archfey. Goblins thrived in her dangerous domain thanks to a special boon from her—a supernatural knack for finding the weak spots in foes larger than themselves and for getting out of trouble. For reasons unknown, the Queen of Air and Darkness has taken special notice of you and granted you a further boon, granting you the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. The spells' spellcasting ability is the ability increased by this feat.
• You can cast the invisibility spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them. */
FeatsList["goblin's furious accuracy"] = { // Goblin (not MotM)
	name : "Goblin's Furious Accuracy",
	source : ["NHB"],
	prerequisite : "Being a Goblin",
	prereqeval : "CurrentRace.known.indexOf('goblin') !== -1",
	description : "I can use my Fury of the Small trait twice before I must take a short rest. Whenever I have advantage on an attack roll that uses Dexterity, I can reroll one of the dice once. [+1 Dexterity]",
	scorestxt : "+1 Dexterity",
	extraLimitedFeatures : {
		name : "Fury of the Small",
		usages : 2,
		recovery : "short rest"
	},
	scores : [0, 1, 0, 0, 0, 0],
};
FeatsList["trickster spirit's legacy"] = { // Goblin
	name : "Trickster Spirit's Legacy",
	source : ["NHB"],
	prerequisite : "Being a Goblin",
	prereqeval : "CurrentRace.known.indexOf('goblin') !== -1",
	description : "I have advantage to interact socially with goblinoids. Reversal of Fortune: When another creature deals damage to me, I may use my reaction to spend one hit die and reduce the damage by the hit die + twice my Prof. bonus. If this reduces the damage taken to zero, you regain the hit die and hp equal to the hit die roll.",
	descriptionFull : "At one point you or one of your ancestors was possessed by the spirit of a Nilbog. Though it has since passed on to another host, the legacy of that possession left its mark on you. You gain the following benefits:\n \u2022 You have learned the best ways to manipulate others of your kind. You have advantage on any ability check to interact socially with goblinoids.\n \u2022 Reversal of Fortune. In response to another creature dealing damage to you, you may use your reaction to spend one hit die and reduce the damage taken by the amount rolled plus twice your proficiency bonus. If this reduces the damage taken to zero, you regain the spent hit die and a number of hit points equal to the hit die roll.",
	action : ["reaction", "Reversal of Fortune (after dealt damage)"],
};
/* Trickster Spirit's Legacy
Prerequisite: Goblin
At one point you or one of your ancestors was possessed by the spirit of a Nilbog. Though it has since passed on to another host, the legacy of that possession left its mark on you. You gain the following benefits:
• You have learned the best ways to manipulate others of your kind. You have advantage on any ability check to interact socially with goblinoids.
• Reversal of Fortune. In response to another creature dealing damage to you, you may use your reaction to spend one hit die and reduce the damage taken by the amount rolled plus twice your proficiency bonus. If this reduces the damage taken to zero, you regain the spent hit die and a number of hit points equal to the hit die roll. */

// Goliath
FeatsList["stone's fury"] = { 
	name : "Stone's Fury",
	source : ["NHB"],
	prerequisite : "Being a Goliath",
	prereqeval : "CurrentRace.known.indexOf('goliath') !== -1",
	descriptionFull : "Your competitive fury burns tirelessly. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 When you hit with an attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.\n \u2022 Immediately after you use your Stone's Endurance trait, you can make one weapon attack as part of that reaction.",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Stone's Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	action : ["reaction", " (after Stone's Endurance)"],
	usages : 1,
	recovery : "short rest",
	additional : "extra damage"
};

// Half-Orc
FeatsList["orcish centaur heritage"] = {
	name : "Orcish Centaur Heritage",
	source : ["BurnSky"],
	prerequisite : "Being a Half-Orc",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known); },
	description : "My walking speed increases by 10 ft. I can use my hooves for unarmed strikes that deal 1d4 bludgeoning damage. I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	speed : { walk : {spd : "+10", enc : "+10" } },
	carryingCapacity : 2,
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\b(hoofs?|hooves)\b/i,
		name : "Hooves",
		source : ["BurnSky"],
		damage : [1, 4, "bludgeoning"],
		description : ""
	},
	weaponsAdd : ["Hooves"],
};
/* Orcish Centaur Heritage
The upper bodies of centaurs are comparable to human torsos in size, and below the waist, they have the bodies of small horses, averaging about 4 feet tall at the withers. Similar range of coloration as horses—from various shades of chestnut or bay to dappled or even zebra-like striped patterns. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Hooves. Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
• Equine Build. Your walking speed increases by 10 feet. You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot. */

// Harengon (Rabbitfolk)
FeatsList["colony defender"] = { 
	name : "Colony Defender",
	source : ["NHB"],
	prerequisite : "Being a Harengon",
	prereqeval : "CurrentRace.known.indexOf('harengon') !== -1",
	description : "My walking speed increases by 5 ft. As a bonus action with the Attack action, I can make a double-tipped weapon attack for 2d4 piercing damage. +1 AC while wielding a double-tipped weapon with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : ["if ((/double-tipped spear/i).test(WeaponName) && fields.Proficiency) {fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Two-handed; With Attack action, one attack as bonus action'); fields.Mod = StrDex; };", "I can make an extra attack with Double-tipped weapons as a bonus action when taking the Attack action."]
	},
	eval : "AddACMisc(1, 'Colony Defender', 'When wielding a double-tipped weapon in two hands, the Colony Defender feat gives a +1 bonus to AC', 'ACshield');",
	removeeval : "AddACMisc(0, 'Colony Defender', 'When wielding a double-tipped weapon in two hands, the Colony Defender feat gives a +1 bonus to AC');"
};
FeatsList["jumping flash"] = { 
	name : "Jumping Flash",
	source : ["NHB"],
	prerequisite : "Being a Harengon",
	prereqeval : "CurrentRace.known.indexOf('harengon') !== -1",
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I regain all expended uses of my Rabbit Hop feature when I finish a short rest.",
	scorestxt : "+1 Strength or Dexterity",
	skills : "\n\n" + toUni("Jumping Flash (feat)") + ": Acrobatics or Athletics.",
	speed : { walk : {spd : "+5", enc : "+5" } },
	extraLimitedFeatures : {
		name : "Rabbit Hop",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest"
	},
};
/* Jumping Flash
Prerequisite: Harengon
You are uncommonly nimble for your race. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• Increase your walking speed by 5 feet.
• You gain proficiency in the Acrobatics or Athletics skill (your choice).
• You regain all expended uses of your Rabbit Hop feature when you finish a short rest. */
FeatsList["powerhouse hopper"] = { // (small sized)
	name : "Powerhouse Hopper",
	source : ["NHB"],
	prerequisite : "Being a Small sized Harengon",
	prereqeval : "CurrentRace.known.indexOf('harengon') !== -1",
	descriptionFull : "You are uncommonly hardy for your race. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You regain all expended uses of your Rabbit Hop feature when you finish a short rest.\n \u2022 You do not have disadvantage on attack rolls with weapons with the heavy property.",
	description : "My walking speed increases by 5 ft. I regain all expended uses of my Rabbit Hop feature when I finish a short rest. I do not have disadvantage on attack rolls with heavy weapons.  [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	extraLimitedFeatures : {
		name : "Rabbit Hop",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest"
	},
	speed : { walk : {spd : "+5", enc : "+5" } }
};
/* Powerhouse Hopper
Prerequisite: Small sized Rabbitfolk
You are uncommonly hardy for your race. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Increase your walking speed by 5 feet.
• You regain all expended uses of your Rabbit Hop feature when you finish a short rest.
• You do not have disadvantage on attack rolls with weapons with the heavy property.
*/
FeatsList["that's no ordinary rabbit!"] = {
	name : "That's No Ordinary Rabbit!",
	source : ["NHB"],
	prerequisite : "Being a Harengon",
	prereqeval : "CurrentRace.known.indexOf('harengon') !== -1",
	description : "I gain a bite attack that uses Strength and deals 1d6 piercing damage. I regain all expended uses of my Rabbit Hop feature when I finish a short rest. I have Keen Hearing. [+1 Strength, Dexterity, Constitution or Wisdom]",
	descriptionFull : "You are a special example for your race. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.\n \u2022 Huge, Sharp. You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 Leap About. You regain all expended uses of your Rabbit Hop feature when you finish a short rest.\n \u2022 Better Not Risk Another Frontal Assault. You have advantage on Wisdom (Perception) checks that rely on hearing.",
	vision : [["Keen Hearing", 0]],
	scorestxt : "+1 Strength, Dexterity, Constitution or Wisdom",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["NHB", 113],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
};
/* That's No Ordinary Rabbit!
Prerequisite: Harengon (Rabbitfolk)
You are a special example for your race. You gain the following benefits:
• Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.
• Huge, Sharp. You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.
• Leap About. You regain all expended uses of your Rabbit Hop feature when you finish a short rest.
• Better Not Risk Another Frontal Assault. You have advantage on Wisdom (Perception) checks that rely on hearing.
*/

// Human
FeatsList["angelfire blessing"] = {  
	name : "Angelfire Blessing",
	source : ["NHB"],
	prerequisite : "Being a Human",
	prereqeval : function(v) { return CurrentRace.known.indexOf('human') !== -1; },
	descriptionFull : "You learn to call on heavenly angelfire to serve your commands. You gain the following benefits:\n \u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20.\n \u2022 When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.\n \u2022 Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice once. I then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 fire damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
};

// Kobold
FeatsList["kobold ancestral roar"] = { 
	name : "Kobold Ancestral Roar",
	source : ["NHB"],
	prerequisite : "Being a Kobold",
	prereqeval : "CurrentRace.known.indexOf('kobold') !== -1",
	description : "I have advantage on saves to avoid/end the frightened condition on myself. I can inspire myself to roar. Creatures of my choice within 30 ft that can see & hear me make a Wisdom save (DC 8 + prof bonus + CHA mod) or be frightened of me for 1 minute, repeating save whenever it takes damage. [+1 Dex, Con, or Cha]",
	savetxt : { adv_vs : ["frightened"] },
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	usages : 1,
	recovery : "short rest",
	action : [["action", "Ancestral Roar"]],
	weaponsAdd : ["Ancestral Roar"],
};
WeaponsList["ancestral roar"] = { 
		regExpSearch : /^(?=.*ancestral)(?=.*roar).*$/i,
		name : "Ancestral Roar",
		source : ["NHB"],
		ability : 6,
		type : "Natural",
		damage : ["", "", ""],
		save : "Wis",
		range : "within 30 ft",
		description : "Chosen creatures that see/hear me make Wis save or frightened for 1 min. Repeat save when takes damage.",
		abilitytodamage : false,
		dc : true,
		dbBreathWeapon : true
};
FeatsList["kobold ancestral scales"] = {
	name : "Kobold Ancestral Scales",
	source : [["NHB"]],
	descriptionFull : "You manifest scales reminiscent of your draconic ancestors. You gain the following benefits:\n \u2022 Increase your Dexterity or Constitution score by 1, to a maximum of 20.\n \u2022 Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.\n \u2022 When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "My scales harden, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. As a reaction when I take acid, cold, fire, lightning, or poison damage, I can gain resistance to that damage instance. I can do this my Prof. Bonus per long rest. [+1 Dexterity or Constitution]",
	scorestxt : "+1 Dexterity or Constitution",
	action : ["reaction", "Ancestral Scales (Resistance)"],
	extraLimitedFeatures : [{
		name : "Ancestral Scales (Resistance)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	armorOptions : {
		regExpSearch : /^(?=.*(ancestral|dragon|draconic|scaly))(?=.*(hide|skin|scales|resilience)).*$/i,
		name : "Ancestral Scales",
		source : ["NHB"],
		ac : 13
	},
	armorAdd : "Ancestral Scales"
};
/* Kobold Ancestral Scales
Prerequisite: Kobold
Whatever their relationship to dragons, kobold scales tend to be rust colored, although the occasional kobold sports scale color more akin to that of a draconic ancestor. You gain the following benefits:
• Increase your Dexterity or Constitution by 1, to a maximum of 20.
• Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.
• When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. */
FeatsList["kobold cleverness"] = { 
	name : "Kobold Cleverness",
	source : ["NHB"],
	prerequisite : "Being a Kobold",
	prereqeval : "CurrentRace.known.indexOf('kobold') !== -1",
	description : "I can use my Dragon Growl trait twice before I must take a short rest. Whenever I have advantage on an attack roll that uses Dexterity or Wisdom, I can reroll one of the dice once. [+1 Dexterity or Wisdom]",
	scorestxt : "+1 Dexterity or Wisdom",
	extraLimitedFeatures : {
		name : "Draconic Growl",
		usages : 2,
		recovery : "short rest"
	},
};
/* Kobold Cleverness
Prerequisite: Kobold
The cleverness of Kobolds is well-known. You gain the following benefits:
• Increase your Dexterity or Wisdom by 1, to a maximum of 20.
• You can use your Dragon Growl trait twice before you must take a short rest.
• Whenever you have advantage on an attack roll using Dexterity or Wisdom, you can reroll one of the dice once. */
FeatsList["kobold pack tactics"] = {
	name : "Kobold Pack Tactics",
	source : ["ABYSS"],
	prerequisite : "Being a Kobold",
	prereqeval : "CurrentRace.known.indexOf('kobold') !== -1",
	description : "Pack Tactics: I have advantage on attack rolls if at least one of my non-incapacitated allies is within 5 ft of the targeted creature [+1 Dexterity or Wisdom]",
	descriptionFull : "Kobolds know they sometimes have to use superior numbers and cunning to take down powerful foes. Kobolds work together with other members of their tribe, allies, pets and mounts, and use any other advantage they can squeeze out of their environment to accomplish difficult tasks they couldn't manage alone. You gain the following benefits:\n \u2022 Increase your Dexterity or Wisdom by 1, to a maximum of 20.\n \u2022 Pack Tactics. You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.",
	scorestxt : "+1 Dexterity or Wisdom",
};
/* Kobold Pack Tactics
Prerequisite: Kobold (Multiverse)
Kobolds know they sometimes have to use superior numbers and cunning to take down powerful foes. Kobolds work together with other members of their tribe, allies, pets and mounts, and use any other advantage they can squeeze out of their environment to accomplish difficult tasks they couldn't manage alone. You gain the following benefits:
• Increase your Dexterity or Wisdom by 1, to a maximum of 20.
• Pack Tactics. You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.  */

// Leonin
FeatsList["fierce pride"] = { 
	name : "Fierce Pride",
	source : ["NHB"],
	prerequisite : "Being a Leonin",
	prereqeval : "CurrentRace.known.indexOf('leonin') !== -1",
	descriptionFull : "You often act with confidence, which can come off as imperiousness. While it reassures your allies, it can also suggest that you are quick to quarrel. The truth is that you simply enjoy fighting. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Once per encounter, you can deal an extra 2d6 damage to a creature you hit with a weapon attack if the target is within 5 ft of an ally that isn't incapacitated.\n \u2022 Immediately after you use your Daunting Roar trait, you can use your reaction to make one weapon attack.",
	description : "Once per encounter, I can add 2d6 extra damage to a weapon attack if the target is within 5 ft of an ally that isn't incapacitated. In addition, immediately after I use my Daunting Roar trait, I can use my reaction to make one weapon attack.\n \u2022 [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	action : ["reaction", " (after Daunting Roar)"],
	usages : 1,
	recovery : "encounter",
	additional : "2d6 extra damage"
};
/* Fierce Pride
Prerequisite: Leonin
You often act with confidence, which can come off as imperiousness. While it reassures your allies, it can also suggest that you are quick to quarrel. The truth is that you simply enjoy fighting. You gain the following benefits:
• Increase your Strength or Constitution score by 1, to a maximum of 20.
• You can deal an extra 2d6 damage to a creature you hit with a weapon attack if that creature is within 5 feet of an ally that isn't incapacitated. You can use this trait only once per combat.
• Immediately after you use your Daunting Roar trait, you can use your reaction to make one weapon attack.
*/

// Lizardfolk
FeatsList["subterranean lizardfolk"] = { 
	name : "Subterranean Lizardfolk",
	source : ["NHB"],
	prerequisite : "Being a Lizardfolk",
	prereqeval : "CurrentRace.known.indexOf('lizardfolk') !== -1",
	description : "I have darkvision out to a range of 60 feet. Climbing doesn't cost me extra movement. I count as one size larger when determining my carrying capacity and push/drag/lift weight. [+1 Str, Dex, Con or Wis]",
	vision : [["Darkvision", 60]],
	scorestxt : "+1 Strength, Dexterity, Constitution or Wisdom",
	extraLimitedFeatures : {
		name : "Hungry Jaws",
		usages : 2,
		recovery : "short rest"
	},
	carryingCapacity : 2
};
/* Subterranean Lizardfolk
Prerequisites: Lizardfolk
Your heritage is more akin to the great lizards of the underdark. You gain the following benefits:
	• Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.
	• Darkvision. You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
	• Reptilian Build. Climbing doesn't cost you extra movement. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
	• Deep Hunger. You can use your Hungry Jaws trait twice before you must finish a short or long rest.
*/
FeatsList["swamp blood"] = { 
	name : "Swamp Blood",
	source : ["NHB"],
	prerequisite : "Being a Lizardfolk",
	prereqeval : "CurrentRace.known.indexOf('lizardfolk') !== -1",
	description : "I can hold my breath for one hour at a time. I have Stealth advantage while in swamp/underwater. I can move towards an enemy as a bonus action. I count as one size larger when determining my carrying capacity and push/drag/lift weight. I can use Hungry Jaws one extra time. [+1 Str, Dex, Con or Wis]",
	descriptionFull : "Your heritage is more akin to the great lizards of the swamp. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022 Aquatic Hunter. You have advantage on Dexterity (Stealth) checks made to hide while underwater or while in swampy terrain. As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than when you started. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a short rest.\n \u2022 Reptilian Build. You can hold your breath for one hour at a time. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n \u2022 Envie. You can use your Hungry Jaws trait twice before you must finish a short or long rest.",
	action : [["bonus action", "Swamp Blood (Aquatic Hunter)"]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "short rest",
	scorestxt : "+1 Strength, Dexterity, Constitution or Wisdom",
	extraLimitedFeatures : {
		name : "Hungry Jaws",
		usages : 2,
		recovery : "short rest"
	},
	carryingCapacity : 2
};
/* Swamp Blood
Prerequisites: Lizardfolk
Your heritage is more akin to the great lizards of the swamp. You gain the following benefits:
	• Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.
	• Aquatic Hunter. You have advantage on Dexterity (Stealth) checks made to hide while underwater or while in swampy terrain. As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than when you started. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a short rest.
	• Reptilian Build. You can hold your breath for one hour at a time. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
	• Envie. You can use your Hungry Jaws trait twice before you must finish a short or long rest.
*/

// Locathah
FeatsList["adaptive amphibiousness"] = { 
	name : "Adaptive Amphibiousness",
	source : ["NHB"],
	prerequisite : "Being a Locathah",
	prereqeval : "CurrentRace.known.indexOf('locathah') !== -1",
	description : "I have advantage on Wisdom (Perception) checks that rely on sight. My tough, scaly skin now provides a base AC of 13 + Dex mod. I only need to be submerged at least once every 24 hours to avoid suffocating. [+1 Str, Dex, or Con]",
	descriptionFull : "Your physiology has adapted to the local environment. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.\n \u2022 Keen Eye. You gain expertise with Perception, which means your proficiency bonus is doubled for any ability check you make with it. You have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 Hardened Scales. Your natural armor trait now provides a base AC of 13 + your Dexterity modifier.\n \u2022 Adaptation: You are resistant to poison damage. In addition, you only need to be submerged at least once every 24 hours to avoid suffocating.",
	skills : [["Perception", "increment"]],
	dmgres : ["Poison"],
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	extraAC : {
		name : "Adaptive Amphibiousness",
		mod : 1,
		text : "My Natural Armor's base AC is 13."
	},
	vision: ["Adv. on Perception checks based on sight; ", 0],
};
/* Adaptive Amphibiousness
Prerequisite: Being a Locathah
Your physiology has adapted to the local environment. You gain the following benefits
	• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
	• Keen Eye. You gain expertise with Perception, which means your proficiency bonus is doubled for any ability check you make with it. You have advantage on Wisdom (Perception) checks that rely on sight.
	• Hardened Scales. Your natural armor trait now provides a base AC of 13 + your Dexterity modifier.
	• Adaptation: You are resistant to poison damage. In addition, you only need to be submerged at least once every 24 hours to avoid suffocating.
*/

// Loxodon
FeatsList["an elephant never forgets"] = { 
	name : "An Elephant Never Forgets",
	source : ["NHB"],
	prerequisite : "Being a Loxodon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('loxodon') !== -1; },
	descriptionFull : "You can accurately recall anything you have seen or heard within the past month.\n \u2022 You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:\n \u2022 Increase your Constitution, Intelligence or Wisdom score by 1, to a maximum of 20.\n \u2022 During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.\n \u2022 When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.\n \u2022 Whenever you make an Arcana, History, Nature, or Religion check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient.",
	description : "I can accurately recall anything I have seen/heard within the past month. My hatred for a creature type gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks, even if I'm not normally proficient. [+1 Con, Int or Wis]",
	scorestxt : "+1 Constitution, Intelligence, or Wisdom",
	choices : ["2 Humanoids", "Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"],
	"2 humanoids" : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for 2 humanoid races gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	aberrations : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for aberrations gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	beasts : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for beasts gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	celestials : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for celestials gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	constructs : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for constructs gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	dragons : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for dragons gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	elementals : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for elementals gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	fey : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for fey gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	fiends : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for fiends gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	giants : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for giants gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	monstrosities : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for monstrosities gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	oozes : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for oozes gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	plants : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for plants gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	undead : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for undead gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	}
};
/* An Elephant Never Forgets
Prerequisites: Loxodon
You can accurately recall anything you have seen or heard within the past month. You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:
• Increase your Constitution, Intelligence, or Wisdom by 1, to a maximum of 20.
• During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.
• When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.
• Whenever you make an Intelligence (Arcana, History, Nature, or Religion) check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient. */
FeatsList["blessing of ivory"] = {
	name : "Blessing of Ivory",
	source : ["NHB"],
	prerequisite : "Being a Loxodon",
	prereqeval : "CurrentRace.known.indexOf('loxodon') !== -1",
	description : "I gain a tusk attack that uses Strength and deals 1d6 piercing damage. As a bonus action, when I use the Attack action, I can shove someone within 5 ft with my tusks. [+1 Strength or Constitution]",
	descriptionFull : "Your Proboscidean heritage shows true. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 You gain a tusk attack as a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your tusks.",
	scorestxt : "+1 Strength or Constitution",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /tusk/i,
		name : "Tusks",
		source : ["NHB"],
		damage : [1, 6, "piercing"],
	},
	weaponsAdd : ["Tusks"],
	action : ["bonus action", "Tusk Shove (with Attack action)"]
};
/* Blessing of Ivory
Prerequisite: Loxodon
Your Proboscidean heritage shows true. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• You gain a tusk attack as a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
• If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your tusks. */
FeatsList["loxodon gracefulness"] = {
	name : "Loxodon Gracefulness",
	source : ["NHB"],
	prerequisite : "Being a Loxodon",
	prereqeval : "CurrentRace.known.indexOf('loxodon') !== -1",
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks I make to escape from being grappled. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	skills : "\n\n" + toUni("Loxodon Nimbleness (feat)") + ": Acrobatics or Athletics.",
	speed : { walk : {spd : "+5", enc : "+5" } },
};
/* Loxodon Gracefulness
Prerequisite: Loxodon
You are uncommonly graceful for your race. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• Increase your walking speed by 5 feet.
• You gain proficiency in the Acrobatics or Athletics skill (your choice).
• You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being grappled. */
FeatsList["memory of elephants"] = {
	name : "Memory of Elephants",
	source : ["NHB", 2],
	prerequisite : "Being a Loxodon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('loxodon') !== -1; },
	descriptionFull : "You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.\n \u2022 You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your people. These proficiencies last until the end of your next long rest.",
	description : "I gain proficiency/expertise with History. When I Help a creature with an ability check, DC 15 History check to add my Prof bonus if it understands me. I recall anything within the past month. At the end of a long rest, I gain proficiency with 1 tool or weapon & 1 skill until the end of my next long rest. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of my choice",
	skills : [["History", "increment"]],
	skillstxt : "Choose any one skill - lasts until the end of my next long rest",
	toolProfs : [["Memory of Elephants: tool/weapon", 1]],
	action : ["action", "Help action (DC 15 History check)"]
};
/* Memory of Elephants
Prerequisites: Loxodon
Loxodon physically mature at the same rate as humans, but they live about 450 years. They highly value the weight of wisdom and experience and have a mystical connection to a shared herd memory. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.
• When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.
• You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your people. These proficiencies last until the end of your next long rest. */

// Minotaur
FeatsList["built horn tough"] = {  
	name : "Built Horn Tough",
	source : [["NHB"]],
	prerequisite : "Being a Minotaur",
	prereqeval : "CurrentRace.known.indexOf('minotaur') !== -1",
	descriptionFull : "Your horns are hard enough to be considered nigh-unbreakable. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Your Horns damage die increases to a d8. \n \u2022 If you used your Horns as part of the Attack action on your turn, when you use your Hammering Horns during the same turn, you may choose to knock the target creature prone instead of push it up to 10 feet away from you.\n \u2022 When you use your Goring Rush feature, you gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone until the start of your next turn.",
	description : "My Horns damage die increases to a d8. When I use Horns as part of Attack action, I may prone with Hammering Horns. When I use Goring Rush, I have advantage on checks and saves against spells and effects that push, pull, or prone me until the start of my next turn. [+1 Strength or Constitution]",
	savetxt : { text : ["After Goring Horns = Adv. vs push/pull/prone; "] },
	scorestxt : "+1 Strength or Constitution",
	action : ["bonus action", "Improved Hammering Horns (with Attack action)"],
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.theWea.name == 'Horns') {
                    fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
                };
            },
            "My Horns damage die increases to a d8."
        ]
    }
};
/* Built Horn Tough
Prerequisite: Minotaur
Your horns are hard enough to be considered nigh-unbreakable. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Improved Horns. Your Horns damage die increases to a d8. 
• Improved Hammering Horns. If you used your Horns as part of the Attack action on your turn,  when you use your Hammering Horns during the same turn, you may choose to knock the target creature prone instead of push it up to 10 feet away from you. 
• Improved Goring Rush. When you use your Goring Rush feature, you gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone until the start of your next turn. */
FeatsList["bullheadedness"] = { // Minotaur
	name : "Bullheadedness",
	source : [["NHB"]],
	prerequisite : "Being a Minotaur",
	prereqeval : "CurrentRace.known.indexOf('minotaur') !== -1",
	description : "Walking speed +5 ft. I count as one size larger for carrying capacity/push/drag/lift weight. I have advantage on checks and saves against spells/effects that push/pull/prone me. Expertise with Intimidation or Persuasion, or proficiency if not so already. I may prone with Hammering Horns. [+1 Str, Con, Wis or Cha]",
	descriptionFull : "You have a steadfast adherence to an opinion, purpose, or course of action. You gain the following benefits:\n \u2022 Increase your Strength, Constitution, Wisdom or Charisma by 1, to a maximum of 20.\n \u2022 Beast of Burden. Increase your walking speed by 5 feet, and you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n \u2022 Improved Hammering Horns. You may choose to knock the target creature prone instead of push it up to 10 feet away from you. You gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone.\n \u2022 Improved Imposing Presence. You gain proficiency in the Intimidation or Persuasion skill (your choice). If you are already proficient in the chosen skill, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.",
	scorestxt : "+1 Strength, Constitution, Wisdom, or Charisma",
	skillstxt : "Proficiency with Intimidation or Persuasion, or Expertise if already proficient",
	savetxt : { text : ["Adv. on checks/saves vs spells or effects that push/pull/prone me; "] },
	carryingCapacity : 2,
	speed : { walk : {spd : "+5", enc : "+5" } }
};
/* Bullheadedness
Prerequisite: Being a Minotaur
You have a steadfast adherence to an opinion, purpose, or course of action. You gain the following benefits:
	• Increase your Strength, Constitution, Wisdom or Charisma by 1, to a maximum of 20.
	• Beast of Burden. Increase your walking speed by 5 feet, and you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. 
	• Improved Hammering Horns. You may choose to knock the target creature prone instead of push it up to 10 feet away from you. You gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone.
	• Improved Imposing Presence. You gain proficiency in the Intimidation or Persuasion skill (your choice). If you are already proficient in the chosen skill, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.
*/

// Owlin (Owlfolk)
FeatsList["nimble sight"] = { 
	name : "Nimble Sight",
	source : ["NHB"],
	prerequisite : "Being an Owlin",
	prereqeval : "CurrentRace.known.indexOf('owlin') !== -1",
	description : "I have advantage on Perception checks based on sight. I can cast Detect Magic at will, without expending a spell slot. Wisdom is my spellcasting ability for this spell. My darkvision extends to 120 feet. [+1 Wisdom]",
	scorestxt : "+1 Wisdom",
	scores : [0, 0, 0, 0, 1, 0],
	vision: [
		["Darkvision", "fixed 120"],
		["Adv. on Perception checks based on sight", 0]
		],
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 5,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}]
};
/* Nimble Sight
Prerequisite: Being an Owlfolk
•    Increase your Wisdom by 1, to a maximum of 20.
•    You have advantage on Wisdom (Perception) checks that rely on sight.
•    You can cast the Detect Magic spell at will, without expending a spell slot.
•    Your darkvision has a radius of 120 feet.
*/

// Reborn
FeatsList["memory of past lives"] = {
	name : "Memory of Past Lives",
	source : ["NHB", 2],
	prerequisite : "Being a Reborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('reborn') !== -1; },
	descriptionFull : "You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.\n \u2022 You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your past lives. These proficiencies last until the end of your next long rest.",
	description : "I gain proficiency/expertise with History. When I Help a creature with an ability check, DC 15 History check to add my Prof bonus if it understands me. I recall anything within the past month. At the end of a long rest, I gain proficiency with 1 tool or weapon & 1 skill until the end of my next long rest. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of my choice",
	skills : [["History", "increment"]],
	skillstxt : "Choose any one skill - lasts until the end of my next long rest",
	toolProfs : [["Memory of Past Lives: tool/weapon", 1]],
	action : ["action", "Help action (DC 15 History check)"]
};
/* Memory of Past Lives
Prerequisites: Reborn
You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.
• When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.
• You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your past lives. These proficiencies last until the end of your next long rest. */

// Sea Elf
FeatsList["sharksbane weapons training"] = {  
	name : "Sharksbane Weapons Training",
	source : ["NHB"],
	prerequisite : "Being a Sea Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('sea elf') !== -1; },
	descriptionFull : "You have received extensive training in the weapons of your people. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 \n \u2022 When you use a net, it becomes a melee weapon with the thrown property instead of a ranged weapon and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.\n \u2022 When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property.",
	description : "I can use two-weapon fighting with tridents and nets. Tridents have the finesse property and do d8 damage (versatile d10). Nets have the finesse property, count as a melee weapon, and no disadvantage if hostile within 5 ft. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.baseWeaponName == 'trident') {
                    fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
                    fields.Description = fields.Description.replace('Thrown, versatile (1d8)', 'Finesse, thrown, versatile (1d10)');
                    fields.Mod = v.StrDex;
                } else if (v.baseWeaponName == 'net') {
                    fields.Description = fields.Description.replace('Thrown, only 1 attack, up to large creature hit is restrained (PHB 148)', 'Finesse, thrown, no disadvantage if hostile within 5 ft, restrain up to large creature (DC 10)'); 
					fields.Range = 'Melee, 5/15' + ' ft';
                    fields.Mod = v.StrDex;
                };
            },
            "With a trident, I get the following benefits:\n - Finesse and two-weapon fighting;\n - The trident damage die increases to d8 (versatile d10).\n \u2022 With a net, I get the following benefits:\n - Finesse and two-weapon fighting;\n - Becomes melee weapon and no disadvantage if hostile within 5 ft."
        ]
    }
};
/*Sharksbane Weapons Training
Prerequisite: Being a sea elf
You have received extensive training in the favored weapons of your people. You gain the following benefits:
	• Increase your Strength or Dexterity by 1, to a maximum of 20.
	• When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands.
	• When you use a net, it becomes a melee weapon instead of a ranged weapon, and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.
	• When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property. 
*/

// Shifter
FeatsList["keen animal instincts"] = { // Shifter
	name : "Keen Animal Instincts",
	source : [["NHB"]],
	prerequisite : "Being a Shifter",
	prereqeval : "CurrentRace.known.indexOf('shifter') !== -1",
	descriptionFull : "Your heritage has given you sharp senses and heightened reflexes. You gain the following benefits:\n \u2022 While you are conscious, you have advantage on initiative rolls and you can't be surprised.\n \u2022 Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can see, smell, or hear.\n \u2022 While you have temporary hit points granted by your Shifting feature remaining, you have resistance to bludgeoning, piercing, and slashing damage from a source that you can see, smell, or hear.",
	description : "I have advantage on initiative rolls and can't be surprised while not incapacitated. No Perception disadvantage from lightly obscured if I can see, smell, or hear. While I have Shifted temporary hit points, I have resistance to bludgeoning, piercing, and slashing damage from sources I can see, smell, or hear.",
	advantages : [["Initiative", true]],
	savetxt : { immune : ["surprised"] },
	dmgres : [["Bludgeoning", "Bludgeon. (thp)"], ["Piercing", "Piercing (thp)"], ["Slashing", "Slashing (thp)"]],
	vision : [["No lightly obscured Perception disadv if hear/see/smell", 0]],
};
/* Keen Animal Instincts
Prerequisite: Shifter
Your heritage has given you sharp senses and heightened reflexes. You gain the following benefits:
• You have advantage on Initiative rolls and can't be surprised while not incapacitated.
• Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can see, smell, or hear.
• While you have temporary hit points granted by your Shifting feature remaining, you have resistance to bludgeoning, piercing, and slashing damage from a source that you can see, smell, or hear. */
FeatsList["beast blood"] = { // Shifter (not Beasthide)
	name : "Beast Blood",
	source : [["NHB"]],
	prerequisite : "Being a Shifter",
	prereqeval : "CurrentRace.known.indexOf('shifter') !== -1",
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Beast Skin.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Beasthide Shifting Feature trait (You gain 1d6 additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class.) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4  minutes longer and I gain Beasthide benefits (+1d6 additional THP, +1 bonus to your Armor Class). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
	usages : "Shift",
	recovery : "Shift",
	additional : "+1d6 THP, +1d4 min",
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : ["NHB", 33],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : [["Retractable Claws"]],
};
/* Beast Blood
Prerequisite: Shifter (not Beasthide)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Beast Skin.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Swiftstride Shifting Feature trait in addition to your own: (You gain 1d6 additional temporary hit points. While Shifted, you have a +1 bonus to your Armor Class.) */
FeatsList["long blood"] = { // Shifter (not Longtooth)
	name : "Long Blood",
	source : [["NHB"]],
	prerequisite : "Being a Shifter",
	prereqeval : "CurrentRace.known.indexOf('shifter') !== -1",
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Long Bite.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Longtooth Shifting Feature trait (When you Shift and as a Bonus action on your other turns while Shifted, you can use your elongated fangs to make an unarmed strike, dealing 1d6 piercing damage) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4  minutes longer and I gain Longtooth benefits (Bonus action Bite for 1d6 piercing). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
	usages : "Shift",
	recovery : "Shift",
	additional : "+1d4 min",
	action : ["bonus action", "Longtooth Fangs (while Shifted)"],
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : ["NHB", 33],
		damage : [1, 6, "slashing"]
	},{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth Fangs",
		source : [["MotM", 32]],
		damage : [1, 6, "piercing"],
		description : "Only while shifted; One attack as Bonus action",
	}],
	weaponsAdd : [["Retractable Claws"], ["Longtooth Fangs"]],
};
/* Long Blood
Prerequisite: Shifter (not Longtooth)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Long Bite.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Longstrider Shifting Feature trait in addition to your own: (When you Shift and as a Bonus action on your other turns while Shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.) */
FeatsList["swift blood"] = { // Shifter (not Swiftstride)
	name : "Swift Blood",
	source : [["NHB"]],
	prerequisite : "Being a Shifter",
	prereqeval : "CurrentRace.known.indexOf('shifter') !== -1",
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Swift Light.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Swiftstride Shifting Feature trait (Your walking speed increases by 10 feet, and you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4  minutes longer and I gain Swiftstride benefits (+10 ft walking speed, 10 ft reactive movement). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
	usages : "Shift",
	recovery : "Shift",
	additional : "+1d4 min",
	action : [['reaction', 'Reactive Stride (while Shifted)']],
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : ["NHB", 33],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Retractable Claws"],
};
/* Swift Blood
Prerequisite: Shifter (not Swiftstride)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Swift Light.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Swiftstride Shifting Feature trait in addition to your own: (Your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks.) */
FeatsList["wild blood"] = { // Shifter (not Wildhunt)
	name : "Wild Blood",
	source : [["NHB"]],
	prerequisite : "Being a Shifter",
	prereqeval : "CurrentRace.known.indexOf('shifter') !== -1",
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Wild Hunt.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Wildhunt Shifting Feature trait (You have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're incapacitated) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4+1 minutes and I gain Wildhunt benefits (Adv on Wisdom checks, no creature within 30 ft can make an attack roll with advantage against me unless I'm incapacitated). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
	usages : "Shift",
	recovery : "Shift",
	additional : "1d4+1 min",
	vision : [["While Shifted: no creat within 30 ft can Adv attack me", 0]],
	savetxt : { text : ["While Shifted: Adv. on Wis checks"] },
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : ["NHB", 33],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Retractable Claws"],
};
/* Wild Blood
Prerequisite: Shifter (not Wildhunt)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Wild Hunt.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Wildhunt Shifting Feature trait in addition to your own: (You have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're incapacitated.) */

// Small sized Races
FeatsList["mighty small"] = { 
	name : "Mighty Small",
	source : ["NHB"],
	prerequisite : "Being a small race",
	prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices === 4; },
	descriptionFull : "You are uncommonly hardy for your race. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You do not have disadvantage on attack rolls with weapons with the heavy property.\n \u2022 Increase running long/high jump distance by 10 feet if wielding heavy property weapon with both hands.",
	description : "My walking speed increases by 5 ft. I do not have disadvantage on attack rolls with heavy weapons. I increase running jumps by 10 ft while wielding a heavy weapon. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
/* Mighty Small
Prerequisite : Being a small race
You are uncommonly hardy for your race. You gain the following benefits:
• Increase your Strength or Constitution score by 1, to a maximum of 20. 
• Increase your walking speed by 5 feet.
• You do not have disadvantage on attack rolls with weapons with the heavy property.
• Increase running long and high jump distances by 10 feet if you are wielding heavy property weapon with both hands.
*/

// Tabaxi
FeatsList["feline graceful accuracy"] = { 
	name : "Feline Graceful Accuracy",
	source : ["NHB"],
	prerequisite : "Being a Tabaxi",
	prereqeval : "CurrentRace.known.indexOf('tabaxi') !== -1",
	description : "My walking speed increases by 5 ft. Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, or Charisma]",
	scorestxt : "+1 Dexterity, Intelligence, or Charisma",
	speed : { walk : {spd : "+5", enc : "+5" } }
};

// Tiefling
FeatsList["feral barbed skin"] = { 
	name : "Feral Barbed Skin",
	source : ["NHB"],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I have scaly skin, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. As a bonus action, I can protrude/retract small barbs from my skin. When protruding, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling/are grappling me. [+1 Dex, Con, or Cha]",
	action: ["bonus action", "Barbs (protrude/extract)"],
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	addarmor : "Feral Barbed Skin",
	armorOptions : {
		regExpSearch : /^(?=.*feral)(?=.*barbed).*$/i,
		name : "Feral Barbed Skin",
		source : ["NHB"],
		ac : 13
	},
};
/* Feral Barbed Skin
Prerequisite: Tiefling
Your feral nature metamorphizes you. You manifest scales and barbs protrude from your head. You gain the following benefits:
• Increase your Dexterity, Constitution or Charisma by 1, to a maximum of 20.
• You manifest a scaly skin. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.
• As a bonus action, you can cause small barbs to protrude all over your body or cause them to retract. At the start of each of your turns while the barbs are out, you deal 1d6 piercing damage to any creature grappling you or any creature grappled by you. */
FeatsList["fumes of minauros"] = {
	name : "Fumes of Minauros",
	source : ["NHB"],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "When I cast an acid damage spell, I can reroll any 1 on acid damage dice once. I then sheathe myself in acidic fumes until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 acid damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
};
/* Fumes of Minauros
Prerequisite: Tiefling
You learn to call on the polluted energies of the third layer of the Nine Hells to serve your commands. You gain the following benefits:
• Increase your Intelligence or Charisma by 1, to a maximum of 20.
• When you roll acid damage for a spell you cast, you can reroll any roll of 1 on the acid damage dice, but you must use the new roll, even if it is another 1.
• Whenever you cast a spell that deals acid damage, you can cause acidic fumes to wreathe you until the end of your next turn. These acidic fumes don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the acidic fumes are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 acid damage. */

// Triton
FeatsList["champion of the ocean"] = {
	name : "Champion of the Ocean",
	source : ["NHB"],
	prerequisite : "Being a Triton",
	prereqeval : "CurrentRace.known.indexOf('triton') !== -1",
	description : "I count as one size larger when determining my carrying capacity and push/drag/lift weight. Once per long rest, as an a bonus action, I transform. For the next minute, I have resistance to acid/poison damage, and my weapon attacks deal my proficiency modifier additional damage. [+1 Str, Con or Cha]",
	descriptionFull : "The ocean has imbued you with additional strength, granting you unparalleled might in marine combat. You gain the following benefits:\n \u2022 Increase your Strength, Constitution or Charisma score by 1, to a maximum of 20.\n \u2022 As an a bonus action, you imbue yourself with power, transforming into a champion of the ocean. For the next minute, you have resistance to acid and poison damage, and your weapon attacks deal additional damage equal to your proficiency modifier. Once you use this feature, you can't use it again until you finish a long rest.",
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "long rest",
	scorestxt : "+1 Strength, Constitution or Charisma",
	carryingCapacity : 2
};
/*Champion of the Ocean
Prerequisite: Being a triton
The ocean has imbued you with additional strength, granting you unparalleled might in marine combat. You gain the following benefits:
• Increase your Strength, Constitution or Charisma by 1, to a maximum of 20.
• You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
• As an a bonus action, you imbue yourself with power, transforming into a champion of the ocean. For the next minute, you have resistance to acid and poison damage, and your weapon attacks deal additional damage equal to your proficiency modifier. Once you use this feature, you can't use it again until you finish a long rest.
*/
FeatsList["revenant trident"] = { 
	name : "Revenant Trident",
	source : ["NHB"],
	prerequisite : "Being a Triton",
	prereqeval : function(v) { return CurrentRace.known.indexOf('triton') !== -1; },
	descriptionFull : "You are descended from a master of the double trident and their skills have passed on to you. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 While you are holding a double trident with two hands, you gain a + 1 bonus to Armor Class.\n \u2022 A double trident has the finesse property when you wield it.",
	description : "My mastery with the double trident allows me to treat it as having the finesse trait. In addition, I gain +1 AC while wielding it with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double trident' && fields.Proficiency) {
					fields.Description = fields.Description.replace(/two-handed/i, 'Finesse, two-handed');
					fields.Mod = v.StrDex;
				};
			},
			"Double tridents count as having finesse for me."
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double trident in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")) || !CurrentWeapons.known.some(function (n) { return n[0] == "double trident" || (WeaponsList[n[0]] && WeaponsList[n[0]].baseWeapon == "double trident"); }); }
	}
};

// Warforged
FeatsList["warforged wormhole"] = { 
	name : "Warforged Wormhole",
	source : ["NHB"],
	prerequisite : "Being a Warforged",
	prereqeval : "CurrentRace.known.indexOf('warforged') !== -1",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. I also learn to speak, read, and write Primordial. [+1 Intelligence or Charisma]",
	scorestxt : "+1 Intelligence or Charisma",
	spellcastingBonus : {
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		oncesr : true
	},
	languageProfs : ["Primordial"],
	usages : 1,
	recovery : "short rest"
};
FeatsList["integration upgrade"] = {
	name : "Integration Upgrade",
	source : ["NHB", 74],
	prerequisite : "Being a Warforged",
	prereqeval : function(v) { return CurrentRace.known.indexOf('warforged') !== -1; },
	descriptionFull : "A warforged's body has built-in defensive layers. Your integration has an upgraded form, giving you the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 Your upgrades improve your innate defensive properties. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier (this already includes the Integrated Protection Warforged trait). You can use a shield and still gain this benefit.\n \u2022 Integrated Tool. Choose one tool you're proficient with. This tool is integrated into your body, and you double your proficiency bonus for any ability checks you make with it. You must have your hands free to use this integrated tool.",
	description : "My integration is upgraded, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. Integrated Tool: I have expertise with one tool and it is integrated into my body. [+1 Str, Dex, or Con]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	skillstxt : "Expertise with any one tool I'm proficient with",
	armorOptions : {
		regExpSearch : /^(?=.*(integration))(?=.*(upgrade|improvement)).*$/i,
		name : "Integration Upgrade",
		source : ["NHB", 74],
		ac : 12
	},
	armorAdd : "Integration Upgrade"
};
/* Integration Upgrade
Prerequisite: Warforged
A warforged's body has built-in defensive layers. Your integration has an upgraded form, giving you the following benefits:
• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
• Your upgrades improve your innate defensive properties. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier (this already includes the Integrated Protection Warforged trait). You can use a shield and still gain this benefit.
•  Integrated Tool. Choose one tool you're proficient with. This tool is integrated into your body, and you double your proficiency bonus for any ability checks you make with it. You must have your hands free to use this integrated tool. */
FeatsList["living wood construction"] = {
	name : "Living Wood Construction",
	source : [["NHB"]],
	prerequisite : "Being a Warforged",
	prereqeval : "CurrentRace.known.indexOf('warforged') !== -1",
	descriptionFull : "Your creator used wood from a primeval forest as part of your construction. It still flows with nature's power, granting you the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Your body has a rough, bark-like composition. When you aren't using incorporated armor, you have a base AC of 17, including your Warforged Integrated Protection +1 AC bonus. Your Dexterity modifier doesn't affect this number, but if you are using a shield, you can apply the shield's bonus as normal.\n \u2022 You learn the Druidcraft cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this feat).\n \u2022 Goodberry. At the end of a long rest, 1d4+1 berries, as from the Goodberry spell, sprout from your skin.",
	description : "I have Living Wood armor that provides me a base AC of 17, but I can't add my Dexterity modifier. I can still use a shield. I learn the Druidcraft cantrip. At the end of a long rest, my body grows 1d4 Goodberry. [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
	extraLimitedFeatures : [{
		name : "Living Wood (1d4 Goodberry)",
		usages : "End of",
		recovery : "long rest",
	}],
	spellcastingBonus : {
		name : "Druidcraft",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill",
	},
	spellcastingAbility : [4,5,6],
	armorOptions : {
		regExpSearch : /^(?=.*living)(?=.*wood).*$/i,
		name : "Living Wood",
		source : [["NHB", 34]],
		ac : 16,
		dex : -10,
	},
	armorAdd : "Living Wood",
};
/* Living Wood Construction
Prerequisite: Warforged
Your creator used wood from a primeval forest as part of your construction. It still flows with nature's power, granting you the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• Your body has a rough, bark-like composition. When you aren't using incorporated armor, you have a base AC of 17, including your Warforged Integrated Protection +1 AC bonus. Your Dexterity modifier doesn't affect this number, but if you are using a shield, you can apply the shield's bonus as normal.
• You learn the Druidcraft cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this feat).
• Goodberry. At the end of a long rest, 1d4 berries, as from the Goodberry spell, sprout from your skin. */
FeatsList["pactboon construction"] = {
	name : "Pactboon Construction",
	source : [["NHB", 79]],
	prerequisite : "Being a Warforged",
	prereqeval : "CurrentRace.known.indexOf('warforged') !== -1",
	descriptionFull : "Your creator made a bargain with an arcane entity to provide ensorcelled materials for use in your construction. It still flows with arcane power, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You learn to speak, read, and write your choice of Abyssal, Celestial, Infernal, or Sylvan.\n \u2022 You learn the Misty Step spell and one 1st-level spell of your choice. The 1st-level spell must be from the enchantment or illusion school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	languageProfs : [["Abyssal, Celestial, Infernal, or Sylvan", 1]],
	spellcastingBonus : [{
		name : "Misty Step",
		spells : ["misty step"],
		selection : ["misty step"],
		firstCol : "oncelr"
	}, {
		name : "1st-level Ench/Illus spell",
		'class': "any",
		school : ["Ench", "Illus"],
		level : [1, 1],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them " + (typePF ? "by expending" : "with") + " a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
/* Pactboon Construction
Prerequisite: Warforged
Your creator made a bargain with an arcane entity to provide ensorcelled materials for use in your construction. It still flows with arcane power, granting you the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn to speak, read, and write your choice of Abyssal, Celestial, Infernal, or Sylvan.
• You learn the Misty Step spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat. */

// Yaun-Ti Pureblood
FeatsList["forked tongue"] = { // Yuan-ti Pureblood
	name : "Forked Tongue",
	source : ["NHB"],
	prerequisite : "Being a Yuan-ti Pureblood",
	prereqeval : "CurrentRace.known.indexOf('yuan-ti pureblood') !== -1",
	descriptionFull : "You have unlocked more of your serpentfolk heritage. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You have the ability to communicate in a limited manner with snakes and serpents. They can understand the meaning of your words, though you have no special ability to understand them in return.\n \u2022 You gain proficiency in the Deception skill, and you add double your proficiency bonus to checks you make with it.\n \u2022 As a Bonus action, you can attempt to deceive one creature you can see within 30 feet that can hear and understand you. Creatures that can't be charmed are immune to this effect. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 24 hours.",
	description : "Snakes understand me. I gain expertise with Deception. As a Bonus action, a creature I can see within 30 ft that can hear and understand me makes its Insight vs. my Deception or I gain adv. on attacks and don't provoke opportunity attacks until the end of my next turn. 24 hour immunity if it succeeds. [+1 Cha]",
	action : [["bonus action", " (Deceive)"]],
	languageProfs : ["Forked Tongue"],
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"]]
};
/* Forked Tongue
Prerequisite: Yuan-Ti Pureblood
You have unlocked more of your serpentfolk heritage, allowing you to develop your conversational skill to better deceive others. You gain the following benefits:
• Increase your Charisma score by 1, to a maximum of 20.
•  You have the ability to communicate in a limited manner with snakes and serpents. They can understand the meaning of your words, though you have no special ability to understand them in return.
• You gain proficiency in the Deception skill, and you add double your proficiency bonus to checks you make with it.
• As a Bonus action, you can attempt to deceive one creature you can see within 30 feet that can hear and understand you. Creatures that can't be charmed are immune to this effect. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 24 hours. */

// Add Fighting Styles
// The following new option for the Fighting Style feature is available to fighters.
AddFightingStyle(["fighter"], "Hoplite", {
	name : "Hoplite Fighting Style",
	source : ["NHB"],
	description : desc([
		"When an ally within 5ft of me is hit with a melee attack, I can counterattack",
		"I can use a reaction to make a melee opportunity attack against the attacker",
		"I can only do this while wielding a shield"
	]),
	action : ["reaction", "Hoplite Counterattack"]
});
/* Fighting Style: Hoplite [originally Odyssey of the Dragonlords]
While you are wielding a shield, you are alert to attacks made against nearby allies. Whenever a creature attacks an ally standing within 5 feet of you with a melee attack, you may use your reaction to make a melee opportunity attack against the offending creature. */

// The following new options for the Fighting Style feature are available to fighters, paladins, and rangers.
AddFightingStyle(["fighter", "ranger", "rangerua", "paladin"], "Nautical", {
	name: "Nautical Fighting Style",
	source: ["NHB"],
	description : "\n   " + "While not wearing heavy armor or using a shield, I gain +1 AC and swim/climb speed" + "\n   " + "The swimming and climbing speeds are equal to my current walking speed",
	speed : {
		climb : { spd : "walk", enc : "walk" },
		swim : { spd : "walk", enc : "walk" }
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm not wearing heavy armor and not using a shield.",
		stopeval : function (v) { return v.heavyArmor || v.usingShield; }
	}
});
/* Fighting Style: Nautical [originally Waterborne UA]
The following new options can be selected by fighters, paladins, and rangers for the Fighting Style class feature.
Whether a buccaneer, an experienced sailor, or a specially trained marine, a mariner can scale a ship’s rigging and swim through choppy water with ease. Adapted to wearing light and medium armor, mariners can defend themselves without relying on heavy armor or bulky shields. Most of them thus wield two‐handed weapons or fight with a pair of blades.

Nautical
As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to AC. */

AddFightingStyle(["fighter", "ranger", "rangerua", "paladin"], "Tight Quarters Fighter", {
	name : "Tight Quarters Fighting Style",
	source : ["NHB"],
	description : "\n   " + "As a bonus action, I enter a defensive stance that lasts until the start of my next turn" + "\n   " + "While I'm in this defensive stance I gain the following two benefits:" + "\n    - " + "I can make opportunity attacks without using my reaction" + "\n    - " + "I can make a melee attack as a reaction if a hostile moves >5 ft while in my reach",
	action : ["bonus action", ""]
});
/* Fighting Style: Tight Quarters Fighter [originally Underdark UA]
You excel at defending narrow passages, doorways, and other tight spaces. As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach. */

AddFightingStyle(["fighter", "ranger", "paladin"], "Tight Quarters Shooter", {
	name : "Tight Quarters Shooting Fighting Style",
	source : ["NHB"],
	description : "\n   " + "+1 bonus to attack rolls I make with ranged attacks" + "\n   " + "I don't have disadvantage when making a ranged attack while within 5 ft of a hostile" + "\n   " + "My ranged attacks ignore half and three-quarters cover against targets within 30 ft",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isRangedWeapon || (!v.isSpell && (/thrown/i).test(fields.Description))) {
					fields.Description += (fields.Description ? '; ' : '') + "Ignore \u00BD and \u00BE cover within 30 ft; ";
				};
			},
			"My ranged attacks ignore half cover and three-quarters cover within 30 feet."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon) output.extraHit += 1;
			},
			"My ranged weapons get a +1 bonus on the To Hit."
		]
	}
});
/* Fighting Style: Tight Quarters Shooter [originally Underdark UA]
You are trained in making ranged attacks at close quarters. When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three‑quarters cover against targets within 30 feet of you. Finally, you have a +1 bonus to attack rolls on ranged attacks. */  

// Add Magic Items: Armor
MagicItemsList["duelist's armor of dual weilding"] = {  // Heward's Hireling Armor from LLoK
	name : "Duelist's Armor of Dual Weilding",
	nameAlt : "Duelist's Armor",
	source : [["NHB"]],
	type : "armor (leather)",
	rarity : "very rare",
	description : "This leather armor gives me a +1 bonus to AC and allows me to draw or stow two one-handed weapons when I would normally be able to draw or stow only one. It has 6 pockets that hold 20 lb (2 cu ft) each as they are extradimensional spaces. Retrieving an item from a pocket requires an action.",
	descriptionFull : "A number of magical experiments were attempts to research the works of legendary mages. While wearing this armor, you gain a +1 bonus to AC. In addition, the armor's animated straps can assist with the drawing and sheathing of weapons, such that you can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.\n   This armor also has six pockets, each of which is an extradimensional space. Each pocket can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The armor always weighs 10 pounds, regardless of its pockets' contents. Placing an object into one of the armor's pockets follows the normal rules for interacting with objects. Retrieving an item from a pocket of the armor requires you to use an action. When you reach into a pocket for a specific item, the item is always magically on top.\n   Placing the armor inside an extradimensional space created by a bag of holding, a Heward's handy haversack, or a similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
	weight : 10,
	action : [["action", " (retrieve item)"]],
	armorAdd : "Duelist's Armor of Dual Weilding",
	armorOptions : {
		regExpSearch : /^(?=.*duel)(?=.*dual)(?=.*armor).*$/i,
		name : "Duelist's Armor of Dual Weilding",
		source : [["NHB"]],
		type : "light",
		ac : 12,
		weight : 10
	}
};

// Add Magic Items: Rings
MagicItemsList["accurate ring of mettle"] = { // originally from Iabet-Noferet
    name : "Accurate Ring of Mettle",
    source : ["NHB"],
    type : "wonderous item",
	rarity: "legendary",
    description : "While wearing this ring, I gain a +1 bonus to AC and saving throws, and my hit point maximum increases by 5. Whenever I have advantage on an attack roll with the chosen score, I can re-roll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
    descriptionFull : "You gain a +1 bonus to AC and saving throws while wearing this ring. Your hit point maximum increases by 5. Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. Whenever you have advantage on an attack roll using the chosen score, you can re-roll one of the dice once.",
    attunement : true,
    weight : 1,
    scorestxt : "+1 Dexterity, Intelligence, Wisdom or Charisma",
	addMod : [{ type : "save", field : "all", mod : 1, text : "While wearing the Accurate Ring of Mettle, I gain a +1 bonus to all my saving throws." }],
	extraAC : [{name : "Accurate Ring of Mettle", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
	calcChanges : {
	hp : function () {
        return [5, 'Accurate Ring of Mettle', true];
        },
    },
};
MagicItemsList["ring of cloud jumping"] = {
		name : "Ring of Cloud Jumping",
		source : [["NHB"]],
		type : "ring",
		rarity : "very rare",
		description : "While wearing this ring, I have a flying speed equal to my walking speed and can hover.",
		descriptionFull : "While wearing this ring, you have a flying speed equal to your walking speed and can hover. Dispel Magic temporarily suppresses this effect for 10 minutes.",
		speed : { fly : { spd : "walk", enc : "walk" } },
		attunement : true,
			};
MagicItemsList["ring of water breathing"] = {
		name : "Ring of Water Breathing",
		source : [["NHB"]],
		type : "ring",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "While wearing this ring, I am able to breathe normally underwater.",
		descriptionFull : "While wearing this ring, you are able to breathe normally underwater."
};
MagicItemsList["silver band of projection"] = {
	name : "Silver Band of Projection",
	source : ["NHB"],
	type : "ring",
	rarity : "common",
	description : "While wearing this ring, I can use an action to cause my voice to carry clearly for up to 300 feet until the end of my next turn.",
	descriptionFull : "While wearing this ring, you can use an action to cause your voice to carry clearly for up to 300 feet until the end of your next turn.",
}
MagicItemsList["silver sentinel ring"] = {
	name : "Silver Sentinel Ring",
	source : ["NHB"],
	type : "ring",
	rarity : "common",
	description : "This ring glows faintly when undead are within 120 feet of it.",
};
MagicItemsList["wayfarer's iron ring"] = {
	name : "Wayfarer's Iron Ring",
	source : [["NHB"]],
	type : "ring",
	rarity : "uncommon",
	description : "While I wear this ring, moving through nonmagical difficult terrain doesn't cost me extra movement.",
	descriptionFull : "While you wear this ring, moving through nonmagical difficult terrain doesn't cost you extra movement.",
	attunement : false,
};
/* Wayfarer's Iron Ring
Ring, uncommon
While you wear this ring, moving through nonmagical difficult terrain costs you no extra movement. */

// Add Magic Items: Wondrous Items
MagicItemsList["bandoleer vest"] = {
	name : "Bandoleer Vest",
	source : ["NHB"],
	type : "wondrous item",
	rarity: "uncommon",
	description : "This bandoleer vest has multiple extra-dimensional compartments and weighs 2 lbs, regardless of its contents. It has slots for up to 60 rounds of ammunition and four holster straps that can each hold a one-handed firearm. Four small pockets can each hold an additional 20 rounds, a  one-handed firearm, a set of artisan tools or a similarly sized object. Three large pockets can each hold a two-handed firearm or similarly sized object. The  bandoleer vest alters itself as needed to accommodate the contents. The wearer can draw an item stored in the bandoleer vest as easily as if from an ordinary pouch.",
	descriptionFull : "This bandoleer vest is made of finely tanned leather. It has multiple compartments and weighs 2 lbs, regardless of its contents. It has slots for up to 60 rounds of ammunition and four holster straps that can each hold a one-handed firearm. Additionally, the seven thin pockets on the bandoleer vest are extra-dimensional spaces meant to hold extra guns and gear. The four small pockets can each hold an additional 20 rounds of ammunition, a one-handed firearm, a set of artisan tools or a similarly sized object. The three large pockets are large enough to each hold a two-handed firearm or similarly sized object. The  bandoleer vest alters itself as needed to accommodate the contents. The wearer can draw an item stored in the bandoleer vest as easily as if from an ordinary pouch.",
	attunement : false,
	weight : 3,
};
MagicItemsList["belt of many pouches"] = {	
		name : "Belt of Many Pouches",
		nameAlt : "Belt of Pouches",
		source : [["NHB"]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "C",
		description : "This belt weighs 10 lbs, regardless of its contents. It has sixty-four pouches that hold 10 lb (1 cu ft) each. Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it and its content are destroyed. If turned inside out, all its contents spill forth.",
		descriptionLong : "This belt weighs 10 lbs, regardless of its contents. It has sixty-four pouches that hold 10 lb (1 cu ft) each. Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it and its content are destroyed. If turned inside out, all its contents spill forth. A creature placed inside a pouch can survive for 10 minutes before starting to suffocate. Placing the belt in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
		descriptionFull : "This broad waist-belt appears to have eight pouches built into it, but in fact, there are seven more magically compressed behind each (for a total of 64 pouches). Each of these pouches can contain up to one cubic foot of material weighing up to 10 lbs; however, no matter how much you put into the belt's pouches, it always weighs 10 lbs.\n   Placing an object in a pouch follows the normal rules for interacting with Objects. Retrieving an item from a pouch requires you to use an action. The belt magically assists you in finding what you need within its contents, so you always know which pouch a given item is in. When you reach into a pouch for a specific item, the item is always magically on top.\n   The belt has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the belt ruptures and is destroyed. If the belt is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If a pouch is turned inside out, its contents spill forth, unharmed, and the pouch must be put right before it can be used again. If a breathing creature is placed within a pouch, the creature can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing the belt inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random Location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 10,
		action : [["action", " (retrieve item)"]]
};
/* Belt of Many Pouches
Wondrous item, rare
This broad waist-belt appears to have eight pouches built into it, but in fact, there are seven more magically compressed behind each (for a total of 64 pouches). Each of these pouches can contain up to one cubic foot of material weighing up to 10 lbs; however, no matter how much you put into the belt's pouches, it always weighs 10 lbs. 

Placing an object in a pouch follows the normal rules for interacting with Objects. Retrieving an item from a pouch requires you to use an action. The belt magically assists you in finding what you need within its contents, so you always know which pouch a given item is in. When you reach into a pouch for a specific item, the item is always magically on top.

The belt has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the belt ruptures and is destroyed. If the belt is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If a pouch is turned inside out, its contents spill forth, unharmed, and the pouch must be put right before it can be used again. If a breathing creature is placed within a pouch, the creature can survive for up to 10 minutes, after which time it begins to suffocate.

Placing the belt inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random Location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened. */
MagicItemsList["bone of animation"] = {
	name : "Bone of Animation",
	source : [["NHB", 16]],
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	description : "As an action, I can speak the command word and turn the bone into a skeleton for up to 1 hour, or when it drops to 0 HP. It is friendly, understands my languages, and obeys my verbal commands. It acts on its own turn with its own initiative.",
	descriptionFull : "This item appears to be a regular human upper arm bone. While holding the bone you can use an action to speak the command word and turn the bone into a skeleton. The skeleton reverts to bone form after 1 hour or when it drops to 0 hit points./n The skeleton is friendly to you and your companions for the duration. Roll initiative for the skeleton, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the skeleton, it defends itself from hostile creatures but otherwise takes no actions./n Once the bone is used, it can’t be used again until the next dawn.",
	action : [["action", ""]],
	usages : 1,
	recovery : "dawn",
	creaturesAdd : [["Arm Bone Skeleton"]],
	creatureOptions : [{
	name : "Arm Bone Skeleton",
	nameAlt : ["Skeleton"],
	source : [["NHB", 16], ["SRD", 346], ["M", 272]],
	eval : function(prefix) {
		Value(prefix + "Comp.Desc.Name", "Animated Arm Bone Skeleton");
	},
	size : 3, //Medium
	type : "Undead",
	alignment : "lawful evil",
	ac : 13,
	hp : 13,
	hd : [2, 8],
	speed : "30 ft",
	scores : [10, 14, 15, 6, 8, 5],
	damage_vulnerabilities : "bludgeoning",
	damage_immunities : "poison",
	condition_immunities : "exhaustion, poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 9,
	languages : "understands languages of animator but can't speak",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Shortsword",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "Finesse, light"
	}, {
		name : "Shortbow",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "80/320 ft",
		description : "Ammunition, two-handed",
	}],
	features : [{
		name : "Animated Skeleton",
		description : "It is friendly, understands my languages, and obeys my verbal commands. It acts on its own turn with its own initiative.\n The skeleton reverts to bone form after 1 hour or when it drops to 0 hit points.",
	}],
	}],
};
/* Bone of Animation
Wondrous item, uncommon (requires attunement)
This item appears to be a regular human upper arm bone. While holding the bone you can use an action to speak the command word and turn the bone into a skeleton. The skeleton reverts to bone form after 1 hour or when it drops to 0 hit points.
The skeleton is friendly to you and your companions for the duration. Roll initiative for the skeleton, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the skeleton, it defends itself from hostile creatures but otherwise takes no actions.
Once the bone is used, it can’t be used again until the next dawn. */
MagicItemsList["diamond of the ise rune"] = {
	name : "Diamond of the Ise Rune",
	source : ["NHB"],
	magicItemTable : "G",
	description : "I can use the  diamond as it is, or transfer its runic properties over to a suit of armor or weapon.",
	descriptionFull : "This triangular diamond measures about three inches on each side and is half an inch thick. The ise (ice) rune shimmers within its core, causing it to be slightly cold to the touch. The  diamond has the following properties, which work only while it's on your person.\n   " + toUni("Freeze") + ". As an action, you can freeze an object within 10 feet of you. The object must be material, and the freeze starts in a circle no larger than 1 foot in diameter.\n   " + toUni("Cold's Friend") + ". You have resistance to fire damage.\n   " + toUni("Fire Tamer") + ". As an action, you can extinguish any open flame within 10 feet of you. You choose how much fire to extinguish in that radius.\n   " + toUni("Gift of Ice") + ". You can transfer the  diamond's magic to a nonmagical item\u2014a weapon or a suit of armor\u2014by tracing the ise rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the  diamond is destroyed, and the rune appears in white on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Weapon.") + ". The weapon is now an uncommon magic weapon. It deals an extra 1d6 cold damage to any target it hits.\n \u2022 " + toUni("Armor.") + ". The armor is now a rare magic item that requires attunement. You have resistance to fire damage while wearing the armor.",
	choices : [" Diamond", "Transferred to a suit of armor", "Transferred to a weapon"],
	" diamond" : {
		name : " Diamond of the Ise Rune ",
		type : "wondrous item",
		rarity : "rare",
		description : "This triangular diamond gives me resistance to fire damage. As an action, I can use it to extinguish any open flame within 10 ft. I choose how much fire to extinguish in that radius. I can undertake an 8 hour ritual to transfer the rune to a suit of armor or weapon, see book.",
		attunement : true,
		dmgres : ["Fire"],
		action : [["action", ""]]
	},
	"transferred to a suit of armor" : {
		name : "Ise Rune Armor",
		type : "armor (any)",
		rarity : "rare",
		description : "This magic armor gives me resistance to fire damage.",
		attunement : true,
		dmgres : ["Fire"],
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			descriptionChange : ["prefix", "armor"],
			itemName1stPage : ["suffix", "Ise Rune"]
		}
	},
	"transferred to a weapon" : {
		name : "Ise Rune Weapon",
		type : "wondrous item",
		rarity : "uncommon",
		description : "This magic weapon deals +1d6 cold damage to any target it hits.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "Ise Rune"]
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*\bise\b)(?=.*(rune|runic)).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1d6 cold damage';
					}
				},
				'If I include the words "Ise Rune" in a the name of a weapon, it will be treated as the magic weapon Ise Rune Weapon, which deals +1d6 cold damage.'
			]
		}
	}
};
MagicItemsList["equestrian wraps"] = {
		name : "Equestrian Wraps",
		source : [["NHB"]],
		type : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		description : "While a horse or similar quadruped creature wears these leg wraps, their walking speed becomes 30 feet, unless their walking speed is higher, and their speed isn't reduced if they are encumbered or wearing heavy armor. In addition, they can jump three times the normal distance, though they can't jump farther than their remaining movement would allow.",
		speed : { walk : { spd : "fixed 30", enc : "fixed 30" } }
};
MagicItemsList["glass cat's eye"] = {
	name : "Glass Cat's Eye",
	source : ["NHB"],
	type : "wondrous item",
	rarity : "common",
	description : "While this trinket is on my person, I gain a +1 bonus to Perception and Insight skills.",
addMod : [
  { type : "skill", field : "perception", mod : 1, text : "I have a +1 bonus to Wisdom (Perception)." },
  { type : "skill", field : "insight", mod : 1, text : "I have a +1 bonus to Wisdom (Insight)." }
]
};
/* Glass Cat’s Eye
Wondrous item, minor tier, common
This marble-sized glass bauble is designed to appear as the eye of a cat. While holding it, you notice the iris reacts to changing amounts of light. While this trinket is on your person, you gain a +1 bonus to Wisdom (Perception) and Wisdom (Insight) checks. */
MagicItemsList["incremental grimoire, +1, +2, or +3"] = {
	name : "Incremental Grimoire, +1, +2, or +3",
	source : ["NHB"],
	type : "wondrous item",
	description : "While holding this book, I gain a bonus to spell attack rolls and to the saving throw DCs of my wizard spells, determined by the book's rarity: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull : "While holding this book, you gain a bonus to spell attack rolls and to the saving throw DCs of your wizard spells. The bonus is determined by the book's rarity: uncommon (+1), rare (+2), or very rare (+3).",
	attunement : true,
	weight : 2,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function(v) { return classes.known.wizard; },
	choices : ["+1 Book (uncommon)", "+2 Book (rare)", "+3 Book (very rare)"],
	"+1 book (uncommon)" : {
		name : "Incremental Grimoire +1",
		rarity : "uncommon",
		description : "While holding this book, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my wizard spells.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/wizard/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my wizard spells."
			]
		}
	},
	"+2 book (rare)" : {
		name : "Incremental Grimoire +2",
		rarity : "rare",
		description : "While holding this book, I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my wizard spells.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/wizard/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my wizard spells."
			]
		}
	},
	"+3 book (very rare)" : {
		name : "Incremental Grimoire +3",
		rarity : "very rare",
		description : "While holding this book, I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my wizard spells.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/wizard/).test(spellcasters)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my wizard spells."
			]
		}
	}
};
MagicItemsList["moonwater cup"] = {	
	name : "Moonwater Cup",
	source : ["NHB"],
	type : "wondrous",
	rarity : "uncommon",
	description : "As an action, I can speak the command word and pour a half-gallon of fresh water out of the cup. Once this special action is used, it can't be used again until the next dawn.",
	usages : 1,
	recovery : "dawn",
	additional: " Summon Water",
	action : [["action", "Summon Water (Half-gallon)"]],
};
/* Moonwater Cup
Wondrous item, common
As an action, I can speak the command word and pour a half-gallon of fresh water out of the cup. Once this special action is used, it can't be used again until the next dawn.
*/
MagicItemsList["oxhorn beehive"] = {
	name : "Oxhorn Beehive",
	nameTest : /^(?=.*(oxhorn|beehive))(?=.*(druidic focus|rod|wand|staff|totem)).*$/i,
	source : ["NHB"],
	type : "staff",
	description : "While holding this horn, I gain a +1 bonus to spell attack rolls. Once per dawn I can produce 1d4 ounces of honey, for cooking or to use as a salve. One ounce of this magical honey heals 1d4+1 hit points.",
	descriptionfull : "This focus buzzes softly and an inspection reveals a magical bee hive is inside. While I am holding this horn, I gain a +1 bonus to spell attack rolls. Once per dawn I can produce 1d4 ounces of honey, for cooking or to use as a salve. One ounce of honey heals 1d4+1 hit points.",
	weight : 1,
	usages : 1,
	recovery : "dawn",
	additional : "Produce 1d4 Honey",
	action : [["action", "Produce Honey"]],
	calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 1;
				},
				"I gain a +1 bonus to spell attack rolls."
			]
		}
};

GearList["honey bandage"] = {
    infoname : "Honey Bandage []",
    name : "Honey Bandage [heals 1d4+1]",
    source : ["NHB"],
    amount : "",
    weight : ""
};
MagicItemsList["robe of alacrity"] = {
    name: "Robe of Alacrity",
    source: ["NHB"],
    type: "wondrous",
    rarity: "very rare",
    description: "While wearing this robe, I have adv. on initiative and Perception and can cast certain spells. As a bonus action, I can activate the robe to double my walking speed and make opportunity attacks against me have disadvantage. I can end this effect with another bonus action. After the robe's magic has been used for a total of 10 minutes, it loses this power until I finish a long rest.",
    descriptionLong: "While wearing this robe, I have advantage on my initiative and Wisdom (Perception) checks. As an action, I can use it to cast either Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility. While I wear this robe, I can use a bonus action to activate the power of the robe. If I do, the robe doubles my walking speed, and any creature that makes an opportunity attack against me has disadvantage on the attack roll. I can use another bonus action to deactivate the robe. When the robe's property has been used for a total of 10 minutes, the magic ceases to function until I finish a long rest.",
    descriptionFull: "This elegant garment is made from exquisite cloth and adorned with arcane runes.\n   " + toUni("Alertness") + ". While wearing the robe, I have advantage on Wisdom (Perception) checks and on rolls for initiative.\n   " + toUni("Spells") + ". While wearing the robe, I can use an action to cast one of the following spells from it: Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility.\n   " + toUni("Alacrity") + ". As a bonus action, I can activate the power of the robe. If I do, the robe doubles my walking speed, and any creature that makes an opportunity attack against me has disadvantage on the attack roll. I can use another bonus action to deactivate the robe.\n   When the robe's property has been used for a total of 10 minutes, the magic ceases to function until I finish a long rest.",
    attunement: true,
    weight: 4,
    usages: 10,
    recovery: "long rest",
    additional: "minutes",
    limfeaname: "Robe of Alacrity",
    advantages: [["Initiative", true], ["Perception", true]],
    vision: [["Adv. on Perception checks", 0]],
	action: [["bonus action", " (start/stop)"]],
    spellcastingBonus: [{
            name: "Robe of Alacrity",
            spells: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
            selection: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
            times: 4
        }],
};
MagicItemsList["robe of the moon"] = {
		name : "Robe of the Moon",
		source : ["NHB"],
		type : "wondrous item",
		rarity : "uncommon",
		description : "As a reaction when a flying creature I see within 30 ft makes an attack roll against me, I can cause the robe to flare. The attacker has disadvantage, and must pass a DC 15 Con save or be blinded until the start of its next turn. This robe has 50 charges. As an action while wearing it, I can speak a command word to cause it to: shed 30-ft bright and 30-ft dim light, [1 charge] fire a 60-ft beam of light at 1 creature (DC 15 Con save or blinded 1 minute), or [5 charges] flare in a 30-ft cone (DC 15 Con save or blinded 1 minute). When all of the charges are expended, the robe becomes nonmagical clothing worth 50 gp.",
		attunement : true,
		weight : 4,
		usages : 50,
		recovery : "Never",
		action : [["action", ""],["reaction", " (vs. flying)"]]
	};
MagicItemsList["runic top"] = {
	name : "Runic Top",
	source : ["NHB"],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This magnificent child's toy has three spinner sides engraved with runes and one blank side. It can be used as the material component for the Augury spell and can be used to cast the Augury spell once per dawn.",
	descriptionFull : "This magnificent child's toy has three spinner sides engraved with runes spelling out 'Weal', 'Woe', and 'Weal and Woe'. The fourth side is blank. It can be used as the material component for the Augury spell and can be used to cast the Augury spell once per dawn.",
	attunement : false,
	weight : 3,
	extraLimitedFeatures : [{
		name : "Runic Top [Augury]",
		usages : 1,
		recovery : "dawn"
	}],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["augury"],
		selection : ["augury"],
		firstCol : "oncelr",
		times : 1
	}],
};
MagicItemsList["temperate bootstrap armband"] = {
	name : "Temperate Bootstrap Armband",
	source : ["NHB"],
	type : "wondrous item",
	rarity : "common",
	savetxt : { text : ["[Armband] comfortable in -20/120°"] },
	description : "This toughened bootstrap leather armband grants me environmental protection. While I wear it, I suffer no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit.",
	descriptionFull : "This simple leather armband is made from toughened bootstrap leather. It grants you environmental protection. While you wear it, you suffer no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit."
};
/* Temperate Bootstrap Armband
Wondrous item, common
This simple leather armband is made from toughened bootstrap leather. It grants you environmental protection. While you wear it, you suffer no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit. */
MagicItemsList["traveler's coin pouch"] = {	
		name : "Traveler's Coin Pouch",
		nameAlt : "Coin Pouch",
		source : [["NHB"]],
		type : "wondrous item",
		rarity : "uncommon",
		description : "This magical belt pouch can hold up to 30 lbs. of coins (1500 average sized coins) yet only weighs 5 lbs. When you use an action to press it against your belly, it affixes itself to you and turns invisible. You cannot access the pouch’s contents while it is affixed.",
		weight : 5,
		action : [["action", " (affix)"]]
};
/*  Traveler's Coin Pouch
Wondrous item, uncommon
This magical belt pouch can hold up to 30 lbs. of coins (1500 average sized coins) yet only weighs 5 lbs. When you use an action to press it against your belly, it affixes itself to you and turns invisible. You cannot access the pouch’s contents while it is affixed. */
MagicItemsList["unicorn queen's horn"] = {
	name : "Unicorn Queen's Horn",
	nameAlt : "Queen's Horn",
	source : ["NHB"],
	type : "weapon (shortsword)",
	rarity : "very rare",
	description : "This magnificent horn gifted from the Unicorn Queen retains some of her magical powers. While you wield it as a magical shortsword, you can cast the Detect Evil and Good spell at will. Healing Touch (3/Day). You can touch a creature with the horn as an action. The target magically regains 11 (2d8 + 2) hit points.",
	descriptionFull : "A unicorn's horn is the focus of its power, a shard of divine magic wrought in spiraling ivory. Unicorn horn weapons strike with divine force. This magnificent horn gifted from the Unicorn Queen retains some of her magical powers. While you wield it as a magical shortsword, you can cast the Detect Evil and Good spell at will. Healing Touch (3/Day). You can touch a creature with the horn as an action. The target magically regains 11 (2d8 + 2) hit points.",
	attunement : false,
	usages : 3,
	recovery : "dawn",
	additional : "Healing Touch",
	weight : 3,
	action : [["action", "Healing Touch (Queen's Horn)"]],
		spellcastingBonus : {
		name : "At will",
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		firstCol : "atwill"
	},
	weaponsAdd : ["Unicorn Queen's Horn"],
	weaponOptions : {
		baseWeapon : "shortsword",
		regExpSearch : /^(?=.*unicorn)(?=.*horn).*$/i,
		name : "Unicorn Queen's Horn",
		source : ["NHB"],
		description : "Finesse, Light ",
		modifiers : [0, 0]
	}
};
MagicItemsList["weavewear"] = { // Shiftweave from ERftLW
	name : "Weavewear",
	source : ["NHB"],
	type : "wondrous item",
	rarity : "common",
	description : "Up to five different outfits are embedded into these clothes. As a bonus action, I can speak its command word to transform the outfit into one of the other designs contained within. Regardless of its appearance, the outfit can't be anything but clothing or gain properties of other magical clothing.",
	descriptionFull : "When a suit of weavewear is created, up to five different outfits can be embedded into the cloth. While wearing the clothing, you can speak its command word as a bonus action to transform your outfit into your choice of one of the other designs contained within it. Regardless of its appearance, the outfit can't be anything but clothing. Although it can duplicate the look of other magical clothing, it doesn't gain their magical properties.",
	action : [["bonus action", ""]]
};
/* Weavewear
Wondrous item, common
When a suit of weavewear is created, up to five different outfits can be embedded into the cloth. While wearing the clothing, you can speak its command word as a bonus action to transform your outfit into your choice of one of the other designs contained within it. Regardless of its appearance, the outfit can't be anything but clothing. Although it can duplicate the look of other magical clothing, it doesn't gain their magical properties.  */
MagicItemsList["wristwatch compass"] = {
	name : "Wristwatch Compass",
	source : ["NHB"],
	type : "wondrous item",
	rarity: "common",
	description : "While wearing this wristwatch on the Material Plane, you can use an action to determine what time of day it is or to determine which way is north.",
	action : [["action", "Time/Find North (Wristwatch)"]]
};

// Add Magic Items: Weapons and Ammo
MagicItemsList["bonedusk quiver"] = {
    name: "Bonedusk Quiver",
    source: ["NHB"],
    type: "wondrous",
    rarity: "rare",
	description : "This quiver holds 13 magic arrows made from bone and an odd membrane for fletching. No other ammunition can be placed in the quiver. Any pieces of ammunition created by this quiver disintegrate when the attack is completed. The quiver regenerates the arrows at each dusk",
	attunement : false,
	usages : 1,
	recovery : "dusk",
	additional : "Regenerate 13 Arrows",
	weight : 2,
};
/* Bonedusk Quiver
Wondrous item, uncommon
This quiver holds 13 magic arrows made from bone and an odd membrane for fletching. No other ammunition can be placed in the quiver. Any pieces of ammunition created by this quiver disintegrates when the attack is completed. The quiver regenerates any used arrows at each dusk. */
MagicItemsList["bracer of knife throwing"] = {
	name : "Bracer of Knife Throwing",
	source : ["NHB"],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "This armband appears to have thin knives strapped to it. As an action, I can pull up to two magic knives from the bracer and immediately hurl them, making a ranged attack with each knife. A knife vanishes if I don't hurl it right away, and the knives disappear right after they hit or miss.",
	descriptionFull : "This armband appears to have thin knives strapped to it. As an action, you can pull up to two magic knives from the bracer and immediately hurl them, making a ranged attack with each knife. A knife vanishes if you don't hurl it right away, and the knives disappear right after they hit or miss. The bracer never runs out of knives.",
	attunement : true,
	action : [["action", ""]],
	weaponsAdd : ["Bracer of Knife Throwing"],
	weaponOptions : {
		baseWeapon : "dart",
		regExpSearch : /^(?=.*bracer)(?=.*throwing)(?=.*knife).*$/i,
		name : "Bracer of Knife Throwing",
		source : ["NHB"],
		range : "20/60 ft",
		description : "Finesse, light, thrown; As action, throw 2; Doesn't work with Attack action"
	}
};
MagicItemsList["casting net"] = {
	name : "Casting Net",
	source : ["NHB", 1],
	type : "weapon (net)",
	rarity : "uncommon",
	description : "When I make a two-handed attack with this net, I can target up to a Huge-sized creature. The sturdier fibers give it a DC 13, AC 13, and dealing 10 hp of slashing damage to destroy it. I may use an Action while holding the destroyed net to magically mend it.",
	descriptionFull : "When you make an attack with this net, you may use it two-handed to cause the net to spread in size, allowing you to target up to a Huge-sized creature. The shifting fibers of this net make it sturdier than an average net, requiring a DC 13 Strength check and needing to deal 10 hp of slashing damage to the net (AC 13) to destroy it. If the net has been destroyed, you may use an Action while holding the remnants to cause the net to magically mend itself.",
	tooltip : "Special: A Large (Huge if used two-handed) or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless. A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Dealing 10 slashing damage to the net (AC 13) also frees the creature without harming it, ending the effect and destroying the net. When I use an action, bonus action, or reaction to attack with a net, I can make only one attack regardless of the number of attacks I can normally make.",
	weight : 3,
	action : [["action", " (Mend)"]],
	weaponsAdd : ["Casting Net"],
	weaponOptions : {
		baseWeapon : "net",
		regExpSearch : /^(?=.*casting)(?=.*net).*$/i,
		name : "Casting Net",
		source : ["NHB", 1],
		description : "Thrown, only 1 attack, restrain up to Large [Versatile: Huge] creature (DC 13); "
		}
};
/* Casting Net
Martial weapon, ranged weapon, rare
3 lb. 	special, thrown (5/15 ft.)
This magical net has special fibers from rare ocean vegetations interwoven into it. When you make an attack with this net, you may use it two-handed to cause the net to spread in size, allowing you to target up to a Huge-sized creature. The shifting fibers of this net make it sturdier than an average net, requiring a DC 13 Strength check and needing to deal 10 hp of slashing damage to the net (AC 13) to destroy it. If the net has been destroyed, you may use an Action while holding the remnants to cause the net to magically mend itself.

Special.
A Large (Huge if used two-handed) or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Dealing 10 slashing damage to the net (AC 13) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.
*/
MagicItemsList["cloudsinger scimitar"] = {
	name : "Cloudsinger Scimitar",
	source : ["NHB"],
	type : "weapon (scimitar)",
	rarity : "very rare",
	description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon. It allows me to speak Auran, and softly sings warnings to me, granting me a +2 bonus to initiative while I am not incapacitated.",
	descriptionFull : "This djinn-crafted scimitar is perfectly balanced and lighter than air. You gain a +2 bonus to attack and damage rolls made with this magic weapon. It allows its wielder to speak Auran, and softly sings warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
	attunement : false,
	weight : 1,
	languageProfs : ["Auran"],
	addMod : [{ type : "skill", field : "Init", mod : 2, text : "While I carry the Cloudsinger Scimitar, it gently sings warnings to me, granting me a +2 bonus to initiative rolls." }],
	weaponsAdd : ["Cloudsinger Scimitar"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*cloudsinger)(?=.*scimitar).*$/i,
			name : "Cloudsinger Scimitar",
			source : ["NHB"],
			description : "Finesse, light; +2 initiative when not incapacitated",
			modifiers : [2, 2],
		}
};
MagicItemsList["forgeflame hammer"] = {
	name : "Forgeflame Hammer",
	nameAlt : "Forgeflame Hammer",
	source : ["NHB"],
	type : "weapon (mace)",
	rarity : "uncommon",
	description : "This forge hammer returns to my hand immediately after I use it to make a ranged attack. Once per dawn I can speak this hammer's command word and make a ranged weapon attack with it on a target within 120 ft. All between me and the target in a 5-ft wide line take 4d6 fire damage, DC 13 Dex save halves. If the hammer hits the target, it takes 1d6 bludgeoning and 4d6 fire damage.",
	descriptionFull : "This forge hammer is a magic weapon. It returns to the wielder's hand immediately after it is used to make a ranged attack. Hurl Flame. The wielder may speak its command word to transform it into a 5 feet wide line of fire that extends out from them to a target within 120 feet. Each creature in the line excluding the wielder and the target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, and half as much damage on a successful one. The fire line turns back into a hammer when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the hammer plus 4d6 fire damage. The hammer's property can't be used again until the next dawn.",
	attunement : false,
	usages : 1,
	recovery : "dawn",
	additional : "Hurl Flame",
	weight : 3,
	action : [["action", "Hurl Flame (Forgeflame Hammer)"]],
	weaponsAdd : ["Forgeflame Hammer"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*forgeflame)(?=.*hammer).*$/i,
		name : "Forgeflame Hammer",
		source : ["NHB"],
		range : "Melee, 30/120 ft",
		description : "Thrown; Returns immediately after ranged attack; Once per dawn special attack, see item description; ",
	}
};
/* Forgeflame Hammer
Simple weapon (hammer), melee weapon, major tier, uncommon
2 lb.     1d6 bludgeoning - thrown (30/120 ft.)
This hammer is a magic weapon. It returns to the wielder's hand immediately after it is used to make a ranged attack. 
Hurl Flame. The wielder may speak its command word to transform it into a 5 feet wide line of fire that extends out from them to a target within 120 feet. Each creature in the line excluding the wielder and the target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, and half as much damage on a successful one. The fire line turns back into a hammer when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the hammer plus 4d6 fire damage. The hammer's property can't be used again until the next dawn. */
MagicItemsList["half-gallon sword"] = {	
		name : "Half-gallon Sword",
		source : ["NHB"],
		type : "weapon (any sword)",
		rarity : "uncommon",
		description : "I have a +1 bonus to attack and damage rolls made with this magic sword. As an action, I can speak the command word, and pour a half-gallon of fresh water out of the pommel. Once this special action is used, it can't be used again until the next dawn.",
		usages : 1,
		recovery : "dawn",
		additional: " Summon Water",
		action : [["action", "Summon Water (Half-gallon)"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/half-gallon/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '1/dawn summon water';
					}
				},
				'If I include the word "Half-gallon" in a the name of a sword, it will be treated as the magic weapon Half-gallon Sword. It has +1 to hit and damage, and can summon water once per dawn'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/half-gallon/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			],
		}
};
MagicItemsList["knight's spear"] = {
	name : "Knight's Spear",
	source : ["NHB"],
	type : "weapon (spear)",
	rarity : "uncommon",
	description : "This spear transfers the life from those it kills to me, imbuing me with the stamina to keep fighting. When I use it to reduce the target to 0 HP, I gain 2d6 temporary HP. If I'm chosen by a Knightly Order to wield this spear, I gain a +2 bonus to attack and damage rolls made with it.",
	descriptionFull : "A weapon that transfers life from those it kills to its wielder, imbuing that individual with the stamina to keep fighting.\n   When you hit with a melee attack using this magic spear and reduce the target to 0 hit points, you gain 2d6 temporary hit points.\n   Any creature can wield the spear, but only the character chosen by a Knightly Order to wield it gains a +2 bonus to attack and damage rolls made with this magic weapon.",
	attunement : true,
	weight : 3,
	choices : ["Chosen by Knightly Order", "Not chosen by Knightly Order"],
	"chosen by knightly order" : {
		name : "Knight's\u200A Spear",
		weaponsAdd : ["Knight's Spear"],
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*knight's)(?=.*spear).*$/i,
			name : "Knight's Spear",
			source : ["NHB"],
			description : "Thrown, versatile (1d8); If used to reduce target to 0 HP, I gain 2d6 temp HP",
			modifiers : [2,2]
		}
	},
	"not chosen by knightly order" : {
		name : "Knight's\u200A\u200A Spear",
		weaponsAdd : ["Knight's Spear"],
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*knight's)(?=.*spear).*$/i,
			name : "Knight's Spear",
			source : ["NHB"],
			description : "Thrown, versatile (1d8); If used to reduce target to 0 HP, I gain 2d6 temp HP"
		}
	}
};
MagicItemsList["lifecatcher glaive"] = {
	name : "Lifecatcher Glaive",
	source : [["NodHB", 1]],
	type : "weapon (glaive)",
	rarity : "rare",
	attunement : true,
	description : "This magic glaive drains the life from those it kills and transfers that life to its wielder, imbuing that individual with the stamina to keep fighting. When I use it to reduce the target to 0 HP, I gain 2d6 temporary HP.",
	descriptionFull : "This magic glaive drains life from those it kills and transfers that life to its wielder, imbuing that individual with the stamina to keep fighting.\n   When you hit with a melee attack using this magic glaive and reduce the target to 0 hit points, you gain 2d6 temporary hit points.",
	weight : 6,
	weaponsAdd : ["Lifecatcher Glaive"],
	weaponOptions : {
		baseWeapon : "glaive",
		regExpSearch : /^(?=.*lifecatcher)(?=.*glaive).*$/i,
		name : "Lifecatcher Glaive",
		source : [["NHB", 1]],
		description : "Heavy, reach, two-handed; If used to reduce target to 0 HP, I gain 2d6 temp HP",
		}
};
MagicItemsList["moonlit bow"] = {
	name : "Moonlit Bow",
	source : ["NHB"],
	type : "weapon (shortbow)",
	rarity : "rare",
	description : "Simply drawing your fingers in the air near this finely crafted bow causes it to be strung with an arrow of lunar energy that deals 1d8 radiant damage. When drawn using both hands, the bow sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet.",
	attunement : true,
	weight : 2,
	weaponsAdd : ["Moonlit Bow"],
	weaponOptions : {
		baseWeapon : "shortbow",
		regExpSearch : /^(?=.*moonlit)(?=.*bow).*$/i,
		name : "Moonlit Bow",
		source : ["NHB"],
		damage : [1, 8, "radiant"],
		description : "Two-handed; creates magical ammunition"
	}
};
/* Moonlit Bow
Simple weapon (shortbow), ranged weapon, rare (requires attunement)
2 lb. 	1d8 radiant - (80/320 ft.), two-handed
Simply drawing your fingers in the air near this finely crafted bow causes it to be strung with an arrow of lunar energy that deals 1d8 radiant damage. When drawn using both hands, the bow sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet.
*/
MagicItemsList["quickdraw longbow"] = {
	name : "Quickdraw Longbow",
	source : ["NHB"],
	type : "weapon (longbow)",
		rarity : "very rare",
		description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, I can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", ""]],
		weaponsAdd : ["Quickdraw Longbow"],
		weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /^(?=.*quickdraw)(?=.*longbow).*$/i,
			name : "Quickdraw Longbow",
			source : ["NHB"],
			description : "Ammunition, heavy, two-handed; Extra attack as bonus action",
			modifiers : [2, 2]
		}
	};
MagicItemsList["red tiger scimitar"] = {
	name : "Red Tiger Scimitar",
	nameAlt : "Red Tiger",
	source : ["NHB"],
	type : "weapon (scimitar)",
	rarity : "rare",
		description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, this magic weapon deals +1d6 thunder damage to any target it hits.",
		descriptionFull : "This sword has a keen blade with a copper-red hue to it. The guard is formed like a claw which clutches at the blade. Its grip is wrapped with red and black leather in a striped pattern. I gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, this magic weapon deals +1d6 thunder damage to any target it hits.",
		attunement : true,
		weight : 3,
		weaponsAdd : ["Red Tiger Scimitar"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*tiger).*$/i,
			name : "Red Tiger Scimitar",
			source : ["NHB"],
			description : "Finesse, light; +1d6 Thunder Damage",
			modifiers : [1, 1]
		}
	};
MagicItemsList["sharkbane trident"] = {
	name : "Sharkbane Trident",
	source : [["NHB"]],
	type : "weapon (trident)",
	rarity : "rare",
	attunement : true,
	description : "As a bonus action, I can speak the command word of this magic trident, causing electrical current to arc from it. This current adds +2d6 lightning damage and shines bright light in a 40-ft radius and dim light for an additional 40 ft. The current lasts until I speak the command word again or drop or sheathe it",
	descriptionFull : "You can use a bonus action to speak this magic trident's command word, causing electrical current to arc between the tines. This electrical current sheds bright light in a 40-foot radius and dim light for an additional 40 feet. While the trident is energized, it deals an extra 2d6 lightning damage to any target it hits. The electrical current lasts until you use a bonus action to speak the command word again or until you drop or sheathe the trident.",
	action : [["bonus action", " (activate/end)"]],
	weight : 4,
	weaponsAdd : ["Sharkbane Trident"],
	weaponOptions : {
		baseWeapon : "trident",
		regExpSearch : /^(?=.*sharkbane)(?=.*trident).*$/i,
		name : "Sharkbane Trident",
		source : [["NHB"]],
		description : "Finesse, thrown, versatile (1d10); While active, +2d6 lightning damage",
		}
};
MagicItemsList["shield of forceful offense"] = {
	name : "Shield of Forceful Offense",
	source : ["NHB"],
	type : "improvised weapon/shield",
	rarity : "rare",
		description : "This shield is also a magical improvised weapon. I gain a +1 bonus to attack and damage rolls made with it, and it deals +1d4 force damage to any target it hits.",
		descriptionFull : "This shield is magically enchanted to also be used as an improvised weapon. You gain a +1 bonus to attack and damage rolls made with it. In addition, this shield deals an extra 1d4 force damage to any target it hits.",
		weight : 6,
		shieldAdd : "Shield of Forceful Offense",
		weaponsAdd : ["Shield of Forceful Offense"],
		weaponOptions : {
			regExpSearch : /^(?=.*forceful)(?=.*offense).*$/i,
			name : "Shield of Forceful Offense",
			source : ["NHB"],
			ability : 1,
			type : "Improvised Weapons",
			damage : [1, 4, "bludgeoning"],
			range : "Melee, 20/60 ft",
			description : "+1d4 Force damage;",
			modifiers : [1, 1],
		}
};
/* Shield of Forceful Offense
Armor (shield), Weapon (improvised), rare
6 lb. 	AC +2	1d4 bludgeoning - thrown (20/60 ft.)

This shield is magically enchanted to also be used as an improvised weapon. You gain a +1 bonus to attack and damage rolls made with it. In addition, this shield deals an extra 1d4 force damage to any target it hits.
*/
MagicItemsList["shockbeast bow"] = {
    name : "Shockbeast Bow",
    source : ["NHB"],
    type : "weapon (shortbow)",
    rarity : "rare",
    description : "This magical bow made from Zinogre parts deals an extra 1d4 lightning damage to any target it hits.",
    descriptionFull : "This magical bow, created from parts harvested from the frightful mountain shockbeast, Zinogre, deals an extra 1d4 lightning damage to any target it hits.",
    attunement : false,
    weight : 2,
    weaponsAdd : ["Shockbeast Bow"],
    weaponOptions : {
        baseWeapon : "shortbow",
        regExpSearch : /^(?=.*shockbeast).*$/i,
        name : "Shockbeast Bow",
        source : ["NHB"],
        damage : [1, 6, "piercing"],
        description : "Ammunition, two-handed; +1d4 lightning; "
        },
};
/* Shockbeast Bow
Simple weapon (shortbow), ranged weapon, rare
2 lb. 	1d8 piercing - (80/320 ft.), two-handed
This magical bow, created from parts harvested from the frightful mountain shockbeast, Zinogre, deals an extra 1d4 lightning damage to any target it hits. */
MagicItemsList["spiked gauntlets"] = {
	name : "Spiked Gauntlets",
	source : ["NHB"],
	type : "weapon (simple)",
    rarity : "very rare",
    description : "I have advantage on Strength (Athletics) checks to climb. I add my Dex mod as well as my Str mod to attack and damage rolls with these gauntlets.",
    description : "These gauntlets grant the wielder advantage on Strength (Athletics) checks to climb. They also increase the damage the wielder can deal, adding Dexterity modifier in addition to Strength modifier to attack and damage rolls with these gauntlets.",
	weaponsAdd : ["Spiked Gauntlets"],
    weaponOptions : {
		regExpSearch : /^(?=.*spiked)(?=.*gauntlets).*$/i,
		name : "Spiked Gauntlets",
		source : ["NHB"],
		ability : 1,
		type : "Simple",
		damage : [1, 6, "piercing"],
		modifiers : ["Dex", "Dex"],
		range : "Melee",
		description : "Light; ",
		abilitytodamage : true,
		monkweapon : true,
		},
};
MagicItemsList["striking gloves"] = {
	name : "Striking Gloves",
	source : [["NHB", 169]],
	type : "wondrous item",
	rarity : "rare",	
	notLegalAL : true,
	attunement : true,
	description : "While wearing these gloves, my Con increases by 2 (to max 20). After hitting with an unarmed strike while wearing these gloves, i can deal an extra 1d6 force damage to target and regain an equal amount of HP.",
	descriptionFull : "While wearing these gloves, you gain the following benefits:\n \u2022 Your Constitution score increases by 2, to a maximum of 20.\n \u2022 After making a successful unarmed strike while wearing these gloves, you can use the gloves to deal an extra 1d6 force damage to the target, and you regain a number of hit points equal to the force damage dealt.",
	scores : [0, 0, 2, 0, 0, 0]
	weaponsAdd : ["Striking Gloves"],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*gloves)(?=.*striking).*$/i,
		name : "Striking Gloves",
		source : [["NHB", 169]],
		description : "+1d6 force damage"
	}]
};
/* Striking Gloves
Wondrous item, rare (requires attunement)
While wearing these gloves, you gain the following benefits:
• Your Constitution score increases by 2, to a maximum of 20.
• After making a successful unarmed strike while wearing these gloves, you can use the gloves to deal an extra 1d6 force damage to the target, and you regain a number of hit points equal to the force damage dealt. */
MagicItemsList["tigersong blade"] = {
	name : "Tigersong Blade",
	nameAlt : "Tigersong",
	source : ["NHB"],
		type : "weapon (any sword)",
		rarity : "very rare",
		attunement : true,
		description : "As a bonus action, I can speak the command word of this magic sword, causing it to hum. The hum lasts until I speak the command word again as a bonus action or sheathe it. This hum deals +2d6 thunder damage to any target it hits. Additionally, immediately after I use the Attack action with the sword, I can use my reaction to enable one ally within 30 feet that can hear me to use its reaction to make one weapon attack.",
		action : [["bonus action", " (activate/end)"], ["reaction", " (ally weapon attack)"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier|catana/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier|catana/i).test(v.baseWeaponName) && (/^(?=.*tiger)(?=.*song).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'While active, +2d6 thunder damage, Use reaction for ally within 30 ft use reaction to make weapon attack';
					}
				},
				'If I include the word "Tigersong" in a the name of a sword, it will be treated as the magic weapon Tigersong Blade. When the command word is spoken, the blade hums, adding +2d6 thunder damage on a hit and allows ally attacks.'
			]
		}
	};
MagicItemsList["tiger stripe catana"] = {
	name : "Tiger Stripe Catana",
	nameAlt : "tiger stripe",
	source : ["NHB"],
	type : "weapon (catana)",
	rarity : "rare",
		description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, this magic weapon deals +1d6 thunder damage to any target it hits.",
		descriptionFull : "This sword has a keen blade with a copper-red hue to it. The guard is formed like a claw which clutches at the blade. Its grip is wrapped with red and black leather in a striped pattern. I gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, this magic weapon deals +1d6 thunder damage to any target it hits.",
		attunement : true,
		weight : 3,
		weaponsAdd : ["Tiger Stripe Catana"],
		weaponOptions : {
			baseWeapon : "catana",
			regExpSearch : /^(?=.*catana)(?=.*tiger).*$/i,
			name : "Tiger Stripe Catana",
			source : ["NHB"],
			description : "Finesse, Versatile (1d10); +1d6 Thunder Damage",
			modifiers : [1, 1]
		},
};
MagicItemsList["unicorn queen's bow"] = {
		name : "Unicorn Queen's Bow",
		source : ["NHB"],
		type : "weapon (shortbow)",
		rarity : "very rare",
		description : "When I attack with this shortbow and say its command phrase, I make the target my sworn enemy if I don't have one already for 7 days or until it dies. Attacks with this bow vs. it get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, I have disadv. when I use other weapons.",
		descriptionLong : "When I use this shortbow to make a ranged attack and say its command phrase \"Swift death to you who have wronged me.\", the target of that attack becomes my sworn enemy until it dies or until dawn seven days later. I can have only one such sworn enemy at a time and when it dies, I can choose a new one after the next dawn. My ranged attack rolls with this weapon against my sworn enemy have advantage, do +3d6 piercing damage, ignore all cover except full, and don't suffer disadvantage due to long range. While my sworn enemy lives, I have disadvantage on attack rolls with all other weapons.",
		descriptionFull : "A unicorn's horn is the focus of its power, a shard of divine magic wrought in spiraling ivory. Unicorn horn weapons strike with divine force. This magnificent horn-bow gifted from the Unicorn Queen retains some of her magical powers. When you nock an arrow on this bow, it whispers in Elvish, \"Swift defeat to my enemies.\" When you use this weapon to make a ranged attack, you can, as a command phrase, say, \"Swift death to you who have wronged me.\" The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.",
		attunement : true,
		weight : 2,
		weaponsAdd : ["Unicorn Queen's Bow"],
		weaponOptions : {
			baseWeapon : "shortbow",
		regExpSearch : /^(?=.*queen's)(?=.*bow).*$/i,
			name : "Unicorn Queen's Bow",
			source : ["NHB"],
			description : "Ammunition, two-handed; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties"
		}
};
MagicItemsList["weapon of echoes"] = {
		name : "Weapon of Echoes",
		nameTest : "of Echoes",
		source : ["NHB"],
		type : "weapon (any)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "HP lost to this weapon can be regained only by resting. Once per turn, I can echo-wound a target hit with this weapon. At the start of its turn, it takes 1d4 necrotic damage per such echo-wound, and then makes a DC 15 Con save to stop all echo-wounds on itself. " + (typePF ? "It or another can stop them as an action (DC 15 Medicine)." : "Alternatively, the target or another can stop them with an action (DC 15 Medicine check)."),
		descriptionLong : "Hit points lost to this magic weapon can be regained only through a short or long rest, not by regeneration, magic, or other means. Once per turn, when I hit a creature with this weapon, I can echo-wound the target. At the start of each of the echoed creature's turns, it takes 1d4 necrotic damage for each time I've echoed it, and it can then make a DC 15 Constitution save to end the effect of all such echo-wounds on itself. Alternatively, the echoed creature, or another within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check to end the effect of all such echo-wounds on it.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"],
			},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && (/echoes/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Damage can only be healed by resting; Once per turn, echo-wound target';
					}
				},
				'If I include the words "of Echoes" in a the name of a weapon, it will be treated as the magic weapon Weapon of Echoes. Damage by the weapon can only be regained with a short or long rest. Once per turn when I hit with the weapon, I can inflict a lingering echo-wound on a target, causing it pain every turn thereafter.'
			]
		}
};
MagicItemsList["whip of red shadows"] = {
	name : "Whip of Red Shadows",
	source : ["NHB"],
	type : "weapon (whip)",
	rarity : "legendary",
	description : "This whip has a +2 bonus on to hit and damage and deals +1d6 lightning damage. A critical hit rips the creature's shadow, preventing it from regaining hit points until the shadow is restored. I have advantage on attack rolls against shadowripped targets. A torn shadow can be healed with a remove curse, greater restoration, or wish spell; otherwise it must be allowed to heal naturally by completing a long rest.",
	descriptionFull : "This is a finely crafted leather whip handle with what appears to be a lash of softly glowing light attached to it. You have a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 1d6 lightning damage. On a successful critical hit, it tears away the victim's shadow, leaving behind a weeping scarlet silhouette in its wake as the victim's actual shadow merges with the whip. Until the shadow is healed, you have advantage on attack rolls against the victim and the victim can not regain hit points. A torn shadow can be healed with a remove curse, greater restoration, or wish spell; otherwise it must be allowed to heal naturally by completing a long rest.",
	attunement : true,
	weaponsAdd : ["Whip of Red Shadows"],
	weaponOptions : {
		baseWeapon : "whip",
		regExpSearch : /^(?=.*whip)(?=.*red)(?=.*shadows).*$/i,
		name : "Whip of Red Shadows",
		source : ["NHB"],
		description : "Finesse, reach; +1d6 lightning damage; crit does shadowrip = Adv. attacks, can't regain hp",
		modifiers : [2,2],
	},
};
MagicItemsList["xornclaw dagger"] = {
	name : "Xornclaw Dagger",
	source : ["NHB", 86],
	type : "weapon (dagger)",
	rarity : "rare",
	magicItemTable : "G",
	description : "This magical dagger is made from a Xorn's claw. While I'm attuned to it, I have tremorsense out to a range of 30 ft and I can mentally command it to detect the type and quantity of precious metals and stones, such as coins and gems, within 60 ft of the dagger.",
	descriptionFull : "This rare magic item made from a Xorn's claw requires attunement. A creature attuned to it gains tremorsense out to a range of 30 feet.\n Treasure Sense. While you are attuned to this dagger you can use an action to mentally command it to detect precious metals and stones, such as coins and gems. You learn the kind and number of such objects within 60 feet of the dagger.",
	attunement : true,
	weight : 1,
	action : [["action", " (treasure sense)"]],
	vision : [["Tremorsense", 30]],
	weaponsAdd : ["Xornclaw Dagger"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*xornclaw)(?=.*dagger).*$/i,
		name : "Xornclaw Dagger",
		source : [["NHB", 86]],
	},
};
/* Xornclaw Dagger
Weapon (dagger), rare (requires attunement)
Simple weapon, melee weapon
1 lb. 	1d4 piercing - finesse, light, thrown (20/60 ft.)

This rare magic item made from a Xorn's claw requires attunement. A creature attuned to it gains tremorsense out to a range of 30 feet.
Treasure Sense. While you are attuned to this dagger you can use an action to mentally command it to detect precious metals and stones, such as coins and gems. You learn the kind and number of such objects within 60 feet of the dagger.  */
MagicItemsList["treasure sense dagger"] = {
	name : "Treasure Sense Dagger",
	source : ["NHB", 86],
	type : "weapon (dagger)",
	rarity : "rare",
	attunement : true,
	description : "This magical dagger is made from a Xorn's claw. I gain a +2 bonus to attack and damage rolls made with the dagger. While I'm attuned to it,  I can mentally command it to detect the type and quantity of precious metals and stones, such as coins and gems, within 60 ft of the dagger.",
	descriptionFull : "This rare magic item made from a Xorn's claw requires attunement. You gain a +2 bonus to attack and damage rolls made with the dagger.\n Treasure Sense. While you are attuned to this dagger you can use an action to mentally command it to detect precious metals and stones, such as coins and gems. You learn the kind and number of such objects within 60 feet of the dagger.",
	weight : 1,
	action : [["action", " (treasure sense)"]],
	weaponsAdd : ["Treasure Sense Dagger"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*treasure)(?=.*sense).*$/i,
		name : "Treasure Sense Dagger",
		source : [["NHB", 86]],
		modifiers : [2, 2]
	},
};
/* Treasure Sense Dagger
Weapon (dagger), rare (requires attunement)
Simple weapon, melee weapon
1 lb. 	1d4 piercing - finesse, light, thrown (20/60 ft.)

This rare magic item made from a Xorn's claw requires attunement.
You gain a +2 bonus to attack and damage rolls made with the dagger.
Treasure Sense. While you are attuned to this dagger you can use an action to mentally command it to detect precious metals and stones, such as coins and gems. You learn the kind and number of such objects within 60 feet of the dagger.  */

// Add Non-damaging spells
// Cantrip
SpellsList["encourage"] = {
	name : "Encourage",
	classes : ["cleric", "druid"],
	source : ["NHB"],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "1 creature that has at least 1 HP gains (spellcasting ability modifier + proficieny bonus) temp HP start of each of its turns",
	descriptionFull : "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to your spellcasting ability modifier plus your proficiency bonus at the start of each of its turns. The temporary hit points are lost when the spell ends."
};
// Level 1
SpellsList["augmented alacrity"] = {
	name : "Augmented Alacrity",
	classes : ["artificer", "bard", "sorcerer", "warlock", "wizard"],
	source : [["NHB", 186]],
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a pinch of dried tea leaves",
	duration : "1 h",
	description : "1+1/SL willing creature has advantage on its next initiative roll during the duration",
	descriptionFull : "You touch a creature and give it a small amount of foresight that enables it to react quickly in battle. The target has advantage on the next initiative roll it makes before the duration expires.\n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can touch and affect one extra creature for each slot level above 1st."
};
/* Augmented Alacrity
1st-level enchantment
Casting Time: 1 action
Range: Touch
Components: V, S, M (a pinch of dried tea leaves)
Duration: 1 hour
You touch a creature and give it a small amount of foresight that enables it to react quickly in battle.
The target has advantage on the next initiative roll it makes before the duration expires.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can touch and affect one extra creature for each slot level above 1st. 
Classes: Artificer, Bard, Sorcerer, Warlock, Wizard
*/
SpellsList["call nature spirits"] = {
	name: "Call Nature Spirits",
	classes: ["druid", "ranger"],
	source: ["NHB"],
	ritual: true,
	level: 1,
	school: "Trans",
	time: "1 min",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Call nature spirits to aid you with camping or finding food/drink/tracks/shelter; see description",
	descriptionFull: "You call out to the spirits of nature to aid you. When you cast this spell, choose up to three of the following effects:\n  \u2022 If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again.\n  \u2022 If there is edible forage within range, you know it and where to find it.\n  \u2022 If there is clean drinking water within range, you know it and where to find it.\n  \u2022 If there is suitable shelter for you and your companions with range, you know it and where to find.\n  \u2022 Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption.\n  \u2022 Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish."
};
SpellsList["connected circumstances"] = {
	name : "Connected Circumstances",
	source : ["NHB"],
	classes : ["cleric", "warlock", "wizard"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "1 h",
	save : "Cha",
	description : "2 crea save or share damage & healing; adv. on save if hostile; dis. on save if charmed",
	descriptionFull : "Choose two creatures that you can see. Both creatures must make Charisma saving throws, and they do so with advantage if they are hostile to you. If a creature is charmed by you, it has disadvantage on this saving throw. If both creatures fail their saving throws, then their circumstances are now connected." + "\n " + "\u2022 Whenever one of the creatures takes damage, the other creature takes an identical amount of damage, unless both creatures took damage from the same source." + "\n " + "\u2022 Whenever one of the creatures regains hit points, the other creature regains an identical number of hit points, unless both creatures regained hit points from the same source." + "\n   " + "The two target creatures remain connected for the duration of the spell, even if both targets are on different planes of existence."
};
SpellsList["curative concoction"] = {
	name : "Curative Concoction",
	classes : ["warlock", "wizard"],
	source : ["NHB"],
	level : 1,
	school : "Conj",
	time : "1 min",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Alchemist's supplies",
	duration : "24 h",
	description : "Make vial with alchemist's supplies; heals 2d4+2 HP as an action; if not used, disappears after 24 h",
	descriptionFull : "You create a healing elixir in a simple vial that appears in your hand. The elixir retains its potency for the duration or until it's consumed, at which point the vial vanishes." + "\n   " + "As an action, a creature can drink the elixir or administer it to another creature. The drinker regains 2d4 + 2 hit points."
};
SpellsList["dictated dislocation"] = {
	name : "Dictated Dislocation",
	classes : ["artificer", "bard", "warlock", "wizard"],
	source : ["NHB"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 humanoid save or move its speed to where I choose and drop held items, if chosen (charm effect)",
	descriptionFull : "Your gesture forces one humanoid you can see within range to make a Constitution saving throw. On a failed save, the target must use it's reaction to move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding. This spell has no effect on a humanoid that is immune to being charmed."
};
SpellsList["insidious innuendo"] = {
	name : "Insidious Innuendo",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["NHB"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or incapacitated and end of each turn 1d12 Psychic damage, after which it can save to end",
	descriptionFull : "You unleash a torrent of conflicting thoughts in the mind of one creature you can see within range, impairing its ability to make decisions. The target must succeed on a Wisdom saving throw or be incapacitated. At the end of each of its turns, it takes 1d12 psychic damage, and it can then make another Wisdom saving throw. On a success, the spell ends on the target."
};
SpellsList["magical melee"] = {
	name : "Magical Melee",
	classes : ["artificer", "wizard"],
	source : ["NHB"],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a simple or martial weapon",
	duration : "Conc, 1 m",
	description : "1 wea gain proficiency and bonus 1d4+1 force damage. SL2: conc, 10 min | SL4: conc, 1 hour",
	descriptionFull : "You channel arcane energy into one simple or martial weapon you're holding. Until the end of your current turn, you are considered proficient with it and if the weapon isn't magical, it becomes a magic weapon for the spell's duration. Until the spell ends, when you attack with this magic weapon, you can use your Intelligence modifier instead of Strength or Dexterity modifier for the attack and damage rolls. You deal an extra 1d4+1 force damage to any target you hit with the weapon." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd or 3rd level, you can maintain your concentration on the spell for up to 10 minutes. When you use a spell slot of 4th level or higher, you can maintain your concentration on the spell for up to 1 hour."
};
SpellsList["otherworldly choir"] = {
	name : "Otherworldly Choir",
	classes : ["bard"],
	source : ["NHB"],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	save: "Cha",
	description : "Use bns a to make 1 crea in range save or be friendly for 1 h; I adv on Cha (Performance) checks",
	descriptionFull : "Music of a style you choose fills the air around you in a 30-foot radius. The music spreads around corners and can be heard from up to 100 feet away. The music moves with you, centered on you for the duration." + "\n   " + "Until the spell ends, you make Charisma (Performance) checks with advantage. In addition, you can use a bonus action on each of your turns to beguile one creature you choose within 30 feet of you that can see you and hear the music. The creature must make a Charisma saving throw. If you or your companions are attacking it, the creature automatically succeeds on the saving throw. On a failure, the creature becomes friendly to you for as long as it can hear the music and for 1 hour thereafter. You make Charisma (Deception) checks and Charisma (Persuasion) checks against creatures made friendly by this spell with advantage."
};
SpellsList["piloting pointer"] = {
	name: "Piloting Pointer",
	classes: ["artificer", "bard", "cleric", "druid", "wizard"],
	source: ["NHB"],
	ritual: true,
	level: 1,
	school: "Div",
	time: "1 min",
	range: "5 ft",
	components: "V,S",
	duration: "Conc, 8 h",
	description: "Tiny incorporeal arrow directs you to one major landmark you name that is on the same plane",
	descriptionFull: "You create a Tiny incorporeal arrow of shimmering light in an unoccupied space you can see within range. The arrow exists for the duration, but it disappears if you teleport or you travel to a different plane of existence.\n   When the arrow appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the arrow, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you.\n   If you don't move toward the arrow, it remains in place until you do and beckons for you to follow once every 1d4 minutes."
};
SpellsList["rapid rise"] = {
	name : "Rapid Rise",
	classes : ["artificer", "bard", "ranger", "sorcerer", "wizard"],
	source : ["NHB"],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "10 ft",
	components : "V",
	duration : "Instantaneous",
	description : "Any creatures within range awaken and can then stand up from prone without expending movement",
	descriptionFull : "Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
};
// Level 2
SpellsList["perpetual progress"] = {
	name : "Perpetual Progress",
	classes : [["artificer", "druid", "ranger", "sorcerer", "wizard"]],
	source : [["NHB", 133]],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	compMaterial: "a cockroach (dead or alive)",
	duration: "Conc, 1 m",
	description : "For the duration, no extra movement cost to crawl, climb, squeeze, swim, or move across difficult terrain",
	descriptionFull : "For the duration, it does not cost you extra movement to crawl, climb, squeeze, swim, or move across difficult terrain."
};
/* Perpetual Progress
2nd-level transmutation
Casting Time: 1 bonus action
Range: Self
Components: S, M (a cockroach, dead or alive)
Duration: Concentration, up to 1 minute
For the duration, it does not cost you extra movement to crawl, climb, squeeze, swim, or move across difficult terrain.
Classes: Artificer, Druid, Ranger, Sorcerer, Wizard */
SpellsList["servant swarm"] = {
    name: "Servant Swarm",
    classes: ["warlock", "wizard"],
    source: ["NHB"],
    level: 2,
    school: "Conj",
    time: "1 min",
    range: "Touch",
    components: "V,S",
    duration: "Conc, 1 h",
    description : "Summon 3+1/SL familiars as Find Familiar; can see through their eyes and deliver touch spells; see B",
    descriptionFull: "You temporarily summon three familiars\u2014spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the find familiar spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the find familiar spell or similar means, then one fewer familiars are conjured by this spell.\n   Familiars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you.\n   When you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd."
};
SpellsList["torporous tonic"] = {
	name : "Torporous Tonic",
	source : ["NHB"],
	classes : ["artificer", "bard", "warlock", "wizard"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "20 ft",
	components : "V,S,M",
	compMaterial : "A container of liquid",
	duration : "1 min",
	save : "Int",
	description : "1 crea falls unconscious if less than 9d8+3d8/SL HP; drowsy if higher; see book",
	descriptionFull : "You open a liquid-filled container and a sandy brown smoke flows from you to a target creature. Roll 9d8; if the target creature has fewer current hit points than the total, then it falls unconscious. The target remains unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. If the target creature has more hit points than the rolled total, then it becomes drowsy and its speed is halved, it can’t take reactions, and it can’t make more than one melee or ranged attack during its turn. The target remains drowsy until it takes damage or until the spell ends." + "\n   " + "Undead and creatures that are immune to being charmed aren’t affected by this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, roll an additional 3d8 for each slot level above the 2nd."
};
SpellsList["tremorsense"] = {
	name : "Tremorsense",
	classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source : [["NHB", 133]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration: "1 h",
	description : "1 willing creature has tremorsense 30 ft + 10 ft/SL for the duration",
	descriptionFull : "You touch a willing creature to grant it the ability to detect and pinpoint the origin of vibrations within a specific radius. For the duration, that creature has tremorsense out to a range of 30 feet.\n At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the range of the tremorsense increases by 15 feet for every slot level above 2nd."
};
/* Tremorsense
2nd-level transmutation
Casting Time: 1 action
Range: Touch
Components: V, S
Duration: 1 hour
You touch a willing creature to grant it the ability to detect and pinpoint the origin of vibrations within a specific radius. For the duration, that creature has tremorsense out to a range of 30 feet.
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the range of the tremorsense increases by 15 feet for every slot level above 2nd.
Classes: Artificer, Druid, Ranger, Sorcerer, Wizard */
// Level 3
SpellsList["shift shape"] = {
	name : "Shift Shape",
	classes : ["druid", "ranger", "sorcerer"],
	source : ["NHB"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "1 creature save or transformed into beast of my choice of CR 1 or lower without flight; charmed if not immune",
	descriptionFull : "This spell transforms a creature you can see within range into a new beast form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw." + "\n   " + "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast of CR 1 or less that does not have a fly speed. While in this new form, the target is charmed by you and views you as a trusted ally. The target can understand simple commands such as “attack” or “stay.” The charm affects creatures that are immune to charm in their normal form. The charm ends immediately when the target reverts to its normal form." + "\n   " + "The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The creature's gear melds into its new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment." + "\n   " + "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form."
};
// Level 4
SpellsList["timely transport"] = { // Galder's Speedy Courier from LLoK
    name: "Timely Transport",
    classes: ["artificer", "warlock", "wizard"],
    source: ["NHB"],
    level: 4,
    school: "Conj",
    time: "1 a",
    range: "10 ft",
    components: "V,S,M\u2020",
    compMaterial: "25 gp, or mineral goods of equivalent value, which the spell consumes",
    duration: "10 min",
	description: "Send 3\xD73\xD73 ft chest of items I put in it to named crea on same plane; SL8: other plane (25gp cons.)",
	descriptionMetric : "Send 1\xD71\xD71 m chest of items I put in it to named crea on same plane; SL8: other plane (25gp cons.)",
    descriptionFull: "You summon a Small air elemental to a spot within range. The air elemental is formless, nearly transparent, immune to all damage, and cannot interact with other creatures or objects. It carries an open, empty chest whose interior dimensions are 3 feet on each side. While the spell lasts, you can deposit as many items inside the chest as will fit. You can then name a living creature you have met and seen at least once before, or any creature for which you possess a body part, lock of hair, clipping from a nail, or similar portion of the creature's body.\n   As soon as the lid of the chest is closed, the elemental and the chest disappear, then reappear adjacent to the target creature. If the target creature is on another plane, or if it is proofed against magical detection or location, the contents of the chest reappear on the ground at your feet.\n   The target creature is made aware of the chest's contents before it chooses whether or not to open it, and knows how much of the spell's duration remains in which it can retrieve them. No other creature can open the chest and retrieve its contents. When the spell expires or when all the contents of the chest have been removed, the elemental and the chest disappear. The elemental also disappears if the target creature orders it to return the items to you. When the elemental disappears, any items not taken from the chest reappear on the ground at your feet." + AtHigherLevels + "When you cast this spell using an 8th-level spell slot, you can send the chest to a creature on a different plane of existence from you."
};
// Level 5
SpellsList["shinescale's claw"] = {
	name : "Shinescale's Claw",
	nameAlt : "Dragon's Claw",
	classes : ["artificer", "sorcerer", "wizard"],
	source : [["NHB"]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a draconic scale and a leather glove",
	duration : "Conc, 1 min",
	description : "Large claw attacks, pushes, grapples or shields, see descrip; AC 20, my max HP; bns a move 60 ft",
	descriptionFull : "You create a Large claw of shimmering, translucent force in an unoccupied space that you can see within range. The claw lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand." + "\n   " + "The claw is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The claw doesn't fill its space." + "\n   " + "When you cast the spell and as a bonus action on your subsequent turns, you can move the claw up to 60 feet and then cause one of the following effects with it." + "\n   " + "Slashing Claw. The claw strikes one creature or object within 5 feet of it. Make a melee spell attack for the claw using your game statistics. On a hit, the target takes 4d8 force damage." + "\n   " + "Forceful Claw. The claw attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the claw's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the claw pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The claw moves with the target to remain within 5 feet of it." + "\n   " + "Grasping Claw. The claw attempts to grapple a Huge or smaller creature within 5 feet of it. You use the claw's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the claw is grappling the target, you can use a bonus action to have the claw crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier." + "\n   " + "Interposing Claw. The claw interposes itself between you and a creature you choose until you give the claw a different command. The claw moves to stay between you and the target, providing you with half cover against the target. The target can't move through the claw's space if its Strength score is less than or equal to the claw's Strength score. If its Strength score is higher than the claw's Strength score, the target can move toward you through the claw's space, but that space is difficult terrain for the target." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage from the Slashing Claw option increases by 2d8 and the damage from the Grasping Claw increases by 2d6 for each slot level above 5th."
};
/* Shinescale's Claw
5th-level evocation
Casting Time: 1 action
Range: 120 feet
Components: V, S, M (a draconic scale and a leather glove)
Duration: Concentration, up to 1 minute

You create a Large claw of shimmering, translucent force in an unoccupied space that you can see within range. The claw lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.
The claw is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The claw doesn't fill its space.
When you cast the spell and as a bonus action on your subsequent turns, you can move the claw up to 60 feet and then cause one of the following effects with it.
Slashing Claw.
The claw strikes one creature or object within 5 feet of it. Make a melee spell attack for the claw using your game statistics. On a hit, the target takes 4d8 force damage.
Forceful Claw.
The claw attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the claw's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the claw pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The claw moves with the target to remain within 5 feet of it.
Grasping Claw.
The claw attempts to grapple a Huge or smaller creature within 5 feet of it. You use the claw's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the claw is grappling the target, you can use a bonus action to have the claw crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.
Interposing Claw.
The claw interposes itself between you and a creature you choose until you give the claw a different command. The claw moves to stay between you and the target, providing you with half cover against the target. The target can't move through the claw's space if its Strength score is less than or equal to the claw's Strength score. If its Strength score is higher than the claw's Strength score, the target can move toward you through the claw's space, but that space is difficult terrain for the target.

At Higher Levels. 
When you cast this spell using a spell slot of 6th level or higher, the damage from the slashing claw option increases by 2d8 and the damage from the grasping claw increases by 2d6 for each slot level above 5th. */

// Assorted damage
SpellsList["arcane barrage"] = { // Ice Barrage (Knuckleheads) with choose your own damage
	name: "Arcane Barrage",
	classes: ["sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90 ft",
	components: "V,S",
	description: "Fling arcane projectile 2d4 Bludgeoning/Piercing/Slashing dmg; projectiles at same or different targets; CL5:2, CL11:3, CL17:4 projectiles",
	descriptionCantripDie: "Fling `CD` arcane projectile 2d4 Bludge./Pierce./Slash. dmg; projectiles at same or different targets;",
	descriptionFull: "I conjure arcane projectiles and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning, piercing, or slashing damage (chosen when the spell is cast.)" + "\n   " + AtHigherLevels + "The spell creates more than one projectile when I reach higher levels: two projectiles at 5th level, three projectiles at 11th level, and four projectiles at 17th level. I can direct the projectiles at the same target or at different ones. Make a separate attack roll for each projectile."
},
WeaponsList["arcane barrage"] = { // Ice Barrage (Knuckleheads) with choose your own damage
	regExpSearch : /^(?=.*arcane)(?=.*barrage).*$/i,
	name: "Arcane Barrage",
	source: ["NHB"], 
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "B/P/S"],
	range: "90 ft",
	description: "Choose B/P/S damage when cast; Each 2d4 requires separate rolls",
	SpellsList: "arcane projectile",
	abilitytodamage : false
},
/* Arcane Barrage
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a arcane projectile and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning, piercing, or slashing damage (choose when you cast this spell.)
The spell creates more than one projectile when you reach higher levels: two projectiles at 5th level, three projectiles at 11th level, and four projectiles at 17th level. You can direct the projectiles at the same target or at different ones. Make a separate attack roll for each projectile. 
Classes: Artificer, Sorcerer, Warlock, Wizard */

// Bludgeoning damage
SpellsList["hailstone barrage"] = {
	name: "Hailstone Barrage",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling frozen water 2d4 Bludgeoning dmg; cubes at same or different targets; CL5:2, CL11:3, CL17:4 cubes",
	descriptionCantripDie: "Fling `CD` ice cubes 2d4 Bludgeoning dmg; cubess at same or different targets;",
	descriptionFull: "I conjure cubes of frigid ice and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning damage." + "\n   " + AtHigherLevels + "The spell creates more than one cube when I reach higher levels: two cubes at 5th level, three cubes at 11th level, and four cubes at 17th level. I can direct the cubes at the same target or at different ones. Make a separate attack roll for each cube."
};
WeaponsList["hailstone barrage"] = {
	regExpSearch: /^hailstone(?=.*barrage).*$/i,
	name: "Hailstone Barrage",
	source: ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "bludgeoning"],
	range: "90 ft",
	description: "Each 2d4 is a separate cube requiring separate rolls; ",
	abilitytodamage: false,
	SpellsList: "hailstone barrage",
};
/* Hailstone Barrage
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a cube of frigid ice and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning damage.

The spell creates more than one cube when you reach higher levels: two cubes at 5th level, three cubes at 11th level, and four cubes at 17th level. You can direct the cubes at the same target or at different ones. Make a separate attack roll for each cube. 

Classes: Artificer, Druid, Sorcerer, Warlock, Wizard
*/
SpellsList["imbue stone"] = {
	name : "Imbue Stone",
	classes : ["artificer", "druid", "warlock"],
	source : ["NHB"],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "1 min",
	description : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6 Bludg. dmg and -10 speed.",
	descriptionCantripDie : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do `CD`d6 Bludg. dmg and -10 speed.",
	descriptionFull : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. On a hit, it takes 1d6 bludgeoning damage, and its speed is reduced by 10 feet until the start of your next turn. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it."
};
WeaponsList["imbue stone"] = {
	regExpSearch : /^(?=.*imbue)(?=.*stone).*$/i,
	name : "Imbue Stone",
	source : ["NHB"],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "bludgeoning"],
	range : "60/120 ft",
	description : "Stone can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack. Target -10 ft speed until start of my next turn",
	abilitytodamage : false
};
SpellsList["stone barrage"] = {
	name: "Stone Barrage",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling conjured stone cube 2d4 Bludgeoning dmg; cubes at same or different targets; CL5:2, CL11:3, CL17:4 cubes",
	descriptionCantripDie: "Fling `CD` ice cubes 2d4 Bludgeoning dmg; cubess at same or different targets;",
	descriptionFull: "I conjure cubes of stone and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning damage." + "\n   " + AtHigherLevels + "The spell creates more than one cube when I reach higher levels: two cubes at 5th level, three cubes at 11th level, and four cubes at 17th level. I can direct the cubes at the same target or at different ones. Make a separate attack roll for each cube."
};
WeaponsList["stone barrage"] = {
	regExpSearch: /^stone(?=.*barrage).*$/i,
	name: "Stone Barrage",
	source: ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "bludgeoning"],
	range: "90 ft",
	description: "Each 2d4 is a separate cube requiring separate rolls; ",
	abilitytodamage: false,
	SpellsList: "stone barrage",
};
/* Stone Barrage
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a cube of stone and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning damage.

The spell creates more than one cube when you reach higher levels: two cubes at 5th level, three cubes at 11th level, and four cubes at 17th level. You can direct the cubes at the same target or at different ones. Make a separate attack roll for each cube. 

Classes: Artificer, Druid, Sorcerer, Warlock, Wizard
*/

// Piercing damage
SpellsList["arcane lash"] = { // Thornwhip
	name : "Arcane Lash",
	classes : ["artificer", "druid"],
	source : ["NHB", 282],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "The stem of a plant with thorns",
	duration : "Instantaneous",
	description : "Melee spell atk, 1d6 Piercing dmg and pull ≤ Large crea up to 10 ft towards me; +1d6 at CL 5, 11, 17",
	descriptionCantripDie : "Melee spell attack for `CD`d6 Piercing dmg and pull ≤ Large crea up to 10 ft towards me",
	descriptionFull : "You create a long, arcane whip covered in runic barbs that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
WeaponsList["arcane lash"] = {
	regExpSearch : /^(?=.*arcane)(?=.*lash).*$/i,
	name : "Arcane Lash",
	source : ["NHB", 282],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "piercing"],
	range : "Melee, 30 ft",
	description : "Melee spell attack, pull target up to 10 ft closer",
	abilitytodamage : false
};
/* Arcane Lash
Transmutation cantrip
Casting Time: 1 action
Range: 30 feet
Components: V, S, M (the stem of a plant with thorns)
Duration: Instantaneous
You create a long, arcane whip covered in runic barbs that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.

This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
Classes: Artificer, Druid */
SpellsList["arcane spike"] = {
	name: "Arcane Spike",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling arcane spike 2d4 Piercing dmg; spikes at same or different targets; CL5:2, CL11:3, CL17:4 spikes",
	descriptionCantripDie: "Fling `CD` arcane spikes 2d4 Piercing dmg; spikes at same or different targets;",
	descriptionFull: "I conjure arcane spikes and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one spike when I reach higher levels: two spikes at 5th level, three spikes at 11th level, and four spikes at 17th level. I can direct the spikes at the same target or at different ones. Make a separate attack roll for each spike."
};
WeaponsList["arcane spike"] = {
	regExpSearch : /^(?=.*arcane)(?=.*spike).*$/i,
	name: "Arcane Spike",
	source: ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	range: "90 ft",
	description: "Each 2d4 is a separate spike requiring separate rolls",
	SpellsList: "arcane spike",
};
/* Arcane Spike
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a arcane spike and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercinging damage.

The spell creates more than one spike when you reach higher levels: two spikes at 5th level, three spikes at 11th level, and four spikes at 17th level. You can direct the spikes at the same target or at different ones. Make a separate attack roll for each spike. 
Classes: Artificer, Cleric, Druid, Sorcerer, Warlock, Wizard */
SpellsList["create caltrops"] = {
	name : "Create Caltrops",
	classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : [["NHB", 152]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "5-ft sq crea now/enter Dex save or 1d6 Piercing damage/stop move/-10 ft speed until end of next turn",
	descriptionFull : "You create caltrops in a 5-foot square area on ground that you can see within range. Any creature in the caltop's space when you cast the spell or moves into the caltrop's space for the first time on a turn must succeed on a Dexterity saving throw.\n A creature moving through the caltrop's area at half speed doesn't need to make the saving throw. On a failed save, the creature stops moving, takes 1d6 piercing damage and its speed is reduced by 10 feet until the end of its next turn. On a successful save, the creature is unaffected by the caltrops."
};
WeaponsList["create caltrops"] = {
	regExpSearch : /^(?=.*create)(?=.*caltrops).*$/i,
	name : "Create Caltrops",
	source : [["NHB", 152]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : [1, 6, "piercing"],
	range : "30 ft",
	description : "5-ft square; Dex save at casting/moved into, failure - 1d6/stop/-10 ft move until EoNT, success - no damage;",
	abilitytodamage : false,
	dc : true
};
/* Create Caltrops
Conjuration cantrip
Casting Time: 1 action
Range: 30 feet
Components: V, S
Duration: 1 minute
You create caltrops in a 5-foot square area on ground that you can see within range. Any creature in the caltop's space when you cast the spell or moves into the caltrop's space for the first time on a turn must succeed on a Dexterity saving throw. A creature moving through the caltrop's area at half speed doesn't need to make the saving throw. On a failed save, the creature stops moving, takes 1d6 piercing damage and its speed is reduced by 10 feet until the end of its next turn. On a successful save, the creature is unaffected by the caltrops.
Classes: Artificer, Druid, Sorcerer, Warlock, Wizard */
SpellsList["spike barrage"] = {
	name: "Spike Barrage",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling spike 2d4 Piercing dmg; spikes at same or different targets; CL5:2, CL11:3, CL17:4 spikes",
	descriptionCantripDie: "Fling `CD` spike barrages 2d4 Piercing dmg; spikes at same or different targets;",
	descriptionFull: "I conjure spike and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one spike when I reach higher levels: two spikes at 5th level, three spikes at 11th level, and four spikes at 17th level. I can direct the spikes at the same target or at different ones. Make a separate attack roll for each spike."
};
WeaponsList["spike barrage"] = {
	regExpSearch : /^(?=.*spike)(?=.*barrage).*$/i,
	name: "Spike Barrage",
	source: ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	range: "90 ft",
	description: "Each 2d4 is a separate spike requiring separate rolls",
	SpellsList: "spike barrage",
};
/* Spike Barrage
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a spike and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercinging damage.

The spell creates more than one spike when you reach higher levels: two spikes at 5th level, three spikes at 11th level, and four spikes at 17th level. You can direct the spikes at the same target or at different ones. Make a separate attack roll for each spike. 
Classes: Artificer, Cleric, Druid, Sorcerer, Warlock, Wizard 
*/
SpellsList["thorn barrage"] = {
	name: "Thorn Barrage",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling razor thorn 2d4 Piercing dmg; thorns at same or different targets; CL5:2, CL11:3, CL17:4 thorns",
	descriptionCantripDie: "Fling `CD` razor-sharp thorns 2d4 Piercing dmg; thorns at same or different targets;",
	descriptionFull: "I conjure razor-sharp thorns and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one thorn when I reach higher levels: two thorns at 5th level, three thorns at 11th level, and four thorns at 17th level. I can direct the thorns at the same target or at different ones. Make a separate attack roll for each thorn."
};
WeaponsList["thorn barrage"] = {
	regExpSearch: /^thorn(?=.*barrage).*$/i,
	name: "Thorn Barrage",
	source: ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	range: "90 ft",
	description: "Each 2d4 is a separate thorn requiring separate rolls",
	SpellsList: "thorn barrage",
};
/* Thorn Barrage
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a razor-sharp thorn and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercinging damage.

The spell creates more than one thorn when you reach higher levels: two thorns at 5th level, three thorns at 11th level, and four thorns at 17th level. You can direct the thorns at the same target or at different ones. Make a separate attack roll for each thorn. 
Classes: Artificer, Cleric, Druid, Sorcerer, Warlock, Wizard*/

// Slashing damage
SpellsList["leaf barrage"] = {
	name: "Leaf Barrage",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling razor leaf 2d4 Slashing dmg; leaves at same or different targets; CL5:2, CL11:3, CL17:4 leaves",
	descriptionCantripDie: "Fling `CD` razor-sharp leaves 2d4 Slashing dmg; leaves at same or different targets;",
	descriptionFull: "I conjure razor-sharp leaves and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 slashing damage." + "\n   " + AtHigherLevels + "The spell creates more than one leaf when I reach higher levels: two leaves at 5th level, three leaves at 11th level, and four leaves at 17th level. I can direct the leaves at the same target or at different ones. Make a separate attack roll for each leaf."
};
WeaponsList["leaf barrage"] = {
	regExpSearch: /^leaf(?=.*barrage).*$/i,
	name: "Leaf Barrage",
	source: ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "slashing"],
	range: "90 ft",
	description: "Each 2d4 is a separate leaf requiring separate rolls",
	SpellsList: "leaf barrage",
};
/* Leaf Barrage
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a razor-sharp leaf and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 slashing damage.

The spell creates more than one leaf when you reach higher levels: two leaves at 5th level, three leaves at 11th level, and four leaves at 17th level. You can direct the leaves at the same target or at different ones. Make a separate attack roll for each leaf. 
Classes: Artificer, Druid, Sorcerer, Warlock, Wizard */

// Acid damage
SpellsList["acidic bolt"] = {
		name : "Acidic Bolt",
		classes : ["artificer", "sorcerer", "wizard"],
		source : ["NHB"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell attack for 1d10 Acid dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
		descriptionFull : "You hurl a drop of acid at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 acid damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
WeaponsList["acidic bolt"] = {
		regExpSearch : /^(?=.*acidic)(?=.*bolt).*$/i,
		name : "Acidic Bolt",
		source : ["NHB"],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "acid"],
		range : "120 ft",
		description : "Unattended flammable objects ignite",
		abilitytodamage : false
	};
/* Acidic Bolt
Evocation cantrip
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You hurl a drop of acid at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 acid damage. A flammable object hit by this spell ignites if it isn't being worn or carried.

This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).
Classes: Artificer, Sorcerer, Wizard */
SpellsList["create acidspout"] = {
	name: "Create Acidspout",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : ["NHB"],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "5-ft cube all crea at casting or entering save or 1d8 Acid dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionFull: "You create an acidspout on ground that you can see within range. Until the spell ends, the magic acidspout fills a 5-foot cube. Any creature in the acidspout's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 acid damage. A creature must also make the saving throw when it moves into the acidspout's space for the first time on a turn or ends its turn there." + "\n   " + "The acidspout ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["create acidspout"] = {
	regExpSearch: /^(?=.*create)(?=.*acidspout).*$/i,
	name: "Create acidspout",
	source : ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "acid"],
	range: "60 ft",
	description: "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage: false,
	dc: true
};
/* Create Acidspout
Conjuration cantrip
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Concentration, up to 1 minute

You create an acidspout on ground that you can see within range. Until the spell ends, the magic acidspout fills a 5-foot cube. Any creature in the acidspout's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 acid damage. A creature must also make the saving throw when it moves into the acidspout's space for the first time on a turn or ends its turn there.

The acidspout ignites flammable objects in its area that aren't being worn or carried.

The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
Classes: Artificer, Druid, Sorcerer, Warlock, Wizard */

// Cold damage
SpellsList["freezing blade"] = {
		name : "Freezing Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["NHB"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "V,M",
		compMaterial : "A weapon",
		duration : "Instantaneous",
		description : "Melee weap atk with cast; if hit: 0d8 Cold dmg., if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Cold dmg and if it moves next round +`CD`d8 Cold dmg",
		descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in cold energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 cold damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 cold damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
	};
WeaponsList["freezing blade"] = {
	regExpSearch : /^(?=.*freezing)(?=.*blade).*$/i,
	name : "Freezing Blade",
	source : ["NHB"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "cold"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
/* Freezing Blade
Evocation cantrip
Casting Time: 1 action
Range: Self (5-foot radius)
Components: S, M (a melee weapon worth at least 1 sp)
Duration: 1 round

You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in cold energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 cold damage, and the spell ends.

This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 cold damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).

Classes: Artificer, Sorcerer, Warlock, Wizard */
SpellsList["toll of the tides"] = {
	name : "Toll of the Tides",
	classes : ["cleric", "warlock", "wizard"],
	source : ["NHB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 1d12 Cold dmg (d8 instead of d12 if at full HP); +1d12/1d8 at CL 5, 11, \u0026 17",
	descriptionCantripDie : "1 crea save or `CD`d12 Cold damage (d8 instead of d12 if at full HP)",
	descriptionFull : "You point at one creature you can see within range, and the sound of a ship's bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 cold damage. If the target is missing any of its hit points, it instead takes 1d12 cold damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
};
WeaponsList["toll of the tides"] = {
	regExpSearch : /^(?=.*toll)(?=.*the)(?=.*tides).*$/i,
	name : "Toll of the Tides",
	source : ["NHB"],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 12, "cold"],
	range : "60 ft",
	description : "Wis save, success - no damage; If target is at full HP, d8 instead of d12 damage",
	abilitytodamage : false,
	dc : true
};
/*Toll of the Tides
Evocation cantrip
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Instantaneous
You point at one creature you can see within range, and the sound of a ship's bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 cold damage. If the target is missing any of its hit points, it instead takes 1d12 cold damage.

The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).

Classes: Cleric, Warlock, Wizard */

// Lightning damage
SpellsList["create arcing current"] = {
	name: "Create Arcing Current",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : ["NHB"],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "5-ft cube all crea at casting or entering save or 1d8 Lightning dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionFull: "You create an arcing current on ground that you can see within range. Until the spell ends, the magic arcing current fills a 5-foot cube. Any creature in the arcing current's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 lightning damage. A creature must also make the saving throw when it moves into the arcing current's space for the first time on a turn or ends its turn there." + "\n   " + "The arcing current ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["create arcing current"] = {
	regExpSearch : /^(?=.*create)(?=.*arcing)(?=.*current).*$/i,
	name: "Create Arcing Current",
	source : ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "lightning"],
	range: "60 ft",
	description: "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage: false,
	dc: true
};
/*Create Arcing Current
Conjuration cantrip
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Concentration, up to 1 minute
You create an arcing current on ground that you can see within range. Until the spell ends, the magic arcing current fills a 5-foot cube. Any creature in the arcing current's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 lightning damage. A creature must also make the saving throw when it moves into the arcing current's space for the first time on a turn or ends its turn there.

The arcing current ignites flammable objects in its area that aren't being worn or carried.

The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
Classes: Artificer, Druid, Sorcerer, Warlock, Wizard
 */
SpellsList["shocking bolt"] = {
		name : "Shocking Bolt",
		classes : ["artificer", "sorcerer", "wizard"],
		source : ["NHB", 0],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell attack for 1d10 Lightning dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
		descriptionFull : "You hurl a spark of lightning at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 lightning damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
WeaponsList["shocking bolt"] = {
		regExpSearch : /^(?=.*shocking)(?=.*bolt).*$/i,
		name : "Shocking Bolt",
		source : ["NHB", 0],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "lightning"],
		range : "120 ft",
		description : "Unattended flammable objects ignite (PHB 241)",
		abilitytodamage : false
	}
/* Shocking Bolt
Evocation cantrip
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You hurl a spark of lighting at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 lightning damage. A flammable object hit by this spell ignites if it isn't being worn or carried.

This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).
Classes: Artificer, Sorcerer, Wizard */
SpellsList["shocking blade"] = {
		name : "Shocking Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["NHB"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "V,M",
		compMaterial : "A weapon",
		duration : "Instantaneous",
		description : "Melee weap atk with cast; if hit: 0d8 Lightning dmg., if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Lightning dmg and if it moves next round +`CD`d8 Lightning dmg",
		descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in lightning energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 lightning damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 lightning damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
	};
WeaponsList["shocking blade"] = {
	regExpSearch : /^(?=.*shocking)(?=.*blade).*$/i,
	name : "Shocking Blade",
	source : ["NHB"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "lightning"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
/* Shocking Blade
Evocation cantrip
Casting Time: 1 action
Range: Self (5-foot radius)
Components: S, M (a melee weapon worth at least 1 sp)
Duration: 1 round

You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in electrical energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 lightning damage, and the spell ends.

This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 lightning damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).

Classes: Artificer, Sorcerer, Warlock, Wizard */
SpellsList["lightning burst"] = {
    name : "Lightning Burst",          
    classes : ["sorcerer", "wizard"],     
    source : ["NHB", 0], 
    ritual : false,     
    level : 3,     
    school : "Evoc",     
    time : "1 a", 
    range : "150 ft", 
    components : "V,S,M", 
    compMaterial : "A bit of fur and an amber, crystal, or glass rod", 
    duration : "Instantaneous", 
    description : "20-ft rad all crea 8d6+1d6/SL Lightning dmg; save halves; unattended flammable objects ignite", 
    descriptionFull : "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of electricity. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 lightning damage on a failed save, or half as much damage on a successful one." + "\n   " + "The lightning spreads around corners. It ignites flammable objects in the area that aren't being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."     
};
/* Lightning Burst
3rd-level evocation
Casting Time: 1 action
Range: 150 feet
Components: V, S, M (a bit of fur and an amber, crystal, or glass rod)
Duration: Instantaneous

A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of electricity. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.

The lightning spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.

At Higher Levels.
When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.
Classes: Sorcerer, Wizard
 */
SpellsList["delayed burst lightning"] = {
    name : "Delayed Burst Lightning",          
    classes : ["sorcerer", "wizard"],     
    source : ["NHB", 0], 
    ritual : false,     
    level : 7,     
    school : "Evoc",     
    time : "1 a", 
    range : "150 ft", 
    components : "V,S,M", 
    compMaterial : "A bit of fur and an amber, crystal, or glass rod", 
    duration : "Conc, 1 min", 
    save : "Dex",
    description : "Create bead; at chosen moment, or if conc. is broken, 20-ft rad 12d6+1d6/SL Lightning dmg; save halves", 
    descriptionFull : "A beam of blue light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of electricity that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes lightning damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one." + "\n   " + "The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6." + "\n   " + "If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in electricity. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes." + "\n   " + "The lightning damages objects in the area and ignites flammable objects that aren't being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."     
};
/* Delayed Burst Lightning
7th-level evocation
Casting Time: 1 action
Range: 150 feet
Components: V, S, M (a bit of fur and an amber, crystal, or glass rod)
Duration: Concentration, up to 1 minute

A beam of blue light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of electricity that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes lightning damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.

The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.

If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in electricity. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.

The electricity damages objects in the area and ignites flammable objects that aren't being worn or carried.

At Higher Levels.
When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th.
Classes: Sorcerer, Wizard
 */

// Necrotic damage
SpellsList["glooming blade"] = {
		name : "Glooming Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["NHB"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "V,M",
		compMaterial : "A weapon",
		duration : "Instantaneous",
		description : "Melee wea atk with cast; if hit: 0d8 Necrotic dmg., if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Necrotic dmg and if it moves next round +`CD`d8 Necrotic dmg",
		descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in necrotic energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 necrotic damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 necrotic damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
	};
WeaponsList["glooming blade"] = {
	regExpSearch : /^(?=.*glooming)(?=.*blade).*$/i,
	name : "Glooming Blade",
	source : ["NHB"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "necrotic"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
/* Glooming Blade
Evocation cantrip
Casting Time: 1 action
Range: Self (5-foot radius)
Components: S, M (a melee weapon worth at least 1 sp)
Duration: 1 round

You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in necrotic energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 necrotic damage, and the spell ends.

This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 necrotic damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).

Classes: Artificer, Sorcerer, Warlock, Wizard */

// Radiant damage
SpellsList["knell the departed"] = {
	name : "Knell the Departed",
	classes : ["cleric", "warlock", "wizard"],
	source : ["NHB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 1d12 Radiant dmg (d8 instead of d12 if at full HP); +1d12/1d8 at CL 5, 11, \u0026 17",
	descriptionCantripDie : "1 crea save or `CD`d12 Radiant damage (d8 instead of d12 if at full HP)",
	descriptionFull : "You point at one creature you can see within range, and the sound of a celestial bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 radiant damage. If the target is missing any of its hit points, it instead takes 1d12 radiant damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
};
WeaponsList["knell the departed"] = {
	regExpSearch : /^(?=.*knell)(?=.*the)(?=.*departed).*$/i,
	name : "Knell the Departed",
	source : ["NHB"],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 12, "radiant"],
	range : "60 ft",
	description : "Wis save, success - no damage; If target is at full HP, d8 instead of d12 damage",
	abilitytodamage : false,
	dc : true
};
/*Knell the Departed
Evocation cantrip
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Instantaneous
You point at one creature you can see within range, and the sound of a celestial bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 radiant damage. If the target is missing any of its hit points, it instead takes 1d12 radiant damage.

The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).

Classes: Cleric, Warlock, Wizard */
SpellsList["radiant bolt"] = {
		name : "Radiant Bolt",
		classes : ["artificer","cleric", "sorcerer", "wizard"],
		source : ["NHB"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell attack for 1d10 Radiant dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
		descriptionFull : "You hurl a spark of divine energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 radiant damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
	};
WeaponsList["radiant bolt"] = {
		regExpSearch : /^(?=.*radiant)(?=.*bolt).*$/i,
		name : "Radiant Bolt",
		source : ["NHB"],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "radiant"],
		range : "120 ft",
		description : "Unattended flammable objects ignite; ",
		abilitytodamage : false
	}
/* Radiant Bolt
Evocation cantrip
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You hurl a spark of divine energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 radiant damage. A flammable object hit by this spell ignites if it isn't being worn or carried.

This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).
Classes: Artificer, Cleric Sorcerer, Wizard */
SpellsList["starflame"] = {
	name : "Starflame",
	classes : ["cleric", "druid"],
	source : ["NHB"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "10 min (D)",
	description : "Starlight 10 ft bright light; once 30 ft ranged spell attack for 1d8 Radiant dmg; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "Starlight 10 ft bright light; once 30 ft ranged spell attack for `CD`d8 Radiant dmg",
	descriptionFull : "A flickering starflame appears in your hand. The starflame remains there for the duration and harms neither you nor your equipment. The starflame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again." + "\n   " + "You can also attack with the starflame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the starflame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 radiant damage." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	};
WeaponsList["starflame"] = {
		regExpSearch : /starflame/i,
		name : "Starflame",
		source : ["NHB"],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 8, "radiant"],
		range : "30 ft",
		description : "10-ft radius bright light and 10-ft radius dim light until thrown; ",
		abilitytodamage : false
	};
/*Starflame
Conjuration cantrip
Casting Time: 1 action
Range: Self
Components: V, S
Duration: 10 minutes

A flickering starflame appears in your hand. The starflame remains there for the duration and harms neither you nor your equipment. The starflame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.

You can also attack with the starflame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the starflame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 radiant damage.

This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
Classes: Cleric, Druid
 */

// Thunder damage
SpellsList["arcane flourish"] = { // Booming Blade
	name : "Arcane Flourish",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["NHB"]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "S,M\u0192",
	compMaterial : "A melee weapon worth at least 1 sp",
	duration : "1 round",
	description : "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next round +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionShorter : "melee wea atk with cast; hit: 0d8 Thunder dmg, if move next rnd +1d8; +1d8 CL 5/11/17 ",
	descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if moves next round +`CD`d8 Thunder dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in arcane energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n   This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
	dynamicDamageBonus : {
		extraDmgGroupsSameType : /(next r(?:ou)?nd )((?:\+?\d+d?\d*)+)/i
		}
},
WeaponsList["arcane flourish"] = { // Booming Blade
	regExpSearch : /^(?=.*arcane)(?=.*flourish).*$/i,
	name : "Arcane Flourish",
	source : [["NHB"]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "thunder"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round",
	abilitytodamage : false
},

// Spells from Knuckleheads (Druid)
SpellsList["auroral winds"] = {
	name: "Auroral Winds",
	classes: ["druid", "warlock", "wizard"],
	source: ["NHB"],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "150 ft",
	components: "V,S,M",
	compMaterial: "A candle wrapped in silver wire",
	duration: "Conc, 1 min",
	save: "Con",
	description: "30-ft rad sphere all crea 6d6+1d6/SL Radiant dmg start turn in; Con save half; all crea in the area disadv on Wis(Perception) hearing and snared 10-ft; crea immune to cold are immune to snare",
	descriptionMetric: "30-ft rad sphere all crea 6d6+1d6/SL Radiant dmg start turn in; Con save to avoid snare",
	descriptionFull: "30-ft radius of flickering light and howling winds. Creatures in the area have disadvantage on Wisdom(Perception) checks based on hearing. Any creature that starts its turn in the area takes 6d6+1d6/SL Radiant damage. Any creature that ends its turn in the area must succeed on a Constitution saving throw or have its speed reduced by 10-ft until the end of their next turn. Creatures immune to cold are immune to this reduction in speed."
};
SpellsList["brittle"] = {
	name: "Brittle",
	classes: ["cleric", "druid", "paladin", "wizard"],
	source: ["NHB"],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "15 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "1 crea w/ non-magic weapon save or weapon is destroyed after its next use",
	descriptionFull: "I freeze a non-magical weapon held by a creature. The next time the weapon is used to make an attack, the creature holding it must succeed a Dexterity saving throw or the weapon shatters and is destroyed after the attack is resolved. If the save succeeds, the weapon is unharmed and the spell ends."
};
SpellsList["buffeting eddies"] = {
	name: "Buffeting Eddies",
	classes: ["bard","cleric","druid","paladin","ranger","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 2,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A tiny paper fan",
	duration: "Conc, 1 min",
	save: "Str",
	description: "self 5ft-rd aura. ranged wea disadv., bns action to push a crea 10-ft and prone",
	descriptionFull: "A (5-ft radius) aura moves centered upon I until the spell ends. Any creature has disadvantage on ranged weapon attacks made against creatures within the aura. As a bonus action, I can assail one creature of my choice within the aura with a blast of wind. The creature must succeed on a Strength saving throw or be pushed away 10 feet and fall prone."
};
SpellsList["chardalyn hide"] = {
	name: "Chardalyn Hide",
	classes: ["cleric", "druid", "sorcerer", "wizard"],
	source: ["NHB"],
	level: 7,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "a small shard of chardalyn worth 500gp, which the spell consumes",
	duration: "Conc, 1 hr",
	description: "1 crea, gain resist bludg., pierce, slash dmg. adv on saves vs magic effects. disadv for spell attack vs the crea",
	descriptionFull: "This spell turns the flesh of a willing creature into crystal that is as hard as steel and repels all but the most potent spells.Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, 	and slashing damage.They also have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against them."
};
SpellsList["charm elemental"] = {
	name: "Charm Elemental",
	classes: ["bard","druid","ranger","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 3,
	school: "Ench",
	time: "1 a",
	range: "30-ft",
	components: "V,S",
	duration: "1 hr",
	save: "Wis",
	description: "1+1/SL elmentals, each 30-ft apart, save or charmed; adv on save if me/ally is fighting it",
	descriptionFull: "I attempt to charm an elemental I can see within range.It must make a Wisdom saving throw, and does so with advantage if I or my companions do anything harmful to it.The charmed creature regards me as a friendly acquaintance. When the spell ends, the creature knows it was charmed by I." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 4th or higher level, I can target one additional elemental for each slot level above 3rd. The creatures must be within 30 feet of each other when I target them."
};
SpellsList["climbing spikes"] = {
	name: "Climbing Spikes",
	classes: ["druid","ranger","wizard"],
	source: ["NHB"],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a nail",
	duration: "8 hr",
	description: "1 crea's boots and gloves, gain adv on checks to climb/balance on icy or rocky terrain, ignore difficult terrain of ice or snow.",
	descriptionFull: "Icy spikes grow from the boots and gloves of a creature I touch.Until the spell ends, the creature has advantage on any checks made to climb or maintain their balance on icy or rocky terrain, and they ignore difficult terrain created by ice or deep snow.The spell ends early if the boots or gloves are removed." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd or higher level, I can target one additional creature for each slot level above 1st."
};
SpellsList["conjure compass"] = {
	name: "Conjure Compass",
	classes: ["druid", "ranger","wizard"],
	source: ["NHB"],
	level: 1,
	school: "Conj",
	time: "1 min",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a small stone",
	duration: "8 hr",
	description: "Ench a stone that tugs north in a creature's hand",
	descriptionFull: "I temporarily enchant a small stone to emit a gentle tug when the creature holding it faces north."
};
SpellsList["freezing blast"] = {
	name: "Freezing Blast",
	classes: ["druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 2,
	school: "Evoc",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a white dragon's scale",
	save: "Con",
	description: "30-ft line, 5-ft wide. 2d10 cold dmg, Con save half. Dex save prone. Creates difficult terrain 1 min.",
	descriptionFull: "A line of frigid air 30 feet long and 5 feet wide emanates from I in a direction I choose.Each creature in the line must succeed on a Constitution saving throw.A creature takes 2d10 cold damage on a failed save, or half as much damage on a successful one. The ground in the area of the spell is also covered in a thick coating of slippery ice for 1 minute.The ice is difficult terrain and a creature that enters the area or starts their turn there must succeed on a Dexterity saving throw or fall prone."
};
SpellsList["frozen flame"] = {
	name: "Frozen Flame (R)",
	classes: ["druid","ranger","wizard"],
	source: ["NHB"],
	level: 2,
	school: "Trans",
	time: "1 min",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a source of fire as large as a torch",
	duration: "8 hr",
	description: "transmute a flame into unextinquishable radiating crystal",
	descriptionFull: "The fire’s flames solidify into translucent orange, red, and yellow crystals. For the duration of the spell, the fire continues to radiate heat and light without consuming fuel, and can’t be extinguished by heavy winds."
};
SpellsList["heart of ice"] = {
	name: "Heart of Ice",
	classes: ["druid","ranger","sorcerer","wizard"],
	source: ["NHB"],
	level: 4,
	school: "Abjur",
	time: "1 rea",
	range: "Self",
	components: "S",
	compMaterial: "a small shard of chardalyn worth 500gp",
	description: "After taking cold dmg, heal 1/2dmg taken and gain immunity to cold dmg for 1 rnd",
	descriptionFull: "I have immunity to cold damage until the start of my next turn.Also, I regain a number of hit points equal to half of the cold damage that triggered the spell."
};
SpellsList["hibernate"] = {
	name: "Hibernate",
	classes: ["bard","cleric","druid","wizard"],
	source: ["NHB"],
	level: 6,
	school: "Ench",
	time: "1 min",
	range: "30-ft",
	components: "V,S,M",
	compMaterial: "pinch of sand",
	duration: "Conc, 1 hr",
	description: "1 crea, fall unconscious, gain the benefit of a long rest in a short rest",
	descriptionFull: "With a casual wave of my hand, a willing creature of my choice that I can see within range falls unconscious for the spell’s duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake.If a target remains unconscious for the full duration that target gains the benefit of a long rest and it can’t be affected by this spell again until it finishes a long rest."
};
SpellsList["ice barrage"] = {
	name: "Ice Barrage",
	classes: ["druid","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90 ft",
	components: "V,S",
	description: "Fling razor ice 2d4 Piercing dmg; shards at same or different targets; CL5:2, CL11:3, CL17:4 shards",
	descriptionCantripDie: "Fling `CD` razor ice shards 2d4 Piercing dmg; shards at same or different targets;",
	descriptionFull: "I conjure razor-sharp shards of frigid ice and fling it at a creature within range.Make a ranged spell attack against the target.On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one shard when I reach higher levels: two shards at 5th level, three shards at 11th level, and four shards at 17th level.I can direct the shards at the same target or at different ones.Make a separate attack roll for each shard."
};
WeaponsList["ice barrage"] = {
	regExpSearch: /^ice(?=.*barrage).*$/i,
	name: "Ice Barrage",
	source: ["NHB"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	range: "90 ft",
	description: "Each 2d4 is a separate shard requiring separate rolls (KaSC 34)",
	SpellsList: "ice barrage",
};
SpellsList["icicle trap"] = {
	name: "Icicle Trap",
	classes: ["druid","ranger","wizard"],
	source: ["NHB"],
	level: 2,
	school: "Abjur",
	time: "10 min",
	range: "15 ft",
	components: "V,S,M",
	compMaterial: "a piece of glass shaped like an icicle",
	duration: "till trigger",
	description: "create a 10-ft trap. 4d6 Piercing dmg, Dex save halves.",
	descriptionFull: "When I cast this spell, I create a 10-foot square area of icicles on a ceiling, doorway, or similar overhang.The icicles fall when a creature or creatures walk beneath them, dealing 4d6 piercing damage.Creatures that succeed on a Dexterity saving throw take half damage.I can set 		conditions for creatures that don’t trigger the icicle trap, such as exempting yourself or those who say a certain password. A successful Intelligence(Investigation) check against my spell save DC recognizes the icicles as dangerous and likely to fall.The icicles are destroyed if they take 15 points of fire damage." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["invigorate"] = {
	name: "Invigorate",
	classes: ["bard","cleric","druid","paladin"],
	source: ["NHB"],
	level: 4,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "powdered silver worth at least 50gp, which the spell consumes",
	duration: "8 hr",
	description: "3+1/SL crea, gain advantage for saving throws vs exhaustion",
	descriptionFull: "I imbue up to three creatures with protection against weariness, granting them advantage on any saving throws made to resist gaining levels of exhaustion." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher level, I can target one additional creature for each slot level above 4th."
};
SpellsList["leomunds tinier tent"] = {
	name: "Leomund's Tinier Tent (R)",
	classes: ["druid","ranger","wizard"],
	source: ["NHB"],
	level: 1,
	school: "Evoc",
	time: "1 min",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a stake and a short length of twine",
	duration: "8 hr",
	description: "Personal immobile area; blocks magic; ends if I leave or another crea enters",
	descriptionFull: "An immobile dome of force springs into existence around and above I and remains stationary for the duration.The spell ends if I leave the area. The dome adjusts in area to allow I to lay down comfortably, but no other creatures can fit inside. The spell fails if any other creatures are within the area.I can move through the dome freely, but all other creatures and objects are barred from passing through it.Spells and other magical effects can’t extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, 	regardless of the weather outside. Until the spell ends, I can command the interior to become dimly lit or dark.The dome is opaque from the outside, of any color I choose, but is transparent from the inside."
};
SpellsList["snow shoes"] = {
	name: "Snow Shoes",
	classes: ["bard","druid","ranger"],
	source: ["NHB"],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "1 hr",
	description: "1 crea (+1/SL crea or hr) gains snow/ice walk or climb without check and leaves no tracks.",
	descriptionFull: "A creature that I touch becomes able to walk in snow rather than sink into it.The creature can move across and climb icy or snowy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost extra movement. A creature benefiting from this spell leaves behind no tracks or other traces of its passage and can’t be tracked except by magical means." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, I may affect an additional creature or extend the duration by 1 hour for each slot level above 2nd."
};
SpellsList["thaw"] = {
	name: "Thaw",
	classes: ["cleric", "druid", "sorcerer", "wizard"],
	source: ["NHB"],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "30-ft",
	components: "V,S",
	duration: "1 hr",
	description: "Melt 3+1/SL x 10-ft cubes or deal 1 ice/snow-noid crea 3d6+1d6/SL Fire dmg, Dex save to halve",
	descriptionFull: "I melt an area of ice and snow that I can see within range.Three 10-ft.cubes anywhere within 30 feet of I am instantaneously melted.The resulting ater is not magical and will refreeze normally. Instead of melting ice and snow, I may choose to instead target a single creature with 30 feet that is made of ice or snow such as an ice mephit or a simulacrum.The creature must make a Constitution saving throw.On a failed save the creature takes 3d6 fire damage, or half as much damage on a successful one." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, I may affect an additional 10 - ft.cube or increase the damage by 1d6 for each slot level above 1st."
};

// Add Dunamancy Spells (Customized)
// Cantrip
SpellsList["flash fatigue"] = { // Sapping Sting
	name : "Flash Fatigue",
	classes : ["artificer", "wizard"],
	source : [["NHB", 189]],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 creature that I can see save or 1d4 Necrotic dmg and fall prone; +1d4 at CL 5, 11, and 17",
	descriptionCantripDie : "1 creature that I can see save or `CD`d4 Necrotic dmg and fall prone",
	descriptionFull : "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.\n   This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
},
WeaponsList["flash fatigue"] = { // Sapping Sting
	regExpSearch : /^(?=.*flash)(?=.*fatigue).*$/i,
	name : "Flash Fatigue",
	source : [["NHB", 189]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 4, "necrotic"],
	range : "30 ft",
	description : "Con save, success - no damage, fail - also fall prone",
	abilitytodamage : false,
	dc : true
},
// Level 1
SpellsList["gravity surge"] = { // Magnify Gravity
	name : "Gravity Surge",
	classes : ["wizard"],
	source : [["NHB", 188]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "10-ft rad all crea 2d8+1d8/SL Force dmg, half spd; Save halves \u0026 no spd reduce; Str check to move obj",
	descriptionShorter : "10-ft rad all 2d8+1d8/SL Force dmg, half spd; Save half, no spd reduce; Str check to move obj",
	descriptionFull : "The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed.\n   Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
},
SpellsList["stimulate initiative"] = { // Gift of Alacrity
	name : "Stimulate Initiative",
	classes : ["wizard"],
	source : [["NHB", 186]],
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "1 willing creature can add 1d8 to its initiative rolls for the duration",
	descriptionFull : "You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls."
},
// Level 2
SpellsList["augment fortune"] = { // Fortune's Favor
	name : "Augment Fortune",
	classes : ["artificer", "wizard"],
	source : [["NHB", 186]],
	level : 2,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "A white pearl worth at least 100 gp, which the spell consumes",
	duration : "1 h",
	description : "1+1/SL crea once roll extra d20 and select which to use for atk, check, save, or atk vs. it (100gp cons.)",
	descriptionFull : "You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this spell on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.\n   If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
},
SpellsList["demipouch"] = { // Wristpocket
	name : "Demipouch",
	classes : ["artificer", "wizard"],
	source : [["NHB", 190]],
	ritual : true,
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Conc, 1 h",
	description : "Store 1 held obj <5 lb in extradim. space; 1 a to summon obj in free hand or return; reappears at end",
	descriptionMetric : "Store 1 held obj <2,5 kg in extradim. space; 1 a summon obj in free hand or return; reappears at end",
	descriptionFull : "You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration.\n   Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet."
},
SpellsList["unyielding anchoring"] = { // Immovable Object
	name : "Unyielding Anchoring",
	classes : ["artificer", "wizard"],
	source : [["NHB", 187]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Gold dust worth at least 25 gp, which the spell consumes",
	duration : "1 h",
	description : "1 obj <10 lb fixed in place; holds 4k lb; Str check move, except chosen/password; See B (25gp cons.)",
	descriptionMetric : "1 obj <5 kg fixed in place; holds 2k kg; Str check move, except chosen/password; See B (25gp cons.)",
	descriptionFull : "You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and the creatures you designate when you cast this spell can move the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute.\n   If the object is fixed in the air, it can hold up to 4,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your spell save DC. On a success, the creature can move the object up to 10 feet." + AtHigherLevels + "If you cast this spell using a spell slot of 4th or 5th level, the DC to move the object increases by 5, it can carry up to 8,000 pounds of weight, and the duration increases to 24 hours. If you cast this spell using a spell slot of 6th level or higher, the DC to move the object increases by 10, it can carry up to 20,000 pounds of weight, and the effect is permanent until dispelled."
},
// Level 3
SpellsList["pressure pulse"] = { // Pulse Wave
	name : "pressure pulse",
	classes : ["artificer", "wizard"],
	source : [["NHB", 188]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "6d6+1d6/SL Force dmg, pulled/pushed 15+5/SL ft from me (also free obj); save halves, no move",
	descriptionMetric : "6d6+1d6/SL Force dmg, pull/push 4,5+1,5/SL m from me (also free obj); save halves, no move",
	descriptionShorter : "6d6+1d6/SL Force dmg, pull/push 15+5/SL ft from me (also free obj); save half, no move",
	descriptionFull : "You create intense pressure, unleash it in a 30-foot cone, and decide whether the pressure pulls or pushes creatures and objects. Each creature in that cone must make a Constitution saving throw. A creature takes 6d6 force damage on a failed save, or half as much damage on a successful one. And every creature that fails the save is either pulled 15 feet toward you or pushed 15 feet away from you, depending on the choice you made for the spell.\n   In addition, unsecured objects that are completely within the cone are likewise pulled or pushed 15 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the distance pulled or pushed increases by 5 feet for each slot level above 3rd."
},
// Level 4
SpellsList["gravity sphere"] = { // Gravity Sinkhole
	name : "Gravity Sphere",
	classes : ["artificer", "wizard"],
	source : [["NHB", 187]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A black marble",
	duration : "Instantaneous",
	save : "Con",
	description : "20-ft rad all crea 5d10+1d10/SL Force dmg, pulled to center of radius; save halves and not pulled",
	descriptionFull : "A 20-foot-radius sphere of crushing force forms at a point you can see within range and tugs at the creatures there. Each creature in the sphere must make a Constitution saving throw. On a failed save, the creature takes 5d10 force damage and is pulled in a straight line toward the center of the sphere, ending in an unoccupied space as close to the center as possible (even if that space is in the air). On a successful save, the creature takes half as much damage and isn't pulled." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
},
// Level 5
SpellsList["phase nudge"] = { // Temporal Shunt
	name : "Phase Nudge",
	classes : ["artificer", "wizard"],
	source : [["NHB", 189], ["W", 189]],
	level : 5,
	school : "Trans",
	time : "1 rea",
	timeFull : "1 reaction, taken when a creature you can see makes an attack roll or starts to cast a spell",
	range : "120 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Wis",
	description : "Cast if see atk/cast, 1+1/SL crea, each max 30 ft apart, save or vanish until next turn, atk/cast wasted",
	descriptionFull : "You target the triggering creature, which must succeed on a Wisdom saving throw or vanish, being thrown to another point in time and causing the attack to miss or the spell to be wasted. At the start of its next turn, the target reappears where it was or in the closest unoccupied space. The target doesn't remember you casting the spell or being affected by it." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. All targets must be within 30 feet of each other."
},
// Level 6
SpellsList["pulsing fissure"] = { // Gravity Fissure
	name : "Pulsing Fissure",
	classes : ["artificer", "wizard"],
	source : [["NHB", 187], ["W", 187]],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "S:100" + (typePF ? "-" : "") + "ft line",
	components : "V,S,M",
	compMaterial : "A fistful of iron filings",
	duration : "Instantaneous",
	save : "Con",
	description : "100-ft long 5-ft wide all 8d6+1d6/SL Force dmg, save half; all in 10 ft of line save or dmg \u0026 pull to it",
	descriptionShorter : "100-ft long 5-ft wide all 8d6+1d6/SL Force dmg, save half; all in 10 ft of it save or dmg \u0026 pulled",
	descriptionFull : "You manifest a ravine of gravitational energy in a line originating from you that is 100 feet long and 5 feet wide. Each creature in that line must make a Constitution saving throw, taking 8d8 force damage on a failed save, or half as much damage on a successful one.\n   Each creature within 10 feet of the line but not in it must succeed on a Constitution saving throw or take 8d8 force damage and be pulled toward the line until the creature is in its area." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th."
},

// Artificer Spell Customization
// Cantrip
SpellsList["advising gadget"] = { // Guidance
	name : "Advising Gadget",
	classes : ["artificer"],
	source : [["NHB", 248]],
	level : 0,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "1 willing creature adds 1d4 to ability check of its choice, after rolling, once during the duration",
	descriptionFull : "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
},
SpellsList["lashing gadget"] = { // Thorn Whip
	name : "Lashing Gadget",
	classes : ["artificer"],
	source : ["NHB", 282],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "strip of metal with burrs",
	duration : "Instantaneous",
	description : "Melee spell atk, 1d6 Piercing dmg and pull ≤ Large crea up to 10 ft towards me; +1d6 at CL 5, 11, 17",
	descriptionCantripDie : "Melee spell attack for `CD`d6 Piercing dmg and pull ≤ Large crea up to 10 ft towards me",
	descriptionFull : "You create a long, arcane whip covered in runic barbs that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
},
WeaponsList["lashing gadget"] = { // Thorn Whip
	regExpSearch : /^(?=.*lashing)(?=.*gadget).*$/i,
	name : "Lashing Gadget",
	source : ["NHB", 282],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "piercing"],
	range : "Melee, 30 ft",
	description : "Melee spell attack, pull target up to 10 ft closer",
	abilitytodamage : false
},
/* Lashing Gadget
Transmutation cantrip
Casting Time: 1 action
Range: 30 feet
Components: V, S, M (the stem of a plant with thorns)
Duration: Instantaneous
You create a long, arcane whip covered in runic barbs that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.
This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
Classes: Artificer */
SpellsList["propelling gadget"] = { // Ice Barrage (Knuckleheads) with choose your own damage
	name: "Propelling Gadget",
	classes: ["artificer","sorcerer","warlock","wizard"],
	source: ["NHB"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90 ft",
	components: "V,S",
	description: "Fling arcane projectile 2d4 Bludgeoning/Piercing/Slashing dmg; projectiles at same or different targets; CL5:2, CL11:3, CL17:4 projectiles",
	descriptionCantripDie: "Fling `CD` arcane projectile 2d4 Bludge./Pierce./Slash. dmg; projectiles at same or different targets;",
	descriptionFull: "I conjure arcane projectiles and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning, piercing, or slashing damage (chosen when the spell is cast.)" + "\n   " + AtHigherLevels + "The spell creates more than one projectile when I reach higher levels: two projectiles at 5th level, three projectiles at 11th level, and four projectiles at 17th level. I can direct the projectiles at the same target or at different ones. Make a separate attack roll for each projectile."
},
WeaponsList["propelling gadget"] = { // Ice Barrage (Knuckleheads) with choose your own damage
	regExpSearch : /^(?=.*propelling)(?=.*gadget).*$/i,
	name: "Propelling Gadget",
	source: ["NHB"], 
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "B/P/S"],
	range: "90 ft",
	description: "Choose B/P/S damage when cast; Each 2d4 requires separate rolls",
	SpellsList: "arcane projectile",
	abilitytodamage : false
},
/* Propelling Gadget
Evocation cantrip
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: Instantaneous
You conjure a arcane projectile and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning, piercing, or slashing damage (choose when you cast this spell.)
The spell creates more than one projectile when you reach higher levels: two projectiles at 5th level, three projectiles at 11th level, and four projectiles at 17th level. You can direct the projectiles at the same target or at different ones. Make a separate attack roll for each projectile. 
Classes: Artificer, Sorcerer, Warlock, Wizard */
SpellsList["reverberating gadget"] = { // Booming Blade
	name : "Reverberating Gadget",
	classes : ["artificer"],
	source : [["NHB"]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "S,M\u0192",
	compMaterial : "A melee weapon worth at least 1 sp",
	duration : "1 round",
	description : "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next round +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionShorter : "melee wea atk with cast; hit: 0d8 Thunder dmg, if move next rnd +1d8; +1d8 CL 5/11/17 ",
	descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if moves next round +`CD`d8 Thunder dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in arcane energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n   This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
	dynamicDamageBonus : {
		extraDmgGroupsSameType : /(next r(?:ou)?nd )((?:\+?\d+d?\d*)+)/i
		}
},
WeaponsList["reverberating gadget"] = { // Booming Blade
	regExpSearch : /^(?=.*reverberating)(?=.*gadget).*$/i,
	name : "Reverberating Gadget",
	source : [["NHB"]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "thunder"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round",
	abilitytodamage : false
},
// Level 1
SpellsList["adrenalizing gadget"] = { // Gift of Alacrity
	name : "Adrenalizing Gadget",
	classes : ["artificer"],
	source : [["NHB", 186]],
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "1 willing creature can add 1d8 to its initiative rolls for the duration",
	descriptionFull : "You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls."
},
SpellsList["climbing gadget"] = { // Climbing Spikes (Knuckleheads)
	name: "Climbing Gadget",
	classes: ["artificer"],
	source: ["NHB", 33],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a nail",
	duration: "8 hr",
	description: "1 crea's boots & gloves, gain adv to climb/balance on icy/rocky terrain, ignore ice/snow difficult terrain",
	descriptionFull: "Icy spikes grow from the boots and gloves of a creature I touch. Until the spell ends, the creature has advantage on any checks made to climb or maintain their balance on icy or rocky terrain, and they ignore difficult terrain created by ice or deep snow. The spell ends early if the boots or gloves are removed." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd or higher level, I can target one additional creature for each slot level above 1st."
},
SpellsList["gravity surging gadget"] = { // Magnify Gravity
	name : "Gravity Surging Gadget",
	classes : ["artificer"],
	source : [["NHB", 188]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "10-ft rad all crea 2d8+1d8/SL Force dmg, half spd; Save halves \u0026 no spd reduce; Str check to move obj",
	descriptionShorter : "10-ft rad all 2d8+1d8/SL Force dmg, half spd; Save half, no spd reduce; Str check to move obj",
	descriptionFull : "The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed.\n   Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
},
SpellsList["illuminating gadget"] = { // Faerie Fire
	name : "Illuminating Gadget",
	classes : ["artificer"],
	source : [["NHB", 141], ["SRD", 141], ["P", 239]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "20-ft cube all obj/crea save or outlined in 10 ft dim light and attacks have adv.; see invisible crea",
	descriptionFull : "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius." + "\n   " + "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
},
SpellsList["medicating gadget"] = { // Cure Wounds
	name : "Medicating Gadget",
	classes : ["artificer"],
	source : [["NHB", 132], ["SRD", 132], ["P", 230]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 living creature heals 1d8+1d8/SL+spellcasting ability modifier HP",
	descriptionFull : "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
},
SpellsList["navigating gadget"] = { // Conjure Compass (Knuckleheads)
	name: "Navigating Gadget",
	classes: ["artificer"],
	source: ["NHB", 34],
	level: 1,
	school: "Conj",
	time: "1 min",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a small stone",
	duration: "8 hr",
	description: "Ench a stone that tugs north in a creature's hand",
	descriptionFull: "I temporarily enchant a small stone to emit a gentle tug when the creature holding it faces north."
},
SpellsList["purifying gadget"] = { // Purify Food and Drink
	name : "Purifying Gadget",
	classes : ["artificer"],
	source : [["NHB", 173], ["SRD", 173], ["P", 270]],
	ritual : true,
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "5-ft rad of food and drink is rendered free of all poison and disease",
	descriptionFull : "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
},
SpellsList["thawing gadget"] = { // Thaw (Knuckleheads)
	name: "Thawing Gadget",
	classes: ["artificer"],
	source: ["NHB", 36],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "1 hr",
	description: "Melt 3+1/SL x 10-ft cubes or deal 1 ice/snow-noid crea 3d6+1d6/SL Fire dmg, Dex save to halve",
	descriptionFull: "I melt an area of ice and snow that I can see within range. Three 10-ft.cubes anywhere within 30 feet of me are instantaneously melted. The resulting area is not magical and will refreeze normally. Instead of melting ice and snow, I may choose to instead target a single creature within 30 feet that is made of ice or snow (such as an ice mephit or a simulacrum.) The creature must make a Constitution saving throw. On a failed save the creature takes 3d6 fire damage, or half as much damage on a successful one." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, I may affect an additional 10-ft.cube or increase the damage by 1d6 for each slot level above 1st."
},
SpellsList["warding gadget"] = { // Sanctuary
	name : "Warding Gadget",
	classes : ["artificer"],
	source : [["NHB", 176], ["SRD", 176], ["P", 272]],
	level : 1,
	school : "Abjur",
	time : "1 bns",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A small silver mirror",
	duration : "1 min",
	save : "Wis",
	description : "1 crea warded; any who want to attack/target must first make save; doesn't protect vs. area spells",
	descriptionFull : "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball." + "\n   " + "If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends."
},
SpellsList["weapon bursting gadget"] = { // Brittle (Knuckleheads)
	name: "Weapon Bursting Gadget",
	classes: ["artificer"],
	source: ["NHB", 33],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "15 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "1 crea w/ non-magic weapon save or weapon is destroyed after its next use",
	descriptionFull: "I make a non-magical weapon held by a creature temporarily fragile. The next time the weapon is used to make an attack, the creature holding it must succeed a Dexterity saving throw or the weapon shatters and is destroyed after the attack is resolved. If the save succeeds, the weapon is unharmed and the spell ends."
},
SpellsList["weapon infusing gadget"] = { // Arcane Weapon
	name : "Weapon Infusing Gadget",
	classes : ["artificer"],
	source : [["NHB", 14]],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "1 wea +1d6 dmg (acid, cold, fire, lightn., poison, or thunder); 1 bns change dmg type; SL3: conc, 8 h",
	descriptionFull : "You channel arcane energy into one simple or martial weapon you're holding, and choose one damage type: acid, cold, fire, lightning, poison, or thunder. Until the spell ends, you deal an extra 1d6 damage of the chosen type to any target you hit with the weapon. If the weapon isn't magical, it becomes a magic weapon for the spell's duration.\n   As a bonus action, you can change the damage type, choosing from the options above." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can maintain your concentration on the spell for up to 8 hours. "
};

// Remove Spells from Artificer list
SpellsList["cure wounds"] = {
	name : "Cure Wounds",
	classes : ["bard", "cleric", "druid", "paladin", "ranger"],
	source : [["NHB", 132], ["SRD", 132], ["P", 230]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 living creature heals 1d8+1d8/SL+spellcasting ability modifier HP",
	descriptionFull : "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
},
SpellsList["faerie fire"] = {
	name : "Faerie Fire",
	classes : ["bard", "druid"],
	source : [["NHB", 141], ["SRD", 141], ["P", 239]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "20-ft cube all obj/crea save or outlined in 10 ft dim light and attacks have adv.; see invisible crea",
	descriptionFull : "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius." + "\n   " + "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
},
SpellsList["purify food and drink"] = {
	name : "Purify Food and Drink",
	classes : ["cleric", "druid", "paladin"],
	source : [["NHB", 173], ["SRD", 173], ["P", 270]],
	ritual : true,
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "5-ft rad of food and drink is rendered free of all poison and disease",
	descriptionFull : "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
},
SpellsList["sanctuary"] = {
	name : "Sanctuary",
	classes : ["cleric"],
	source : [["NHB", 176], ["SRD", 176], ["P", 272]],
	level : 1,
	school : "Abjur",
	time : "1 bns",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A small silver mirror",
	duration : "1 min",
	save : "Wis",
	description : "1 crea warded; any who want to attack/target must first make save; doesn't protect vs. area spells",
	descriptionFull : "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball." + "\n   " + "If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends."
};

// Add Tools and Gear
ToolsList["harvester's tools"] = {
	infoname : "Harvester's tools [30 gp]",
	name : "Harvester's tools",
	source: ["NHB"],
	amount : "",
	weight : 5,
	type : "artisan's tools"
};
GearList["animal feed (1 day)"] = {
    infoname : "Animal Feed (1 day) [5 cp]",
    name : "Animal Feed, days of",
    source : ["PHB", 155],
    amount : 1,
    weight : 10
};

// Add Weapons
WeaponsList["akbitanan blade"] = {
	baseWeapon : "dagger",
	regExpSearch : /^(?=.*akbitanan)(?=.*blade).*$/i,
	name : "Akbitanan Blade",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, light, thrown",
	abilitytodamage : true,
	monkweapon : true,
	modifiers : [1, 0],
};
WeaponsList["bolo"] = {
	name : "Bolo",
	source : ["NHB"],
	regExpSearch : /bolo/i,
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : ["\u2015", "", "Restrained"],
	range : "5/30 ft",
	weight : 2,
	description : "Light, finesse, thrown, up to medium creature restrained (DC 10 Str check)",
	tooltip : "Special: A Medium or smaller creature hit by a bolo is restrained until it is freed. A bolo has no effect on creatures that are formless, or creatures that are Large or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the bolo (AC 10) also frees the creature without harming it, ending the effect and destroying the bolo.",
	special : true,
	abilitytodamage : false
};
WeaponsList["broad sword"] = {
	regExpSearch : /^(?=.*broad)(?=.*sword).*$/i,
	name : "Broad sword",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slash/pierc"],
	range : "Melee",
	weight : 6,
	description : "Heavy, disadv. if using with Str less than 18",
	abilitytodamage : true
};
WeaponsList["catana"] = {
	regExpSearch : /\catana\b/i,
	name : "Catana",
	source : ["NHB"],
	list : "melee",
	ability : 2,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, versatile (1d10)",
	abilitytodamage : true
};
WeaponsList["chained spike"] = { // Whip w/ piercing damage
	regExpSearch : /^(?=.*(chained))(?=.*spike).*$/i,
	name : "Chained Spike",
	source : [["NHB"]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "piercing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, reach",
	abilitytodamage : true
};
WeaponsList["chakram"] = {
	name : "Chakram",
	source : ["NHB"],
	regExpSearch : /chakram/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee, 60/120 ft",
	description : "Thrown, light, finesse; Returns when thrown, except on an attack roll of 1",
	list : "melee",
	weight : 2
};
WeaponsList["claw blade"] = {
	baseWeapon : "dagger",
	regExpSearch : /^(?=.*claw)(?=.*blade).*$/i,
	name : "Claw Blade",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "slashing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, light, thrown",
	abilitytodamage : true,
	monkweapon : true,
	modifiers : [1, 0],
};
/* Double-Tipped Spear
Martial weapon, melee weapon
100 gp, 6 lb. 	2d4 piercing - special, two-handed
Special.
If you attack with a double-tipped spear as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals 1d4 piercing damage on a hit, instead of 2d4.
Two-Handed.
This weapon requires two hands to use. This property is relevant only when you attack with the weapon, not when you simply hold it.
*/
WeaponsList["double-tipped spear"] = {
	baseWeapon : "spear",
	regExpSearch : /^(?=.*double)(?=.*spear).*$/i,
	name : "Double-tipped spear",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "piercing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
/* Double Trident
Martial weapon, melee weapon
100 gp, 6 lb. 	2d4 piercing - special, two-handed
Special.
If you attack with a double trident as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals 1d4 piercing damage on a hit, instead of 2d4.
Two-Handed.
This weapon requires two hands to use. This property is relevant only when you attack with the weapon, not when you simply hold it.
*/
WeaponsList["double trident"] = {
	regExpSearch : /^(?=.*double)(?=.*trident).*$/i,
	baseWeapon : "spear",
	name : "Double trident",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "piercing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
WeaponsList["fauchard"] = {
	baseWeapon : "glaive",
	regExpSearch : /\Fauchard\b/i,
	name : "fauchard",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slash/pierc"],
	range : "Melee",
	weight : 6,
	description : "Heavy, reach, two-handed; ",
	abilitytodamage : true
};
/* Fauchard
Martial weapon, melee weapon
20 gp, 6 lb. 	1d10 slashing or piercing - heavy, reach, two-handed */
WeaponsList["heavy flail"] = {
	baseWeapon : "flail",
	regExpSearch : /^(?=.*(great|heavy))(?=.*flail).*$/i,
	name : "Heavy flail",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	weight : 10,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
/* Heavy Flail
Martial weapon, melee weapon
10 gp, 10 lb. 	2d6 bludgeoning - heavy, two-handed */
WeaponsList["repeating handbow"] = {
	baseWeapon : "hand crossbow",
	regExpSearch : /^(?=.*(repeating))(?=.*handbow).*$/i,
	name : "Repeating Handbow",
	source : ["NHB"],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "15/60 ft",
	weight : 3,
	description : "Ammunition, light, reload after six shots",
	abilitytodamage : true,
	ammo: "bolt"
};
/* Repeating Handbow
Martial weapon, range
125 gp, 3 lb. 	1d6 piercing - ammunition (30/120 ft.), light, loading
This hand crossbow is fitted with a cartridge that can hold up to six crossbow bolts. It automatically reloads after firing until the cartridge runs out of ammunition. Reloading the cartridge takes an action.
*/
WeaponsList["throwing stick"] = {
	regExpSearch : /^(?=.*throwing)(?=.*stick).*$/i,
	name : "Throwing stick",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 8, "bludgeoning"],
	range : "Melee, 10/30 ft",
	weight : 3,
	description : "Thrown",
	monkweapon : true,
	abilitytodamage : true
};
/* Throwing stick
Simple weapon, melee weapon
1 gp, 3 lb. 	1d8 bludgeoning - thrown (10/30 ft.) */
WeaponsList["two-section staff"] = {
	regExpSearch : /^(?=.*two-section)(?=.*staff).*$/i,
	name : "Two-section staff",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "Reach, versatile (2d4); ",
	monkweapon : true,
	abilitytodamage : true
};
/* Two-section staff
Simple weapon, melee weapon
2 gp, 4 lb. 	1d4 bludgeoning - Reach, versatile (2d4)
*/

// Add Goblin Weapons
WeaponsList["dogslicer"] = {
	baseWeapon : "scimitar",
	regExpSearch : /dogslicer/i,
	name : "Dogslicer",
	nameAlt : "Goblin Blade",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light",
	abilitytodamage : true,
	monkweapon : true,
};
WeaponsList["horsechopper"] = {
	baseWeapon : "halberd",
	regExpSearch : /horsechopper/i,
	name : "Horsechopper",
	nameAlt : "Goblin Polearm",
	source : ["NHB"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy (except Goblins), reach, two-handed",
	abilitytodamage : true,
};

// Add Creatures - Homebrew
CreatureList["hippopotamus"] = {
	name : "Hippopotamus",
	source : ["NHB"],
	size : 1,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 76,
	hd : [8, 12],
	speed : "40 ft, swim 30 ft",
	scores : [22, 9, 17, 3, 11, 6],
	saves : ["", "", "", "", "", ""],
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 8, "piercing"],
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Trampling Charge trait"
		}, {
			name : "Stomp",
			ability : 1,
			damage : [3, 10, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "Can only be used on prone creatures (also see Trampling Charge trait)"
		}
	],
	traits : [{
			name : "Hold Breath",
			description : "The hippopotamus can hold its breath for 30 minutes."
		}, {
			name : "Trampling Charge",
			description : "If the hippopotamus moves at least 20 ft straight toward a creature and then hits it with a Bit attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the hippopotamus can make one stomp attack against it as a bonus action."
		}
	]
};
CreatureList["hummingbird"] = {
	name : "Hummingbird",
	source : ["NHB"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "5 ft, fly 70 ft",
	scores : [3, 16, 12, 2, 12, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
	},
	condition_immunities : "exhaustion",
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing/sight",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Beak",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [0, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Swiftness",
			description : "The hummingbird doesn't provoke opportunity attacks when it flies out of an enemy's reach, and has advantage on saving throws made against effects that would knock it prone."
		}, {
			name : "Keen Senses",
			description : "The hummingbird has advantage on Wisdom (Perception) checks that rely on hearing/sight."
		}, {
			name : "Torpor",
			description : "The hummingbird loses the benefits of it's Keen Senses and Swiftness traits when sleeping."
		}
	],
	wildshapeString : "\u25C6 Senses: Darkvision 60 ft; Advantage on Wisdom (Perception) checks that rely on hearing/sight.\n\u25c6 Swiftness: Don't provoke opportunity attacks when you fly out of an enemy's reach, advantage on saving throws made against effects that would knock you prone.\n\u25C6 Immune to: exhaustion.\n\u25C6 Torpor: Lose the benefits of Keen Senses and Swiftness traits when sleeping."
};
CreatureList["skunk"] = {
	name : "Skunk",
	source : ["NHB"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft",
	scores : [3, 16, 8, 2, 12, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 5
		},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["", "", false]
		}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The skunk has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name : "Innate Spellcasting (1/day)",
			description : "The skunk can innately cast Stinking Cloud, requiring no material components. Its innate spellcasting ability is Wisdom (DC 11)."
		}
		]
};
CreatureList["sky whale"] = { // Includes contributions by SoilentBrad
	name : "Sky Whale",
	source : ["NHB"],
	size : 1,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 85,
	hd : [9, 12],
	speed : "fly 50 ft (hover)",
	scores : [21, 9, 17, 2, 10, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"stealth" : 5
	},
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Flipper",
			ability : 1,
			damage : [2, 8, "bludgeoning"],
			range : "Melee (10 ft)",
			description : "Target must succeed on a DC 16 Strength saving throw or be knocked prone"
		}, {
			name : "Tail",
			ability : 1,
			damage : [2, 8, "bludgeoning"],
			range : "Melee (10 ft)",
			description : "Target must succeed on a DC 16 Strength saving throw or be knocked prone"
		}
	],
	traits : [{
			name : "Hold Breath",
			description : "The whale can hold its breath for 30 minutes."
		}, {
			name : "Multiattack",
			description : "The whale makes two attacks: one with its flipper and one with its tail."
		}
	]
};
CreatureList["timbermaw"] = {
	name : "Timbermaw",
	source : ["NHB"],
	size : 3,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 27,
	hd : [6, 8],
	speed : "30 ft, climb 30 ft",
	scores : [14, 14, 11, 3, 14, 5],
	saves : ["", "", "", "", "", ""],
	damage_resistances : "bludgeoning, piercing, and slashing from nonmagical weapons",
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Tentacles",
			ability : 1,
			damage : [2, 6, "slashing"],
			range : "Melee",
			description : "On hit, can make beak attack",
			modifiers : [0, "", ""],
		}, {
			name : "Beak",
			ability : 1,
			damage : [1, 6, "piercing"],
			range : "Melee",
			description : "Only on hit with a tentacle attack",
			modifiers : [0, "", ""]
		}
	],
	traits : [{
			name : "Forest Camouflage",
			description : "The timbermaw has advantage on Dexterity (Stealth) checks made to hide in woodland terrain."
		}
	]
};
CreatureList["riding horse skeleton"] = { // Icespire
		name : "Riding Horse Skeleton",
		nameAlt : ["Horse"],
		source : [["NodHB"]],
		size : 2, //Large
		type : "Undead",
		alignment : "Unaligned",
		ac : 10,
		hp : 13,
		hd : [2, 10],
		speed : "60 ft",
		scores : [16, 10, 12, 2, 11, 7],
		damage_vulnerabilities : "bludgeoning",
		damage_immunities : "poison",
		condition_immunities : "exhaustion, poisoned",
		senses : "Darkvision 60 ft",
		passivePerception : 10,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Hooves",
			ability : 1,
			damage : [2, 4, "bludgeoning"],
			range : "Melee (5 ft)",
			description : ""
		}]
};

SourceList.DDCE = {
    name : "D&D Celebration Event 2020",
    abbreviation : "DDCE",
    group : "Adventurers League",
    date : "2020/09/19"
};
/* Arctic Stink Squirrel
This cuddly little brute makes a playful (if alarming) companion. 
It can be summoned using find familiar and has the statistics of a weasel. 
It can cast stinking cloud once per day, save DC 11. */
CreatureList["arctic stink squirrel"] = {
	name : "Arctic Stink Squirrel",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft",
	scores : [3, 16, 8, 2, 12, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 5
		},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["", "", false]
		}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The arctic stink squirrel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name : "Innate Spellcasting (1/day)",
			description : "The arctic stink squirrel can innately cast Stinking Cloud, requiring no material components. Its innate spellcasting ability is Wisdom (DC 11)."
		}
		]
};
/* Chwinga Squidling
This bizarre mutation is both devoted and dangerous. 
You can summon the chwinga squidling using find familiar.
It has the statistics of a stirge with no fly speed. */
CreatureList["chwinga squidling"] = {
	name : "Chwinga Squidling",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Beast",
	companion : "familiar",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 2,
	hd : [1, 4],
	speed : "10 ft",
	scores : [4, 16, 11, 2, 8, 6],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 9,
	languages : "",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Blood Drain",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "The chwinga squidling attaches itself to the target, see Blood Drain trait"
		}],
	traits : [{
		name : "Blood Drain",
		description : "While attached, the chwinga squidling doesn't attack. Instead, at the start of each of the it's turns, the target loses 5 (1d4 + 3) HP due to blood loss. The squidling can detach itself by spending 5 feet of its movement. It does so after it drains 10 HP of blood from the target or the target dies. A creature, including the target, can use its action to detach the chwinga squidling."
		}],
};
/* Gelatinous Ice Cube
You have a friendly psychic link with this tiny cube of death. 
You can summon the gelatinous ice cube using find familiar.
It has the statistics of an oblex spawn. */
CreatureList["gelatinous ice cube"] = {
	name : "Gelatinous Ice Cube",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Ooze",
	subtype : "",
	companion : "familiar",
	alignment : "Lawful Evil",
	ac : 13,
	hp : 18,
	hd : [4, 4],
	speed : "20 ft",
	scores : [8, 16, 15, 14, 11, 10],
	saves : ["", "", "", "4", "", "2"],
	condition_immunities : "blinded, charmed, deafened, exhaustion, prone",
	skills : {
		"perception" : 3,
		"stealth" : 4
		},
	senses : "Blindsight 60 ft (blind beyond this distance)",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Pseudopod",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "+1d4 psychic damage on a hit"
		}],
		traits : [{
			name : "Amorphous",
			description : "The cube can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name : "Aversion to Fire",
			description : "If the cube takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}]
};
/* Snowy Owlbear Cub
The cub of this rare breed of tiny owlbear forms a loving bond with a single adventurer. 
You can summon the owlbear cub using find familiar.
It has the statistics of a cat. */
CreatureList["snowy owlbear cub"] = {
	name : "Snowy Owlbear Cub",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "40 ft, climb 30 ft",
	scores : [3, 15, 10, 3, 12, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 4
		},
	senses : "Adv. on Wis (Perception) checks using smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claws",
		ability : 2,
		damage : [1, "", "slashing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["Str", "", false]
		}],
	traits : [{
		name : "Keen Smell",
		description : "The snowy owlbear cub has advantage on Wisdom (Perception) checks that rely on smell."
		}]
};
