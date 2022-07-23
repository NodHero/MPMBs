var iFileName = "Cleric - Time Domain (Revised) [Jonoman3000].js";

RequiredSheetVersion(13);
/* This file adds the Time Domain from reddit
(https://www.reddit.com/r/UnearthedArcana/comments/3nb6ee/5e_cleric_subclass_time_domain/) 
as requested by u/aliensrule528194. This version includes revisions posted by the author 
(https://www.reddit.com/r/UnearthedArcana/comments/3nb6ee/comment/cvpazmo/?utm_source=reddit&utm_medium=web2x&context=3)
but not added to the original document.  */

/* The Time domain focuses on the unending passage of time – one of the most powerful forces 
in the universe. Gods and Goddesses of time see every passing season, year, and lifetime. 
They control the cycles of life and death, and ultimately determine the fate of all peoples. 
Few deities are part of this domain, but there are a few notable ones, such as Savras or Istus. 
Clerics of a god of time are given godly insight and powerful chronomancy, which they use to 
protect and bring justice to the people of the world. */

// Define the sources
SourceList["HB"] = {
	name : "Cleric - Time Domain (Revised)",
	abbreviation : "HB",
	group : "Third Party",
};

AddSubClass("cleric", "time domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(time|temporal|chronal)\b).*$/i,
	subname : "Time Domain",
	source : ["HB"],
	spellcastingExtra : ["longstrider", "sleep", "blur", "gentle repose", "haste", "slow", "divination", "dimension door", "modify memory", "transmute rock"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source : ["HB"],
			minlevel : 1,
			description : "\n   " + "I learn the Mending cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (Mending)",
				spells : ["mending"],
				selection : ["mending"]
			},
		},
		"subclassfeature1.1" : {
			name : "Glimpse of the Future",
			source : ["HB"],
			minlevel : 1,
			description : "\n   " + "When I make an attack roll, ability check or saving throw, I may use my bonus action" + "\n   " + "to give myself advantage on the roll",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Continuum Split",
			source : ["HB"],
			minlevel : 2,
			description : "\n   " + "As an action, I present my holy symbol and create an invisible symbol that lasts for 1 minute" + "\n   " + "Whenever I take damage that doesn’t kill me outright, I may use my reaction to negate that" + "\n   " + "damage and teleport back to the symbol, destroying it." + "\n   " + "If the symbol still exists at the end of the duration, I can teleport back to it as a free action.",
			action : [["action", " (Create Symbol)"], ["reaction", ""]]
		},
		"subclassfeature6" : {
			name : "Improved Glimpse of the Future",
			source : ["HB"],
			minlevel : 6,
			description : "\n   " + "As a reaction when a creature that I can see within 30 ft of me makes an attack roll, ability" + "\n   " + "check, or saving throw, I can use my Glimpse of the Future to give advantage on the roll",
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["HB"],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += What('Wis Mod');
						};
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Deja Vu",
			source : ["HB"],
			minlevel : 17,
			description : "\n   " + "As part of the reaction used for 'Channel Divinity: Continuum Split,' I may cast a 6th level or" + "\n   " + "lower spell with a casting time of one action, reaction, or bonus action, without using a spell" + "\n   " + "slot. The spell must be one that I cast since creating Channel Divinity: Continuum Split's" + "\n   " + "symbol and must be able to target the creature that damaged me or target an area" + "\n   " + "centered on that creature.",
			action : [["reaction", " (with Continuum Split)"]]
		},
	},
});