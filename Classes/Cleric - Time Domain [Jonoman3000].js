var iFileName = "Cleric - Time Domain [Jonoman3000].js";

RequiredSheetVersion(13);
// This file adds the Time Domain from reddit (https://www.reddit.com/r/UnearthedArcana/comments/3nb6ee/5e_cleric_subclass_time_domain/) as requested by u/aliensrule528194

/* The Time domain focuses on the unending passage of time – one of the most powerful forces 
in the universe. Gods and Goddesses of time see every passing season, year, and lifetime. 
They control the cycles of life and death, and ultimately determine the fate of all peoples. 
Few deities are part of this domain, but there are a few notable ones, such as Savras or Istus. 
Clerics of a god of time are given godly insight and powerful chronomancy, which they use to 
protect and bring justice to the people of the world. */

// Define the sources
SourceList["HB"] = {
	name : "Cleric - Time Domain",
	abbreviation : "HB",
	group : "Third Party",
};

AddSubClass("cleric", "time domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(time|temporal|chronal)\b).*$/i,
	subname : "Time Domain",
	source : ["HB"],
	spellcastingExtra : ["longstrider", "sleep", "blur", "gentle repose", "haste", "slow", "divination", "dimension door", "modify memory", "transmute rock", "foresight", "time stop"],
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
			description : "\n   " + "As a bonus action, I present my holy symbol and a visible time rift appears on the ground" + "\n   " + "below me, requiring my concentration. As a reaction or at the start of my next turn," + "\n   " + "I teleport to the rift and restore my health to what it was when I created the time rift",
			action : [["bonus action", ""], ["reaction", "Time Rift Teleport"]]
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
			name : "Master of Time",
			source : ["HB"],
			minlevel : 17,
			description : "\n   " + "I always have the Foresight and Time Stop spells prepared, which count as cleric spells for me",
		},
	},
});
