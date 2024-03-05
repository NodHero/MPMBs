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

AddFeatureChoice(FeatsList["blessing"], false, "of the Frostmaiden", {
	name : "Blessing of the Frostmaiden",
    source : [["RotF", 213]],
    description: "My eyes become as cold as ice. I gain immunity to cold damage. In addition, I can cast the cone of cold spell (save DC 15) once. I regain the ability to cast this spell when I finish a long rest.",
	descriptionFull : "Your eyes become as cold as ice. You gain immunity to cold damage. In addition, you can cast the cone of cold spell (save DC 15) once. You regain the ability to cast this spell when you finish a long rest.",
	savetxt : { immune : ["cold"] },
    usages : 1,
    recovery : "long rest",
	spellcastingBonus : {
		name : "Cone of Cold",
		spells : ["cone of cold"],
		selection : ["cone of cold"]
	},
	fixedDC : 15	
});
AddFeatureChoice(FeatsList["blessing"], false, "of the Morninglord", {
	name : "Blessing of the Morninglord",
    source : [["RotF", 119]],
    description: "I gain 10 temporary hit points each day at dawn.",
	descriptionFull : "You gain 10 temporary hit points each day at dawn.",
    usages : "each day at",
    recovery : "dawn",
	additional : "(10 THP)"
});
AddFeatureChoice(FeatsList["blessing"], false, "of Dumathoin", {
	name : "Blessing of Dumathoin",
    source : [["PaBTSO", 171]],
    description: "My eyes become keen enough to pick out hidden secrets. I gain darkvision. If I already had darkvision, I can see in color in the dark. In addition, I can use an action to gain truesight for 1 minute. Once I gain truesight in this way, I can't do so again until I finish a long rest.",
	descriptionFull : "Your eyes become keen enough to pick out hidden secrets. You gain darkvision. If you already had darkvision, you can see in color in the dark. In addition, you can use an action to gain truesight for 1 minute. Once you gain truesight in this way, you can't do so again until you finish a long rest.",
    usages : 1,
    recovery : "long rest",
	additional : "Truesight",
	vision : [["Darkvision", "fixed 60"]],
	action : ["action", ""]
});
AddFeatureChoice(FeatsList["blessing"], false, "of the Solipsistic Mind", {
	name : "Blessing of the Solipsistic Mind",
    source : [["PaBTSO", 177]],
    description: "I can take an action to focus my inner mind for 1 hour. While focused, I can't take reactions. When I make an Intelligence or Wisdom ability check or Intelligence or Wisdom save, I can roll a d8 and add the number rolled to the check or save. I regain the ability to focus my inner mind when I finish a long rest.",
	descriptionFull : "You access esoteric truths from an ancient tome by focusing deeply on your own thoughts. You can take an action to focus your inner mind. This focus lasts for 1 hour. While your inner mind is focused, you can't take reactions. For the duration, when you make an Intelligence check, Wisdom check, Intelligence saving throw, or Wisdom saving throw, you can roll a d8 and add the number rolled to the ability check or saving throw. You regain the ability to focus your inner mind when you finish a long rest.",
    usages : 1,
    recovery : "long rest",
	action : ["action", "Focus Inner Mind"]
});


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

