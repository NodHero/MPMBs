var iFileName = "ua_Combined-Feats.js";
RequiredSheetVersion(13);
// This file adds all of the Unearthed Arcana feats that haven't been carried over to an official source.

// Define the source
SourceList["CUAF"] = {
	name : "Unearthed Arcana: Combined Feats",
	abbreviation : "CUAF",
	group : "Unearthed Arcana",
	url : ["https://media.wizards.com/2016/downloads/DND/UA-Feats-V1.pdf", "https://media.wizards.com/2017/dnd/downloads/UA-SkillFeats.pdf", "https://media.wizards.com/2017/dnd/downloads/RJSJC2017_04UASkillFeats_24v10.pdf"],
};

// Add 8 feats: 4 'weapon mastery' feats and 4 'tool' feats from the Feats V1 UA
// This doesn't add the "Warhammer Master" feat, as that is only in the article to illustrate how not to design a feat
FeatsList["fell handed"] = {
	name : "Fell Handed",
	source : ["CUAF"],
	descriptionFull : "You master the handaxe, battleaxe, greataxe, warhammer, and maul. You gain the following benefits when using any of them:\n \u2022 You gain a +1 bonus to attack rolls you make with the weapon.\n \u2022 Whenever you have advantage on a melee attack roll you make with the weapon and hit, you can knock the target prone if the lower of the two d20 rolls would also hit the target.\n \u2022 Whenever you have disadvantage on a melee attack roll you make with the weapon, the target takes bludgeoning damage equal to your Strength modifier (minimum of 0) if the attack misses but the higher of the two d20 rolls would have hit.\n \u2022 If you use the Help action to aid an ally's melee attack while you're wielding the weapon, you knock the target's shield aside momentarily. In addition to the ally gaining advantage on the attack roll, the ally gains a +2 bonus to the roll if the target is using a shield.",
	description : "With a handaxe, battleaxe, greataxe, warhammer, or maul, I get +1 to hit, knock prone if I have adv. and hit with both rolls, with disadv. still do Str mod in bludg. damage if I miss but the other die would've hit, can use Help to give ally +2 to hit vs. enemy with a shield.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Adv: knock prone if both dice hit; Disadv: Str Mod bludg. damage on miss but 2nd die would hit';
				};
			},
			"With a handaxe, battleaxe, greataxe, warhammer, or maul, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 When attacking with advantage, the target is knocked prone if both die would hit;\n \u2022 When attacking with disadvantage and missing, still do my Strength modifier in bludgeoning damage."
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(v.baseWeaponName)) output.extraHit += 1;
			}, ""]
	}
};
FeatsList["blade mastery"] = {
	name : "Blade Mastery",
	source : ["CUAF"],
	descriptionFull : "You master the shortsword, longsword, scimitar, rapier, and greatsword. You gain the following benefits when using any of them:\n \u2022 You gain a +1 bonus to attack rolls you make with the weapon.\n \u2022 On your turn, you can use your reaction to assume a parrying stance, provided you have the weapon in hand. Doing so grants you a +1 bonus to your AC until the start of your next turn or until you're not holding the weapon.\n \u2022 When you make an opportunity attack with the weapon, you have advantage on the attack roll.",
	description : "With a shortsword, longsword, greatsword, scimitar, or rapier, I get +1 to hit, advantage on opportunity attacks, and with the weapon in hand I can use my reaction to assume a parrying stance that gives me +1 AC until the start of my next turn.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Advantage on opportunity attacks';
				};
			},
			"With a shortsword, longsword, greatsword, scimitar, or rapier, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 Advantage on opportunity attacks."
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(v.baseWeaponName)) output.extraHit += 1;
			}, ""]
	},
	action : ["reaction", " Parrying Stance"]
};
FeatsList["flail mastery"] = {
	name : "Flail Mastery",
	source : ["CUAF"],
	descriptionFull : "The flail is a tricky weapon to use, but you have spent countless hours mastering it. You gain the following benefits:\n \u2022 You gain a +1 bonus to attack rolls you make with a flail.\n \u2022 As a bonus action on your turn, you can prepare yourself to extend your flail to sweep over targets' shields. Until the end of this turn, your attack rolls with a flail gain a +2 bonus against any target using a shield.\n \u2022 When you hit with an opportunity attack using a flail, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone.",
	calculate : "event.value = 'With a flail, I get +1 to hit, and enemies hit by an opportunity attack with it have to make a Str save DC ' + (8 + Number(What('Proficiency Bonus')) + What('Str Mod')) + ' (8 + Prof. bonus + Str mod) or be knocked prone. As a bonus action, I can get +2 to hit with my flail vs. targets with shields until the end of my turn.';",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'flail') {
					fields.Description += (fields.Description ? '; ' : '') + 'On opportunity attack hit, Strength save (DC 8 + Prof. bonus + Str mod) or knocked prone';
				};
			},
			"With a flail, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 Targets hit with it must make a Strength saving throw (DC 8 + proficiency bonus + Strength modifier) or be knocked prone."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'flail') output.extraHit += 1;
			}, ""]
	},
	action : ["bonus action", ""]
};
FeatsList["spear mastery"] = {
	name : "Spear Mastery",
	source : ["CUAF"],
	descriptionFull : "Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:\n \u2022 You gain a +1 bonus to attack rolls you make with a spear.\n \u2022 When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)\n \u2022 You can set your spear to receive a charge. As a bonus action, choose a creature you can see that is at least 20 feet away from you. If that creature moves within your spear's reach on its next turn, you can make a melee attack against it with your spear as a reaction. If the attack hits, the target takes an extra 1d8 piercing damage, or an extra 1d10 piercing damage if you wield the spear with two hands. You can't use this ability if the creature used the Disengage action before moving.\n \u2022 As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn.",
	description : "With a spear, I get +1 to hit and it does d8 damage (versatile d10). As a bonus action, I select a target at least 20 ft away. If it moves in reach on its next turn, I can attack it as a reaction, extra damage die. As a bonus action, I can increase the spear's reach by 5 ft.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'spear') {
					fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
					fields.Description = fields.Description.replace('versatile (1d8)', 'versatile (1d10)');
				};
			},
			"With a spear, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 The spear damage die increases to d8 (versatile d10)."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'spear') output.extraHit += 1;
			}, ""]
	},
	action : [["bonus action", " (set vs. charge)"], ['bonus action', ' (increase reach)']]
};
FeatsList["alchemist"] = {
	name : "Alchemist",
	source : ["CUAF"],
	descriptionFull : "You have studied the secrets of alchemy and are an expert in its practice, gaining the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency with alchemist's supplies. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.\n \u2022 As an action, you can identify one potion within 5 feet of you, as if you had tasted it. You must see the liquid for this benefit to work.\n \u2022 Over the course of any short rest, you can temporarily improve the potency of one potion of healing of any rarity. To use this benefit, you must have alchemist's supplies with you, and the potion must be within reach. If the potion is drunk no more than 1 hour after the short rest ends, the creature drinking the potion can forgo the potion's die roll and regains the maximum number of hit points that the potion can restore.",
	description : "I gain proficiency with alchemist's supplies, or expertise if already proficient. As an action, I can identify a potion within 5 ft. During a rest with alchemist's supplies, I can enhance a potion of healing, to heal its max. Consuming it within 1 hour maximizes its effects [+1 Int]",
	scores : [0, 0, 0, 1, 0, 0],
	action : ["action", " (identify potion)"],
	toolProfs : [["Alchemist's supplies", "Int"]],
	eval : function () {
		if ((/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
FeatsList["burglar"] = {
	name : "Burglar",
	source : ["CUAF"],
	descriptionFull : "You pride yourself on your quickness and your close study of certain clandestine activities. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency with thieves' tools. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.",
	description : "I gain proficiency with thieves' tools, or expertise with them if I'm already proficient. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	toolProfs : [["Thieves' tools", "Dex"]],
	eval : function () {
		if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
FeatsList["gourmand"] = {
	name : "Gourmand",
	source : ["CUAF"],
	descriptionFull : "You have mastered a variety of special recipes, allowing you to prepare exotic dishes with useful effects. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You gain proficiency with cook's utensils. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.\n \u2022 As an action, you can inspect a drink or plate of food within 5 feet of you and determine whether it is poisoned, provided that you can see and smell it.\n \u2022 During a long rest, you can prepare and serve a meal that helps you and your allies recover from the rigors of adventuring, provided you have suitable food, cook's utensils, and other supplies on hand. The meal serves up to six people, and each person who eats it regains two additional Hit Dice at the end of the long rest. In addition, those who partake of the meal have advantage on Constitution saving throws against disease for the next 24 hours.",
	description : "I gain proficiency with cook's utensils, or expertise if already proficient. As an action, I can detect poison in food within 5 ft. In a long rest with food/supplies, I can have 6 creatures regain 2 extra HD and give them adv. on Con saves vs. disease for 24 hours. [+1 Con]",
	scores : [0, 0, 1, 0, 0, 0],
	action : ["action", " (inspect food)"],
	toolProfs : [["Cook's utensils", "Int"]],
	eval : function () {
		if ((/cook.*utensils/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/cook.*utensils/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
FeatsList["master of disguise"] = {
	name : "Master of Disguise",
	source : ["CUAF"],
	descriptionFull : "You have honed your ability to shape your personality and to read the personalities of others. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency with the disguise kit. If you are already proficient with it, you add double your proficiency bonus to checks you make with it.\n \u2022 If you spend 1 hour observing a creature, you can then spend 8 hours crafting a disguise you can quickly don to mimic that creature. Making the disguise requires a disguise kit. You must make checks as normal to disguise yourself, but you can assume the disguise as an action.",
	description : "I gain proficiency with the disguise kit, or expertise with it if I'm already proficient. After observing a creature for 1 hour, I can craft a disguise to mimic it in 8 hours with a disguise kit. Once finished, I can don this disguise as an action. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	action : ["action", " (don disguise)"],
	toolProfs : [["Disguise kit", "Cha"]],
	eval : function () {
		if ((/disguise.*kit/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/disguise.*kit/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};

// Add 18 feats, corresponding with the 18 skills
FeatsList["acrobat"] = {
	name : "Acrobat",
	source : ["CUAF"],
	descriptionFull : "You become more nimble, gaining the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Acrobatics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of the current turn.",
	description : "I gain expertise with Acrobatics, or proficiency if not so already. As a bonus action, I can make a DC 15 Dexterity (Acrobatics) check to have difficult terrain not cost me extra movement for this turn. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	skills : [["Acrobatics", "increment"]],
	action : ["bonus action", ""]
};
FeatsList["animal handler"] = {
	name : "Animal Handler",
	source : ["CUAF"],
	descriptionFull : "You master the techniques needed to train and handle animals. You gain the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Animal Handling skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You can use a bonus action on your turn to command one friendly beast within 60 feet of you that can hear you and that isn't currently following the command of someone else. You decide now what action the beast will take and where it will move during its next turn, or you issue a general command that lasts for 1 minute, such as to guard a particular area.",
	description : "I gain expertise with Animal Handling, or proficiency if not so already. As a bonus action, I can command a friendly beast not under another's command within 60 ft. If it hears me, I decide its next turn or give a general command lasting for 1 minute. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Animal Handling", "increment"]],
	action : ["bonus action", ""]
};
FeatsList["arcanist"] = {
	name : "Arcanist",
	source : ["CUAF"],
	descriptionFull : "You study the arcane arts, gaining the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Arcana skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Prestidigitation and Detect Magic spells. You can cast detect magic once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Arcana, or proficiency if not so already. I learn the Prestidigitation cantrip. I can cast Detect Magic without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Arcana", "increment"]],
	spellcastingBonus : [{
		name : "Arcanist",
		spellcastingAbility : 4,
		spells : ["prestidigitation"],
		selection : ["prestidigitation"],
		firstCol : "atwill"
	}, {
		name : "Arcanist (1x long rest)",
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : "oncelr"
	}]
};
FeatsList["brawny"] = {
	name : "Brawny",
	source : ["CUAF"],
	descriptionFull : "You become stronger, gaining the following benefits:\n \u2022 Increase your Strength score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Athletics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You count as if you were one size larger for the purpose of determining your carrying capacity.",
	description : "I gain expertise with Athletics, or proficiency if not so already. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift. [+1 Strength]",
	scores : [1, 0, 0, 0, 0, 0],
	skills : [["Athletics", "increment"]],
	carryingCapacity : 2
};
FeatsList["diplomat"] = {
	name : "Diplomat",
	source : ["CUAF"],
	descriptionFull : "You master the arts of diplomacy, gaining the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Persuasion skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 If you spend 1 minute talking to someone who can understand what you say, you can make a Charisma (Persuasion) check contested by the creature's Wisdom (Insight) check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is charmed by you as long as it remains within 60 feet of you and for 1 minute thereafter.",
	description : "I gain expertise with Persuasion, or proficiency if not so already. With a one minute long conversation outside of combat, I can make a Persuasion vs. its Insight. If successful, it is charmed by me as long as it remains within 60 ft and 1 minute after that [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Persuasion", "increment"]]
};
FeatsList["empathic"] = {
	name : "Empathic",
	source : ["CUAF"],
	descriptionFull : "You possess keen insight into how other people think and feel. You gain the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Insight skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You can use your action to try to get uncanny insight about one humanoid you can see within 30 feet of you. Make a Wisdom (Insight) check contested by the target's Charisma (Deception) check. If your check succeeds, you have advantage on attack rolls and ability checks against the target until the end of your next turn.",
	description : "I gain expertise with Insight, or proficiency if not so already. As an action, a humanoid within 30 ft I can see must make its Deception vs. my Insight or I gain advantage on attacks and ability checks against it until the end of my next turn. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Insight", "increment"]]
};
FeatsList["historian"] = {
	name : "Historian",
	source : ["CUAF"],
	descriptionFull : "Your study of history rewards you with the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.",
	description : "I gain expertise with History, or proficiency if not so already. When I use the Help action to help a creature that can understand me with an ability check, I can make a DC 15 Int (History) check to give a bonus equal to my proficiency bonus. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["History", "increment"]],
	action : ["action", ""]
};
FeatsList["investigator"] = {
	name : "Investigator",
	source : ["CUAF"],
	descriptionFull : "You have an eye for detail and can pick out the smallest clues. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Investigation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You can take the Search action as a bonus action.",
	description : "I gain expertise with Investigation, or proficiency if not so already. As a bonus action, I can take the Search action. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Investigation", "increment"]],
	action : ["bonus action", " (Search)"]
};
FeatsList["medic"] = {
	name : "Medic",
	source : ["CUAF"],
	descriptionFull : "You master the physician's arts, gaining the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Medicine skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 During a short rest, you can clean and bind the wounds of up to six willing beasts and humanoids. Make a DC 15 Wisdom (Medicine) check for each creature. On a success, if a creature spends a Hit Die during this rest, that creature can forgo the roll and instead regain the maximum number of hit points the die can restore. A creature can do so only once per rest, regardless of how many Hit Dice it spends.",
	description : "I gain expertise with Medicine, or proficiency if not so already. During a short rest, I can attend to the wounds of up to 6 creatures. With a DC 15 Wis (Medicine) check for each creature, that target gets the maximum result on one of its HD that it uses. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Medicine", "increment"]]
};
FeatsList["menacing"] = {
	name : "Menacing",
	source : ["CUAF"],
	descriptionFull : "You become fearsome to others, gaining the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Attack action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Intimidation) check contested by the target's Wisdom (Insight) check. If your check succeeds, the target is frightened until the end of your next turn. If your check fails, the target can't be frightened by you in this way for 1 hour.",
	description : "I gain expertise with Intimidation, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft I can see and that can see and hear me must make its Insight vs. my Intimidation or be frightened until end of my next turn. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Intimidation", "increment"]]
};
FeatsList["naturalist"] = {
	name : "Naturalist",
	source : ["CUAF"],
	descriptionFull : "Your extensive study of nature rewards you with the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Nature skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Druidcraft and Detect Poison and Disease spells. You can cast Detect Poison and Disease once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Nature, or proficiency if not so already. I learn the Druidcraft cantrip. I can cast Detect Poison and Disease without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Nature", "increment"]],
	spellcastingBonus : [{
		name : "Naturalist",
		spellcastingAbility : 4,
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}, {
		name : "Naturalist (1x long rest)",
		spells : ["detect poison and disease"],
		selection : ["detect poison and disease"],
		firstCol : "oncelr"
	}]
};
FeatsList["perceptive"] = {
	name : "Perceptive",
	source : ["CUAF"],
	descriptionFull : "You hone your senses until they become razor sharp. You gain the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Perception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can both see and hear.",
	description : "I gain expertise with Perception, or proficiency if not so already. I don't have disadvantage on my Perception checks from being in a lightly obscured area (dim light), provided that I can still both see and hear. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Perception", "increment"]],
	vision : [["No disadv. on Perception in lightly obscured or dim light", 0]]
};
FeatsList["performer"] = {
	name : "Performer",
	source : ["CUAF"],
	descriptionFull : "You master performance so that you can command any stage. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Performance skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 While performing, you can try to distract one humanoid you can see who can see and hear you. Make a Charisma (Performance) check contested by the humanoid's Wisdom (Insight) check. If your check succeeds, you grab the humanoid's attention enough that it makes Wisdom (Perception) and Intelligence (Investigation) checks with disadvantage until you stop performing.",
	description : "I gain expertise with Performance, or proficiency if not so already. While performing, I can distract one humanoid. It must make its Insight vs. my Performance or have disadv. on its Perception and Investigation checks until I stop performing. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Performance", "increment"]]
};
FeatsList["quick-fingered"] = {
	name : "Quick-Fingered",
	source : ["CUAF"],
	descriptionFull : "Your nimble fingers and agility let you perform sleight of hand. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Sleight of Hand skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 As a bonus action, you can make a Dexterity (Sleight of Hand) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket.",
	description : "I gain expertise with Sleight of Hand, or proficiency if not so already. As a bonus action, I can make a Dexterity (Sleight of Hand) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	skills : [["Sleight of Hand", "increment"]],
	action : ["bonus action", ""]
};
FeatsList["silver-tongued"] = {
	name : "Silver-Tongued",
	source : ["CUAF"],
	descriptionFull : "You develop your conversational skill to better deceive others. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Deception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Attack action on your turn, you can replace one attack with an attempt to deceive one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 1 hour.",
	description : "I gain expertise with Deception, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft makes its Insight vs. my Deception or until end of my next turn, I gain adv. on attacks and don't provoke its opportunity attacks. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"]]
};
FeatsList["stealthy"] = {
	name : "Stealthy",
	source : ["CUAF"],
	descriptionFull : "You know how best to hide. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Stealth skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 If you are hidden, you can move up to 10 feet in the open without revealing yourself if you end the move in a position where you're not clearly visible.",
	description : "I gain expertise with Stealth, or proficiency if not so already. When I'm hidden, I can move 10 ft to another position without revealing myself, provided that I won't be clearly visible in this new position either. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	skills : [["Stealth", "increment"]]
};
FeatsList["survivalist"] = {
	name : "Survivalist",
	source : ["CUAF"],
	descriptionFull : "You master wilderness lore, gaining the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Survival skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Alarm spell. You can cast it once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Survival, or proficiency if not so already. I can cast Alarm without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Survival", "increment"]],
	spellcastingBonus : {
		name : "1x long rest",
		spellcastingAbility : 5,
		spells : ["alarm"],
		selection : ["alarm"],
		firstCol : "oncelr"
	}
};
FeatsList["theologian"] = {
	name : "Theologian",
	source : ["CUAF"],
	descriptionFull : "Your extensive study of religion rewards you with the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Religion skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Thaumaturgy and Detect Evil and Good spells. You can cast Detect Evil and Good once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Religion, or proficiency if not so already. I learn the Thaumaturgy cantrip. I can cast Detect Evil and Good without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Religion", "increment"]],
	spellcastingBonus : [{
		name : "Theologian",
		spellcastingAbility : 4,
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : "atwill"
	}, {
		name : "Theologian (1x long rest)",
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		firstCol : "oncelr"
	}]
};

