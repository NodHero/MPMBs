var iFileName = "pub_20220816_AAG (Spelljammer) [unofficial].js";
RequiredSheetVersion("13.1.1");
/* This file adds the Character Options content from the 'Astral Adventurer's Guide' book, part of the 'Spelljammer: Adventures in Space' set, to MPMB's Character Record Sheet	
• Races
• Backgrounds
• Spells
• Magic Items

NOTE: 	UNOFFICIAL document! This script should be removed once the official script is released to prevent conflict!
		It is Tested for the [Printer Friendly] version 13.1.1 ONLY!
*/

// Define the source
SourceList["AAG"] = {
	name : "Astral Adventurer's Guide (Spelljammer)",
	abbreviation : "AAG",
	abbreviationSpellsheet : "AA",
	group : "Primary Sources",
	campaignSetting : "Spelljammer",
	url : "https://dnd.wizards.com/products/spelljammer",
	date : "2022/16/08"
};

// Add Races
RaceList["astral elf"] = {
	regExpSearch : /^(?!.*half)(?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(astral|silver void)\b).*$/i,
	name : "Astral elf",
	sortname : "Elf, Astral",
	source : [["AAG", 10]],
	plural : "Astral elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	age : " typically claim adulthood around age 100 and can live to be 750 years old. Because nothing ages in the Astral Plane, astral elves from that plane can be thousands of years old.",
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	skillstxt : "Perception and choose any one skill which lasts until the end of my next Astral Trance",
	toolProfs : [["Astral Trance: tool or weapon", 1]],
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Astral Fire",
		spells : ["dancing lights", "light", "sacred flame"],
		firstCol : "atwill"
	},
	features : {
		"starlight step" : {
			name : "Starlight Step",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
			action : [["bonus action", ""]]
		}
	},
	trait : "Astral Elf (my creature type is humanoid, elf)"+
	"\n \u2022 Starlight Step: Prof. Bonus per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see."+
	"\n \u2022 Astral Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours if I spend those hours in a trancelike meditation, during which I remain conscious."+
	"\n \u2022 Astral Trance Proficiencies. Whenever I finish a long rest using Trance, I gain two proficiencies, one skill and one with a weapon or a tool of my choice. They last until I finish my next Astral Trance."
};
RaceList["autognome"] = {
	regExpSearch : /autognome/i,
	name : "Autognome",
	source : [["AAG", 11]],
	plural : "Autognomes",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	age : " can live for centuries, up to 500 years",
	armorAdd : "Armored Casing",
	armorOptions : {
		regExpSearch : /^(?=.*armou?red)(?=.*casing).*$/i,
		name : "Armored Casing",
		source : [["AAG", 2]],
		ac : 13
	},
	extraLimitedFeatures : [{
		name : "Built for Success",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	dmgres : ["Poison"],
	savetxt : {
		adv_vs : ["paralyzed", "poison"],
		immune : ["disease"]
	},
	toolProfs : [["Tool of my choice", 2]],
	trait : "Autognome (my type is Construct; Cure Wounds, Healing Word, Mass Cure Wounds/Healing Word, & Spare the Dying work on me)"+
	"\n \u2022 Armored Casing: My base AC is 13 + my Dexterity modifier."+
	"\n \u2022 Built for Success: For my Prof. B. per long rest, I can add +1d4 to an attack, check, or save, after I see the roll, but before the effect."+
	"\n \u2022 Mechanical Nature: I don't need to eat, drink or breathe."+
	"\n \u2022 Sentry's Rest: I only need 6 hours to finish a long rest if I stay in an inactive and motionless state during which I'm conscious."+
	"\n \u2022 True Life: If Mending is cast on me, I can regain HP equal to one expended Hit Die + my Constitution modifier."
};
RaceList["giff"] = {
	regExpSearch : /giff|hippofolk/i,
	name : "Giff",
	source : [["AAG", 12]],
	plural : "Giff",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" }
	},
	scoresGeneric : true,
	features : {
		"astral spark" : {
			name : "Astral Spark",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " force damage"; })
		}
	},
	weaponProfs : [false, false, ["Firearms"]],
	carryingCapacity : 2,
	savetxt : { text : ["Adv. on Strength saves, Strength ability checks"] },
	advantages : [["Strength", true]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/firearm/i).test(v.theWea.type) || (/firearm/i).test(v.theWea.list)) {
					fields.Description = fields.Description.replace(/([;,]? ?loading|loading[;,]? ?)/i, '') + ", no disadv. at long range; ";
				};
			},
			"I ignore the loading quality of firearms and my firearm attacks suffer no disadvantage for long range."
		]
	},
	trait : "Giff"+
	"\n \u2022 Astral Spark: A number of times per long rest equal to my Proficiency Bonus, when I hit a target with a simple/martial weapon, I can deal extra force damage equal to my Proficiency Bonus."+
	"\n \u2022 Firearms Mastery: I am proficient with firearms, ignore their loading property, and don't have disadvantage at long range."+
	"\n \u2022 Hippo Build: I have advantage on Strength-based ability checks and Strength saving throws. In addition, I count as one size larger when determining my carrying capacity and the weight you can push, drag, or lift."
};
RaceList["hadozee"] = {
	regExpSearch : /hadozee/i,
	name : "Hadozee",
	source : [["AAG", 13]],
	plural : "Hadozees",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" }
	},
	scoresGeneric : true,
	action : [
		["bonus action", "Dexterous Feet"],
		["reaction", "Glide (negate falling damage)"], 
		["reaction", "Hadozee Resilience"]
	],
	features : {
		"hadozee resilience" : {
			name : "Hadozee Resilience",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "1d6+" + n + " damage"; })
		}
	},
	trait : "Hadozee"+
	"\n \u2022 Dexterous Feet: As a bonus action, I can manipulate an object, open or close a door or container, or pick up or set down a Tiny object."+
	"\n \u2022 Glide: If I'm not incapacitated or wearing heavy armor, I can extend my skin membranes and glide. When I do so, I can move up to 5 ft horizontally for every 1 ft I descend in the air, at no movement cost, and as a reaction, I can reduce fall damage to 0."+
	"\n \u2022 Hadozee Resilience: Proficiency Bonus per long rest, when I take damage, I can use my reaction to reduce the damage by 1d6 + my Proficiency Bonus."
};
RaceList["plasmoid"] = {
	regExpSearch : /plasmoid/i,
	name : "Plasmoid",
	source : [["AAG", 14]],
	plural : "Plasmoids",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	scoresGeneric : true,
	vision : [["Darkvision", 60]],
	dmgres : ["Acid", "Poison"],
	savetxt : {
		adv_vs : ["poison"],
		text : ["Adv. on grapple checks"]
	},
	action : [["bonus action", "Extrude/Reabsorb Pseudopod"]],
	trait : "Plasmoid (my type is Ooze)"+
	(typePF ? "\n" : "") + " \u2022 Hold Breath: I can hold my breath for 1 hour."+
	"\n \u2022 Amorphous: I can squeeze through a 1-inch wide space without my equipment or clothes. I have advantage on grapple checks."+
	"\n \u2022 Shape Self: While not incapacitated, I can reshape my body to have a head and limbs, or back to a blob (no action). As a Bonus action, I can extrude or reabsorb a pseudopod up to 6 inch wide and 10 ft long. It can carry up to 10 lb., manipulate objects, open or close doors and containers, or pick up or set down tiny objects. It can't attack or use magic items."
};
RaceList["thri-kreen"] = {
	regExpSearch : /thri.?kreen/i,
	name : "Thri-kreen",
	source : [["AAG", 15]],
	plural : "Thri-kreen",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	languageProfs : ["Common", "Thri-kreen Telepathy", 1],
	action : [["action", "Chameleon Carapace"]],
	armorAdd : "Chameleon Carapace",
	armorOptions : {
		regExpSearch : /^(?=.*carapace)(?=.*chameleon).*$/i,
		name : "Chameleon Carapace",
		source : [["AAG", 4]],
		ac : 13
	},
	vision : [["Darkvision", 60]],
	trait : "Thri-kreen (my type is Monstrosity)"+
	"\n \u2022 Chameleon Carapace: My base AC is 13 + Dex mod. I have adv. on Stealth checks to hide."+
	"\n \u2022 Secondary Arms: I have two slightly smaller arms below my primary pair of arms. I can use these secondary arms to manipulate tiny objects and wield light weapons."+
	"\n \u2022 Sleepless: I don't require sleep. I rest by refraining from strenuous activity."+
	"\n \u2022 Thri-kreen Telepathy: I can communicate telepathically to any number of willing creatures I can see that understand at least one language, while within 120 ft. Any can break this (no action)."
};

