var iFileName = "Nod's Homebrew - Fighter-Phase Knight.js"; 
RequiredSheetVersion(13);

SourceList["NodHB-PK"] = {
	name : "Phase Knight",
	abbreviation : "NodHB-PK",
	group : "Nod's Homebrew",
	date : "2021/04/07"
};

// Add one subclass for Fighter
AddSubClass("fighter", "phase knight", {
	regExpSearch : /^(?=.*phase)(?=.*knight).*$/i,
	subname : "Phase Knight",
	source : ["NodHB-PK"],
	fullname : "Phase Knight",
	features : {
		"subclassfeature3" : {
			name : "Phase Projection",
			source : ["NodHB-PK"],
			minlevel : 3,
			description : desc([
				"I project a phase of myself in an unoccupied space I can see within 15 feet of me. This", 
				"phase is a magical, translucent, gray image the same size as me that occupies its space.",
				"It lasts until destroyed, I dismiss it, I manifest another phase, or I'm incapacitated. My phase",
				"has AC 14 + my proficiency bonus, 1 hit point, immunity to all conditions, and uses my",
				"saving throw bonus. On my turn, I can mentally command the phase to move up to",
				"30 feet in any direction (no action required). If my phase is ever more than 30 feet from",
				"me at the end of my turn, it is destroyed.",
				"> As a Bonus action, I can use 15 feet of my movement to magically swap places with it",
				"> When I take the Attack action, my attacks can originate from my or the phase's space",
				"> When a creature I can see within 5 feet of my phase moves at least 5 feet away from",
				"    it, I can make a reaction opportunity attack against that creature from the phase's space"
				]),
			action: ["bonus action", "Phase (project/swap)"],
			eval : function (lvl, chc) {
				companionUtil.add("Phase");
			},
			removeeval : function (lvl, chc) {
				companionUtil.remove("phase");
				if (CreatureList.phase && CreatureList.phase.removeeval) CreatureList.phase.removeeval();
			}
		},
		"subclassfeature3.1" : {
			name : "Flash Density",
			source : ["NodHB-PK"],
			minlevel : 3,
			description : desc([
				"When I take the Attack action, I can make 1 additional melee attack from the phase's space",
			]),
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Synchronization",
			source : ["NodHB-PK"],
			minlevel : 7,
			description : desc([
				"As an action I can transfer my senses into my phase for 10 minutes. During this time I am",
				"blinded and deafened. My phase can be up to 1000 feet from me when used in this way."]),
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Oscillation Shift",
			source : ["NodHB-PK"],
			minlevel : 10,
			description : desc([
				"Before an attack roll is made at another creature I can see, I can use my reaction to teleport",
				"my phase to an unoccupied space within 5 feet of the targeted creature. The attack roll that",
				"triggered the reaction is instead made against my phase."
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Reverberation",
			source : ["NodHB-PK"],
			minlevel : 15,
			description : desc([
				"If I do not already have temporary hit points when my phase is destroyed, I gain 2d6 + my",
				"Constitution modifier in temporary hit points"			
			]),
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Concurrent Projection",
			source : ["NodHB-PK"],
			minlevel : 18,
			description : desc([
				"When I use my bonus action to Phase Projection I can create two phases that both function",
				"for my Phase Knight abilities. If I try to summon a third the prior two are destroyed.",
				"If I roll initiative with no uses of Flash Density left, I regain one use."
			])
		}
	}
});

CreatureList.phase = {
	name : "Phase",
	source : ["NodHB-PK"],
	size : 3,
	type : "",
	subtype : "",
	alignment : "Neutral",
	ac : 14,
	hp : 1,
	hd : [],
	speed : "0 ft",
	scores : [10, 10, 10, 10, 10, 10],
	saves : ["", "", "", "", "", ""],
	condition_immunities : "all conditions",
	passivePerception : 0,
	senses : "",
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 0,
	attacksAction : 0,
	attacks : [],
	eval : function(prefix) {

		// HP is only ever 1
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.readonly = true;
		Hide(prefix + "Buttons.Comp.Use.HP.Max");

		// Phase type
		var theType = tDoc.getField(prefix + 'Comp.Type');
		theType.readonly = true;
		theType.value = 'Phase';

		// Armour class is 14 + character proficiency
		var armourClass = tDoc.getField(prefix + 'Comp.Use.AC');
		armourClass.readonly = true;
		armourClass.setAction("Calculate", "event.value = 14 + Number(How('Proficiency Bonus'));");

		// Same size as character
		PickDropdown(prefix + "Comp.Desc.Size", CurrentRace.size);

		// Saving throws are the same as the character's
		for (var i = 0; i < AbilityScores.abbreviations.length; i++) {
			var abi = AbilityScores.abbreviations[i];
			var saveModBonus = tDoc.getField(prefix + 'BlueText.Comp.Use.Ability.' + abi + '.ST.Bonus');
			saveModBonus.readonly = true;
			saveModBonus.setAction("Calculate", "event.value = What('" + abi + " ST Mod');");
		}
		// TODO: This doesn't quite work, as this bonus is unfortunately calculated after the actual save.
	}
};

function usagescalcStr(mod) {
	return "event.value = Math.max(1, What('" + mod + " Mod'));";
}

var companionUtil = {
	add : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefix = false;
		if (AScompA) {
			for (var a = 1; a < AScompA.length; a++) {
				if (!What(AScompA[a] + 'Comp.Race')) {
					prefix = AScompA[a];
					break;
				}
			}
		}
		if (!prefix) prefix = DoTemplate('AScomp', 'Add');
		Value(prefix + 'Comp.Race', compName);
		var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
		CurrentUpdates.types.push("notes");
		if (!CurrentUpdates.notesChanges) {
			CurrentUpdates.notesChanges = [changeMsg];
		} else {
			CurrentUpdates.notesChanges.push(changeMsg);
		}
		return prefix;
	},
	remove : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		if (!AScompA) return;
		compName = compName.toLowerCase();
		for (var a = 1; a < AScompA.length; a++) {
			if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
				DoTemplate("AScomp", "Remove", AScompA[a], true);
			}
		}
	},
	find : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefixes = [];
		if (!AScompA) return prefixes;
		compName = compName.toLowerCase();
		for (var a = 1; a < AScompA.length; a++) {
			if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) prefixes.push(AScompA[a]);
		}
		return prefixes;
	}
};