// Adds 46 feats (23 + 13 variants of Grudge-Bearer), all of which have a racial prerequisite
FeatsList["barbed hide"] = {
	name : "Barbed Hide",
	source : ["CUAF"],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	descriptionFull : "One of your ancestors was a barbed devil or other spiky fiend. Barbs protrude from your head. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 As a bonus action, you can cause small barbs to protrude all over your body or cause them to retract. At the start of each of your turns while the barbs are out, you deal 1d6 piercing damage to any creature grappling you or any creature grappled by you.\n \u2022 You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
	description : "I gain expertise with Intimidation, or proficiency if not so already. As a bonus action, I can protrude/retract small barbs from my skin. With them out, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling or are grappling me. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Intimidation", "increment"]],
	action : ["bonus action", ""]
};
FeatsList["critter friend"] = {
	name : "Critter Friend",
	source : ["CUAF"],
	prerequisite : "Being a Forest Gnome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('forest gnome') !== -1; },
	descriptionFull : "Your friendship with animals mystically deepens. You gain the following benefits:\n \u2022 You gain proficiency in the Animal Handling skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Speak with Animals spell and can cast it at will, without expending a spell slot. You also learn the Animal Friendship spell, and you can cast it once with this feat, without expending a spell slot. You regain the ability to cast it in this way when you finish a long rest. Intelligence is your spellcasting ability for these spells.",
	description : "I gain expertise with Animal Handling, or proficiency if I didn't have that already. I can cast Speak With Animals and Animal Friendship without using a spell slot. I can cast each of these spells like this once per long rest. Intelligence is my spellcasting ability for these.",
	skills : [["Animal Handling", "increment"]],
	spellcastingBonus : [{
		name : "Once per long rest",
		spellcastingAbility : 4,
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : 'oncelr'
	}]
};
FeatsList["dragon wings"] = {
	name : "Dragon Wings",
	source : ["CUAF"],
	prerequisite : "Being a Dragonborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dragonborn') !== -1; },
	descriptionFull : "You sprout draconic wings. With your wings, you have a flying speed of 20 feet if you aren't wearing heavy armor and aren't exceeding your carrying capacity.",
	description : "I sprout draconic wings. With my wings, I have a flying speed of 20 feet if I am not wearing heavy armor and I am not exceeding my carrying capacity or encumbered.",
	speed : { fly : { spd : 20, enc : 0 } }
};
FeatsList["everybody's friend"] = {
	name : "Everybody's Friend",
	source : ["CUAF"],
	prerequisite : "Being a Half-Elf",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known); },
	descriptionFull : "You develop your magnetic personality to ease your way through the world. You gain the following benefits:\n \u2022 You gain proficiency in the Deception and Persuasion skills. If you're already proficient in either skill, your proficiency bonus is doubled for any check you make with that skill.",
	description : "I gain expertise with Deception and Persuasion, or proficiency with them if I didn't have that already. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"], ["Persuasion", "increment"]]
};
FeatsList["grudge-bearer"] = {
	name : "Grudge-Bearer",
	source : ["CUAF"],
	prerequisite : "Being a Dwarf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
	descriptionFull : "You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:\n \u2022 Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.\n \u2022 During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.\n \u2022 When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.\n \u2022 Whenever you make an Intelligence (Arcana, History, Nature, or Religion) check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient.",
	description : "My hatred for a creature type gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]",
	scorestxt : "+1 Strength, Constitution, or Wisdom",
	choices : ["2 Humanoids", "Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"],
	"2 humanoids" : {
		description : "My hatred for 2 humanoid races gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana/History/Nature/Religion checks. [+1 Str, Con, or Wis]"
	},
	aberrations : {
		description : "My hatred for aberrations gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	beasts : {
		description : "My hatred for beasts gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	celestials : {
		description : "My hatred for celestials gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	constructs : {
		description : "My hatred for constructs gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	dragons : {
		description : "My hatred for dragons gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	elementals : {
		description : "My hatred for elementals gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	fey : {
		description : "My hatred for fey gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	fiends : {
		description : "My hatred for fiends gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	giants : {
		description : "My hatred for giants gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	monstrosities : {
		description : "My hatred for monstrosities gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	oozes : {
		description : "My hatred for oozes gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	plants : {
		description : "My hatred for plants gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	undead : {
		description : "My hatred for undead gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	}
};
FeatsList["human determination"] = {
	name : "Human Determination",
	source : ["CUAF"],
	prerequisite : "Being a Human",
	prereqeval : function(v) { return CurrentRace.known.indexOf('human') !== -1; },
	descriptionFull : "You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest.",
	description : "When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 to one ability score]",
	scorestxt : "+1 to one ability score of your choice",
	usages : 1,
	recovery : "short rest",
	additional : "attack/check/save"
};
FeatsList["orcish aggression"] = {
	name : "Orcish Aggression",
	source : ["CUAF"],
	prerequisite : "Being a Half-Orc",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known); },
	descriptionFull : "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.",
	description : "As a bonus action, I can move up to my speed toward an enemy of my choice that I can see or hear. I must end this move closer to the enemy than I started.",
	action : ["bonus action", ""]
};
FeatsList["wonder maker"] = {
	name : "Wonder Maker",
	source : ["CUAF"],
	prerequisite : "Being a Rock Gnome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('rock gnome') !== -1; },
	descriptionFull : "You master the tinker techniques of your people. You gain the following benefits:\n \u2022 When you make a check using your proficiency with tinker's tools, you add double your proficiency bonus to the check.\n \u2022 When you make a device with your Tinker trait, you have the following additional options for what you make:\n \u2022 " + toUni("Alarm") + ". This device senses when a creature moves to within 15 feet of it without speaking aloud a password chosen when you create it. One round after a creature moves into range, the alarm makes a shrill ringing that lasts for 1 minute and can be heard from up to 300 feet away.\n \u2022 " + toUni("Calculator") + ". This device makes doing sums easy.\n \u2022 " + toUni("Lifter") + ". This device can be used as a block and tackle, allowing its user to hoist five times the weight the user can normally lift.\n \u2022 " + toUni("Timekeeper") + ". This pocket watch keeps accurate time.\n \u2022 " + toUni("Weather Sensor") + ". When used as an action, this device predicts weather conditions in a 1-mile radius over the next 4 hours, showing one symbol (clouds, sun/moon, rain, or snow) for each hour.",
	description : "I gain expertise with Tinker's Tools. I get additional Tinker options: Alarm (audible to 300 ft for 1 min), Calculator, Lifter (as block and tackle that multiplies max lift weight by 5), Timekeeper (pocket watch), Weather Sensor (predict for 1-mile, 4 hours) [+1 Dex or Int]",
	scorestxt : "+1 Dexterity or Intelligence",
	eval : function () {
		if ((/tinker.*tool/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/tinker.*tool/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};

// Adds Feats 2020 not in Tasha's
FeatsList["shield training"] = {
	name: "Shield Training",
	source: ["CUAF"],
	descriptionFull : "You’ve trained in the effective use of shields. You gain the following benefits:\n \u2022Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022You gain proficiency with shields.\n \u2022In combat, you can don or doff a shield as the free object interaction on your turn.\n \u2022If you have the Spellcasting or Pact Magic feature, you can use a shield as a spellcasting focus.",
	description: "I gain proficiency with shields. I can don or doff a shield as the free object interaction on my turn. If I have the Spellcasting or Pact Magic feature, I can use my shield as a spellcasting focus. [+1 Strength, Dexterity, or Constitution]",
	improvements: "Shield Training (feat): +1 Strength, Dexterity, or Constitution;",
	armorProfs: [false, false, false, true]
};
FeatsList["tandem tactician"] = {
	name: "Tandem Tactician",
	source: ["CUAF"],
	descriptionFull : "Your presence in a scrap tends to elevate your comrades. You gain the following benefits:\n \u2022You can use the Help action as a bonus action.\n \u2022When you use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. Additionally, you can help two allies targeting the same creature within range when you use the Help action this way.",
	description: "I can use the Help action as a bonus action. When I use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. I can help two allies targeting the same creature within range when I use the Help action this way. ",
	action: ["bonus action", ""]
};
FeatsList["tracker"] = {
	name: "Tracker",
	source: ["CUAF"],
	descriptionFull : "You have spent time hunting creatures and honed your skills, gaining the following benefits:\n \u2022Increase your Wisdom score by 1, to a maximum of 20.\n \u2022You learn the hunter’s mark spell. You can cast it once without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have. Wisdom is your spellcasting ability for this spell.\n \u2022You have advantage on Wisdom (Survival) checks to track creatures.",
	description: "I can cast Hunter's Mark once per long rest without expending a spell slot using Wisdom as my spellcasting ability. I can also cast it with spell slots I have. I have advantage on Wisdom (Survival) checks to track creatures. [+1 Wisdom]",
	scores: [0, 0, 0, 0, 1, 0],
	spellcastingBonus: {
		name: "Tracker (1x long rest)",
		spellcastingAbility: 5,
		spells: ["hunter's mark"],
		selection: ["hunter's mark"],
		firstCol: "oncelr"
	},
};