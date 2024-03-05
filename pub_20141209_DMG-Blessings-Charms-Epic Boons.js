var iFileName = "pub_20141209_DMG-Blessings-Charms-Epic_Boons.js";
RequiredSheetVersion(13);
// This file adds the Blessings, Charms, and Epic Boons from 'Dungeon Master's Guide' to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
/* NOTE: 
>>> Unofficial document! This script should be removed once the official script is released to prevent conflict <<<
>>> Tested for [Printer Friendly] version ONLY! <<< */

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
		description : "Different types of charms exist, each with a different effect. As an action, I can can expend the charm to give myself the benefit of a Potion of Heroism. For one hour, I gain 10 temporary hit points and am under the effect of the Bless spell (no concentration required).",
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
		description : "Different types of charms exist, each with a different effect. This Charm has 6 charges. I can use an action to expend some of its charges to cast one of the following spells:\n Greater Restoration (4 charges) or Lesser Restoration (2 charges). The Charm vanishes once all its charges have been expended.",
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
		description : "Different types of charms exist, each with a different effect. One sword in my possession becomes a Dragon Slayer or Giant Slayer (DM's choice) for the next 9 days. The charm then vanishes from me, and the weapon returns to normal.",
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

// Visit (https://gist.github.com/AelarTheElfRogue/27fa97e5b9148c59f0bae8f5ef26a544) for original EpicBoons.js
