var iFileName = "Feats - Nod's Notebook to Hardly Anything [Nod].js"; 
RequiredSheetVersion(13);

SourceList["NNHA:FF"] = {
	name : "Fabulous Feats - Nod's Notebook to Hardly Anything [Nod]",
	abbreviation : "NNHA:FF",
	abbreviationSpellsheet: "HA",
	group : "Nod's Homebrew",
	date : "2022/03/15"
};

// Add Primaeval Heritage Feats
/* Primaeval Heritage
Your heritage carries magic left over from ancient times, granting you the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn two spells based on your chosen primaeval element. 
	Air - Feather Fall, Levitate
	Earth - Earth Tremor, Maximilian's Earthen Grasp
	Fire - Hellish Rebuke, Flame Blade
	Water - Create or Destroy Water, ‌‌‌‌‌‌‌‌‌​​​​​Blur 
You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.
*/
FeatsList["primaeval air heritage"] = {
    name : "Primaeval Air Heritage",
    source : ["NNHA:FF"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Feather Fall and Levitate spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Feather Fall",
		spells : ["feather fall"],
		selection : ["feather fall"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Levitate",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["primaeval earth heritage"] = {
    name : "Primaeval Earth Heritage",
    source : ["NNHA:FF"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Earth Tremor",
		spells : ["earth tremor"],
		selection : ["earth tremor"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp",
		spells : ["maximilian's earthen grasp"],
		selection : ["maximilian's earthen grasp"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["primaeval fire heritage"] = {
    name : "Primaeval Fire Heritage",
    source : ["NNHA:FF"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Hellish Rebuke",
		spells : ["hellish rebuke"],
		selection : ["hellish rebuke"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Flame Blade",
		spells : ["flame blade"],
		selection : ["flame blade"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["primaeval water heritage"] = {
    name : "Primaeval Water Heritage",
    source : ["NNHA:FF"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Create or Destroy Water",
		spells : ["create or destroy water"],
		selection : ["create or destroy water"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Blur",
		spells : ["blur"],
		selection : ["blur"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};

// Add General Feats
FeatsList["adventurousness"] = {
	name : "Adventurousness",
	source : ["NNHA:FF", 1],
	descriptionFull : "You are filled with a determination to excel on your adventures. You have so much self-confidence that you believe you can draw the unreachable within your reach. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency with one skill, one tool, and one language of your choice.\n \u2022 When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a long rest.",
	description : "I learn one language and gain proficiency in one tool and one skill. When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a long rest.\n[+1 to one ability score]",
	scorestxt : "+1 to one ability score of your choice",
	languageProfs : [1],
	skillstxt : "Choose any one skill and any one tool",
	toolProfs : [["Any tool", 1]],
	extraLimitedFeatures : {
		name : "Advantage (attack/check/save)",
		usages : 1,
		recovery : "long rest"
	},
};
/* Adventurousness
You are filled with a determination to excel on your adventures. You have so much self-confidence that you believe you can draw the unreachable within your reach. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You gain proficiency with one skill and one tool of your choice.
• You learn a language of your choice.
• When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a long rest. */
FeatsList["explorer"] = {
	name : "Explorer",
	source : [["NNHA:FF"]],
	description : "I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed. While traveling, I am alert to danger even when doing something else. [+1 Strength, Dexterity, Intelligence, or Wisdom]",
	scorestxt : "+1 Strength, Dexterity, Intelligence or Wisdom",
	speed : {
			walk : { spd : "+5", enc : "+5" },
			climb : { spd : "walk", enc : "walk" },
			swim : { spd : "walk", enc : "walk" }
			}
};		
/* Explorer
You are an unsurpassed explorer. You gain the following benefits:
• Increase your Strength, Dexterity, Intelligence or Wisdom by 1, to a maximum of 20.
• Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.
• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. */
FeatsList["fellowship"] = {
	name: "Fellowship",
	source: [["NNHA:FF"]],
	descriptionFull : "Most adventurers believe that the members of a group have a responsibility to look out for each other. You gain the following benefits:\n \u2022You can use the Help action as a bonus action.\n \u2022When you use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. Additionally, you can help two allies targeting the same creature within range when you use the Help action this way.\n \u2022When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.",
	description: "When I use the Help action to aid in combat, its a bonus action, I add 10 ft range, and I can help two allies targeting the same creature. When I use the Help action to help a creature that can understand me with an ability check, I can make a DC 15 Int (History) check to give a bonus equal to my proficiency bonus.",
	action : [
		["bonus action", "Fellowship (10' Dual Help)"],
		["action", "Fellowship (Help Ability Check)"]
		]
};
/* Fellowship
Most adventurers believe that the members of a group have a responsibility to look out for each other. You gain the following benefits:
• You can use the Help action as a bonus action.
• When you use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. Additionally, you can help two allies targeting the same creature within range when you use the Help action this way.
• When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.   */
FeatsList["sailor's sea legs"] = {
	name : "Sailor's Sea Legs",
	source : ["NNHA:FF"],
	description : "I gain proficiency with Vehicles (water). If I am already proficient with them, I add double my proficiency bonus to checks I make with them. Whenever I have advantage on an attack roll that uses Dexterity, I can reroll one of the dice once. [+1 Dexterity]",
	descriptionFull : "Your childhood fascination with the water and the many vessels that travel on it led to you to becoming a crew member of a vessel, whether sailing into battle on a navy warship, swashbuckling across the oceans as a pirate, or working on a fishing boat striving to feed a nearby village. Even on land, you walk with a particular gait from having your sea legs. You gain the following benefits:\n \u2022 You gain proficiency with Vehicles (water). If you are already proficient with them, you add double your proficiency bonus to checks you make with them.\n \u2022 Whenever you have advantage on an attack roll that uses Dexterity, you can reroll one of the dice once.\n \u2022 Increase your Dexterity by 1, to a maximum of 20.",
	scorestxt : "Sailor's Sea Legs (feat): +1 Dexterity; ",
	prerequisite : "An appropriate background related to being around the water.",
	toolProfs : [["Vehicles (water)", "Dex"]],
	eval : function () {
		if ((/vehicles.*water/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/vehicles.*water/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	},
	scores : [0, 1, 0, 0, 0, 0],
};
/* Sailor's Sea Legs
Prerequisites: An appropriate background related to being around the water.
Your childhood fascination with the water and the many vessels that travel on it led to you to becoming a crew member of a vessel, whether sailing into battle on a navy warship, swashbuckling across the oceans as a pirate, or working on a fishing boat striving to feed a nearby village. Even on land, you walk with a particular gait from having your sea legs. You gain the following benefits:
• Increase your Dexterity by 1, to a maximum of 20.
• Whenever you have advantage on an attack roll that uses Dexterity, you can reroll one of the dice once.
• You gain proficiency with Vehicles (water). If you are already proficient with them, you add double your proficiency bonus to checks you make with them. */
FeatsList["sidestepper"] = {
	name : "Sidestepper",
	source : ["NNHA:FF"],
	descriptionFull : "Thanks to extensive footwork practice, you are adept at moving in combat. You gain the following benefits:\n \u2022 Whenever an opponent misses you with a melee attack, you may move 5 feet as a reaction. This movement does not provoke opportunity attacks and does not count against your total movement.\n \u2022 As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of your next turn.",
	description : "As a reaction, when an opponent misses me I can move 5 feet without provoking an opportunity attack. As a bonus action, I can make a DC 15 Dexterity (Acrobatics) check to have difficult terrain not cost me extra movement until end of my next turn. [+1 Dexterity]",
	improvements: "Sidestepper (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	prereqeval : function(v) { return What('Dex') >= 13; },
	action : [
	["reaction", " (when missed in melee)"],
	["bonus action", " (terrain)"],
	],
};
/* Sidestepper
Prerequisites: Dexterity 13 or higher
Thanks to extensive footwork practice, you are adept at moving in combat. You gain the following benefits:
• Increase your Dexterity score by 1, to a maximum of 20.
• Whenever an opponent misses you with a melee attack, you may move 5 feet as a reaction. This movement does not provoke opportunity attacks and does not count against your total movement.
• As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of your next turn. 
*/

// Add Combat and/or Weapon-centric Feats
FeatsList["advanced shield training"] = {
	name : "Advanced Shield Training",
	source : [["NNHA:FF"]],
	prerequisite : "Proficiency with shields",
	prereqeval : function(v) { return v.shieldProf; },
	descriptionFull : "You’ve learned advanced techniques of shield wielding. Your shield is no longer just a means of defense but has become an extension of your body, combining your prowess with a shield and your weapons training to improve many offensive capabilities in combat:\n \u2022 In combat, you can don or doff a shield as the free object interaction on your turn.\n \u2022 You can use your shield hand to use any non weapon item (e.g. a torch or spellcasting focus) or to make somatic component gestures.\n \u2022 While you are wielding a shield, before you make a melee attack with a one-handed weapon you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
	description : "I can don or doff a shield as the free object interaction on my turn. I can use my shield hand to use non-weapon items and make somatic component gestures. While wielding a shield and a one-handed weapon, I can choose to take a -5 penalty on the attack roll for +10 on the attack's damage.",
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && !(/\b(two-handed)\b/i).test(fields.Description) && (/\bast\b|power.{0,3}attack|advanced.{0,3}shield.{0,3}training/i).test(v.WeaponText)) {
					output.extraDmg += 10;
					output.extraHit -= 5;
				};
			},
			"If I include the words 'Power Attack', 'Advanced Shield Training', or just 'AST' in a one-handed melee weapon's name or description, the calculation will put a -5 penalty on the attack's To Hit and +10 on its Damage."
		]
	}
};
/* Advanced Shield Training
Prerequisite: Proficiency with Shields
You’ve learned advanced techniques of shield wielding. Your shield is no longer just a means of defense but has become an extension of your body, combining your prowess with a shield and your weapons training to improve many offensive capabilities in combat:
• In combat, you can don or doff a shield as the free object interaction on your turn.
• You can use your shield hand to use any non weapon item (e.g. a torch or spellcasting focus) or to make gestures for somatic spells.
• While you are wielding a shield, before you make a melee attack with a one-handed weapon you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.

This feat does not enable you to make any weapon related actions you wouldn't be able to do while you are wielding a shield (e.g. Two-Handed attacks or Two-Weapon Fighting). */
FeatsList["battlewise"] = { // originally by BoneDealer
	name : "Battlewise",
	source : [["NNHA:FF"]],
	prerequisite : "Wisdom 13 or higher",
	prereqeval : function(v) { return What('Wis') >= 13; },
	descriptionFull : "Your experience on the battlefield has hardened you and gifted you with tactical instinct. You gain the following benefits:\n \u2022 Increase your Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022 You gain a bonus to initiative equal to your Wisdom modifier.\n \u2022 You can use the Help action as a bonus action.",
	description : "I gain a bonus to my initiative rolls equal to my Wisdom modifier. I can take the Help action as a bonus action. [+1 Constitution or Wisdom]",
	scorestxt : "+1 Constitution or Wisdom",
	action : ["bonus action", " (Help action)"],
	addMod : { type : "skill", field : "Init", mod : "max(Wis|0)", text : "I add my Wisdom modifier to initiative rolls." }
};
/* Battlewise
Prerequisite: Requires a Wisdom score of 13 or higher
Your experience on the battlefield has hardened you and gifted you with tactical instinct. You gain the following benefits:
• Increase your Constitution or Wisdom score by 1, to a maximum of 20.
• You gain a bonus to initiative equal to your Wisdom modifier.
• You can use the Help action as a bonus action. */
FeatsList["dogfighting maneuvers"] = { // Prerequisite: A flying speed
	name : "Dogfighting Maneuvers",
	source : [["NNHA:FF"]],
	prerequisite : "Flying Speed",
	description : "While flying, enemies I make a melee attack against in my turn can't use opportunity attacks on me and as a Bonus action after my Attack action, I can move up to half my fly speed and make a single melee attack. Once per turn, if I dive 30 ft and hit with a melee attack, the attack deals +1d6 damage.  [+1 Dex or Wis]",
	descriptionFull : "You can skillfully use aerial maneuvers consisting of many varying tactical turns, rolls, and other actions to get behind or above an enemy, before the opponent can do the same. You gain the following benefits:\n \u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20.\n \u2022 Fancy Flightwork. While flying during your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.\n \u2022 Dive Attack. Once per turn, if you are flying and dive at least 30 feet straight toward a target and then hit it with a melee weapon attack, the attack deals an extra 1d6 damage to the target.\n \u2022 Swoop Attack. When you use the Attack action while flying, you can use your Bonus action to make a Swoop attack, moving up to half of your flying speed and making a single melee attack against a creature.",
	scorestxt : "+1 Dexterity or Wisdom;",
	action : ["bonus action", "Swoop Attack (with flying Attack action)"],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isMeleeWeapon) {
					fields.Description += (fields.Description ? '; ' : '') + 'Extra 1d6 damage after straight 30 ft dive';
				}
			}, ""]
	}
};
/* Dogfighting Maneuvers
Prerequisite: A flying speed
You can skillfully use aerial maneuvers consisting of many varying tactical turns, rolls, and other actions to get behind or above an enemy, before the opponent can do the same. You gain the following benefits:
• Increase your Dexterity or Wisdom score by 1, to a maximum of 20.
• Fancy Flightwork. While flying during your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.
• Dive Attack. Once per turn, if you are flying and dive at least 30 feet straight toward a target and then hit it with a melee weapon attack, the attack deals an extra 1d6 damage to the target.
• Swoop Attack. When you use the Attack action while flying, you can use your Bonus action to make a Swoop attack, moving up to half of your flying speed and making a single melee attack against a creature. */
FeatsList["firearm expert"] = {
	name : "Firearm Expert",
	source : ["NNHA:FF"],
	descriptionFull : "Thanks to extensive practice with firearms, you are adept at using guns effectively. You gain the following benefits:\n \u2022 If you roll a misfire on an attack with a firearm, you can use your reaction to roll a d20. If the number rolled is higher than the weapon’s misfire score, the firearm does not misfire. You cannot use this feature again on the same firearm until you complete a short or long rest.\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.\n \u2022 When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a one-handed firearm you are holding.",
	description : "If firearm misfires, I can reaction roll a d20. If higher than misfire score, no misfire (once per weapon per short rest). No disadvantage on ranged attack rolls within 5 ft of a hostile. When I attack with a one-handed weapon in my Attack action, I can use a bonus action to attack with a one-handed firearm.",
	action : [
		["bonus action", " (with Attack action)"],
		["reaction", "Prevent Misfire"],
		],
};
/* Firearm Expert
Thanks to extensive practice with firearms, you gain the following benefits:
• When you roll a misfire on an attack with a firearm with which you are proficient, you can use your reaction to roll a d20. If the number rolled is higher than the weapon’s misfire score, the firearm does not misfire. You cannot use this feature again on the same firearm until you complete a short or long rest.
• Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.
• When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a one-handed firearm you are holding. */
FeatsList["retiarius weapons training"] = {  
	name : "Retiarius Weapons Training",
	source : ["NNHA:FF"],
	descriptionFull : "You have received extensive training with equipment styled on that of a fisherman. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 \n \u2022 When you use a net, it becomes a melee weapon with the thrown property instead of a ranged weapon and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.\n \u2022 When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property.",
	description : "I can use two-weapon fighting with tridents and nets. Tridents have the finesse property and do d8 damage (versatile d10). Nets have the finesse property, count as a melee weapon, and no disadvantage if hostile within 5 ft. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.baseWeaponName == 'trident') {
                    fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
                    fields.Description = fields.Description.replace('Thrown, versatile (1d8)', 'Finesse, thrown, versatile (1d10)');
                    fields.Mod = v.StrDex;
                } else if (v.baseWeaponName == 'net') {
                    fields.Description = fields.Description.replace('Thrown, only 1 attack, up to large creature hit is restrained (PHB 148)', 'Finesse, thrown, no disadvantage if hostile within 5 ft, restrain up to large creature (DC 10)'); 
					fields.Range = 'Melee, 5/15' + ' ft';
                    fields.Mod = v.StrDex;
                };
            },
            "With a trident, I get the following benefits:\n - Finesse and two-weapon fighting;\n - The trident damage die increases to d8 (versatile d10).\n \u2022 With a net, I get the following benefits:\n - Finesse and two-weapon fighting;\n - Becomes melee weapon and no disadvantage if hostile within 5 ft."
        ]
    }
};
/*Retiarius Weapons Training
You have received extensive training with equipment styled on that of a fisherman. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands.
• When you use a net, it becomes a melee weapon instead of a ranged weapon, and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.
• When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property. 
*/
FeatsList["rough-and-tumble"] = {
	name : "Rough-and-Tumble",
	source : [["NNHA:FF"]],
	descriptionFull : "Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Acrobatics or Athletics skill (your choice. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.\n \u2022 You have advantage on attack rolls against a creature you are grappling.\n \u2022 When you shove a creature you are grappling, you can double the distance you push that creature.",
	description : "I gain expertise with Athletics or Acrobatics, or proficiency if not so already. I have advantage on attack rolls against a creature I am grappling. I can double the distance I shove a creature I am grappling. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	skills : [["Athletics", "increment"]],
	skillstxt : "Proficiency with Acrobatics or Athletics, or\n   Expertise if already proficient",
};
/* Rough-and-Tumble
Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• You gain proficiency in the Athletics or Acrobatics skill. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.
• You have advantage on attack rolls against a creature you are grappling.
• When you shove a creature you are grappling, you can double the distance you push that creature. */
FeatsList["spear expertise"] = {
	name : "Spear Expertise",
	source : ["NNHA:FF"],
	descriptionFull : "Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:\n \u2022 When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)\n \u2022 A spear has the finesse property when you wield it and you gain a +1 bonus to attack rolls you make with a spear.\n \u2022 As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn.",
	description : "With a spear, I get +1 to hit and it does d8 damage (versatile d10). My expertise with the spear allows me to treat it as having the finesse trait. As a bonus action, I can increase the spear's reach by 5 ft.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'spear') {
					fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
					fields.Description = fields.Description.replace('versatile (1d8)', 'Finesse, versatile (1d10)');
					fields.Mod = v.StrDex;
				};
			},
			"With a spear, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 The spear damage die increases to d8 (versatile d10)."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'spear') output.extraHit += 1;
			}, ""]
	},
	action : ['bonus action', ' (increase reach)']
};
/* Spear Expertise
Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:
• A spear has the finesse property when you wield it and you gain a +1 bonus to attack rolls you make with a spear.
• When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.) 
• As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn. */
FeatsList["trident expertise"] = {
	name : "Trident Expertise",
	source : ["NNHA:FF"],
	descriptionFull : "Though the trident is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:\n \u2022 You gain a +1 bonus to attack rolls you make with a trident.\n \u2022 When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)\n \u2022 A trident has the finesse property when you wield it.\n \u2022 As a bonus action on your turn, you can increase your reach with a trident by 5 feet for the rest of your turn.",
	description : "With a trident, I get +1 to hit and it does d8 damage (versatile d10). My expertise with the trident allows me to treat it as having the finesse trait. As a bonus action, I can increase the trident's reach by 5 ft.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'trident') {
					fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
					fields.Description = fields.Description.replace('versatile (1d8)', 'Finesse, versatile (1d10)');
					fields.Mod = v.StrDex;
				};
			},
			"With a trident, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 The trident damage die increases to d8 (versatile d10)."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'trident') output.extraHit += 1;
			}, ""]
	},
	action : ['bonus action', ' (increase reach)']
};
/* Trident Expertise
Though the trident is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:
• A trident has the finesse property when you wield it and you gain a +1 bonus to attack rolls you make with a trident.
• When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.) 
• As a bonus action on your turn, you can increase your reach with a trident by 5 feet for the rest of your turn. */
FeatsList["wrestler"] = {
	name : "Wrestler",
	source : [["NNHA:FF"]],
	descriptionFull : "Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:\n \u2022 You gain proficiency in the Athletics skill. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.\n \u2022 When you hit a creature with an unarmed strike on your turn, you can use a bonus action to attempt to grapple the target.\n \u2022 You have advantage on attack rolls against a creature you are grappling.",
	description : "I gain expertise with Athletics, or proficiency if not so already. When I hit a creature with an unarmed strike on my turn, I can attempt to grapple the target as a bonus action. I have advantage on attack rolls against a creature I am grappling.",
	prerequisite : "Strength 13 or higher",
	prereqeval : function(v) { return What('Str') >= 13; },
	action : ['bonus action', 'Grapple (on hit with unarmed)'],
	skills : [["Athletics", "increment"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike" || (/improvised/i).test(v.WeaponName + v.baseWeaponName) || (/improvised weapon/i).test(v.theWea.type)) {
					fields.Proficiency = true;
					if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + 'After hit, can grapple as a bonus action';
				};
			},
			"After hitting a creature with an unarmed strike in melee, I can attempt to start a grapple as a bonus action."
		]
	}
};
/* Wrestler
Prerequisite: Strength 13 or higher
Accustomed to rough-and-tumble fighting, you've developed the skills necessary to hold your own in close-quarters combat. You gain the following benefits:
• You gain proficiency in the Athletics skill. If you are already proficient, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.
• When you hit a creature with an unarmed strike on your turn, you can use a bonus action to attempt to grapple the target.
• You have advantage on attack rolls against a creature you are grappling. */

