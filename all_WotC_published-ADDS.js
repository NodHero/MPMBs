var iFileName = "all_WotC_published-ADDS.js";
RequiredSheetVersion("13.1.0");

// Horn of Valhalla
MagicItemsList["horn of valhalla"] = {
	name : "Horn of Valhalla",
	source : [["SRD", 226], ["D", 175]],
	type : "wondrous item",
	description : "As an action once per 7 days, I can blow this horn to summon warrior spirits from Ysgard within 60 ft me. These have the statistics of a berserker and return after 1 hour or when they drop to 0 HP. The number and how they respond depends on the type of material the horn is made of.",
	descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n Four types of Horn of Valhalla are known to exist, each made of a different metal. The horn's type determines how many berserkers answer it summons, as well as the requirement for its use. The DM chooses the horn's type or determines it randomly.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.",
	weight : 2,
	usages : 1,
	recovery : "7 days",
	action : [["action", ""]],
	allowDuplicates : true,
	creaturesAdd : [["Berserker"]],
	creatureOptions : [{
	name : "Berserker",
	source : [["SRD", 392], ["M", 344]],
	eval : function(prefix) {
		Value(prefix + "Comp.Desc.Name", "Warrior Spirits");
	},
	size : 3, //Medium
	type : "Humanoid",
	alignment : "any chaotic alignment",
	ac : 13,
	hp : 67,
	hd : [9, 8],
	speed : "30 ft",
	scores : [16, 12, 17, 9, 11, 9],
	senses : "",
	passivePerception : 10,
	languages : "any one language (usually Common)",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Greataxe",
		ability : 1,
		damage : [1, 12, "slashing"],
		range : "Melee (5 ft)",
		description : "Heavy, two-handed"
	}],
	traits : [{
		name : "Reckless",
		description : "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.",
		}],
	features : [{
		name : "Summoned",
		description : "The Warrior Spirits are friendly to you and your companions and follow your commands. They return to Ysgard after 1 hour or when they drop to 0 hit points.",
		}],
	}],
	choices : ["Silver (rare; 2d4+2 berserkers)", "Brass (rare; 3d4+3 berserkers; prereq: simple weapons prof.)", "Bronze (very rare; 4d4+4 berserkers; prereq: medium armor prof.)", "Iron (very rare; 5d4+5 berserkers; prereq: martial weapons prof.)"],
	"silver (rare; 2d4+2 berserkers)" : {
		name : "Silver Horn of Valhalla",
		sortname : "Horn of Valhalla, Silver",
		rarity : "rare",
		magicItemTable : "G",
		description : "As an action once per 7 days, I can blow this horn to summon 2d4+2 warrior spirits from Ysgard within 60 ft me. These have the statistics of a berserker and return after 1 hour or when they drop to 0 HP. They are friendly to me and my companions and follow my commands.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The silver horn summons 2d4+2 berserkers.\n   The berserkers are friendly to you and your companions and follow your commands."
	},
	"brass (rare; 3d4+3 berserkers; prereq: simple weapons prof.)" : {
		name : "Brass Horn of Valhalla",
		sortname : "Horn of Valhalla, Brass",
		rarity : "rare",
		magicItemTable : "G",
		description : "As an action once per 7 days, I can blow this horn to summon 3d4+3 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with all simple weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A brass horn summons 3d4+3 berserkers. To use the brass horn, you must be proficient with all simple weapons.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"bronze (very rare; 4d4+4 berserkers; prereq: medium armor prof.)" : {
		name : "Bronze Horn of Valhalla",
		sortname : "Horn of Valhalla, Bronze",
		rarity : "very rare",
		magicItemTable : "H",
		description : "As an action once per 7 days, I can blow this horn to summon 4d4+4 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with medium armor, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A bronze horn summons 4d4+4 berserkers. To use the bronze horn, you must be proficient with medium armor.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"iron (very rare; 5d4+5 berserkers; prereq: martial weapons prof.)" : {
		name : "Iron Horn of Valhalla",
		sortname : "Horn of Valhalla, Iron",
		rarity : "legendary",
		magicItemTable : "I",
		description : "As an action once per 7 days, I can blow this horn to summon 5d4+5 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with all martial weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The iron horn summons 5d4+5 berserkers. To use the iron horn, you must be proficient with all martial weapons.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
};
// Add Blessings (coded as Feats) [contributed by Nod_Hero]
FeatsList["blessing"] = {
	name : "Blessing",
	source: [["D", 228]],
	descriptionFull : "",
	allowDuplicates : true,
	choices : ["Health", "Protection", "Magic Resistance", "Understanding", "Valhalla", "Weapon Enhancement", "Wound Closure"],
	"health" : {
		name : "Blessing of Health",
		description : "My Constitution score increases by 2, up to a maximum of 22.",
		scores : [0, 0, 2, 0, 0, 0],
		scoresMaximum : [0, 0, 22, 0, 0, 0],
	},
	"protection" : {
		name : "Blessing of Protection",
		description : "I gain a +1 bonus to AC and saving throws.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I have the Blessing of Protection, I gain a +1 bonus to all my saving throws." }],
	},
	"magic resistance" : {
		name : "Blessing of Magic Resistance",
		description : "I have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
	},
	"understanding" : {
		name : "Blessing of Understanding",
		description : "My Wisdom score increases by 2, up to a maximum of 22.",
		scores : [0, 0, 0, 0, 2, 0],
		scoresMaximum : [0, 0, 0, 0, 22, 0],
	},
	"valhalla" : {
		name : "Blessing of Valhalla",
		description : "This blessing grants me the benefits of blowing a Silver Horn of Valhalla. 2d4+2 friendly Warrior Spirits (use Berserker statistics) from the plane of Ysgard appear within 60 feet. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once I use this blessing, I can't use it again until 7 days have passed.",
		usages : 1,
		recovery : "7 days",
		action : [["action", " (2d4+2 Berserkers)"]],
		creaturesAdd : [["Berserker"]],
		creatureOptions : [{
		name : "Berserker",
		source : [["SRD", 392], ["M", 344]],
		eval : function(prefix) {
			Value(prefix + "Comp.Desc.Name", "Warrior Spirits");
		},
		size : 3, //Medium
		type : "Humanoid",
		alignment : "any chaotic alignment",
		ac : 13,
		hp : 67,
		hd : [9, 8],
		speed : "30 ft",
		scores : [16, 12, 17, 9, 11, 9],
		senses : "",
		passivePerception : 10,
		languages : "any one language (usually Common)",
		challengeRating : "2",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Greataxe",
			ability : 1,
			damage : [1, 12, "slashing"],
			range : "Melee (5 ft)",
			description : "Heavy, two-handed"
		}],
		traits : [{
			name : "Reckless",
			description : "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.",
			}],
		features : [{
			name : "Summoned",
			description : "The Warrior Spirits are friendly to you and your companions and follow your commands. They return to Ysgard after 1 hour or when they drop to 0 hit points.",
			}],
		}],
	},
	"weapon enhancement" : {
		name : "Blessing of Weapon Enhancement",
		description : "One nonmagical weapon in my possession becomes a +1 weapon whenever I wield it.",
	},
	"wound closure" : {
		name : "Blessing of Wound Closure",
		description : "This blessing grants me the benefits of a Periapt of Wound Closure. I stabilize whenever I am dying at the start of my turn. In addition, whenever I roll a Hit Die to regain hit points, I double the number of hit points it restores.",
	}
};
// Add Charms (coded as Magic Items) [contributed by Nod_Hero]
MagicItemsList["charm"] = {
	name : "Charm",
	source: [["D", 228]],
	type : "charm",
	rarity : "supernatural gift",
	descriptionFull : "Different types of charms exist, each with a different effect.",
	allowDuplicates : true,
	choices : ["Animal Conjuring", "Darkvision", "Feather Falling", "Heroism", "Restoration", "The Slayer", "Vitality"],
	"animal conjuring" : {
		name : "Charm of Animal Conjuring",
		description : "Different types of charms exist, each with a different effect. As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["conjure animals"],
		selection : ["conjure animals"],
		firstCol : "1",
		}],
		action : [["action", ""]],
	},
	"darkvision" : {
		name : "Charm of Darkvision",
		description : "Different types of charms exist, each with a different effect.\n I can cast the Darkvision spell requiring no components or spell slots and using no action. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["darkvision"],
		selection : ["darkvision"],
		firstCol : "1",
		}],
		spellChanges : {
		"darkvision" : {
			time : "",
			components : "",
			changes : "My Charm of Darkvision allows me to cast Darkvision three times without requiring components or spell slots, and using no action."
			}
		},
	},
	"feather falling" : {
		name : "Charm of Feather Falling",
		description : "Different types of charms exist, each with a different effect.\n While I am under the effects of this Charm, whenever I fall, I descend 60 feet per round and take no damage from falling. The charm disappears after 10 days.",
		usages : "10 days",
		recovery : "never",
	},
	"heroism" : {
		name : "Charm of Heroism",
		description : "Different types of charms exist, each with a different effect.\n As an action, I can can expend the charm to give myself the benefit of a Potion of Heroism. For one hour, I gain 10 temporary hit points and am under the effect of the Bless spell (no concentration required).",
		usages : 1,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "once",
		spells : ["bless"],
		selection : ["bless"],
		firstCol : "1",
		}],
		spellChanges : {
		"bless" : {
			time : "1 a",
			range : "Self",
			components : "",
			compMaterial : "",
			duration : "1 hour",
			description : "I can add 1d4 on every attack roll or saving throw during the duration",
			changes : "My Charm of Heroism gives me the effect of the Bless spell (no concentration required) for one hour."
			}
		},
		action : [["action", ""]],
	},
	"restoration" : {
		name : "Charm of Restoration",
		description : "Different types of charms exist, each with a different effect.\n This Charm has 6 charges. I can use an action to expend some of its charges to cast one of the following spells:\n Greater Restoration (4 charges) or Lesser Restoration (2 charges). The Charm vanishes once all its charges have been expended.",
		usages : 10,
		recovery : "never",
		action : [["action", ""]],
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "2 charges",
			spells : ["lesser restoration"],
			selection : ["lesser restoration"],
			firstCol : 2
		}, {
			name : "4 charges",
			spells : ["greater restoration"],
			selection : ["greater restoration"],
			firstCol : 4
		}],
	},
	"the slayer" : {
		name : "Charm of The Slayer",
		description : "Different types of charms exist, each with a different effect.\n One sword in my possession becomes a Dragon Slayer or Giant Slayer (DM's choice) for the next 9 days. The charm then vanishes from me, and the weapon returns to normal.",
		usages : "9 days",
		recovery : "never",
	},
	"vitality" : {
		name : "Charm of Vitality",
		description : "Different types of charms exist, each with a different effect.\n As an action, I can can expend the charm to give myself the benefits of a Potion of Vitality. I remove any exhaustion and I am cured of any disease or poison. For the next 24 hours, I regain the maximum number of hit points for any Hit Die I spend.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	}
};
// Add Epic Boons (coded as Feats) [contributed by AelarTheElfRogue, edits by Nod_Hero]
FeatsList["epic boon"] = {
	name: "Epic Boon",
	source: [["D", 232]],
	descriptionFull : "",
    description : "",
    allowDuplicates : true,
    choices : ["Boon of Combat Prowess","Boon of Dimensional Travel","Boon of Fate","Boon of Fortitude","Boon of High Magic","Boon of Immortality","Boon of Invincibility","Boon of Irresistible Offense","Boon of Luck","Boon of Magic Resistance","Boon of Peerless Aim","Boon of Perfect Health","Boon of Planar Travel","Boon of Quick Casting","Boon of Recovery","Boon of Resilience","Boon of Skill Proficiency","Boon of Speed","Boon of Spell Mastery","Boon of Spell Recall","Boon of the Fire Soul","Boon of the Night Spirit","Boon of the Stormborn","Boon of the Unfettered","Boon of Truesight","Boon of Undetectibility"],
    "boon of combat prowess": {
        description: "When I miss with a melee weapon attack, I can choose to hit instead. Once I use this boon, I can't use it again until I finish a short rest.",
        limfeaname : "Combat Prowess",
        usages : 1,
        recovery : "short rest"
    },
    "boon of dimensional travel": {
        description: "As an action, I can cast the misty step spell, without using a spell slot or any components. Once I do so, I can't use this boon again until I finish a short rest.",
        limfeaname : "Misty Step",
        usages : 1,
        recovery : "short rest",
        spellcastingBonus : {
            name : "Boon of Dimensional Travel",
            spells : ["misty step"],
            selection : ["misty step"],
            firstCol : 'oncesr'
        },
        spellChanges : {
            "misty step" : {
			time : "1 a",
            components : "",
			compMaterial : "",
			changes : "With the Boon of Dimensional Travel, I can cast Misty Step as an Action without components."
            }
        }
    },
    "boon of fate": {
        description: "When another creature that I can see within 60 feet of me makes an ability check, an attack roll, or a saving throw, I can roll a d10 and apply the result as a bonus or penalty to the roll. Once I use this boon, I can't use it again until I finish a short rest.",
        limfeaname : "Boon of Fate",
        usages : 1,
        recovery : "short rest",
    },
    "boon of fortitude": {
        description: "My hit point maximum increases by 40.",
        calcChanges : {
            hp : function (totalHD) { return [40]; },
        },
    },
    "boon of high magic": {
        description: "I gain one 9th-level spell slot, provided I already have one.",
        addMod : { type : "", field : "P6.SSfront.SpellSlots.CheckboxesSet.lvl9", mod : 1, text: "I gain 1 additional 9th level spell slot" },
    },
    "boon of immortality": {
        description: "I stop aging. I am immune to any effect that would age me, and I can't die from old age.",
        savetxt : {
            immune : ["aging effects"],
        },
    },
    "boon of invincibility": {
        description: "When I take damage from any source, I can reduce that damage to 0. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"

    },
    "boon of irresistible offense": {
        description: "I can bypass the damage resistances of any creature.",
    },
    "boon of luck": {
        description: "I can add a dlO roll to any ability check, attack roll, or saving throw I make. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"
    },
    "boon of magic resistance": { 
        description: "I have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
    },
    "boon of peerless aim": {
        description: "I can give myself a +20 bonus to a ranged attack roll I make. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"
    },
    "boon of perfect health": {
        description: "I am immune to all diseases and poisons, and I have advantage on Constitution saving throws.",
        savetxt : { 
            immune : ["disease","poison"] 
        },
        eval : function () {
            SetProf("advantage", true, ["Constitution", true], "Boon of Perfect Health");
        },
        removeeval : function () {
            SetProf("advantage", false, ["Constitution", true], "Boon of Perfect Health");
        }
    },
    "boon of planar travel": {
        description: "Once per short rest, as an Action I can cast the Plane Shift spell (no spell slot or components required), targeting myself only, to travel to or from a single plane of existance chosen when I receive this boon.",
        limfeaname : "Plane Shift",
        usages : 1,
        recovery : "short rest",
        spellcastingBonus : {
            name : "Boon of Planar Travel",
            spells : ["plane shift"],
            selection : ["plane shift"],
            firstCol : 'oncesr'
        },
        spellChanges : {
            "plane shift" : {
                components : "",
                compMaterial : "",
				range : "Self", 
 changes : "With the Boon of Planar Travel, I can cast PLane Shift on myself without components."
            }
        }
    },
    "boon of quick casting": {
        description: "I choose one of my spells of 1st through 3rd level that has a casting time of 1 action. That spell's casting time is now 1 bonus action for me.",
    },
    "boon of recovery": {
        description: "I can use a bonus action to regain a number of hit points equal to half my hit point maximum. Once I use this boon, I can't use it again until I finish a long rest.",
        usages : 1,
        recovery : "long rest",
        action : [["bonus action"," (recover half HP)"]]
    },
    "boon of resilience": {
        description: "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
        dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
    },
    "boon of skill proficiency": {
        description: "",
        addMod : { type : "skill", field : "All", mod : "Prof", text : "I gain proficiency in all skills." },
    },
    "boon of speed": {
        description: "My walking speed increases by 30 feet. In addition, I can use a Bonus action to take the Dash or Disengage action. Once I do so, I can't do so again until I finish a short rest.",
        speed : { walk : {spd : "+30", enc : "+30" } },
        action : [["bonus action", " (dash/disengage)"]],
        usages : 1,
        recovery : "short rest"
    },
    "boon of spell mastery": {
        description: "I choose one 1st-level sorcerer, warlock, or wizard spell that I can cast. I can now cast that spell at its lowest level without expending a spell slot.",
    },
    "boon of spell recall": {
        description: "I can cast any spell I know or have prepared without expending a spell slot. Once I do so, I can't use this boon again until I finish a long rest.",
        usages : 1,
        recovery : "long rest",
    },
    "boon of the fire soul": {
        description: "I have immunity to fire damage. I can also cast burning hands (save DC 15) at will, without using a spell slot or any components.",
        savetxt : {
            immune : ["fire"],
        },
        spellcastingBonus : {
            name : "Boon of the Fire Soul",
            spells : ["burning hands"],
            selection : ["burning hands"],
            firstCol : 'atwill'
        },
        spellChanges : {
            "burning hands" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of the Fire Soul, I can cast Burning Hands without components."
            }
        }
    },
    "boon of the night spirit": {
        description: "While completely in an area of dim light or darkness, I can become invisible as an action. I remain invisible until I take an action or a reaction.",
        action : [["action"," (become invisible)"]]
    },
    "boon of the stormborn": {
        description: "I have immunity to lightning and thunder damage. I can also cast thunderwave (save DC 15) at will, without using a spell slot or any components.",
        savetxt : {
            immune : ["thunder","lightning"],
        },
        spellcastingBonus : {
            name : "Boon of the Stormborn",
            spells : ["thunderwave"],
            selection : ["thunderwave"],
            firstCol : 'atwill'
        },
        spellChanges : {
            "thunderwave" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of the Stormborn, I can cast Thunderwave without components."
            }
        }
    },
    "boon of the unfettered": {
        description: "I have advantage on ability checks made to resist being grappled. In addition, I can use an action to automatically escape a grapple or free myself of restraints of any kind.",
        savetxt : {
            adv_vs : ["resisting grapple"]
        },
        action : [["action"," (escape grapple/restraints)"]]
    },
    "boon of truesight": { 
        description: "I have truesight out to a range of 60 feet.",
        vision : [["Truesight", 60]],
    },
    "boon of undetectibility": {
        description: "I gain a +10 bonus to Dexterity (Stealth) checks, and I can't be detected or targeted by divination magic, including scrying sensors .",
        addMod : { type : "skill", field : "Stealth", mod : "10", text : "I gain a +10 bonus to Stealth checks" },
    },
};

