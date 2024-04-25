var iFileName = "Feats - Racial Feats [Nod].js"; 
RequiredSheetVersion("13.1.9");

SourceList["RCF"] = {
	name : "Racial Feats",
	abbreviation : "RACEFT",
	abbreviationSpellsheet: "RA",
	group : "Nod's Homebrew",
	date : "2023/06/08"
};

// Add Racial Feats
// Aasimar
FeatsList["celestial constitution"] = {
	name : "Celestial Constitution",
	source : [["RCF"]],
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
FeatsList["divine ascendant"] = { // Multiverse Aasimar
	name: "Divine Ascendant",
	source: [["RCF"]],
	prerequisite : "Being an Aasimar",
	prereqeval : function(v) { return CurrentRace.known.indexOf('aasimar') !== -1; },
	descriptionFull : "The blood of your celestial ancestor is exceptionally strong within you, granting you power uncommon even among Aasimar. You gain the following benefits:\n\u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n\u2022 You learn the Sacred Flame cantrip. The spells' spellcasting ability is the ability increased by this feat.\n\u2022 You can use your Healing Hands trait twice before you need to finish a long rest to use them again.",
	description : "I learn the Sacred Flame cantrip. I regain all expended uses of my Healing Hands feature when I finish a short rest. [+1 Int, Wis, or Cha]",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Sacred Flame",
		spells : ["sacred flame"],
		selection : ["sacred flame"],
		firstCol : "atwill"
	}],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList['aasimar'].name && CurrentRace.features["healing hands"] && CurrentRace.level != 0) {
        CurrentRace.features["healing hands"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "healing hands"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList['aasimar'].name && CurrentRace.features["healing hands"]) {
		CurrentRace.features["healing hands"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "healing hands"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Divine Ascendant
Prerequisite: Aasimar
The blood of your celestial ancestor is exceptionally strong within you, granting you power uncommon even among Aasimar. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
• You learn the Sacred Flame cantrip. The spells' spellcasting ability is the ability increased by this feat.
• You regain all expended uses of your Healing Hands feature when you finish a short rest. */
FeatsList["sacred soul of the storm"] = { 
	name : "Sacred Soul of the Storm",
	source : [["RCF"]],
	prerequisite : "Being an Aasimar",
	prereqeval : function(v) { return CurrentRace.known.indexOf('aasimar') !== -1; },
	description : "When I cast a lightning damage spell, I can reroll any 1 on lightning damage dice once. I then sheathe myself in a storm cloud until my next turn ends. The storm sheds bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 lightning damage. [+1 Int, Wis, or Cha]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma"	
};
/* Sacred Soul of the Storm
Prerequisite: Aasimar
You learn to call on primal energies to serve your commands. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• When you roll lightning damage for a spell you cast, you can reroll any roll of 1 on the lightning damage dice, but you must use the new roll, even if it is another 1.
• Whenever you cast a spell that deals lightning damage, you can cause a storm cloud to wreathe you until the end of your next turn. The storm cloud doesn't harm you or your possessions, and it shed bright light out to 30 feet and dim light for an additional 30 feet. While the storm cloud is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 lightning damage. */

// Astral Elf
FeatsList["luminous glow"] = {
	name : "Luminous Glow",
	source : [["RCF"]],
	prerequisite : "Being an Astral Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('astral elf') !== -1; },
	descriptionFull : "You learn to call on the essence of the Astral to serve your commands. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your 'Starlight Step' feature when you finish a short rest. Immediately after you use your Starlight Step, each creature of your choice that you can see within 5 feet of you takes radiant damage equal to your proficiency bonus.\n \u2022 When you deal radiant damage, you can reroll any roll of 1 on the radiant damage dice, but you must use the new roll, even if it is another 1.\n \u2022 Whenever you deal radiant damage, you can cause a luminous glow to wreathe you until the end of your next turn. The glow doesn't harm you or your possessions, and it sheds bright light out to 30 feet and dim light for an additional 30 feet. While the glow is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 radiant damage.",
	description : "I regain 'Starlight Step' when I finish a short rest. When I use Starlight Step, each chosen creature within 5 ft takes my Prof mod radiant damage. When I deal radiant damage, I can reroll 1s, and until my next turn ends, glow bright light 30 ft, dim 30 ft, and deal 1d4 radiant if hit me in melee within 5 ft. [+1 to one]",
	scorestxt : "+1 to one ability score of your choice",
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["astral elf"].name && CurrentRace.features["starlight step"] && CurrentRace.level != 0) {
        CurrentRace.features["starlight step"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "starlight step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["astral elf"].name && CurrentRace.features["starlight step"]) {
		CurrentRace.features["starlight step"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "starlight step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Luminous Glow
Prerequisite: Astral Elf
You learn to call on the essence of the Astral to serve your commands. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You regain all expended uses of your 'Starlight Step' feature when you finish a short rest. Immediately after you use your Starlight Step, each creature of your choice that you can see within 5 feet of you takes radiant damage equal to your proficiency bonus.
• When you deal radiant damage, you can reroll any roll of 1 on the radiant damage dice, but you must use the new roll, even if it is another 1.
• Whenever you deal radiant damage, you can cause a luminous glow to wreathe you until the end of your next turn. The glow doesn't harm you or your possessions, and it sheds bright light out to 30 feet and dim light for an additional 30 feet. While the glow is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 radiant damage. */
FeatsList["stars in their eyes"] = {
	name : "Stars in Their Eyes",
	source : [["RCF"]],
	prerequisite : "Being an Astral Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('astral elf') !== -1; },
	descriptionFull : "Life in the Silver Void has imbued astral elf's souls with a spark of divine light. That light manifests as a starry gleam in their eyes. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your 'Starlight Step' feature when you finish a short rest. When you teleport using 'Starlight Step', you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet until the start of your next turn.\n \u2022 You can cast the Faerie Fire spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. You can also cast the spell as normal using any spell slots you have. In addition, you can cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest. When you cast it in this way, it appears as multi-colored sparkling stars.  Your spellcasting ability for the spell is the ability increased by this feat.",
	description : "I regain 'Starlight Step' when I finish a short rest. When I use Starlight Step, I can see normally in magical and nonmagical darkness until the start of my next turn. (1/LR) I can cast Faerie Fire without using a spell slot or components, and normally as a Bonus action Prof modifier per long rest. [+1 to Int, Wis, or Cha]",
	scorestxt : "+1 Intelligence, Wisdom or Charisma",
	spellcastingAbility : [4,5,6],
	allowUpCasting : true,
	spellcastingBonus : {
		name : "Stars in Their Eyes",
		spells : ["faerie fire"],
		selection : ["faerie fire"],
		firstCol : "oncelr",
	},
	spellChanges : {
		"faerie fire" : {
			components : "(V,S,M)",
			changes : "My Stars in Their Eyes feat allows me to cast Faerie Fire once per long rest without requiring a spell slot or spell components, or by using a spell slot and cast it with components as normal." }
	},
	extraLimitedFeatures : [{
		name : "Stars in Their Eyes (Faerie Fire)",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 1+"
	},{
		name : "Faerie Fire (Bonus action)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["astral elf"].name && CurrentRace.features["starlight step"] && CurrentRace.level != 0) {
        CurrentRace.features["starlight step"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "starlight step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["astral elf"].name && CurrentRace.features["starlight step"]) {
		CurrentRace.features["starlight step"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "starlight step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Stars in Their Eyes
Prerequisite: Astral Elf
Life in the Silver Void has imbued astral elf's souls with a spark of divine light. That light manifests as a starry gleam in their eyes. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You regain all expended uses of your 'Starlight Step' feature when you finish a short rest. When you teleport using 'Starlight Step', you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet until the start of your next turn.
• You can cast the Faerie Fire spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. You can also cast the spell as normal using any spell slots you have. In addition, you can cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest. When you cast it in this way, it appears as multi-colored sparkling stars.  Your spellcasting ability for the spell is the ability increased by this feat. */
FeatsList["unusual perspective"] = {
	name : "Unusual Perspective",
	source : [["RCF"]],
	prerequisite : "Being an Astral Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('astral elf') !== -1; },
	descriptionFull : "Life in the Silver Void has imbued astral elf's souls with a spark of divine light. That light manifests as a starry gleam in their eyes. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your 'Starlight Step' feature when you finish a short rest. You also gain resistance to all damage when you teleport using Starlight Step. The resistance lasts until the start of your next turn.\n \u2022 At the end of a long rest, you gain inspiration (described in chapter 4 of the Player's Handbook). You can meditate for 1 minute, at the end of which you gain the benefit of a short rest. You can't meditate in this way again until you finish a long rest\n \u2022 When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. You must choose to do so before the roll, and once you use this ability, you can't use it again until you finish a short or long rest. ",
	description : "I regain 'Starlight Step' when I finish a short rest. When I use Starlight Step, I have resistance to all damage until the start of my next turn. I gain Inspiration at the end of a long rest, and 1/LR, I can meditate for 1 minute to short rest. I can make an attack, check, or save with ADV, 1/SR.  [+1 to Str, Dex, or Con]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	extraLimitedFeatures : [{
		name : "Advantage (attack/check/save)",
		usages : 1,
		recovery : "long rest"
	},{
		name : "Short rest (1 minute meditation)",
		usages : 1,
		recovery: "long rest",
	}],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["astral elf"].name && CurrentRace.features["starlight step"] && CurrentRace.level != 0) {
        CurrentRace.features["starlight step"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "starlight step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["astral elf"].name && CurrentRace.features["starlight step"]) {
		CurrentRace.features["starlight step"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "starlight step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Unusual Perspective
Prerequisite: Astral Elf
Astral elves' longevity gives them an unusual perspective on the passage of time. You gain the following benefits:
• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
• You regain all expended uses of your 'Starlight Step' feature when you finish a short rest. You also gain resistance to all damage when you teleport using Starlight Step. The resistance lasts until the start of your next turn.
• At the end of a long rest, you gain inspiration (described in chapter 4 of the Player's Handbook). You can meditate for 1 minute, at the end of which you gain the benefit of a short rest. You can't meditate in this way again until you finish a long rest. 
• When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. You must choose to do so before the roll, and once you use this ability, you can't use it again until you finish a short or long rest. */

// Autognome
FeatsList["intricate design"] = { // Autognome
	name : "Intricate Design",
	source : [["RCF"]],
	prerequisite : "Being an Autognome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('autognome') !== -1; },
	description : "I regain all expended uses of my Built for Success feature when I finish a short rest. I do not need to sleep and am immune to magical sleep. I gain Mending cantrip, can Bonus cast it Prof/LR. I can also be healed by Heal, Healing Spirit, Mass Heal, Power Word Heal, and Prayer of Healing spells. [+1 Con, Int, Wis, Cha]",
	descriptionFull : "The internal components used in an autognome's manufacture can vary wildly. You gain the following benefits:\n \u2022 Increase your Constitution, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your Built for Success feature when you finish a short rest.\n \u2022 You don't need to sleep, and magic can't put you to sleep.\n \u2022 In addition to the healing spells present on your 'Healing Machine' trait, you are also affected by the following spells: Heal, Healing Spirit, Mass Heal, Power Word Heal, and Prayer of Healing. You learn the Mending cantrip. You can cast it as normal, and you can also cast it as a bonus action, without needing a material component, a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest. Your spellcasting ability for the spell is the ability increased by this feat.",
	scorestxt : "+1 Constitution, Intelligence, Wisdom, or Charisma",
	savetxt : { immune : ["magical sleep"] },
	spellcastingAbility : [3,4,5,6],
	spellcastingBonus : {
		name : "Intricate Design",
		spells : ["mending"],
		selection : ["mending"],
		firstCol : "atwill",
	},
	extraLimitedFeatures : [{
	name : "Mending (Bonus action)",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	}],
	changeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["autognome"].name && CurrentRace.extraLimitedFeatures[0] && CurrentRace.extraLimitedFeatures[0].name == "Built for Success" && CurrentRace.level != 0) {
		CurrentRace.extraLimitedFeatures[0].recovery = "short rest";
		processExtraLimitedFeatures(true, CurrentRace.known, CurrentRace.extraLimitedFeatures);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["autognome"].name && CurrentRace.extraLimitedFeatures[0] && CurrentRace.extraLimitedFeatures[0].name == "Built for Success") {
			CurrentRace.extraLimitedFeatures[0].recovery = "long rest";
			processExtraLimitedFeatures(true, CurrentRace.known, CurrentRace.extraLimitedFeatures);
	}}
};
/* Intricate Design
Prerequisite: Autognome
The internal components used in an autognome's manufacture can vary wildly. You gain the following benefits:
• Increase your Constitution, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You regain all expended uses of your 'Built for Success' feature when you finish a short rest.
• You don't need to sleep, and magic can't put you to sleep.
• In addition to the healing spells present on your 'Healing Machine' trait, you are also affected by the following spells: Heal, Healing Spirit, Mass Heal, Power Word Heal, and Prayer of Healing. You learn the Mending cantrip. You can cast it as normal, and you can also cast it as a bonus action, without needing a material component, a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest. Your spellcasting ability for the spell is the ability increased by this feat. */
FeatsList["mobile design"] = { // Autognome
	name : "Mobile Design",
	source : [["RCF"]],
	prerequisite : "Being an Autognome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('autognome') !== -1; },
	description : "+5 ft walking speed. When moving on my turn, I can speed x 2. I can't do it again until I don't move at all on one of my turns. I regain 'Built for Success' when I finish a short rest. I gain prof or expertise with Acrobatics. As Bonus action, I can make a DC 15 Acro check to ignore difficult terrain on my turn. [+1 to one]",
	descriptionFull : "No two autognomes are necessarily made of the same materials. Your design is much more efficient. You gain the following benefits\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your Built for Success feature when you finish a short rest.\n \u2022 Increase your speed by 5 feet. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.\n \u2022 You gain proficiency in the Acrobatics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it. As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement and your movement doesn't provoke opportunity attacks until the end of the current turn.",
	scorestxt : "+1 to one ability score of your choice",
	skills : [["Acrobatics", "increment"]],
	skillstxt : "Proficiency with Acrobatics, or\n   Expertise if already proficient",
	action : ["bonus action", " (DC 15 Acro)"],
	speed : { walk : {spd : "+5", enc : "+5" } },
	extraLimitedFeatures : [{
	name : "Double speed",
	usages : 1,
	recovery : " Turn",
	additional : "still for 1 turn to recover",
	tooltip : " (can be replenished by not moving for one whole turn)"
	}],	
	changeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["autognome"].name && CurrentRace.extraLimitedFeatures[0] && CurrentRace.extraLimitedFeatures[0].name == "Built for Success" && CurrentRace.level != 0) {
		CurrentRace.extraLimitedFeatures[0].recovery = "short rest";
		processExtraLimitedFeatures(true, CurrentRace.known, CurrentRace.extraLimitedFeatures);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["autognome"].name && CurrentRace.extraLimitedFeatures[0] && CurrentRace.extraLimitedFeatures[0].name == "Built for Success") {
			CurrentRace.extraLimitedFeatures[0].recovery = "long rest";
			processExtraLimitedFeatures(true, CurrentRace.known, CurrentRace.extraLimitedFeatures);
	}}
};
/* Mobile Design
Prerequisite: Autognome
No two autognomes are necessarily made of the same materials. Your design is much more efficient. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You regain all expended uses of your 'Built for Success' feature when you finish a short rest.
• Increase your speed by 5 feet. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.
• You gain proficiency in the Acrobatics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it. As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement and your movement doesn't provoke opportunity attacks until the end of the current turn. */
FeatsList["sturdy design"] = { // Autognome
	name : "Sturdy Design",
	source : [["RCF"]],
	prerequisite : "Being an Autognome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('autognome') !== -1; },
	description : "+5 ft walking speed. When moving on my turn, I can speed x 2. I can't do it again until I don't move at all on one of my turns. I regain 'Built for Success' when I finish a short rest. I gain prof or expertise with Acrobatics. As Bonus action, I can make a DC 15 Acro check to ignore difficult terrain on my turn. [+1 to one]",
	descriptionFull : "No two autognomes are necessarily made of the same materials. Your design is much more efficient. You gain the following benefits\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your Built for Success feature when you finish a short rest.\n \u2022 Increase your speed by 5 feet. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.\n \u2022 You gain proficiency in the Acrobatics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it. As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement and your movement doesn't provoke opportunity attacks until the end of the current turn.",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	savetxt : { immune : ["critical hits (become normal hits)"] },
	skillstxt : "Expertise with one Integrated Tool",
	extraAC : {
	name : "Enhanced Armored Casing",
	mod : 1,
	text : "I gain +1 AC and any critical hit against me becomes a normal hit."
	},
	extraLimitedFeatures : [{
	name : "Choose Resistance",
	usages : 1,
	recovery : "long rest",
	tooltip : "Choose between acid, cold, fire, lightning, or thunder"
	}],	
	changeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["autognome"].name && CurrentRace.extraLimitedFeatures[0] && CurrentRace.extraLimitedFeatures[0].name == "Built for Success" && CurrentRace.level != 0) {
		CurrentRace.extraLimitedFeatures[0].recovery = "short rest";
		processExtraLimitedFeatures(true, CurrentRace.known, CurrentRace.extraLimitedFeatures);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["autognome"].name && CurrentRace.extraLimitedFeatures[0] && CurrentRace.extraLimitedFeatures[0].name == "Built for Success") {
			CurrentRace.extraLimitedFeatures[0].recovery = "long rest";
			processExtraLimitedFeatures(true, CurrentRace.known, CurrentRace.extraLimitedFeatures);
	}}
};
/* Sturdy Design
Prerequisite: Autognome
Your creator made you from an atypical material, or included protective magic that has enhanced your ability to resist damage. You gain the following benefits:
• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
• You regain all expended uses of your 'Built for Success' feature when you finish a short rest.
• Enhanced Armored Casing. Your body has been reinforced and enchanted with magic, granting you greater resistance to attacks and the elements. Your armor class increases by 1 and any critical hit against you becomes a normal hit. You have resistance to one of the following damage types of your choice: acid, cold, fire, lightning, or thunder. You can change the damage type when you finish a long rest.
• Specialized Integration. Choose one tool you're proficient with. This tool is integrated into your body, and you double your proficiency bonus for any ability checks you make with it. You must have your hands free to use this integrated tool. */

// Bird [aarakocra|aven|kenku|owlfolk]
FeatsList["hawkeyed accuracy"] = { 
	name : "Hawkeyed Accuracy",
	source : [["RCF"]],
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
• Increase your Dexterity or Wisdom score by 1, to a maximum of 20.
• You have advantage on Wisdom (Perception) checks that rely on sight.
• Whenever you have advantage on a ranged attack roll using Dexterity or Wisdom, you can reroll one of the dice once.
*/

// Bugbear
FeatsList["brutish force"] = { // Bugbear
	name : "Brutish Force",
	source : [["RCF"]],
	prerequisite : "Being a Bugbear",
	prereqeval : function(v) { return CurrentRace.known.indexOf('bugbear') !== -1; },
	description : "My weapon attacks score a critical hit on a roll of 19 or 20. Proficiency bonus times per long rest, I may choose to make a melee weapon attack with advantage. If the attack hits, I add an additional roll of one of the weapon's damage dice. If I land a critical hit, I regain one use of this feature. [+1 to one]",
	descriptionFull : "Your strength on the battlefield is unmatched in its primal ferocity. You gain the following benefits:\n \u2022 Your weapon attacks score a critical hit on a roll of 19 or 20.\n \u2022 When you make a melee weapon attack against a creature, you may choose to do so with advantage. If the attack hits, you roll one of the weapon's damage dice an additional time and add it as extra damage. You can use this ability a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. If you land a critical hit, you regain one use of this feature.",
	extraLimitedFeatures : [{
		name : "Brutish Force (Attack w/ advantage)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	calcChanges : {
		atkAdd : [
			function (fields, v) { if (!v.isSpell && !v.CritChance) { fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; v.CritChance = 19; }; },
			"My weapon attacks score a critical on a to hit roll of both 19 and 20.", 19 ]}
};
/* Brutish Force
Prerequisite: Bugbear
Your strength on the battlefield is unmatched in its primal ferocity. You gain the following benefits:
• Your weapon attacks score a critical hit on a roll of 19 or 20.
• When you make a melee weapon attack against a creature, you may choose to do so with advantage. If the attack hits, you roll one of the weapon's damage dice an additional time and add it as extra damage. You can use this ability a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. If you land a critical hit, you regain one use of this feature. */
FeatsList["formidable smile"] = { // Bugbear
	name : "Formidable Smile",
	source : [["RCF"]],
	prerequisite : "Being a Bugbear",
	prereqeval : function(v) { return CurrentRace.known.indexOf('bugbear') !== -1; },
	description : "While not wearing heavy armor or using a shield, I gain +1 AC. I gain expertise with Intimidation, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft I can see and that can see and hear me must make its Insight vs. my Intimidation or be frightened until end of my next turn. [+1 Strength, Dexterity, Constitution, or Charisma]",
	descriptionFull : "Neither bugs nor bears, covered in coarse hair with wedge-shaped ears and pointed teeth, bugbears feature in the nightmare tales of many races. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.\n \u2022 As long as you are not wearing heavy armor or using a shield, you gain a +1 bonus to AC.\n \u2022 You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Attack action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Intimidation) check contested by the target's Wisdom (Insight) check. If your check succeeds, the target is frightened until the end of your next turn. If your check fails, the target can't be frightened by you in this way for 1 hour.",
	scorestxt : "+1 Strength, Dexterity, Constitution, or Charisma",
	skills : [["Intimidation", "increment"]],
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm not wearing heavy armor and not using a shield.",
		stopeval : function (v) { return v.heavyArmor || v.usingShield; }
	}
};
/* Formidable Smile
Prerequisite: Bugbear
Neither bugs nor bears, covered in coarse hair with wedge-shaped ears and pointed teeth, bugbears feature in the nightmare tales of many races. You gain the following benefits:
• Increase your Strength, Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.
• As long as you are not wearing heavy armor or using a shield, you gain a +1 bonus to AC.
• You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.
• When you take the Attack action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Intimidation) check contested by the target's Wisdom (Insight) check. If your check succeeds, the target is frightened until the end of your next turn. If your check fails, the target can't be frightened by you in this way for 1 hour. */
FeatsList["quiet and deadly skulker"] = { // Bugbear
	name : "Quiet and Deadly Skulker",
	source : [["RCF"]],
	prerequisite : "Being a Bugbear",
	prereqeval : function(v) { return CurrentRace.known.indexOf('bugbear') !== -1; },
	description : "I gain expertise in Stealth. If a creature can't see me, I can add one of the weapon's damage dice. When I hit with an attack of opportunity using Strength, I can make the target succeed on a Strength saving throw (DC 8 + my prof bonus + my Strength mod) or be knocked prone. [+1 Strength or Dexterity]",
	descriptionFull : "With roots in the Feywild, early bugbears resided in hidden places, in hard-to-reach and shadowed spaces. Long ago and from out of the corner of your eye, they came to the Material Plane. Centuries later, they still bear a fey gift for lurking just out of sight. Despite their formidable build, bugbears are quiet and deadly skulkers. You gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.\n \u2022 You gain expertise with Stealth, which means your proficiency bonus is doubled for any ability check you make with it.\n \u2022 Unseen Advantage: If you have advantage on a weapon attack roll against a creature that can't see you, you can roll one of the weapon's damage dice one additional time and add it to the damage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 Unexpected Aggression: When you hit with an opportunity attack using Strength, you can attempt to knock the target down. The target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	scorestxt : "+1 Strength or Dexterity",
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
FeatsList["swift and ruthless violence"] = { // Bugbear
	name : "Swift and Ruthless Violence",
	source : [["RCF"]],
	prerequisite : "Being a Bugbear",
	prereqeval : function(v) { return CurrentRace.known.indexOf('bugbear') !== -1; },
	description : "Prof/LR I can make a bonus action melee attack, gain THP equal to the damage dealt when I reduce a creature to zero hp, and double my speed [+1 Strength or Dexterity]",
	descriptionFull : "Bugbears are capable of bouts of incredible ferocity, using their long-limbed muscular bodies to exact swift and ruthless violence. You gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.\n \u2022 You can make one melee weapon attack as a bonus action. You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.\n \u2022 On your turn, when you reduce a creature to 0 hit points, you can gain temporary hit points equal to the damage roll. You can use this ability a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.\n \u2022 When you move on your turn in combat, you can double your speed until the end of the turn. You can use this ability a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.",
	scorestxt : "+1 Strength or Dexterity",
	action : [["bonus action", "One melee weapon attack"]],
	extraLimitedFeatures : [{
		name : "Bonus Action Attack",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Temp HP (Reduce creature to zero)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Doubled Speed",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
};
/* Swift and Ruthless Violence
Prerequisites: Bugbear
Bugbears are capable of bouts of incredible ferocity, using their long-limbed muscular bodies to exact swift and ruthless violence. You gain the following benefits:
• Increase your Strength or Constitution score by 1, to a maximum of 20.
• You can make one melee weapon attack as a bonus action. You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.
• On your turn, when you reduce a creature to 0 hit points, you can gain temporary hit points equal to the damage roll. You can use this ability a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.
• When you move on your turn in combat, you can double your speed until the end of the turn. You can use this ability a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn. */

// Centaur
FeatsList["centaur orcish heritage"] = { // Centaur
	name : "Centaur Orcish Heritage",
	source : [["RCF"]],
	prerequisite : "Being a Centaur",
	prereqeval : function(v) { return CurrentRace.known.indexOf('centaur') !== -1; },
	description : "I have darkvision out to a range of 60 feet. My melee weapon attacks roll 1 additional dice on a critical hit. [+1 Str or Con]",
	vision : [["Darkvision", 60]],
	scorestxt : "+1 Strength or Constitution",
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
Prerequisite: Centaur
Through a twist of fate, an ancestor's legacy, or by some other means, you might not look like other centaurs. Your orcish heritage is plain for all to see. Rather than having the physical characteristics described in the usual centaur description, you may choose any of the following features: grayish pigmentation, sloping forehead, jutting jaws, or prominent teeth. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Darkvision. Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
• Savage Attacks. When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.
*/
FeatsList["dexterous gait"] = { // Centaur
	name : "Dexterous Gait",
	source : [["RCF"]],
	prerequisite : "Being a Centaur",
	prereqeval : function(v) { return CurrentRace.known.indexOf('centaur') !== -1; },
	descriptionFull : "Centaurs gallop throughout the multiverse and trace their origins to many different realms. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 As long as you are not wearing heavy armor or using a shield, you gain a +1 bonus to Armor Class\n \u2022 Your hooves have the finesse property.\n \u2022 As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of your next turn.",
	description : "My hooves have the finesse trait. In addition, I gain +1 AC while not wearing heavy armor or using a shield. As a bonus action, I can make a DC 15 Dexterity (Acrobatics) check to have difficult terrain not cost me extra movement until end of my next turn. [+1 Dexterity]",
	scorestxt : "+1 Dexterity",
	scores : [0, 1, 0, 0, 0, 0],
	action : [["bonus action", " (terrain)"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'unarmed strike' && fields.Proficiency) {
					if (!/finesse/i.test(fields.Description)) fields.Description = 'Finesse, ' + fields.Description.substr(0,1).toLowerCase() + fields.Description.substr(1);
					fields.Mod = v.StrDex;
				};
			},
			"Hooves counts as having finesse for me.",
			1
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm not wearing heavy armor and not using a shield.",
		stopeval : function (v) { return v.heavyArmor || v.usingShield; }
	}
};
/* Dexterous Gait
Prerequisite: Centaur
Centaurs gallop throughout the multiverse and trace their origins to many different realms. You gain the following benefits:
• Increase your Dexterity by 1, to a maximum of 20.
• As long as you are not wearing heavy armor or using a shield, you gain a +1 bonus to Armor Class.
• Your hooves have the finesse property. 
• As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of your next turn. */
FeatsList["favor of the seldarine"] = { // Centaur
	name : "Favor of the Seldarine",
	source : [["RCF"]],
	prerequisite : "Being a Centaur",
	prereqeval : function(v) { return CurrentRace.known.indexOf('centaur') !== -1; },
	description : "I can make my words understood, in a limited manner, by equines. I have Adv. on Charisma checks with them and can cast Animal Friendship on them at will. I have a flying speed equal to my walking speed. To use this speed, I can't be wearing medium or heavy armor.",
	descriptionFull : "A god of the elven pantheon has chosen you to carry a spark of their divine power. You manifest feathered pegasus wings, and gain the following benefits:\n \u2022 Equine Influence. You have the ability to communicate in a limited manner with equines. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them. You learn the Animal Friendship spell and can cast it at will, but you can target only equines with it. Your spellcasting ability for this spell is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n \u2022 Flight. Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
	speed : { fly : { spd : "walk", enc : 0 }},
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Equine Spellcasting)",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : 'atwill',
		times : 1
	},
	spellChanges : {
		"animal friendship" : {
			description : "One equine with Intelligence 3 or less save or charmed for the duration",
			changes : "I can cast Animal Friendship at-will, but only to target equines."
		}
	},
};
/* Favor of the Seldarine
Prerequisite: Centaur
A god of the elven pantheon has chosen you to carry a spark of their divine power. You manifest feathered pegasus wings, and gain the following benefits:
• Equine Influence. You have the ability to communicate in a limited manner with equines. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them. You learn the Animal Friendship spell and can cast it at will, but you can target only equines with it. Your spellcasting ability for this spell is Intelligence, Wisdom, or Charisma (choose when you select this feat).
• Flight. Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.
*/
FeatsList["half-moon adept"] = { // Centaur
	name : "Half-Moon Adept",
	source : [["RCF"]],
	prerequisite : "Being a Centaur",
	prereqeval : function(v) { return CurrentRace.known.indexOf('centaur') !== -1; },
	descriptionFull : "You're expertly proficient with the double-crescent. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 While you are holding a double-crescent with two hands, you gain a + 1 bonus to Armor Class.\n \u2022 A double-crescent has the finesse property when you wield it.",
	description : "My mastery with the double-crescent allows me to treat it as having the finesse trait. In addition, I gain +1 AC while wielding it with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	weaponProfs : [false, false, ["double-crescent"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double-crescent' && fields.Proficiency) {
					if (!/finesse/i.test(fields.Description)) fields.Description = 'Finesse, ' + fields.Description.substr(0,1).toLowerCase() + fields.Description.substr(1);
					fields.Mod = v.StrDex;
				};
			},
			"A Double-crescent counts as having finesse for me.",
			1
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double-crescent in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")) || !CurrentWeapons.known.some(function (n) { return n[0] == "double-crescent" || (WeaponsList[n[0]] && WeaponsList[n[0]].baseWeapon == "double-crescent"); }); }
	}
};
/* Half-Moon Adept
Prerequisite: Centaur
You're expertly proficient with the double-crescent. You gain the following benefits:
• Increase your Strength or Dexterity by 1, to a maximum of 20.
• While you are holding a double-crescent with two hands, you gain a +1 bonus to Armor Class.
• A double-crescent has the finesse property when you wield it. */

// Changeling
FeatsList["changeling instinctive adjustment"] = {
	name : "Changeling Instinctive Adjustment",
	source : [["RCF"]],
	prerequisite : "Being a Changeling",
	prereqeval : function() {return CurrentRace.known.indexOf('changeling') !== -1;},
	descriptionFull : "The instinctive ability of changelings to adjust their body on the spur of the moment gives them uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:\n \u2022 Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.",
	description : "Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, Wisdom, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Dexterity, Intelligence, Wisdom, or Charisma"
};
/* Changeling Instinctive Adjustment
Prerequisite: Changeling
The instinctive ability of changelings to adjust their body on the spur of the moment gives them uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:
• Increase your Dexterity, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once. */
FeatsList["more than skin deep"] = {
    name : "More Than Skin Deep",
    source : [["RCF"]],
    prerequisite : "Changeling",
    prereqeval : function() {return CurrentRace.known.indexOf('changeling') !== -1;},
    scores : [0, 0, 1, 0, 0, 0],
    scorestxt : "+1 Constitution",
    descriptionFull : "Your ability to shapechange is more than skin deep. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 When you use your Shapechanging trait, you can choose one of the following benefits, which lasts until you use your Shapechanging trait again. Some of these benefits require specific physical features, such as gills or claws, that can be seen by observers.\n \u2022 Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.\n \u2022 Darkvision. You adapt your eyes and gain darkvision with a range of 60 feet.\n \u2022 Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage (your choice).",
    description : "I gain benefits from my Shapechanging trait which last until I use the Shapechanging trait again. These benefits are detailed on the Notes page. [+1 Constitution]",
    toNotesPage : [{
        name : "Shapechanging Benefits",
        source : [["RCF"]],
        note : [
            "Aquatic Adaption. I can breathe underwater and gain a swimming speed equal to my walking speed",
            "Darkvision. I gain darkvision with a range of 60 feet",
            "Natural Weapons. I am proficient with unarmed strikes. My unarmed strikes deal 1d6 bludgeoning/piercing/slashing"
        ]
    }]
};
/* Changeling Metamorphosis
Prerequisite: Changeling
Your ability to shapechange is more than skin deep. You gain the following benefits:
• Increase your Constitution score by 1, to a maximum of 20. 
• When you use your Shapechanging trait, you can choose one of the following benefits, which lasts until you use your Shapechanging trait again. Some of these benefits require specific physical features, such as gills or claws, that can be seen by observers.
	> Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.
	> Darkvision. You adapt your eyes and gain darkvision with a range of 60 feet.
	> Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. */
FeatsList["morphic body"] = {
	name : "Morphic Body",
	source : [["RCF"]],
	prerequisite : "Being a Changeling",
	prereqeval : function() {return CurrentRace.known.indexOf('changeling') !== -1;},
	descriptionFull : "Your control over your body allows you some control of your internal organs as well as your external appearance. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 You can use your reaction to make yourself resistant to bludgeoning, piercing or slashing damage until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 You can use your reaction to make a critical hit of bludgeoning, piercing or slashing damage against you a normal hit. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a Reaction, I gain resistance to bludgeoning, piercing or slashing damage until the start of my next turn. I can also use my Reaction to make a critical hit dealing bludgeoning, piercing or slashing damage to me a normal hit. I can use each of these Reactions my Prof Bonus per long rest. [+1 Str, Dex, or Con]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
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

// Custom Lineage
FeatsList["likable quality"] = {
	name : "Likable Quality",
	source : [["RCF"]],
	prerequisite : "Being a Custom Lineage",
	prereqeval : function(v) { return CurrentRace.known.indexOf('custom lineage') !== -1; },
	descriptionFull : "You develop your magnetic personality to ease your way through the world. You gain the following benefits:\n \u2022 You gain proficiency in the Deception and Persuasion skills. If you're already proficient in either skill, your proficiency bonus is doubled for any check you make with that skill.",
	description : "I gain expertise with Deception and Persuasion, or proficiency with them if I didn't have that already. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"], ["Persuasion", "increment"]]
};
/* Likable Quality
Prerequisite: Custom Lineage
You develop your magnetic personality to ease your way through the world. You gain the following benefits:
• Increase your Charisma score by 1, to a maximum of 20.
• You gain proficiency in the Deception and Persuasion skills. If you're already proficient in either skill, your proficiency bonus is doubled for any check you make with that skill. */
FeatsList["perseverance"] = {
	name : "Perseverance",
	source : [["RCF"]],
	prerequisite : "Being a Custom Lineage",
	prereqeval : function(v) { return CurrentRace.known.indexOf('custom lineage') !== -1; },
	descriptionFull : "You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest.",
	description : "When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a short rest. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of your choice",
	usages : 1,
	recovery : "short rest",
	additional : "attack/check/save"
};
/* Perseverance
Prerequisite: Custom Lineage
You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest. */
FeatsList["quilled skin"] = {
	name : "Quilled Skin",
	source : [["RCF"]],
	prerequisite : "Being a Custom Lineage",
	prereqeval : function(v) { return CurrentRace.known.indexOf('custom lineage') !== -1; },
	description : "I have quilled skin, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. As a bonus action, I can protrude/retract small quills from my skin. When protruding, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling/are grappling me. [+1 Dex, Con, or Cha]",
	action: ["bonus action", "Quills (protrude/extract)"],
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	addarmor : "Quilled Skin",
	armorOptions : {
		regExpSearch : /^(?=.*quilled).*$/i,
		name : "Quilled Skin",
		source : ["RCF"],
		ac : 13
	},
};
/* Quilled Skin
Prerequisite: Custom Lineage (Hedgehog/Porcupine folk)
The backs of hedges are covered with spiny quills. These quills provide exceptional protection. You gain the following benefits:
• Increase your Dexterity, Constitution or Charisma by 1, to a maximum of 20.
• While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.
• As a bonus action, you can cause your quills to protrude all over your body or cause them to retract. At the start of each of your turns while the quills are out, you deal 1d6 piercing damage to any creature grappling you or any creature grappled by you. */
FeatsList["the way up"] = {
	name : "The Way Up",
	source : [["RCF"]],
	prerequisite : "Being a Custom Lineage",
	prereqeval : function(v) { return CurrentRace.known.indexOf('custom lineage') !== -1; },
	description : "I grow wings, granting a flying speed of 30 ft. I can only fly with these wings while unarmored or wearing light armor. [+1 Dexterity]",
	descriptionFull : "You manifest wings. You gain the following benefits:" + "\n " + "\u2022 Increase your Dexterity score by 1, to a maximum of 20." + "\n " + "\u2022 You gain a flying speed of 30 feet. To use this speed, you can't be wearing medium or heavy armor.",
	scores : [0, 1, 0, 0, 0, 0],
	speed : { fly : { spd : 30, enc : 0 } }
};
/* The Way Up
Prerequisite: Custom Lineage
You manifest wings. You gain the following benefits:
• Increase your Dexterity score by 1, to a maximum of 20.
• You gain a flying speed of 30 feet. To use this speed, you can't be wearing medium or heavy armor. */

// Dhampir
FeatsList["blood is life"] = {  
	name : "Blood is Life",
	source : [["RCF"]],
	prerequisite : "Being a Dhampir",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dhampir') !== -1; },
	descriptionFull : "Every dhampir knows a thirst slaked only by the living. Those who overindulge their thirst risk losing control and forever viewing others as prey. Those who resist might find exceptional ways of controlling their urges or suppress them through constant, molar-grinding restraint. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have advantage on saving throws you make to avoid or end the charmed condition on yourself.\n \u2022 Blood Burst. When you move on your turn in combat, you can double your speed until the end of the turn. You can use this ability a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.\n \u2022 Blood Sense. As an action, you can open your awareness to detect the living. Until the end of your next turn, you know the location of any beast, giant, or humanoid within 60 feet of you that is not behind total cover. You know the type (beast, giant, or humanoid) of any being whose presence you sense, but not its identity. Once you use this ability, you can't do so again until you finish a short or long rest.",
	description : "I have advantage on saving throws to avoid or end the charmed condition on myself. My Prof Bonus per long rest, while moving on my turn, I can double my speed. Once per short rest, I can detect the location of any beast, giant, or humanoid. [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
	savetxt : { adv_vs : ["charmed"] },
	action : [['action', 'Blood Sense']],
	extraLimitedFeatures : [{
		name : "Blood Burst",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	},
	{
		name : "Blood Sense",
		usages : 1,
		recovery : "short rest",
	}],
};
/* Blood is Life
Prerequisite: Dhampir
Every dhampir knows a thirst slaked only by the living. Those who overindulge their thirst risk losing control and forever viewing others as prey. Those who resist might find exceptional ways of controlling their urges or suppress them through constant, molar-grinding restraint. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You have advantage on saving throws you make to avoid or end the charmed condition on yourself.
• Blood Burst. When you move on your turn in combat, you can double your speed until the end of the turn. You can use this ability a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.
• Blood Sense. As an action, you can open your awareness to detect the living. Until the end of your next turn, you know the location of any beast, giant, or humanoid within 60 feet of you that is not behind total cover. You know the type (beast, giant, or humanoid) of any being whose presence you sense, but not its identity. Once you use this ability, you can't do so again until you finish a short or long rest. */
FeatsList["touched by the mists"] = {  
	name : "Touched by the Mists",
	source : [["RCF"]],
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
• Your Vampiric Bite damage die increases to a d6. */

// Dragonborn
FeatsList["tidal hatching"] = {
	name : "Tidal Hatching",
	source : [["RCF"]],
	prerequisite : "Being a Dragonborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dragonborn') !== -1; },
	description : "I have darkvision out to a range of 60 feet. I can breathe air and water, and have a swimming speed equal to my walking speed. [+1 Strength, Dexterity, or Constitution]",
	scorestxt : "+1 Strength, Dexterity, or Constitution;",
	vision : [["Darkvision", 60]],
	speed : {
		swim : { spd : "walk", enc : 0 }
	},
};
/* Tidal Hatching
Prerequisite: Dragonborn
You were raised around water, and its as familiar to you as land. You gain the following benefits:
• Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.
• Darkvision. You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.
• Amphibious. You can breathe air and water, and you have a swimming speed equal to your walking speed. */

// Dwarf
FeatsList["sacred light of dumathoin"] = { // Dwarf (Mark of Warding)
	name : "Sacred Light of Dumathoin",
	source : [["RCF"]],
	prerequisite : "Being a creature with the Dragonmark of Warding",
	prereqeval : function (v) { return (/^(?=.*dragonmark)(?=.*warding).*$/i).test(CurrentRace.known); },
	description : "I can use Int, Wis, or Cha as my spellcasting ability for my 'Wards and Seals' spells, and need only to finish a short rest before I cast them again. When I deal radiant damage, I can reroll 1s, and until my next turn ends, glow bright light 30 ft, dim 30 ft, and deal 1d4 radiant if hit me in melee within 5 ft. [+1 to one]",
	descriptionFull : "You have been chosen by the Keeper of Secrets under the Mountain to be a light amongst the darkness. This blessing by the Silent Keeper gives you the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You can use Intelligence, Wisdom, or Charisma as your spellcasting ability for the spells you cast from your 'Wards and Seals' feature, and you now need only to finish a short rest before you cast them again.\n \u2022 When you deal radiant damage, you can reroll any roll of 1 on the radiant damage dice, but you must use the new roll, even if it is another 1.\n \u2022 Whenever you deal radiant damage, you can cause a luminous glow to wreathe you until the end of your next turn. The glow doesn't harm you or your possessions, and it sheds bright light out to 30 feet and dim light for an additional 30 feet. While the glow is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 radiant damage.",
	scorestxt : "+1 to one ability score of your choice",
};
/* Sacred Light of Dumathoin
Prerequisite: Dwarf (Mark of Warding)
You have been chosen by the Keeper of Secrets under the Mountain to be a light amongst the darkness. This blessing by the Silent Keeper gives you the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You can use Intelligence, Wisdom, or Charisma as your spellcasting ability for the spells you cast from your 'Wards and Seals' feature, and you now need only to finish a short rest before you cast them again.
• When you deal radiant damage, you can reroll any roll of 1 on the radiant damage dice, but you must use the new roll, even if it is another 1.
• Whenever you deal radiant damage, you can cause a luminous glow to wreathe you until the end of your next turn. The glow doesn't harm you or your possessions, and it sheds bright light out to 30 feet and dim light for an additional 30 feet. While the glow is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 radiant damage. */

// Eladrin (Elf)
FeatsList["blink of an eye"] = {
	name : "Blink of an Eye",
	source : [["RCF"]],
	prerequisite : "Being an Eladrin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('eladrin') !== -1; },
	descriptionFull : "Eladrin are elves of the Feywild, a realm of perilous beauty and boundless magic. Using that magic, eladrin can step from one place to another in the blink of an eye. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your 'Fey Step' feature when you finish a short rest.\n \u2022 When you teleport using 'Fey Step', choose one of attack roll, ability check, or saving throw. You have advantage on the next chosen roll you make before the start of your next turn.\n \u2022 As a bonus action, you may choose to expend a use of 'Fey Step' and instead of teleporting, you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet. This lasts for one minute or if you use 'Fey Step' again.",
	description : "I regain 'Fey Step' after a short rest. When I 'Fey Step' teleport, I choose one of attack/ability/save and gain adv on the next chosen roll before the start of my turn. Instead of teleporting, I can expend 'Fey Step' to see in magical and nonmagical darkness out to 60 ft for 1 min or I 'Fey Step' again. [+1 to one]",
	scorestxt : "+1 to one ability score of your choice",
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["multiverse eladrin"].name && CurrentRace.features["fey step"] && CurrentRace.level != 0) {
        CurrentRace.features["fey step"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "fey step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["multiverse eladrin"].name && CurrentRace.features["fey step"]) {
		CurrentRace.features["fey step"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "fey step"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Blink of an Eye
Prerequisite: Eladrin
Eladrin are elves of the Feywild, a realm of perilous beauty and boundless magic. Using that magic, eladrin can step from one place to another in the blink of an eye. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You regain all expended uses of your 'Fey Step' feature when you finish a short rest. 
• When you teleport using 'Fey Step', choose one of attack roll, ability check, or saving throw. You have advantage on the next chosen roll you make before the start of your next turn.
• As a bonus action, you may choose to expend a use of 'Fey Step' and instead of teleporting, you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet. This lasts for one minute or if you use 'Fey Step' again. */

// Fairy
FeatsList["fairly bricky"] = { 
	name : "Fairly Bricky",
	source : [["RCF"]],
	prerequisite : "Being a Fairy",
	prereqeval : function(v) { return CurrentRace.known.indexOf('fairy') !== -1; },
	description : "I do not have disadvantage on attack rolls with weapons with the heavy property. I count as one size larger for my carrying capacity and the weight I can push, drag, or lift, and on ability checks I make to initiate or escape a grapple [+1 Strength]",
	descriptionFull : "Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. You gain the following abilities:\n \u2022 Increase your Strength by 1, to a maximum of 20.\n \u2022 Mighty Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift and on ability checks you make to initiate or escape a grapple.\n \u2022 Small but Capable. You do not have disadvantage on attack rolls with weapons with the heavy property.",
	scores : [1, 0, 0, 0, 0, 0],
	carryingCapacity : 2
};
/* Fairly Bricky
Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. You gain the following abilities:
• Increase your Strength by 1, to a maximum of 20.
• Mighty Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift, and on ability checks you make to initiate or escape a grapple.
• Small but Capable. You do not have disadvantage on attack rolls with weapons with the heavy property.
*/
FeatsList["fairly quicky"] = { 
	name : "Fairly Quicky",
	source : [["RCF"]],
	prerequisite : "Being a Fairy",
	prereqeval : function(v) { return CurrentRace.known.indexOf('fairy') !== -1; },
	description : "+5 ft walking speed. Without squeezing, I can move through and stop in a space large enough for a Tiny creature. Celerity. As a bonus action, I gain +10 ft walking speed and don't provoke opportunity attacks until the end of my turn. [+1 Dexterity]",
	descriptionFull : "Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. You gain the following abilities:\n \u2022 Increase your Dexterity by 1, to a maximum of 20.\n \u2022 Fey Passage. Increase your walking speed by 5 feet. In addition, without squeezing, you can move through and stop in a space large enough for a Tiny creature.\n \u2022 Celerity. As a bonus action, you gain two benefits until the end of the current turn: you don't provoke opportunity attacks, and you increase your walking speed by 10 feet.",
	action : ["bonus action", "Celerity (+10 ft, no opp attack)"],
	speed : { walk : {spd : "+5", enc : "+5" } },
	scores : [0, 1, 0, 0, 0, 0],
};
/* Fairly Quicky
Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. You gain the following abilities:
• Increase your Dexterity by 1, to a maximum of 20.
• Fey Passage. Increase your walking speed by 5 feet. In addition, without squeezing, you can move through and stop in a space large enough for a Tiny creature.
• Celerity. As a bonus action, you gain two benefits until the end of the current turn: you don't provoke opportunity attacks, and you increase your walking speed by 10 feet. 
*/
FeatsList["fairly tricky"] = { 
	name : "Fairly Tricky",
	source : [["RCF"]],
	prerequisite : "Being a Fairy",
	prereqeval : function(v) { return CurrentRace.known.indexOf('fairy') !== -1; },
	description : "+5 ft walking speed. Without squeezing, I can move through and stop in a space large enough for a Tiny creature. Celerity. As a bonus action, I gain +10 ft walking speed and don't provoke opportunity attacks until the end of my turn. [+1 Dexterity]",
	descriptionFull : "Infused with the magic of the Feywild, fairies share a few commonalities with one another but can differ widely in appearance, behavior, and attitude. You gain the following abilities:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 Fairy Flight. You have a flying speed equal to your walking speed and can hover. This flight is magical and does not require the use of your wings (if you have them).\n \u2022 Faerie Magic. When you use your Fairy Magic trait to cast Faerie Fire or Enlarge/Reduce, the spell lasts for the full duration and does not require concentration.\n \u2022 Faerie Tricks. You learn the Disguise Self spell and can cast it at will, without expending a spell slot. When you use this version of Disguise Self, you can seem up to 3 feet shorter or taller. You also learn the Tasha's Hideous Laughter spell. You can cast it without expending a spell slot, and the spell lasts for the full duration and does not require concentration. Once you cast it in this way, you can't cast it in this way again until you finish a long rest. You can also cast it using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "At will",
		spells : ["disguise self"],
		selection : ["disguise self"],
		firstCol : 'atwill'
	}, {
		name : "Once per long rest",
		spells : ["tasha's hideous laughter"],
		selection : ["tasha's hideous laughter"],
		firstCol : 'oncelr'
	}],
	spellChanges : {
	"disguise self" : {
		description : "Alter appearance, up to 3ft shorter/taller; Int(Investigation) check vs. spell DC to determine disguise",
		changes : "Using Faerie Tricks, I can cast Disguise Self at-will to also seem up to 3 feet shorter or taller."
	},
	"tasha's hideous laughter" : {
		duration : "(1 min)",
		changes : "My feat allows me to cast Tasha's Hideous Laughter once per long rest without requiring concentration." },
	},
	extraLimitedFeatures : [{
		name : "Tasha's Hideous Laughter",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 1+"
	}]
};
/* Fairly Tricky
Infused with the magic of the Feywild, fairies share a few commonalities with one another but can differ widely in appearance, behavior, and attitude. You gain the following abilities:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Fairy Flight. You have a flying speed equal to your walking speed and can hover. This flight is magical and does not require the use of your wings (if you have them).
• Faerie Magic. When you use your Fairy Magic trait to cast Faerie Fire or Enlarge/Reduce, the spell lasts for the full duration and does not require concentration.
• Faerie Tricks. You learn the Disguise Self spell and can cast it at will, without expending a spell slot. When you use this version of Disguise Self, you can seem up to 3 feet shorter or taller. You also learn the Tasha's Hideous Laughter spell. You can cast it without expending a spell slot, and the spell lasts for the full duration and does not require concentration. Once you cast it in this way, you can't cast it in this way again until you finish a long rest. You can also cast it using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.
*/

// Firbolg
FeatsList["walker in the woods"] = {  // Firbolg
    name : "Walker in the Woods",
    source : [["RCF"]],
	prerequisite : "Being a Firbolg",
	prereqeval : function(v) { return CurrentRace.known.indexOf('firbolg') !== -1; },
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
• You learn the Speak with Plants and Plant Growth spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat. */

// Genasi (Air)
FeatsList["storm's voice"] = { 
	name : "Storm's Voice",
	source : [["RCF"]],
	prerequisite : "Being an Air Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('air') !== -1",
	description : "When I cast a lightning damage spell, I can reroll any 1 on lightning damage dice once. I then sheathe myself in a storm cloud until my next turn ends. The storm sheds bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 lightning damage. [+1 Int, Wis, or Cha]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma"	
};
/* Storm's Voice
Prerequisites: being a Genasi (Air)
You learn to call on primal energies to serve your commands. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• When you roll lightning damage for a spell you cast, you can reroll any roll of 1 on the lightning damage dice, but you must use the new roll, even if it is another 1.
• Whenever you cast a spell that deals lightning damage, you can cause a storm cloud to wreathe you until the end of your next turn. The storm cloud doesn't harm you or your possessions, and it sheds bright light out to 30 feet and dim light for an additional 30 feet. While the storm cloud is present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 lightning damage. */
FeatsList["vizier heritage"] = { 
	name : "Vizier Heritage",
	source : [["RCF"]],
	prerequisite : "Being an Air Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('air') !== -1",
	description : "I learn Gust, Jump as a Bonus action at-will on myself. If I haven't moved, bonus action move speed x 2 to make full distance high or long jump. Move 0 when land, must full turn no move before doing again. 1/SR, Whirlwind Form for 10 min = 30 ft Fly, bonus Dash, don't provoke opportunity attacks. [+1 Int, Wis, or Cha]",
	descriptionFull : "You manifest more of the magical power of your Vizier (noble djinn) heritage. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the Gust cantrip. You learn the Jump spell, which you can cast as a bonus action at will, without expending a spell slot, but can target only yourself when you do so. The spells' spellcasting ability is the ability increased by this feat.\n \u2022 Get Air. If you haven't moved during this turn, as a bonus action, you can double your move speed until the end of the turn. The extra movement can only be used as as part of a long jump or high jump, neither of which requires a running start to move your full jump distance. After you land, your speed is 0 until the end of the current turn, and you can't use this feature again until you move 0 feet on one of your turns.\n \u2022 Whirlwind Form. As an action, you can transform the lower half of your body into a spiraling whirlwind, allowing you to float through the air. While transformed, you have a flying speed of 30 feet and as a bonus action on each of your turns until the whirlwind ends, you can take the Dash action. Movement while in whirlwind form does not provoke attacks of opportunity. You can maintain this form for up to 10 minutes. Once you use this ability, you cannot use it again until you finish a short or long rest.",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	action : [["action", "Whirlwind Form"], ["bonus action", "Catch Air"], ["bonus action", "Jump spell (self)"]],
	usages : 1,
	recovery : "short rest",
	additional : "Whirlwind",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Vizier Heritage",
		spells : ["gust"],
		selection : ["gust"],
		firstCol : "atwill"
	}, {
		name : "Vizier Heritage",
		spells : ["jump"],
		selection : ["jump"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"jump" : {
			time : "1 bns",
			range : "Self",
			description : "My jump distance is tripled for the duration",
			changes : "The casting time is only a bonus action instead of an action and it can only affect myself."
		}
	}
};
/* Vizier Heritage
Prerequisites: being a Genasi (Air)
You manifest more of the magical power of your Vizier (Noble Djinn) heritage. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Gust cantrip. You learn the Jump spell, which you can cast as a bonus action at will, without expending a spell slot, but can target only yourself when you do so. The spells' spellcasting ability is the ability increased by this feat.
• Get Air. If you haven't moved during this turn, as a bonus action, you can double your move speed until the end of the turn. The extra movement can only be used as as part of a long jump or high jump, neither of which requires a running start to move your full jump distance. After you land, your speed is 0 until the end of the current turn, and you can't use this feature again until you move 0 feet on one of your turns.
• Whirlwind Form. As an action, you can transform the lower half of your body into a spiraling whirlwind, allowing you to float through the air. While transformed, you have a flying speed of 30 feet and as a bonus action on each of your turns until the whirlwind ends, you can take the Dash action. Movement while in whirlwind form does not provoke attacks of opportunity. You can maintain this form for up to 10 minutes. Once you use this ability, you cannot use it again until you finish a short or long rest. */

// Genasi (Earth)
FeatsList["pasha heritage"] = {
	name : "Pasha Heritage",
	source : [["RCF"]],
	prerequisite : "Being an Earth Genasi",
	prereqeval : "CurrentRace.known.indexOf('earth genasi') !== -1",
	description : "I learn the Move Earth cantrip. I learn Earth Tremor, which I can cast it without using a spell slot once per long rest, and by using spell slots as normal. Con is my spellcasting ability for these. I gain heritage armor, giving me an AC of 13 + my Con mod + shield while I'm not wearing armor. [+1 Con, Int, Wis, or Cha]",
	scorestxt : "+1 Constitution, Intelligence, Wisdom, or Charisma",
	armorOptions : {
		regExpSearch : /^(?=.*heritage)(?=.*(natural|hide|skin)).*$/i,
		name : "Heritage Natural Armor",
		source : ["RCF"],
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
	source : [["RCF"]],
	prerequisite : "Being a Water Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('water') !== -1",
	description : "I can cast Detect Evil and Good at will. I have resistance to lightning damage. Once per rest, I can transform the lower half of my body into a waterspout for up to 10 minutes. I gain flying speed of 30 ft and double swim speed. [+1 Con, Int, Wis, or Cha]",
	descriptionFull : "You manifest more of the magical power of your Shahzada (noble marid) heritage. You gain the following benefits:\n \u2022 Increase your Constitution, Intelligence, Wisdom or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the detect evil and good spell and can cast it at will, without expending a spell slot.\n \u2022 You have resistance to lightning damage.\n \u2022 As an action, you can transform the lower half of your body into a spiraling waterspout, allowing you to float through the air and dart through water. While transformed, your swim speed is doubled and you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you cannot use it again until you finish a short or long rest.",
	scorestxt : "+1 Constitution, Intelligence, Wisdom, or Charisma",
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

// Giff
FeatsList["g is for giff, and for gun"] = {
	name : "G is for Giff, and for Gun",
	source : [["RCF"]],
	prerequisite : "Being a Giff",
	prereqeval : function(v) { return CurrentRace.known.indexOf('giff') !== -1; },
	descriptionFull : "Your mystical connection to firearms that traces back to the gods of the giff, who delighted in such weapons, is stronger in you than in most others. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You regain all expended uses of the Astral Spark feature when you finish a short rest.\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.\n \u2022 You can use a 1-handed firearm as a club and a 2-handed firearm as a greatclub in melee combat. Both weapons gain the finesse property.",
	description: "I don't suffer disadvantage on ranged attack rolls for being within 5 ft of a hostile creature. I can use a 1-h firearm as a club and a 2-h firearm as a greatclub in melee combat. Both weapons gain the finesse property. I regain all expended uses of the Astral Spark feature when I finish a short rest. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	weaponOptions : {
		regExpSearch : /^(?=.*firearm|gun|boomstick)(?=.*butt|grip)(?=.*end|stock).*$/i,
		baseWeapon : "club",
		name : "Firearm butt end",
		source : [["RCF"]],
		description : "Finesse, two-handed (1d8)",
	},
	weaponsAdd : ["Firearm Butt End"],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["giff"].name && CurrentRace.features["astral spark"] && CurrentRace.level != 0) {
        CurrentRace.features["astral spark"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "astral spark"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["giff"].name && CurrentRace.features["astral spark"]) {
		CurrentRace.features["astral spark"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "astral spark"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* G is for Giff, and for Gun
Prerequisite: Giff
Your mystical connection to firearms that traces back to the gods of the giff, who delighted in such weapons, is stronger in you than in most others. You gain the following benefits:
• Increase your Dexterity score by 1, to a maximum of 20.
• You regain all expended uses of the 'Astral Spark' feature when you finish a short rest.
• Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.
• You can use a one-handed firearm as a club and a two-handed firearm as a greatclub in melee combat. Both weapons gain the finesse property. */
FeatsList["impressive size and unforgettable appearance"] = {
	name : "Impressive Size and Unforgettable Appearance",
	source : [["RCF"]],
	prerequisite : "Being a Giff",
	prereqeval : function(v) { return CurrentRace.known.indexOf('giff') !== -1; },
	description : "Once per turn, I can reroll a 1 on a damage die for a melee attack. If I move at least 20 ft in a straight line and end within 5 feet of a Large or smaller creature, I can use my Bonus action to make creature pass a DC 14 STR save or take 2d6 bludgeoning damage and be knocked prone. [+1 Strength or Constitution]",
	descriptionFull : "Your Hippopotamidae heritage shows true. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Damage Dealer. You are naturally adept at damaging things. When you roll a 1 on a damage die for a melee attack, you can reroll the die and use the new roll. You can do so no more than once per turn.\n \u2022 Headfirst Charge. A charging giff can try to knock a creature over; if you move at least 20 feet in a straight line and end within 5 feet of a Large or smaller creature, you can use your Bonus action to force that creature to succeed on a Strength saving throw or take 2d6 bludgeoning damage and be knocked prone.",
	scorestxt : "+1 Strength or Constitution",
	action : ["bonus action", "Headfirst Charge"]
};
/* Impressive Size and Unforgettable Appearance
Prerequisite: Giff
Your Hippopotamidae heritage shows true. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Damage Dealer. You are naturally adept at damaging things. When you roll a 1 on a damage die for a melee attack, you can reroll the die and use the new roll. You can do so no more than once per turn.
• Headfirst Charge. A charging giff can try to knock a creature over; if you move at least 20 feet in a straight line and end within 5 feet of a Large or smaller creature, you can use your Bonus action to force that creature to succeed on a Strength saving throw or take 2d6 bludgeoning damage and be knocked prone. */
FeatsList["sparks of their own"] = {
	name : "Sparks of Their Own",
	source : [["RCF"]],
	prerequisite : "Being a Giff",
	prereqeval : function(v) { return CurrentRace.known.indexOf('giff') !== -1; },
	description : "I regain 1 expended usage of 'Astral Spark' when I roll a natural 20 or deal a killing blow to a creature of significant threat (DM's discretion).\n \u2022 My weapon attacks score a critical hit on a roll of 19 or 20. [+1 to one]",
	descriptionFull : "Although they don't realize it, giff remain connected to their creator gods, who have just enough divine spark left in them to imbue giff with sparks of their own, which giff have learned to channel through their weapons. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You regain 1 expended usage of your 'Astral Spark' trait each time you roll a 20 on the d20 roll for an attack, or deal a killing blow to a creature of significant threat (DM's discretion).\n \u2022 Your weapon attacks score a critical hit on a roll of 19 or 20.",
	scorestxt : "+1 to one ability score of my choice",
	calcChanges : {
		atkAdd : [
			function (fields, v) { if (!v.isSpell && !v.CritChance) { fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; v.CritChance = 19; }; },
			"My weapon attacks score a critical on a to hit roll of both 19 and 20.", 19 ]}
};
/* Sparks of Their Own
Prerequisite: Giff
Although they don't realize it, giff remain connected to their creator gods, who have just enough divine spark left in them to imbue giff with sparks of their own, which giff have learned to channel through their weapons. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You regain 1 expended usage of your 'Astral Spark' trait each time you roll a 20 on the d20 roll for an attack, or deal a killing blow to a creature of significant threat (DM's discretion).
• Your weapon attacks score a critical hit on a roll of 19 or 20. */

// Githyanki
FeatsList["dark silver savagery"] = { 
	name : "Dark Silver Savagery",
	source : [["RCF"]],
	prerequisite : "Being a Githyanki",
	prereqeval : function(v) { return CurrentRace.known.indexOf('githyanki') !== -1; },
	description : "I have darkvision out to a range of 60 feet. My melee weapon attacks roll 1 additional dice on a critical hit. [+1 Str or Con]",
	vision : [["Darkvision", 60]],
	scorestxt : "+1 Strength or Constitution",
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
/* Dark Silver Savagery
Prerequisite: Githyanki
[Insert new description here related to Lich Queen] You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Darkvision. Thanks to [something related to Lich Queen], you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
• Savage Attacks. When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit. */
FeatsList["lich queen's notice"] = { 
	name : "Lich Queen's Notice",
	source : [["RCF"]],
	prerequisite : "Being a Githyanki",
	prereqeval : function(v) { return CurrentRace.known.indexOf('githyanki') !== -1; },
	description : "I no longer need to sleep and can't be forced to sleep by any means. To gain the benefits of a long rest, I can spend all 8 hours doing light activity. My melee weapon attacks roll 1 additional dice on a critical hit.",
	savetxt : { text : ["Nothing can force me to sleep"] },
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
/* Lich Queen's Notice
Prerequisite: Githyanki
You were noticed by the dread lich-queen, Vlaakith, even if momentarily. You gain the following benefits:
• Restless Nature. You no longer need to sleep and can't be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch.
• Restless Ferocity. When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit. */
FeatsList["lich queen's favor"] = {
	name : "Lich Queen's Favor",
	source : [["RCF"]],
	prerequisite : "4th-level, The Lich Queen's Notice feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("the lich queen's notice") !== -1; },
	description : "If I score a critical hit or reduce a creature to 0 hit points with a melee weapon in my turn, I can make one melee weapon attack as a bonus action. With a heavy melee weapon, I can choose to take a -5 penalty on the attack roll for +10 on the attack's damage. [+1 to one ability score]",
	descriptionFull : "You were noticed by the dread lich-queen, Vlaakith, and gained her favor, even if momentarily. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.\n \u2022 Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
	action : ["bonus action", "Restless Attack (after crit or take-down)"],
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/heavy/i).test(fields.Description) && (/\blqf\b|lich.{0,3}queen's.{0,3}favor/i).test(v.WeaponText)) {
					output.extraDmg += 10;
					output.extraHit -= 5;
				};
			},
			"If I include the words 'Lich Queen's Favor', or just 'LQF' in a heavy melee weapon's name or description, the calculation will put a -5 penalty on the attack's To Hit and +10 on its Damage."
		]
	}
};
/* Lich Queen's Favor
Prerequisites: 4th level, The Lich Queen's Notice (feat)
You were noticed by the dread lich-queen, Vlaakith, and gained her favor, even if momentarily. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• Restless Attacks. Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage. On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action. */
FeatsList["psi-kinetic"] = {
	name : "Psi-kinetic",
	source : [["RCF"]],
	prerequisite : "Being a Githyanki",
	prereqeval : function(v) { return CurrentRace.known.indexOf('githyanki') !== -1; },
	descriptionFull : "Your Githyanki psionics have developed the ability to move something by thinking about it without the application of physical force. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Psi-kinetic Reprisal. When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate psychokinetic energy. The creature that dealt damage to you must make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature takes 2d8 force damage and is pushed up to 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 Psi-kinesis. As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save.",
	description : "As a reaction when I take damage from a creature that is within 10 ft, I can have it take 2d8 force damage and push it up to 10 ft away. Str save for half damage and no push. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str save or be moved 5 ft from or towards me. [+1 Int, Wis or Cha]",
	action : [["reaction", " Reprisal"], ["bonus action", " shove"]],
	extraLimitedFeatures : [{
		name : "Psi-kinetic Reprisal",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "As a reaction when I take damage from a creature that is within 10 ft, I can have it take 2d8 force damage and push it up to 10 ft away. Str save for half damage and no push. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str save or be moved 5 ft from or towards me. [+1 Int]",
		spellcastingAbility : 4,
		weaponsAdd : ["Psi-kinetic Shove"],
		weaponOptions : {
		regExpSearch : /psi-kinetic shove/i,
		name : "Psi-kinetic Shove",
		source: [["RCF"]],
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
		description : "As a reaction when I take damage from a creature that is within 10 ft, I can have it take 2d8 force damage and push it up to 10 ft away. Str save for half damage and no push. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str save or be moved 5 ft from or towards me. [+1 Wis]",
		spellcastingAbility : 5,
		weaponsAdd : ["Psi-kinetic Shove"],
		weaponOptions : {
		regExpSearch : /psi-kinetic shove/i,
		name : "Psi-kinetic Shove",
		source: [["RCF"]],
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
		description : "As a reaction when I take damage from a creature that is within 10 ft, I can have it take 2d8 force damage and push it up to 10 ft away. Str save for half damage and no push. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str save or be moved 5 ft from or towards me. [+1 Cha]",
		spellcastingAbility : 6,
		weaponsAdd : ["Psi-kinetic Shove"],
		weaponOptions : {
		regExpSearch : /psi-kinetic shove/i,
		name : "Psi-kinetic Shove",
		source: [["RCF"]],
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
/* Psi-kinetic
Prerequisite: Githyanki
Your Githyanki psionics have developed the ability to move something by thinking about it without the application of physical force. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Psi-kinetic Reprisal. When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature takes 2d8 force damage and is pushed up to 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
• Psi-kinesis. As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save. */

// Goblin
FeatsList["favor of the queen of air and darkness"] = { // Goblin
	name: "Favor of the Queen of Air and Darkness",
	source: [["RCF"]],
	prerequisite : "Being a Goblin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('goblin') !== -1; },
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
• You can cast the Invisibility spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them. */
FeatsList["goblin's furious accuracy"] = { // Multiverse Goblin
	name : "Goblin's Furious Accuracy",
	source : [["RCF"]],
	prerequisite : "Being a Goblin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('goblin') !== -1; },
	description : "I regain all expended uses of my Fury of the Small feature when I finish a short rest. Whenever I have advantage on an attack roll that uses Dexterity, I can reroll one of the dice once. [+1 Dexterity]",
	descriptionFull : "Goblins thrive in dangerous domains thanks to a special boon—a supernatural knack for finding the weak spots in foes larger than themselves. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your Fury of the Small feature when you finish a short rest.\n \u2022 Whenever you have advantage on an attack roll using Dexterity, you can reroll one of the dice once.",
	scorestxt : "+1 Dexterity",
	scores : [0, 1, 0, 0, 0, 0],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["multiverse goblin"].name && CurrentRace.features["fury of the small"] && CurrentRace.level != 0) {
        CurrentRace.features["fury of the small"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "fury of the small"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["multiverse goblin"].name && CurrentRace.features["fury of the small"]) {
		CurrentRace.features["fury of the small"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "fury of the small"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Goblin's Furious Accuracy
Prerequisite: Multiverse Goblin
Goblins thrive in dangerous domains thanks to a supernatural knack for finding the weak spots in foes larger than themselves. You gain the following benefits:
• Increase your Dexterity by 1, to a maximum of 20.
• You regain all expended uses of your Fury of the Small feature when you finish a short rest.
• Whenever you have advantage on an attack roll using Dexterity, you can reroll one of the dice once. */
FeatsList["trickster spirit's legacy"] = { // Goblin
	name : "Trickster Spirit's Legacy",
	source : [["RCF"]],
	prerequisite : "Being a Goblin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('goblin') !== -1; },
	description : "I have advantage to interact socially with goblinoids. Reversal of Fortune: When another creature deals damage to me, I may use my reaction to spend one hit die and reduce the damage by the hit die + twice my Prof. bonus. If this reduces the damage taken to zero, you regain the hit die and hp equal to the hit die roll.",
	descriptionFull : "At one point you or one of your ancestors was possessed by the spirit of a Nilbog. Though it has since passed on to another host, the legacy of that possession left its mark on you. You gain the following benefits:\n \u2022 You have learned the best ways to manipulate others of your kind. You have advantage on any ability check to interact socially with goblinoids.\n \u2022 Reversal of Fortune. In response to another creature dealing damage to you, you may use your reaction to spend one hit die and reduce the damage taken by the amount rolled plus twice your proficiency bonus. If this reduces the damage taken to zero, you regain the spent hit die and a number of hit points equal to the hit die roll.",
	action : ["reaction", "Reversal of Fortune (after dealt damage)"],
};
/* Trickster Spirit's Legacy
Prerequisite: Goblin
At one point you or one of your ancestors was possessed by the spirit of a Nilbog. Though it has since passed on to another host, the legacy of that possession left its mark on you. You gain the following benefits:
• You have learned the best ways to manipulate others of your kind. You have advantage on any ability check to interact socially with goblinoids.
• Reversal of Fortune. In response to another creature dealing damage to you, you may use your reaction to spend one hit die and reduce the damage taken by the amount rolled plus twice your proficiency bonus. If this reduces the damage taken to zero, you regain the spent hit die and a number of hit points equal to the hit die roll. */

// Goliath
FeatsList["carved from mountain stone"] = { 
	name : "Carved from Mountain Stone",
	source : [["RCF"]],
	prerequisite : "Being a Goliath",
	prereqeval : function(v) { return CurrentRace.known.indexOf('goliath') !== -1; },	
	description : "I have stone-hard fists (1d6 (versatile 1d8) bludgeoning damage) and stone-hard skin (AC of 13 + Dexterity modifier + shield when I'm not wearing armor). When I use Stone's Endurance, I gain my Constitution modifier bonus AC until the end of my next turn. [+1 Strength or Constitution]",
	descriptionFull : "Distantly related to giants and infused with the supernatural essence of their ancestors' mountainous home, their bodies look as if they are carved from mountain stone and give them great physical power. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 You have stone-hard fists that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike. If you strike with two free hands, the d6 becomes a d8.\n \u2022 You gain natural armor. When you aren't wearing armor, your stone-hard skin gives you a base AC is 13 + Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.\n \u2022 Immediately after you use Stone's Endurance, you gain a bonus to AC equal to your Constitution modifier (minimum of +1) until the end of your next turn.",
	scorestxt : "+1 Strength or Constitution",
	weaponsAdd : ["Stone-hard Fists"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(stone-hard))(?=.*fists).*$/i,
		name : "Stone-hard Fists",
		source : [["RCF"]],
		damage : [1, 6, "bludgeoning"],
		description : "Versatile (d8)"
	},
	addarmor : "Stone-hard Skin",
	armorOptions : {
		regExpSearch : /^(?=.*stone-hard).*$/i,
		name : "Stone-hard Skin",
		source : ["RCF"],
		ac : 13
	},
};
/* Carved from Mountain Stone
Prerequisite: Goliath
Distantly related to giants and infused with the supernatural essence of their ancestors' mountainous home, their bodies look as if they are carved from mountain stone and give them great physical power. You gain the following benefits:
• Increase your Strength or Constitution score by 1, to a maximum of 20.
• You have stone-hard fists that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike. If you strike with two free hands, the d6 becomes a d8.
• You gain natural armor. When you aren't wearing armor, your stone-hard skin gives you a base AC is 13 + Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.
• Immediately after you use Stone's Endurance, you gain a bonus to AC equal to your Constitution modifier (minimum of +1) until the end of your next turn.
 */
FeatsList["peak to peak"] = { 
	name : "Peak to Peak",
	source : [["RCF"]],
	prerequisite : "Being a Goliath",
	prereqeval : function(v) { return CurrentRace.known.indexOf('goliath') !== -1; },	
	description : "I regain Stone's Endurance with a short rest. After Stone's Endurance, up to 2 creatures within 5 ft of me make a Str save or pushed my Con mod (min 1) + 5 ft away; It can choose to fail. I learn Mold Earth, and Prof/LR, as a bonus action, make difficult terrain up to 30 ft around me for one minute. [+1 to one]",
	descriptionFull : "Goliaths wander a bleak realm of rock, wind, and cold. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your Stone's Endurance feature when you finish a short rest.\n \u2022 Avalanche Shout. Immediately after you use Stone's Endurance, you can target up to two creatures within 5 feet of you that you can see. Each target must succeed on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Constitution modifier, or be pushed a number of feet away from you equal to 5 + your Constitution modifier (minimum of +1). A target can choose to fail this save.\n \u2022 Realm of Rock. As a bonus action, you may cause the ground within up to 30 feet of you to become difficult terrain for 1 minute or until you create this effect again. Until the effect ends, the area moves with you, centered on you. During that time, you can move across ground that is difficult terrain without spending extra movement. You can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. In addition, you learn the Mold Earth cantrip. Constitution is your spellcasting ability for this spell.",
	scorestxt : "+1 to one ability score of my choice",
	action : [["bonus action", "Realm of Rock"]],
	extraLimitedFeatures : [{
		name : "Avalanche Shout (after Stone's Endurance)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest",
	},{
		name : "Realm of Rock",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	spellcastingBonus : [{
		name : "Peak to Peak",
		spellcastingAbility : 3,
		spells : ["mold earth"],
		selection : ["mold earth"],
		firstCol : "atwill"
	}],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["multiverse goliath"].name && CurrentRace.features["stone's endurance"] && CurrentRace.level != 0) { CurrentRace.features["stone's endurance"].recovery = "short rest"; ApplyFeatureAttributes("race", [CurrentRace.known, "stone's endurance"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["multiverse goliath"].name && CurrentRace.features["stone's endurance"]) { CurrentRace.features["stone's endurance"].recovery = "long rest"; ApplyFeatureAttributes("race", [CurrentRace.known, "stone's endurance"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}},
};
 /* Peak to Peak
Prerequisite: Goliath
Goliaths wander a bleak realm of rock, wind, and cold. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You regain all expended uses of your Stone's Endurance feature when you finish a short rest.
• Avalanche Shout. Immediately after you use Stone's Endurance, you can target up to two creatures within 5 feet of you that you can see. Each target must succeed on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Constitution modifier, or be pushed a number of feet away from you equal to 5 + your Constitution modifier (minimum of +1). A target can choose to fail this save.
• Realm of Rock. As a bonus action, you may cause the ground within up to 30 feet of you to become difficult terrain for 1 minute or until you create this effect again. Until the effect ends, the area moves with you, centered on you. During that time, you can move across ground that is difficult terrain without spending extra movement. You can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. In addition, you learn the Mold Earth cantrip. Constitution is your spellcasting ability for this spell. 
 */
 FeatsList["stone's fury"] = { 
	name : "Stone's Fury",
	source : [["RCF"]],
	prerequisite : "Being a Goliath",
	prereqeval : function(v) { return CurrentRace.known.indexOf('goliath') !== -1; },
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Stone's Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	descriptionFull : "Your competitive fury burns tirelessly. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 When you hit with an attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.\n \u2022 Immediately after you use your Stone's Endurance trait, you can make one weapon attack as part of that reaction.",
	scorestxt : "+1 Strength or Constitution",
	action : ["reaction", " (after Stone's Endurance)"],
	usages : 1,
	recovery : "short rest",
	additional : "extra damage"
};
/* Stone's Fury
Prerequisite: Goliath
Your competitive fury burns tirelessly. You gain the following benefits:
• Increase your Strength or Constitution score by 1, to a maximum of 20.
• When you hit with an attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.
• Immediately after you use your Stone's Endurance trait, you can make one weapon attack as part of that reaction. */

// Halfling
FeatsList["allez cuisine!"] = { // Mark of Hospitality
	name : "Allez Cuisine!",
	source : [["RCF"]],
	prerequisite : "Being a creature with the Dragonmark of Hospitality",
	prereqeval : function (v) { return (/^(?=.*dragonmark)(?=.*hospitality).*$/i).test(CurrentRace.known); },
	descriptionFull : "If memory serves me right... the Mark of Hospitality grants powers related to food and shelter. But it also helps the bearer connect with others. They may not always have gold, but a halfling with the Mark of Hospitality is sure to be rich in friends. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency with Cook's utensils. If you are already proficient with them, you gain expertise with them, which means your proficiency bonus is doubled for any ability check you make with them. Additionally, you can use Cook's utensils as a spellcasting focus for any spell you cast that uses Charisma as its spellcasting ability.\n \u2022 You learn the Create Food and Water spell. Your spellcasting ability for the spell is Charisma. You can cast it without a spell slot or needing a material component, and you must finish a long rest before you can cast it in this way again. If you have spell slots of 3rd level or higher, you can also cast this spell with them.\nYou can create the standard bland fare without requiring any sort of check, but you can attempt to create finer food by making a Charisma check, adding your Cook's utensils bonus to this check.\nFood Quality\tDifficulty\nPoor\t\tNo roll required\nModest\t\t10\nComfortable\t13\nWealthy\t\t15\n\Aristocratic\t18\n\nA failed check results in a sour and squalid meal.",
	description : "I gain proficiency with Cook's utensils, or expertise if already proficient. I can use Cook's utensils as a spellcasting focus for any spell I cast that uses Charisma as its spellcasting ability. I can cast Create Food and Water once per long rest, with the posibility of enhanced meals. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	toolProfs : [["Cook's utensils", "Int"]],
	eval : function () {
		if ((/cook.*utensils/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		}
	},
	removeeval : function () {
		if ((/cook.*utensils/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		}
	},
	spellcastingBonus : {
		name : "Create Food and Water",
		spells : ["create food and water"],
		selection : ["create food and water"],
		firstCol : "oncelr"
	},
	spellcastingAbility : 6,
	allowUpCasting : true,
	spellChanges : {
		"create food and water" : {
			components : "(V,S,M)",
			changes : "My feat allows me to cast Create Food and Water once per long rest without requiring a spell slot or spell components, or by using a spell slot and cast it with components as normal."
		}
	},
};
/* Allez Cuisine!
Prerequisites: Mark of Hospitality Halfling
If memory serves me right... the Mark of Hospitality grants powers related to food and shelter. But it also helps the bearer connect with others. They may not always have gold, but a halfling with the Mark of Hospitality is sure to be rich in friends. You gain the following benefits:
• Increase your Charisma by 1, to a maximum of 20.
• You gain proficiency with Cook's utensils. If you are already proficient with them, you gain expertise with them, which means your proficiency bonus is doubled for any ability check you make with them. Additionally, you can use Cook's utensils as a spellcasting focus for any spell you cast that uses Charisma as its spellcasting ability.
• You learn the Create Food and Water spell. Your spellcasting ability for the spell is Charisma. You can cast it without a spell slot or needing a material component, and you must finish a long rest before you can cast it in this way again. If you have spell slots of 3rd level or higher, you can also cast this spell with them.

You can create the standard bland fare without requiring any sort of check, but you can attempt to create finer food by making a Charisma check, adding your Cook's utensils bonus to this check.
Food Quality	Difficulty
Poor			No roll required
Modest			10
Comfortable		13
Wealthy			15
Aristocratic	18

A failed check results in a sour and squalid meal. */

// Half-Orc
FeatsList["orcish centaur heritage"] = {
	name : "Orcish Centaur Heritage",
	source : [["RCF"]],
	prerequisite : "Being a Half-Orc",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known); },
	description : "My walking speed increases by 10 ft. I can use my hooves for unarmed strikes that deal 1d4 bludgeoning damage. I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	speed : { walk : {spd : "+10", enc : "+10" } },
	carryingCapacity : 2,
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\b(hoofs?|hooves)\b/i,
		name : "Hooves",
		source : ["RCF"],
		damage : [1, 6, "bludgeoning"],
		description : ""
	},
	weaponsAdd : ["Hooves"],
};
/* Orcish Centaur Heritage
The upper bodies of centaurs are comparable to human torsos in size, and below the waist, they have the bodies of small horses, averaging about 4 feet tall at the withers. Similar range of coloration as horses—from various shades of chestnut or bay to dappled or even zebra-like striped patterns. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Hooves. Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
• Equine Build. Your walking speed increases by 10 feet. You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot. */

// Harengon (Rabbitfolk)
FeatsList["colony defender"] = { 
	name : "Colony Defender",
	source : [["RCF"]],
	prerequisite : "Being a Harengon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('harengon') !== -1; },
	description : "As a bonus action with the Attack action, I can make an extra with a double-tipped weapon for 2d4 piercing damage. I treat double-tipped weapons as having the finesse trait. +1 AC while wielding a double-tipped weapon with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : ["if ((/double-tipped spear/i).test(WeaponName) && fields.Proficiency) {fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Finesse, two-handed; With Attack action, one attack as bonus action'); fields.Mod = StrDex; };", "I can make an extra attack with Double-tipped weapons as a bonus action when taking the Attack action."]
	},
	eval : "AddACMisc(1, 'Colony Defender', 'When wielding a double-tipped weapon in two hands, the Colony Defender feat gives a +1 bonus to AC', 'ACshield');",
	removeeval : "AddACMisc(0, 'Colony Defender', 'When wielding a double-tipped weapon in two hands, the Colony Defender feat gives a +1 bonus to AC');"
};
/* Colony Defender
Prerequisite: Harengon
Your colony has trained with double-tipped weapons for as long as anyone can remember. You have received extensive training in the favored weapons of your people. You gain the following benefits:
• Increase your Strength or Dexterity score by 1, to a maximum of 20.
• While wielding a double-tipped weapon with two hands, the weapon has the finesse trait for your attacks with it, and you gain +1 AC.
• On your turn, when you use a bonus action to make a melee attack with the tip at the opposite end of the weapon, the weapon’s damage die for this attack increases to 2d4, instead of 1d4. */
WeaponsList["double-tipped spear"] = {
	baseWeapon : "spear",
	regExpSearch : /^(?=.*double)(?=.*spear).*$/i,
	name : "Double-tipped spear",
	source : [["RCF"]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "piercing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
/* Double-Tipped Spear
Martial weapon, melee weapon
100 gp, 6 lb. 	2d4 piercing - special, two-handed
Special.
If you attack with a double-tipped spear as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals 1d4 piercing damage on a hit, instead of 2d4. */
FeatsList["jumping flash"] = { 
	name : "Jumping Flash",
	source : [["RCF"]],
	prerequisite : "Being a Harengon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('harengon') !== -1; },
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I regain all expended uses of my Rabbit Hop feature when I finish a short rest.",
	scorestxt : "+1 Strength or Dexterity",
	skills : "\n\n" + toUni("Jumping Flash (feat)") + ": Acrobatics or Athletics.",
	speed : { walk : {spd : "+5", enc : "+5" } },
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["harengon"].name && CurrentRace.features["rabbit hop"] && CurrentRace.level != 0) {
        CurrentRace.features["rabbit hop"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "rabbit hop"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["harengon"].name && CurrentRace.features["rabbit hop"]) {
		CurrentRace.features["rabbit hop"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "rabbit hop"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
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
	source : [["RCF"]],
	prerequisite : "Being a Small sized Harengon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('harengon') !== -1; },
	descriptionFull : "You are uncommonly hardy for your race. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You regain all expended uses of your Rabbit Hop feature when you finish a short rest.\n \u2022 You do not have disadvantage on attack rolls with weapons with the heavy property.",
	description : "My walking speed increases by 5 ft. I regain all expended uses of my Rabbit Hop feature when I finish a short rest. I do not have disadvantage on attack rolls with heavy weapons.  [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	speed : { walk : {spd : "+5", enc : "+5" } },
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["harengon"].name && CurrentRace.features["rabbit hop"] && CurrentRace.level != 0) {
        CurrentRace.features["rabbit hop"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "rabbit hop"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["harengon"].name && CurrentRace.features["rabbit hop"]) {
		CurrentRace.features["rabbit hop"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "rabbit hop"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Powerhouse Hopper
Prerequisite: Small sized Rabbitfolk
You are uncommonly hardy for your race. You gain the following benefits:
• Increase your Strength or Constitution by 1, to a maximum of 20.
• Increase your walking speed by 5 feet.
• You regain all expended uses of your Rabbit Hop feature when you finish a short rest.
• You do not have disadvantage on attack rolls with weapons with the heavy property. */
FeatsList["that's no ordinary rabbit!"] = {
	name : "That's No Ordinary Rabbit!",
	source : [["RCF"]],
	prerequisite : "Being a Harengon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('harengon') !== -1; },
	description : "I gain a bite attack that uses Strength and deals 1d6 piercing damage. I regain all expended uses of my Rabbit Hop feature when I finish a short rest. I have Keen Hearing. [+1 Strength, Dexterity, Constitution or Wisdom]",
	descriptionFull : "You are a special example for your race. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.\n \u2022 Huge, Sharp. You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 Leap About. You regain all expended uses of your Rabbit Hop feature when you finish a short rest.\n \u2022 Better Not Risk Another Frontal Assault. You have advantage on Wisdom (Perception) checks that rely on hearing.",
	vision : [["Keen Hearing", 0]],
	scorestxt : "+1 Strength, Dexterity, Constitution or Wisdom",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : [["RCF"]],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["harengon"].name && CurrentRace.features["rabbit hop"] && CurrentRace.level != 0) {
        CurrentRace.features["rabbit hop"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "rabbit hop"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["harengon"].name && CurrentRace.features["rabbit hop"]) {
		CurrentRace.features["rabbit hop"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "rabbit hop"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* That's No Ordinary Rabbit!
Prerequisite: Harengon (Rabbitfolk)
You are a special example for your race. You gain the following benefits:
• Increase your Strength, Dexterity, Constitution or Wisdom by 1, to a maximum of 20.
• Huge, Sharp. You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.
• Leap About. You regain all expended uses of your Rabbit Hop feature when you finish a short rest.
• Better Not Risk Another Frontal Assault. You have advantage on Wisdom (Perception) checks that rely on hearing. */

// Hexblood
FeatsList["a heart's desire"] = {  // Hexblood
    name : "A Heart's Desire",
	source : [["RCF"]],
	prerequisite : "Being a Hexblood",
	prereqeval : function(v) { return CurrentRace.known.indexOf('hexblood') !== -1; },
	descriptionFull : "Where wishing fails, ancient magic can offer a heart's desire—at least, for a time. Hexbloods are individuals infused with eldritch magic, fey energy, or mysterious witchcraft. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Detect Magic spell and can cast it at will, without expending a spell slot.\n \u2022 You learn the Blindness/Deafness and Bestow Curse spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I can cast Detect Magic at will. I learn the Blindness/Deafness and Bestow Curse spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "At will",
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	},	{
		name : "Blindness/Deafness",
		spells : ["blindness/deafness"],
		selection : ["blindness/deafness"],
		firstCol : "oncelr"
	}, {
		name : "Bestow Curse",
		spells : ["bestow curse"],
		selection : ["bestow curse"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I can cast Detect Magic at will, without expending a spell slot. I learn the Blindness/Deafness and Bestow Curse spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I can cast Detect Magic at will, without expending a spell slot. I learn the Blindness/Deafness and Bestow Curse spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I can cast Detect Magic at will, without expending a spell slot. I learn the Blindness/Deafness and Bestow Curse spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	},
	extraLimitedFeatures : [{
		name : "Blindness/Deafness",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 2+"
	},{
		name : "Bestow Curse",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 3+"
	}],
};
/* A Heart's Desire
Prerequisite: Hexblood
Where wishing fails, ancient magic can offer a heart's desire—at least, for a time. Hexbloods are individuals infused with eldritch magic, fey energy, or mysterious witchcraft. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn the Detect Magic spell and can cast it at will, without expending a spell slot. You also learn the Blindness/Deafness and Bestow Curse spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat. */
FeatsList["heir of hags"] = {
	name : "Heir of Hags",
	source : [["RCF"]],
	prerequisite : "Being a Hexblood",
	prereqeval : function(v) { return CurrentRace.known.indexOf('hexblood') !== -1; },
	descriptionFull : "A bargain with a hag or other eerie forces transformed your character into a magical being. Your transformation was more potent than many other hexbloods. You gain the following benefits:\n \u2022 Eerier Tokens. You can now create a number of Eerie Tokens equal to your proficiency bonus. Instead of an action, you may instead use a bonus action for Remote Viewing or to send a Telepathic Message. The creature holding or carrying the token can respond to you telepathically with a short message of twenty-five words or less, but can not initiate a message to you.\n \u2022 Epicaricacy. When a creature you can see within 30 feet of you rolls a 1 on an attack roll, skill check, or saving throw, you can use your rection to gain advantage on your next attack roll, skill check, or saving throw. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a short rest.",
	description : "I can create up to my prof bonus of Eerie Tokens, and can use a bonus action to use them. Creatures carrying my token can respond to my telepathic messages. [Prof/SR] When a 1 is rolled within 30 ft, I can use my reaction to gain advantage on my next attack/check/save. [+1 to Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	action : [["reaction", "Epicaricacy"], ["bonus action", "Eerie Token (use)"]],
	extraLimitedFeatures : [{
		name : "Eerie Token",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}, {
		name : "Epicaricacy",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest"
	}],
};
/* Heir of Hags
Prerequisite: Hexblood
A bargain with a hag or other eerie forces transformed your character into a magical being. Your transformation was more potent than many other hexbloods. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Eerier Tokens. You can now create a number of Eerie Tokens equal to your proficiency bonus. Instead of an action, you may instead use a bonus action for Remote Viewing or to send a Telepathic Message. The creature holding or carrying the token can respond to you telepathically with a short message of twenty-five words or less, but can not initiate a message to you.
• Epicaricacy. When a creature you can see within 30 feet of you rolls a 1 on an attack roll, skill check, or saving throw, you can use your rection to gain advantage on your next attack roll, skill check, or saving throw. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a short rest. */
FeatsList["weird companionship"] = {
	name : "Weird Companionship",
	source : [["RCF"]],
	prerequisite : "Being a Hexblood",
	prereqeval : function(v) { return CurrentRace.known.indexOf('hexblood') !== -1; },
	descriptionFull : "Although they are solitary by nature, hags sometimes feel the need for companionship, and the weird magic at a hag's disposal means that she might have almost any type of creature helping or serving her. Some of this weird magic has transferred over to you. You gain the following benefits:\n \u2022 Mimicry. You can can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.\n \u2022 Minion. You learn the Find Familiar spell. You can cast it as a ritual and can also cast it without expending a spell slot. Once you cast it in this way, you can't cast it in this way again until you finish a long rest. You can also cast it using spell slots you have. The spells' spellcasting ability is the ability increased by this feat.\n\n> The familiar can perch on your shoulder. While perched on your shoulder, the familiar can't be targeted by any attack or other harmful effect; only you can cast spells on it; it can't take damage; and it is incapacitated. While the familiar is perched on your shoulder, you gain a bonus to your passive Wisdom (Perception) score and to Wisdom (Perception) checks. The bonus equals the modifier for the ability increased by this feat.\n\n> The familiar doesn't require sleep. While it is within 100 feet of you, it can awaken you from sleep as a bonus action. The familiar vanishes when it dies, if you die, or if the two of you are separated by more than 5 miles. If it is slain by a creature, you gain advantage on all attack rolls against the killer for the next 24 hours.\n\n> At the end of a short or long rest, you can call the familiar back to you—no matter where it is or whether it died—and it reappears within 5 feet of you.",
	description : "I can mimic sounds. They can be detected as imitations with a successful Insight check against my Deception check. I can cast Find Familiar as a ritual, once per long rest without a spell slot, and by expending a spell slot as normal. The familiar has extra features. See book for details. [+1 to Int, Wis, or Cha]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	languageProfs : ["Mimicry"],
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "Weird Companionship",
		spells : ["find familiar"],
		selection : ["find familiar"],
		firstCol : 'oncelr'
	}],
	extraLimitedFeatures : [{
		name : "Weird Companionship (Find Familiar)",
		usages : 1,
		recovery : "long rest",
		altResource : "SS 1+",
	}],
	calcChanges : { companionCallback : [function(prefix, oCrea, bAdd, sCompType) {
		if (sCompType !== "familiar") return;
		var str = "\u25C6 Perched: While perched on my shoulder, the familiar can't be targeted by any attack or other harmful effect; only I can cast spells on it; it can't take damage; and it is incapacitated. It grants me a bonus to my passive Wisdom (Perception) score and to Wisdom (Perception) checks equal to the ability modifier of the ability increased by the Weird Companionship feat.\n\u25C6 Watchful. While it is within 100 feet of me, the familiar can awaken me from sleep as a bonus action.\n\u25C6 Recall. At the end of a short or long rest, I can call the familiar back to me—no matter where it is or whether it died—and it reappears within 5 feet of me.";
		var aFnc = bAdd ? AddString : RemoveString;
		aFnc(prefix + "Comp.Use.Traits", str, true); }, 
		"The familiars I create using the Find Familiar spell gain the Perched, Recall, and Watchful traits."]},
};
/* Weird Companionship
Prerequisite: Hexblood
Although they are solitary by nature, hags sometimes feel the need for companionship, and the weird magic at a hag's disposal means that she might have almost any type of creature helping or serving her. Some of this weird magic has transferred over to you. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Mimicry. You can can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.
• Minion. You learn the Find Familiar spell. You can cast it as a ritual and can also cast it without expending a spell slot. Once you cast it in this way, you can't cast it in this way again until you finish a long rest. You can also cast it using spell slots you have. The spells' spellcasting ability is the ability increased by this feat. 
> The familiar can perch on your shoulder. While perched on your shoulder, the familiar can't be targeted by any attack or other harmful effect; only you can cast spells on it; it can't take damage; and it is incapacitated. While the familiar is perched on your shoulder, you gain a bonus to your passive Wisdom (Perception) score and to Wisdom (Perception) checks. The bonus equals the modifier for the ability increased by this feat. 
> The familiar doesn't require sleep. While it is within 100 feet of you, it can awaken you from sleep as a bonus action. The familiar vanishes when it dies, if you die, or if the two of you are separated by more than 5 miles. If it is slain by a creature, you gain advantage on all attack rolls against the killer for the next 24 hours.
> At the end of a short or long rest, you can call the familiar back to you—no matter where it is or whether it died—and it reappears within 5 feet of you. */

// Human
FeatsList["angelfire blessing"] = {  
	name : "Angelfire Blessing",
	source : [["RCF"]],
	prerequisite : "Being a Human",
	prereqeval : function(v) { return CurrentRace.known.indexOf('human') !== -1; },
	descriptionFull : "You learn to call on heavenly angelfire to serve your commands. You gain the following benefits:\n \u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20.\n \u2022 When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.\n \u2022 Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice once. I then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 fire damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
};

// Kalashtar
FeatsList["thoughtsinger"] = {
    name : "Thoughtsinger",
    source : [["RCF"]],
    prerequisite : "Kalashtar",
    prereqeval : function() { return CurrentRace.known.indexOf('kalashtar') !== -1; },
    scorestxt : "+1 Wisdom or Charisma",
    descriptionFull : "You have honed your telepathic abilities, allowing you to link to and guide your companions as a united group. You gain the following benefits:\n \u2022 Increase your Wisdom or Charisma score by 1, to a maximum of 20.\n \u2022 When using your Mind Link trait, you can maintain links to up to 6 creatures at a time. When you establish a link, you decide whether the linked creature can telepathically communicate only with you, or if they can telepathically communicate with all of the creatures you are linked to at once. Likewise, you can communicate with one specific creature, or you can communicate with all creatures you’re currently linked to.\n \u2022 If you can speak telepathically to an ally using your Mind Link trait, you can use the Help action to aid them in attacking a creature, even if you are more than 5 feet away from them.",
    description : "I can maintain my Mind Link with up to 6 creatures, choosing whether they can speak to each other or just me and whether I can communicate to a specific one or all of them. I can also use the help action to aid them even if I'm more than 5 ft away.\n[+1 Wisdom or Charisma]"
};
/* Thoughtsinger
Prerequisite: Kalashtar
You have honed your telepathic abilities, allowing you to link to and guide your companions as a united group. You gain the following benefits:
• Increase your Wisdom or Charisma score by 1, to a maximum of 20.
• When using your Mind Link trait, you can maintain links to up to 6 creatures at a time. When you establish a link, you decide whether the linked creature can telepathically communicate only with you, or if they can telepathically communicate with all of the creatures you are linked to at once. Likewise, you can communicate with one specific creature, or you can communicate with all creatures you're currently linked to.
• If you can speak telepathically to an ally using your Mind Link trait, you can use the Help action to aid them in attacking a creature, even if you are more than 5 feet away from them. */

// Kender
FeatsList["kender knack"] = {
	name : "Kender Knack",
	source : [["RCF"]],
	prerequisite : "Being a Kender",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kender') !== -1; },
	description : "Proficiency with Thieves' tools and prof/expertise with Sleight of Hand. Proficiency bonus times per short rest, as a bonus action, I can pull an item out of container: simple light weapon, no more than 1 gp/1 lb adventuring gear, random trinket, crowbar, grappling hook, one tool no more than 10 gp. [+1 to one]",
	descriptionFull : "Spurred by their curiosity and love for trinkets, curios, and keepsakes, Kender sometimes amass impressive collections of curiosities. Some might collect mundane knickknacks or relics from magical sites, while others might become professional thieves. You gain the following benefits:"+
	"\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n \u2022 You gain proficiency with Theives' tools and the Sleight of Hand skill. If you are already proficient in Sleight of Hand, you add double your proficiency bonus to checks you make with it. You are capable of taking items without ever being discovered, even by yourself. As a result, you have advantage on all sleight of hand skill checks that have to do with stealing."+
	"\n \u2022 You have a knack for pulling a needed item out of a bag or another container. As a bonus action, you can reach into a container you're carrying and choose from the Kender Pockets table. The object can't be sold and disappears after 1 hour; lost, misplaced, given away, or by some other unknown method. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."+
	"\n  Kender Pockets"+
	"\n  > 1 simple weapon of your choice that has the light property"+
	"\n  > 1 item of your choice from the Adventuring Gear table in the Player's Handbook. The item must cost no more than 1 gp and weigh no more than 1 lb."+
	"\n  > 1 random item from the Trinkets table in the Player's Handbook"+
	"\n  > 1 item of your choice from the Tools table in the Player's Handbook. The item must cost no more than 10 gp",
	scorestxt : "+1 to one ability score of my choice",
	skills : [["Sleight of Hand", "increment"]],
	toolProfs : [["Thieves' tools", "Dex"]],
	action : [["bonus action", "Kender Pockets"]],
	extraLimitedFeatures : [{
		name : "Kender Pockets",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	toNotesPage : [{
		name : "Kender Pockets",
		source : [["RCF"]],
		popupName : "Kender Knack Kender Pockets",
		page3notes : true,
		note : "\n  \u2022 1 simple weapon of my choice that has the light property"+ 
		"\n  \u2022 1 item of my choice from the Adventuring Gear table, no more than 1 gp and 1 lb"+ 
		"\n  \u2022 1 random item from the Trinkets table"+ 
		"\n  \u2022 a crowbar or a grappling hook"+ 
		"\n  \u2022 1 item of my choice from the Tools table, no more than 10 gp"}],
};
/* Kender Knack
Prerequisite: Kender
Spurred by their curiosity and love for trinkets, curios, and keepsakes, Kender sometimes amass impressive collections of curiosities. Some might collect mundane knickknacks or relics from magical sites, while others might become professional thieves. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You gain proficiency with Theives' tools and the Sleight of Hand skill. If you are already proficient in Sleight of Hand, you add double your proficiency bonus to checks you make with it. You are capable of taking items without ever being discovered, even by yourself. As a result, you have advantage on all sleight of hand skill checks that have to do with stealing.
• You have a knack for pulling a needed item out of a bag or another container. As a bonus action, you can reach into a container you're carrying and choose from the Kender Pockets table. The object can't be sold and disappears after 1 hour; lost, misplaced, given away, or by some other unknown method. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
Kender Pockets
	> 1 simple weapon of your choice that has the light property
	> 1 item of your choice from the Adventuring Gear table in the Player's Handbook. The item must cost no more than 1 gp and weigh no more than 1 lb.
	> 1 random item from the Trinkets table in the Player's Handbook.
	> Your choice of a crowbar or a grappling hook.
	> 1 item of your choice from the Tools table in the Player's Handbook. The item must cost no more than 10 gp.
*/
FeatsList["supernatural curiosity"] = {
	name : "Supernatural Curiosity",
	source : [["RCF"]],
	prerequisite : "Being a Kender",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kender') !== -1; },
	description : "Darkvision 60 ft. Immune to frightened. Once per short rest use reaction on ally within 30 ft who failed save vs frightened to succeed instead. I recall anything within the past month. At the end of a long rest, I gain proficiency with 1 tool or weapon & 1 skill until the end of my next long rest. [+1 to one ability score]",
	descriptionFull : "Kender have a supernatural curiosity that drives them on to adventures big and small. You gain the following benefits:"+
	"\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n \u2022 Darkvision. You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."+
	"\n \u2022 Fearless. You are immune to the frightened condition. When an ally you can see within 30 feet of you fails a saving throw to avoid or end the frightened condition on themself, you can use your reaction to have the ally succeed instead. Once you use this ability, you can't use it again until you finish a short or long rest."+
	"\n \u2022 You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, as you draw upon the reservoir of informational tidbits you've collected along the way. These proficiencies last until the end of your next long rest.",
	scorestxt : "+1 to one ability score of my choice",
	vision : [["Darkvision", 60]],
	savetxt : { immune : ["frightened"] },
	action : [["reaction", "Fearless (ally 30 ft)"]],
	extraLimitedFeatures : [{
		name : "Fearless",
		usages : 1,
		recovery : "short rest"
	}],
	skillstxt : "Choose any one skill - lasts until the end of my next long rest",
	toolProfs : [["Long Rest: tool/weapon", 1]],
};
/* Supernatural Curiosity
Prerequisite: Kender
Kender have a supernatural curiosity that drives them on to adventures big and small. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• Darkvision. You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.
• Fearless. You are immune to the frightened condition. When an ally you can see within 30 feet of you fails a saving throw to avoid or end the frightened condition on themself, you can use your reaction to have the ally succeed instead. Once you use this ability, you can't use it again until you finish a short or long rest.
• You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, as you draw upon the reservoir of informational tidbits you've collected along the way. These proficiencies last until the end of your next long rest. */
FeatsList["you get the gist"] = {
	name : "You Get the Gist",
	source : [["RCF"]],
	prerequisite : "Being a Kender",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kender') !== -1; },
	description : "1/LR language prof. Taunt lasts until EoNT. I regain 'Taunt' after a short rest. Creatures of Int 4+ that can hear me can be Taunted. I can add an effect (see Notes) [+1 to Int/Wis/Cha]",
	descriptionFull : "Your extraordinary ability to fluster creatures is unparalleled. You gain the following benefits:"+
	"\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20."+
	"\n \u2022 Whenever you finish a long rest, you gain proficiency in one language of your choice. This proficiency last until the end of your next long rest."+
	"\n \u2022 Improved Taunt. Your Taunt feature is enhanced in the following ways:"+
	"\n  + You regain all expended uses of your 'Taunt' feature when you finish a short rest."+
	"\n  + A creature with an Intelligence score of 4 or more need only hear you to be targeted by your Taunt, it need not understand you."+
	"\n  + The disadvantage on attack rolls against targets other than you from your Taunt lasts until the end of your next turn."+
	"\n  + Before the creature makes its saving throw, you may choose one of the following effects:"+
	"\n  > The creature subtracts 1d4 from the next saving throw it makes before the start of its next turn."+
	"\n  > The creature's speed is reduced by 10 feet until the start of its next turn."+
	"\n  > The creature can't take reactions until the start of its next turn."+
	"\n  > The creature takes 1d4 psychic damage. This damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."+
	"\n\t   If the creature fails its saving throw against your Taunt, the additional effect is also applied.",
	languageProfs : [["Gist Language"]],
	toNotesPage : [{
		name : "Improved Taunt Features",
		source : [["RCF"]],
		popupName : "Kender Improved Taunt Features",
		page3notes : true,
		note : "\n  \u2022 The creature subtracts 1d4 from the next save it makes before the start of its next turn." + 
		"\n  \u2022 The creature's speed is reduced by 10 feet until the start of its next turn." + 
		"\n  \u2022 The creature can't take reactions until the start of its next turn." + 
		"\n  \u2022 The creature takes 1d4 psychic damage. This damage increases by 1d4 when you reach" + 
		"\n     5th level (2d4), 11th level (3d4), and 17th level (4d4)." + desc([
		"If the creature fails its saving throw against your Taunt, the additional effect is also applied."])
		}],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["kender"].name && CurrentRace.features["taunt"] && CurrentRace.level != 0) {
        CurrentRace.features["taunt"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "taunt"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["kender"].name && CurrentRace.features["taunt"]) {
		CurrentRace.features["taunt"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "taunt"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "1/LR language prof. I regain 'Taunt' after a short rest. Taunt lasts until EoNT. Creatures of Int 4+ that can hear me can be Taunted. I can add an effect that lasts until the start of the creatures next turn if it fails the Taunt save (see Notes): -1d4 next save, -10 ft move speed, no reactions, 1d4 psychic damage.  [+1 Int" + (typePF ? "" : "elligence") + "]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "1/LR language prof. I regain 'Taunt' after a short rest. Taunt lasts until EoNT. Creatures of Int 4+ that can hear me can be Taunted. I can add an effect that lasts until the start of the creatures next turn if it fails the Taunt save (see Notes): -1d4 next save, -10 ft move speed, no reactions, 1d4 psychic damage.  [+1 Wis" + (typePF ? "" : "dom") + "]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "1/LR language prof. I regain 'Taunt' after a short rest. Taunt lasts until EoNT. Creatures of Int 4+ that can hear me can be Taunted. I can add an effect that lasts until the start of the creatures next turn if it fails the Taunt save (see Notes): -1d4 next save, -10 ft move speed, no reactions, 1d4 psychic damage.  [+1 Cha" + (typePF ? "" : "risma") + "]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
/* You Get the Gist
Prerequisite: Kender
Your extraordinary ability to fluster creatures is unparalleled. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Whenever you finish a long rest, you gain proficiency in one language of your choice. This proficiency last until the end of your next long rest.
• Improved Taunt. Your Taunt feature is enhanced in the following ways:
	+ You regain all expended uses of your 'Taunt' feature when you finish a short rest. 
	+ A creature with an Intelligence score of 4 or more need only hear you to be targeted by your Taunt, it need not understand you.
	+ The disadvantage on attack rolls against targets other than you from your Taunt lasts until the end of your next turn.
	+ Before the creature makes its saving throw, you may choose one of the following effects:
		> The creature subtracts 1d4 from the next saving throw it makes before the start of its next turn.
		> The creature's speed is reduced by 10 feet until the start of its next turn.
		> The creature can't take reactions until the start of its next turn.
		> The creature takes 1d4 psychic damage. This damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).
	If the creature fails its saving throw against your Taunt, the additional effect is also applied. */

// Kenku
FeatsList["lightly feathered, less flightless"] = {
	name : "Lightly Feathered, Less Flightless",
	source : [["RCF"]],
	prerequisite : "Being a Kenku",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kenku') !== -1; },
	descriptionFull : "Feathers on your arms provide you with a limited ability to fly. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.\n \u2022 You can choose to use your Dexterity instead of your Strength to determine how far you can jump.\n \u2022 Feathered Hop. As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n \u2022 Glide. When you fall at least 10 feet above the ground, you can use your reaction to extend your feathered arms to glide horizontally a number of feet equal to your walking speed, and you take 0 damage from the fall. You determine the direction of the glide.",
	description : "I can use Dex for jump distances. As a reaction when I fall at least 10 ft above the ground, I can glide my walking speed horizontally, and take 0 fall damage. (Prof Bonus/LR) As a bonus action if speed isn't 0, I can jump my Prof Bonus x 5 feet without provoking opportunity attacks. [+1 to Str, Dex, Con, Cha]",
	scorestxt : "+1 to Strength, Dexterity, Constitution, or Charisma",
	action : [["bonus action", "Feathered Hop"],["reaction","Glide"]],
	extraLimitedFeatures : {
		name : "Feathered Hop",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
		additional : "Prof Bonus x 5 ft",
		},
};
/* Lightly Feathered, Less Flightless 
Prerequisite: Kenku
Feathers on your arms provide you with a limited ability to fly. You gain the following benefits:
• Increase your Strength, Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.
• You can choose to use your Dexterity instead of your Strength to determine how far you can jump.
• Feathered Hop. As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
•  Glide. When you fall at least 10 feet above the ground, you can use your reaction to extend your feathered arms to glide horizontally a number of feet equal to your walking speed, and you take 0 damage from the fall. You determine the direction of the glide. */
FeatsList["blessed with keen observation"] = {
	name : "Blessed with Keen Observation",
	source : [["RCF"]],
	prerequisite : "Being a Kenku",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kenku') !== -1; },
	descriptionFull : "Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories. You gain the following benefits:\n \u2022 Increase your Intelligence Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Perception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can both see and hear.\n \u2022 You can use your action to try to get uncanny insight about one creature you can see within 30 feet of you. Make a Wisdom (Insight) check contested by the target's Charisma (Deception) check. If your check succeeds, you have advantage on attack rolls and ability checks against the target until the end of your next turn.",
	description : "I gain prof/expertise with Perception. No disadvantage on my Perception in a lightly obscured area, if I can see and hear. As an action, a creature I can see within 30 ft must make its Deception vs. my Insight or I gain advantage on attacks and ability checks against it until the end of my next turn. [+1 Int or Wis]",
	scorestxt : "+1 to Intelligence or Wisdom",
	skills : [["Perception", "increment"]],
	skillstxt : "Perception",
	vision : [["No disadv. on Perception in lightly obscured or dim light", 0]],
	action : ["action", "Uncanny Insight"],
};
/* Blessed with Keen Observation
Prerequisite: Kenku
Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories. You gain the following benefits:
• Increase your Intelligence or Wisdom by 1, to a maximum of 20.
• You gain proficiency in the Perception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.
• Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can both see and hear.
• You can use your action to try to get uncanny insight about one creature you can see within 30 feet of you. Make a Wisdom (Insight) check contested by the target's Charisma (Deception) check. If your check succeeds, you have advantage on attack rolls and ability checks against the target until the end of your next turn. */
FeatsList["supernaturally good memory"] = {
	name : "Supernaturally Good Memory",
	source : [["RCF"]],
	prerequisite : "Being a Kenku",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kenku') !== -1; },
	descriptionFull : "Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You regain all expended uses of your 'Kenku Recall' feature when you finish a short rest.\n \u2022 You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.",
	description : "I gain proficiency/expertise with History. When I Help a creature with an ability check, DC 15 History check to add my Prof bonus if it understands me. I regain expended 'Kenku Recall' at the end of a short rest. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of my choice",
	skills : [["History", "increment"]],
	skillstxt : "History",
	action : ["action", "Help action (DC 15 History check)"],
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["multiverse kenku"].name && CurrentRace.features["kenku recall"] && CurrentRace.level != 0) {
        CurrentRace.features["kenku recall"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "kenku recall"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["multiverse kenku"].name && CurrentRace.features["kenku recall"]) {
		CurrentRace.features["kenku recall"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "kenku recall"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* Supernaturally Good Memory
Prerequisite: Kenku
Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You regain all expended uses of your 'Kenku Recall' feature when you finish a short rest.
• You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.
• When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying. */

// Kobold
FeatsList["kobold ancestral roar"] = { 
	name : "Kobold Ancestral Roar",
	source : [["RCF"]],
	prerequisite : "Being a Kobold",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kobold') !== -1; },
	description : "I have advantage on saves to avoid/end the frightened condition on myself. I can inspire myself to roar. Creatures of my choice within 30 ft that can see & hear me make a Wisdom save (DC 8 + prof bonus + CHA mod) or be frightened of me for 1 minute, repeating save whenever it takes damage. [+1 Dex, Con, or Cha]",
	savetxt : { adv_vs : ["frightened"] },
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	usages : 1,
	recovery : "short rest",
	action : [["action", "Ancestral Roar"]],
	weaponsAdd : ["Ancestral Roar"],
};
WeaponsList["ancestral roar"] = { 
		regExpSearch : /^(?=.*ancestral)(?=.*roar).*$/i,
		name : "Ancestral Roar",
		source : [["RCF"]],
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
	source : [["RCF"]],
	prerequisite : "Being a Kobold",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kobold') !== -1; },
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
		source : ["RCF"],
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
	source : [["RCF"]],
	prerequisite : "Being a Kobold",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kobold') !== -1; },
	description : "I can use my Dragon Growl trait twice before I must take a short rest. Whenever I have advantage on an attack roll that uses Dexterity or Wisdom, I can reroll one of the dice once. [+1 Dexterity or Wisdom]",
	scorestxt : "+1 Dexterity or Wisdom",
	extraLimitedFeatures : {
		name : "Grovel, Cower, and Beg",
		usages : 2,
		recovery : "short rest"
	},
};
/* Kobold Cleverness
Prerequisite: Kobold (not Multiverse)
The cleverness of Kobolds is well-known. You gain the following benefits:
• Increase your Dexterity or Wisdom by 1, to a maximum of 20.
• You can use your Grovel, Cower, and Beg trait twice before you must take a short rest.
• Whenever you have advantage on an attack roll using Dexterity or Wisdom, you can reroll one of the dice once. */
FeatsList["kobold pack tactics"] = {
	name : "Kobold Pack Tactics",
	source : [["RCF"]],
	prerequisite : "Being a Kobold",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kobold') !== -1; },
	description : "Pack Tactics: I have advantage on attack rolls if at least one of my non-incapacitated allies is within 5 ft of the targeted creature [+1 Dexterity or Wisdom]",
	descriptionFull : "Kobolds know they sometimes have to use superior numbers and cunning to take down powerful foes. Kobolds work together with other members of their tribe, allies, pets and mounts, and use any other advantage they can squeeze out of their environment to accomplish difficult tasks they couldn't manage alone. You gain the following benefits:\n \u2022 Increase your Dexterity or Wisdom by 1, to a maximum of 20.\n \u2022 Pack Tactics. You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.",
	scorestxt : "+1 Dexterity or Wisdom",
};
/* Kobold Pack Tactics
Prerequisite: Kobold (Multiverse)
Kobolds know they sometimes have to use superior numbers and cunning to take down powerful foes. Kobolds work together with other members of their tribe, allies, pets and mounts, and use any other advantage they can squeeze out of their environment to accomplish difficult tasks they couldn't manage alone. You gain the following benefits:
• Increase your Dexterity or Wisdom by 1, to a maximum of 20.
• Pack Tactics. You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.  */

// Leonin
FeatsList["fierce pride"] = { 
	name : "Fierce Pride",
	source : [["RCF"]],
	prerequisite : "Being a Leonin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('leonin') !== -1; },
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
FeatsList["pride of lions"] = { 
	name : "Pride of Lions",
	source : [["RCF"]],
	prerequisite : "Being a Leonin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('leonin') !== -1; },
	description : "When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns. I take no damage from falling 20 ft or less, if I'm not incapacitated. I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. [+1 to one]",
	descriptionFull : "You often act with confidence, which can come off as imperiousness. The truth is that you are proud, and always want to set a good example of your kind. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Feline Agility. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.\n \u2022 Feline Grace. You don't take damage from falling 20 feet or less if you aren't incapacitated.\n \u2022 Powerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
	scorestxt : "+1 to one ability score of my choice",
	savetxt : { immune : ["fall damage up to 20 ft"] },
	features : {
		"feline agility" : {
			name : "Feline Agility",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	carryingCapacity : 2
};
/* Pride of Lions
Prerequisite: Leonin
You often act with confidence, which can come off as imperiousness. The truth is that you are proud, and always want to set a good example of your kind. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• Feline Agility. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.
• Feline Grace. You don't take damage from falling 20 feet or less if you aren't incapacitated
• Powerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. */

// Lizardfolk
FeatsList["coatl blooded"] = {
	name : "Coatl Blooded",
	source : [["RCF"]],
	prerequisite : "Being a Lizardfolk",
	prereqeval : function(v) { return CurrentRace.known.indexOf('lizardfolk') !== -1; },
	descriptionFull : "Celestial blood runs strong in you, unlocking a resilience akin to that possessed by some inhabitants of the Seven Heavens. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to cold and poison damage.\n \u2022 You have advantage on saving throws against being poisoned.",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 to one ability score]",
	scorestxt : "+1 to one ability score of my choice",
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
/* Coatl Blooded
Prerequisite: Lizardfolk
Celestial blood runs strong in you, unlocking a resilience akin to that possessed by some inhabitants of the Seven Heavens. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You have resistance to cold damage and poison damage.
• You have advantage on saving throws against being poisoned. */
FeatsList["subterranean lizardfolk"] = { 
	name : "Subterranean Lizardfolk",
	source : [["RCF"]],
	prerequisite : "Being a Lizardfolk",
	prereqeval : function(v) { return CurrentRace.known.indexOf('lizardfolk') !== -1; },
	description : "I have darkvision out to a range of 60 feet. Climbing doesn't cost me extra movement. I count as one size larger when determining my carrying capacity and push/drag/lift weight. [+1 Str, Dex, Con or Wis]",
	vision : [["Darkvision", 60]],
	scorestxt : "+1 Strength, Dexterity, Constitution or Wisdom",
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
	source : [["RCF"]],
	prerequisite : "Being a Lizardfolk",
	prereqeval : function(v) { return CurrentRace.known.indexOf('lizardfolk') !== -1; },
	description : "I can hold my breath for one hour at a time. I have Stealth advantage while in swamp/underwater. I can move towards an enemy as a bonus action. I count as one size larger when determining my carrying capacity and push/drag/lift weight. I can use Hungry Jaws one extra time. [+1 Str, Dex, Con or Wis]",
	descriptionFull : "Your heritage is more akin to the great lizards of the swamp. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022 Aquatic Hunter. You have advantage on Dexterity (Stealth) checks made to hide while underwater or while in swampy terrain. As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than when you started. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a short rest.\n \u2022 Reptilian Build. You can hold your breath for one hour at a time. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n \u2022 Envie. You can use your Hungry Jaws trait twice before you must finish a short or long rest.",
	action : [["bonus action", "Swamp Blood (Aquatic Hunter)"]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "short rest",
	scorestxt : "+1 Strength, Dexterity, Constitution or Wisdom",
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
	source : [["RCF"]],
	prerequisite : "Being a Locathah",
	prereqeval : function(v) { return CurrentRace.known.indexOf('locathah') !== -1; },
	description : "I have advantage on Wisdom (Perception) checks that rely on sight. My tough, scaly skin now provides a base AC of 13 + Dex mod. I only need to be submerged at least once every 24 hours to avoid suffocating. [+1 Str, Dex, or Con]",
	descriptionFull : "Your physiology has adapted to the local environment. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.\n \u2022 Keen Eye. You gain expertise with Perception, which means your proficiency bonus is doubled for any ability check you make with it. You have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 Hardened Scales. Your natural armor trait now provides a base AC of 13 + your Dexterity modifier.\n \u2022 Adaptation: You are resistant to poison damage. In addition, you only need to be submerged at least once every 24 hours to avoid suffocating.",
	skills : [["Perception", "increment"]],
	dmgres : ["Poison"],
	scorestxt : "+1 Strength, Dexterity, or Constitution",
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
	source : [["RCF"]],
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
	source : [["RCF"]],
	prerequisite : "Being a Loxodon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('loxodon') !== -1; },
	description : "I gain a tusk attack that uses Strength and deals 1d6 piercing damage. As a bonus action, when I use the Attack action, I can shove someone within 5 ft with my tusks. [+1 Strength or Constitution]",
	descriptionFull : "Your Proboscidean heritage shows true. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 You gain a tusk attack as a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your tusks.",
	scorestxt : "+1 Strength or Constitution",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /tusk/i,
		name : "Tusks",
		source : ["RCF"],
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
	source : [["RCF"]],
	prerequisite : "Being a Loxodon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('loxodon') !== -1; },
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks I make to escape from being grappled. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
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
FeatsList["memory of elephants"] = {
	name : "Memory of Elephants",
	source : [["RCF"]],
	prerequisite : "Being a Loxodon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('loxodon') !== -1; },
	descriptionFull : "You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.\n \u2022 You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your people. These proficiencies last until the end of your next long rest.",
	description : "I gain proficiency/expertise with History. When I Help a creature with an ability check, DC 15 History check to add my Prof bonus if it understands me. I recall anything within the past month. At the end of a long rest, I gain proficiency with 1 tool or weapon & 1 skill until the end of my next long rest. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of my choice",
	skills : [["History", "increment"]],
	skillstxt : "History, Choose any one skill - lasts until the end of my next long rest",
	toolProfs : [["Memory of Elephants: tool/weapon", 1]],
	action : ["action", "Help action (DC 15 History check)"]
};
/* Memory of Elephants
Prerequisites: Loxodon
Loxodon physically mature at the same rate as humans, but they live about 450 years. They highly value the weight of wisdom and experience and have a mystical connection to a shared herd memory. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.
• When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.
• You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your people. These proficiencies last until the end of your next long rest. */
FeatsList["woolly"] = {
	name : "Woolly",
	source : [["RCF"]],
	prerequisite : "Being a Loxodon",
	prereqeval : function(v) { return CurrentRace.known.indexOf('loxodon') !== -1; },
	descriptionFull : "You hail from an icy, desolate land, prone to dramatic swings in temperature. Surviving the interminable harshness of your home gives you the following racial traits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You have resistance to cold damage.\n \u2022 You can tolerate temperatures as low as −100 degrees Fahrenheit and as high as 300 degrees Fahrenheit.\n \u2022 You have darkvision, the ability to see in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
	description : "I have resistance to cold damage and can tolerate temperatures from -100 to 300 Fahrenheit. I have darkvision out to 60 feet. [+1 to any ability score.]",
	scorestxt : "+1 to one ability score of my choice",
	vision : ["Darkvision", 60],
	dmgres : ["Cold"],
};
/* Woolly
Prerequisite: Loxodon
You hail from an icy, desolate land, prone to dramatic swings in temperature. Surviving the interminable harshness of your home gives you the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You have resistance to cold damage.
• You can tolerate temperatures as low as −100 degrees Fahrenheit and as high as 300 degrees Fahrenheit.
• You have darkvision, the ability to see in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray. */

// Lupin
FeatsList["blood of hounds"] = { 
	name : "Blood of Hounds",
	source : [["RCF"]],
	prerequisite : "Being a Lupin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('lupin') !== -1; },
	description : "When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns. I have advantage on Perception, Survival, and Investigation checks that involve smell. I count as one size larger for my carrying capacity and push/drag/lift. [+1 to one]",
	descriptionFull : "insert clever description. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Chase. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.\n \u2022 Feline Grace. You don't take damage from falling 20 feet or less if you aren't incapacitated.\n \u2022 Powerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
	scorestxt : "+1 to one ability score of my choice",
	vision : [["Keen Smell (one month)", 0]],
	features : {
		"chase" : {
			name : "Chase",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	carryingCapacity : 2
};
/* Blood of Hounds
Prerequisite: Lupin
Your . You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• Keen Smell. You have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell. You can accurately recall anything you have smelled within the past month.
• Chase. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.
• Powerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
*/

// Minotaur
FeatsList["built horn tough"] = {  
	name : "Built Horn Tough",
	source : [["RCF"]],
	prerequisite : "Being a Minotaur",
	prereqeval : function(v) { return CurrentRace.known.indexOf('minotaur') !== -1; },
	descriptionFull : "Your horns are hard enough to be considered nigh-unbreakable. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Your Horns damage die increases to a d8. \n \u2022 If you used your Horns as part of the Attack action on your turn, when you use your Hammering Horns during the same turn, you may choose to knock the target creature prone instead of push it up to 10 feet away from you.\n \u2022 When you use your Goring Rush feature, you gain a +5 bonus to the attack's damage roll and have advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone until the start of your next turn.",
	description : "My Horns damage die increases to a d8. When I use Horns as part of Attack action, I may prone with Hammering Horns. When I use Goring Rush, I have +5 damage and advantage on checks and saves against spells and effects that push, pull, or prone me until the start of my next turn. [+1 Strength or Constitution]",
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
• Improved Goring Rush. When you use your Goring Rush feature, you gain a +5 bonus to the attack's damage roll and have advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone until the start of your next turn. */
FeatsList["bullheadedness"] = { // Minotaur
	name : "Bullheadedness",
	source : [["RCF"]],
	prerequisite : "Being a Minotaur",
	prereqeval : function(v) { return CurrentRace.known.indexOf('minotaur') !== -1; },
	description : "Walking speed +5 ft. I count as one size larger for carrying capacity/push/drag/lift weight. I have advantage on checks and saves against spells/effects that push/pull/prone me. Expertise with Intimidation or Persuasion, or proficiency if not so already. I may prone with Hammering Horns. [+1 Str, Con, Wis or Cha]",
	descriptionFull : "You have a steadfast adherence to an opinion, purpose, or course of action. You gain the following benefits:\n \u2022 Increase your Strength, Constitution, Wisdom or Charisma by 1, to a maximum of 20.\n \u2022 Beast of Burden. Increase your walking speed by 5 feet, and you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n \u2022 Improved Hammering Horns. You may choose to knock the target creature prone instead of push it up to 10 feet away from you. You gain advantage on ability checks and saving throws that you make against attacks, spells and effects that would move you away from your current space or knock you prone.\n \u2022 Improved Imposing Presence. You gain proficiency in the Intimidation or Persuasion skill (your choice). If you are already proficient in the chosen skill, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.",
	scorestxt : "+1 Strength, Constitution, Wisdom, or Charisma",
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
• Improved Hammering Horns. You may choose to knock the target creature prone instead of push it up to 10 feet away from you. You gain advantage on ability checks and saving throws that you make against attacks, spells, and effects that would move you away from your current space or knock you prone.
• Improved Imposing Presence. You gain proficiency in the Intimidation or Persuasion skill (your choice). If you are already proficient in the chosen skill, you gain expertise, which means your proficiency bonus is doubled for any ability check you make with it.
*/

// Owlin (Owlfolk)
FeatsList["nimble sight"] = { 
	name : "Nimble Sight",
	source : [["RCF"]],
	prerequisite : "Being an Owlin",
	prereqeval : function(v) { return CurrentRace.known.indexOf('owlin') !== -1; },
	description : "I have advantage on Perception checks based on sight. I can cast Detect Magic at will, without expending a spell slot. Wisdom is my spellcasting ability for this spell. My darkvision extends to 120 feet. [+1 Wisdom]",
	scorestxt : "+1 Wisdom",
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
• Increase your Wisdom by 1, to a maximum of 20.
• You have advantage on Wisdom (Perception) checks that rely on sight.
• You can cast the Detect Magic spell at will, without expending a spell slot.
• Your darkvision has a radius of 120 feet.
*/

// Plasmoid
FeatsList["gloop and gleep of things"] = {
	name : "Gloop and Gleep of Things",
	source : [["RCF"]],
	prerequisite : "Being a Plasmoid",
	prereqeval : function(v) { return CurrentRace.known.indexOf('plasmoid') !== -1; },
	descriptionFull : "Plasmoids are amorphous beings. There's little chance of mistaking a plasmoid for anything else. You gain the following benefits:\n \u2022 Increase one Ability Score score by 1, to a maximum of 20.\n \u2022 When you Shape Self, you can also adjust your height between Medium and Small.\n \u2022 Your pseudopod can be used to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier bludgeoning damage.\n \u2022 You can use your reaction to make yourself resistant to bludgeoning, piercing or slashing damage until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "When I Shape Self, I can adjust between Medium and Small size. I can use my pseudopod for unarmed attacks that deal 1d6 bludgeoning damage. Prof bonus times per long rest, as a Reaction, I gain resistance to bludgeoning, piercing or slashing damage until the start of my next turn. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of my choice",
	action : [['reaction', 'Resistance to B/P/S']],
	extraLimitedFeatures : [{
		name : "Resistance to B/P/S",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /pseudopod/i,
		name : "Pseudopod",
		source : [["RCF"]],
		damage : [1, 6, "bludgeoning"],
	},
	weaponsAdd : ["Pseudopod"],
};
/* Gloop and Gleep of Things
Prerequisite: Plasmoid
Plasmoids are amorphous beings. There's little chance of mistaking a plasmoid for anything else. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• When you ‘Shape Self’, you can also adjust your height between Medium and Small.
• Your pseudopod can be used to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier bludgeoning damage.
• You can use your reaction to make yourself resistant to bludgeoning, piercing, or slashing damage until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
*/
FeatsList["no typical shape"] = {
	name : "No Typical Shape",
	source : [["RCF"]],
	prerequisite : "Being a Plasmoid",
	prereqeval : function(v) { return CurrentRace.known.indexOf('plasmoid') !== -1; },
	descriptionFull : "Plasmoids don't have internal organs of the usual sort. Their bodies are composed of cells, fibers, plasma-like ooze, and clusters of nerves. You gain the following benefits:\n \u2022 Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.",
	description : "Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, Wisdom, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Dexterity, Intelligence, Wisdom, or Charisma"
};
/* No Typical Shape
Prerequisite: Plasmoid
Plasmoids don't have internal organs of the usual sort. Their bodies are composed of cells, fibers, plasma-like ooze, and clusters of nerves. You gain the following benefits:
• Increase your Dexterity, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.
*/
FeatsList["prepseudohensilepod"] = {
	name : "Prepseudohensilepod",
	source : [["RCF"]],
	prerequisite : "Being a Plasmoid",
	prereqeval : function(v) { return CurrentRace.known.indexOf('plasmoid') !== -1; },
	descriptionFull : "Plasmoids are amorphous beings. Their limbs are strong and flexible enough to grasp and manipulate weapons and tools. On occasion, due to some biological anomaly, a plasmoid's pseudopod becomes more pliable upon reaching adulthood (around the age of twenty years). You gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.\n \u2022 You can use your pseudopod to lift, drop, hold, push, or pull an object or a creature; grapple someone; manipulate an object; open an unlocked door or container, stow or retrieve an item from an open container, or pour out the contents of a container. The pseudopod can't activate magic items, or carry more than 10 pounds. Your DM might allow other simple tasks to be added to that list of options.\n \u2022 Your pseudopod can also be used to make unarmed strikes with finesse and reach. When you hit with it, the strike deals 1d4 + your Strength or Dexterity modifier bludgeoning damage.",
	description : "My pseudopod can lift, drop, hold, push, or pull an object (10 lbs max) or creature; grapple; manipulate an object; open unlocked doors/containers, stow/retrieve an item from an open container, or pour out the contents of a container; make 1d4 bludgeoning unarmed attacks with finesse and reach. [+1 Str or Dex]",
	scorestxt : "+1 to one ability score of my choice",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /prepseudohensilepod/i,
		name : "Prepseudohensilepod",
		source : [["RCF"]],
		damage : [1, 4, "bludgeoning"],
		description : "Finesse, reach; ",
	},
	weaponsAdd : ["Prepseudohensilepod"],
};
/* Prepseudohensilepod
Prerequisite: Plasmoid
Plasmoids are amorphous beings. Their limbs are strong and flexible. On occasion, due to some biological anomaly, a plasmoid's pseudopod becomes more pliable upon reaching adulthood (around the age of twenty years). You gain the following benefits:
• Increase your Strength or Dexterity score by 1, to a maximum of 20.
• You can use your pseudopod to lift, drop, hold, push, or pull an object or a creature; grapple someone; manipulate an object; open an unlocked door or container, stow or retrieve an item from an open container, or pour out the contents of a container. The pseudopod can't activate magic items, or carry more than 10 pounds. Your DM might allow other simple tasks to be added to that list of options.
• Your pseudopod can also be used to make unarmed strikes with finesse and reach. When you hit with it, the strike deals 1d4 + your Strength or Dexterity modifier bludgeoning damage.
*/
FeatsList["what have i got in my pocket?"] = {
	name : "What Have I Got In My Pocket?",
	source : [["RCF"]],
	prerequisite : "Being a Plasmoid",
	prereqeval : function(v) { return CurrentRace.known.indexOf('plasmoid') !== -1; },
	description : "I can finish a long rest in 6 hours and remain concious. I have AC 13+Dex when wearing no armor, and can stealth when travelling alone. I learn the Vanish and Wristpocket spells, neither requiring concentration, and cast Wristpocket 1/LR without expending a spell slot. [+1 Int, Wis, or Cha]",
	descriptionFull : "Wanderlust compels some plasmoids to explore the Astral Plane and visit different worlds of the Material Plane. Such an explorer usually travels light. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Light Sleeper. When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.\n \u2022 Light Stepper. While you aren't wearing armor, your base Armor Class is 13 + your Dexterity modifier. When you are traveling alone for an extended period of time (one hour or more), you can move stealthily at a normal pace. (See chapter 8 of the Player's Handbook for information about travel pace.)\n \u2022 You learn the Vanish cantrip, and can cast this spell without requiring concentration. You learn the Wristpocket spell, and can cast this spell without expending a spell slot or requiring concentration. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell normally using spell slots you have. These spells' spellcasting ability is the ability increased by this feat.",
	scorestxt : "+1 Intelligence, Wisdom or Charisma",
	addArmor : "Light Stepper",
	armorOptions : [{
		regExpSearch : /^(?=.*light)(?=.*stepper).*$/i,
		name : "Light Stepper",
		source : [["RCF"]],
		ac : 13,
		affectsWildShape : true
	}],
	spellcastingAbility : [4,5,6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Vanish",
		spells : ["vanish"],
		selection : ["vanish"],
		firstCol : "atwill",
	},{
		name : "Wristpocket",
		spells : ["wristpocket"],
		selection : ["wristpocket"],
		firstCol : "oncelr",
	}],
	spellChanges : {
		"vanish" : {
			duration : "(1 min)",
			changes : "My feat allows me to cast Vanish once per long rest without requiring concentration." },
		"wristpocket" : {
			duration : "(1 h)",
			changes : "My feat allows me to cast Wristpocket once per long rest without requiring a spell slot or concentration, or by using a spell slot as normal." }
	},
	extraLimitedFeatures : [{
		name : "Wristpocket",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 2+"
	}]
};
/* What Have I Got in My Pocket?
Prerequisite: Plasmoid
Wanderlust compels some plasmoids to explore the Astral Plane and visit different worlds of the Material Plane. Such an explorer usually travels light. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
• Light Sleeper. When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious.
• Light Stepper. While you aren't wearing armor, your base Armor Class is 13 + your Dexterity modifier. When you are traveling alone for an extended period of time (one hour or more), you can move stealthily at a normal pace. (See chapter 8 of the Player's Handbook for information about travel pace.)
• You learn the Vanish cantrip and can cast it without requiring concentration. You learn the Wristpocket spell and can cast it without expending a spell slot or requiring concentration. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell normally using spell slots you have of the appropriate level. These spells' spellcasting ability is the ability increased by this feat.
*/

// Reborn
FeatsList["memory of past lives"] = {
	name : "Memory of Past Lives",
	source : [["RCF"]],
	prerequisite : "Being a Reborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('reborn') !== -1; },
	descriptionFull : "You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.\n \u2022 You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your past lives. These proficiencies last until the end of your next long rest.",
	description : "I gain proficiency/expertise with History. When I Help a creature with an ability check, DC 15 History check to add my Prof bonus if it understands me. I recall anything within the past month. At the end of a long rest, I gain proficiency with 1 tool or weapon & 1 skill until the end of my next long rest. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of my choice",
	skills : [["History", "increment"]],
	skillstxt : "Choose any one skill - lasts until the end of my next long rest",
	toolProfs : [["Memory of Past Lives: tool/weapon", 1]],
	action : ["action", "Help action (DC 15 History check)"]
};
/* Memory of Past Lives
Prerequisites: Reborn
You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.
• When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.
• You can accurately recall anything you have seen or heard within the past month. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you draw upon the reservoir of experiences connected to your past lives. These proficiencies last until the end of your next long rest. */

// Satyr
FeatsList["embodiment of revelry"] = {
	name : "Embodiment of Revelry",
	source : ["RCF"],
	prerequisite : "Being a Satyr",
	prereqeval : function(v) { return CurrentRace.known.indexOf('satyr') !== -1; },
	description : "I gain expertise with Performance and Persuasion. While performing, one humanoid must pass Insight vs my Performance or disadv. on Perception/Investigation until I stop performing. With a 1 min non-combat long talk, I can make Persuasion vs its Insight or charmed while within 60 ft and 10 min after [+1 Cha]",
	descriptionFull : "For satyrs, revelry is a way of life. It's the delight in small things: the song of a bird, a warm breeze, the smell of a tasty pie, relaxing by a river in the sunshine. To revel means to forget the constraints of time, to let go of the future and past, and to be wholly in the present moment. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain expertise with the Performance and Persuasion skills, which means your proficiency bonus is doubled for any ability check you make with them.\n \u2022 Enthralling Performance. While performing, you can try to distract one humanoid you can see who can see and hear you. Make a Charisma (Performance) check contested by the humanoid's Wisdom (Insight) check. If your check succeeds, you grab the humanoid's attention enough that it makes Wisdom (Perception) and Intelligence (Investigation) checks with disadvantage until you stop performing.\n \u2022 Engrossing Discourse. If you spend 1 minute talking to someone who can understand what you say, you can make a Charisma (Persuasion) check contested by the creature's Wisdom (Insight) check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is charmed by you as long as it remains within 60 feet of you, and for 10 minutes thereafter.",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Performance", "full"], ["Persuasion", "full"]]
};
/* Embodiment of Revelry
Prerequisite: Satyr
For satyrs, revelry is a way of life. It's the delight in small things. To revel means to forget the constraints of time, to let go of the future and past, and to be wholly in the present moment. You gain the following benefits:
• Increase your Charisma score by 1, to a maximum of 20.
• You gain expertise with the Performance and Persuasion skills, which means your proficiency bonus is doubled for any ability check you make with them.
•  Enthralling Performance. While performing, you can try to distract one humanoid you can see who can see and hear you. Make a Charisma (Performance) check contested by the humanoid's Wisdom (Insight) check. If your check succeeds, you grab the humanoid's attention enough that it makes Wisdom (Perception) and Intelligence (Investigation) checks with disadvantage until you stop performing.
• Engrossing Discourse. If you spend 1 minute talking to someone who can understand what you say, you can make a Charisma (Persuasion) check contested by the creature's Wisdom (Insight) check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is charmed by you as long as it remains within 60 feet of you, and for 10 minutes thereafter.
 */
FeatsList["piper of pan"] = {
	name : "Piper of Pan",
	source : ["RCF"],
	prerequisite : "Being a Satyr",
	prereqeval : function(v) { return CurrentRace.known.indexOf('satyr') !== -1; },
	description : "I gain expertise with Panpipes. (Prof/SR) While I have panpipes, as an action, one creature of my choice within 60 ft that can hear the pipes pass Wis save (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) of or be affected by a charming melody (1 min charmed unless harmed), a frightening strain (frightened 1 min), or a gentle lullaby (unconcious 1 min or damaged/shaken awake). [+1 Int, Wis, Cha]",
	descriptionFull : "A satyr might carry panpipes that it can play to create magical effects. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You gain proficiency with panpipes. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.\n \u2022 Panpipes. While you have panpipes, as an action, you can play the pipes and choose one of the following magical effects: a charming melody, a frightening strain, or a gentle lullaby. You can use your panpipes in this way a number of times equal to your proficiency bonus (but no more than once per turn), and you regain all expended uses when you finish a short rest. \n One creature of your choice within 60 feet that can hear the pipes must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be affected as described below. Other satyrs and creature that can't be charmed are unaffected.\n> Charming Melody. The creature is charmed for 1 minute. If you or any of your companions harms the creature, the effect on it ends immediately.\n> Frightening Strain. The creature is frightened for 1 minute.\n > Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.\n\n An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to these panpipes for the next 24 hours.",
	toolProfs : [["Panpipes", "full"]],
	action : [["action", "Panpipes"]],
	extraLimitedFeatures : [{
		name : "Panpipes",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest",
	}],	
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "Expertise with Panpipes. (Prof/SR) As action, one creature within 60 ft that can hear the pipes pass Wis save (DC 8 + prof + Cha) or be affected by a charming melody (1 min charmed unless harmed), a frightening strain (frightened 1 min), or a gentle lullaby (unconcious 1 min or damaged/shaken awake). [+1 Int" + (typePF ? "" : "elligence") + "]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "Expertise with Panpipes. (Prof/SR) As action, one creature within 60 ft that can hear the pipes pass Wis save (DC 8 + prof + Cha) or be affected by a charming melody (1 min charmed unless harmed), a frightening strain (frightened 1 min), or a gentle lullaby (unconcious 1 min or damaged/shaken awake). [+1 Wis" + (typePF ? "" : "dom") + "]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "Expertise with Panpipes. (Prof/SR) As action, one creature within 60 ft that can hear the pipes pass Wis save (DC 8 + prof + Cha) or be affected by a charming melody (1 min charmed unless harmed), a frightening strain (frightened 1 min), or a gentle lullaby (unconcious 1 min or damaged/shaken awake). [+1 Cha" + (typePF ? "" : "risma") + "]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
/* Piper of Pan
Prerequisite: Satyr
A satyr might carry panpipes that it can play to create magical effects. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You gain proficiency with panpipes. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.
• Panpipes. While you have panpipes, as an action, you can play the pipes and choose one of the following magical effects: a charming melody, a frightening strain, or a gentle lullaby. You can use your panpipes in this way a number of times equal to your proficiency bonus (but no more than once per turn), and you regain all expended uses when you finish a short rest. 
One creature of your choice within 60 feet that can hear the pipes must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) of or be affected as described below. Other satyrs and creature that can't be charmed are unaffected.
> Charming Melody. The creature is charmed for 1 minute. If you or any of your companions harms the creature, the effect on it ends immediately.
> Frightening Strain. The creature is frightened for 1 minute.
> Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.

An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to these panpipes for the next 24 hours. */
FeatsList["thornbearer"] = {
	name : "Thornbearer",
	source : ["RCF"],
	prerequisite : "Being a Satyr",
	prereqeval : function(v) { return CurrentRace.known.indexOf('satyr') !== -1; },
	description : "Proficiency with a shortbow and with a shortbow: +2 Damage, no disadvantage when a hostile within 5 feet, once on my turn when I make a shortbow attack, I get an extra shortbow attack against another creature within 5 feet of the original target, (Prof/LR) I can make a bonus action shortbow attack [+1 Dex]",
	descriptionFull : "When forced to defend their friends and homes, satyr thornbearers are quick to take up their bows and strike against danger. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency with the shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons. Additionally, being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with a shortbow.\n \u2022 Once on each of your turns when you make an attack with a shortbow, you can make another attack against a different creature within 5 feet of the original target.\n \u2022 You can make one attack with a shortbow as a bonus action. You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.",
	scores : [0, 1, 0, 0, 0, 0],
	action : [["bonus action", "Shortbow attack"]],
	extraLimitedFeatures : [{
		name : "Thornbearer (Shortbow attack)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	weaponProfs : [false, false, ["shortbow"]],
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == "shortbow") {
					output.extraDmg += 2;
				}
			},
			'I add +2 to the damage of attacks I make with shortbows.'
		]
	}
};
/* Thornbearer
Prerequisite: Satyr
When forced to defend their friends and homes, satyr thornbearers are quick to take up their bows and strike against danger. You gain the following benefits:
• Increase your Dexterity score by 1, to a maximum of 20.
• You gain proficiency with the shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons. Additionally, being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with a shortbow.
• Once on each of your turns when you make an attack with a shortbow, you can make another attack against a different creature within 5 feet of the original target.
• You can make one attack with a shortbow as a bonus action. You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.
*/

// Sea Elf
FeatsList["sharksbane weapons training"] = {  
	name : "Sharksbane Weapons Training",
	source : [["RCF"]],
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

// Shadar-kai (Elf)
FeatsList["state between life and death"] = {
	name : "State Between Life and Death",
	source : [["RCF"]],
	prerequisite : "Being a Shadar-kai",
	prereqeval : function(v) { return CurrentRace.known.indexOf('shadar-kai') !== -1; },
	description : "I regain 'Blessing of the Raven Queen' after a short rest. When I 'BotRQ' teleport, I choose one of attack/ability/save and get adv on the next chosen roll before the start of my turn. I can expend 'BotRQ' instead of teleporting to be immune to necrotic damage until the end of my next turn or I 'BotRQ' again. [+1 to one]",
	descriptionFull : "Once shadar-kai were Fey like the rest of their elven kin; now they exist in a state between life and death, thanks to being transformed by the Shadowfell's grim energy. You gain the following benefits:"+
	"\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n \u2022 You regain all expended uses of your 'Blessing of the Raven Queen' feature when you finish a short rest."+
	"\n \u2022 When you teleport using 'Blessing of the Raven Queen', choose one of attack roll, ability check, or saving throw. You have advantage on the next chosen roll you make before the start of your next turn."+
	"\n \u2022 As a bonus action, you may choose to expend a use of 'Blessing of the Raven Queen' and instead of teleporting, you have immunity to necrotic damage. This lasts until the end of your next turn or if you use 'Blessing of the Raven Queen' again.",
	scorestxt : "+1 to one ability score of my choice",
	changeeval : function(prefix, lvl) {
        if (CurrentRace.name == RaceList["multiverse shadar-kai"].name && CurrentRace.features["blessing of the raven queen"] && CurrentRace.level != 0) {
        CurrentRace.features["blessing of the raven queen"].recovery = "short rest";
        ApplyFeatureAttributes("race", [CurrentRace.known, "blessing of the raven queen"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}, 
	removeeval : function(prefix, lvl) {
		if (CurrentRace.name == RaceList["multiverse shadar-kai"].name && CurrentRace.features["blessing of the raven queen"]) {
		CurrentRace.features["blessing of the raven queen"].recovery = "long rest";
		ApplyFeatureAttributes("race", [CurrentRace.known, "blessing of the raven queen"], [CurrentRace.level, CurrentRace.level, true], false, false);
	}}
};
/* State Between Life and Death
Prerequisite: Shadar-kai
Once shadar-kai were Fey like the rest of their elven kin; now they exist in a state between life and death, thanks to being transformed by the Shadowfell's grim energy. You gain the following benefits:
• Increase one ability score of your choice by 1, to a maximum of 20.
• You regain all expended uses of your 'Blessing of the Raven Queen' feature when you finish a short rest. 
• When you teleport using 'Blessing of the Raven Queen', choose one of attack roll, ability check, or saving throw. You have advantage on the next chosen roll you make before the start of your next turn.
• As a bonus action, you may choose to expend a use of 'Blessing of the Raven Queen' and instead of teleporting, you have immunity to necrotic damage. This lasts until the end of your next turn or if you use 'Blessing of the Raven Queen' again. */

// Shifter
FeatsList["keen animal instincts"] = { // Shifter
	name : "Keen Animal Instincts",
	source : [["RCF"]],
	prerequisite : "Being a Shifter",
	prereqeval : function(v) { return CurrentRace.known.indexOf('shifter') !== -1; },
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
FeatsList["beast blood"] = { // Shifter (not Beasthide)
	name : "Beast Blood",
	source : [["RCF"]],
	prerequisite : "Being a Shifter",
	prereqeval : function(v) { return CurrentRace.known.indexOf('shifter') !== -1; },
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Beast Skin.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Beasthide Shifting Feature trait (You gain 1d6 additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class.) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4  minutes longer and I gain Beasthide benefits (+1d6 additional THP, +1 bonus to your Armor Class). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
	usages : "Shift",
	recovery : "Shift",
	additional : "+1d6 THP, +1d4 min",
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : [["RCF"]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : [["Retractable Claws"]],
};
/* Beast Blood
Prerequisite: Shifter (not Beasthide)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Beast Skin.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Swiftstride Shifting Feature trait in addition to your own: (You gain 1d6 additional temporary hit points. While Shifted, you have a +1 bonus to your Armor Class.) */
FeatsList["long blood"] = { // Shifter (not Longtooth)
	name : "Long Blood",
	source : [["RCF"]],
	prerequisite : "Being a Shifter",
	prereqeval : function(v) { return CurrentRace.known.indexOf('shifter') !== -1; },
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Long Bite.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Longtooth Shifting Feature trait (When you Shift and as a Bonus action on your other turns while Shifted, you can use your elongated fangs to make an unarmed strike, dealing 1d6 piercing damage) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4  minutes longer and I gain Longtooth benefits (Bonus action Bite for 1d6 piercing). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
	usages : "Shift",
	recovery : "Shift",
	additional : "+1d4 min",
	action : ["bonus action", "Longtooth Fangs (while Shifted)"],
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : [["RCF"]],
		damage : [1, 6, "slashing"]
	},{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth Fangs",
		source : [["MotM", 32]],
		damage : [1, 6, "piercing"],
		description : "Only while shifted; One attack as Bonus action",
	}],
	weaponsAdd : [["Retractable Claws"], ["Longtooth Fangs"]],
};
/* Long Blood
Prerequisite: Shifter (not Longtooth)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Long Bite.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Longstrider Shifting Feature trait in addition to your own: (When you Shift and as a Bonus action on your other turns while Shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.) */
FeatsList["swift blood"] = { // Shifter (not Swiftstride)
	name : "Swift Blood",
	source : [["RCF"]],
	prerequisite : "Being a Shifter",
	prereqeval : function(v) { return CurrentRace.known.indexOf('shifter') !== -1; },
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Swift Light.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Swiftstride Shifting Feature trait (Your walking speed increases by 10 feet, and you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4  minutes longer and I gain Swiftstride benefits (+10 ft walking speed, 10 ft reactive movement). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
	usages : "Shift",
	recovery : "Shift",
	additional : "+1d4 min",
	action : [['reaction', 'Reactive Stride (while Shifted)']],
	speed : {
			walk : { spd : 30, enc : 20 },
			climb : { spd : "walk", enc : 0 },
	},				
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*claws?)(?=.*retractable).*$/i,
		name : "Retractable Claws",
		source : [["RCF"]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Retractable Claws"],
};
/* Swift Blood
Prerequisite: Shifter (not Swiftstride)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Swift Light.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Swiftstride Shifting Feature trait in addition to your own: (Your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks.) */
FeatsList["wild blood"] = { // Shifter (not Wildhunt)
	name : "Wild Blood",
	source : [["RCF"]],
	prerequisite : "Being a Shifter",
	prereqeval : function(v) { return CurrentRace.known.indexOf('shifter') !== -1; },
	descriptionFull : "An ancestor earned a Blessing connected to the 'Sacred Moon of the Wild Hunt.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.\n \u2022 While you are Shifted, you gain the benefits of the Wildhunt Shifting Feature trait (You have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're incapacitated) in addition to your own.",
	description : "My claws give me a climbing speed and I can make unarmed strikes dealing 1d6 slashing damage. My 'Shift' lasts 1d4+1 minutes and I gain Wildhunt benefits (Adv on Wisdom checks, no creature within 30 ft can make an attack roll with advantage against me unless I'm incapacitated). [+1 Str, Dex, Wis, or Cha]",
	scorestxt : "+1 Strength, Dexterity, Wisdom, or Charisma",
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
		source : [["RCF"]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Retractable Claws"],
};
/* Wild Blood
Prerequisite: Shifter (not Wildhunt)
An ancestor earned a Blessing connected to the 'Sacred Moon of the Wild Hunt.' The great power of that Blessing passes through the generations of your line. You gain the following benefits:
• Increase your Strength, Dexterity, Wisdom, or Charisma score by 1, to a maximum of 20.
• Your body changes and grows Retractable Claws. You have a climbing speed equal to your walking speed and you can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• When you use your Shifting trait, your transformation lasts longer. Add 1d4 minutes to the duration.
• While you are Shifted, you gain the benefits of the Wildhunt Shifting Feature trait in addition to your own: (You have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're incapacitated.) */

// Small sized Races
FeatsList["mighty small"] = { 
	name : "Mighty Small",
	source : [["RCF"]],
	prerequisite : "Being a small race",
	prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices === 4; },
	descriptionFull : "You are uncommonly hardy for your race. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You do not have disadvantage on attack rolls with weapons with the heavy property.\n \u2022 Increase running long/high jump distance by 10 feet if wielding heavy property weapon with both hands.",
	description : "My walking speed increases by 5 ft. I do not have disadvantage on attack rolls with heavy weapons. I increase running jumps by 10 ft while wielding a heavy weapon. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
/* Mighty Small
Prerequisite : Being a small race
You are uncommonly hardy for your race. You gain the following benefits:
• Increase your Strength or Constitution score by 1, to a maximum of 20. 
• Increase your walking speed by 5 feet.
• You do not have disadvantage on attack rolls with weapons with the heavy property.
• Increase running long and high jump distances by 10 feet if you are wielding heavy property weapon with both hands.
*/

// Tabaxi
FeatsList["feline graceful accuracy"] = { 
	name : "Feline Graceful Accuracy",
	source : [["RCF"]],
	prerequisite : "Being a Tabaxi",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tabaxi') !== -1; },
	description : "My walking speed increases by 5 ft. Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, or Charisma]",
	scorestxt : "+1 Dexterity, Intelligence, or Charisma",
	speed : { walk : {spd : "+5", enc : "+5" } }
};

// Thri-Kreen
FeatsList["evolved thri-kreen physiology"] = {
	name : "Evolved Thri-kreen Physiology",
	source : [["RCF"]],
	prerequisite : "Being a Thri-kreen",
	prereqeval : function(v) { return CurrentRace.known.indexOf('thri-kreen') !== -1; },
	descriptionFull : "Some of your inherent Thri-kreen traits have become augmented. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 Kreen Claws. You grow retractable claws which you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 Leap. As a bonus action, you can leap up to 20 feet in any direction. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a short rest.",
	description : "I can use my retractable claws to make unarmed strikes dealing 1d6 slashing damage. As a bonus action if my speed isn't 0, I can leap up to 20 ft in any direction. I can do this my Prof Bonus times per short rest. [+1 Strength, Dexterity, or Constitution]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	weaponOptions : {
	baseWeapon : "unarmed strike",
	regExpSearch : /^(?=.*(kreen))(?=.*claws).*$/i,
	name : "Kreen Claws",
	source : [["RCF"]],
	damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Kreen Claws"],
	action : [["bonus action", "Leap (up to 20 ft)"]],
	extraLimitedFeatures : [{
		name : "Leap (up to 20 feet)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "short rest",
	}],
};
/* Evolved Thri-kreen Physiology
Prerequisite: Thri-kreen
Some of your inherent Kreen traits have become augmented. You gain the following benefits:
• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
• Kreen Claws. You grow retractable claws which you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.
• Leap. As a bonus action, you can leap up to 20 feet in any direction. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a short rest. */
FeatsList["many arms, one shield"] = {
	name : "Many Arms, One Shield",
	source : [["RCF"]],
	prerequisite : "Being a Thri-kreen",
	prereqeval : function(v) { return CurrentRace.known.indexOf('thri-kreen') !== -1; },
	descriptionFull : "Thri-kreen have six limbs: two for walking and four for use as arms, ending in four-fingered claw-like hands capable of using tools and weapons. You've trained in the effective use of shields using your multiple arms. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 You gain proficiency with shields.\n \u2022 In combat, you can don or doff a shield as the free object interaction on your turn.\n \u2022 If you have the Spellcasting or Pact Magic feature, you can use a shield as a spellcasting focus.",
	description : "I gain proficiency with shields. I can don or doff a shield as the free object interaction on my turn. If I have the Spellcasting or Pact Magic feature, I can use my shield as a spellcasting focus. [+1 Strength, Dexterity, or Constitution]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	armorProfs : [false, false, false, true]
};
/* Many Arms, One Shield
Prerequisite: Thri-kreen
Thri-kreen have six limbs: two for walking and four for use as arms, ending in four-fingered claw-like hands capable of using tools and weapons. You've trained in the effective use of shields using your multiple arms. You gain the following benefits:
• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
• You gain proficiency with shields.
• In combat, you can don or doff a shield as the free object interaction on your turn.
• If you have the Spellcasting or Pact Magic feature, you can use a shield as a spellcasting focus. */
FeatsList["thri-kreen psionics"] = {
	name : "Thri-kreen Psionics",
	source : [["RCF"]],
	prerequisite : "Being a Thri-kreen",
	prereqeval : function(v) { return CurrentRace.known.indexOf('thri-kreen') !== -1; },
	descriptionFull : "A few thri-kreen manifest greater psionic abilities. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this feat. You also learn the Blur and Magic Weapon spells. You can cast each of these spells without expending a spell slot. None of these spells require spell components when you cast them in this manner. Once you cast Blur or Magic Weapon in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I know the Mage Hand cantrip, and the hand is invisible. I also learn Blur and Magic Weapon. None of these require spell components. I can cast Blur and Magic Weapon without expending a spell slot once per long rest or by using spell slots of the appropriate level. [+1 Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	spellcastingBonus : [{
		name : "Thri-kreen Psionics",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	}, {
		name : "Thri-kreen Psionics",
		spells : ["blur", "magic weapon"],
		selection : ["blur", "magic weapon"],
		firstCol : 'oncelr',
		times : 2,
	}],
	spellChanges : {
		"mage hand" : {
			components : "",
			description : "Create invisible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple",
			changes : "Using Thri-kreen Psionics, I can cast Mage Hand without requiring components and the spectral hand is invisible."
		},
		"blur" : {
			components : SpellsList["blur"].components + "*",
			compMaterial : SpellsList["blur"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Thri-kreen Psionics trait.",
			changes : "Using Thri-kreen Psionics, I can cast Blur once per long rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components." 
		},
		"magic weapon" : {
			components : SpellsList["magic weapon"].components + "*",
			compMaterial : SpellsList["magic weapon"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Thri-kreen Psionics trait.",
			changes : "Using Thri-kreen Psionics, I can cast Magic Weapon once per long rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components."
		},
	},
	extraLimitedFeatures : [{
		name : "Blur",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 2+"
	}, {
		name : "Magic Weapon",
		usages : 1,
		recovery: "long rest",
		altResource : "SS 2+"
	}],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I know the Mage Hand cantrip, and the hand is invisible. I also learn Blur and Magic Weapon. None of these require spell components. I can cast Blur and Magic Weapon without expending a spell slot once per long rest or by using spell slots of the appropriate level. The spellcasting ability is Intelligence.",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I know the Mage Hand cantrip, and the hand is invisible. I also learn Blur and Magic Weapon. None of these require spell components. I can cast Blur and Magic Weapon without expending a spell slot once per long rest or by using spell slots of the appropriate level. The spellcasting ability is Wisdom.",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I know the Mage Hand cantrip, and the hand is invisible. I also learn Blur and Magic Weapon. None of these require spell components. I can cast Blur and Magic Weapon without expending a spell slot once per long rest or by using spell slots of the appropriate level. The spellcasting ability is Charisma.",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	},
};
/* Thri-kreen Psionics
Prerequisite: Thri-kreen
A few thri-kreen manifest greater psionic abilities. You gain the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this feat. You also learn the Blur and Magic Weapon spells. You can cast each of these spells without expending a spell slot. None of these spells require spell components when you cast them in this manner. Once you cast Blur or Magic Weapon in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat. */

// Tiefling
FeatsList["feral barbed skin"] = { 
	name : "Feral Barbed Skin",
	source : [["RCF"]],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	description : "I have scaly skin, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. As a bonus action, I can protrude/retract small barbs from my skin. When protruding, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling/are grappling me. [+1 Dex, Con, or Cha]",
	action: ["bonus action", "Barbs (protrude/extract)"],
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	addarmor : "Feral Barbed Skin",
	armorOptions : {
		regExpSearch : /^(?=.*feral)(?=.*barbed).*$/i,
		name : "Feral Barbed Skin",
		source : [["RCF"]],
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
	source : [["RCF"]],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	description : "When I cast an acid damage spell, I can reroll any 1 on acid damage dice once. I then sheathe myself in acidic fumes until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 acid damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
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
	source : [["RCF"]],
	prerequisite : "Being a Triton",
	prereqeval : function(v) { return CurrentRace.known.indexOf('triton') !== -1; },
	description : "I count as one size larger when determining my carrying capacity and push/drag/lift weight. Once per long rest, as an a bonus action, I transform. For the next minute, I have resistance to acid/poison damage, and my weapon attacks deal my proficiency modifier additional damage. [+1 Str, Con or Cha]",
	descriptionFull : "The ocean has imbued you with additional strength, granting you unparalleled might in marine combat. You gain the following benefits:\n \u2022 Increase your Strength, Constitution or Charisma score by 1, to a maximum of 20.\n \u2022 As an a bonus action, you imbue yourself with power, transforming into a champion of the ocean. For the next minute, you have resistance to acid and poison damage, and your weapon attacks deal additional damage equal to your proficiency modifier. Once you use this feature, you can't use it again until you finish a long rest.",
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "long rest",
	scorestxt : "+1 Strength, Constitution or Charisma",
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
	source : [["RCF"]],
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
FeatsList["integration upgrade"] = {
	name : "Integration Upgrade",
	source : [["RCF"]],
	prerequisite : "Being a Warforged",
	prereqeval : function(v) { return CurrentRace.known.indexOf('warforged') !== -1; },
	descriptionFull : "A warforged's body has built-in defensive layers. Your integration has an upgraded form, giving you the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 Your upgrades improve your innate defensive properties. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier (this already includes the Integrated Protection Warforged trait). You can use a shield and still gain this benefit.\n \u2022 Integrated Tool. Choose one tool you're proficient with. This tool is integrated into your body, and you double your proficiency bonus for any ability checks you make with it. You must have your hands free to use this integrated tool.",
	description : "My integration is upgraded, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. Integrated Tool: I have expertise with one tool and it is integrated into my body. [+1 Str, Dex, or Con]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	skillstxt : "Expertise with any one tool I'm proficient with",
	armorOptions : {
		regExpSearch : /^(?=.*(integration))(?=.*(upgrade|improvement)).*$/i,
		name : "Integration Upgrade",
		source : [["RCF"]],
		ac : 12
	},
	armorAdd : "Integration Upgrade"
};
/* Integration Upgrade
Prerequisite: Warforged
A warforged's body has built-in defensive layers. Your integration has an upgraded form, giving you the following benefits:
• Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20.
• Your upgrades improve your innate defensive properties. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier (this already includes the Integrated Protection Warforged trait). You can use a shield and still gain this benefit.
•  Integrated Tool. Choose one tool you're proficient with. This tool is integrated into your body, and you double your proficiency bonus for any ability checks you make with it. You must have your hands free to use this integrated tool. */
FeatsList["living wood construction"] = {
	name : "Living Wood Construction",
	source : [["RCF"]],
	prerequisite : "Being a Warforged",
	prereqeval : function(v) { return CurrentRace.known.indexOf('warforged') !== -1; },
	descriptionFull : "Your creator used wood from a primeval forest as part of your construction. It still flows with nature's power, granting you the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 Your body has a rough, bark-like composition. When you aren't using incorporated armor, you have a base AC of 17, including your Warforged Integrated Protection +1 AC bonus. Your Dexterity modifier doesn't affect this number, but if you are using a shield, you can apply the shield's bonus as normal.\n \u2022 Living Wood. You learn the Druidcraft cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this feat). At the end of a long rest, 1d4 berries, as from the Goodberry spell, sprout from your skin.",
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
		source : [["RCF"]],
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
• Living Wood. You learn the Druidcraft cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this feat). At the end of a long rest, 1d4 berries, as from the Goodberry spell, sprout from your skin. */
FeatsList["pactboon construction"] = {
	name : "Pactboon Construction",
	source : [["RCF"]],
	prerequisite : "Being a Warforged",
	prereqeval : function(v) { return CurrentRace.known.indexOf('warforged') !== -1; },
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

// Yaun-Ti
FeatsList["forked tongue"] = { // Yuan-ti Pureblood
	name : "Forked Tongue",
	source : [["RCF"]],
	prerequisite : "Being a Yuan-ti Pureblood",
	prereqeval : function(v) { return CurrentRace.known.indexOf('yuan-ti pureblood') !== -1; },
	descriptionFull : "You have unlocked more of your serpentfolk heritage. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You have the ability to communicate in a limited manner with snakes and serpents. They can understand the meaning of your words, though you have no special ability to understand them in return.\n \u2022 You gain proficiency in the Deception skill, and you add double your proficiency bonus to checks you make with it.\n \u2022 As a Bonus action, you can attempt to deceive one creature you can see within 30 feet that can hear and understand you. Creatures that can't be charmed are immune to this effect. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 24 hours.",
	description : "Snakes understand me. I gain expertise with Deception. As a Bonus action, a creature I can see within 30 ft that can hear and understand me makes its Insight vs. my Deception or I gain adv. on attacks and don't provoke opportunity attacks until the end of my next turn. 24 hour immunity if it succeeds. [+1 Cha]",
	action : [["bonus action", " (Deceive)"]],
	languageProfs : ["Forked Tongue"],
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "full"]]
};
/* Forked Tongue
Prerequisite: Yuan-Ti Pureblood
You have unlocked more of your serpentfolk heritage, allowing you to develop your conversational skill to better deceive others. You gain the following benefits:
• Increase your Charisma score by 1, to a maximum of 20.
• You have the ability to communicate in a limited manner with snakes and serpents. They can understand the meaning of your words, though you have no special ability to understand them in return.
• You gain proficiency in the Deception skill, and you add double your proficiency bonus to checks you make with it.
• As a Bonus action, you can attempt to deceive one creature you can see within 30 feet that can hear and understand you. Creatures that can't be charmed are immune to this effect. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 24 hours. */

/* -------------------------------------------------------------- */

SourceList.ERF={
	name : "Xanathar’s Guide to Everything: Expanded Racial Feats",
	abbreviation : "ERF",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/226194/Expanded-Racial-Feats",
	date : "2017/11/10"
};

FeatsList["sky warden-xgteerf"] = {
	name : "Sky Warden",
	source : ["ERF", 2],
	prerequisite : "Being an Aarakocra",
	prereqeval : "CurrentRace.known.indexOf('aarakocra') !== -1",
	description : "I gain proficiency in Perception. I can double my proficiency bonus on Perception checks that rely on sight. Once per turn, if I dive 30 ft straight at a target and hit with a melee attack, the attack deals an additional 1d6 damage. [+1 Dexterity or Wisdom]",
	descriptionFull : "You are trained for both scouting the skies and aerial combat. You gain the following benefits:" + "\n " + "\u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20." + "\n " + "\u2022 You gain proficiency in the Perception skill if you don’t already have it. You add double your proficiency bonus to Perception checks that rely on sight." + "\n " + "\u2022 Once per turn, if you are flying and dive at least 30 feet straight toward a target and then hit it with a melee weapon attack, the attack deals an extra 1d6 damage to the target.",
	improvements : "Sky Warden (feat): +1 Dexterity or Wisdom;",
	skills : [["Perception"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isMeleeWeapon) {
					fields.Description += (fields.Description ? '; ' : '') + 'Extra 1d6 damage after straight 30 ft dive';
				}
			}, ""]
	}
};

FeatsList["angelic protection-xgteerf"] = {
	name : "Angelic Protection",
	source : ["ERF", 1],
	prerequisite : "Being an Aasimar",
	prereqeval : "CurrentRace.known.indexOf('aasimar') !== -1",
	description : "I have advantage on saving throws against spells and other magical effects.",
	descriptionFull : "The innate resistance to magic that angels possess extends to you. You have advantage on saving throws against spells and other magical effects.",
	savetxt : { text : ["Adv. on saves vs. magic"] }
};

FeatsList["well-rested-xgteerf"] = {
	name : "Well-Rested",
	source : ["ERF", 3],
	prerequisite : "Being a Bugbear",
	prereqeval : "CurrentRace.known.indexOf('bugbear') !== -1",
	description : "When I spend 1 or more hit dice during a short rest, I can regain an extra 1d6 hit points. When I finish a long rest, I gain inspiration. [+1 Strength or Dexterity]",
	descriptionFull : "Increase your Strength or Dexterity score by 1, to a maximum of 20." + "\n " + "\u2022 Whenever you spend one or more hit dice during a short rest, you can regain an extra 1d6 hit points." + "\n " + "\u2022 At the end of a long rest, you gain inspiration (described in chapter 4 of the Player’s Handbook).",
	improvements : "Well-Rested (feat): +1 Strength or Dexterity;"
};

FeatsList["firbolg beast magic-xgteerf"] = {
	name : "Firbolg Beast Magic",
	source : ["ERF", 1],
	prerequisite : "Being a Firbolg",
	prereqeval : "CurrentRace.known.indexOf('firbolg') !== -1",
	description : "I can cast Speak with Animals at will, without expending a spell slot. I can also cast Animal Friendship and Beast Sense without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	descriptionFull : "Your connection to animals deepens. You learn the speak with animals spell and can cast it at will, without expending a spell slot. You also learn the animal friendship and beast sense spells, each of which you can cast once without expending a spell slot. You regain the ability to cast these two spells in this way when you finish a long rest. Wisdom is your spellcasting ability for all three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 4,
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		firstCol : 'atwill'
	}, {
		name : "Once per long rest",
		spellcastingAbility : 4,
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spellcastingAbility : 4,
		spells : ["beast sense"],
		selection : ["beast sense"],
		firstCol : 'oncelr'
	}]
};

FeatsList["djinn heritage-xgteerf"] = {
	name : "Djiin Heritage",
	source : ["ERF", 1],
	prerequisite : "Being an Air Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('air') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. Constitution is my spellcasting ability for this spell. I have resistance to lightning and thunder damage. [+1 Dexterity or Constitution]",
	descriptionFull : "You manifest more of the magical power of your djinn heritage. You gain the following benefits:" + "\n " + "\u2022 Increase your Dexterity or Constitution score by 1, to a maximum of 20." + "\n " + "\u2022 You learn the detect magic spell and can cast it at will, without expending a spell slot." + "\n " + "\u2022 You have resistance to lightning and thunder damage.",
	improvements : "Djiin Heritage (feat): +1 Dexterity or Constitution;",
	dmgres : ["Lightning", "Thunder"],
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 3,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}]
};

FeatsList["dao heritage-xgteerf"] = {
	name : "Dao Heritage",
	source : ["ERF", 1],
	prerequisite : "Being an Earth Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('earth') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. Constitution is my spellcasting ability for this spell. Without armor, my AC is 13 + Dexterity modifier + shield [+1 Strength or Constitution]",
	descriptionFull : "You manifest more of the magical power of your dao heritage. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Constitution score by 1, to a maximum of 20." + "\n " + "\u2022 You learn the detect magic spell and can cast it at will, without expending a spell slot." + "\n " + "\u2022 You gain natural armor. While you aren’t wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.",
	improvements : "Dao Heritage (feat): +1 Strength or Constitution;",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 3,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}],
	armorOptions : {
		regExpSearch : /natural armor/i,
		name : "Natural Armor",
		source : ["ERF", 1],
		ac : 13
	},
	armorAdd : "Natural Armor"
};

FeatsList["efreet heritage-xgteerf"] = {
	name : "Efreet Heritage",
	source : ["ERF", 1],
	prerequisite : "Being a Fire Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('fire') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. Constitution is my spellcasting ability for this spell. My darkvision has a radius of 120 ft. [+1 Constitution or Intelligence]",
	descriptionFull : "You manifest more of the magical power of your efreet heritage. You gain the following benefits:" + "\n " + "\u2022 Increase your Constitution or Intelligence score by 1, to a maximum of 20." + "\n " + "\u2022 You learn the detect magic spell and can cast it at will, without expending a spell slot." + "\n " + "\u2022 Your darkvision has a radius of 120 feet.",
	improvements : "Efreet Heritage (feat): +1 Constitution or Intelligence;",
	vision : [["Darkvision", 120]],
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 3,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}]
};

FeatsList["marid heritage-xgteerf"] = {
	name : "Marid Heritage",
	source : ["ERF", 2],
	prerequisite : "Being a Water Genasi",
	prereqeval : "CurrentRace.known.indexOf('genasi') !== -1 && CurrentRace.known.indexOf('water') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. Constitution is my spellcasting ability for this spell. I have resistance to cold damage. [+1 Constitution or Wisdom]",
	descriptionFull : "You manifest more of the magical power of your marid heritage. You gain the following benefits:" + "\n " + "\u2022 Increase your Constitution or Wisdom score by 1, to a maximum of 20." + "\n " + "\u2022 You learn the detect magic spell and can cast it at will, without expending a spell slot." + "\n " + "\u2022 You have resistance to cold damage.",
	improvements : "Marid Heritage (feat): +1 Constitution or Wisdom;",
	dmgres : ["Cold"],
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 3,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}]
};

FeatsList["like a boss-xgteerf"] = {
	name : "Like a Boss",
	source : ["ERF", 1],
	prerequisite : "Being a Goblin",
	prereqeval : "CurrentRace.known.indexOf('goblin') !== -1 && CurrentRace.known.indexOf('hobgoblin') == -1",
	description : "Once per short rest, I can use my reaction to impose disadvantage on a creature's attack roll made against me. To do so, I must see the attack and another creature must be within 5 ft of me. [+1 Dexterity]",
	descriptionFull : "You are accustomed to using others to avoid being attacked. You gain the following benefits:" + "\n " + "\u2022 Increase your Dexterity score by 1, to a maximum of 20." + "\n " + "\u2022 When a creature you can see targets you with an attack and another creature is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. Once you use this ability, you can’t do so again until you finish a short or long rest.",
	scores : [0, 1, 0, 0, 0, 0],
	action : ["reaction", ""],
	usages : 1,
	recovery : "short rest"
};

FeatsList["mountain's endurance-xgteerf"] = {
	name : "Mountain's Endurance",
	source : ["ERF", 2],
	prerequisite : "Being a Goliath",
	prereqeval : "CurrentRace.known.indexOf('goliath') !== -1",
	description : "When I use Stone's Endurance, I can instead gain resistance to one type of damage from the triggering attack, instead of rolling. This resistance lasts until the start of my next turn. [+1 Strength or Constitution]",
	descriptionFull : "Your ability to shrug off some injuries is legendary, even for your race. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Constitution score by 1, to a maximum of 20." + "\n " + "\u2022 When you use your Stone’s Endurance trait as a reaction to reduce damage, instead of rolling a d12 and adding your Constitution modifier, you can choose to gain resistance to the triggering attack’s damage type until the start of your next turn. If the triggering attack deals more than one type of damage, choose one. As normal, after you use this trait, you can’t use it again until you finish a short or long rest.",
	improvements : "Mountain's Endurance (feat): +1 Strength or Constitution;",
	action : ["reaction", " (with Stone's Endurance)"],
	usages : 1,
	recovery : "short rest"
};

FeatsList["uphold the legion-xgteerf"] = {
	name : "Uphold the Legion",
	source : ["ERF", 3],
	prerequisite : "Being a Hobgoblin",
	prereqeval : "CurrentRace.known.indexOf('hobgoblin') !== -1",
	description : "Once per combat I can deal an additional 2d6 with a weapon attack, if an ally is within 5 ft of the target and isn't incapacitated. If an ally fails an attack/ability/save, I can use my reaction to extend the benefit of my Saving Face trait to that ally. [+1 Con or Int]",
	descriptionFull : "You were born for life in the legion. You gain the following benefits:" + "\n " + "\u2022 Increase your Constitution or Intelligence score by 1, to a maximum of 20." + "\n " + "\u2022 You can deal an extra 2d6 damage to a creature you hit with a weapon attack if that creature is within 5 feet of an ally that isn’t incapacitated. You can use this trait only once per combat." + "\n " + "\u2022 You can extend the benefit of your Saving Face trait to an ally. As a reaction, if an ally misses with an attack roll or fails an ability check or a saving throw, you can grant a bonus to the roll equal to the number of allies your ally can see within 30 feet (including you, maximum bonus of +5). As normal, once you use this trait, you can’t use it again until you finish a short or long rest.",
	improvements : "Uphold the Legion (feat): +1 Constitution or Intelligence;",
	action : ["reaction", ""],
	limfeaname : "Uphold the Legion (extra 2d6 damage)",
	minlevel : 1,
	usages : 1,
	recovery : "Combat",
};

FeatsList["master of mimicry-xgteerf"] = {
	name : "Master of Mimicry",
	source : ["ERF", 2],
	prerequisite : "Being a Kenku",
	prereqeval : "CurrentRace.known.indexOf('kenku') !== -1",
	description : "Once per short rest, I can use my reaction to gain proficiency in a skill/tool I see used by another creature. This proficiency lasts for 1 hr and I can only mimic one proficiency at a time. [+1 Dexterity or Wisdom]",
	descriptionFull : "You have learned to temporarily mimic even the training of others. You gain the following benefits:" + "\n " + "\u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20." + "\n " + "\u2022 Whenever another creature you can see uses a skill or tool, you can use your reaction to gain proficiency in that skill or tool. Proficiencies gained in this way last for 1 hour, and you can only mimic one proficiency at a time. Once you use this ability, you can’t do so again until you finish a short or long rest.",
	improvements : "Master of Mimicry (feat): +1 Dexterity or Wisdom;",
	action : ["reaction", ""],
	usages : 1,
	recovery : "short rest"
};

FeatsList["urd wings-xgteerf"] = {
	name : "Urd Wings",
	source : ["ERF", 3],
	prerequisite : "Being a Kobold",
	prereqeval : "CurrentRace.known.indexOf('kobold') !== -1",
	description : "I grow leathery wings, granting a flying speed of 30 ft. I can only fly with these wings while unarmored or wearing light armor. [+1 Dexterity]",
	descriptionFull : "You manifest leathery wings, transforming into an urd. You gain the following benefits:" + "\n " + "\u2022 Increase your Dexterity score by 1, to a max-imum of 20." + "\n " + "\u2022 You gain a flying speed of 30 feet. To use this speed, you can't be wearing medium or heavy armor.",
	scores : [0, 1, 0, 0, 0, 0],
	speed : { fly : { spd : 30, enc : 0 } }
};

FeatsList["touch of sess'inek-xgteerf"] = {
	name : "Touch of Sess’inek",
	source : ["ERF", 2],
	prerequisite : "Being a Lizardfolk",
	prereqeval : "CurrentRace.known.indexOf('lizardfolk') !== -1",
	description : "I learn to speak, read, and write Abyssal. I am immune to being frightened. [+1 Constitution or Wisdom]",
	descriptionFull : "You embody the demonic bearing of a lizard king or queen. You gain the following benefits:" + "\n " + "\u2022 Increase your Constitution or Wisdom score by 1, to a maximum of 20." + "\n " + "\u2022 You learn to speak, read, and write Abyssal." + "\n " + "\u2022 You are immune to being frightened.",
	improvements : "Touch of Sess’inek (feat): +1 Constitution or Wisdom;",
	languageProfs : ["Abyssal"],
	savetxt : { immune : ["frightened"] }
};

FeatsList["tanarukk blood-xgteerf"] = {
	name : "Tanarukk Blood",
	source : ["ERF", 2],
	prerequisite : "Being an Orc",
	prereqeval : "CurrentRace.known.indexOf('half-orc') == -1 && CurrentRace.known.indexOf('orc') !== -1",
	description : "I have resistance to fire and poison damage. I gain a bite attack that uses Strength and deals 1d6 piercing damage. [+1 Strength or Constitution]",
	descriptionFull : "Through fell magic or an ancestor, you are touched by the corruptive power of Baphomet. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Constitution score by 1, to a maximum of 20." + "\n " + "\u2022 You have resistance to fire and poison damage." + "\n " + "\u2022 You gain a bite attack as a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
	improvements : "Tanarukk Blood (feat): +1 Strength or Constitution;",
	dmgres : ["Fire", "Poison"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(orc))(?=.*bite).*$/i,
		name : "Orc Bite",
		source : ["ERF", 2],
		damage : [1, 6, "piercing"],
	},
	weaponsAdd : ["Orc Bite"],
};

FeatsList["feline grace-xgteerf"] = {
	name : "Feline Grace",
	source : ["ERF", 1],
	prerequisite : "Being a Tabaxi",
	description : "I can use my Feline Agility trait twice before I must move 0 feet on one of my turns to use the trait again. I can still only use this ability once per turn when I move. I take no damage from falling 20 ft or less, if I'm not incapacitated. [+1 Dexterity]",
	descriptionFull : "Your incredible reflexes and agility further improve. You gain the following benefits:" + "\n " + "\u2022 Increase your Dexterity score by 1, to a maximum of 20." + "\n " + "\u2022 You can use your Feline Agility trait twice before you must move 0 feet on one of your turns to use the trait again. You can still only use this ability once per turn when you move." + "\n " + "\u2022 You don’t take damage from falling 20 feet or less if you aren’t incapacitated.",
	prereqeval : "CurrentRace.known.indexOf('tabaxi') !== -1",
	extraLimitedFeatures : {
		name : "Feline Agility",
		usages : 2,
	},
	scores : [0, 1, 0, 0, 0, 0]
};

FeatsList["tortle protector-xgteerf"] = {
	name : "Tortle Protector",
	source : ["ERF", 2],
	prerequisite : "Being a Tortle",
	prereqeval : "CurrentRace.known.indexOf('tortle') !== -1",
	description : "My natural armor grants a base AC of 18. Once per short rest, when I make a Dex save, I can use my reaction to grant creatures I choose within 5 ft the benefits of half-cover. This lasts while they stay within 5 ft of me until the start of my next turn. [+1 Str or Wis]",
	descriptionFull : "You have mastered using your shell to better protect yourself and others. You gain the following benefits:" + "\n " + "\u2022 Increase your Strength or Wisdom score by 1, to a maximum of 20." + "\n " + "\u2022 Your natural armor trait now provides a base AC of 18. As normal, your Dexterity modifier doesn’t affect this number." + "\n " + "\u2022 As a reaction when you are forced to make a Dexterity saving throw, choose any number of creatures within 5 feet of you. Each chosen creature is considered to have half-cover against any harmful attacks or effects while within 5 feet of you until the start of your next turn. Once you use this ability, you can’t do so again until you’ve finished a short or long rest.",
	improvements : "Tortle Protector (feat): +1 Strength or Wisdom;",
	extraAC : {
		name : "Tortle Protector",
		mod : 1,
		text : "My Natural Armor's base AC is 18."
	},
	usages : 1,
	recovery : "short rest",
	action : ["reaction", ""]
};

FeatsList["triton deep magic-xgteerf"] = {
	name : "Triton Deep Magic",
	source : ["ERF", 3],
	prerequisite : "Being a Triton",
	prereqeval : "CurrentRace.known.indexOf('triton') !== -1",
	description : "I can cast Create or Destroy Water at will, without expending a spell slot. I can also cast Warding Wind and Water Breathing without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	descriptionFull : "You master more of the magic of elemental air and water." + "\n" + "You learn the create or destroy water spell and can cast it as a 1st level spell at will, without expending a spell slot. You also learn warding wind and water breathing, each of which you can cast once without expending a spell slot. You regain the ability to cast those two spells in this way when you finish a long rest. Charisma is your spellcasting ability for all three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["create or destroy water"],
		selection : ["create or destroy water"],
		firstCol : 'atwill'
	}, {
		name : "Once per long rest",
		spellcastingAbility : 6,
		spells : ["warding wind"],
		selection : ["warding wind"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spellcastingAbility : 6,
		spells : ["water breathing"],
		selection : ["water breathing"],
		firstCol : 'oncelr'
	}]
};

FeatsList["serpent form-xgteerf"] = {
	name : "Serpent Form",
	source : ["ERF", 2],
	prerequisite : "Being a Yuan-ti Pureblood",
	prereqeval : "CurrentRace.known.indexOf('yuan-ti pureblood') !== -1",
	description : "As an action, I can polymorph into a medium snake/revert; statistics are the same in both. My equipment isn't transformed. As a snake, I gain a bite attack that deals 1d4 piercing damage. Once per long rest, I can add 2d6 poison damage to a bite attack. [+1 Int or Cha]",
	descriptionFull : "You have unlocked more of your serpentfolk heritage. You gain the following benefits:" + "\n " + "\u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20." + "\n " + "\u2022 You can use an action to polymorph into a Medium snake or back into your true form. Your statistics are the same in each form. Any equipment you are wearing or carrying isn’t transformed. If you die, you stay in your current form." + "\n " + "\u2022 While in snake form, you gain a bite attack as a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. When you hit with a bite attack, you can choose to deal 2d6 additional poison damage to the target. Once you deal this poison damage, you can’t do so again until you finish a long rest.",
	improvements : "Serpent Form (feat): +1 Intelligence or Charisma;",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(serpent|snake))(?=.*bite).*$/i,
		name : "Snake Bite",
		source : ["ERF", 2],
		damage : [1, 4, "piercing"],
		description : "Only in snake form; Once per long rest, deal an additional 2d6 poison damage"
	},
	weaponsAdd : ['Snake Bite'],
	limfeaname : "Serpent Form (2d6 Poison Damage)",
	usages : 1,
	recovery : "long rest",
	action : ["action", " (transform/revert)"]
};
