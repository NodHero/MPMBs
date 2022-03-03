/*  -WHAT IS THIS?-
    The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
    You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
 
    -KEEP IN MIND-
    Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
    It is recommended to enter the code in a fresh sheet before adding any other information.
*/
 
/*  -INFORMATION-
    Subject:    Class
    Effect:     This script adds the class called "Warden" and its 7 subclasses known as Champion's Calls.
                This is taken from Valda's Spire of Secrets
                This content is made by Nanur
    Original:   Nanur
    Completed:  /u/Nanur
    Date:       2022-01-25 (sheet v13.000)
 
    Code Version:   1.0
*/

var iFileName = "warden.js";
RequiredSheetVersion(13.000);

// Define the source
SourceList["VSoS"] = {
	name : "Valda's Spire of Secrets",
	abbreviation : "VSoS",
	group : "Homebrew",
	url : "https://www.kickstarter.com/projects/magehandpress/spire-of-secrets",
	date : "2021/12/30"
};

//The Warden class
ClassList["warden"] = {
	regExpSearch : /warden/i,
	name : "Warden",
	source : ["HB", 1],
	primaryAbility : "" 
 + "\n \u2022 Warden: Constitution;",
	prereqs : "" 
 + "\n \u2022 Warden: Strength or Dexterity 13, and Constitution 13;",
	improvements : [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
	die : 10,
	saves : ["Str", "Con"],
	skills : ["" 
 + "\n" 
 + "\n" + toUni("Warden") + ": Choose two from Animal Handling, Athletics, Nature, Perception, and Survival."],
	armor : [
		[true, true, false, true],
		[true, true, false, true]
	],
	weapons : [
		[true, true],
		[true, true]
	],
	equipment : "Warden starting equipment:" 
 + "\n \u2022 A shield and any martial weapon;" 
 + "\n \u2022(a) chain shirt, (b) leather armor and a spear, or (c) chain mail (if proficient);" 
 + "\n \u2022(a) two light hammers or (b) any simple melee weapon;" 
 + "\n \u2022 (a) a dungeoneer’s pack or (b) an explorer’s pack;" 
 + "\n \u2022 " 
 + "\n" 
 + "\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Champion's Call", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave : 3,
	features : {
		"classfeature1" : {
			name : "Sentinel's Stand",
			source : ["HB: Warden", 3],
			minlevel : 1,
			description :  desc([
				"Wardens are towers that cannot easily be felled. Use the \"Choose Features\" button above to select an option."
			]),
			extraname : "Sentinel's Stand options",
			choices : ["Armor Proficiency", "Primal Toughness", "Stalwart Spirit"],
			"armor proficiency" : {
				name : "Armor Proficiency",
				source : ["HB", 2],
				description : desc([
					"I gain proficiency with heavy armor."
				]),
				armor : [false, false, true, false],
			},
			"primal toughness" : {
				name : "Primal Toughness",
				source : ["HB", 2],
				description : desc([
					"my hit point maximum increases by 1 + my Constitution modifier, and it increases by 1 every time I gain a level in this class."
				]),
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (classes.known.warden) {
							return [classes.known.warden.level+HDobj.conMod, "Primal Toughness (Warden)"];
						}
					},
				},
				
			},
			"stalwart spirit" : {
				name : "Stalwart Spirit",
				source : ["HB", 2],
				description : desc([
					"I gain proficiency in one saving throw of my choice."
				]),
			},
		},
		"classfeature2" : {
			name : "Warden’s Grasp",
			source : ["HB: Warden", 3],
			minlevel : 1,
			description : levels.map(function(lvl) {
  if (lvl >= 14) {
    return desc(['At 14th level, the range of this ability increases to 10 feet.']);
  }
  return desc(['As a bonus action I can  ensnare nearby enemies into combat. Until the beginning of my next turn, I can’t move, and each Large or smaller creature I choose within 5 feet can’t willingly move away from me unless it first takes the Disengage action.']);
}),
				 
			action : ["bonus action", ""],
		},
		"classfeature3" : {
			name : "Fighting Style",
			source : ["HB: Warden", 4],
			minlevel : 2,
			description : "" 
 + "\n   " + "I adopt a style of fighting as my specialty. I can’t take a Fighting Style option more than once, even if I later get to choose again. Use the \"Choose Features\" button above to select a Fighting Style.",
			extraname: "Fighting Style",
			choices : ["Crippling", "Great Weapon Fighting", "Protection", "Titan Fighting"],
			"crippling" : {
				name : "Fighting Style: Crippling",
				source : ["HB: Warden", 4],
				description : desc([
					"When I hit a creature with a melee weapon attack, its speed is reduced by 10 feet, to a minimum of 0, until the end of its next turn, and it can’t take the Dash action until the end of its turn."
				]),
				},
			"great weapon fighting" : {
				name : "Fighting Style: Great Weapon Fighting",
				source : ["HB: Warden", 4],
				description : desc([
					"When I roll a 1 or 2 on a damage die for an attack I make with a melee weapon that I am wielding with two hands, I can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for I to gain this benefit."
				]),
				},
			"protection" : {
				name : "Fighting Style: Protection",
				source : ["HB: Warden", 4],
				description : desc([
					"When a creature I can see attacks a target other than I that is within 5 feet of I, I can use my reaction to impose disadvantage on the attack roll. I must be wielding a weapon or shield."
				]),
				action : ["reaction", ""],
				},
			"titan fighting" : {
				name : "Fighting Style: Titan Fighting",
				source : ["HB: Warden", 4],
				description : desc([
					"I gain a +2 bonus to melee weapon attack rolls I make against Large or larger creatures."
				]),
				},
		},
		"classfeature4" : {
			name : "Warden’s Mark",
			source : ["HB: Warden", 3],
			minlevel : 2,
			description : levels.map(function(lvl) {
  if (lvl >= 11) {
    return desc(['At 11th level, whenever I take the Attack action on my turn, I can make an additional attack against a creature I have marked.']);
  }
  return desc(['I can use my bonus action to mark a creature I can see within 30 feet. While within 5 feet of me, it has disadvantage on any attack roll that don’t target me. Lasts for 1 minute, until I mark another creature, become incapacitated, or die.']);
}),
			action : ["bonus action", ""]
		},
		"classfeature5" : {
			name : "Warden's Resolve",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description : levels.map(function(lvl) {
  if (lvl >= 17) {
    return desc(['Starting at 17th level, when my hit points are less than half my maximum, I have resistance to all damage except psychic.']);
  }
  return desc(['Whenever my hit points are less than half my maximum, I have resistance to bludgeoning, piercing, and slashing damage.']);
}),
		},
		"classfeature6" : {
			name : "Font of Life",
			source : ["HB: Warden", 3],
			minlevel : 4,
			description : levels.map(function(lvl) {
  if (lvl >= 15) {
    return desc([' At 15th level, once per day when I use this ability, my hit points are also restored to half my maximum, if they were lower.']);
  }
  return desc(['I can use my action to end either one disease or one condition afflicting me. The condition can be blinded, charmed, deafened, frightened, paralyzed, or poisoned. I can use this action even if the condition I end would otherwise prevent it.']);
}),
			action : ["action", ""],
			recovery : "short rest",	
			usages : 1,
		},
		"classfeature7" : {
			name : "Sentinel’s Step",
			source : ["HB: Warden", 4],
			minlevel : 7,
			description : "" 
 + "\n   " + "Wardens are faultless trackers, which can navigate hazardous terrain with ease. At 7th level, select one of the following features.",
			extraname: "Sentinel’s Step",
			choices : ["Earthstrength", "Thundering Charge", "Wildblood"],
			"earthstrength" : {
				name : "Sentinel’s Step: Earthstrength",
				source : ["HB: Warden", 4],
				description : desc([
					"I possess the might of the earth itself. my carrying capacity doubles, and I have advantage on ability checks and saving throws against being pushed against my will or knocked prone."
				]),
				eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
				},
			"thundering charge" : {
				name : "Sentinel’s Step: Thundering Charge",
				source : ["HB: Warden", 4],
				description : desc([
					"On my first round of combat, my speed increases by 30 feet and I have advantage on the first melee weapon attack I make."
				]),
				},
			"wildblood" : {
				name : "Sentinel’s Step: Wildblood",
				source : ["HB: Warden", 4],
				description : desc([
					"my reflexes have been honed by the perils of nature. I can’t be surprised while I am conscious. Additionally, I have a +5 bonus to my passive Wisdom (Perception) and passive Intelligence (Investigation) scores."
				]),
				addMod : [
					{ type : "", field : "Passive Perception Bonus", mod : "+5", text : "I have a +5 bonus to my passive Wisdom (Perception) and passive Intelligence (Investigation) scores." },
				],
				},
		},
		"classfeature8" : {
			name : "Undying",
			source : ["HB: Warden", 3],
			minlevel : 9,
			description : desc([
				"When I am reduced to 0 hit points and are not killed outright, I can choose to drop to 1 hit point instead. Once I use this ability, I can’t use it again until I finish a long rest."
			]),
			recovery : "long rest",	
			usages : 1,
			oncelr : true
		},
		"classfeature9" : {
			name : "Interrupt",
			source : ["HB: Warden", 3],
			minlevel : 10,
			description : desc([
				"As a reaction when a creature within 5 feet of I makes a melee attack against me, I can punctuate its strikes. After that attack, the creature can make one fewer attack than normal on this turn."
			]),
			action : ["reaction", ""],
		},
		"classfeature10" : {
			name : "Sentinel’s Soul",
			source : ["HB: Warden", 4],
			minlevel : 18,
			description : "" 
 + "\n   " + "Wardens are unshakable guardians that cannot be bowed. At 18th level, choose one of the following features.",
			extraname: "Sentinel’s Soul",
			choices : ["Ageless Guardian", "Eyes of the Mountain", "Impenetrable Mind"],
			"ageless guardian" : {
				name : "Sentinel’s Soul: Ageless Guardian",
				source : ["HB: Warden", 4],
				description : desc([
					"I am immune to poison and disease, no longer need food or water, suffer none of the frailty of old age, and can’t be aged magically. I can still die of old age, however. Additionally, I have advantage on Dexterity saving throws."
				]),
				eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
				},
			"eyes of the mountain" : {
				name : "Sentinel’s Soul: Eyes of the Mountain",
				source : ["HB: Warden", 4],
				description : desc([
					"I gain tremorsense with a range of 15 feet, and can detect the presence of hidden or invisible creatures within 30 feet. Additionally, I have advantage on Constitution saving throws"
				]),
				},
			"impenetrable mind" : {
				name : "Sentinel’s Soul: Impenetrable Mind",
				source : ["HB: Warden", 4],
				description : desc([
					"my thoughts can’t be read, and I can’t be charmed or frightened. Additionally, I have advantage on Wisdom saving throws."
				]),
				},
		},
	}
};

