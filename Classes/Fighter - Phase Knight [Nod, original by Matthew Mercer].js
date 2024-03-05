var iFileName = "Fighter - Phase Knight [Nod, original by Matthew Mercer].js"; 
RequiredSheetVersion(13);

SourceList[["F:PK"]] = {
	name : "Fighter - Phase Knight",
	abbreviation : "F:PK",
	group : "Nod's Homebrew",
	date : "2021/04/07"
};

// Add one subclass for Fighter
AddSubClass("fighter", "phase knight", {
	regExpSearch : /^(?=.*phase)(?=.*knight).*$/i,
	subname : "Phase Knight",
	source : [["F:PK"]],
	fullname : "Phase Knight",
	features : {
		"subclassfeature3" : {
			name : "Phase Projection",
			source : [["F:PK"]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can magically manifest a translucent image of myself within 15 ft",
				"My phase lasts until I dismiss it as a bonus action, I manifest another, or I'm incapacitated",
				"It is also destroyed if it is more than 30 ft away from me at the end of my turn",
				"It has 1 HP, immunity to all conditions, uses my save bonuses, and AC 14 + Prof Bonus",
				"On my turn as a free action, I can command it to move up to 30 ft in any direction",
				"As a bonus action, I can teleport to swap places with it, at a cost of 15 ft movement",
				"When I use the Attack action on my turn, I can have any attack originate from my phase",
				"I can also make opportunity attacks from the phase's location as if I were in its space"
				]),
			action: ["bonus action", "Phase (project/swap)"],
			creaturesAdd : [["Projected Phase"]],
			creatureOptions : [{
				name : "Projected Phase",
				source : [["F:PK"]],
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
				senses : "",
				passivePerception : 0,
				languages : "",
				challengeRating : "0",
				proficiencyBonus : 0,
				attacksAction : 0,
				attacks : [],
				features : [{
					name : "Phase",
					description : "The phase is a magical, translucent, gray image of its creator that that doesn't act and has no turn in combat. It lasts until it is destroyed, dismissed, another is manifested, or its creator is incapacitated. The phase is also destroyed if it is ever more than 30 ft away from its creator at the end of its creator's turn."
				}],
				traits : [{
					name : "Swap Place",
					description : "The phase's creator can, as a bonus action, teleport, magically swapping places with the phase at a cost of 15 feet of the creator's movement, regardless of the distance between the two."
				}, {
					name : "Attack Origin",
					description : "When the phase's creator takes the Attack action on their turn, any attack they make with that action can originate from the phase's space. This choice is made for each attack separately.\n   In addition, when a creature that the phase's creator can see within 5 ft of the phase moves at least 5 ft away from it, its creator can use their reaction to make an opportunity attack against that creature as if its creator was in the phase's space."
				}],
				header : "Phase",
				eval : function(prefix, lvl) {
					// Same size as character
					PickDropdown(prefix + "Comp.Desc.Size", tDoc.getField("Size Category").currentValueIndices);
					Value(prefix + "Comp.Desc.Age", What("Age"));
					Value(prefix + "Comp.Desc.Sex", What("Sex"));
					Value(prefix + "Comp.Desc.Height", What("Height"));
					Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
				}
			}]
		},
		"subclassfeature3.1" : {
			name : "Flash Density",
			source : [["F:PK"]],
			minlevel : 3,
			description : desc([
				"When I take the Attack action, I can make 1 additional melee attack from the phase's position",
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Synchronization",
			source : [["F:PK"]],
			minlevel : 7,
			description : desc([
				"As an action I can transfer my senses into my phase for up to 10 minutes. During this time I am",
				"blinded and deafened. My phase can be up to 1000 feet from me when used in this way."]),
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Oscillation Shift",
			source : [["F:PK"]],
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
			source : [["F:PK"]],
			minlevel : 15,
			description : desc([
				"If I do not already have temporary hit points when my phase is destroyed, I gain 2d6 + my",
				"Constitution modifier in temporary hit points"			
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Concurrent Projection",
			source : [["F:PK"]],
			minlevel : 18,
			description : desc([
				"When I use my bonus action to Phase Projection I can create two phases that both function",
				"for my Phase Knight abilities. If I try to summon a third the prior two are destroyed.",
				"If I roll initiative with no uses of Flash Density left, I regain one use."
			])
		}
	}
});