// Add Racial Feats
// Aasimar
FeatsList["celestial constitution"] = {
	name : "Celestial Constitution",
	source : ["NNHA:FF"],
	prerequisite : "Being an Aasimar",
	prereqeval : function(v) { return CurrentRace.known.indexOf('aasimar') !== -1; },
	descriptionFull : "Celestial blood runs strong in you, unlocking a resilience akin to that possessed by some inhabitants of the Seven Heavens. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You have resistance to cold and poison damage.\n \u2022 You have advantage on saving throws against being poisoned.",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
/* Celestial Constitution
Prerequisite: Aasimar
Celestial blood runs strong in you, unlocking a resilience akin to that possessed by some inhabitants of the Seven Heavens. You gain the following benefits:
• Increase your Constitution score by 1, to a maximum of 20.
• You have resistance to cold damage and poison damage.
• You have advantage on saving throws against being poisoned. */
FeatsList["sacred soul of the storm"] = { 
	name : "Sacred Soul of the Storm",
	source : ["NNHA:FF"],
	prerequisite : "Being an Aasimar",
	prereqeval : "CurrentRace.known.indexOf('aasimar') !== -1",
	description : "When I cast a lightning damage spell, I can reroll any 1 on lightning damage dice once. I then sheathe myself in a storm cloud until my next turn ends. The storm sheds bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 lightning damage. [+1 Int or Cha]",
	scorestxt : "Sacred Soul of the Storm (feat): +1 Intelligence or Charisma;"	
};
/* Sacred Soul of the Storm
Prerequisite: Aasimar
You learn to call on primal energies to serve your commands. You gain the following benefits:
• Increase your Intelligence or Charisma by 1, to a maximum of 20.
• When you roll lightning damage for a spell you cast, you can reroll any roll of 1 on the lightning damage dice, but you must use the new roll, even if it is another 1.
• Whenever you cast a spell that deals lightning damage, you can cause a storm cloud to wreathe you until the end of your next turn. The storm cloud doesn't harm you or your possessions, and it shed bright light out to 30 feet and dim light for an additional 30 feet. While the storm cloud is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 lightning damage. */

// Bird [aarakocra|aven|kenku|owlfolk]
FeatsList["hawkeyed accuracy"] = { 
	name : "Hawkeyed Accuracy",
	source : ["NNHA:FF"],
	prerequisite : "Being a bird race",
	prereqeval : function(v) { return (/aarakocra|aven|kenku|owlfolk/i).test(CurrentRace.known); },
	descriptionFull : "You have uncanny aim with ranged attacks that rely on precision and pinpoint targeting. You gain the following benefits:\n \u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20.\n \u2022 You have advantage on Perception checks based on sight.\n \u2022 Whenever you have advantage on a ranged attack roll using Dexterity or Wisdom, you can reroll one of the dice once.",
	description : "I have advantage on Perception checks based on sight. Whenever I have advantage on a ranged attack roll that uses Dexterity or Wisdom, I can reroll one of the dice once. [+1 Dexterity or Wisdom]",
	vision: [["Adv. on Perception checks based on sight", 0]],
	scorestxt : "+1 Dexterity or Wisdom"
};
/* Hawkeyed Accuracy
Prerequisite: Being a bird race
You have uncanny aim with ranged attacks that rely on precision and pinpoint targeting. You gain the following benefits:
•    Increase your Dexterity or Wisdom score by 1, to a maximum of 20.
•    You have advantage on Wisdom (Perception) checks that rely on sight.
•    Whenever you have advantage on a ranged attack roll using Dexterity or Wisdom, you can reroll one of the dice once.
*/

// Bugbear
FeatsList["quiet and deadly skulker"] = { // Bugbear
	name : "Quiet and Deadly Skulker",
	source : ["NNHA:FF", 3],
	prerequisite : "Being a Bugbear",
	prereqeval : "CurrentRace.known.indexOf('bugbear') !== -1",
	description : "I gain expertise in Stealth. If a creature can't see me, I can add one of the weapon's damage dice. When I hit with an attack of opportunity using Strength, I can make the target succeed on a Strength saving throw (DC 8 + my prof bonus + my Strength mod) or be knocked prone. [+1 Strength or Dexterity]",
	descriptionFull : "With roots in the Feywild, early bugbears resided in hidden places, in hard-to-reach and shadowed spaces. Long ago and from out of the corner of your eye, they came to the Material Plane. Centuries later, they still bear a fey gift for lurking just out of sight. Despite their formidable build, bugbears are quiet and deadly skulkers. You gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.\n \u2022 You gain expertise with Stealth, which means your proficiency bonus is doubled for any ability check you make with it.\n \u2022 Unseen Advantage: If you have advantage on a weapon attack roll against a creature that can't see you, you can roll one of the weapon's damage dice one additional time and add it to the damage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 Unexpected Aggression: When you hit with an opportunity attack using Strength, you can attempt to knock the target down. The target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	scorestxt : "+1 Strength or Dexterity;",
	skills : [["Stealth", "increment"]],
	action : ["reaction", "Unexpected Aggression (w/ opp att)"],
	extraLimitedFeatures : [{
		name : "Unseen Advantage",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Unexpected Aggression",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
};
/* Quiet and Deadly Skulker
Prerequisites: Bugbear
With roots in the Feywild, early bugbears resided in hidden places, in hard-to-reach and shadowed spaces. Long ago and from out of the corner of your eye, they came to the Material Plane. Centuries later, they still bear a fey gift for lurking just out of sight. Despite their formidable build, bugbears are quiet and deadly skulkers. You gain the following benefits:
• Increase your Strength or Dexterity score by 1, to a maximum of 20.
• You gain expertise with Stealth, which means your proficiency bonus is doubled for any ability check you make with it.
• Unseen Advantage: If you have advantage on a weapon attack roll against a creature that can't see you, you can roll one of the weapon's damage dice one additional time and add it to the damage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
• Unexpected Aggression: When you hit with an opportunity attack using Strength, you can attempt to knock the target down. The target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
*/

// Centaur
FeatsList["centaur orcish heritage"] = { // Centaur (Orc)
	name : "Centaur Orcish Heritage",
	source : ["NNHA:FF"],
	prerequisite : "Being a Centaur",
	prereqeval : "CurrentRace.known.indexOf('centaur') !== -1",
	description : "I have darkvision out to a range of 60 feet. My melee weapon attacks roll 1 additional dice on a critical hit. [+1 Str or Con]",
	vision : [["Darkvision", 60]],
	scorestxt : "Centaur Orcish Heritage (feat): +1 Strength or Constitution;",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
			if (v.isMeleeWeapon && (/d\d+/).test(fields.Damage_Die)) {
			if (v.extraCritM) {
				v.extraCritM += 1;
			var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
			fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + '$1');
			} else {
			v.extraCritM = 1;
			fields.Description += (fields.Description ? '; ' : '') + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, '$1') + ' extra on a crit in melee';
					}
					}
				},
				"My melee weapon attacks roll 1 additional dice on a critical hit."
				]
		},	
};
/* Centaur Orcish Heritage
Through a twist of fate, an ancestor's legacy, or by some other means, you might not look like other centaurs. Your orcish heritage is plain for all to see. Rather than having the physical characteristics described in the usual centaur description, you may choose any of the following features: grayish pigmentation, sloping forehead, jutting jaws, or prominent teeth. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Darkvision. Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
• Savage Attacks. When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.
*/