AddSubClass("warden", "bloodwrath guardian", {
	regExpSearch : /bloodwrath guardian/i,
	subname : "Bloodwrath Guardian",
	source : ["HB", 15],
	features : {
		"subclassfeature1" : {
			name : "Feral Trance",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc([
				"I can fall into a primal battle trance as a bonus action. While in my trance, I gain the following benefits: " 
 + "\n• I have advantage on Strength checks and Strength saving throws. " 
 + "\n• my base movement speed increases by 10 feet." 
 + "\n• I have advantage on all melee weapon attack rolls using Strength against a creature I have marked. " 
 + "\n• Attacks against me have advantage. " 
 + "\nYour trance lasts for 1 minute. It ends early if I am knocked unconscious or if my turn ends and I haven’t attacked a hostile creature since my last turn or taken damage since then. I can also end my trance on my turn as a bonus action. Once I use this ability, I can’t use it again until I finish a short or long rest."
			]),
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			},
		"subclassfeature2" : {
			name : "Predator's Scent",
			source : ["HB: Warden", 3],
			minlevel : 6,
			description :  desc(["By 6th level, I hunt like an animal. A creature I have marked can remain marked for up to 24 hours, even if it moves out of my sight. Additionally, while this creature is marked, I can track it effortlessly; I know the direction and distance to the creature while it remains on the same plane of existence."]),
		},
		"subclassfeature3" : {
			name : "Evasion",
			source : ["HB: Warden", 3],
			minlevel : 13,
			description :  desc(["Beginning at 13th level, I can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When I am subjected to an effect that allows I to make a Dexterity saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail."]),
		},
		"subclassfeature4" : {
			name : "Form of the Primal Beast",
			source : ["HB: Warden", 3],
			minlevel : 20,
			description :  desc(["At 20th level, as an action, I can transform into a hunched thing of fur and shadow, an echo of the Primal Beast. For 1 minute, I gain the following features: " 
 + "\n • I gain all the benefits of Feral Trance. " 
 + "\n • I gain temporary HP equal to twice my level. " 
 + "\n • When I hit a creature with a melee weapon attack, I can give the target a bleeding wound. Constructs, oozes, and undead can’t get bleeding wounds. A creature loses 1d8 hit points at the start of each of its turns for each of its bleeding wounds unless it uses an action to staunch the bleeding. While a target is bleeding, it can't regain lost hit points. A creature can have a number of bleeding wounds up to my proficiency bonus. Once I use this feature, I can’t use it again until I finish a long rest."]),
			Recovery : "long rest",
			usages : 1,
			action : ["action", ""],
		},
	}
});
AddSubClass("warden", "grey watchman", {
	regExpSearch : /grey watchman/i,
	subname : "Grey Watchman",
	source : ["HB", 15],
	features : {
		"subclassfeature1" : {
			name : "Battle Tactics",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc([
				"Battle Dice. A battle die is expended when I use it. I regain all of my battle dice when I take a short or long rest, or when I roll initiative. Once per turn, I can expend a battle die to perform a maneuver of my choice. my maneuver options are detailed at the notes section. Save DC mod is Str or Dex (my choice)."
			]),
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			additional : levels.map(function (n) {
				if (n < 3) return "";
				return (n < 7 ? "2d8" : n < 13 ? "3d8" : n < 19 ? "3d10" : "4d10") + " battle die";
			}),
			toNotesPage : [{
				page3notes : true,
				name : "Maneuvers",
				note : "\n The maneuvers are presented in alphabetical order." + "\n\n" +"Bull Rush" + "\n" +" When I move at least 10 feet in astraight line and immediately make a melee weapon attack against a creature, I can use a bonus action and expend a battle die to shove the target after the attack. Add the battle die to the Strength (Athletics)check I make to shove the target. On a success, I can push the target 10 feet, instead of only 5." + "\n\n" +"Bulwark" + "\n" +"When I hit a creature with a melee attack, I can expend a battle die as a bonus action to brace myself for its counterattack. The next time the creature damages I before the start of my next turn, I can roll the battle die and subtract the result from the damage dealt." + "\n\n" +"Cleave" + "\n" +"When I reduce a hostile creature to 0 hit points or score a critical hit with a melee weapon attack on my turn, I can spend a battle die to move up to 15 feet and make an additional melee weapon attack. I add the battle die to the attack’s damage roll." + "\n\n" +"Heelcutter" + "\n" +"When I make an opportunity attack against a creature, I can expend one battle die to knock the creature off balance, preventing it from escaping. I add the battle die to the attack roll, and the target must make a Strength saving throw. On a failed save, its speed is reduced to 0 until the end of its turn." + "\n\n" +"Reckless Assault" + "\n" +"When I make an attack against a creature, I can expend a battle die to make a wild, desperate strike, leaving I vulnerable. I have advantage on the attack roll. Until the beginning of my next turn, however, attack rolls against me have advantage." + "\n\n" +"Staggering Strike" + "\n" +"As a bonus action when I make a weapon attack against a creature, I can expend a battle die to attempt to stun a humanoid target. On a hit, the target must make a Constitution saving throw or be incapacitated until the beginning of my next turn.",
			}],
		},
			"subclassfeature2" : {
			name : "Hold the Line",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc([
				"At 3rd level, when I use my Warden’s Grasp, any creature I choose other than myself within the effect’s area gains a +1 bonus to Armor Class and saving throws until the beginning of my next turn while it remains in the effect’s area."
			]),
			},
			"subclassfeature3" : {
			name : "Fortification Expert",
			source : ["HB: Warden", 3],
			minlevel : 6,
			description :  desc([
				"By 6th level, my experience manning battlements and blockades has given I insight in how to raise and reinforce them. I have advantage on any ability check I make to erect defensive fortifications, examine walls and other defenses for weak points and entryways, or climb constructed walls. Additionally, I can treat three-quarters cover as full cover."
			]),
			},
			"subclassfeature4" : {
			name : "Mettle",
			source : ["HB: Warden", 3],
			minlevel : 13,
			description :  desc([
				"Also at 13th level, my determination allows you to shrug off effects that would otherwise harm I. When I am subjected to an effect that allows I to make a Constitution saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail."
			]),
			},
			"subclassfeature5" : {
			name : "Unbreakable Sentinel",
			source : ["HB: Warden", 3],
			minlevel : 20,
			description :  desc([
				"I can use my action to transform into a paragon of battle. For the next minute, I gain the following benefits:" 
 + "\n• I have a +2 bonus to Armor Class." 
 + "\n• Whenever I hit a creature I have marked, I regain an expended battle die." 
 + "\n• I can take an additional reaction during each round of combat. I can only take one reaction during each turn. Once I use this ability, I can’t use it again until I finish a long rest."
			]),
			action : ["action",""],
			recovery : "long rest",
			usages : 1,
			},
	}
});
AddSubClass("warden", "nightgaunt", {
	regExpSearch : /nightgaunt/i,
	subname : "Nightgaunt",
	source : ["HB", 15],
	features : {
		"subclassfeature1" : {
			name : "Darkvision",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  levels.map(function(lvl) {
  if (lvl >= 13) {
    return desc(['Starting at 13th level, I can see through magical, as well as nonmagical, darkness.']);
  }
  return desc(['I can see in dim light within 60 feet of I as if it were bright light, and in darkness as if it were dim light. I can’t discern color in darkness, only shades of gray. If I already possess darkvision, its range increases by 30 feet.']);
}),
			vision : [["Darkvision", 60]],
		},
		"subclassfeature2" : {
			name : "Marked for Death",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc(["If I deal damage to a creature I have marked with a melee weapon attack and its remaining hit points are lower than the damage I dealt to it with that attack, the marked creature instead drops to 0 hit points."]),
		},
		"subclassfeature3" : {
			name : "Undead Empathy",
			source : ["HB: Warden", 3],
			minlevel : 6,
			description :  desc(["Whenever an undead tries to attack me, it must make a Wisdom saving throw. On a failed save, its attack misses and, if its Intelligence is 4 or lower, it becomes friendly to I and my allies. Save DC mod is Con."]),
		},
		"subclassfeature4" : {
			name : "Evasion",
			source : ["HB: Warden", 3],
			minlevel : 13,
			description :  desc(["Beginning at 13th level, I can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When I am subjected to an effect that allows I to make a Dexterity saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail."]),
		},
		"subclassfeature5" : {
			name : "Gravelord",
			source : ["HB: Warden", 3],
			minlevel : 20,
			description :  desc(["At 20th level, I can use my action to invite the necromantic energies of true undead into my body, divorcing myself from life for the next minute and gaining the following benefits:" 
 + "\n• I am immune to poison damage and being poisoned." 
 + "\n• I can use my Undying feature up to three times, even if I have already used it today." 
 + "\n• Once per turn, when I deal damage with a melee weapon attack, I can deal an extra 4d6 necrotic damage and gain temporary hit points, which last until the beginning of my next turn, equal to the necrotic damage dealt. Once I use this feature, I can’t use it again untilyou finish a long rest."]),
			recovery : "long rest",
			usages : 1,
		},
	},
});
AddSubClass("warden", "soulblood shaman", {
	regExpSearch : /soulblood shaman/i,
	subname : "Soulblood Shaman",
	source : ["HB", 15],
	spellcastingList : {
				"class" : ["druid"]
			},
	spellcastingFactor : 6,
	spellcastingKnown : {
		spells : [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13],
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
	},
	spellcastingTable : [ 
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 1, 0, 0, 0, 0, 0] //lvl20
	],
	features : {
		"subclassfeature1" : {
			name : "Spellcasting",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc(["Starting when I hear this call at 3rd level, I can channel my ancient insights into magic."]),
		},
		"subclassfeature2" : {
			name : "Soulblood",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc(["Also at 3rd level, as a reaction when a creature within 5 feet of I deals damage to I, I can mark that creature."]),
			action : ["reaction", ""],
		},
		"subclassfeature3" : {
			name : "Whispers of Beyond",
			source : ["HB: Warden", 3],
			minlevel : 6,
			description :  desc(["At 6th level, I can hear the small voices of ancient spirits when I need guidance. If I spend one minute in contemplation when I make an Intelligence or Wisdom check, I can consult the spirits to gain advantage on the roll. However, the GM can decline to give I advantage on this check if the spirits would not possess appropriate guidance of knowledge."]),
		},
		"subclassfeature4" : {
			name : "Spell Resistance",
			source : ["HB: Warden", 3],
			minlevel : 13,
			description :  desc(["Beginning at 13th level, I have advantage on saving throws I make against spells."]),
		},
		"subclassfeature5" : {
			name : "Ethereal Watcher",
			source : ["HB: Warden", 3],
			minlevel : 20,
			description :  desc(["At 20th level, as an action, I can shrug off my mortal form for a short time to become something spiritual and material, an ethereal watcher. For the next minute, I gain the following benefits:" 
 + "\n• As a bonus action on my turn, I can become ethereal, as per the etherealness spell." 
 + "\n• I can return from being ethereal as a bonus action when I cast a spell, or when I use my Warden’s Mark or my Warden’s Grasp feature on my turn. When I return from being ethereal, each creature I choose within10 feet of I takes 4d10 force damage, as they are pulled partially between the planes." 
 + "\n• I can cast 1st and 2nd-level druid spells I know without expending spell slots. Once I use this ability, I can’t use it again until I finish a long rest."]),
			recovery : "long rest",
			usages : 1,
		},
	},
});
AddSubClass("warden", "stoneheart defender", {
	regExpSearch : /stoneheart defender/i,
	subname : "Stoneheart Defender",
	source : ["HB", 15],
	features : {
		"subclassfeature1" : {
			name : "Roots of Rock",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc(["Starting when I hear this call at 3rd level, when I use my Warden’s Grasp ability, rocky roots sprout from my feet, anchoring I securely. Until the beginning of my next turn, I have a +2 bonus to my Armor Class. Additionally, until I move, I can’t be shoved or pushed from wherever I am standing by hostile actions, spells, or effects, unless I choose to be. I have advantage on Strength saving throws against being knocked down, cannot slip or fall from ledges, and are immune to the spells fly, levitate, and telekinesis."]),
		},
		"subclassfeature2" : {
			name : "Earthshatter",
			source : ["HB: Warden", 3],
			minlevel : 6,
			description :  desc(["Starting at 6th level, I can choose to use Warden’s Grasp as an action, rather than a bonus action. When I do so, each creature affected must make a Strength saving throw. or be knocked prone. I can use this ability a number of times equal to my Strength modifier, and regain all uses when I finish a long rest. Save DC mod is Str."]),
			action : ["action", ""],
		},
		"subclassfeature3" : {
			name : "Mettle",
			source : ["HB: Warden", 3],
			minlevel : 13,
			description :  desc(["At 13th level, my determination allows I to shrug off effects that would otherwise harm I. When I am subjected to an effect that allows I to make a Constitution saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail."]),
		},
		"subclassfeature4" : {
			name : "Immortal Mountain",
			source : ["HB: Warden", 3],
			minlevel : 20,
			description :  desc(["By 20th level, I can summon the power of true earth as an action, protecting myself in an encasement of stone. For the next minute, I gain the following benefits:" 
 + "\n• Bludgeoning, piercing, and slashing damage I take is reduced by 5." 
 + "\n• I gain the effects of my Roots of Rock ability for the entire duration." 
 + "\n• As I move, I can choose to upend the earth at my feet, leaving behind a 5-foot wide trail of difficult terrain behind I wherever I move. Once I use this feature, I can’t use it again until I finish a long rest."]),
			recovery : "long rest",
			usages : 1,
		},
		
	},
});
AddSubClass("warden", "storm sentinel", {
	regExpSearch : /storm sentinel/i,
	subname : "Storm Sentinel",
	source : ["HB", 15],
	features : {
		"subclassfeature1" : {
			name : "Flash from Above",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc(["Starting when I hear this call at 3rd level, whenever I am standing under the open sky, I can use my action to conjure a harmless, but impressive, bolt of lightning or peal of thunder. I can use this ability even when there are no clouds above I."]),
		},
		"subclassfeature2" : {
			name : "Thunderblast",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc(["At 3rd level, whenever I hit a creature I have marked with a melee weapon attack, each creature I choose within 5 feet of the target takes 1d8 lightning damage."]),
			additional : "1d8 lightning",
		},
		"subclassfeature3" : {
			name : "Static Blast",
			source : ["HB: Warden", 3],
			minlevel : 6,
			description :  desc(["Starting at 6th level, when I use Warden’s Grasp as a bonus action, each creature affected can’t take reactions until the beginning of my next turn."]),
		},
		"subclassfeature4" : {
			name : "Evasion",
			source : ["HB: Warden", 3],
			minlevel : 13,
			description :  desc(["Beginning at 13th level, I can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When I am subjected to an effect that allows I to make a Dexterity saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail."]),
		},
		"subclassfeature5" : {
			name : "Stormlord",
			source : ["HB: Warden", 3],
			minlevel : 20,
			description :  desc(["Starting at 20th level, I have a flight speed equal to my movement speed. Additionally, I can use my action to summon a bolt of lightning to strike I, imbuing my body with the storm’s fury. For 1 minute, I gain the following benefits:" 
 + "\n• my flight speed is doubled." 
 + "\n• I can cast the spell call lightning as a bonus action without using a spell slot. I can call a bolt of lightning on subsequent turns as a bonus action. Once I use this feature, I can’t use it again until I finish a long rest. Save DC mod is Con."]),
			recovery : "long rest",
			usages : 1,
		},
	},
});
AddSubClass("warden", "verdant protector", {
	regExpSearch : /verdant protector/i,
	subname : "Verdant Protector",
	source : ["HB", 15],
	features : {
		"subclassfeature1" : {
			name : "Green Mark",
			source : ["HB: Warden", 3],
			minlevel : 3,
			description :  desc(["Starting when I hear this call at 3rd level, when I mark a creature, the plants of the earth come alive to hinder its progress. While this creature is within 30 feet of I, the ground it walks on is difficult terrain."]),
		},
		"subclassfeature2" : {
			name : "Verdant Skin",
			source : ["HB: Warden", 3],
			minlevel : 6,
			description :  desc(["At 6th level, I gain proficiency in the Stealth skill, if I did not have it before. Additionally, I can use my action to draw a thick mass of vines and leaves to conceal I. Until I move, I have advantage on Dexterity (Stealth) checks I make to hide among vegetation."]),
			skills : ["Stealth"],
			action : ["action", ""],
		},
		"subclassfeature3" : {
			name : "Mettle",
			source : ["HB: Warden", 3],
			minlevel : 13,
			description :  desc(["At 13th level, my determination allows I to shrug off effects that would otherwise harm I. When I am subjected to an effect that allows I to make a Constitution saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail."]),
		},
		"subclassfeature4" : {
			name : "Form of the Oak Sentinel",
			source : ["HB: Warden", 3],
			minlevel : 20,
			description :  desc(["Starting at 20th level, I can use my action to transform into an oak sentinel, a bark-covered titan of the forest. For 1 minute, I gain the following features:" 
 + "\n• my AC becomes 20, if it was lower." 
 + "\n• my attacks have Reach, if they did not have it before." 
 + "\n• I can use Warden’s Grasp as an action, rather than a bonus action. When I do so, I can make an attack against each creature affected, with a separate attack roll for each target. Once I use this feature, I can’t use it again until I finish a long rest."]),
			recovery : "long rest",
			usages : 1,
		},
	},
});