// Add Backgrounds
BackgroundList["astral drifter"] = {
	regExpSearch : /^(?=.*astral)(?=.*drifter).*$/i,
	name : "Astral Drifter",
	source : [["AAG", 3]],
	skills : ["Insight", "Religion"],
	toolProfs : ["Herbalism kit", "Vehicles (space)"],
	languageProfs : [["Celestial or Gith recommended)", 2]],
	gold : 10,
	equipleft : [
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""],
		["diary", 1, ""],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Divine Contact",
	extra : [
		"Corellon, god of art and magic (chaotic good)",
		"Tymora, god of good fortune (chaotic good)",
		"Fharlanghn, god of horizons and travel (neutral good)",
		"Istus, god of fate and destiny (neutral)",
		"Nuada, god of war and warriors (neutral)",
		"Zivilyn, god of wisdom (neutral)",
		"Arawn, god of life and death (neutral evil)",
		"Hecate, god of magic and moons (chaotic evil)",
		"Celestian, god of stars and wanderers (neutral)",
		"Ptah, god of knowledge and secrets (lawful neutral)",
	]
};
BackgroundFeatureList["divine contact"] = {
    description : "I am 20d6 years older than I look, thanks to time spent in the Astral Sea without aging. While in the Astral Sea, I crossed paths with a wandering deity. The encounter was brief and nonviolent, yet it made a lasting impression on me. This deity saw fit to share one secret or obscure bit of cosmic lore with me. I gain the Magic Initiate feat from the Player's Handbook and must choose cleric for the feat.",
    eval : function() { AddFeat("Magic Initiate [Cleric]"); },
    removeeval : function() { RemoveFeat("Magic Initiate [Cleric]"); }
};
BackgroundList["wildspacer"] = {
	regExpSearch : /wildspacer/i,
	name : "Wildspacer",
	source : [["AAG", 3]],
	skills : ["Athletics", "Survival"],
	toolProfs : ["Navigator's tools", "Vehicles (space)"],
	gold : 10,
	equipleft : [
		["Belaying pin (club)", "", 2],
		["Grappling hook", "", 4],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belaying pin (club)", "", 2],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Wildspace Adaptation",
	extra : [
		"Beholder",
		"Cosmic horror",
		"Feyr",
		"Lunar dragon",
		"Mind flayer",
		"Neh-thalggu",
		"Neogi",
		"Space clown",
		"Vampirate",
		"Void scavver",
	],
};
BackgroundFeatureList["wildspace adaptation"] = {
    description : "I gain the Tough feat from the Player's Handbook. In addition, I've learned how to adapt to zero gravity. Being weightless doesn't give me disadvantage on any of my melee attack rolls",
    eval : function() { AddFeat("Tough"); },
    removeeval : function() { RemoveFeat("Tough"); }
};

// Add Spells
SpellsList["air bubble"] = {
	name : "Air Bubble",
	classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source : ["AAG", 22],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "24 h",
	description : "create 1 + 2/SL globes of fresh air around willing creatures head",
	descriptionFull : "You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system)." + AtHigherLevels + "when you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd."
};
SpellsList["create spelljamming helm"] = {
	name : "Create Spelljamming Helm",
	classes : ["artificer", "wizard"],
	source : ["AAG", 22],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Crystal rod worth at least 5,000 gp, which the spell consumes",
	duration : "Instantaneous",
	description : "one large or smaller unoccupied chair I touch transforms into a spelljamming helm",
	descriptionFull : "Holding the rod used in the casting of the spell, you touch a Large or smaller chair that is unoccupied. The rod disappears, and the chair is transformed into a spelljamming helm."
};

// Add Magic Items
MagicItemsList["fish suit"] = {
	name : "Fish Suit",
	source : [["AAG", 22]],
	type : "wondrous item",
	rarity : "very rare",
	savetxt : { immune : ["surrounding gas"] },
	description : "This bulky suit takes 1 minute to don or doff. While worn, you can breathe in an airless environment and are immune to any gas that surrounds you. The suit grants you a swimming speed equal to your walking speed while underwater, or a flying speed equal to your walking speed in an environment with no gravity.",
	descriptionFull : "This bulky suit, which fully encases your head and body, takes 1 minute to don or doff. While worn, it enables you to breathe in an airless environment and renders you immune to the harmful effects of any gas that surrounds you. The suit also grants you a swimming speed equal to your walking speed while underwater, or a flying speed equal to your walking speed in an environment with no gravity."
};
MagicItemsList["spelljamming helm"] = {
	name : "Spelljamming Helm",
	source : [["AAG", 23]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "The function of this ornate chair is to propel and maneuver a ship on which it has been installed through space and air. It can also propel and maneuver a ship on water or underwater, provided the ship is built for such travel. See Notes page.",
	descriptionFull : "The function of this ornate chair is to propel and maneuver a ship on which it has been installed through space and air. It can also propel and maneuver a ship on water or underwater, provided the ship is built for such travel. The ship in question must weigh 1 ton or more."+
	"The sensation of being attuned to a spelljamming helm is akin to the pins-and-needles effect one experiences after one's arm or leg falls asleep, but not as painful. While attuned to a spelljamming helm and sitting in it, you gain the following abilities for as long as you maintain concentration (as if concentrating on a spell):"+
	"\u2022 You can use the spelljamming helm to move the ship through space, air, or water up to the ship's speed. If the ship is in space and no other objects weighing 1 ton or more are within 1 mile of it, you can use the spelljamming helm to move the vessel fast enough to travel 100 million miles in 24 hours."+
	"\u2022 You can steer the vessel, albeit in a somewhat clumsy fashion, in much the way that a rudder or oars can be used to maneuver a seafaring ship."+
	"\u2022 At any time, you can see and hear what's happening on and around the vessel as though you were standing in a location of your choice aboard it."+
	"\n Transfer Attunement. You can use an action to touch a willing spellcaster. That creature attunes to the spelljamming helm immediately, and your attunement to it ends.",
	toNotesPage : [{
	name : "Features",
	note : [
		"The function of this ornate chair is to propel and maneuver a ship on which it has been installed through space and air. It can also propel and maneuver a ship on water or underwater, provided the ship is built for such travel. The ship in question must weigh 1 ton or more.",
		"The sensation of being attuned to a spelljamming helm is akin to the pins-and-needles effect one experiences after one's arm or leg falls asleep, but not as painful. While attuned to a spelljamming helm and sitting in it, you gain the following abilities for as long as you maintain concentration (as if concentrating on a spell):",
		"\u2022 You can use the spelljamming helm to move the ship through space, air, or water up to the ship's speed. If the ship is in space and no other objects weighing 1 ton or more are within 1 mile of it, you can use the spelljamming helm to move the vessel fast enough to travel 100 million miles in 24 hours.",
		"\u2022 You can steer the vessel, albeit in a somewhat clumsy fashion, in much the way that a rudder or oars can be used to maneuver a seafaring ship.",
		"\u2022 At any time, you can see and hear what's happening on and around the vessel as though you were standing in a location of your choice aboard it. \n",
		"Transfer Attunement. You can use an action to touch a willing spellcaster. That creature attunes to the spelljamming helm immediately, and your attunement to it ends."
		]
	}]
};
MagicItemsList["wildspace orrery"] = {
	name : "Wildspace Orrery",
	source : [["AAG", 23]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "Inside a Wildspace system, this portable arcane device automatically tracks the positions and movements of all suns, planets, moons, and comets within that system, projecting a display of all these bodies in the space above its current location, marking itself as a white, pulsating pinprick of light.",
	descriptionFull : "Inside a Wildspace system, this portable arcane device automatically tracks the positions and movements of all suns, planets, moons, and comets within that system, projecting a display of all these bodies in the space above its current location. In that display, a white, pulsating pinprick of light marks the orrery's location."
};