// Changeling
FeatsList["changeling instinctive adjustment"] = { // Changeling
	name : "Changeling Instinctive Adjustment",
	source : ["NNHA:FF"],
	prerequisite : "Being a Changeling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('changeling') !== -1; },
	descriptionFull : "The instinctive ability of changelings to adjust their body on the spur of the moment gives them uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:\n \u2022 Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.",
	description : "Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, Wisdom, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Dexterity, Intelligence, Wisdom, or Charisma"
};
/* Changeling Instinctive Adjustment
Prerequisite: Changeling
The instinctive ability of changelings to adjust their body on the spur of the moment gives them uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:
• Increase your Dexterity, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once. */
FeatsList["morphic body"] = {
	name : "Morphic Body",
	source : ["NNHA:FF"],
	prerequisite : "Being a Changeling",
	prereqeval : "CurrentRace.known.indexOf('changling') !== -1",
	descriptionFull : "Your control over your body allows you some control of your internal organs as well as your external appearance. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 You can use your reaction to make yourself resistant to bludgeoning, piercing or slashing damage until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 You can use your reaction to make a critical hit of bludgeoning, piercing or slashing damage against you a normal hit. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a Reaction, I gain resistance to bludgeoning, piercing or slashing damage until the start of my next turn. I can also use my Reaction to make a critical hit dealing bludgeoning, piercing or slashing damage to me a normal hit. I can use each of these Reactions my Prof Bonus per long rest. [+1 Str, Dex, or Con]",
	scorestxt : "+1 Strength, Dexterity, or Constitution;",
		action : [['reaction', 'Resistance to B/P/S'],['reaction', 'Cancel B/P/S Critical']],
	extraLimitedFeatures : [{
		name : "Resistance to B/P/S",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	},
	{
		name : "Cancel B/P/S Critical Hit",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
};
/* Morphic Body
Prerequisite: Changeling
Your control over your body allows you some control of your internal organs as well as your external appearance. You gain the following benefits:
• Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.
• You can use your reaction to make yourself resistant to bludgeoning, piercing or slashing damage until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
• You can use your reaction to make a critical hit of bludgeoning, piercing or slashing damage against you a normal hit. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
 */

// Dhampir
FeatsList["touched by the mists"] = {  // Dhampir
	name : "Touched by the Mists",
	source : ["NNHA:FF"],
	prerequisite : "Being a Dhampir",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dhampir') !== -1; },
	descriptionFull : "Through fell magic, you are touched by the corruptive power of a Dread Domain. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 You have resistance to necrotic damage.\n \u2022 Whenever you spend one or more hit dice during a short rest, you can regain an extra 1d6 hit points.\n \u2022 Your Vampiric Bite damage die increases to a d6.",
	description : "I am resistant to necrotic damage. When I spend 1 or more hit dice during a short rest, I can regain an extra 1d6 hit points. My Vampiric Bite damage die increases to a d6.[+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	dmgres : ["Necrotic"],
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.theWea.name == 'Vampiric Bite') {
                    fields.Damage_Die = fields.Damage_Die === '1d4' ? '1d6' : fields.Damage_Die;
                };
            },
            "My Vampiric Bite damage die increases to a d6."
        ]
    }
};
/* Touched by the Mists
Prerequisite: Dhampir
Through fell magic, you are touched by the corruptive power of a Dread Domain. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• You have resistance to necrotic damage.
• Whenever you spend one or more hit dice during a short rest, you can regain an extra 1d6 hit points.
• Your Vampiric Bite damage die increases to a d6.
*/

