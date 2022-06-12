/*	-INFORMATION-

	Subject:	Subclass
	Effect:		This script adds a subclass for the Monk, called "Way of the Mirror" 
				to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
				Subclass created by NodHero, inspired by and heavily borrowed from the Echo Knight 
				in Explorer's Guide to Wildemount (https://dnd.wizards.com/products/wildemount)
	Code by:	NodHero
	Date:		2022-06-12 (sheet v13)
*/

var iFileName = "Monk - Way of the Mirror [Nod].js"; 
RequiredSheetVersion("13.1.0");

// Define the source
SourceList["NHB-WM"] = {
	name : "Monk - Way of the Mirror",
	abbreviation : "NHB-WM",
	group : "Nod's Homebrew",
	date : "2022/06/12"
};

AddSubClass("monk", "way of the mirror", {
	regExpSearch : /^(?=.*mirror)((?=.*(monk|monastic|dancer))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Mirror",
	source : ["NHB-WM", 1],
	features : {
		"subclassfeature3" : {
			name : "Cast Reflection",
			source : [["NHB-WM", 1]],
			minlevel : 3,
			description : ' [see 3rd page]',
			action: [["bonus action", "Reflection (summon/dismiss)"], ["bonus action", "Reflection (swap location)"]],
			creaturesAdd : [["Reflection (Monk)"]],
			creatureOptions : [{
				name : "Reflection (Monk)",
				source : [["NHB-WM", 1]],
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
				damage_immunities : "poison, psychic",
				passivePerception : 0,
				languages : "",
				challengeRating : "0",
				proficiencyBonus : 0,
				attacksAction : 0,
				attacks : [],
				features : [{
					name : "Reflection",
					description : "The reflection is a magical, translucent, silver image of its creator that doesn't act and has no turn in combat. It lasts until destroyed, dismissed, another is manifested, or its creator is incapacitated. The reflection is also destroyed if it is ever more than 30 ft away from its creator at the end of its creator's turn."
				}],
				traits : [{
					name : "Swap Place",
					description : "The reflection's creator can, as a bonus action, teleport, magically swapping places with the reflection at a cost of 15 feet of the creator's movement, regardless of the distance between the two."
				}, {
					name : "Attack Origin",
					description : "When the reflection's creator takes the Attack action on their turn or makes an unarmed strike as part of a bonus action, any attack they make can originate from the reflection's space. This choice is made for each attack separately.\n   In addition, when a creature that the reflection's creator can see within 5 ft of the reflection moves at least 5 ft away from it, its creator can use their reaction to make an opportunity attack with an unarmed strike or a monk weapon against that creature as if its creator was in the reflection's space."
				}],
				header : "Reflection",
				eval : function(prefix, lvl) {
					// Same size as character
					PickDropdown(prefix + "Comp.Desc.Size", tDoc.getField("Size Category").currentValueIndices);
					Value(prefix + "Comp.Desc.Age", What("Age"));
					Value(prefix + "Comp.Desc.Sex", What("Sex"));
					Value(prefix + "Comp.Desc.Height", What("Height"));
					Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
				}
			}],
			"cast reflection" : {
			name : "Cast Reflection",
			extraname : "Way of the Mirror 3",
			source : [["NHB-WM", 1]],
			description : desc([
				"As a bonus action, I can magically manifest a translucent silver image of myself within 15 ft",
				"It counts as an object, has 1 HP, AC 14 + Prof. Bonus, immunity to poison/psychic damage",
				"and all conditions. It uses my save bonuses, and lasts until destroyed, I dismiss it, manifest",
				"another, or I'm incapacitated. If it is ever more than 30 ft away from me at the end of my turn,",
				"it is destroyed. On my turn, I can move it (no action required) up to 30 ft in any direction",
				"As a bonus action, I can teleport to swap places with it, at a cost of 15 ft movement",
				"When I use the Attack action or make an unarmed strike as part of a bonus action, attacks",
				"can originate from my reflection. I can also make opportunity attacks as if I were in its space",
			]),
			},
			autoSelectExtrachoices : [{
				extrachoice : "cast reflection",
			}],
		"subclassfeature3.1" : {
			name : "Mirror Incantations",
			source : ["NHB-WM", 1],
			minlevel : 3,
			description : "\n   " + "I know the Minor Illusion cantrip and can cast certain spells by using ki (see page 3)",
			spellcastingBonus : {
				name : "Mirror Incantations",
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				firstCol : "atwill",
			},
			spellFirstColTitle : "Ki",
			"mirror spells" : {
				name : "Mirror Spells",
				extraname : "Mirror Incantations",
				source : ["NHB-WM", 1],
				description : " [2 ki points, no material components]" + "\n   " + "As an action, I can cast Alter Self, Blur, Disguise Self, or Mirror Image",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mirror Incantations",
					spells : ["alter self", "blur", "disguise self", "mirror image"],
					selection : ["alter self", "blur", "disguise self", "mirror image"],
					firstCol : 2,
					times : 4
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "mirror spells" }],
		},
		},
		"subclassfeature6" : {
			name : "Glass Looking",
			source : [["NHB-WM", 1]],
			minlevel : 6,
			description : desc([
				"As an action, I can temporarily transfer my consciousness to my reflection for up to 10 min",
				"During this time, I see and hear through its eyes and ears, but not my own eyes and ears",
				"While I use my reflection this way, it can be up to 1000 ft away from me without issue",
				"I can end this at any time, requiring no action",
			]),
			action : [["action", ""]],
			usages : "Prof. Bonus per ",
			recovery : "long rest",
			usagescalc : "event.value = How('Proficiency Bonus');",
			altResource : "1 ki",
		},
		"subclassfeature11" : {
			name : "Interpose Reflection",
			source : [["NHB-WM", 1]],
			minlevel : 11,
			description : desc([
				"As a reaction when a creature I can see is attacked, I can make my reflection the target",
				"Before the attack roll, the reflection teleports to an empty space within 5 ft of the creature",
				"The attack roll of the triggering attack is then made against the reflection instead",
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "2 ki",
		},
		"subclassfeature17" : {
			name : "Mirror Dance",
			source : ["NHB-WM", 1],
			minlevel : 17,
			description : desc([
				"As a reaction, if a creature within 5 ft of me or my reflection is hit by another, I can make a", 
				"melee attack with an unarmed strike or a monk weapon against that creature from my or",
				"the reflection's space. In addition, when my reflection is destroyed by taking damage, I gain",
				"five times my Prof. Bonus in temp HP if I don't already have temporary hit points",
			]),
			action : [["reaction", " (when other attacks)"], ["reaction", " (when Reflection destroyed)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "3 ki",
			additional : "gain temp HP"
		}
	}
});	