// Add Chwinga Charms (coded as Magic Items) from RotF [contributed by Nod_Hero]
MagicItemsList["chwinga charm"] = {
	name : "Chwinga Charm",
	source : ["RotF"],
	type : "wondrous item",
	rarity : "rare",
	descriptionFull : "This tiny object looks like a snowflake. Different types of chwinga charms exist, each with a different effect.",
	allowDuplicates : true,
	choices : ["Animal Conjuring", "Biting Cold", "Bounty", "Cold Resistance", "Heroism", "Snowball Strike", "The Ice Troll", "The Snow Walker", "The Traveler's Haven", "Vitality"],
	"animal conjuring" : {
		name : "Chwinga Charm - Animal Conjuring",
		description : "This tiny object looks like a snowflake. As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["conjure animals"],
		selection : ["conjure animals"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"biting cold" : {
		name : "Chwinga Charm - Biting Cold",
		description : "This tiny object looks like a snowflake. As a bonus action, I can can expend 1 of the charm's charges to wreathe my weapon attacks with biting cold for 1 minute. Until this effect ends, I deal an extra 1d6 cold damage when I hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"bounty" : {
		name : "Chwinga Charm - Bounty",
		description : "This tiny object looks like a snowflake. As an action, I can can expend 1 of the charm's charges to cast the Create Food And Water spell, requiring no components. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["create food and water"],
		selection : ["create food and water"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"cold resistance" : {
		name : "Chwinga Charm - Cold Resistance",
		description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself resistance to cold damage for 24 hours.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"heroism" : {
		name : "Chwinga Charm - Heroism",
		description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself the benefit of a Potion of Heroism. I gain 10 temporary hit points that last for 1 hour and am under the effect of the Bless spell (no concentration required).",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"snowball strike" : {
		name : "Chwinga Charm - Snowball Strike",
		description : "As a bonus action, I can can expend 1 of the charm's charges to create a magical snowball in my hand and throw it. The snowball is a magic ranged weapon , has a 20/60 range, deals 1d4 cold damage, and scores a critical hit on a roll of 19 or 20. On a critical hit, the target is blinded until the end of its next turn",
		usages : 5,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"the ice troll" : {
		name : "Chwinga Charm - The Ice Troll",
		description : "This tiny object looks like a snowflake. As a reaction when I take cold damage, I can expend the charm to reduce the damage to 0. I regain a number of hit points equal to half the cold damage I would have taken.",
		usages : 1,
		recovery : "never",
		action : [["reaction", "Chwinga Charm (cold damage)"]]
	},
	"the snow walker" : {
		name : "Chwinga Charm - The Snow Walker",
		description : "As an action, I can expend 1 of the charm's charges to gain these 24 hour benefits: I can see 60 ft through areas heavily obscured by snow, I am immune to the effects of extreme cold (described in DMG), and I and my allies within 15 feet of me ignore snow/ice difficult terrain. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]]
	},
	"the traveler's haven" : {
		name : "Chwinga Charm - The Traveler's Haven",
		description : "This tiny object looks like a snowflake. As an action, I can expend 1 of the charm's charges to cast the Leomund's Tiny Hut spell, no components required. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["leomund's tiny hut"],
		selection : ["leomund's tiny hut"],
		firstCol : "1",
		}],
	},
	"vitality" : {
		name : "Chwinga Charm - Vitality",
		description : "As an action, I can can expend the charm to give myself the benefit of a Potion of Vitality. I remove any exhaustion I am suffering and am cured of any disease or poison affecting me. For the next 24 hours, I regain the maximum number of hit points for any Hit Die I spend.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	}
};

// Add Magic Items missing from official sources
MagicItemsList["potion of watchful rest"] = { // Waterdeep: Dungeon of the Mad Mage
	name : "Potion of Watchful Rest",
	source : [["WDotMM", 62]],
	type : "potion",
	rarity : "common",
	description : "When I drink this potion, I gain the following benefits for the next 8 hours: magic can't put me to sleep, and I can remain awake during a long rest and still gain its benefits. This sweet, amber-colored brew has no effect on creatures that don't require sleep, such as elves.",
};
MagicItemsList["candle mace"] = { // Baldur's Gate Descent into Avernus
	name : "Candle Mace",
	source : ["DiA", 39],
	type : "weapon (mace)",
	rarity : "uncommon",
	description : "This mace adds a +1 bonus to attack and damage rolls made with it. The head of this mace sheds bright light in a 5-foot-radius and dim light for an additional 5 feet. When I wield this mace, I can extinguish or ignite its light as an action.",
	descriptionFull : "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of this mace sheds bright light in a 5-foot-radius and dim light for an additional 5 feet. When you wield this mace, you can extinguish or ignite its light as an action.",
	weight : 4,
	action : [["action", "Candle Mace (on/off)"]],
	weaponsAdd : ["Candle Mace"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*candle)(?=.*mace).*$/i,
		name : "Candle Mace",
		source : ["DiA", 39],
		description : "",
		modifiers : [1, 1]
	}
};
MagicItemsList["sword of zariel"] = { // Baldur's Gate Descent into Avernus
	name : "Sword of Zariel",
	source : ["DiA", 225],
	type : "weapon (longsword)",
	rarity : "artifact",
	storyItemAL : true,
	languageProfs : ["[Celestial]"],
	dmgres : ["Necrotic", "Radiant"],
	scoresOverride : [0, 0, 0, 0, 0, 20],
	speed : { fly : { spd : "fixed90", enc : "fixed80" } },
	vision : [["Truesight", 60]],
	advantages : [["Insight", true]],
	vision : [["Adv. on Insight checks", 0]],
	action : [["bonus action", " (spread/dim light)"]],
	description : "The sword sheds bright light in a 5-ft radius and dim light for an additional 5 feet. Fiends have disadvantage on attack rolls made within the bright light, even if they can't see it. You can intensify the sword's light as a bonus action, causing it to shed bright light and dim light each for a 15-ft radius instead. (See Notes)",
	descriptionFull : "This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, it gives off a faint glow and hum. The weapon chooses who can attune to it and who can't. It desires a wielder who embodies bravery and heroism.\n   "+
	toUni("Attunement") + ".The sword allows you to attune to it immediately, without having to take a short rest. The first time you attune to the sword, you are transformed into a heavenly, idealized version of yourself, blessed with otherworldly beauty and a touch of heaven in your heart. Neither magic nor divine intervention can reverse this transformation. Your alignment becomes lawful good, and you gain the following traits:\n \u2022  " + toUni("Angelic Language") + ". You can speak, read, and write Celestial.\n \u2022  " + toUni("Celestial Resistance") + ". You have resistance to necrotic and radiant damage.\n \u2022  " + toUni("Divine Presence") + ". Your Charisma score becomes 20, unless it is already 20 or higher.\n \u2022  " + toUni("Feathered Wings") + ". You sprout a beautiful pair of feathered wings that grant you a flying speed of 90 feet and the ability to hover. If you already have a different kind of wings, these new wings replace the old ones, which fall off.\n \u2022  " + toUni("Truesight") + ". Your eyes become luminous pools of silver. You can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, perceive the original form of a shapechanger or a creature that is transformed by magic, and see into the Ethereal Plane, all within a range of 60 feet.\n \u2022  " + toUni("New Personality") + ". You gain new personality traits, determined by rolling once on each of the following tables. These traits override any conflicting personality trait, ideal, bond, or flaw.\n\n"+
	toUni("d8\tPersonality Trait")+
	"\n 1\tI treat all beings, even enemies, with respect."+
	"\n 2\tI won't tell a lie."+
	"\n 3\tI enjoy sharing my philosophical worldview and experiences with others."+
	"\n 4\tI cut right to the chase in every conversation."+
	"\n 5\tI often quote (or misquote) religious texts."+
	"\n 6\tI anger quickly when I witness cruelty or injustice."+
	"\n 7\tMy praise and trust are earned and never given freely."+
	"\n 8\tI like everything clean and organized.\n\n"+
	toUni("d6\tIdeal")+
	"\n 1\tCharity. I always help those in need. (Good)"+
	"\n 2\tFaith. I choose to follow the tenets of a particular lawful good deity to the letter. (Lawful)"+
	"\n 3\tResponsibility. It is the duty of the strong to protect the weak. (Lawful)"+
	"\n 4\tRespect. All people deserve to be treated with dignity. (Good)"+
	"\n 5\tHonor. The way I conduct myself determines my reward in the afterlife. (Lawful)"+
	"\n 6\tRedemption. All creatures are capable of change for the better. (Good)\n\n"+
	toUni("d6\tBond")+
	"\n 1\tI have a favorite religious hymn that I constantly hum."+
	"\n 2\tI must keep a written record of my beliefs and the sins that I witness. When finished, this book will be my gift to the multiverse."+
	"\n 3\tI have cherished memories of Idyllglen, though I've only seen this bucolic town in dreams."+
	"\n 4\tI would die for those who fight beside me, regardless of their faults."+
	"\n 5\tI seek to honor the angel Zariel by destroying fiends and other evildoers wherever I find them."+
	"\n 6\tThe Sword of Zariel has chosen me. I shall not fail to wield it justly.\n\n"+
	toUni("d6\tFlaw")+
	"\n 1\tI am too quick to judge others."+
	"\n 2\tI offer forgiveness too readily."+
	"\n 3\tI will sacrifice innocent lives for the greater good."+
	"\n 4\tFlaw? What flaw? I am flawless. Utter perfection!"+
	"\n 5\tI allow nothing to stand in the way of my crusade to eradicate evil from the multiverse."+
	"\n 6\tI ignore those who do not support my plans, for my calling is higher than all others.\n\n"+
	toUni("Holy Light") + ".The sword sheds bright light in a 5-foot radius and dim light for an additional 5 feet. Fiends find the sword's light disconcerting and painful, even if they can't see it, and have disadvantage on attack rolls made within the weapon's radius of bright light.\n   As a bonus action, you can intensify the sword's light, causing it to shed bright light in a 15-foot radius and dim light for an additional 15 feet, or reduce its glow to its normal intensity.\n   "+
	toUni("Random Properties") + ".The sword has 2 minor minor beneficial properties.\n   "+
	toUni("Searing Radiance") + ".The sword deals an extra 9 (2d8) radiant damage to any creature it hits, or 16 (3d10) radiant damage if you're wielding the weapon with two hands. An evil creature that takes this radiant damage must succeed on a DC 17 Constitution saving throw or be blinded until the end of its next turn.\n   "+
	toUni("Sentience") + ".The Sword of Zariel is a sentient, lawful good item with an Intelligence of 10, a Wisdom of 20, and a Charisma of 18. It has hearing and normal vision out to a range of 30 feet.\n   The sword communicates by transmitting emotion to the creature carrying or wielding it.\n   "+
	toUni("Truth Seer") + ".While holding the sword, you gain advantage on all Wisdom (Insight) checks.\n   "+
	toUni("Destroying the Sword") + ".\n   Zariel can destroy the sword simply by grasping it. She couldn't bring herself to do so when she was an angel, but as an archdevil she has no compunction about ridding the multiverse of the weapon. The sword is also destroyed if it's used to shatter the Companion (see \"Shattering the Companion\"), unless the blade is wielded by an angel of challenge rating 15 or higher, or a good-aligned cleric or paladin of at least 10th level.\n   If Zariel is killed for good (that is, if she dies in the Nine Hells), the sword becomes no harder to destroy than a normal longsword.",
	attunement : true,
	prerequisite : "Requires attunement by a creature the sword deems worthy",
	weight : 3,
	weaponsAdd : ["Sword of Zariel"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*sword)(?=.*zariel).*$/i,
		name : "Sword of Zariel",
		source : ["DiA", 225],
		description : "+2d8 radiant or Versatile (1d10 + 3d10 radiant), evil DC 17 Con save or blinded until end of its next turn;",
	},
toNotesPage : [{
    name : "Attunement and Personality",
    note : desc([
	"This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, it gives off a faint glow and hum. The weapon chooses who can attune to it and who can't. It desires a wielder who embodies bravery and heroism.\n",
	"Attunement.", 
	"The sword allows you to attune to it immediately, without having to take a short rest. The first time you attune to the sword, you are transformed into a heavenly, idealized version of yourself, blessed with otherworldly beauty and a touch of heaven in your heart. Neither magic nor divine intervention can reverse this transformation. Your alignment becomes lawful good, and you gain new personality traits, determined by rolling once on each of the tables. These traits override any conflicting personality trait, ideal, bond, or flaw.",
	"d8\tPersonality Trait",
	"1\tI treat all beings, even enemies, with respect.",
	"2\tI won't tell a lie.",
	"3\tI enjoy sharing my philosophical worldview/experiences with others.",
	"4\tI cut right to the chase in every conversation.",
	"5\tI often quote (or misquote) religious texts.",
	"6\tI anger quickly when I witness cruelty or injustice.",
	"7\tMy praise and trust are earned and never given freely.",
	"8\tI like everything clean and organized.\n",
	"d6\tIdeal",
	"1\tCharity. I always help those in need. (Good)",
	"2\tFaith. I choose to follow the tenets of a particular lawful good deity", 
	"\tto the letter. (Lawful)",
	"3\tResponsibility. It is the duty of the strong to protect the weak. (Lawful)",
	"4\tRespect. All people deserve to be treated with dignity. (Good)",
	"5\tHonor. The way I conduct myself determines my reward in the", 
	"\tafterlife. (Lawful)",
	"6\tRedemption. All beings are capable of change for the better. (Good)\n",
	"d6\tBond",
	"1\tI have a favorite religious hymn that I constantly hum.",
	"2\tI must keep a written record of my beliefs and the sins that I witness.", 
	"\tWhen finished, this book will be my gift to the multiverse.",
	"3\tI have cherished memories of Idyllglen, though I've only seen this", 
	"\tbucolic town in dreams.",
	"4\tI would die for those who fight beside me, regardless of their faults.",
	"5\tI seek to honor the angel Zariel by destroying fiends and other", 
	"\tevildoers wherever I find them.",
	"6\tThe Sword of Zariel has chosen me. I shall not fail to wield it justly.\n",
	"d6\tFlaw",
	"1\tI am too quick to judge others.",
	"2\tI offer forgiveness too readily.",
	"3\tI will sacrifice innocent lives for the greater good.",
	"4\tFlaw? What flaw? I am flawless. Utter perfection!",
	"5\tI allow nothing to stand in the way of my crusade to eradicate evil",
	"\tfrom the multiverse.",
	"6\tI ignore those who do not support my plans, for my calling is higher",
	"\tthan all others.\n",
	"Sentience.",
	"The Sword of Zariel is a sentient, lawful good item with an Intelligence of 10, a Wisdom of 20, and a Charisma of 18. It has hearing and normal vision out to a range of 30 feet. The sword communicates by transmitting emotion to the creature carrying or wielding it.\n",
	])}, {
    name : "Benefits and Properties",
    note : desc([
	"While you are attuned to the sword, you gain the following benefits:",
	"\u2022 Angelic Language. You can speak, read, and write Celestial.",
	"\u2022 Celestial Resistance. You have resistance to necrotic and radiant damage.",
	"\u2022 Divine Presence. Your Charisma score becomes 20, unless it is already 20+.",
	"\u2022 Feathered Wings. You sprout a beautiful pair of feathered wings that grant\n     you a flying speed of 90 feet and the ability to hover. If you already have a\n     different kind of wings, these new wings replace the old ones, which fall off.",
	"\u2022 Truesight. Your eyes become luminous pools of silver. You can see in normal\n     and magical darkness, see invisible creatures and objects, automatically detect\n     visual illusions and succeed on saving throws against them, perceive the\n     original form of a shapechanger or a creature that is transformed by magic,\n     and see into the Ethereal Plane, all within a range of 60 feet.",
	"\u2022 Truth Seer. While holding the sword, you gain advantage on all Insight checks.\n",
	"Properties. The Sword of Zariel has the following properties:",
	"\u2022 Random Properties. The sword has 2 minor beneficial properties. (DMG 219)",
	"\u2022 Holy Light. The sword sheds bright light in a 5-foot radius and dim light for an\n     additional 5 feet. Fiends find the sword's light disconcerting and painful, even\n     if they can't see it, and have disadvantage on attack rolls made within the\n     weapon's radius of bright light. As a bonus action, you can intensify the\n     sword's light, causing it to shed bright light in a 15-foot radius and dim light\n     for an additional 15 feet, or reduce its glow to its normal intensity.",
	"\u2022 Searing Radiance. The sword deals an extra 2d8 radiant damage to any\n     creature it hits, or 3d10 radiant damage if you're wielding the weapon with\n     two hands. An evil creature that takes this radiant damage must succeed on a\n     DC 17 Constitution saving throw or be blinded until the end of its next turn.\n",
	"Destroying the Sword",
	"Zariel can destroy the sword simply by grasping it. She couldn't bring herself to do so when she was an angel, but as an archdevil she has no compunction about ridding the multiverse of the weapon. The sword is also destroyed if it's used to shatter the Companion (see \"Shattering the Companion\" (DiA 154)), unless the blade is wielded by an angel of challenge rating 15 or higher, or a good-aligned cleric or paladin of at least 10th level.\n   If Zariel is killed for good (that is, if she dies in the Nine Hells), the sword becomes no harder to destroy than a normal longsword.\n\n",
	]) + sentientItemConflictTxt
	}]
};
MagicItemsList["bob"] = { // Tomb of Annihilation
	name : "Bob",
	source : ["ToA", 89],
	type : "weapon (battleaxe)",
	rarity : "uncommon",
	description : "Dwarvish runes on the head of this rusty battleaxe read 'Bob'. It adds a +1 bonus to attack and damage rolls made with it, floats on water and other liquids, and grants me advantage on Strength (Athletics) checks made to swim.",
	descriptionFull : "Etched into the haft of the battleaxe are Dethek (Dwarvish) runes that spell the weapon's name: Bob. It floats on water and other liquids, adds a +1 bonus to attack and damage rolls made with it, and grants its bearer advantage on Strength (Athletics) checks made to swim.",
	weight : 4,
	weaponsAdd : ["Bob"],
	weaponOptions : {
		baseWeapon : "battleaxe",
		regExpSearch : /\bbob\b/i,
		name : "Bob",
		source : ["ToA", 89],
		description : "Versatile (1d10); floats, Adv to swim",
		modifiers : [1, 1]
	}
};
MagicItemsList["flame tongue shortsword of gem detection"] = {	// 
	name : "Flame Tongue Shortsword of Gem Detection",
	source : [["TftYP", 179]],
	type : "weapon (shortsword)",
	attunement : true,
	description : "As a bonus action, I can speak the command word to cause flames that add +2d6 fire damage and shine bright light for 40 ft & dim light for 40 ft. The flames last until I speak the word again or sheathe it. As an action I can mentally command it to detect type and quantity of gems and jewels within 60 ft of the sword.",
	descriptionFull : "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.\n While you are attuned to this sword you can use an action to mentally command it to detect gems and jewels. You learn the kind and number of such objects within 60 feet of the sword.",
	action : [["bonus action", "Flame Tongue (activate/end)"], ["action", "Gem Detection (within 60 ft)"]],
	weaponsAdd : ["Flame Tongue Shortsword of Gem Detection"],
	weaponOptions : {
		baseWeapon : "shortsword",
		regExpSearch : /^(?=.*flame)(?=.*sword)(?=.*gem detection).*$/i,
		name : "Flame Tongue Shortsword of Gem Detection",
		source : ["TftYP", 179],
		description : "Finesse, light; While active, +2d6 fire damage",
	},
};
MagicItemsList["faerie dust"] = { // Storm King's Thunder
	name : "Faerie Dust",
	source : [["SKT", 35]],
	type : "wondrous item",
	description : "A pinch of this dust can substitute for the material components of any enchantment spell of 3rd level or lower. If a pinch of faerie dust is sprinkled on a creature, roll percentile dice and consult the Faerie Dust table to determine the effect.\n[See 3rd page 'Notes']",
	descriptionFull : "A pinch of this dust can substitute for the material components of any enchantment spell of 3rd level or lower. If a pinch of faerie dust is sprinkled on a creature, roll percentile dice and consult the Faerie Dust table to determine the effect.\n\n Faerie Dust\n   d100\tMagical Effect\n  01-70\tThe creature sprinkled with dust gains a flying\n\tspeed of 60 feet for 10 minutes.\n  71-80\tThe creature sprinkled with dust must succeed\n\ton a DC 11 Constitution saving throw or fall\n\tunconscious for 1 minute. The creature awakens\n\tif it takes damage or if it is shaken or slapped as\n\tan action.\n  81-90\tThe creature sprinkled with dust must succeed on\n\ta DC 11 Wisdom saving throw or be affected by a\n\tconfusion spell.\n  91-00\tThe creature sprinkled with dust becomes\n\tinvisible for 1 hour. Any equipment it is wearing\n\tor carrying is invisible as long as it is on the\n\tcreature's person. The effect on the creature ends\n\tif it attacks, deals any damage, or casts a spell.\n"+
	"\nThis small pouch contains ten pinches of faerie dust.",
	toNotesPage : [{
	name : "",
	page3notes : true,
	note : [
		"d100 \tMagical Effect\n  01-70\tThe creature sprinkled with dust gains a flying speed of 60 feet for 10 minutes.\n  71-80\tThe creature sprinkled with dust must succeed on a DC 11 Constitution saving\n\tthrow or fall unconscious for 1 minute. The creature awakens if it takes damage\n\tor if it is shaken or slapped as an action.\n  81-90\tThe creature sprinkled with dust must succeed on a DC 11 Wisdom saving throw\n\tor be affected by a confusion spell.\n  91-00\tThe creature sprinkled with dust becomes invisible for 1 hour. Any equipment it\n\tis wearing or carrying is invisible as long as it is on the creature's person. The\n\teffect on the creature ends if it attacks, deals any damage, or casts a spell.",
		],
	}],
};

// Add Telekinetic Shove
FeatsList["telekinetic"] = { // TCoE
	name: "Telekinetic",
	source: [["T", 81]],
	descriptionFull : "You learn to move things with your mind, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.\n \u2022 As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save.",
	description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str save vs. this feat's spell save DC or be moved 5 ft from or towards me. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Int, Wis, or Cha]",
	action : [["bonus action", " Shove"]],
	spellcastingBonus : {
		name : "Mage Hand",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	},
	spellcastingAbility : 4,
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellKey !== "mage hand") return;
				spellObj.components = "";
				if (spellObj.description === SpellsList["mage hand"].description) spellObj.description = "Create (in)visible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple";
				var rangeRx = /(\d+)( ?ft| ?m)/i;
				if (!/^(?=.*telekinetic)(?=.*feat).*$/i.test(CurrentSpells[spName].name) && rangeRx.test(spellObj.range)) {
					// add the +30 ft rang only if not the entry for the feat itself
					var spRangeM = spellObj.range.match(rangeRx);
					spellObj.range = spellObj.range.replace(rangeRx, Number(spRangeM[1]) + (What("Unit System") === "metric" ? 9 : 30) + spRangeM[2]);
				}
				return true;
			},
			"My Telekinetic feat allows me to cast the Mage Hand cantrip without verbal or somatic components and I can make the spectral hand invisible. If I already know the cantrip from another source, its range is also increased with 30 ft."
		]
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : " away") + " from or towards me. Intelligence is my spellcasting ability for these. [+1 Intelligence]",
		spellcastingAbility : 4,
		weaponsAdd : ["Telekinetic Shove"],
		weaponOptions : {
		regExpSearch : /^(?=.*telekinetic)(?=.*shove).*$/i,
		name : "Telekinetic Shove",
		source: [["T", 81]],
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
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : " away") + " from or towards me. Wisdom is my spellcasting ability for these. [+1 Wisdom]",
		spellcastingAbility : 5,
		weaponsAdd : ["Telekinetic Shove"],
		weaponOptions : {
		regExpSearch : /^(?=.*telekinetic)(?=.*shove).*$/i,
		name : "Telekinetic Shove",
		source: [["T", 81]],
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
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : " away") + " from or towards me. Charisma is my spellcasting ability for these. [+1 Charisma]",
		spellcastingAbility : 6,
		weaponsAdd : ["Telekinetic Shove"],
		weaponOptions : {
		regExpSearch : /^(?=.*telekinetic)(?=.*shove).*$/i,
		name : "Telekinetic Shove",
		source: [["T", 81]],
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

// Add 'Wizard cantrip Formula' full list
AddFeatureChoice(ClassList.wizard.features["arcane recovery"], true, "Wizard Cantrip Formulas", {
	name : "Wizard Cantrip Formulas",
	extraname : "Optional Wizard 3",
	source : [["T", 76]],
	description : desc([
		"I have scribed arcane formulas in my spellbook with which I formulate cantrips in my mind",
		"Whenever I finish a long rest, I can use this to change a wizard cantrip I know for another"
	]),
	prereqeval : function (v) { return classes.known.wizard.level >= 3 ? true : "skip"; },
	usages : 1,
	recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName === 'wizard cantrip formulas') {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'wizard cantrip formulas') {
					spellObj.firstCol = "";
				};
			}
		]
	},
	eval : function () {
		CurrentSpells['wizard-wizard cantrip formulas'] = {
			name : 'Wizard Cantrip Formulas (item)',
			ability : "wizard",
			list : { 'class' : 'wizard', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'on the bottom left',
					spells : []
				}
			},
			typeList : 4,
			refType : "option",
			allowUpCasting : true,
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['wizard cantrip formulas'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	}
}, "Optional 3rd-level wizard features");