// Firbolg
FeatsList["walker in the woods"] = {  // Firbolg
    name : "Walker in the Woods",
    source : ["NNHA:FF"],
	prerequisite : "Being a Firbolg",
	prereqeval : "CurrentRace.known.indexOf('firbolg') !== -1",
	descriptionFull : "You lean further into your connection with nature, gaining additional abilities:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Speak with Animals spell and can cast it at will, without expending a spell slot.\n \u2022 You learn the Speak with Plants and Plant Growth spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I can cast Speak with Animals at will. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "At will",
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		firstCol : 'atwill'
	},	{
		name : "Speak with Plants",
		spells : ["speak with plants"],
		selection : ["speak with plants"],
		firstCol : "oncelr"
	}, {
		name : "Plant Growth",
		spells : ["plant growth"],
		selection : ["plant growth"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I can cast Speak with Animals at will, without expending a spell slot. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I can cast Speak with Animals at will, without expending a spell slot. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I can cast Speak with Animals at will, without expending a spell slot. I learn the Speak with Plants and Plant Growth spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	},
	extraLimitedFeatures : [{
		name : "Plant Growth",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 3+"
	},{
		name : "Speak with Plants",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 3+"
	}],
};
/* Walker in the Woods
Prerequisites: Firbolg
You lean further into your connection with nature, gaining additional abilities:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Speak with Animals spell and can cast it at will, without expending a spell slot.
• You learn the Speak with Plants and Plant Growth spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.*/

// Genasi (Earth)
FeatsList["pasha heritage"] = {
	name : "Pasha Heritage",
	source : ["NNHA:FF"],
	prerequisite : "Being an Earth Genasi",
	prereqeval : "CurrentRace.known.indexOf('earth genasi') !== -1",
	description : "I learn the Move Earth cantrip. I learn Earth Tremor, which I can cast it without using a spell slot once per long rest, and by using spell slots as normal. Con is my spellcasting ability for these. I gain heritage armor, giving me an AC of 13 + my Con mod + shield while I'm not wearing armor. [+1 Con, Int, Wis, or Cha]",
	scorestxt : "+1 Constitution, Intelligence, Wisdom, or Charisma;",
	armorOptions : {
		regExpSearch : /^(?=.*heritage)(?=.*(natural|hide|skin)).*$/i,
		name : "Heritage Natural Armor",
		source : ["NNHA:FF"],
		ac : "13+Con",
		dex : -10
	},
	armorAdd : "Heritage Natural Armor",
	spellcastingBonus : [{
		name : "Pasha Heritage",
		spellcastingAbility : 3,
		spells : ["mold earth"],
		selection : ["mold earth"],
		firstCol : "atwill"
	}, {
		name : "Pasha Heritage",
		spells : ["earth tremor"],
		selection : ["earth tremor"],
		firstCol : 'oncelr',
		allowUpCasting : true
	}],
	extraLimitedFeatures : [{
		name : "Earth Tremor",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 1+"
	}],
};
/* Pasha Heritage
Prerequisites: being a Genasi (Earth)
You manifest more of the magical power of your Pasha (Noble Shaitan) heritage. You gain the following benefits:
• Increase your Constitution, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Move Earth cantrip. You learn the Earth Tremor spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell using spell slots you have. These spell's spellcasting ability is Constitution.
• Your skin hardens like stone. While you aren't wearing armor, you can calculate your AC as 13 + your Constitution modifier. You can use a shield and still gain this benefit. */

// Genasi (Water)
FeatsList["shahzada heritage"] = { 
	name : "Shahzada Heritage",
	source : ["NNHA:FF"],
	prerequisite : "Being a Water Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('water') !== -1",
	description : "I can cast Detect Evil and Good at will. I have resistance to lightning damage. Once per rest, I can transform the lower half of my body into a waterspout for up to 10 minutes. I gain flying speed of 30 ft and double swim speed. [+1 Con, Int, Wis, or Cha]",
	descriptionFull : "You manifest more of the magical power of your Shahzada (noble marid) heritage. You gain the following benefits:\n \u2022 Increase your Constitution, Intelligence, Wisdom or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the detect evil and good spell and can cast it at will, without expending a spell slot.\n \u2022 You have resistance to lightning damage.\n \u2022 As an action, you can transform the lower half of your body into a spiraling waterspout, allowing you to float through the air and dart through water. While transformed, your swim speed is doubled and you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you cannot use it again until you finish a short or long rest.",
	scorestxt : "Noble Marid Heritage (feat): +1 Constitution, Intelligence, Wisdom, or Charisma;",
	dmgres : ["Lightning"],
	action : ["action", "Waterspout Transformation"],
	usages : 1,
	recovery : "short rest",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 3,
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		firstCol : 'atwill'
	}]
};
/* Shahzada Heritage
Prerequisites: being a Genasi (Water)
You manifest more of the magical power of your Shahzada (Noble Marid) heritage. You gain the following benefits:
• Increase your Constitution, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Detect Evil and Good spell and can cast it at will, without expending a spell slot.
• You have resistance to Lightning damage.
• As an action, you can transform the lower half of your body into a spiraling waterspout, allowing you to float through the air and dart through water. While transformed, your swim speed is doubled and you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you cannot use it again until you finish a short or long rest. */

// Goblin
FeatsList["favor of the queen of air and darkness"] = { // Goblin
	name: "Favor of the Queen of Air and Darkness",
	source: [["NNHA:FF", 81]],
	prerequisite : "Being a Goblin",
	prereqeval : "CurrentRace.known.indexOf('goblin') !== -1",
	descriptionFull : "Long before the god Maglubiyet conquered the goblins, early goblins served in the court of the Queen of Air and Darkness, one of the Feywild's archfey. Goblins thrived in her dangerous domain thanks to a special boon from her—a supernatural knack for finding the weak spots in foes larger than themselves and for getting out of trouble. For reasons unknown, the Queen of Air and Darkness has taken special notice of you and granted you a further boon, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic.\n \u2022 You can cast the invisibility spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them.",
	description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. My spellcasting ability is the ability I increase with this feat. [+1 Int, Wis, or Cha]",
	spellcastingBonus : [{
		name : "Invisibility",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : "oncelr"
	},
	{
		name : "Abjur/Ench/Illus/Necro cantrip",
		'class': "any",
		school : ["Abjur", "Ench", "Illus", "Necro"],
		level : [0, 0],
		firstCol : "atwill"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	spellChanges : {
		"invisibility" : {
			components : "(V,S,M)",
			changes : "My Favor of the Queen of Air and Darkness feat allows me to cast Invisibility once per long rest without requiring a spell slot or spell components, or by using a spell slot and cast it with components as normal."
		}
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Intelligence is my spellcasting ability for this. [+1 Int" + (typePF ? "" : "elligence") + "]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Wisdom is my spellcasting ability for this. [+1 Wis" + (typePF ? "" : "dom") + "]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. I can cast Invisibility once per long rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Charisma is my spellcasting ability for this. [+1 Cha" + (typePF ? "" : "risma") + "]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
/* Favor of the Queen of Air and Darkness
Prerequisite: Goblin
Long before the god Maglubiyet conquered the goblins, early goblins served in the court of the Queen of Air and Darkness, one of the Feywild's archfey. Goblins thrived in her dangerous domain thanks to a special boon from her—a supernatural knack for finding the weak spots in foes larger than themselves and for getting out of trouble. For reasons unknown, the Queen of Air and Darkness has taken special notice of you and granted you a further boon, granting you the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn a cantrip from the abjuration, enchantment, illusion or necromancy school of magic. The spells' spellcasting ability is the ability increased by this feat.
• You can cast the invisibility spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them. */
FeatsList["goblin's furious accuracy"] = { 
	name : "Goblin's Furious Accuracy",
	source : ["NNHA:FF"],
	prerequisite : "Being a Goblin",
	prereqeval : "CurrentRace.known.indexOf('goblin') !== -1",
	description : "I can use my Fury of the Small trait twice before I must take a short rest. Whenever I have advantage on an attack roll that uses Dexterity, I can reroll one of the dice once. [+1 Dexterity]",
	scorestxt : "Goblin's Furious Accuracy (feat): +1 Dexterity;",
	extraLimitedFeatures : {
		name : "Fury of the Small",
		usages : 2,
		recovery : "short rest"
	},
	scores : [0, 1, 0, 0, 0, 0],
};

// Goliath
FeatsList["stone's fury"] = { 
	name : "Stone's Fury",
	source : ["NNHA:FF"],
	prerequisite : "Being a Goliath",
	prereqeval : "CurrentRace.known.indexOf('goliath') !== -1",
	descriptionFull : "Your competitive fury burns tirelessly. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 When you hit with an attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.\n \u2022 Immediately after you use your Stone's Endurance trait, you can make one weapon attack as part of that reaction.",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Stone's Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	action : ["reaction", " (after Stone's Endurance)"],
	usages : 1,
	recovery : "short rest",
	additional : "extra damage"
};

// Half-Orc
FeatsList["orcish centaur heritage"] = {
	name : "Orcish Centaur Heritage",
	source : ["BurnSky"],
	prerequisite : "Being a Half-Orc",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known); },
	description : "My walking speed increases by 10 ft. I can use my hooves for unarmed strikes that deal 1d4 bludgeoning damage. I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft. [+1 Strength or Constitution]",
	scorestxt : "Orcish Centaur Heritage (feat): +1 Strength or Constitution;",
	speed : { walk : {spd : "+10", enc : "+10" } },
	carryingCapacity : 2,
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\b(hoofs?|hooves)\b/i,
		name : "Hooves",
		source : ["BurnSky"],
		damage : [1, 4, "bludgeoning"],
		description : ""
	},
	weaponsAdd : ["Hooves"],
};
/* Orcish Centaur Heritage
The upper bodies of centaurs are comparable to human torsos in size, and below the waist, they have the bodies of small horses, averaging about 4 feet tall at the withers. Similar range of coloration as horses—from various shades of chestnut or bay to dappled or even zebra-like striped patterns. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Hooves. Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
• Equine Build. Your walking speed increases by 10 feet. You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot. */

