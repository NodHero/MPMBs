var iFileName = "Wizard Cantrip Formulas.js";
RequiredSheetVersion("13.1.0");

AddFeatureChoice(ClassList.wizard.features["arcane recovery"], true, "Wizard Cantrip Formulas", {
	name : "Wizard Cantrip Formulas",
	extraname : "Optional Wizard 3",
	source : [["T", 76]],
	description : desc([
		"I have scribed arcane formulas in my spellbook with which I formulate cantrips in my mind",
		"Whenever I finish a long rest, I can use this to change a wizard cantrip I know for another"
	]),
	prereqeval : function (v) { return classes.known.wizard.level >= 3 ? true : "skip"; },
	usages : 1,
	recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName === 'wizard cantrip formulas') {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'wizard cantrip formulas') {
					spellObj.firstCol = "";
				};
			}
		]
	},
	eval : function () {
		CurrentSpells['wizard-wizard cantrip formulas'] = {
			name : 'Wizard Cantrip Formulas (option)',
			ability : "wizard",
			list : { 'class' : 'wizard', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'on the bottom left',
					spells : []
				}
			},
			typeList : 4,
			refType : "option",
			allowUpCasting : true,
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['wizard cantrip formulas'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	}
}, "Optional 3rd-level wizard features");

MagicItemsList["wizard cantrip formulas"] = {
	name : "Wizard Cantrip Formulas",
	source : ["X", 137],
	type : "wondrous item",
	rarity : "common",
	description : "You have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.",
	usages : 1,
	recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName === 'wizard cantrip formulas') {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'wizard cantrip formulas') {
					spellObj.firstCol = "";
				};
			}
		]
	},
	eval : function () {
		CurrentSpells['wizard-wizard cantrip formulas'] = {
			name : 'Wizard Cantrip Formulas (item)',
			ability : "wizard",
			list : { 'class' : 'wizard', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'on the bottom left',
					spells : []
				}
			},
			typeList : 4,
			refType : "item",
			allowUpCasting : true,
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['wizard cantrip formulas'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	}
};