// Add Charms from Book of Many Things (coded as Magic Items) [contributed by Nod_Hero]
MagicItemsList["charm (book of many things)"] = {
	name : "Charm (Book of Many Things)",
	source : [["BoMT", 62]],
	type : "charm",
	rarity : "supernatural gift",
	descriptionFull : "This section presents magical charms inspired by the Deck of Many Things. See the Dungeon Master's Guide for more information on charms.",
	allowDuplicates : true,
	choices : ["Balance", "Euryale", "Many Things", "Ruin", "Comet", "Donjon", "Fates", "Flames", "Fool", "Gem", "Jester", "Key", "Knight", "Moon", "Puzzle", "Rogue", "Sage", "Skull", "Star", "Sun", "Talons", "Throne", "Void"],
	"balance" : {
		name : "Charm of Balance",
		description : "When a creature I can see within 60 feet of me damages me, I can use my reaction to deal an amount of force damage to that creature equal to half the damage I took. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["reaction", ""]],
	},
	"euryale" : {
		name : "Charm of Euryale",
		description : "As an action, I can unleash a magical petrifying 30-ft cone from my eyes. Each creature must make a DC 15 Con save. Failed save, petrified for 1 hour. Successful save, restrained. Restrained creature can repeat the save at end of each of its turns, ending the effect on itself on a success. Charm vanishes once used.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]],
	},
	"many things" : {
		name : "Charm of Many Things",
		description : "I am infused with a burst of magic from a Deck of Many Things. As an action, I can touch a willing creature other than myself and bestow the effect of a single randomly determined card from the deck upon the target. Charm vanishes once used.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]],
	},
	"ruin" : {
		name : "Charm of Ruin",
		description : "As an action, I can touch a nonmagical object, or a section of a larger nonmagical object, that fits in a 5-foot cube. The target is reduced to dust. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]],
	},
	"comet" : {
		name : "Charm of the Comet",
		description : "As an action, I can force a creature I can see within 60 feet of me to focus on me. For 1 minute, creatures other than myself and the target are invisible to the target. The effect ends if any creature other than me damages the target or forces the target to make a saving throw. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]],
	},
	"donjon" : {
		name : "Charm of The Donjon",
		description : "I can cast Otiluke's Resilient Sphere, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["otiluke's resilient sphere"],
		selection : ["otiluke's resilient sphere"],
		firstCol : "1",
		}],
		spellChanges : {
		"otiluke's resilient sphere" : {
			components : "",
			changes : "My Charm of the Donjon allows me to cast Otiluke's Resilient Sphere three times without requiring components."
			}
		},
	},
	"fates" : {
		name : "Charm of the Fates",
		description : "I can tug on the threads of fate to tweak circumstance in my favor. After I make an ability check, an attack roll, or a saving throw, I can roll a d10 and add it to the total, potentially turning failure into success. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
	},
	"flames" : {
		name : "Charm of the Flames",
		description : "As an action, I can summon two bearded devils in unoccupied spaces within 60 ft. They obey my commands, take their turns immediately after mine, and can't summon other devils, They remain for 10 min, until it or I die, or until I dismiss one or both as an action. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", " (summon/dismiss)"]],
	},
	"fool" : {
		name : "Charm of the Fool",
		description : "I can cast Major Image, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). When I cast the spell in this way, it lasts its full duration with no concentration required. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["major image"],
		selection : ["major image"],
		firstCol : "1",
		}],
		spellChanges : {
		"major image" : {
			components : "",
			duration : "10 min",
			changes : "My Charm of the Fool allows me to cast Major Image three times without requiring components and lasts its full duration with no concentration required."
			}
		},
	},
	"gem" : {
		name : "Charm of the Gem",
		description : "As an action, I create a 30-ft cone of 4d10 10 gp value gems originating from me. Each creature in that area must make a DC 15 Dex save. Failed save takes bludgeoning damage equal to the number of gems created. Successful save takes half. The gems remain after the effect ends. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]],
	},
	"jester" : {
		name : "Charm of the Jester",
		description : "I can cast Tasha's Hideous Laughter, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["tasha's hideous laughter"],
		selection : ["tasha's hideous laughter"],
		firstCol : "1",
		}],
		spellChanges : {
		"tasha's hideous laughter" : {
			components : "",
			changes : "My Charm of the Donjon allows me to cast Tasha's Hideous Laughter three times without requiring components."
			}
		},
	},
	"key" : {
		name : "Charm of the Key",
		description : "As a bonus action, I can touch a nonmagical melee weapon and imbue it with magic for 1 hour. For the duration, the weapon deals an extra 1d8 force damage on a hit and deals double damage to objects and structures. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", ""]],
	},
	"knight" : {
		name : "Charm of the Knight",
		description : "As an action, I can summon two neutral good Celestial knights in unoccupied spaces within 60 ft. They act as my allies and take their turns immediately after mine. The knights remain for 10 minutes, until they or I die, or until I dismiss one or both of them as an action. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", " (summon/dismiss)"]],
	},
	"moon" : {
		name : "Charm of the Moon",
		description : "As an action, I make a minor wish. When I do, I create the effects of a spell of 5th level or lower. The spell takes effect as part of this action and requires no spell components. Your Intelligence, Wisdom, or Charisma is the spellcasting ability for this spell (your choice). Once you use this charm, it vanishes from you.",
		usages : 1,
		recovery : "never",
		action : [["action", " (up to 5th lvl spell)"]],
	},
	"puzzle" : {
		name : "Charm of the Puzzle",
		description : "I can cast Hypnotic Pattern, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["hypnotic pattern"],
		selection : ["hypnotic pattern"],
		firstCol : "1",
		}],
		spellChanges : {
		"hypnotic pattern" : {
			components : "",
			changes : "My Charm of the Puzzle allows me to cast Hypnotic Pattern three times without requiring components."
			}
		},
	},
	"rogue" : {
		name : "Charm of the Rogue",
		description : "I can cast Mislead, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). When I cast the spell in this way, it lasts its full duration with no concentration required. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["mislead"],
		selection : ["mislead"],
		firstCol : "1",
		}],
		spellChanges : {
		"mislead" : {
			components : "",
			duration : "1 h",
			changes : "My Charm of the Rogue allows me to cast Mislead three times without requiring components and lasts its full duration with no concentration required."
			}
		},
	},
	"sage" : {
		name : "Charm of the Sage",
		description : "I can cast Divination, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["divination"],
		selection : ["divination"],
		firstCol : "1",
		}],
		spellChanges : {
		"divination" : {
			components : "",
			changes : "My Charm of the Sage allows me to cast Divination three times without requiring components."
			}
		},
	},
	"skull" : {
		name : "Charm of the Skull",
		description : "As a bonus action, my equipment vanishes and I am a Wraith (not alignment, personality; Int, Wis, and Cha scores; passive Perception, and languages.) I can't Create Specter. This lasts for 1 minute, until Wraith reduced to 0 hp (extra dmg spills over), or use a bonus action to end it. Charm vanishes once used 3 times.",
		descriptionFull : "As a bonus action, I can transform into a deathly apparition. My game statistics are replaced by those of a Wraith, except for my alignment and personality; my Intelligence, Wisdom, and Charisma scores; and my passive Wisdom (Perception) score and languages. I don't have the wraith's Create Specter ability. My equipment vanishes when I transform but returns when the transformation ends. The transformation lasts for 1 minute, until my wraith form is reduced to 0 hit points, or until I use a bonus action to end it. If the wraith form is reduced to 0 hit points and there is still damage left over, the remaining damage applies to my normal hit points. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", " {transform/end)"]],
	},
	"star" : {
		name : "Charm of the Star",
		description : "I can cast Enhance Ability, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). When I cast the spell in this way, it lasts its full duration with no concentration required. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["enhance ability"],
		selection : ["enhance ability"],
		firstCol : "1",
		}],
		spellChanges : {
		"enhance ability" : {
			components : "",
			duration : "1 h",
			changes : "My Charm of the Star allows me to cast Enhance Ability three times without requiring components and lasts its full duration with no concentration required."
			}
		},
	},
	"sun" : {
		name : "Charm of the Sun",
		description : "I learn the Light cantrip if I don't already know it. I can cast Sunburst, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Once used, the charm vanishes from me, and I unlearn the Light cantrip gained from this charm.",
		usages : 1,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "Light",
		spells : ["light"],
		selection : ["light"],
		firstCol : "atwill"
		}, {
		name : "1 charge",
		spells : ["sunburst"],
		selection : ["sunburst"],
		firstCol : "1"
		}],
		spellChanges : {
		"sunburst" : {
			components : "",
			changes : "My Charm of the Sun allows me to cast Sunburst one time without requiring components."
			}
		},
	},
	"talons" : {
		name : "Charm of the Talons",
		description : "I can cast Dispel Magic, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). If I successfully end any spells with it, I gain 1d6 temporary hit points for each spell level of the highest-level spell ended. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		firstCol : "1",
		}],
		spellChanges : {
		"dispel magic" : {
			components : "",
			description : "Dispel spells on crea/object; if > SL, DC 10+SL spellcasting ability check; gain 1d6 thp per highest dispel",
			changes : "My Charm of the Talons allows me to cast Dispel Magic three times without requiring components and if I successfully end any spells with it, I gain 1d6 temporary hit points for each spell level of the highest-level spell ended."
			}
		},
	},
	"throne" : {
		name : "Charm of the Throne",
		description : "I can cast Mordenkainen's Magnificent Mansion, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["mordenkainen's magnificent mansion"],
		selection : ["mordenkainen's magnificent mansion"],
		firstCol : "1",
		}],
		spellChanges : {
		"mordenkainen's magnificent mansion" : {
			components : "",
			changes : "My Charm of the Throne allows me to cast Mordenkainen's Magnificent Mansion three times without requiring components."
			}
		},
	},
	"void" : {
		name : "Charm of the Void",
		description : "I can cast Banishment, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["Banishment"],
		selection : ["Banishment"],
		firstCol : "1",
		}],
		spellChanges : {
		"banishment" : {
			components : "",
			changes : "My Charm of the Void allows me to cast Banishment three times without requiring components."
			}
		},
	},
};