// Harengon (Rabbitfolk)
FeatsList["colony defender"] = { 
	name : "Colony Defender",
	source : ["NNHA:FF"],
	prerequisite : "Being a Harengon",
	prereqeval : "CurrentRace.known.indexOf('harengon') !== -1",
	description : "My walking speed increases by 5 ft. As a bonus action with the Attack action, I can make a double-tipped weapon attack for 2d4 piercing damage. +1 AC while wielding a double-tipped weapon with two hands. [+1 Strength or Dexterity]",
	scorestxt : "Colony Defender (feat): +1 Strength or Dexterity;",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : ["if ((/double-tipped spear/i).test(WeaponName) && fields.Proficiency) {fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Two-handed; With Attack action, one attack as bonus action'); fields.Mod = StrDex; };", "I can make an extra attack with Double-tipped weapons as a bonus action when taking the Attack action."]
	},
	eval : "AddACMisc(1, 'Colony Defender', 'When wielding a double-tipped weapon in two hands, the Colony Defender feat gives a +1 bonus to AC', 'ACshield');",
	removeeval : "AddACMisc(0, 'Colony Defender', 'When wielding a double-tipped weapon in two hands, the Colony Defender feat gives a +1 bonus to AC');"
};
FeatsList["jumping flash"] = { 
	name : "Jumping Flash",
	source : ["NNHA:FF"],
	prerequisite : "Being a Harengon",
	prereqeval : "CurrentRace.known.indexOf('harengon') !== -1",
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I regain all expended uses of my Rabbit Hop feature when I finish a short rest.",
	scorestxt : "Jumping Flash (feat): +1 Strength or Dexterity;",
	skills : "\n\n" + toUni("Jumping Flash (feat)") + ": Acrobatics or Athletics.",
	speed : { walk : {spd : "+5", enc : "+5" } },
	extraLimitedFeatures : {
		name : "Rabbit Hop",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest"
	},
};
/* Jumping Flash
Prerequisite: Harengon
You are uncommonly nimble for your race. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• Increase your walking speed by 5 feet.
• You gain proficiency in the Acrobatics or Athletics skill (your choice).
• You regain all expended uses of your Rabbit Hop feature when you finish a short rest. */
FeatsList["powerhouse hopper"] = { // (small sized)
	name : "Powerhouse Hopper",
	source : ["NNHA:FF"],
	prerequisite : "Being a Small sized Harengon",
	prereqeval : "CurrentRace.known.indexOf('harengon') !== -1",
	descriptionFull : "You are uncommonly hardy for your race. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You regain all expended uses of your Rabbit Hop feature when you finish a short rest.\n \u2022 You do not have disadvantage on attack rolls with weapons with the heavy property.",
	description : "My walking speed increases by 5 ft. I regain all expended uses of my Rabbit Hop feature when I finish a short rest. I do not have disadvantage on attack rolls with heavy weapons.  [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	extraLimitedFeatures : {
		name : "Rabbit Hop",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest"
	},
	speed : { walk : {spd : "+5", enc : "+5" } }
};
/* Powerhouse Hopper
Prerequisite: Small sized Rabbitfolk
You are uncommonly hardy for your race. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Increase your walking speed by 5 feet.
• Your movement from your Rabbit Hop doesn't provoke opportunity attacks.
• You do not have disadvantage on attack rolls with weapons with the heavy property.
*/

// Human
FeatsList["angelfire blessing"] = {  
	name : "Angelfire Blessing",
	source : ["NNHA:FF"],
	prerequisite : "Being a Human",
	prereqeval : function(v) { return CurrentRace.known.indexOf('human') !== -1; },
	descriptionFull : "You learn to call on heavenly angelfire to serve your commands. You gain the following benefits:\n \u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20.\n \u2022 When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.\n \u2022 Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice once. I then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 fire damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
};