// Add Creatures - Missed from Other Books
CreatureList["armored saber-toothed tiger"] = { //CoS
	name : "Armored Saber-Toothed Tiger",
	source : [["CoS", 115]],
	size : 2, //Large
	type : "Beast",
	companion : "steed",
	alignment : "Unaligned",
	ac : 17,
	hp : 84,
	hd : [7, 10],
	speed : "40 ft",
	scores : [18, 14, 15, 3, 12, 8],
	skills : {
		"perception" : 3,
		"stealth" : 6
	},
	senses : "Adv. on Wis (Perception) checks using smell",
	passivePerception : 13,
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Pounce trait",
		modifiers : ["", 1, ""]
	}, {
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "Can be used in combination with claw while pouncing (see Pounce trait)",
		modifiers : ["", 1, ""]
	}],
	traits : [{
	name : "Keen Smell",
	description : "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
	}, {
		name : "Pounce",
		description : "If the tiger moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
	}]
};
CreatureList["cave badger"] = { // OoTA
	name : "Cave Badger",
	source : ["OotA", 96],
		size : 3, //Medium
		type : "Beast",
		subtype : "",
		companion : "companion",
		alignment : "Unaligned",
		ac : 12,
		hp : 13,
		hd : [2, 8],
		speed : "30 ft, burrow 10 ft",
		scores : [13, 10, 15, 2, 12, 5],
		saves : ["", "", "", "", "", ""],
		senses : "Darkvision 30 ft, Tremorsense 60 ft; Adv. on Wis (Perception) checks using smell",
		passivePerception : 11,
		languages : "",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "One bite and one claws attack as an Attack action"
		}, {
			name : "Claws",
			ability : 1,
			damage : [2, 4, "slashing"],
			range : "Melee (5 ft)",
			description : "One claws and one bite attack as an Attack action"
		}],
		traits : [{
			name : "Keen Smell",
			description : "The badger has advantage on Wisdom (Perception) checks that rely on smell."
		}]
	};
