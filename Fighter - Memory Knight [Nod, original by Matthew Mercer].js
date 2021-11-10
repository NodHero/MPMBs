var iFileName = "Fighter - Memory Knight [Nod, original by Matthew Mercer].js"; 
RequiredSheetVersion(13);

SourceList["NodHB-MK"] = {
	name : "Memory Knight",
	abbreviation : "NodHB-MK",
	group : "Nod's Homebrew",
	date : "2020/09/01"
};

// Add one subclass for Fighter
AddSubClass("fighter", "memory knight", {
	regExpSearch : /^(?=.*memory)(?=.*knight).*$/i,
	subname : "Memory Knight",
	source : ["NodHB-MK"],
	fullname : "Memory Knight",
	features : {
		"subclassfeature3" : {
			name : "Memory Projection",
			source : ["NodHB-MK"],
			minlevel : 3,
			description : desc([
				"I manifest an memory of myself in an unoccupied space I can see within 15 feet of me. This" + "\n   " + "memory is a magical, translucent, gray image of myself that lasts until destroyed, I dismiss it," + "\n   " + "I manifest another memory, or I'm incapacitated. My memory has AC 14 + my proficiency" + "\n   " + " bonus, 1 hit point, and immunity to all conditions. It uses my saving throw bonus, is the same" + "\n   " + "size as me, and it occupies its space. On my turn, I can mentally command the memory to" + "\n   " + "move up to 30 feet in any I can move. If my memory is ever more than 30 feet from me at" + "\n   " + "the end of my turn, it is destroyed.",
				"Memory Uses:",
				"> I can magically swap places with my memory at a cost of 15 feet of my movement",
				"> Any attack I make on my turn can originate from my space or the memory's space",
				"> I can make an opportunity attack against creatures as if I were in the memory's space."]),
			action: ["bonus action", "Memory (project/swap)"],
			eval : function (lvl, chc) {
				companionUtil.add("Memory");
			},
			removeeval : function (lvl, chc) {
				companionUtil.remove("memory");
				if (CreatureList.memory && CreatureList.memory.removeeval) CreatureList.memory.removeeval();
			}
		},
		"subclassfeature3.1" : {
			name : "Flashback",
			source : ["NodHB-MK"],
			minlevel : 3,
			description : desc([
				"I can make one additional melee attack from the memory's position",
				"I can use this feature a number of times equal to my Constitution modifier",
				"I regain all expended uses when I finish a long rest"
			]),
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Reminiscence",
			source : ["NodHB-MK"],
			minlevel : 7,
			description : desc([
				"I can temporarily transfer my consciousness to my memory",
				"I am deafened and blinded and I can see and hear through my memory",
				"I can sustain this effect for up to 10 minutes, and I can end it at any time",
				"My memory can be up to 1,000 feet away from me without being destroyed"]),
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Sudden Recollection",
			source : ["NodHB-MK"],
			minlevel : 10,
			description : desc([
				"Before an attack roll is made, I can use my reaction to teleport the memory",
				"It must be to an unoccupied space within 5 feet of the targeted creature",
				"The attack roll that triggered the reaction is instead made against my memory.",
				"I can't use this feature again until I finish a short or long rest."
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Instant Recall",
			source : ["NodHB-MK"],
			minlevel : 15,
			description : desc([
					"When my memory is destroyed and I don't already have temporary hit points",
					"I can gain a number of temporary hit points equal to 2d6 + my Constitution modifier",
					"I can use this feature a number of times equal to my Constitution modifier (min. 1)",
					"I regain all expended uses when I finish a long rest"			
			]),
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Past, Present and Future",
			source : ["NodHB-MK"],
			minlevel : 18,
			description : desc([
					"I create two memories with my Memory Projection feature, and these memories can coexist",
					"If I try to create a third memory, the previous two memories are destroyed",
					"Anything I can do from one memory's position can be done from the other's instead",
					"I regain one use of Flashback if I have no more remaining when I roll initiative"
			])
		}
	}
});

CreatureList.memory = {
	name : "Memory",
	source : ["NodHB-MK"],
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

		// Memory type
		var theType = tDoc.getField(prefix + 'Comp.Type');
		theType.readonly = true;
		theType.value = 'Memory';

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
