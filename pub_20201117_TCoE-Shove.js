var iFileName = "pub_20201117_TCoE-Shove.js";
RequiredSheetVersion("13.1");
// This file adds "Telekinetic Shove" from the "Telekinetic" feat from Tasha's Cauldron of Everything as a weapon selection to MPMB's Character Record Sheet


// Define the source
SourceList.T = {
	name : "Tasha's Cauldron of Everything",
	abbreviation : "TCoE",
	abbreviationSpellsheet: "T",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
	date : "2020/11/17"
};

FeatsList["telekinetic"] = {
	name: "Telekinetic",
	source: [["T", 81]],
	descriptionFull : "You learn to move things with your mind, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.\n \u2022 As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save.",
	description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str save vs. this feat's spell save DC or be moved 5 ft from or towards me. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Int, Wis, or Cha]",
	action : [["bonus action", " Shove"]],
	spellcastingBonus : {
		name : "Mage Hand",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	},
	spellcastingAbility : 4,
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellKey !== "mage hand") return;
				spellObj.components = "";
				if (spellObj.description === SpellsList["mage hand"].description) spellObj.description = "Create (in)visible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple";
				var rangeRx = /(\d+)( ?ft| ?m)/i;
				if (!/^(?=.*telekinetic)(?=.*feat).*$/i.test(CurrentSpells[spName].name) && rangeRx.test(spellObj.range)) {
					// add the +30 ft rang only if not the entry for the feat itself
					var spRangeM = spellObj.range.match(rangeRx);
					spellObj.range = spellObj.range.replace(rangeRx, Number(spRangeM[1]) + (What("Unit System") === "metric" ? 9 : 30) + spRangeM[2]);
				}
				return true;
			},
			"My Telekinetic feat allows me to cast the Mage Hand cantrip without verbal or somatic components and I can make the spectral hand invisible. If I already know the cantrip from another source, its range is also increased with 30 ft."
		]
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : " away") + " from or towards me. Intelligence is my spellcasting ability for these. [+1 Intelligence]",
		spellcastingAbility : 4,
		weaponsAdd : ["Telekinetic Shove"],
		weaponOptions : {
		regExpSearch : /^(?=.*telekinetic)(?=.*shove).*$/i,
		name : "Telekinetic Shove",
		source: [["T", 81]],
		list : "spell",
		ability : 4,
		type : "AlwaysProf",
		damage : ["", "", "push/pull"],
		range : "30 ft",
		description : "Strength save (can willingly fail) or be moved 5 ft directly away from or towards me",
		abilitytodamage : false,
		dc : true
		},
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : " away") + " from or towards me. Wisdom is my spellcasting ability for these. [+1 Wisdom]",
		spellcastingAbility : 5,
		weaponsAdd : ["Telekinetic Shove"],
		weaponOptions : {
		regExpSearch : /^(?=.*telekinetic)(?=.*shove).*$/i,
		name : "Telekinetic Shove",
		source: [["T", 81]],
		list : "spell",
		ability : 5,
		type : "AlwaysProf",
		damage : ["", "", "push/pull"],
		range : "30 ft",
		description : "Strength save (can willingly fail) or be moved 5 ft directly away from or towards me",
		abilitytodamage : false,
		dc : true
		},
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : " away") + " from or towards me. Charisma is my spellcasting ability for these. [+1 Charisma]",
		spellcastingAbility : 6,
	weaponsAdd : ["Telekinetic Shove"],
	weaponOptions : {
	regExpSearch : /^(?=.*telekinetic)(?=.*shove).*$/i,
	name : "Telekinetic Shove",
	source: [["T", 81]],
	list : "spell",
	ability : 6,
	type : "AlwaysProf",
	damage : ["", "", "push/pull"],
	range : "30 ft",
	description : "Strength save (can willingly fail) or be moved 5 ft directly away from or towards me",
	abilitytodamage : false,
	dc : true
	},
		scores : [0, 0, 0, 0, 0, 1]
	}
};