CreatureList["ice spider"] = { // SKT
	name : "Ice Spider",
	source : ["SKT", 127],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 26,
	hd : [4, 10],
	speed : "30 ft, climb 30 ft",
	scores : [14, 16, 12, 2, 11, 4],
	saves : ["", "", "", "", "", ""],
	skills : {
			"stealth" : 7
		},
	senses : "Blindsight 10 ft; Darkvision 60 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 8, "piercing"],
			range : "Melee (5 ft)",
			description : "Target also takes 2d8 poison damage, half on a DC 11 Constitution saving throw"
		}, {
			name : "Icy Web (Recharge 5-6)",
			ability : 2,
			damage : ["\u2015", "", "Restrained"],
			range : "30/60 ft",
			description : "Target can escape as an action with a DC 12 Strength check, or by destroying the webbing (AC 10; 5 HP)",
			modifiers : ["", "", false],
			tooltip : "On a hit, the target is restrained by webbing and takes 1 cold damage at the start of each of its turns. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to poison and psychic damage)."
		}],
		traits : [{
			name : "Bite",
			description : "If the poison damage from the spider's bite attack reduces the target to 0 HP, the target is stable but poisoned for 1 hour, even after regaining HP, and is paralyzed while poisoned in this way."
		}, {
			name : "Spider Climb",
			description : "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name : "Web Sense",
			description : "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
		}, {
			name : "Web Walker",
			description : "The spider ignores movement restrictions caused by webbing."
		}],
	actions : [{
			name : "Icy Web (Recharge 5-6)",
			description : "See attack. On a hit, the target is restrained by webbing and takes 1 cold damage at the start of each of its turns. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
		}],
		wildshapeString : "Blindsight 10 ft; Darkvision 60 ft| If the bite's poison damage reduces the target to 0 HP, the target is stable but poisoned and paralyzed for 1 hour, even after regaining HP| Spider Climb: climb difficult surfaces, including upside down, without an ability check| Web Sense: knows the exact location of any other creature in contact with the same web| Web Walker: ignores movement restrictions from webbing"
};
CreatureList["snow leopard"] = { // TftYP
	name : "Snow Leopard",
	source : ["TftYP", 183],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 37,
	hd : [5, 10],
	speed : "40 ft",
	scores : [17, 15, 14, 3, 12, 8],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 6
		},
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [1, 8, "slashing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}],
	traits : [{
		name : "Keen Smell",
		description : "The leopard has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
		name : "Pounce",
		description : "If the leopard moves at least 20 ft straight toward a creature and hits it with a claw attack, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
		}]
};
CreatureList["berserker"] = { // MM
	name : "Berserker",
	source : [["SRD", 392], ["M", 344]],
	size : 3, //Medium
	type : "Humanoid",
	alignment : "any chaotic alignment",
	ac : 13,
	hp : 67,
	hd : [9, 8],
	speed : "30 ft",
	scores : [16, 12, 17, 9, 11, 9],
	senses : "",
	passivePerception : 10,
	languages : "any one language (usually Common)",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Greataxe",
		ability : 1,
		damage : [1, 12, "slashing"],
		range : "Melee (5 ft)",
		description : "Heavy, two-handed"
	}],
	traits : [{
		name : "Reckless",
		description : "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.",
		}],
};
CreatureList["wyvern"] = { // SRD & MM (Includes contributions by kingspooker)
		name : "Wyvern",
		source : [["SRD", 319], ["M", 303]],
		size : 2, //Large
		type : "Dragon",
		companion : "race",
		alignment : "Unaligned",
		ac : 13,
		hp : 110,
		hd : [13, 10],
		speed : "20 ft, fly 80 ft",
		scores : [18, 15, 16, 2, 13, 8],
		skills : {
			"perception" : 4
		},
		passivePerception : 14,
		challengeRating : "6",
		proficiencyBonus : 3,
		attacksAction : 2,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"],
			range : "Melee (10 ft)",
			description : "One bite and one stinger attack as an Attack action"
		}, {
			name : "Claws",
			ability : 1,
			damage : [2, 8, "slashing"],
			range : "Melee (5 ft)",
			description : "One claw and one bite or stinger attack as an Attack action, if the Wyvern is flying"
		}, {
			name : "Stinger",
			ability : 1,
			damage : [2, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Target also takes 7d6 poison damage, half on a DC 15 Constitution saving throw"
		}
	]
};
CreatureList["valenar hawk"] = { // ERLW
	name : "Valenar Hawk",
	source : [["E:RLW", 312]],
	size : 5, //Tiny
	type : "Fey",
	subtype : "",
	alignment : "Neutral",
	ac : 14,
	hp : 10,
	hd : [4, 4],
	speed : "10 ft, fly 60 ft",
	scores : [8, 18, 10, 9, 16, 11],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 5
		},
	senses : "Adv. on Wis (Perception) checks using sight",
	passivePerception : 15,
	languages : "understands Common, Elvish, and Sylvan but can't speak",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Talons",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
		description : ""
		}],
	traits : [{
		name : "Keen Sight",
		description : "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
		}, {
		name : "Bonding",
		description : "The hawk can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 feet of it. The bond lasts until the hawk bonds with a different creature or until the bonded creature dies. While bonded, the hawk and the bonded creature can communicate telepathically with each other at a distance of up to 100 feet."
		}]
};
CreatureList["valenar hound"] = { // ERLW
	name : "Valenar Hound",
	source : [["E:RLW", 312]],
	size : 3, //Medium
	type : "Fey",
	subtype : "",
	companion : "mount",
	alignment : "Neutral",
	ac : 14,
	hp : 19,
	hd : [3, 8],
	speed : "40 ft",
	scores : [17, 15, 14, 10, 15, 11],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 4
		},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
	passivePerception : 14,
	languages : "understands Common, Elvish, and Sylvan but can't speak",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "Target must succeed on a DC 13 Strength saving throw or be knocked prone"
		}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
		name : "Bonding",
		description : "The hound can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 feet of it. The bond lasts until the hound bonds with a different creature or until the bonded creature dies. While bonded, the hound and the bonded creature can communicate telepathically with each other at a distance of up to 100 feet."
		}]
};
CreatureList["valenar steed"] = { // ERLW
	name : "Valenar Steed",
	source : [["E:RLW", 313]],
	size : 2, //Large
	type : "Fey",
	subtype : "",
	companion : "mount",
	alignment : "Neutral",
	ac : 13,
	hp : 22,
	hd : [3, 10],
	speed : "60 ft",
	scores : [14, 16, 14, 10, 15, 11],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 4
		},
	passivePerception : 14,
	languages : "understands Common, Elvish, and Sylvan but can't speak",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Hooves",
		ability : 2,
		damage : [2, 6, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
		}],
	traits : [{
		name : "Bonding",
		description : "The steed can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 feet of it. The bond lasts until the steed bonds with a different creature or until the bonded creature dies. While bonded, the steed and the bonded creature can communicate telepathically with each other at a distance of up to 100 feet."
		}]
};
CreatureList["sled dog"] = { // RoT
	name : "Sled Dog",
	source : [["RoT", 27]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	companion : "companion",
	alignment : "Unaligned",
	ac : 13,
	hp : 11,
	hd : [2, 8],
	speed : "40 ft",
	scores : [12, 15, 12, 3, 12, 6],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 4
		},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "Target creature must succeed on a DC 11 Strength saving throw or be knocked prone"
		}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The sled dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
		name : "Pack Tactics",
		description : "The sled dog has advantage on an attack roll against a creature if at least one of the sled dog's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}]
};

// Add option to allow Dunamancy spells for the Artificer
AddFeatureChoice(ClassList.artificer.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Artificer 1",
	source : [["DSC"]],
	description : desc([
		"All dunamancy spells are added to the artificer spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (spName !== "artificer" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the artificer class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level artificer features");


