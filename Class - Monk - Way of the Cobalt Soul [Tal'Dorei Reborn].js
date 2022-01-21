/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Monk, called "Way of the Cobalt Soul"
				This is taken from Tal’Dorei Campaign Setting Reborn (https://shop.critrole.com/collections/new-products/products/taldorei-campaign-setting-reborn)
				This subclass is made by Matthew Mercer
	Code by:	original transcription by Smashman, updated by u/Newbuu2, updated by NodHero
	Date:		2020-10-20
*/

var iFileName = "Monk - Way of the Cobalt Soul [Tal'Dorei Reborn].js";
RequiredSheetVersion(13);

SourceList["TDCSR"] = {
	name: "Tal'Dorei Campaign Setting Reborn (Critical Role)",
	abbreviation: "TDCSR",
	group: "Third Party",
	url: "https://shop.critrole.com/collections/new-products/products/taldorei-campaign-setting-reborn",
	date: "2022-01-19"
};

AddSubClass("monk", "way of the cobalt soul", {
	regExpSearch: /^(?=.*\bcobalt)(?=.*\b(soul|spirit))((?=.*(warrior|monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Cobalt Soul",
	source: [["TDCSR", 173]],
	features: {
		"subclassfeature3": {
			name: "Extract Aspects",
			source: [["TDCSR", 173]],
			minlevel: 3,
			description: "",
			toNotesPage : [{
				name : "Extract Aspects",
				source : ["TDCSR", 173],
				popupName : "Extract Aspects",
				page3notes : true,
				note : [
					"If I hit a creature with a Flurry of Blows attack, it is analyzed until my next rest. I learn its",
					"damage vulnerabilities/resistances/immunities and condition immunities. If an analyzed ",
					"target misses me with an attack, I can use my reaction to make an unarmed strike against it",
				]
			}],
			action : ["reaction", "Unarmed Strike (with analyzed creature miss)"],
			additional : "See 3rd page notes"
		},
		"subclassfeature6": {
			name: "Extort Truth",
			source: [["TDCSR", 174]],
			minlevel: 6,
			description: (typeA4 ? "" : desc(["If I hit a creature with an unarmed strike, I can spend 1 ki to compel it to tell the truth"])),
			toNotesPage : [{
				name : "Extort Truth",
				source : ["TDCSR", 174],
				popupName : "Extort Truth",
				page3notes : true,
				note : [
				   "If I hit a creature with an unarmed strike (can chose to deal no damage), I can spend 1 ki to",
				   "force it to make a Cha save. I know if it failed. If failed, the creature can't lie for 10 minutes",
				   "and all Charisma checks directed at target have advantage. The target is aware of the effect",
				]
			}],
			additional: "1 ki point; See 3rd page notes"
		},
		"subclassfeature6.1": {
			name: "Mystical Erudition",
			source: [["TDCSR", 174]],
			minlevel: 6,
			description: desc([
				"At 6th, 11th, and 17th level gain a language and skill/expertise; See 3rd page notes"
			]),
			toNotesPage : [{
				name : "Mystical Erudition",
				source : ["TDCSR", 174],
				popupName : "Mystical Erudition",
				page3notes : true,
				note : [
					"I gain a language and proficiency with one skill from Arcana, History, Investigation,",
					"Nature, or Religion or expertise if already proficient with one of those skills",
					"At 11th and 17th level, I learn one additional language and proficiency/expertise",
				]
			}],
			languageProfs: [1],
			additional: levels.map(function (n) {
				if (n < 3) return '';
				var num = n < 11 ? 1 : n < 17 ? 2 : 3;
				return num + " language" + (n < 11 ? "" : "s") + " \u0026 " + num + " skill" + (n < 11 ? "" : "s");
			}),
			changeeval: function(level) {
				if (level[1] >= 11 && level[0] < 11) {
					processLanguages(true, "Monk (Way of the Cobalt Soul): Mystical Erudition 11", [1]);
				}
				else if (level[1] < 11 && level[0] >= 11) {
					processLanguages(false, "Monk (Way of the Cobalt Soul): Mystical Erudition 11", [1]);
				}

				if (level[1] >= 17 && level[0] < 17) {
					processLanguages(true, "Monk (Way of the Cobalt Soul): Mystical Erudition 17", [1]);
				}
				else if (level[1] < 17 && level[0] >= 17) {
					processLanguages(false, "Monk (Way of the Cobalt Soul): Mystical Erudition 17", [1]);
				}
			},
			extraname: "Mystical Erudition",
			extrachoices: ["Arcana Proficiency", "Arcana Expertise", "History Proficiency", "History Expertise", "Investigation Proficiency", "Investigation Expertise", "Nature Proficiency", "Nature Expertise", "Religion Proficiency", "Religion Expertise"],
			extraTimes: levels.map(function (n) { return n < 11 ? 1 : n < 17 ? 2 : 3; }),
			"arcana proficiency" : {
				name: "Arcana Proficiency", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return v.skillProfs.indexOf("Arcana") == -1; },
				skills: ["Arcana"]
			},
			"arcana expertise" : {
				name : "Arcana Expertise", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return classes.known.monk && classes.known.monk.level >= 11 && v.skillProfs.indexOf("Arcana") !== -1; },
				skills : [["Arcana", "only"]]
			},
			"history proficiency" : {
				name: "History Proficiency", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return v.skillProfs.indexOf("History") == -1; },
				skills: ["History"]
			},
			"history expertise" : {
				name : "History Expertise", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return classes.known.monk && classes.known.monk.level >= 11 && v.skillProfs.indexOf("History") !== -1; },
				skills : [["History", "only"]]
			},
			"investigation proficiency" : {
				name: "Investigation Proficiency", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return v.skillProfs.indexOf("Investigation") == -1; },
				skills: ["Investigation"]
			},
			"investigation expertise" : {
				name : "Investigation Expertise", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return classes.known.monk && classes.known.monk.level >= 11 && v.skillProfs.indexOf("Investigation") !== -1; },
				skills : [["Investigation", "only"]]
			},
			"nature proficiency" : {
				name: "Nature Proficiency", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return v.skillProfs.indexOf("Nature") == -1; },
				skills: ["Nature"]
			},
			"nature expertise" : {
				name : "Nature Expertise", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return classes.known.monk && classes.known.monk.level >= 11 && v.skillProfs.indexOf("Nature") !== -1; },
				skills : [["Nature", "only"]]
			},
			"religion proficiency" : {
				name: "Religion Proficiency", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return v.skillProfs.indexOf("Religion") == -1; },
				skills: ["Religion"]
			},
			"religion expertise" : {
				name : "Religion Expertise", description : "",
				source: [["TDCSR", 174]],
				prereqeval : function(v) { return classes.known.monk && classes.known.monk.level >= 11 && v.skillProfs.indexOf("Religion") !== -1; },
				skills : [["Religion", "only"]]
			}
		},
		"subclassfeature11": {
			name: "Mind of Mercury",
			source: [["TDCSR", 174]],
			minlevel: 11,
			description: desc([
				"Once per turn, if I've taken my reaction this round, I can spend 1 ki point to take a reaction"
			]),
			action : ["reaction", " (1 Ki; 1/turn)"],
			additional: "1 ki point; once per turn"
		},
		"subclassfeature17": {
			name: "Debilitating Barrage",
			source: [["TDCSR", 174]],
			minlevel: 17,
			description: desc([
				"If I hit a creature with an unarmed strike, I can use 3 ki points to give it vulnerability to one",
				"damage type. Lasts for one minute or until the end of a turn in which it has taken damage",
				"of that type. If the creature has resistance to the chosen type, the resistance is suppressed",
				"instead of vulnerability. A creature cannot be affected by this feature again for 24 hours",
			]),
			additional: "3 ki points; See 3rd page notes"
		}
	}
});