// Kobold
FeatsList["kobold ancestral roar"] = { 
	name : "Kobold Ancestral Roar",
	source : ["NNHA:FF"],
	prerequisite : "Being a Kobold",
	prereqeval : "CurrentRace.known.indexOf('kobold') !== -1",
	description : "I have advantage on saves to avoid/end the frightened condition on myself. I can inspire myself to roar. Creatures of my choice within 30 ft that can see & hear me make a Wisdom save (DC 8 + prof bonus + CHA mod) or be frightened of me for 1 minute, repeating save whenever it takes damage. [+1 Dex, Con, or Cha]",
	savetxt : { adv_vs : ["frightened"] },
	scorestxt : "Kobold Ancestral Roar (feat): +1 Dexterity, Constitution, or Charisma;",
	usages : 1,
	recovery : "short rest",
	action : [["action", "Ancestral Roar"]],
	weaponsAdd : ["Ancestral Roar"],
};
WeaponsList["ancestral roar"] = { 
		regExpSearch : /^(?=.*ancestral)(?=.*roar).*$/i,
		name : "Ancestral Roar",
		source : ["NNHA:FF"],
		ability : 6,
		type : "Natural",
		damage : ["", "", ""],
		save : "Wis",
		range : "within 30 ft",
		description : "Chosen creatures that see/hear me make Wis save or frightened for 1 min. Repeat save when takes damage.",
		abilitytodamage : false,
		dc : true,
		dbBreathWeapon : true
};
FeatsList["kobold ancestral scales"] = {
	name : "Kobold Ancestral Scales",
	source : [["NNHA:FF"]],
	descriptionFull : "You manifest scales reminiscent of your draconic ancestors. You gain the following benefits:\n \u2022 Increase your Dexterity or Constitution score by 1, to a maximum of 20.\n \u2022 Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.\n \u2022 When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "My scales harden, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. As a reaction when I take acid, cold, fire, lightning, or poison damage, I can gain resistance to that damage instance. I can do this my Prof. Bonus per long rest. [+1 Dexterity or Constitution]",
	scorestxt : "+1 Dexterity or Constitution",
	action : ["reaction", "Ancestral Scales (Resistance)"],
	extraLimitedFeatures : [{
		name : "Ancestral Scales (Resistance)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	armorOptions : {
		regExpSearch : /^(?=.*(ancestral|dragon|draconic|scaly))(?=.*(hide|skin|scales|resilience)).*$/i,
		name : "Ancestral Scales",
		source : ["NNHA:FF"],
		ac : 13
	},
	armorAdd : "Ancestral Scales"
};
/* Kobold Ancestral Scales
Prerequisite: Kobold
Whatever their relationship to dragons, kobold scales tend to be rust colored, although the occasional kobold sports scale color more akin to that of a draconic ancestor. You gain the following benefits:
• Increase your Dexterity or Constitution by 1, to a maximum of 20.
• Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.
• When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. */
FeatsList["kobold cleverness"] = {
	name : "Kobold Cleverness",
	source : ["NNHA:FF"],
	prerequisite : "Being a Kobold",
	prereqeval : "CurrentRace.known.indexOf('kobold') !== -1",
	description : "I can use my Dragon Growl trait twice before I must take a short rest. Whenever I have advantage on an attack roll that uses Dexterity or Wisdom, I can reroll one of the dice once. [+1 Dexterity or Wisdom]",
	scorestxt : "+1 Dexterity or Wisdom",
	extraLimitedFeatures : {
		name : "Draconic Growl",
		usages : 2,
		recovery : "short rest"
	},
};
/* Kobold Cleverness
Prerequisite: Kobold
The cleverness of Kobolds is well-known. You gain the following benefits:
• Increase your Dexterity or Wisdom by 1, to a maximum of 20.
• You can use your Dragon Growl trait twice before you must take a short rest.
• Whenever you have advantage on an attack roll using Dexterity or Wisdom, you can reroll one of the dice once. */
FeatsList["kobold cunning tactics"] = {
	name : "Kobold Cunning Tactics",
	source : ["NNHA:FF"],
	prerequisite : "Being a Kobold",
	prereqeval : "CurrentRace.known.indexOf('kobold') !== -1",
	descriptionFull : "Kobolds know they sometimes have to use superior numbers and cunning to take down powerful foes. Kobolds work together with other members of their tribe, allies, pets and mounts, and use any other advantage they can squeeze out of their environment to accomplish difficult tasks they couldn't manage alone. You gain the following benefits:\n \u2022 Pack Tactics. You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.\n \u2022 Whatever it Takes. When a creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to swap places with that creature, and you are hit by the attack instead. Once you use this trait, you can't do so again until you finish a long rest.",
	description : "Pack Tactics: I have advantage on attack rolls if at least one of my non-incapacitated allies is within 5 ft of the targeted creature\n Whatever it Takes: Once per long rest as a reaction when a creature I can see within 5 ft is hit by an attack roll, I can swap places with it and I'm hit by the attack instead.",
	action : [['reaction', 'Whatever it Takes']],
	extraLimitedFeatures : {
		name : "Whatever it Takes",
		usages : 1,
		recovery : "long rest",
	},
};
/* Kobold Cunning Tactics
Prerequisite: Kobold (Multiverse)
Kobolds know they sometimes have to use superior numbers and cunning to take down powerful foes. Kobolds work together with other members of their tribe, allies, pets and mounts, and use any other advantage they can squeeze out of their environment to accomplish difficult tasks they couldn't manage alone. You gain the following benefits:
• Pack Tactics. You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.
• Whatever it Takes. When a creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to swap places with that creature, and you are hit by the attack instead. Once you use this trait, you can't do so again until you finish a long rest.  */

// Leonin
FeatsList["fierce pride"] = { 
	name : "Fierce Pride",
	source : ["NNHA:FF"],
	prerequisite : "Being a Leonin",
	prereqeval : "CurrentRace.known.indexOf('leonin') !== -1",
	descriptionFull : "You often act with confidence, which can come off as imperiousness. While it reassures your allies, it can also suggest that you are quick to quarrel. The truth is that you simply enjoy fighting. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Once per encounter, you can deal an extra 2d6 damage to a creature you hit with a weapon attack if the target is within 5 ft of an ally that isn't incapacitated.\n \u2022 Immediately after you use your Daunting Roar trait, you can use your reaction to make one weapon attack.",
	description : "Once per encounter, I can add 2d6 extra damage to a weapon attack if the target is within 5 ft of an ally that isn't incapacitated. In addition, immediately after I use my Daunting Roar trait, I can use my reaction to make one weapon attack.\n \u2022 [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	action : ["reaction", " (after Daunting Roar)"],
	usages : 1,
	recovery : "encounter",
	additional : "2d6 extra damage"
};
/* Fierce Pride
Prerequisite: Leonin
You often act with confidence, which can come off as imperiousness. While it reassures your allies, it can also suggest that you are quick to quarrel. The truth is that you simply enjoy fighting. You gain the following benefits:
• Increase your Strength or Constitution score by 1, to a maximum of 20.
• You can deal an extra 2d6 damage to a creature you hit with a weapon attack if that creature is within 5 feet of an ally that isn't incapacitated. You can use this trait only once per combat.
• Immediately after you use your Daunting Roar trait, you can use your reaction to make one weapon attack.
*/

// Lizardfolk
FeatsList["subterranean lizardfolk"] = { 
	name : "Subterranean Lizardfolk",
	source : ["NNHA:FF"],
	prerequisite : "Being a Lizardfolk",
	prereqeval : "CurrentRace.known.indexOf('lizardfolk') !== -1",
	description : "I have darkvision out to a range of 60 feet. Climbing doesn't cost me extra movement. I count as one size larger when determining my carrying capacity and push/drag/lift weight. [+1 Str, Dex, Con or Wis]",
	vision : [["Darkvision", 60]],
	scorestxt : "Subterranean Lizard (feat): +1 Strength, Dexterity, Constitution or Wisdom;",
	extraLimitedFeatures : {
		name : "Hungry Jaws",
		usages : 2,
		recovery : "short rest"
	},
	carryingCapacity : 2
};
/* Subterranean Lizardfolk
Prerequisites: Lizardfolk
Your heritage is more akin to the great lizards of the underdark. You gain the following benefits:
	• Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.
	• Darkvision. You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
	• Reptilian Build. Climbing doesn't cost you extra movement. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
	• Deep Hunger. You can use your Hungry Jaws trait twice before you must finish a short or long rest.
*/
FeatsList["swamp blood"] = { 
	name : "Swamp Blood",
	source : ["NNHA:FF"],
	prerequisite : "Being a Lizardfolk",
	prereqeval : "CurrentRace.known.indexOf('lizardfolk') !== -1",
	description : "I can hold my breath for one hour at a time. I have Stealth advantage while in swamp/underwater. I can move towards an enemy as a bonus action. I count as one size larger when determining my carrying capacity and push/drag/lift weight. I can use Hungry Jaws one extra time. [+1 Str, Dex, Con or Wis]",
	descriptionFull : "Your heritage is more akin to the great lizards of the swamp. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022 Aquatic Hunter. You have advantage on Dexterity (Stealth) checks made to hide while underwater or while in swampy terrain. As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than when you started. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a short rest.\n \u2022 Reptilian Build. You can hold your breath for one hour at a time. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n \u2022 Envie. You can use your Hungry Jaws trait twice before you must finish a short or long rest.",
	action : [["bonus action", "Swamp Blood (Aquatic Hunter)"]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "short rest",
	scorestxt : "Swamp Blood (feat): +1 Strength, Dexterity, Constitution or Wisdom;",
	extraLimitedFeatures : {
		name : "Hungry Jaws",
		usages : 2,
		recovery : "short rest"
	},
	carryingCapacity : 2
};
/* Swamp Blood
Prerequisites: Lizardfolk
Your heritage is more akin to the great lizards of the swamp. You gain the following benefits:
	• Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.
	• Aquatic Hunter. You have advantage on Dexterity (Stealth) checks made to hide while underwater or while in swampy terrain. As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than when you started. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a short rest.
	• Reptilian Build. You can hold your breath for one hour at a time. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
	• Envie. You can use your Hungry Jaws trait twice before you must finish a short or long rest.
*/

// Locathah
FeatsList["adaptive amphibiousness"] = { 
	name : "Adaptive Amphibiousness",
	source : ["NNHA:FF"],
	prerequisite : "Being a Locathah",
	prereqeval : "CurrentRace.known.indexOf('locathah') !== -1",
	description : "I have advantage on Wisdom (Perception) checks that rely on sight. My tough, scaly skin now provides a base AC of 13 + Dex mod. I only need to be submerged at least once every 24 hours to avoid suffocating. [+1 Str, Dex, or Con]",
	descriptionFull : "Your physiology has adapted to the local environment. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.\n \u2022 Keen Eye. You gain expertise with Perception, which means your proficiency bonus is doubled for any ability check you make with it. You have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 Hardened Scales. Your natural armor trait now provides a base AC of 13 + your Dexterity modifier.\n \u2022 Adaptation: You are resistant to poison damage. In addition, you only need to be submerged at least once every 24 hours to avoid suffocating.",
	skills : [["Perception", "increment"]],
	dmgres : ["Poison"],
	scorestxt : "Adaptive Amphibiousness (feat): +1 Strength, Dexterity, or Constitution;",
	extraAC : {
		name : "Adaptive Amphibiousness",
		mod : 1,
		text : "My Natural Armor's base AC is 13."
	},
	vision: ["Adv. on Perception checks based on sight; ", 0],
};
/* Adaptive Amphibiousness
Prerequisite: Being a Locathah
Your physiology has adapted to the local environment. You gain the following benefits
	• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
	• Keen Eye. You gain expertise with Perception, which means your proficiency bonus is doubled for any ability check you make with it. You have advantage on Wisdom (Perception) checks that rely on sight.
	• Hardened Scales. Your natural armor trait now provides a base AC of 13 + your Dexterity modifier.
	• Adaptation: You are resistant to poison damage. In addition, you only need to be submerged at least once every 24 hours to avoid suffocating.
*/

// Loxodon
FeatsList["an elephant never forgets"] = { 
	name : "An Elephant Never Forgets",
	source : ["NNHA:FF"],
	prerequisite : "Being a Loxodon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('loxodon') !== -1; },
	descriptionFull : "You can accurately recall anything you have seen or heard within the past month.\n \u2022 You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:\n \u2022 Increase your Constitution, Intelligence or Wisdom score by 1, to a maximum of 20.\n \u2022 During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.\n \u2022 When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.\n \u2022 Whenever you make an Arcana, History, Nature, or Religion check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient.",
	description : "I can accurately recall anything I have seen/heard within the past month. My hatred for a creature type gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks, even if I'm not normally proficient. [+1 Con, Int or Wis]",
	scorestxt : "+1 Constitution, Intelligence, or Wisdom",
	choices : ["2 Humanoids", "Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"],
	"2 humanoids" : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for 2 humanoid races gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	aberrations : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for aberrations gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	beasts : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for beasts gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	celestials : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for celestials gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	constructs : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for constructs gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	dragons : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for dragons gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	elementals : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for elementals gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	fey : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for fey gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	fiends : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for fiends gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	giants : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for giants gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	monstrosities : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for monstrosities gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	oozes : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for oozes gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	plants : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for plants gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	},
	undead : {
		description : "I can accurately recall anything I have seen or heard within the past month. My hatred for undead gives me benefits: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related knowledge checks. [+1 Con, Int, or Wis]"
	}
};
/* An Elephant Never Forgets
Prerequisites: Loxodon
You can accurately recall anything you have seen or heard within the past month. You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:
• Increase your Constitution, Intelligence, or Wisdom by 1, to a maximum of 20.
• During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.
• When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.
• Whenever you make an Intelligence (Arcana, History, Nature, or Religion) check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient. */
FeatsList["blessing of ivory"] = {
	name : "Blessing of Ivory",
	source : ["NNHA:FF"],
	prerequisite : "Being a Loxodon",
	prereqeval : "CurrentRace.known.indexOf('loxodon') !== -1",
	description : "I gain a tusk attack that uses Strength and deals 1d6 piercing damage. As a bonus action, when I use the Attack action, I can shove someone within 5 ft with my tusks. [+1 Strength or Constitution]",
	descriptionFull : "Your Proboscidean heritage shows true. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 You gain a tusk attack as a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your tusks.",
	scorestxt : "Blessing of Ivory (feat): +1 Strength or Constitution;",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /tusk/i,
		name : "Tusks",
		source : ["NNHA:FF"],
		damage : [1, 6, "piercing"],
	},
	weaponsAdd : ["Tusks"],
	action : ["bonus action", "Tusk Shove (with Attack action)"]
};
/* Blessing of Ivory
Prerequisite: Loxodon
Your Proboscidean heritage shows true. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• You gain a tusk attack as a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
• If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your tusks. */
FeatsList["loxodon gracefulness"] = {
	name : "Loxodon Gracefulness",
	source : ["NNHA:FF"],
	prerequisite : "Being a Loxodon",
	prereqeval : "CurrentRace.known.indexOf('loxodon') !== -1",
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks I make to escape from being grappled. [+1 Strength or Dexterity]",
	scorestxt : "Loxodon Gracefulness (feat): +1 Strength or Dexterity;",
	skills : "\n\n" + toUni("Loxodon Nimbleness (feat)") + ": Acrobatics or Athletics.",
	speed : { walk : {spd : "+5", enc : "+5" } },
};
/* Loxodon Gracefulness
Prerequisite: Loxodon
You are uncommonly graceful for your race. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• Increase your walking speed by 5 feet.
• You gain proficiency in the Acrobatics or Athletics skill (your choice).
• You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being grappled. */