/* WIP/TO-DO LIST
> Add Creatures from Charms (Book of Many Things)
	Bearded Devil
	Knight (neutral good, celestial instead of humanoid)
*/

SourceList["HFStCM"] = {
	name : "Heroes’ Feast: Saving the Children’s Menu ",
	abbreviation : "HFStCM",
	group : "Adventure Books",
	campaignSetting : "Forgotten Realms",
	url : "https://www.dndbeyond.com/marketplace/adventures/heroes-feast-saving-the-childrens-menu",
	date : "2023/11/22"
};
AddFeatureChoice(MagicItemsList["charm"], false, "the Stumblenoodle", {
	name : "Charm of the Stumblenoodle",
    source : [["HFStCM"]],
    rarity : "rare",
    description: "When a creature I can see within 30 ft of me moves, I can use my reaction to give the creature the prone condition. Allies of the target within 30 ft of it must succeed on a DC 16 Wis save or be stunned until the end of their next turn as they laugh at their friend's misfortune. The charm vanishes from me after 3 uses.",
    descriptionLong: "When a creature you can see within 30 feet of you moves, you can use your reaction to give the creature the prone condition. Allies of the target who are within 30 feet of the target must succeed on a DC 16 Wisdom saving throw or have the stunned condition until the end of their next turn as they laugh uncontrollably at their friend's misfortune. Once used three times, the charm vanishes from you.",
    descriptionFull: "...",
    usages : 3,
    recovery : "Never",
	action : ["reaction", ""],
});


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
