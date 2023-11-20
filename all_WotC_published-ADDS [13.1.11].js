var iFileName = "all_WotC_published-ADDS [13.1.11].js";
RequiredSheetVersion("13.1.9");

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
// Add Chwinga Charms (coded as Magic Items) [contributed by Nod_Hero]
MagicItemsList["chwinga charm"] = {
	name : "Chwinga Charm",
	source : [["D", 228],["RotF", 283],["CM", 212],["S:AiS", 17]],
	type : "wondrous item",
	rarity : "rare",
	descriptionFull : "Different types of chwinga charms exist, each with a different effect.",
	allowDuplicates : true,
	choices : ["Air Bubbles", "Animal Conjuring", "Biting Cold", "Bounty", "Cold Resistance", "Darkvision", "Feather Falling", "Heroism", "Instant Tools", "Restoration", "Snowball Strike", "The Ice Troll", "The Mirage", "The Slayer", "The Snow Walker", "The Traveler's Haven", "The Water Bearer", "Vitality"],
	"air bubbles" : {
		name : "Chwinga Charm - Air Bubbles",
		source : [["S:AiS", 17]],
		description : "As an action, I can cast the Air Bubble spell. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["air bubble"],
		selection : ["air bubble"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"animal conjuring" : {
		name : "Chwinga Charm - Animal Conjuring",
		source : [["D", 228]],
		description : "As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
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
		source : [["RotF", 283]],
		description : "As a bonus action, I can can expend 1 of the charm's charges to wreathe my weapon attacks with biting cold for 1 minute. Until this effect ends, I deal an extra 1d6 cold damage when I hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"bounty" : {
		name : "Chwinga Charm - Bounty",
		source : [["RotF", 283]],
		description : "As an action, I can can expend 1 of the charm's charges to cast the Create Food And Water spell, requiring no components. The charm disappears after 3 uses.",
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
		source : [["RotF", 283]],
		description : "As an action, I can can expend the charm to give myself resistance to cold damage for 24 hours.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"darkvision" : {
		name : "Chwinga Charm - Darkvision",
		source : [["D", 228]],
		description : "As an action, I can expend 1 of the charm's charges to cast the Darkvision spell, no components required. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["darkvision"],
		selection : ["darkvision"],
		firstCol : "1",
		}],
		action : [["action", ""]],
	},
	"feather falling" : {
		name : "Chwinga Charm - Feather Falling",
		source : [["D", 228]],
		description : "This charm grants me the benefits of a ring of feather falling for 10 days, after which the charm vanishes from me. When I fall, I descend 60 feet per round and take no damage from falling.",
		usages : "",
		recovery : "never",
		additional : "10 days",
	},
	"heroism" : {
		name : "Chwinga Charm - Heroism",
		source : [["D", 228]],
		description : "As an action, I can can expend the charm to give myself the benefits of a Potion of Heroism. I gain 10 temporary hit points that last for 1 hour and am under the effect of the Bless spell (no concentration required).",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"instant tools" : {
		name : "Chwinga Charm - Instant Tools",
		source : [["S:AiS", 17]],
		description : "This charm allows me to magically conjure a set of artisan's tools, navigator's tools, or thieves' tools. The conjured tools appear either in my hand or somewhere else in my space (my choice). Once used, this charm goes away, but the tools remain.",
		usages : 1,
		recovery : "never",
	},
	"restoration" : {
		name : "Chwinga Charm - Restoration",
		source : [["D", 228]],
		description : "This Charm has 6 charges. I can use an action to expend some of its charges to cast one of the following spells:\n Greater Restoration (4 charges) or Lesser Restoration (2 charges). The Charm vanishes once all its charges have been expended.",
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
	"snowball strike" : {
		name : "Chwinga Charm - Snowball Strike",
		source : [["RotF", 283]],
		description : "As a bonus action, I can can expend 1 of the charm's charges to create a magical snowball in my hand and throw it. The snowball is a magic ranged weapon , has a 20/60 range, deals 1d4 cold damage, and scores a critical hit on a roll of 19 or 20. On a critical hit, the target is blinded until the end of its next turn",
		usages : 5,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"the ice troll" : {
		name : "Chwinga Charm - The Ice Troll",
		source : [["RotF", 283]],
		description : "As a reaction when I take cold damage, I can expend the charm to reduce the damage to 0. I regain a number of hit points equal to half the cold damage I would have taken.",
		usages : 1,
		recovery : "never",
		action : [["reaction", "Chwinga Charm (cold damage)"]]
	},
	"the mirage" : {
		name : "Chwinga Charm - The Mirage",
		source : [["CM", 212]],
		description : "As an action, I can cast the Hallucinatory Terrain spell (save DC 15). Once used, this charm vanishes from me.",
		usages : 1,
		recovery : "never",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["hallucinatory terrain"],
		selection : ["hallucinatory terrain"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"the slayer" : {
		name : "Chwinga Charm - The Slayer",
		source : [["D", 228]],
		description : "One sword in my possession becomes a Dragon Slayer or Giant Slayer (DM's choice) for the next 9 days. The charm then vanishes from me, and the weapon returns to normal.",
		usages : "9 days",
		recovery : "never",
	},
	"the snow walker" : {
		name : "Chwinga Charm - The Snow Walker",
		source : [["RotF", 283]],
		description : "As an action, I can expend 1 of the charm's charges to gain these 24 hour benefits: I can see 60 ft through areas heavily obscured by snow, I am immune to the effects of extreme cold (described in DMG), and I and my allies within 15 feet of me ignore snow/ice difficult terrain. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]]
	},
	"the traveler's haven" : {
		name : "Chwinga Charm - The Traveler's Haven",
		source : [["RotF", 283]],
		description : "As an action, I can expend 1 of the charm's charges to cast the Leomund's Tiny Hut spell, no components required. The charm disappears after 3 uses.",
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
	"the water bearer" : {
		name : "Chwinga Charm - The Water Bearer",
		source : [["CM", 212]],
		description : "This charm allows me to create up to 1 gallon of fresh water, which fills one or more empty containers in my possession. I can do this up to thrice per day for 10 days, after which this charm vanishes from me.",
		usages : 3,
		recovery : "day",
		additional : "10 days"
	},
	"vitality" : {
		name : "Chwinga Charm - Vitality",
		source : [["D", 228]],
		description : "As an action, I can can expend the charm to give myself the benefit of a Potion of Vitality. I remove any exhaustion I am suffering and am cured of any disease or poison affecting me. For the next 24 hours, I regain the maximum number of hit points for any Hit Die I spend.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	}
};

// Add Artifacts and Story-line Magic Items
MagicItemsList["stone of golorr"] = { // Waterdeep Dragon Heist
	name : "Stone of Golorr",
	source : ["WDH", 192],
	type : "wondrous item",
	rarity : "artifact",
	storyItemAL : true,
	description : "It has 3 charges and regains d3 expended charges at dawn. I can expend 1 charge to cast Legend Lore. When my attunement ends, I must make a DC 16 Wis save or I lose all memory of the stone and all knowledge imparted by it. Remove Curse is 20% chance of restoring lost info, Greater Restoration is 100%.",
	descriptionFull : "The Stone of Golorr is a glossy, greenish-gray stone that fits in the palm of your hand. The stone is actually an aboleth named Golorr, transformed by magic into an object.\n  Random Properties. The Stone of Golorr has the following properties, determined by rolling on the tables in the \"Artifacts\" section in chapter 7 of the Dungeon Master's Guide:\n \u2022 1 minor beneficial property\n \u2022 1 minor detrimental property.\n\n Legend Lore. The Stone of Golorr has 3 charges and regains 1d3 expended charges daily at dawn. While holding the stone, you can expend 1 of its charges to cast the Legend Lore spell.\n   By using the stone to cast legend lore, you communicate directly with the aboleth, and it shares its knowledge with you. The aboleth can't lie to you, but the information it provides is often cryptic or vague.\n   The aboleth knows where Lord Neverember's secret vault is located. It also knows that three keys are needed to open the vault and that a gold dragon named Aurinax inhabits the vault and guards its treasures.\n\n  Failed Memory. When your attunement to the Stone of Golorr ends, you must make a DC 16 Wisdom saving throw. On a failed save, you lose all memory of the stone being in your possession and all knowledge imparted by it. A Remove Curse spell cast on you has a 20% chance of restoring the lost knowledge and memories, and a Greater Restoration spell does so automatically.\n\n  Sentience. The Stone of Golorr is a sentient lawful evil magic item with an Intelligence of 18, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can communicate telepathically with the creature that is attuned to it, as long as that creature understands at least one language. In addition, the aboleth learns the greatest desires of any creature that communicates telepathically with the stone.\n The Stone of Golorr hungers for information and prefers not to remain in the clutches of any creature for too long. Whenever the stone desires a new owner, it demands to be given to another intelligent creature as quickly as possible. If its demands are ignored, it tries to take control of its owner (see \"Sentient Magic Items\" in chapter 7 of the Dungeon Master's Guide).\n\n Personality. The Stone of Golorr has an alien intellect that is both domineering and hungry for knowledge. It thinks of itself as an ageless and immortal god.\n\n Destroying the Stone. While in stone form, the aboleth isn't a creature and isn't subject to effects that target creatures. The Stone of Golorr is immune to all damage. Casting an Antipathy/Sympathy spell on the stone destroys it if the antipathy effect is selected and the spell is directed to repel aberrations. When the spell is cast in this way, the stone transforms into mucus and is destroyed, and Golorr the aboleth appears in an unoccupied space within 30 feet of the stone's remains. The aboleth is incensed by the stone's destruction, and it attacks all other creatures it can see.",
	attunement : true,
	toNotesPage : [{
		name : "Stone of Golorr",
		note : [
			"The Stone of Golorr is a glossy, greenish-gray stone that fits in the palm of your hand. The stone is actually an aboleth named Golorr, transformed by magic into an object.",
			"\nRandom Properties.",
			"   The Stone of Golorr has the following random properties, which you can determine by rolling on the tables in the 'Artifacts' section of the Dungeon Masters Guide:\n\t1 minor beneficial properties\n\t1 minor detrimental property",
			"\nLegend Lore.", 
			"   The Stone of Golorr has 3 charges and regains 1d3 expended charges daily at dawn. While holding the stone, you can expend 1 of its charges to cast the legend lore spell.\n   By using the stone to cast legend lore, you communicate directly with the aboleth, and it shares its knowledge with you. The aboleth can't lie to you, but the information it provides is often cryptic or vague.\n   The aboleth knows where Lord Neverember's secret vault is located. It also knows that three keys are needed to open the vault and that a gold dragon named Aurinax inhabits the vault and guards its treasures.",
			"\nFailed Memory.", 
			"   When your attunement to the Stone of Golorr ends, you must make a DC 16 Wisdom saving throw. On a failed save, you lose all memory of the stone being in your possession and all knowledge imparted by it. A remove curse spell cast on you has a 20 percent chance of restoring the lost knowledge and memories, and a greater restoration spell does so automatically.",
			"\nSentience.", 
			"   The Stone of Golorr is a sentient lawful evil magic item with an Intelligence of 18, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can communicate telepathically with the creature that is attuned to it, as long as that creature understands at least one language. In addition, the aboleth learns the greatest desires of any creature that communicates telepathically with the stone.\n   The Stone of Golorr hungers for information and prefers not to remain in the clutches of any creature for too long. Whenever the stone desires a new owner, it demands to be given to another intelligent creature as quickly as possible. If its demands are ignored, it tries to take control of its owner (see 'Sentient Magic Items' in chapter 7 of the Dungeon Master's Guide).",
			"\nPersonality.", 
			"   The Stone of Golorr has an alien intellect that is both domineering and hungry for knowledge. It thinks of itself as an ageless and immortal god.",
			"\nDestroying the Stone.", 
			"   While in stone form, the aboleth isn't a creature and isn't subject to effects that target creatures. The Stone of Golorr is immune to all damage. Casting an antipathy/sympathy spell on the stone destroys it if the antipathy effect is selected and the spell is directed to repel aberrations. When the spell is cast in this way, the stone transforms into mucus and is destroyed, and Golorr the aboleth appears in an unoccupied space within 30 feet of the stone's remains. The aboleth is incensed by the stone's destruction, and it attacks all other creatures it can see.",
		]
	}],
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["legend lore"],
		selection : ["legend lore"],
		firstCol : 1
	}],
};
MagicItemsList["sword of zariel"] = { // Descent into Avernus
	name : "Sword of Zariel",
	source : ["DiA", 225],
	type : "weapon (longsword)",
	rarity : "artifact",
	storyItemAL : true,
	languageProfs : ["[Celestial]"],
	dmgres : ["Necrotic", "Radiant"],
	scoresOverride : [0, 0, 0, 0, 0, 20],
	speed : { fly : { spd : "fixed90", enc : "fixed80" } },
	vision : [["Truesight", "fixed 60"], ["Adv. on Insight checks", 0]],
	advantages : [["Insight", true]],
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
MagicItemsList["demonomicon of iggwilv"] = { // Tasha's Cauldron of Everything (contains contributions by lizrdgizrd)
	name : "Demonomicon of Iggwilv",
	source : [["T", 125]],
	type : "wondrous item",
	rarity : "artifact",
	description : "While holding the Demonomicon, when I make an Intelligence check regarding demons or a Wisdom check related to the Abyss I can add double my proficiency bonus to the check. When I make a spell damage roll against a fiend I apply the maximum damage.",
	descriptionFull : "An expansive treatise documenting the Abyss's infinite layers and inhabitants, the Demonomicon of Iggwilv is the most thorough and blasphemous tome of demonology in the multiverse. The tome recounts both the oldest and most current profanities of the Abyss and demons. Demons have attempted to censor the text, and while sections have been ripped from the book's spine, the general chapters remain, ever revealing demonic secrets. And the book holds more than blasphemies. Caged behind lines of script roils a secret piece of the Abyss itself, which keeps the book up-to-date, no matter how many pages are removed, and it longs to be more than mere reference material.\n  Random Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 minor detrimental property\n  1 major detrimental property\n  Spells. The book has 8 charges. It regains 1d8 expended charges daily at dawn. While holding it, you can use an action to cast Tasha's hideous laughter from it or to expend 1 or more of its charges to cast one of the following spells (save DC 20) from it: magic circle (1 charge), magic jar (2 charges), planar ally (3 charges), planar binding (2 charges), plane shift (to layers of the Abyss only; 3 charges), summon fiend (3 charges).\n  Abyssal Reference. You can reference the Demonomicon whenever you make an Intelligence check to discern information about demons or a Wisdom (Survival) check related to the Abyss. When you do so, you can add double your proficiency bonus to the check.\n\nSee the Notes section for further information.",
	attunement : true,
	toNotesPage : [{
		name : "Demonomicon of Iggwilv",
		note : [
			"An expansive treatise documenting the Abyss's infinite layers and inhabitants, the Demonomicon of Iggwilv is the most thorough and blasphemous tome of demonology in the multiverse. The tome recounts both the oldest and most current profanities of the Abyss and demons. Demons have attempted to censor the text, and while sections have been ripped from the book's spine, the general chapters remain, ever revealing demonic secrets. And the book holds more than blasphemies. Caged behind lines of script roils a secret piece of the Abyss itself, which keeps the book up-to-date, no matter how many pages are removed, and it longs to be more than mere reference material.",
			"\nRandom Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the 'Artifacts' section of the Dungeon Masters Guide:\n\t2 minor beneficial properties\n\t1 minor detrimental property\n\t1 major detrimental property",
			"\nSpells. The book has 8 charges. It regains 1d8 expended charges daily at dawn. While holding it, you can use an action to cast Tasha's hideous laughter from it or to expend 1 or more of its charges to cast one of the following spells (save DC 20) from it: magic circle (1 charge), magic jar (3 charges), planar ally (3 charges), planar binding (2 charges), plane shift (to layers of the Abyss only; 3 charges), summon fiend (3 charges).",
			"\nAbyssal Reference. You can reference the Demonomicon whenever you make an Intelligence check to discern information about demons or a Wisdom (Survival) check related to the Abyss. When you do so, you can add double your proficiency bonus to the check.",
			"\nFiendish Scourging. Your magic causes pain to fiends. While carrying the book, when you make a damage roll for a spell you cast against a fiend, you use the maximum possible result instead of rolling.",
			"\nEnsnarement. While carrying the book, whenever you cast the magic circle spell naming only fiends, or the planar binding spell targeting a fiend, the spell is cast at 9th level, regardless of what level spell slot you used, if any. Additionally, the fiend has disadvantage on its saving throw against the spell.",
			"\nContainment. The first 10 pages of the Demonomicon are blank. As an action while holding the book, you can target a fiend that you can see that is trapped within a magic circle. The fiend must succeed on a DC 20 Charisma saving throw with disadvantage or become trapped within one of the Demonomicon's empty blank pages, which fills with writing detailing the trapped creature's widely known name and depravities. Once Used, this action can't be used again until the next dawn.\n  When you finish a long rest, if you and the Demonomicon are on the same plan of existence, the trapped creature of the highest challenge rating within the book can attempt to possess you. You must make a DC 20 Charisma saving throw. On a failure, you are possessed by the creature, which controls you like a puppet. The possessing creature can release you as an action, appearing in the closest unoccupied space. On a successful save, the fiend can't try to possess you again for 7 days.\n  When the tome is discovered it has 1d4 fiends occupying its pages, typically an assortment of demons.",
			"\nDestroying the Demonomicon",
			"To destroy the book, six different demon lords must each tear out a sixth of the book's pages. If this occurs, the pages reappear after 24 hours. Before all those hours pass, anyone who opens the book's remaining binding is transported to a nascent layer of the Abyss that lies hidden within the book. At the heart of this dadly, semi-sentient domain lies a long-lost artifact, Fraz-Urb'luu's Staff. If the staff is dragged from the pocket plane, the tome is reduced to a mundane and quite out-of-date copy of the Tome of Zyx, the work that served as the foundation for the Demonomicon. Once the staff emerges, the demon lord Fraz-Urb'luu instantly knows.",
		]
	}],
	usages : 8,
	recovery : "dawn",
	action : ["action", "Containment"],
	spellcastingBonus : [{
		name : "Tasha's Hideous Laughter",
		spells : ["tasha's hideous laughter"],
		selection : ["tasha's hideous laughter"],
		firstCol : "atwill",
		fixedDC : 20,
	},{
		name : "Magic Circle",
		spells : ["magic circle"],
		selection : ["magic circle"],
		firstCol : "1c",
		allowUpCasting : true,
		fixedDC : 20,
	},{
		name : "Magic Jar",
		spells : ["magic jar"],
		selection : ["magic jar"],
		firstCol : "3c",
		allowUpCasting : true,
		fixedDC : 20,
	},{
		name : "Planar Ally",
		spells : ["planar ally"],
		selection : ["planar ally"],
		firstCol : "3c",
		allowUpCasting : true,
		fixedDC : 20,
	},{
		name : "Planar Binding",
		spells : ["planar binding"],
		selection : ["planar binding"],
		firstCol : "2c",
		allowUpCasting : true,
		fixedDC : 20,
	},{
		name : "Plane Shift (Abyss)",
		spells : ["plane shift"],
		selection : ["plane shift"],
		firstCol : "3c",
		allowUpCasting : true,
		fixedDC : 20,
	},{
		name : "Summon Fiend",
		spells : ["summon fiend"],
		selection : ["summon fiend"],
		firstCol : "3c",
		allowUpCasting : true,
		fixedDC : 20,
	}]
};
MagicItemsList["fragment of suffering"] = { // Call of the Netherdeep
	name : "Fragment of Suffering",
	source : [["CotN"]],
	type : "wondrous item",
	rarity : "unique",
	allowDuplicates : true,
	description : "As an action, a creature can touch a fragment it can see and thereby absorb the fragment into its body. A creature can absorb up to three Fragments of Suffering. If a creature that carries three fragments tries to absorb a fourth, the attempt fails automatically.",
	descriptionFull : "As an action, a creature can touch a fragment it can see and thereby absorb the fragment into its body. A creature can absorb up to three Fragments of Suffering. If a creature that carries three fragments tries to absorb a fourth, the attempt fails automatically..",
	choices : ["Abhorrence","Attachment","Deception","Despondence","Intransigence","Loathing","Melancholy","Pity","Rancor"],
	choicesNotInMenu : true,
	"abhorrence" : {
	name : "Fragment of Abhorrence",
	description : "[Benefit] Once on each of your turns when you hit a creature with a weapon attack roll, you can force the target to move up to 10 feet away from you in a direction of your choice. A creature that can't be frightened is immune to this effect. [Drawback] If you start your turn frightened, you take 2d6 psychic damage.",
	usages : 1,
	recovery : "turn",
	},
	"attachment" : {
	name : "Fragment of Attachment",
	description : "[Benefit] You can't be frightened while within 10 feet of an ally. If you're already frightened and move within 10 feet of an ally, the frightened condition ends on you. [Drawback] You have disadvantage on Wisdom and Charisma saving throws while you aren't within 10 feet of an ally.",
	savetxt : { text : ["immune to frightened while within 10' of ally"] },
	},
	"deception" : {
	name : "Fragment of Deception",
	description : "[Benefit] When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you make a damage roll or cast a spell. [Drawback] You have disadvantage on Wisdom checks.",
	},
	"despondence" : {
	name : "Fragment of Despondence",
	description : "[Benefit] You are immune to the charmed condition. [Drawback] You can't take the Help action.",
	savetxt : { immune : ["charmed"] },
	},
	"intransigence" : {
	name : "Fragment of Intransigence",
	description : "[Benefit] Another creature can't force you to move anywhere you don't want to go. [Drawback] You can't take the Disengage or Dodge action.",
	savetxt : { immune : ["forced movement"] },
	},
	"loathing" : {
	name : "Fragment of Loathing",
	description : "[Benefit] When a creature damages you with a weapon attack or a spell, you can focus your hatred on that creature. Until the end of your next turn, you have advantage on attack rolls you make against the creature. You can focus your hatred on only one creature at a time. [Drawback] You have disadvantage on Charisma checks.",
	},
	"melancholy" : {
	name : "Fragment of Melancholy",
	description : "[Benefit] When you fail a Wisdom or Charisma saving throw, you can reroll it with advantage, potentially turning a failure into a success. After you use this benefit, you must finish a long rest before you can use it again. [Drawback] If you use this fragment's benefit and it doesn't turn a failed saving throw into a success, you are incapacitated until the end of your next turn, overcome with despair.",
	},
	"pity" : {
	name : "Fragment of Pity",
	description : "[Benefit] Each time you spend a Hit Die to regain hit points, you regain additional hit points equal to your proficiency bonus. [Drawback] You have disadvantage on death saving throws.",
	},
	"rancor" : {
	name : "Fragment of Rancor",
	description : "[Benefit] When you hit a creature with an attack, you can choose to deal either an extra 2d6 psychic damage to the creature or 4d6 psychic damage to each other creature within 5 feet of it. After you use this benefit, you must finish a short or long rest before you can use it again. [Drawback] Whenever you are not unconscious and fail a saving throw, you take 2d6 psychic damage.",
	usages : 1,
	recovery : "short rest",
	},
};

// Add Creatures missing from official sources
CreatureList["berserker"] = { // SRD & MM
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
CreatureList["dragonnel"] = { // FToD, alternate for Find Greater Steed spell
	name : "Dragonnel",
	source : [["FToD", 190]],
	size : 2, //Large
	type : "Dragon",
	companion : ["steed"],
	alignment : "Neutral",
	ac : 13,
	hp : 58,
	hd : [9, 10],
	speed : "30 ft, fly 60 ft",
	scores : [16, 15, 12, 8, 13, 10],
	skills : {
		"perception" : 3
	},
	senses : "Blindsight 30 ft; Darkvision 120 ft",
	passivePerception : 13,
	languages : "understands Draconic and Common but can't speak",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Rend",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	actions : [{
		name : "Multiattack",
		description : "The dragonnel makes two Rend attacks."
	}],
	traits : [{
		name : "Flyby",
		description : "The dragonnel doesn't provoke an opportunity attack when it flies out of an enemy's reach."
	}]
};


// Add Telekinetic Shove to Telekinetic feat
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

// Add 'Wizard Cantrip Formula' full list
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
		CurrentSpells['wizard cantrip formulas'] = {
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
