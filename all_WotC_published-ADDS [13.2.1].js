var iFileName = "all_WotC_published-ADDS [13.2.1].js";
RequiredSheetVersion("13.2.1");

// Add Blessings from Dungeon Master's Guide (2014) (coded as Feats) [contributed by Nod_Hero]
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

// Add Blessings from Icewind Dale: Rime of the Frostmaiden  (coded as Feats) [contributed by Nod_Hero]
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

// Add Blessings from Phandelver and Below: The Shattered Obelisk  (coded as Feats) [contributed by Nod_Hero]
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

// Add Blessing from Vecna: Eve of Ruin  (coded as Feat) [contributed by Nod_Hero]
AddFeatureChoice(FeatsList["blessing"], false, "Vecna's Link", {
	name : "Vecna's Link",
    source : [["VEoR", 30]],
    description: "I gain a special intuition for secrets. I have advantage on Wisdom (Insight) checks. In addition, I can use an action to cast See Invisibility without expending a spell slot. Once I cast that spell in this way, I can't do so again until I finish a long rest.",
	descriptionFull : "You gain a special intuition for secrets. You have advantage on Wisdom (Insight) checks. In addition, you can use an action to cast See Invisibility without expending a spell slot. Once you cast that spell in this way, you can't do so again until you finish a long rest. ",
    usages : 1,
    recovery : "long rest",
	action : ["action", " (See Invisibility)"],
	spellcastingBonus : {
		name : "Vecna's Link",
		spells : ["see invisibility"],
		selection : ["see invisibility"],
		firstCol : "oncelr"
	},
	vision : [["Adv. Wis (Insight) checks", ""]],
	advantages : [["Insight", true]],
});
/* Vecna's Link
The characters each gain a metaphysical link to Vecna, which follows the rules for blessings presented in the Dungeon Master's Guide. Vecna's Link is the result of feedback from the interrupted ritual. Vecna is unaware the characters—or anyone, for that matter—are linked with him, so the god has no reason to sever the tie. The link can manifest as subtly or as obviously as each player wishes, from the sensation of a specific smell when the character thinks of Vecna to a loud noise only they hear when the lich's name is uttered.
When the characters acquire this link, remind them about the Power of Secrets rules. Allow them to spend any secrets they've gained so far as usual. */

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
		usages : 6,
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

