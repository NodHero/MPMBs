var iFileName = "Fighter - Amazon v1.5 [Caio Sandy].js";
RequiredSheetVersion(13);

SourceList["CS:A"] = {
	name : "Caio Sandy: Fighter archetype: Amazon v1.5",
	abbreviation : "CS:A",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/171865/",
	date : "2017/05/10"
};

AddSubClass("fighter", "amazon", {
    regExpSearch : /amazon/i,
    subname : "Amazon",
	source : ["CS:A", 1],
    fullname : "Amazon",
    features : {
        "subclassfeature3" : {
            name : "Amazon Favored Weapons",
			source : ["CS:A", 1],
			minlevel : 1,
			description : "\n   " + "Amazons shine when using their set of favored weapons, namely bows, javelins, spears," + "\n   " + "and glaives. As you progress as an Amazon you will acquire more skill and be able to do" + "\n   " + "feats of excellence with your favored weapons.",
        },
        "subclassfeature3.1" : {
            name : "Combat Superiority",
			source : ["CS:A", 1],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers" + "\n   " + "I regain all superiority dice after a short rest" + "\n   " + "I can use the following maneuvers after the roll, but before I know the result of the roll:" + "\n    - " + "Inner Sight: Add half die (round up) to Acrobatics, Athletics, Perception, or Stealth" + "\n    - " + "Penetrate: Add superiority die score to attack roll with a favored weapon" + "\n    - " + "Power Strike: Add superiority die score to damage roll with a favored weapon",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
        },
        "subclassfeature7" : {
            name : "Amazon Skills",
            source : ["CS:A", 1],
            minlevel : 7,
            description : "\n   " + "At 7th level, I gain two Amazon Skills. I can pick a new feature from this list at level 15," + "\n   " + "and a final one at 18th level. I can’t pick the same feature twice." + "\n   " + "Use the \"Choose Feature\" button above to add a Amazon Skill to the third page",
			additional : ["", "", "", "", "", "", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known"],
			extraTimes : levels.map(function (n) {
			return n < 7 ? 0 : n < 15 ? 2 : n < 18 ? 3 : 4;
			}),
			extraname : "Amazon Skills",
			extrachoices : ["Fighting Style: Archery", "Fighting Style: Defense", "Fighting Style: Dueling", "Fighting Style: Great Weapon Fighting", "Fighting Style: Protection", "Fighting Style: Two-Weapon Fighting", "Fighting Style: Mariner", "Fighting Style: Close Quarters Shooting", "Fighting Style: Tunnel Fighter", "Additional Superiority Die", "Avoidance", "Darting and Crippling", "Elemental Strike", "Fend", "Improved Critical", "Riposte", "Strafe", "Superiority Savant", "Uncanny Dodge"],
			"fighting style: archery" : FightingStyles.archery,
			"fighting style: defense" : FightingStyles.defense,
			"fighting style: dueling" : FightingStyles.dueling,
			"fighting style: great weapon fighting" : FightingStyles.great_weapon,
			"fighting style: protection" : FightingStyles.protection,
			"fighting style: two-weapon fighting" : FightingStyles.two_weapon,
			"fighting style: mariner" : {
				name : "Amazon Skill: Mariner",
				source : ["UA:WA", 3],
				description : "\n   " + "While not wearing heavy armor or using a shield, I gain +1 AC and swim/climb speed" + "\n   " + "The swimming and climbing speeds are equal to my current walking speed",
				speed : {
					climb : { spd : "walk", enc : "walk" },
					swim : { spd : "walk", enc : "walk" }
				},
				eval : "AddACMisc(1, \"Mariner Fighting Style\", \"When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC\", \"ACshield || tDoc.getField('Heavy Armor').isBoxChecked(0)\")",
				removeeval : "AddACMisc(0, \"Mariner Fighting Style\", \"When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC\")"
			},
			"fighting style: close quarters shooting" : {
				name : "Amazon Skill: Close Quarters Shooting",
				source : ["UA:LDU", 1],
				description : "\n   " + "+1 bonus to attack rolls I make with ranged attacks" + "\n   " + "I don't have disadvantage when making a ranged attack while within 5 ft of a hostile" + "\n   " + "My ranged attacks ignore half and three-quarters cover against targets within 30 ft",
				calcChanges : {
					atkCalc : ["if (isRangedWeapon) {output.extraHit += 1; }; ", "My ranged weapons get a +1 bonus on the To Hit."]
				}
			},
			"fighting style: tunnel fighter" : {
				name : "Amazon Skill: Tunnel Fighter",
				source : ["UA:LDU", 1],
				description : "\n   " + "As a bonus action, I enter a defensive stance that lasts until the start of my next turn" + "\n   " + "While in the stance, I can make opportunity attacks without using my reaction" + "\n   " + "While I'm in this defensive stance I gain the following two benefits:" + "\n    - " + "I can make opportunity attacks without using my reaction" + "\n    - " + "I can make a melee attack as a reaction if a hostile moves >5 ft while in my reach",
				action : ["bonus action", ""]
			},
			"additional superiority die" : {
				name : "Amazon Skill: Additional Superiority Die",
				source : ["CS:A", 1],
				description : "\n   " + "I add one superiority die to my superiority dice total.",
                eval : function () {
                    AddFeature('Combat Superiority ', 1, '(d8)', 'short rest', 'Amazon Skill: Additional Superiority Die', 'bonus');
                    DontPrint("Class Features Menu");
                },
                removeeval : function () {
                    RemoveFeature('Combat Superiority ', 1);
                    if (!MakeClassMenu()) Hide("Class Features Menu");
                }
			},
			"avoidance" : {
				name : "Amazon Skill: Avoidance",
				source : ["CS:A", 1],
				description : "\n   " + "I gain +10 ft speed when I'm not wearing heavy armor. Opportunity attacks made" + "\n   " + "against me have disadvantage. Opportunity attacks that hit me have their damage" + "\n   " + "reduced by 2.",
				speed : { allModes : "+10" }
			},
			"darting and crippling" : {
				name : "Amazon Skill: Darting and Crippling",
				source : ["CS:A", 1],
				description : "\n   " + "As an action, I can make move my base walking speed and make a melee attack with my" + "\n   " + "favored weapons. A creature hit by this attack has its speed reduced by 10 until the end" + "\n   " + "of its next turn, or knocked prone if this would reduce the creature's speed below 0 feet.",
				action : ["action", ""]
			},
			"elemental strike" : {
				name : "Amazon Skill: Elemental Strike",
				source : ["CS:A", 1],
				description : "\n   " + "When I make a melee attack with a favored weapon, I can expend one superiority die and" + "\n   " + "add double the roll to the damage. I then replace the damage type for this attack with" + "\n   " + "either cold, fire or lightning damage" + "\n   " + "Alternatively, when I make a ranged attack with a bow, I can expend one superiority die" + "\n   " + "and add it to the damage. I then replace the damage type for this attack with force" + "\n   " + "damage and push the target 10 feet away from me in a straight line."
			},
			"fend" : {
				name : "Amazon Skill: Multiattack Fend",
				source : ["CS:A", 1],
				description : "\n   " + "As an action, I can make a melee attack with my favored weapons vs. all within my reach",
				action : ["action", ""]
			},
			"improved critical" : {
				name : "Amazon Skill: Improved Critical",
				source : ["CS:A", 1],
				description : "\n   " + "I score a critical hit with my weapon attacks on a roll of 19 and 20",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isSpell && !v.CritChance && classes.known.fighter && classes.known.fighter.level < 20) {
								fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
								v.CritChance = 19;
							};
						},
						"My weapon attacks score a critical on a to hit roll of both 19 and 20."
					]
				}
			},
			"riposte" : {
				name : "Amazon Skill: Riposte",
				source : ["CS:A", 1],
				description : "\n   " + "When missed in melee, I can use my reaction to make one melee attack with my favored" + "\n   " + "weapons vs. the attacker",
				action : ["reaction", " (after missed in melee)"]
			},
			"strafe" : {
				name : "Amazon Skill: Multiattack Strafe",
				source : ["CS:A", 1],
				description : "\n   " + "As an action, I can make ranged attacks with my favored weapons vs. all within a 10-ft" + "\n   " + "radius of a point in range" + "\n   " + "I can only do this while wearing no, light, or medium armor, and have the ammunition",
				action : ["action", ""]
			},
			"superiority savant" : {
				name : "Amazon Skill: Superiority Savant",
				source : ["CS:A", 1],
				description : "\n   " + "I can reroll a 1 on a superiority die, keeping the new result. I can use this feature a" + "\n   " + "number of times equal to my Constitution modifier (minimum of 1)" + "\n   " + "I regain all expended uses when I finish a long rest",
				usages : "Con modifier per ",
				usagescalc : "event.value = Math.max(1, What('Con Mod'));",
				recovery : "long rest",
			},
			"uncanny dodge" : {
				name : "Amazon Skill: Uncanny Dodge",
				source : ["CS:A", 1],
				description : "\n   " + "As a reaction when hit by an attacker that I can see, I can halve the attack's damage",
				action : ["reaction", ""]
			},
        },
        "subclassfeature10" : {
			name : "Improved Combat Superiority",
            source : ["CS:A", 1],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},        
		"subclassfeature15" : {
            name : "Relentless",
            source : ["CS:A", 1],
            minlevel : 15,
            description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative" 
        },
	}
});

if (!SourceList["UA:WA"]) {
	SourceList["UA:WA"] = {
		name : "Unearthed Arcana: Waterborne Adventures",
		abbreviation : "UA:WA",
		group : "Unearthed Arcana",
		url : "https://media.wizards.com/2015/downloads/dnd/UA_Waterborne_v3.pdf",
		date : "2015/05/04"
	};
};
if (!SourceList["UA:LDU"]) {
	SourceList["UA:LDU"] = {
		name : "Unearthed Arcana: Light, Dark, Underdark!",
		abbreviation : "UA:LDU",
		group : "Unearthed Arcana",
		url : "https://media.wizards.com/2015/downloads/dnd/02_UA_Underdark_Characters.pdf",
		date : "2015/11/02"
	};
};
