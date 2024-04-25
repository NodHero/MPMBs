var iFileName = "Fighter - Memory Knight [Nod, original by Matthew Mercer].js"; 
RequiredSheetVersion(13);

SourceList[["F:MK"]] = {
	name : "Fighter - Memory Knight",
	abbreviation : "NodHB-MK",
	group : "Nod's Homebrew",
	date : "2020/09/01"
};

// Add one subclass for Fighter
AddSubClass("fighter", "memory knight", {
	regExpSearch : /^(?=.*memory)(?=.*knight).*$/i,
	subname : "Memory Knight",
	source : [["F:MK"]],
	fullname : "Memory Knight",
	features : {
		"subclassfeature3" : {
			name : "Memory Projection",
			source : [["F:MK"]],
			minlevel : 3,
			description : desc([
				"I manifest an memory of myself in an unoccupied space I can see within 15 feet of me. This" + "\n   " + "memory is a magical, translucent, gray image of myself that lasts until destroyed, I dismiss it," + "\n   " + "I manifest another memory, or I'm incapacitated. My memory has AC 14 + my proficiency" + "\n   " + " bonus, 1 hit point, and immunity to all conditions. It uses my saving throw bonus, is the same" + "\n   " + "size as me, and it occupies its space. On my turn, I can mentally command the memory to" + "\n   " + "move up to 30 feet in any I can move. If my memory is ever more than 30 feet from me at" + "\n   " + "the end of my turn, it is destroyed.",
				"Memory Uses:",
				"> I can magically swap places with my memory at a cost of 15 feet of my movement",
				"> Any attack I make on my turn can originate from my space or the memory's space",
				"> I can make an opportunity attack against creatures as if I were in the memory's space."]),
			action: ["bonus action", "Memory (project/swap)"],
			creaturesAdd : [["Projected Memory"]],
			creatureOptions : [{
				name : "Projected Memory",
				source : [["F:MK"]],
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
					name : "Memory",
					description : "The memory is a magical, translucent, gray image of its creator that that doesn't act and has no turn in combat. It lasts until it is destroyed, dismissed, another is manifested, or its creator is incapacitated. The memory is also destroyed if it is ever more than 30 ft away from its creator at the end of its creator's turn."
				}],
				traits : [{
					name : "Swap Place",
					description : "The memory's creator can, as a bonus action, teleport, magically swapping places with the memory at a cost of 15 feet of the creator's movement, regardless of the distance between the two."
				}, {
					name : "Attack Origin",
					description : "When the memory's creator takes the Attack action on their turn, any attack they make with that action can originate from the memory's space. This choice is made for each attack separately.\n   In addition, when a creature that the memory's creator can see within 5 ft of the memory moves at least 5 ft away from it, its creator can use their reaction to make an opportunity attack against that creature as if its creator was in the memory's space."
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
			name : "Flashback",
			source : [["F:MK"]],
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
			source : [["F:MK"]],
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
			source : [["F:MK"]],
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
			source : [["F:MK"]],
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
			source : [["F:MK"]],
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
