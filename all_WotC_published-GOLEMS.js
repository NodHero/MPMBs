var iFileName = "all_WotC_published-GOLEMS.js";
RequiredSheetVersion("13.1.0");

// Add 4 Golems from SRD & Monster Manual
CreatureList["clay golem"] = {
	name : "Golem, Clay",
	nameAlt : ["Clay Golem"],
	source : [["SRD", 318], ["M", 168]],
	size : 2, //Large
	type : "Construct",
	alignment : "Unaligned",
	ac : 14,
	hp : 133,
	hd : [14, 10],
	speed : "20 ft",
	scores : [20, 9, 18, 3, 8, 1],
	damage_immunities : "acid, poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 9,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "9",
	proficiencyBonus : 4,
	attacksAction : 2,
	attacks : [{
		name : "Slam",
		ability : 1,
		damage : [2, 10, "bludgeoning"],
		modifiers : [-1, ""],
		range : "Melee (5 ft)",
		description : "Two Slam attacks as an Attack action",
		abilitytodamage : true,
	},{
		name : "Haste (Recharge 5-6)",
		ability : "",
		damage : ["", "", ""],
		range : "Self",
		description : "+2 AC, Adv on Dex saves, and can Slam as a bonus action until the end of its next turn.",
		abilitytodamage : false,
		dc : false,
		tooltip : "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.",
	}],
	traits : [{
		name : "Acid Absorption",
		description : "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
	}, {
		name : "Berserk",
		description : "If the golem starts its turn with 60 hp or fewer, roll a d6. On a 6, golem goes berserk until destroyed or it regains all its hp. While berserk, the golem moves to and attacks nearest seen creature. If no creature near enough, golem attacks an object, with preference for an object smaller than itself."
	}, {
		name : "Immutable Form",
		description : "The golem is immune to any spell or effect that would alter its form."
	}, {
		name : "Magic Resistance",
		description : "The golem has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Magic Weapons",
		description : "The golem's attacks are magical."
	}],
	actions : [{
		name : "Haste (Recharge 5-6)",
		description : "As an Action, the golem magically gains +2 AC, advantage on Dex saves, and can Slam attack as a bonus action until the end of its next turn."
	}],
};
CreatureList["flesh golem"] = {
	name : "Golem, Flesh",
	nameAlt : ["Flesh Golem"],
	source : [["SRD", 319], ["M", 169]],
	size : 2, //Large
	type : "Construct",
	alignment : "Unaligned",
	ac : 9,
	hp : 93,
	hd : [11, 8],
	speed : "30 ft",
	scores : [19, 9, 18, 6, 10, 5],
	damage_immunities : "lightning, poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
		name : "Slam",
		ability : 1,
		damage : [2, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Two Slam attacks as an Attack action",
		abilitytodamage : true,
	}],
	traits : [{
		name : "Aversion of Fire",
		description : "The golem has disadv. on ability checks & attacks until end of its next turn if it takes fire damage."
	}, {
		name : "Berserk",
		description : "If the golem starts its turn with 40 hp or fewer, roll a d6. On a 6, golem goes berserk until destroyed or it regains all its hp. While berserk, the golem moves to and attacks nearest seen creature. If no creature near enough, golem attacks an object, with preference for an object smaller than itself. If within 60 ft of the berserk golem and the golem can hear its creator, the golem's creator can try to calm it by taking an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hp or fewer, the golem might go berserk again."
	}, {
		name : "Lightning Absorption",
		description : "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hp equal to the lightning damage."
	}, {
		name : "Magic Weapons",
		description : "The golem's attacks are magical."
	}],
	features : [{
		name : "Immutable Form",
		description : "The golem is immune to any spell or effect that would alter its form."
	}, {
		name : "Magic Resistance",
		description : "The golem has advantage on saving throws against spells and other magical effects."
	}],
};
CreatureList["iron golem"] = {
	name : "Golem, Iron",
	nameAlt : ["Iron Golem"],
	source : [["SRD", 319], ["M", 170]],
	size : 2, //Large
	type : "Construct",
	alignment : "Unaligned",
	ac : 20,
	hp : 210,
	hd : [20, 10],
	speed : "30 ft",
	scores : [24, 9, 20, 3, 11, 1],
	damage_immunities : "fire, poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Darkvision 120 ft",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "16",
	proficiencyBonus : 5,
	attacksAction : 2,
	attacks : [{
		name : "Slam",
		ability : 1,
		damage : [3, 8, "bludgeoning"],
		modifiers : [1, ""],
		range : "Melee (5 ft)",
		description : "Two melee attacks as an Attack action"
	},{
		name : "Sword",
		ability : 1,
		damage : [3, 10, "slashing"],
		modifiers : [1, ""],
		range : "Melee (10 ft)",
		description : "Two melee attacks as an Attack action"
	},{
		name : "Poison Breath (Recharge 5-6)",
		ability : 3,
		damage : [10, 8, "poison"],
		range : "15-ft cone",
		description : "Hits all in area; Con save, success - half damage",
		abilitytodamage : false,
		dc : true,
		modifiers : [1, ""],
		tooltip : "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
	}],
	traits : [{
		name : "Fire Absorption",
		description : "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt."
	}, {
		name : "Magic Weapons",
		description : "The golem's weapon attacks are magical."
	}],
	actions : [{
		name : "Poison Breath (Recharge 5-6)",
		description : "See attack. The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
	}],
	features : [{
		name : "Immutable Form",
		description : "The golem is immune to any spell or effect that would alter its form."
	}, {
		name : "Magic Resistance",
		description : "The golem has advantage on saving throws against spells and other magical effects."
	}],
};
CreatureList["stone golem"] = {
	name : "Golem, Stone",
	nameAlt : ["Stone Golem"],
	source : [["SRD", 320], ["M", 170]],
	size : 2, //Large
	type : "Construct",
	alignment : "Unaligned",
	ac : 17,
	hp : 178,
	hd : [17, 10],
	speed : "30 ft",
	scores : [22, 9, 20, 3, 11, 1],
	damage_immunities : "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Darkvision 120 ft",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "10",
	proficiencyBonus : 4,
	attacksAction : 2,
	attacks : [{
		name : "Slam",
		ability : 1,
		damage : [3, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Two Slam attacks as an Attack action"
	},{
		name : "Slow (Recharge 5-6)",
		ability : 3,
		damage : ["Wis save", "", "Slowed"],
		range : "sight, 10 ft",
		description : "Wis save or slowed for 1 min (can save at end of each turn)",
		abilitytodamage : false,
		dc : true,
		tooltip : "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	}],
	traits : [{
		name : "Magic Weapons",
		description : "The golem's weapon attacks are magical."
	}],
	actions : [{
		name : "Slow (Recharge 5-6)",
		description : "See attack. The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
	}],
	features : [{
		name : "Immutable Form",
		description : "The golem is immune to any spell or effect that would alter its form."
	}, {
		name : "Magic Resistance",
		description : "The golem has advantage on saving throws against spells and other magical effects."
	}],
};

// Add Golems to 'Manual of Golems' (Manuals can be deleted and Golems will remain)
MagicItemsList["manual of golems"] = {
	name : "Manual of Golems",
	source : [["SRD", 229], ["D", 180]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "H",
	description : "This tome can only be used by a spellcaster with two 5th-level spell slots. Others reading it take 6d6 psychic damage.",
	descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a golem, you must spend a the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands.",
	weight : 5,
	allowDuplicates : true,
	prerequisite : "Requires a spellcaster with at least two 5th-level spell slots",
	prereqeval : function () { return What('SpellSlots.CheckboxesSet.lvl5') >= 2; },
	choices : ["Clay", "Flesh", "Iron", "Stone"],
	"clay" : {
		name : "Manual of Clay Golems",
		sortname : "Manual of Golems, Clay",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a clay golem requires 65000 gp of supplies, 30 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a clay golem requires 65000 gp of supplies, 30 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a clay golem, you must spend 30 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 65,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands.",
		eval : function() {[processAddCompanions(true, "Manual of Clay Golems (item)", [["Clay Golem"]])];
		}
	},
	"flesh" : {
		name : "Manual of Flesh Golems",
		sortname : "Manual of Golems, Flesh",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a flesh golem requires 50000 gp of supplies, 60 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a flesh golem requires 50000 gp of supplies, 60 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a flesh golem, you must spend 60 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 50,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands.",
		eval : function() {[processAddCompanions(true, "Manual of Flesh Golems (item)", [["Flesh Golem"]])];
		}
	},
	"iron" : {
		name : "Manual of Iron Golems",
		sortname : "Manual of Golems, Iron",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a iron golem requires 100000 gp of supplies, 120 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a iron golem requires 100000 gp of supplies, 120 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create an iron golem, you must spend 120 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 100,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands.",
		eval : function() {[processAddCompanions(true, "Manual of Iron Golems (item)", [["Iron Golem"]])];
		}
	},
	"stone" : {
		name : "Manual of Stone Golems",
		sortname : "Manual of Golems, Stone",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a stone golem requires 80000 gp of supplies, 90 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a stone golem requires 80000 gp of supplies, 90 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a stone golem, you must spend 90 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 80,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands.",
		eval : function() {[processAddCompanions(true, "Manual of Stone Golems (item)", [["Stone Golem"]])];
		}
	}
};

// Add Stone Golem & other benefits to read version of 'Nether Scroll of Azumar' (from Candlekeep Mysteries)
MagicItemsList["nether scroll of azumar"] = {
	name : "Nether Scroll of Azumar",
	source : [["CM", 210]],
	type : "scroll",
	rarity : "legendary",
	storyItemAL : true,
	attunement : false,
	description : "After 30 days of studying 8 h/day, I make a DC 25 Int (Arcana) check. If failed, I take 16d10 psychic damage and start anew. On a success, I gain +2 Int to a max of 22, I gain advantage on saves against spells and magical effects, and a stone golem appears within 60 ft that acts as ally. If I die, the golem turns to dust.",
	descriptionFull : "Unlike most scrolls, a Nether Scroll of Azumar is not a consumable magic item. It takes 30 days of concentrated study\u2014at least 8 hours per day\u2014to attempt to understand this scroll. After completing this study, you must make a DC 25 Intelligence (Arcana) check. If this check fails, you take 16d10 psychic damage, and you can attempt the check again after another 30 days of concentrated study."+
	"\n   When you succeed on the check, you gain the following benefits:"+
	"\n   \u2022 Your Intelligence score increases by 2, to a maximum of 22. Once you gain this benefit, you can't use this scroll to increase your Intelligence again."+
	"\n   \u2022 You gain advantage on saving throws against spells and other magical effects."+
	"\n\n   When you gain the scroll's benefits, a stone golem magically appears in an unoccupied space within 60 feet of you and acts as your ally. If you die, the golem turns to dust.",
 	choices : ["Not Read", "Read"],
	"not read" : {
		description : "Nether Scroll of Azumar is not a consumable magic item. After 30 days of studying 8 h/day, I must succeed on a DC 25 Int (Arcana) check. If failed, I take 16d10 psychic damage and start anew. On a success, I gain +2 Int to a max of 22, advantage on saves vs. spells and magical effects, and a stone golem ally.",
	},
	"read" : {
		description : "Nether Scroll of Azumar is not a consumable magic item. After 30 days of studying 8 h/day, I succeeded on a DC 25 Int (Arcana) check. I gain +2 Int to a max of 22, I gain advantage on saves against spells and magical effects, and a stone golem ally appears within 60 ft. If I die, the golem turns to dust.",
		eval : function() {[
		MagicItemsList["manual of bodily health"].applyStatBonus("Nether Scroll of Azumar", "Intelligence", 2) + SetProf("savetxt", true, { adv_vs : ["magic"] }) + processAddCompanions(true, "Nether Scroll of Azumar (item)", [["Stone Golem"]])];
	}}
};