// Minotaur
FeatsList["built horn tough"] = {  
	name : "Built Horn Tough",
	source : [["NNHA:FF"]],
	prerequisite : "Being a Minotaur",
	prereqeval : "CurrentRace.known.indexOf('minotaur') !== -1",
	descriptionFull : "Your horns are hard enough to be considered nigh-unbreakable. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Your Horns damage die increases to a d8. \n \u2022 If you used your Horns as part of the Attack action on your turn, when you use your Hammering Horns during the same turn, you may choose to knock the target creature prone instead of push it up to 10 feet away from you.\n \u2022 When you use your Goring Rush feature, you gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone until the start of your next turn.",
	description : "My Horns damage die increases to a d8. When I use Horns as part of Attack action, I may prone with Hammering Horns. When I use Goring Rush, I have advantage on checks and saves against spells and effects that push, pull, or prone me until the start of my next turn. [+1 Strength or Constitution]",
	savetxt : { text : ["After Goring Horns = Adv. vs push/pull/prone; "] },
	scorestxt : "+1 Strength or Constitution",
	action : ["bonus action", "Improved Hammering Horns (with Attack action)"],
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.theWea.name == 'Horns') {
                    fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
                };
            },
            "My Horns damage die increases to a d8."
        ]
    }
};
/* Built Horn Tough
Prerequisite: Minotaur
Your horns are hard enough to be considered nigh-unbreakable. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Improved Horns. Your Horns damage die increases to a d8. 
• Improved Hammering Horns. If you used your Horns as part of the Attack action on your turn,  when you use your Hammering Horns during the same turn, you may choose to knock the target creature prone instead of push it up to 10 feet away from you. 
• Improved Goring Rush. When you use your Goring Rush feature, you gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone until the start of your next turn. */
FeatsList["bullheadedness"] = { // Minotaur
	name : "Bullheadedness",
	source : [["NNHA:FF"]],
	prerequisite : "Being a Minotaur",
	prereqeval : "CurrentRace.known.indexOf('minotaur') !== -1",
	description : "Walking speed +5 ft. I count as one size larger for carrying capacity/push/drag/lift weight. I have advantage on checks and saves against spells/effects that push/pull/prone me. Expertise with Intimidation or Persuasion, or proficiency if not so already. I may prone with Hammering Horns. [+1 Str, Con, Wis or Cha]",
	descriptionFull : "You have a steadfast adherence to an opinion, purpose, or course of action. You gain the following benefits:\n \u2022 Increase your Strength, Constitution, Wisdom or Charisma by 1, to a maximum of 20.\n \u2022 Beast of Burden. Increase your walking speed by 5 feet, and you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n \u2022 Improved Hammering Horns. You may choose to knock the target creature prone instead of push it up to 10 feet away from you. You gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone.\n \u2022 Improved Imposing Presence. You gain proficiency in the Intimidation or Persuasion skill (your choice). If you are already proficient in the chosen skill, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.",
	scorestxt : "Bullheadedness (feat): +1 Strength, Constitution, Wisdom, or Charisma;",
	skillstxt : "Proficiency with Intimidation or Persuasion, or Expertise if already proficient",
	savetxt : { text : ["Adv. on checks/saves vs spells or effects that push/pull/prone me; "] },
	carryingCapacity : 2,
	speed : { walk : {spd : "+5", enc : "+5" } }
};
/* Bullheadedness
Prerequisite: Being a Minotaur
You have a steadfast adherence to an opinion, purpose, or course of action. You gain the following benefits:
	• Increase your Strength, Constitution, Wisdom or Charisma by 1, to a maximum of 20.
	• Beast of Burden. Increase your walking speed by 5 feet, and you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. 
	• Improved Hammering Horns. You may choose to knock the target creature prone instead of push it up to 10 feet away from you. You gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone.
	• Improved Imposing Presence. You gain proficiency in the Intimidation or Persuasion skill (your choice). If you are already proficient in the chosen skill, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.
*/

// Owlin (Owlfolk)
FeatsList["nimble sight"] = { 
	name : "Nimble Sight",
	source : ["NNHA:FF"],
	prerequisite : "Being an Owlin",
	prereqeval : "CurrentRace.known.indexOf('owlin') !== -1",
	description : "I have advantage on Perception checks based on sight. I can cast Detect Magic at will, without expending a spell slot. Wisdom is my spellcasting ability for this spell. My darkvision extends to 120 feet. [+1 Wisdom]",
	scorestxt : "Nimble Sight (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	vision: [
		["Darkvision", "fixed 120"],
		["Adv. on Perception checks based on sight", 0]
		],
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 5,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}]
};
/* Nimble Sight
Prerequisite: Being an Owlfolk
•    Increase your Wisdom by 1, to a maximum of 20.
•    You have advantage on Wisdom (Perception) checks that rely on sight.
•    You can cast the Detect Magic spell at will, without expending a spell slot.
•    Your darkvision has a radius of 120 feet.
*/

// Sea Elf
FeatsList["sharksbane weapons training"] = {  
	name : "Sharksbane Weapons Training",
	source : ["NNHA:FF"],
	prerequisite : "Being a Sea Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('sea elf') !== -1; },
	descriptionFull : "You have received extensive training in the weapons of your people. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 \n \u2022 When you use a net, it becomes a melee weapon with the thrown property instead of a ranged weapon and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.\n \u2022 When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property.",
	description : "I can use two-weapon fighting with tridents and nets. Tridents have the finesse property and do d8 damage (versatile d10). Nets have the finesse property, count as a melee weapon, and no disadvantage if hostile within 5 ft. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.baseWeaponName == 'trident') {
                    fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
                    fields.Description = fields.Description.replace('Thrown, versatile (1d8)', 'Finesse, thrown, versatile (1d10)');
                    fields.Mod = v.StrDex;
                } else if (v.baseWeaponName == 'net') {
                    fields.Description = fields.Description.replace('Thrown, only 1 attack, up to large creature hit is restrained (PHB 148)', 'Finesse, thrown, no disadvantage if hostile within 5 ft, restrain up to large creature (DC 10)'); 
					fields.Range = 'Melee, 5/15' + ' ft';
                    fields.Mod = v.StrDex;
                };
            },
            "With a trident, I get the following benefits:\n - Finesse and two-weapon fighting;\n - The trident damage die increases to d8 (versatile d10).\n \u2022 With a net, I get the following benefits:\n - Finesse and two-weapon fighting;\n - Becomes melee weapon and no disadvantage if hostile within 5 ft."
        ]
    }
};
/*Sharksbane Weapons Training
Prerequisite: Being a sea elf
You have received extensive training in the favored weapons of your people. You gain the following benefits:
	• Increase your Strength or Dexterity by 1, to a maximum of 20.
	• When you use a trident, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands.
	• When you use a net, it becomes a melee weapon instead of a ranged weapon, and being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with it.
	• When you use tridents and/or nets, they have the finesse property and you can use two-weapon fighting with them even though they do not have the light property. 
*/

// Shifter
FeatsList["keen animal instincts"] = { // Shifter
	name : "Keen Animal Instincts",
	source : [["NNHA:FF"]],
	prerequisite : "Being a Shifter",
	prereqeval : "CurrentRace.known.indexOf('shifter') !== -1",
	descriptionFull : "Your heritage has given you sharp senses and heightened reflexes. You gain the following benefits:\n \u2022 While you are conscious, you have advantage on initiative rolls and you can't be surprised.\n \u2022 Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can see, smell, or hear.\n \u2022 While you have temporary hit points granted by your Shifting feature remaining, you have resistance to bludgeoning, piercing, and slashing damage from a source that you can see, smell, or hear.",
	description : "I have advantage on initiative rolls and can't be surprised while not incapacitated. No Perception disadvantage from lightly obscured if I can see, smell, or hear. While I have Shifted temporary hit points, I have resistance to bludgeoning, piercing, and slashing damage from sources I can see, smell, or hear.",
	advantages : [["Initiative", true]],
	savetxt : { immune : ["surprised"] },
	dmgres : [["Bludgeoning", "Bludgeon. (thp)"], ["Piercing", "Piercing (thp)"], ["Slashing", "Slashing (thp)"]],
	vision : [["No lightly obscured Perception disadv if hear/see/smell", 0]],
};
/* Keen Animal Instincts
Prerequisite: Shifter
Your heritage has given you sharp senses and heightened reflexes. You gain the following benefits:
• You have advantage on Initiative rolls and can't be surprised while not incapacitated.
• Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can see, smell, or hear.
• While you have temporary hit points granted by your Shifting feature remaining, you have resistance to bludgeoning, piercing, and slashing damage from a source that you can see, smell, or hear. */
FeatsList["wild blood"] = { // Shifter (not Wildhunt)
	name : "Wild Blood",
	source : [["NNHA:FF"]],
	prerequisite : "Being a Shifter",
	prereqeval : "CurrentRace.known.indexOf('shifter') !== -1",
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Wild Hunt.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts for 1d4+1 minutes instead of the usual 1 minute.\n \u2022 While you are Shifted, you gain the benefits of the Wildhunt Shifting Feature trait (You have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're incapacitated) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4+1 minutes and I gain Wildhunt benefits (Adv on Wisdom checks, no creature within 30 ft can make an attack roll with advantage against me unless I'm incapacitated). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma;",
	usages : "Shift",
	recovery : "Shift",
	additional : "1d4+1 min",
	vision : [["While Shifted: no creat within 30 ft can Adv attack me", 0]],
	savetxt : { text : ["While Shifted: Adv. on Wis checks"] },
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : ["NNHA:FF", 33],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Retractable Claws"],
};
/* Wild Blood
Prerequisite: Shifter (not Wildhunt)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Wild Hunt.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts for 1d4+1 minutes instead of the usual 1 minute.
• While you are Shifted, you gain the benefits of the Wildhunt Shifting Feature trait in addition to your own: (You have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're incapacitated. */

// Small
FeatsList["mighty small"] = { 
	name : "Mighty Small",
	source : ["NNHA:FF"],
	prerequisite : "Being a small race",
	prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices === 4; },
	descriptionFull : "You are uncommonly hardy for your race. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You do not have disadvantage on attack rolls with weapons with the heavy property.\n \u2022 Increase running long/high jump distance by 10 feet if wielding heavy property weapon with both hands.",
	description : "My walking speed increases by 5 ft. I do not have disadvantage on attack rolls with heavy weapons. I increase running jumps by 10 ft while wielding a heavy weapon. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	speed : { walk : {spd : "+5", enc : "+5" } }
};

// Tabaxi
FeatsList["feline graceful accuracy"] = { 
	name : "Feline Graceful Accuracy",
	source : ["NNHA:FF"],
	prerequisite : "Being a Tabaxi",
	prereqeval : "CurrentRace.known.indexOf('tabaxi') !== -1",
	description : "My walking speed increases by 5 ft. Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, or Charisma]",
	scorestxt : "Feline Graceful Accuracy (feat): +1 Dexterity, Intelligence, or Charisma;",
	speed : { walk : {spd : "+5", enc : "+5" } }
};