// Add Charm from Heroes’ Feast: Saving the Children’s Menu
SourceList["HFStCM"] = {
	name : "Heroes’ Feast: Saving the Children’s Menu",
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
        usages : 1,
        recovery : "short rest",
		additional : "of Combat Prowess",
    },
    "boon of dimensional travel": {
        description: "As an action, I can cast the misty step spell, without using a spell slot or any components. Once I do so, I can't use this boon again until I finish a short rest.",
        usages : 1,
        recovery : "short rest",
		additional : "of Dimensional Travel",
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
        usages : 1,
        recovery : "short rest",
		additional : "of Fate",
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
        recovery : "short rest",
		additional : "of Invincibility",
    },
    "boon of irresistible offense": {
        description: "I can bypass the damage resistances of any creature.",
    },
    "boon of luck": {
        description: "I can add a d10 roll to any ability check, attack roll, or saving throw I make. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest",
		additional : "of Luck",
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
        recovery : "short rest",
		additional : "of Peerless Aim",
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
        usages : 1,
        recovery : "short rest",
		additional : "of Planar Travel",
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
		additional : "of Recovery",
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
        recovery : "short rest",
		additional : "of Speed"
    },
    "boon of spell mastery": {
        description: "I choose one 1st-level sorcerer, warlock, or wizard spell that I can cast. I can now cast that spell at its lowest level without expending a spell slot.",
    },
    "boon of spell recall": {
        description: "I can cast any spell I know or have prepared without expending a spell slot. Once I do so, I can't use this boon again until I finish a long rest.",
        usages : 1,
        recovery : "long rest",
		additional : "of Spell Recall"
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

// Add Magic Items
MagicItemsList["vanrak's mithral shirt"] = { // Waterdeep Dungeon of the Mad Mage
	name : "Vanrak's Mithral Shirt",
	source : [["WDotMM", 237], ["SRD", 231], ["D", 182]],
	type : "armor (chain shirt)",
	rarity : "uncommon",
	description : "While you wear this mithral chain shirt, you gain darkvision out to a range of 60 feet. A mithral chain shirt can be worn under normal clothes.",
	descriptionFull : "Buried under the rubble of Vanrak's Throne is Vanrak Moonstar's ancient mithral armor (chain shirt), which has the additional property of granting its wearer darkvision out to a range of 60 feet. Mithral is a light, flexible metal. A mithral chain shirt can be worn under normal clothes.\nIf a character dons this armor in Vanrakdoom, two shadow assassins materialize nearby and attack the character. ",
	vision : [["Darkvision", 60]],
	weight : 20,
	armorOptions : [{
		regExpSearch : /vanrak's mithral shirt/i,
		name : "Vanrak's Mithral Shirt",
		source : [["WDotMM", 237], ["SRD", 231], ["D", 182]],
		type : "medium",
		ac : "13",
		weight : 20,
		selectNow : true
	}],
};

// Add Artifacts and Story-line Magic Items
MagicItemsList["stone of golorr"] = { // Waterdeep Dragon Heist
	name : "Stone of Golorr",
	source : [["WDH", 192]],
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
	source : [["DiA", 225]],
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
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*sword)(?=.*zariel).*$/i,
		name : "Sword of Zariel",
		source : ["DiA", 225],
		description : "+2d8 radiant or Versatile (1d10 + 3d10 radiant), evil DC 17 Con save or blinded until end of its next turn;",
		selectNow : true
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
	descriptionFull : "This magnificent child's toy has three spinner sides engraved with runes spelling out 'Weal', 'Woe', and 'Weal and Woe'. The fourth side is blank. It can be used as the material component for the Augury spell and can be used to cast the Augury spell once per dawn.",
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
MagicItemsList["crown of lies"] = { // Vecna: Eve of Ruin
	name : "Crown of Lies",
	source : [["VEoR", 6]],
	type : "wondrous item",
	rarity : "artifact",
	attunement : true,
	prerequisite : "Attunement requires a creature to speak a true desire of their heart",
	description : "As an action, I transform myself to look and feel like any creature I've seen whose size is no more than one different than mine. I exactly mimic the creature's appearance and voice. I retain my own game statistics except size and speed. The only way to reveal my true nature is with a Wish spell. [see Notes]",
	descriptionLong : "The crown is made of burnished and entwined metal rods. As an action, I transform myself to look and feel like any creature I've seen whose size is no more than one size different than mine. The new form exactly mimics the creature's appearance and voice. I retain my own game statistics except size and speed. While in this new form, unless I will it to be visible, the crown is undetectable. Interactions reveal no illusory magic. I count as the chosen creature for the purposes of spells, traps, and other defenses. Any lies I tell always seem to be true. The only way to reveal my true nature is with a Wish spell. [see Notes]",
	descriptionFull : "After betraying and nearly destroying the lich Vecna, the warrior Kas found himself trapped in the Shadowfell, imprisoned in a Domain of Dread called Tovag. There, he languished as a vampire. In time, the Dark Powers of the Domain of Dread lured Kas to a hidden forge, where he found the Crown of Lies. Once Kas vowed to deliver Vecna into the Dark Powers' clutches and donned the crown, the Dark Powers released Kas. From there, Kas set out to ruin his former master. Should Kas fail, the Dark Powers will reclaim him.\nThe crown is made of burnished and entwined metal rods. To attune to it, you must place it on your head and speak a true desire of your heart. You know how to attune to the crown when you touch it.\n\nRandom Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  1 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n\nPerfect Disguise.\nWhile attuned to the crown, you can use an action to transform yourself to look and feel like any creature you've seen at least once and whose size is no more than one size smaller or larger than yours.\n\nThe new form mimics the chosen creature's appearance exactly, including its voice. Your size and speed are replaced by the chosen creature's. You otherwise retain your own game statistics. While in this new form, the crown melds into your person and is undetectable.\n\nYour new form lasts until you die, your attunement to the crown ends, or you use another action to transform into a different creature or your true form. Interactions with you while you are transformed by the crown reveal no illusory magic, nor do they reveal anything other than details about the creature you're disguised as. You count as the chosen creature for the purposes of spells, traps, and other defenses that wouldn't target the chosen creature.\n\nWhile in your disguised form, any lies you tell always seem to be true, no matter what magical or mundane methods are used to try to detect your falsehoods. You are the recipient of Sending spells addressed to you and the creature you are disguised as, and Scrying and similar spells that target the creature you are disguised as actually target you. The only way to reveal your true nature while transformed by the crown is with a Wish spell.\n\nWhile wearing this crown in your true form, you can choose for the crown to be visible if you wish.",
	toNotesPage : [{
		name : "Crown of Lies",
		note : [
			"After betraying and nearly destroying the lich Vecna, the warrior Kas found himself trapped in the Shadowfell, imprisoned in a Domain of Dread called Tovag. There, he languished as a vampire. In time, the Dark Powers of the Domain of Dread lured Kas to a hidden forge, where he found the Crown of Lies. Once Kas vowed to deliver Vecna into the Dark Powers' clutches and donned the crown, the Dark Powers released Kas. From there, Kas set out to ruin his former master. Should Kas fail, the Dark Powers will reclaim him.",
			"\nThe crown is made of burnished and entwined metal rods. To attune to it, you must place it on your head and speak a true desire of your heart. You know how to attune to the crown when you touch it.",
			"\nRandom Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the 'Artifacts' section of the Dungeon Masters Guide:\n\t1 minor beneficial property\n\t1 major beneficial property\n\t1 minor detrimental property",
			"\nPerfect Disguise",
			"While attuned to the crown, you can use an action to transform yourself to look and feel like any creature you've seen at least once and whose size is no more than one size smaller or larger than yours.",
			"\nThe new form mimics the chosen creature's appearance exactly, including its voice. Your size and speed are replaced by the chosen creature's. You otherwise retain your own game statistics. While in this new form, the crown melds into your person and is undetectable.",
			"\nYour new form lasts until you die, your attunement to the crown ends, or you use another action to transform into a different creature or your true form. Interactions with you while you are transformed by the crown reveal no illusory magic, nor do they reveal anything other than details about the creature you're disguised as. You count as the chosen creature for the purposes of spells, traps, and other defenses that wouldn't target the chosen creature.",
			"\nWhile in your disguised form, any lies you tell always seem to be true, no matter what magical or mundane methods are used to try to detect your falsehoods. You are the recipient of Sending spells addressed to you and the creature you are disguised as, and Scrying and similar spells that target the creature you are disguised as actually target you. The only way to reveal your true nature while transformed by the crown is with a Wish spell.",
			"\nWhile wearing this crown in your true form, you can choose for the crown to be visible if you wish.",
			"\nDestroying the Crown",
			"If a creature wearing the crown is killed by the creature it is disguised as, the crown disintegrates and is destroyed.",
		]
	}],
	action : ["action", " (Perfect Disguise)"],
};
MagicItemsList["daoud's wondrous lanthorn"] = { // Quests From the Infinite Staircase
	name : "Daoud's Wondrous Lanthorn",
	source : [["QftIS", 190]],
	type : "wondrous item",
	rarity : "artifact",
	attunement : true,
	description : "This artifact destroys wealth to provide light and protection. Wrought from the finest yellow gold, the lantern has four faces, and an unwavering amber flame burns within it. The faces of the lantern are fitted with faceted gemstone lenses. The Lanthorn's light enables several powers (see Notes)",
	descriptionFull : "This artifact destroys wealth to provide light and protection. Wrought from the finest yellow gold, the lantern has four faces, and an unwavering amber flame burns within it. The faces of the lantern are fitted with faceted gemstone lenses."+
	"\n   The lantern is a symbol of the teachings of Daoud, who was once a priest of Istus, a god of fate. When Daoud was stripped of his possessions, he developed a radical new philosophy in his quest to understand fate. He urged followers of his ideology to eschew wealth and seek out all fortunes, good and ill, to unravel the cloth of destiny."+
	"\n\nRandom Properties."+
	"\n   The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property"+
	"\n\nPrecious Fuel."+
	"\n   The lantern burns only one source of fuel: powdered gemstones placed in the lantern's base. The lantern can hold a maximum of 10,000 gp worth of powdered gems, and it contains 9,000 gp of fuel when found. Thereafter it attempts to burn 100 gp of fuel after each year passes, keeping the lantern burning for another year. If no fuel is available, the lantern's flame goes out. You can add more fuel to the lantern as part of a short or long rest. Once added, fuel can't be removed from the lantern's base."+
	"\n   The lantern's flame can't be extinguished by any means other than running out of fuel. If the lantern's flame goes out, the creature attuned to it immediately dies. One exception to this rule exists (see the \"Destroying the Lantern\" section)."+
	"\n\nRevealing Light."+
	"\n   The lantern sheds bright light in a 60-foot radius and dim light for an additional 60 feet. Invisible creatures and objects are visible while in the lantern's bright light.\n"+ 
	"   While attuned to the lantern, you can use a bonus action to dim the lantern, reducing the light to dim light in a 5-foot radius, or brighten the lantern back to its normal bright light radius."+
	"\n\nLenses."+
	"\n   When found, the lantern's faces display the following gem lenses: diamond, emerald, ruby, and sapphire. As part of a short or long rest, you can magically change any of these gem lenses to a different type of gem shown in the Lenses table. The gem lenses can't be removed from the lantern."+ 
	"\n   As an action while holding the lantern, you can burn some of the lantern's fuel to cast a spell (save DC 20) through one or more of its current gem lenses, as noted in the Lenses table. The spell's target or point of origin must be in the lantern's area of bright light. If there isn't enough fuel left to cast the spell, the last of the remaining fuel is expended, and the flame goes out."+
	"\nLenses"+
	"\nLens Color\t\t\tSpell\t\tFuel Cost"+
	"\nAmethyst\t\t\tReverse Gravity\t3,000 gp"+
	"\nDiamond\t\t\tDisintegrate\t2,000 gp"+
	"\nEmerald\t\t\tHaste\t\t500 gp"+
	"\nJacinth\t\t\tFlame Strike\t1,000 gp"+
	"\nRuby\t\t\tHold Monster\t1,000 gp"+
	"\nSapphire\t\t\tFear\t\t500 gp"+
	"\nTopaz\t\t\tSlow\t\t500 gp"+
	"\nAny four colors\t\tPrismatic Wall\t5,000 gp"+
	"\n\nDestroying the Lantern. To destroy the lantern, the creature attuned to it must forsake all material possessions except for the lantern and common clothes. Then the creature must willingly snuff the lantern's flame with the intention to destroy the artifact. When its flame is snuffed in this way, the lantern's gold corrodes, the lenses and remaining gemstone fuel turn to worthless sand, and the creature attuned to it is spared.",	
	toNotesPage : [{ name : "Daoud's Wondrous Lanthorn",
	note : [
	"This artifact destroys wealth to provide light and protection. Wrought from the finest yellow gold, the lantern has four faces, and an unwavering amber flame burns within it. The faces of the lantern are fitted with faceted gemstone lenses."+
	"\n   The lantern is a symbol of the teachings of Daoud, who was once a priest of Istus, a god of fate. When Daoud was stripped of his possessions, he developed a radical new philosophy in his quest to understand fate. He urged followers of his ideology to eschew wealth and seek out all fortunes, good and ill, to unravel the cloth of destiny."+
	"\n\nRandom Properties."+
	"\n   The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property"+
	"\n\nPrecious Fuel."+
	"\n   The lantern burns only one source of fuel: powdered gemstones placed in the lantern's base. The lantern can hold a maximum of 10,000 gp worth of powdered gems, and it contains 9,000 gp of fuel when found. Thereafter it attempts to burn 100 gp of fuel after each year passes, keeping the lantern burning for another year. If no fuel is available, the lantern's flame goes out. You can add more fuel to the lantern as part of a short or long rest. Once added, fuel can't be removed from the lantern's base."+
	"\n   The lantern's flame can't be extinguished by any means other than running out of fuel. If the lantern's flame goes out, the creature attuned to it immediately dies. One exception to this rule exists (see the \"Destroying the Lantern\" section)."+
	"\n\nRevealing Light."+
	"\n   The lantern sheds bright light in a 60-foot radius and dim light for an additional 60 feet. Invisible creatures and objects are visible while in the lantern's bright light."+ 
	"\n   While attuned to the lantern, you can use a bonus action to dim the lantern, reducing the light to dim light in a 5-foot radius, or brighten the lantern back to its normal bright light radius."+
	"\n\nLenses."+
	"\n   When found, the lantern's faces display the following gem lenses: diamond, emerald, ruby, and sapphire. As part of a short or long rest, you can magically change any of these gem lenses to a different type of gem shown in the Lenses table. The gem lenses can't be removed from the lantern."+ 
	"\n   As an action while holding the lantern, you can burn some of the lantern's fuel to cast a spell (save DC 20) through one or more of its current gem lenses, as noted in the Lenses table. The spell's target or point of origin must be in the lantern's area of bright light. If there isn't enough fuel left to cast the spell, the last of the remaining fuel is expended, and the flame goes out."+
	"\nLenses"+
	"\nLens Color\t\t\tSpell\t\tFuel Cost"+
	"\nAmethyst\t\t\tReverse Gravity\t3,000 gp"+
	"\nDiamond\t\t\tDisintegrate\t2,000 gp"+
	"\nEmerald\t\t\tHaste\t\t500 gp"+
	"\nJacinth\t\t\tFlame Strike\t1,000 gp"+
	"\nRuby\t\t\tHold Monster\t1,000 gp"+
	"\nSapphire\t\t\tFear\t\t500 gp"+
	"\nTopaz\t\t\tSlow\t\t500 gp"+
	"\nAny four colors\t\tPrismatic Wall\t5,000 gp"+
	"\n\nDestroying the Lantern."+
	"\n   To destroy the lantern, the creature attuned to it must forsake all material possessions except for the lantern and common clothes. Then the creature must willingly snuff the lantern's flame with the intention to destroy the artifact. When its flame is snuffed in this way, the lantern's gold corrodes, the lenses and remaining gemstone fuel turn to worthless sand, and the creature attuned to it is spared.", ],
	}],
	action : [["action", "Wondrous Lanthorn (spells)"], ["bonus", "Wondrous Lanthorn (dim/brighten)"]],
	vision : [["Invisible creatures & objects visible in lantern's bright light", 60]],
	extraLimitedFeatures : [{
	name : "Wondrous Lanthorn Lens choices",
	usages : 4,
	recovery : "short"
	}],
	limfeaname : "Lanthorn Fuel",
	usages : 9000,
	recovery : "gems",
	additional : "max 10k as part of rest",
	spellFirstColTitle : "FC",
	spellcastingBonus : [{
		name : "Amethyst (choose 4)",
		spells : ["reverse gravity"],
		selection : [""],
		firstCol : "3k",
		fixedDC : 20,
	},{
		name : "Diamond (choose 4)",
		spells : ["disintegrate"],
		selection : ["disintegrate"],
		firstCol : "2k",
		fixedDC : 20,
	},{
		name : "Emerald (choose 4)",
		spells : ["haste"],
		selection : ["haste"],
		firstCol : "5h",
		fixedDC : 20,
	},{
		name : "Jacinth (choose 4)",
		spells : ["flame strike"],
		selection : [""],
		firstCol : "1k",
		fixedDC : 20,
	},{
		name : "Ruby (choose 4)",
		spells : ["hold monster"],
		selection : ["hold monster"],
		firstCol : "1k",
		fixedDC : 20,
	},{
		name : "Sapphire (choose 4)",
		spells : ["fear"],
		selection : ["fear"],
		firstCol : "5h",
		fixedDC : 20,
	},{
		name : "Topaz (choose 4)",
		spells : ["slow"],
		selection : [""],
		firstCol : "5h",
		fixedDC : 20,
	},{
		name : "any four",
		spells : ["prismatic wall"],
		selection : ["prismatic wall"],
		firstCol : "5k",
		fixedDC : 20,
	}],
	spellChanges : {
		"reverse gravity" : { range : "60 ft", },
		"disintigrate" : { range : "60 ft", },
		"haste" : { range : "60 ft", },
		"flame strike" : { range : "60 ft", },
		"hold monster" : { range : "60 ft", },
		"slow" : { range : "60 ft", },
		"prismatic wall" : { range : "60 ft", },
	}
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
CreatureList["bronze dragon wyrmling"] = { // MM [contributed by Newbuu2]
	name : "Bronze Dragon Wyrmling",
	source : [["M", 109]],
	size : 3,
	type : "Dragon",
	subtype : "",
	alignment : "Lawful Good",
	ac : 17,
	hp : 32,
	hd : [5, 8],
	speed : "30 ft,\nfly 60 ft,\nswim 30 ft",
	scores : [17, 10, 15, 12, 11, 15],
	saves : ["", 2, 4, "", 2, 4],
	skills : {
		"perception" : 4,
		"stealth" : 2
	},
	damage_immunities : "lightning",
	senses : "Blindsight 10 ft; Darkvision 60 ft",
	passivePerception : 14,
	languages : "Draconic",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)"
		}
	],
	traits : [{
		name : "Amphibious",
		description : "The dragon can breathe air and water."
	},{
		name : "Breath Weapons (Recharge 5-6)",
		description : "The dragon uses one of the following breath weapons."
	}, {
		name : "Lightning Breath",
		description : "The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one."
	}, {
		name : "Repulsion Breath",
		description : "The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon."
	}],
};
CreatureList["copper dragon wyrmling"] = { // MM [contributed by Newbuu2]
	name : "Copper Dragon Wyrmling",
	source : [["M", 111]],
	size : 3,
	type : "Dragon",
	subtype : "",
	alignment : "Chaotic Good",
	ac : 16,
	hp : 22,
	hd : [4, 8],
	speed : "30 ft,\nclimb 30 ft,\nfly 60 ft",
	scores : [15, 12, 13, 14, 11, 13],
	saves : ["", 3, 3, "", 2, 3],
	skills : {
		"perception" : 4,
		"stealth" : 3
	},
	damage_immunities : "acid",
	senses : "Blindsight 10 ft; Darkvision 60 ft",
	passivePerception : 14,
	languages : "Draconic",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)"
		}
	],
	traits : [{
		name : "Breath Weapons (Recharge 5-6)",
		description : "The dragon uses one of the following breath weapons."
	}, {
		name : "Acid Breath",
		description : "The dragon exhales acid in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one."
	}, {
		name : "Slowing Breath",
		description : "The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
	}],
};
CreatureList["silver dragon wyrmling"] = { // MM [contributed by Newbuu2]
	name : "Silver Dragon Wyrmling",
	source : [["M", 118]],
	size : 3,
	type : "Dragon",
	subtype : "",
	alignment : "Lawful Good",
	ac : 17,
	hp : 45,
	hd : [6, 8],
	speed : "30 ft,\nfly 60 ft",
	scores : [19, 10, 17, 12, 11, 15],
	saves : ["", 2, 5, "", 2, 4],
	skills : {
		"perception" : 4,
		"stealth" : 2
	},
	damage_immunities : "cold",
	senses : "Blindsight 10 ft; Darkvision 60 ft",
	passivePerception : 14,
	languages : "Draconic",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)"
		}
	],
	traits : [{
		name : "Breath Weapons (Recharge 5-6)",
		description : "The dragon uses one of the following breath weapons."
	}, {
		name : "Cold Breath",
		description : "The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one."
	}, {
		name : "Paralyzing Breath",
		description : "The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
	}],
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

/* WIP/TO-DO LIST
> Add Creatures from Charms (Book of Many Things)
	Bearded Devil
	Knight (neutral good, celestial instead of humanoid)
> Add rest of Wyrmlings
> Add other artifacts
	+ Rod of Seven Parts
	+ Sword of Kas
	+ Hand of Vecna
	+ Eye of Vecna
*/