// Tiefling
FeatsList["feral barbed skin"] = { 
	name : "Feral Barbed Skin",
	source : ["NNHA:FF"],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I have scaly skin, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. As a bonus action, I can protrude/retract small barbs from my skin. When protruding, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling/are grappling me. [+1 Dex, Con, or Cha]",
	action: ["bonus action", "Barbs (protrude/extract)"],
	scorestxt : "Feral Barbed Skin (feat): +1 Dexterity, Constitution, or Charisma;",
	addarmor : "Feral Barbed Skin",
	armorOptions : {
		regExpSearch : /^(?=.*feral)(?=.*barbed).*$/i,
		name : "Feral Barbed Skin",
		source : ["NNHA:FF"],
		ac : 13
	},
};
/* Feral Barbed Skin
Prerequisite: Tiefling
Your feral nature metamorphizes you. You manifest scales and barbs protrude from your head. You gain the following benefits:
• Increase your Dexterity, Constitution or Charisma by 1, to a maximum of 20.
• You manifest a scaly skin. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.
• As a bonus action, you can cause small barbs to protrude all over your body or cause them to retract. At the start of each of your turns while the barbs are out, you deal 1d6 piercing damage to any creature grappling you or any creature grappled by you. */
FeatsList["fumes of minauros"] = {
	name : "Fumes of Minauros",
	source : ["NNHA:FF"],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "When I cast an acid damage spell, I can reroll any 1 on acid damage dice once. I then sheathe myself in acidic fumes until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 acid damage. [+1 Int or Cha]",
	scorestxt : "Fumes of Minauros (feat): +1 Intelligence or Charisma;"	
};
/* Fumes of Minauros
Prerequisite: Tiefling
You learn to call on the polluted energies of the third layer of the Nine Hells to serve your commands. You gain the following benefits:
• Increase your Intelligence or Charisma by 1, to a maximum of 20.
• When you roll acid damage for a spell you cast, you can reroll any roll of 1 on the acid damage dice, but you must use the new roll, even if it is another 1.
• Whenever you cast a spell that deals acid damage, you can cause acidic fumes to wreathe you until the end of your next turn. These acidic fumes don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the acidic fumes are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 acid damage. */

// Triton
FeatsList["champion of the ocean"] = {
	name : "Champion of the Ocean",
	source : ["NNHA:FF"],
	prerequisite : "Being a Triton",
	prereqeval : "CurrentRace.known.indexOf('triton') !== -1",
	description : "I count as one size larger when determining my carrying capacity and push/drag/lift weight. Once per long rest, as an a bonus action, I transform. For the next minute, I have resistance to acid/poison damage, and my weapon attacks deal my proficiency modifier additional damage. [+1 Str, Con or Cha]",
	descriptionFull : "The ocean has imbued you with additional strength, granting you unparalleled might in marine combat. You gain the following benefits:\n \u2022 Increase your Strength, Constitution or Charisma score by 1, to a maximum of 20.\n \u2022 As an a bonus action, you imbue yourself with power, transforming into a champion of the ocean. For the next minute, you have resistance to acid and poison damage, and your weapon attacks deal additional damage equal to your proficiency modifier. Once you use this feature, you can't use it again until you finish a long rest.",
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "long rest",
	scorestxt : "Champion of the Ocean (feat): +1 Strength, Constitution or Charisma;",
	carryingCapacity : 2
};
/*Champion of the Ocean
Prerequisite: Being a triton
The ocean has imbued you with additional strength, granting you unparalleled might in marine combat. You gain the following benefits:
• Increase your Strength, Constitution or Charisma by 1, to a maximum of 20.
• You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
• As an a bonus action, you imbue yourself with power, transforming into a champion of the ocean. For the next minute, you have resistance to acid and poison damage, and your weapon attacks deal additional damage equal to your proficiency modifier. Once you use this feature, you can't use it again until you finish a long rest.
*/
FeatsList["revenant trident"] = { 
	name : "Revenant Trident",
	source : ["NNHA:FF"],
	prerequisite : "Being a Triton",
	prereqeval : function(v) { return CurrentRace.known.indexOf('triton') !== -1; },
	descriptionFull : "You are descended from a master of the double trident and their skills have passed on to you. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 While you are holding a double trident with two hands, you gain a + 1 bonus to Armor Class.\n \u2022 A double trident has the finesse property when you wield it.",
	description : "My mastery with the double trident allows me to treat it as having the finesse trait. In addition, I gain +1 AC while wielding it with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double trident' && fields.Proficiency) {
					fields.Description = fields.Description.replace(/two-handed/i, 'Finesse, two-handed');
					fields.Mod = v.StrDex;
				};
			},
			"Double tridents count as having finesse for me."
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double trident in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")) || !CurrentWeapons.known.some(function (n) { return n[0] == "double trident" || (WeaponsList[n[0]] && WeaponsList[n[0]].baseWeapon == "double trident"); }); }
	}
};

// Warforged
FeatsList["warforged wormhole"] = { 
	name : "Warforged Wormhole",
	source : ["NNHA:FF"],
	prerequisite : "Being a Warforged",
	prereqeval : "CurrentRace.known.indexOf('warforged') !== -1",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. I also learn to speak, read, and write Primordial. [+1 Intelligence or Charisma]",
	scorestxt : "Warforged Wormhole (feat): +1 Intelligence or Charisma;",
	spellcastingBonus : {
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		oncesr : true
	},
	languageProfs : ["Primordial"],
	usages : 1,
	recovery : "short rest"
};
FeatsList["living wood construction"] = {
	name : "Living Wood Construction",
	source : [["NNHA:FF"]],
	prerequisite : "Being a Warforged",
	prereqeval : "CurrentRace.known.indexOf('warforged') !== -1",
	descriptionFull : "Your creator used wood from a primeval forest as part of your construction. It still flows with nature's power, granting you the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Your body has a rough, bark-like composition. When you aren't using incorporated armor, you have a base AC of 17, including your Warforged Integrated Protection +1 AC bonus. Your Dexterity modifier doesn't affect this number, but if you are using a shield, you can apply the shield's bonus as normal.\n \u2022 You learn the Druidcraft cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this feat).\n \u2022 Goodberry. At the end of a long rest, 1d4+1 berries, as from the Goodberry spell, sprout from your skin.",
	description : "I have Living Wood armor that provides me a base AC of 17, but I can't add my Dexterity modifier. I can still use a shield. I learn the Druidcraft cantrip. At the end of a long rest, my body grows 1d4 Goodberry. [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
	extraLimitedFeatures : [{
		name : "Living Wood (1d4 Goodberry)",
		usages : "End of",
		recovery : "long rest",
	}],
	spellcastingBonus : {
		name : "Druidcraft",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill",
	},
	spellcastingAbility : [4,5,6],
	armorOptions : {
		regExpSearch : /^(?=.*living)(?=.*wood).*$/i,
		name : "Living Wood",
		source : [["NNHA:FF", 34]],
		ac : 16,
		dex : -10,
	},
	armorAdd : "Living Wood",
};
/* Living Wood Construction
Prerequisite: Warforged
Your creator used wood from a primeval forest as part of your construction. It still flows with nature's power, granting you the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• Your body has a rough, bark-like composition. When you aren't using incorporated armor, you have a base AC of 17, including your Warforged Integrated Protection +1 AC bonus. Your Dexterity modifier doesn't affect this number, but if you are using a shield, you can apply the shield's bonus as normal.
• You learn the Druidcraft cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this feat).
• Goodberry. At the end of a long rest, 1d4 berries, as from the Goodberry spell, sprout from your skin. */
FeatsList["pactboon construction"] = {
	name : "Pactboon Construction",
	source : [["NNHA:FF", 79]],
	prerequisite : "Being a Warforged",
	prereqeval : "CurrentRace.known.indexOf('warforged') !== -1",
	descriptionFull : "Your creator made a bargain with an arcane entity to provide ensorcelled materials for use in your construction. It still flows with arcane power, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You learn to speak, read, and write your choice of Abyssal, Celestial, Infernal, or Sylvan.\n \u2022 You learn the Misty Step spell and one 1st-level spell of your choice. The 1st-level spell must be from the enchantment or illusion school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	languageProfs : [["Abyssal, Celestial, Infernal, or Sylvan", 1]],
	spellcastingBonus : [{
		name : "Misty Step",
		spells : ["misty step"],
		selection : ["misty step"],
		firstCol : "oncelr"
	}, {
		name : "1st-level Ench/Illus spell",
		'class': "any",
		school : ["Ench", "Illus"],
		level : [1, 1],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them " + (typePF ? "by expending" : "with") + " a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn one from Abyssal, Celestial, Infernal, or Sylvan. I learn Misty Step and one 1st level enchantment or illusion spell. I can cast each once per long rest without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
/* Pactboon Construction
Prerequisite: Warforged
Your creator made a bargain with an arcane entity to provide ensorcelled materials for use in your construction. It still flows with arcane power, granting you the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn to speak, read, and write your choice of Abyssal, Celestial, Infernal, or Sylvan.
• You learn the Misty Step spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat. */

// Yaun-Ti Pureblood
FeatsList["forked tongue"] = { // Yuan-ti Pureblood
	name : "Forked Tongue",
	source : ["NNHA:FF"],
	prerequisite : "Being a Yuan-ti Pureblood",
	prereqeval : "CurrentRace.known.indexOf('yuan-ti pureblood') !== -1",
	descriptionFull : "You have unlocked more of your serpentfolk heritage. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You have the ability to communicate in a limited manner with snakes and serpents. They can understand the meaning of your words, though you have no special ability to understand them in return.\n \u2022 You gain proficiency in the Deception skill, and you add double your proficiency bonus to checks you make with it.\n \u2022 As a Bonus action, you can attempt to deceive one creature you can see within 30 feet that can hear and understand you. Creatures that can't be charmed are immune to this effect. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 24 hours.",
	description : "Snakes understand me. I gain expertise with Deception. As a Bonus action, a creature I can see within 30 ft that can hear and understand me makes its Insight vs. my Deception or I gain adv. on attacks and don't provoke opportunity attacks until the end of my next turn. 24 hour immunity if it succeeds. [+1 Cha]",
	action : [["bonus action", " (Deceive)"]],
	languageProfs : ["Forked Tongue"],
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"]]
};
/* Forked Tongue
Prerequisite: Yuan-Ti Pureblood
You have unlocked more of your serpentfolk heritage, allowing you to develop your conversational skill to better deceive others. You gain the following benefits:
• Increase your Charisma score by 1, to a maximum of 20.
•  You have the ability to communicate in a limited manner with snakes and serpents. They can understand the meaning of your words, though you have no special ability to understand them in return.
• You gain proficiency in the Deception skill, and you add double your proficiency bonus to checks you make with it.
• As a Bonus action, you can attempt to deceive one creature you can see within 30 feet that can hear and understand you. Creatures that can't be charmed are immune to this effect. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 24 hours. */
