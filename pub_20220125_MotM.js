var iFileName = "pub_20220125_MotM.js";
RequiredSheetVersion("13.1.0");
// This file adds some of the player-material from Mordenkainen Presents: Monsters of the Multiverse to MotMB's Character Record Sheet

// Define the source
SourceList.MotM = {
	name: "Mordenkainen Presents: Monsters of the Multiverse",
	abbreviation: "MotM",
	abbreviationSpellsheet: "MO",
	group: "Primary Sources",
	url: "https://dnd.wizards.com/products/monsters-of-the-multiverse",
	date: "2022/01/25"
};

//Add Races
// Aarakocra
RaceList["multiverse aarakocra"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*aarakocra).*$/i,
	name : "Multiverse Aarakocra",
	sortname : "Aarakocra, Multiverse",
	source : [["MotM", 5]],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 0 }
	},
	languageProfs : ["Common", 1],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /talon/i,
		name : "Talons",
		source : [["MotM", 5]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Talons"],
	spellcastingAbility : [4, 5, 6],
	features : {
		"wind caller" : {
			name : "Wind Caller",
			minlevel : 3,
			spellcastingBonus : {
				name : "Wind Caller",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr',
				times : 1,
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Gust of Wind",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}],
		},
	},
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Aarakocra (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Flight: I have a flying speed equal to my walking speed. To use this speed, I can't be wearing medium or heavy armor."+
		"\n \u2022 Talons: My unarmed strikes deal 1d6 slashing damage on a hit."+
		"\n \u2022 Wind Caller: At 3rd level, I can cast Gust of Wind. I can cast it without using a spell slot once per long rest, as well as by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for this, chosen when I select the race.",
};
// Aasimar

// Bugbear
RaceList["multiverse bugbear"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*bugbear).*$/i,
	name : "Multiverse Bugbear",
	sortname : "Bugbear, Multiverse",
	source : [["MotM", 8]],
	plural : "Bugbears",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["charmed"] },
	skills : ["Stealth"],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "\n \u2022 Goblinoid: My creature type is humanoid, and I am considered a Goblinoid for any prerequisite or effect."+
		"\n \u2022 Fey Ancestry: I have advantage on saving throws to avoid or end the charmed condition on myself."+
		"\n \u2022 Powerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
		"\n \u2022 Long-Limbed: I add 5 feet of reach with melee attacks on my turn."+
		"\n \u2022 Sneaky: I am proficient in Stealth and can move through and stop in a space large enough for a Small creature without squeezing."+
		"\n \u2022 Surprise Attack: I deal an extra 2d6 damage with attack rolls on a creature if it hasn't taken a turn yet in the current combat.",
	carryingCapacity : 2
};
// Centaur
RaceList["multiverse centaur"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*centaur).*$/i,
	name : "Multiverse Centaur",
	sortname : "Centaur, Multiverse",
	source : [["MotM", 9]],
	plural : "Centaurs",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", 1],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\b(hoofs?|hooves)\b/i,
		name : "Hooves",
		source : [["MotM", 9]],
		damage : [1, 6, "bludgeoning"],
		description : "Use as bonus action after charge 30 ft"
	},
	weaponsAdd : ["Hooves"],
	skillstxt : "Choose one from Animal Handling, Medicine, Nature, or Survival",
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Centaur (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Fey: My creature type is Fey, rather than humanoid."+
		"\n \u2022 Hooves: I can use my hooves for unarmed strikes that deal 1d6 bludgeoning damage."+
		"\n \u2022 Charge: If I move 30 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can make a hooves attack against it as a bonus action."+
		"\n \u2022 Equine Build: I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft.",
	action : [["bonus action", "Hooves (after charge)"]],
	carryingCapacity : 2
};
// Changeling
RaceList["multiverse changeling"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*changeling).*$/i,
	name : "Multiverse Changeling",
	sortname : "Changeling, Multiverse",
	source : [["MotM", 41]],
	plural : "Changelings",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Deception, Insight, Intimidation, Performance, and Persuasion",
	languageProfs : ["Common", 1],
	age : " typically live to be around 100 years old. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Changeling (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Fey: My creature type is Fey, rather than humanoid."+
		"\n \u2022 Shapechanger: As an action, I can change my appearance and voice to or from a humanoid-shaped form I have seen, not changing my equipment. I determine the specifics of the form like hair length, eye color, and sex. I can adjust my height and weight between Medium and Small and can appear as a member of another race, though none of my game statistics change. I revert back when I die."+
		"\n \u2022 Changeling Instincts: I gain proficiency with 2 of the following skills: Deception, Insight, Intimidation, Performance, or Persuasion.",
	action : [["action", "Shapechanger"]]
};
// Deep Gnome
RaceList["multiverse deep gnome"] = {
	regExpSearch : /^((?=.*multiverse)((?=.*deep)(?=.*gnome))).*$/i,
	name : "Multiverse Deep Gnome",
	sortname : "Deep Gnome, Multiverse",
	source : [["MotM", 41]],
	plural : "Svirfneblin",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 120]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. spells"] },
	age : " can live to be 500 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "\u2022 Gnome: My creature type is humanoid, and I am considered a Gnome for any prerequisite or effect."+
		"\n \u2022 Svirfneblin Camouflage: Prof bonus per long rest, I can gain advantage on Dexterity (stealth) checks."+
		"\n \u2022 Gnomish Magic Resistance: Adv on Int/Wis/Cha saves vs spells."+
		"\n \u2022 Gift of the Svirfneblin: At 3rd level, I can cast Disguise Self. At 5th level, Nondetection without requiring a material component. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race).",
	spellcastingAbility : [4, 5, 6],
	features : {
		"svirfneblin camouflage" : {
			name : "Svirfneblin Camouflage",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"gift of the svirfneblin (level 3)" : {
			name : "Gift of the Svirfneblin (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Gift of the Svirfneblin",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Disguise Self",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"gift of the svirfneblin (level 5)" : {
			name : "Gift of the Svirfneblin (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Gift of the Svirfneblin",
				spells : ["nondetection"],
				selection : ["nondetection"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		spellChanges : {
		"nondetection" : {
			components : "V,S",
			compMaterial : "",
			changes : "Using Gift of the Svirfneblin, I can cast Nondetection without a material component."
			}
		},
			extraLimitedFeatures : [{
				name : "Nondetection",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 3+"
			}]
		},
	},
};
// Duergar
RaceList["multiverse duergar"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*duergar).*$/i,
	name : "Multiverse Duergar",
	sortname : "Duergar, Multiverse",
	source : [["MotM", 12]],
	plural : "Duergar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 30 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 120]],
	savetxt : { adv_vs : ["charmed", "poisoned", "stunned"] },
	dmgres : ["Poison"],
	age : " can live to be 350 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "\u2022 Dwarf: My creature type is humanoid, and I am considered a Dwarf for any prerequisite or effect."+
		"\n \u2022 Dwarven Resilience: I have advantage on saving throws to avoid or end the poisoned condition on myself and resistance to poison damage."+
		"\n \u2022 Psionic Fortitude: I have advantage on saving throws to avoid or end the charmed or stunned conditions on myself."+
		"\n \u2022 Duergar Magic: 3rd: Enlarge/Reduce; 5th: Invisibility. I can cast both spells on myself once per long rest without material components, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (chosen with race).",
	spellcastingAbility : [4, 5, 6],
	features : {
		"duergar magic (level 3)" : {
			name : "Duergar Magic (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Duergar Magic",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			spellChanges : {
				"enlarge/reduce" : {
					name : "Enlarge/Reduce",
					range : "Self",
					components : "V,S",
					compMaterial : "",
					description : "I'm Enlarged (Adv. on Str checks/saves, +1d4 weapon dmg) or Reduced (Dis. on Str, -1d4 weapon dmg)",
					changes : "Using Duergar Magic, I cast Enlarge/Reduce on myself without material components."
				},
			},
			extraLimitedFeatures : [{
				name : "Enlarge/Reduce",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
		},
		"duergar magic (level 5)" : {
			name : "Duergar Magic (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Duergar Magic",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			spellChanges : {
				"invisibility" : {
					range : "Self",
					components : "V,S",
					compMaterial : "",
					description : "Me and my worn/carried equipment is invisible until I attack or cast",
					changes : "Using Duergar Magic, I can cast Invisibility on myself without material components."
				},
			},
			extraLimitedFeatures : [{
				name : "Invisibility",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
		},
	},
};
// Eladrin
RaceList["multiverse eladrin"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*eladrin).*$/i,
	name : "Multiverse Eladrin",
	sortname : "Eladrin, Multiverse",
	source : ["MotM", 13],
	plural : "Eladrin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	toolProfs : [["Trance: tool or weapon", 2]],
	age : " can live to be 750 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	abilitySave : [4, 5, 6],
	trait : "\u2022 Elf: My creature type is humanoid, and considered 'Elf' for prereqs."+
		"\n \u2022 Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours while  meditating consciously. At the end of the trance, I gain 2 proficiencies with a weapon/tool from the PHB until the end of my next long rest."+
		"\n \u2022 Shifting Seasons: After finish a long rest, I can align with a season."+
		"\n \u2022 Fey Step: Prof bonus per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see. At 3rd level, additional effects based on my aligned season. Save DC equals DC 8 + prof bonus + Int/Wis/Cha mod (chosen with race)",
	features : {
		"fey step" : {
			name : "Fey Step",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		}
	},
	toNotesPage : [{
		name : "Eladrin Season Features",
		source : ["MotM", 13],
		popupName : "Eladrin Shifting Season Features",
		additional : "save DC 8 + prof bonus + Int/Wis/Cha mod",
		page3notes : true,
		note : "\n  \u2022 Autumn (Eladrin Season)" + desc([
			" After using Fey Step, up to 2 creatures I can see within 10 ft of me must make a Wis save",
			" If failed, a target is charmed by me for 1 minute, or until I or my allies damage it"
		]) + "\n  \u2022 Winter (Eladrin Season)" + desc([
			" When I use Fey Step, one target in 5 ft of where I teleported from must make a Wis save",
			" If failed, it is frightened of me until the end of my next turn"
		]) + "\n  \u2022 Spring (Eladrin Season)" + desc([
			" When I use Fey Step, I can instead teleport one willing creature I touch within 5 ft of me",
			" It teleports to an unoccupied space of my choice that I can see within 30 ft of me"
		]) + "\n  \u2022 Summer (Eladrin Season)" + desc([
			" After using Fey Step, each creature of my choice within 5 ft of me takes fire damage",
			" This fire damage is equal to my proficiency bonus"
		])
	}]
};
// Fairy
if (!RaceList["fairy"]) {
RaceList["fairy"] = {
	regExpSearch : /fairy/i,
	name : "Fairy",
	source : [["WBtW", 12], ["MotM", 14]],
	plural : "Fairies",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 0 }
	},
	languageProfs : ["Common", 1],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Fairy Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	},
	features : {
		"fairy magic (level 3)" : {
			name : "Fairy Magic (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Fairy Magic (level 3)",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Faerie Fire",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"fairy magic (level 5)" : {
			name : "Fairy Magic (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Fairy Magic (level 5)",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Enlarge/Reduce",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		}
	},
	trait : "Fairy (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Fey: My creature type is Fey, rather than humanoid"+
		"\n \u2022 Flight: I have flying speed equal to my walking speed, but can't use it when wearing medium or heavy armor."+
		"\n \u2022 Fairy Magic: I know the Druidcraft cantrip. At 3rd level, I can cast Faerie Fire and at 5th level I can cast Enlarge/Reduce. I can cast both spells without using a spell slot once per long rest each, as well as by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these, chosen when I select the race.",
	};
};
// Firbolg
RaceList["multiverse firbolg"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*firbolg).*$/i,
	name : "Multiverse Firbolg",
	sortname : "Firbolg, Multiverse",
	source : [["MotM", 15]],
	plural : "Firbolg",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Speech of Beast and Leaf", 1],
	age : " can live up to 500 years",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "\u2022 Hidden Step: Prof bonus per long rest, as a bonus action, I turn invisible until the start of my next turn as per the invisibility spell."+
		"\n \u2022 Powerful Build: I count as one size larger for my carrying capacity."+
		"\n \u2022 Firbolg Magic: Detect Magic and Disguise Self spells once each per long rest, and using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (chosen with race)."+
		"\n \u2022 Speech of Beast and Leaf: I can communicate simple ideas with Beasts, Plants, and vegetation. They can understand my words, though I have no special ability to understand them in return. I have advantage on Charisma checks to influence them.",
	spellcastingAbility : [4, 5, 6],
	features : {
		"firbolg magic (detect magic)" : {
			name : "Firbolg Magic (Detect Magic)",
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Detect Magic",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"firbolg magic (disguise self)" : {
			name : "Firbolg Magic (Disguise Self)",
			minlevel : 1,
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			spellChanges : {
				"disguise self" : {
					name : "Disguise Self",
					description : "Alter appearance up to 3 ft height difference; Int(Investigation) check vs. spell DC to determine disguise",
					changes : "Using Firbolg Magic, I can seem up to 3 feet shorter or taller when I cast Disguise Self with this trait."
				},
			},
			extraLimitedFeatures : [{
				name : "Disguise Self",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"hidden step" : {
			name : "Hidden Step",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	},
	carryingCapacity : 2
};
// Genasi, Air
RaceList["multiverse air genasi"] = {
	regExpSearch : /^((?=.*multiverse)((?=.*air)(?=.*genasi))).*$/i,
	name : "Multiverse Air Genasi",
	sortname : "Genasi, Air, Multiverse",
	source : [["MotM", 16]],
	plural : "Air Genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	dmgres : ["Lightning"],
	age : " can live up to 120 years",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Air Genasi (+2/+1 or +1/+1/+1)"+
	"\n \u2022 Unending Breath: I can hold my breath indefinitely while I am not incapacitated."+
	"\n \u2022 Mingle with the Wind: I can cast the Shocking Grasp cantrip. At 3rd level, Feather Fall without material components. At 5th level, Levitate without material components. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Mingle with the Wind",
		spells : ["shocking grasp"],
		selection : ["shocking grasp"],
		firstCol : "atwill"
	},
	features : {
		"mingle with the wind (level 3)" : {
			name : "Mingle with the Wind (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Mingle with the Wind (level 3)",
				spells : ["feather fall"],
				selection : ["feather fall"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		spellChanges : {
		"feather fall" : {
			components : "V,S",
			compMaterial : "",
			changes : "Using Mingle With the Wind, I can cast Feather Fall without a material component."
			}
		},
			extraLimitedFeatures : [{
				name : "Feather Fall",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"mingle with the wind (level 5)" : {
			name : "Mingle with the Wind (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Mingle with the Wind (level 5)",
				spells : ["levitate"],
				selection : ["levitate"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		spellChanges : {
		"levitate" : {
			components : "V,S",
			compMaterial : "",
			changes : "Using Mingle With the Wind, I can cast Levitate without a material component."
			}
		},
			extraLimitedFeatures : [{
				name : "Levitate",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		}
	},
};
// Genasi, Earth
RaceList["multiverse earth genasi"] = {
	regExpSearch : /^((?=.*multiverse)((?=.*earth)(?=.*genasi))).*$/i,
	name : "Multiverse Earth Genasi",
	sortname : "Genasi, Earth, Multiverse",
	source : [["MotM", 17]],
	plural : "Earth Genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " can live up to 120 years",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Earth Genasi (+2/+1 or +1/+1/+1)"+
	"\n \u2022 Earth Walk: I can move across difficult terrain without expending extra movement if I am using my walking speed on the ground or a floor."+
	"\n \u2022 Merge with Stone: I can cast the Blade Ward cantrip as normal and as a bonus action prof bonus times per long rest. At 5th level, Pass Without Trace without material components and without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Merge with Stone",
		spells : ["blade ward"],
		selection : ["blade ward"],
		firstCol : "atwill"
	},
	features : {
		"blade ward (bonus action)" : {
			name : "Blade Ward (Bonus Action)",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"merge with stone (level 5)" : {
			name : "Merge with Stone (level 5)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Merge with Stone (level 5)",
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		spellChanges : {
		"pass without trace" : {
			components : "V,S",
			compMaterial : "",
			changes : "Using Merge with Stone, I can cast Pass Without Trace without a material component."
			}
		},
			extraLimitedFeatures : [{
				name : "Pass Without Trace",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		},
	},
};
// Genasi, Fire
RaceList["multiverse fire genasi"] = {
	regExpSearch : /^((?=.*multiverse)((?=.*fire)(?=.*genasi))).*$/i,
	name : "Multiverse Fire Genasi",
	sortname : "Genasi, Fire, Multiverse",
	source : [["MotM", 17]],
	plural : "Fire Genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " can live up to 120 years",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Fire Genasi (+2/+1 or +1/+1/+1)"+
	"\n \u2022 Reach to the Blaze: I can cast the Produce Flame cantrip. At 3rd level, Burning Hands. At 5th level, Flame Blade without material components. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Reach to the Blaze",
		spells : ["produce flame"],
		selection : ["produce flame"],
		firstCol : "atwill"
	},
	features : {
		"reach to the blaze (level 3)" : {
			name : "Reach to the Blaze (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Reach to the Blaze (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Burning Hands",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"reach to the blaze (level 5)" : {
			name : "Reach to the Blaze (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Reach to the Blaze (level 5)",
				spells : ["flame blade"],
				selection : ["flame blade"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		spellChanges : {
		"flame blade" : {
			components : "V,S",
			compMaterial : "",
			changes : "Using Reach to the Blaze, I can cast Flame Blade without a material component."
			}
		},
			extraLimitedFeatures : [{
				name : "Flame Blade",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		}
	},
};
// Genasi, Water
RaceList["multiverse water genasi"] = {
	regExpSearch : /^((?=.*multiverse)((?=.*water)(?=.*genasi))).*$/i,
	name : "Multiverse Water Genasi",
	sortname : "Genasi, Water, Multiverse",
	source : [["MotM", 17]],
	plural : "Water Genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : 0 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	dmgres : ["Acid"],
	age : " can live up to 120 years",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Water Genasi (+2/+1 or +1/+1/+1)"+
	"\n \u2022 Amphibious: I can breathe air and water."+
	"\n \u2022 Swim: I have a swimming speed equal to my walking speed."+
	"\n \u2022 Call to the Wave: I can cast the Acid Splash cantrip. At 3rd level, Create or Destroy Water. At 5th level, Water Walk without material components. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Call to the Wave",
		spells : ["acid splash"],
		selection : ["acid splash"],
		firstCol : "atwill"
	},
	features : {
		"call to the wave (level 3)" : {
			name : "Call to the Wave (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Call to the Wave (level 3)",
				spells : ["create or destroy water"],
				selection : ["create or destroy water"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Create or Destroy Water",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"call to the wave (level 5)" : {
			name : "Call to the Wave (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Call to the Wave (level 5)",
				spells : ["water walk"],
				selection : ["water walk"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		spellChanges : {
		"water walk" : {
			components : "V,S",
			compMaterial : "",
			changes : "Using Call to the Wave, I can cast Water Walk without a material component."
			}
		},
			extraLimitedFeatures : [{
				name : "Water Walk",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 3+"
			}]
		}
	},
};
// Githyanki
RaceList["multiverse githyanki"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*githyanki).*$/i,
	name : "Multiverse Githyanki",
	sortname : "Githyanki, Multiverse",
	source : ["MotM", 18],
	plural : "Githyanki",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	dmgres : ["Psychic"],
	skillstxt : "Choose any one skill that lasts until the end of my next long rest",
	toolProfs : [["Astral Knowledge: tool/weapon", 1]],
	age : " typically live to be around 100 years old. Githyanki who reside in the Astral Plane can live indefinitely.",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Githyanki (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Astral Knowledge: At the end of a long rest, I gain 1 skill proficiency and proficiency with one weapon or tool from the PHB until the end of my next long rest."+
		"\n \u2022 Githyanki Psionics: I know the Mage Hand cantrip, but the hand can be invisible. At 3rd level, I can cast Jump. At 5th level, Misty Step. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race)."+
		"\n \u2022 Psychic Resilience. I have resistance to Psychic damage.",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Githyanki Psionics",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	},
	spellChanges : {
		"mage hand" : {
			description : "Create (in)visible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple",
			changes : "Using Githyanki Psionics, when I cast Mage Hand I can make the spectral hand invisible."
			}
		},
	features : {
		"githyanki psionics (level 3)" : {
			name : "Githyanki Psionics (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Githyanki Psionics (level 3)",
				spells : ["jump"],
				selection : ["jump"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		extraLimitedFeatures : [{
			name : "Jump",
			usages : 1,
			recovery: "long rest",
			altResource : "SS 1+"
			}]
		},
		"githyanki psionics (level 5)" : {
			name : "Githyanki Psionics (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Githyanki Psionics (level 5)",
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		extraLimitedFeatures : [{
			name : "Misty Step",
			usages : 1,
			recovery: "long rest",
			altResource : "SS 2+"
			}]
		}
	},
};
// Githzerai
RaceList["multiverse githzerai"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*githzerai).*$/i,
	name : "Multiverse Githzerai",
	sortname : "Githzerai, Multiverse",
	source : ["MotM", 19],
	plural : "Githzerai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	savetxt : { adv_vs : ["charmed", "frightened"] },
	dmgres : ["Psychic"],
	age : " typically live to be around 100 years old. Githzerai who reside in the Astral Plane can live indefinitely.",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Githzerai (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Githzerai Psionics: I know the Mage Hand cantrip, but the hand can be invisible. At 3rd level, I can cast Shield. At 5th level, Detect Thoughts. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race)."+
		"\n \u2022 Mental Discipline: I have advantage on saving throws to avoid or end the charmed and frightened conditions on myself."+
		"\n \u2022 Psychic Resilience. I have resistance to Psychic damage.",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Githzerai Psionics",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	},
	spellChanges : {
		"mage hand" : {
			description : "Create (in)visible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple",
			changes : "Using Githzerai Psionics, when I cast Mage Hand I can make the spectral hand invisible."
			}
		},
	features : {
		"githzerai psionics (level 3)" : {
			name : "Githzerai Psionics (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Githzerai Psionics (level 3)",
				spells : ["shield"],
				selection : ["shield"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		extraLimitedFeatures : [{
			name : "Shield",
			usages : 1,
			recovery: "long rest",
			altResource : "SS 1+"
			}]
		},
		"githzerai psionics (level 5)" : {
			name : "Githzerai Psionics (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Githzerai Psionics (level 5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
		extraLimitedFeatures : [{
			name : "Detect Thoughts",
			usages : 1,
			recovery: "long rest",
			altResource : "SS 2+"
			}]
		}
	},
};
// Goblin
RaceList["multiverse goblin"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*goblin).*$/i,
	name : "Multiverse Goblin",
	sortname : "Goblin, Multiverse",
	source : [["MotM", 20]],
	plural : "Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["charmed"] },
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"fury of the small" : {
			name : "Fury of the Small",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " damage"; }),
		},
	},
	action : [["bonus action", "Nimble Escape (disengage/hide)"]],
	trait : "Multiverse Goblin (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Goblinoid: My creature type is humanoid, and I am considered a Goblinoid for any prerequisite or effect."+
		"\n \u2022 Fey Ancestry: I have advantage on saving throws to avoid or end the charmed condition on myself."+
		"\n \u2022 Fury of the Small: Prof bonus per long rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my prof bonus."+
		"\n \u2022 Nimble Escape: As a bonus action, I can take the Disengage or Hide action.",
};
// Goliath
RaceList["multiverse goliath"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*goliath).*$/i,
	name : "Multiverse Goliath",
	sortname : "Goliath, Multiverse",
	source : [["MotM", 21]],
	plural : "Goliaths",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	dmgres : ["Cold"],
	skills : ["Athletics"],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"stone's endurance" : {
			name : "Stone's Endurance",
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
			action : ["reaction", ""],
		},
	},
	trait : "Multiverse Goliath (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Stone's Endurance: Prof bonus per long rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Con modifier."+ 
		"\n \u2022 Little Giant: I have proficiency in the Athletics skill and count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+ 
		"\n \u2022 Mountain Born: I have resistance to cold damage and I'm acclimated to high altitude, including elevations above 20,000 feet.",
	carryingCapacity : 2
};
// Harengon
if (!RaceList["harengon"]) {
RaceList["harengon"] = {
	regExpSearch : /harengon/i,
	name : "Harengon",
	source : [["WBtW", 13], ["MotM", 22]],
	plural : "Harengons",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	skills : ["Perception"],
	addMod : [{ type : "skill", field : "Init", mod : "Prof", text : "I can add my proficiency bonus to my initiative rolls." }],
	languageProfs : ["Common", 1],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	action : [["reaction", "Lucky Footwork"], ["bonus action", "Rabbit Hop"]],
	features : {
		"rabbit hop" : {
			name : "Rabbit Hop",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) {
				var hopDistance = n * 5 + ' ft';
				return What("Unit System") === "metric" ? ConvertToMetric(hopDistance) : hopDistance;
			})
		}
	},
	trait : "Harengon (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Hare-Trigger: I can add my proficiency bonus to my initiative rolls."+
		"\n \u2022 Leporine Senses: I have proficiency in the Perception skill."+
		"\n \u2022 Lucky Footwork: As a reaction when I fail a Dexterity saving throw, I can add +1d4 to the result, potentially making it a success. I can't do this if I'm prone or my speed is 0."+
		"\n \u2022 Rabbit Hop: As a bonus action if my speed isn't 0, I can jump 5 ft times my Prof. Bonus without provoking opportunity attacks. I can do this my Prof. Bonus times per long rest.",
	};
};
// Hobgoblin
RaceList["multiverse hobgoblin"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*hobgoblin).*$/i,
	name : "Multiverse Hobgoblin",
	sortname : "Hobgoblin, Multiverse",
	source : [["MotM", 23]],
	plural : "Multiverse Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	vision : [["Darkvision", 60]],
	savetxt : {
		adv_vs : ["charmed"]
	},
	features : {
		"fey gift" : {
			name : "Fey Gift",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", " (Help action)"]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"fortune from the many" : {
			name : "Fortune from the Many",
			minlevel : 1,
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"fey gift - additional effect" : {
			name : "Fey Gifts - Additional Effects",
			minlevel : 3,
			toNotesPage : [{
				name : "Fey Gifts - Additional Effects",
				page3notes : true,
				note : [
					"Whenever I take the Help action, I can choose one of the following effects:",
					" \u2022 Hospitality: The creature I help and I each gain 1d6 + my Prof Bonus in temporary HP",
					" \u2022 Passage: The creature I help and I both gain +10 ft walking speed until my next turn starts",
					" \u2022 Spite: Before my next turn starts, the first time the creature I help hits a target with an",
					"   attack roll, the creature hit has disadvantage on its next attack roll within the next minute"
				]
			}]
		}
	},
	trait : "Multiverse Hobgoblin (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Fey Ancestry: I have advantage on saving throws to avoid or end the charmed condition on myself."+
		'\n \u2022 Fey Gift: Prof bonus per long rest, I can take the Help action as a Bonus action. Starting at 3rd-level, I can produce an additional effect with this trait: Hospitality, Passage, or Spite. See 3rd page "Notes."'+
		"\n \u2022 Fortune from the Many: Prof bonus per long rest, when I miss an attack or fail an ability check or a save, I can gain a bonus to the roll equal to the number of allies I can see within 30 ft of me (max +3).",
};
// Kenku
RaceList["multiverse kenku"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*kenku).*$/i,
	name : "Multiverse Kenku",
	sortname : "Kenku, Multiverse",
	source : [["MotM", 24]],
	plural : "Kenku",
	size : [3, 4],	
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose any two skills",
	languageProfs : ["Common", 1],
	abilitySave : 6,
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"kenku recall" : {
			name : "Kenku Recall",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
	},
	trait : "Multiverse Kenku (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Expert Duplication: I have advantage on all checks made to copy writing or to produce an exact duplicate of craftwork."+
		"\n \u2022 Kenku Recall: I have proficiency in two skills of my choice. My prof bonus per long rest, I can give myself advantage on an ability check using any skill in which I have proficiency."+
		"\n \u2022 Mimicry: I can mimic sounds and voices I have heard. Creatures hearing me can determine the imitation with a successful Wisdom (Insight) check against a DC of 8 + my prof bonus + my Cha mod.",
};
// Kobolds
RaceList["multiverse kobold"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*kobold).*$/i,
	name : "Multiverse Kobold",
	sortname : "Kobold, Multiverse",
	source : [["MotM", 25]],
	plural : "Multiverse Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : ["Darkvision", 60],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"draconic cry" : {
			name : "Draconic Cry",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		}
	},
	trait : "Multiverse Kobold (+2/+1 or +1/+1/+1)"+
		'\n \u2022 Kobold Legacy: Choose one of the following with the "Racial Options" button: (1) Defiance: advantage on saves vs. being frightened, (2) Draconic Sorcery: I know one sorcerer cantrip of my choice, or (3) Craftiness: I  gain proficiency in one of the following: Arcana, Investigation, Medicine, Sleight of Hand, or Survival.'+
		"\n \u2022 Draconic Cry: As a bonus action, I can let out a draconic cry at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the cry. I can do this my Proficiency Bonus per long rest."
};
AddRacialVariant("multiverse kobold", "defiance", {
	regExpSearch : /defiance/i,
	name : "Defiance Multiverse Kobold",
	source : [["MotM", 25]],
	plural : "Kobolds",
	savetxt : { adv_vs : ["frightened"] },
	trait : "Multiverse Kobold (+2/+1 or +1/+1/+1)"+
		'\n \u2022 Kobold Legacy (Defiance): I have advantage on saving throws to avoid or end the frightened condition on myself.'+
		"\n \u2022 Draconic Cry: As a bonus action, I can let out a draconic cry at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the cry. I can do this my Proficiency Bonus per long rest.",
});
AddRacialVariant("multiverse kobold", "sorcery", {
	regExpSearch : /sorcery/i,
	name : "Sorcery Multiverse Kobold",
	source : [["MotM", 25]],
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : {
		name : "Kobold Legacy",
		"class" : "sorcerer",
		level : [0, 0],
		firstCol : 'atwill'
	},
	trait : "Multiverse Kobold (+2/+1 or +1/+1/+1)"+
		'\n \u2022 Kobold Legacy (Draconic Sorcery): I know one cantrip from the sorcerer spell list. Intelligence, Wisdom, or Charisma is my spellcasting ability for it (chosen when I select this race).'+
		"\n \u2022 Draconic Cry: As a bonus action, I can let out a draconic cry at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the cry. I can do this my Proficiency Bonus per long rest.",
});
AddRacialVariant("multiverse kobold", "craftiness", {
	regExpSearch : /craftiness/i,
	name : "Craftiness Multiverse Kobold",
	source : [["MotM", 25]],
	skillstxt : "Choose one from: Arcana, Investigation, Medicine, Sleight of Hand, or Survival",
	trait : "Multiverse Kobold (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Kobold Legacy (Craftiness): I  gain proficiency in one of the following: Arcana, Investigation, Medicine, Sleight of Hand, or Survival."+
		"\n \u2022 Draconic Cry: As a bonus action, I can let out a draconic cry at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the cry. I can do this my Proficiency Bonus per long rest.",
});
// Lizardfolk
RaceList["multiverse lizardfolk"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*lizardfolk).*$/i,
	name : "Multiverse Lizardfolk",
	sortname : "Lizardfolk, Multiverse",
	source : ["MotM", 26],
	plural : "Lizardfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : 0 },
	},
	skillstxt : "Choose two from Animal Handling, Medicine, Nature, Perception, Stealth, and Survival",
	languageProfs : ["Common", 1],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["MotM", 26],
		damage : [1, 6, "slashing"],
	},
	weaponsAdd : ["Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["MotM", 26],
		ac : 13,
	},
	armorAdd : "Natural Armor",
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"hungry jaws" : {
			name : "Hungry Jaws",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return n + " THP"; }),
			action : ["bonus action", ""],
		}
	},
	trait : "Multiverse Lizardfolk (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Bite: My unarmed strikes with my fanged maw deals 1d6 slashing damage."+
		"\n \u2022 Hold Breath: I can hold my breath for up to 15 minutes at a time."+ 
		"\n \u2022 Natural Armor: I have an AC of 13 + Dexterity modifier + shield."+ 
		"\n \u2022 Hungry Jaws: Prof bonus per long rest, as a bonus action, I can make a special bite attack and if it hits I gain temporary HP equal to my prof bonus."+
		"\n \u2022 Nature's Intuition: I gain proficiency with 2 of the following skills: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.",
};
// Minotaur
RaceList["multiverse minotaur"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*minotaur).*$/i,
	name : "Multiverse Minotaur",
	sortname : "Minotaur, Multiverse",
	source : [["MotM", 27]],
	plural : "Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bhorns?\b/i,
		name : "Horns",
		source : [["MotM", 27]],
		damage : [1, 6, "piercing"],
		description : "Attack as a bonus action after moving 20 ft with the Dash action"
	},
	weaponsAdd : ["Horns"],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	abilitySave : 1,
	vision : [["Labyrinthine Recall. Always knows north, advantage on Survival to navigate or track.", 0]],
	trait : "Multiverse Minotaur (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Horns: My unarmed strikes with horns deal 1d6 piercing damage."+
		"\n \u2022 Goring Rush: When taking a Dash action and moving at least 20 ft, I can make a horns attack as a bonus action."+
		"\n \u2022 Hammering Horns: As a bonus action after I hit a melee attack during my Attack action, I can shove that target with my horns, if it is up to than one size larger than me. It must make a Str save (DC 8 + Str mod + Prof bonus) or be pushed up to 10 ft away from me."+
		"\n \u2022 Labyrinthine Recall. I always know which direction is north, and have adv on any Wis (Survival) check I make to navigate or track.",
	features : {
		"goring rush" : {
			name : "Goring Rush",
			minlevel : 1,
			action : ["bonus action", " (with Dash)"]
		},
		"hammering horns" : {
			name : "Hammering Horns",
			minlevel : 1,
			action : ["bonus action", " (after hit)"]
		}
	}
};
// Orc
RaceList["multiverse orc"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*orc).*$/i,
	name : "Multiverse Orc",
	sortname : "Orc, Multiverse",
	source : [["MotM", 20]],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Orc (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Adrenaline Rush: Prof bonus per long rest, I can take the Dash action as a Bonus action and gain my proficiency bonus in temporary hit points."+
		"\n \u2022 Powerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
		"\n \u2022 Relentless Endurance: Once per long rest, when I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead.",
	features : {
		"adrenaline rush" : {
			name : "Adrenaline Rush",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " THP"; }),
			action : [["bonus action", ""]],
		},
		"relentless endurance" : {
			name : "Relentless Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		},
	},
	carryingCapacity : 2
};
// Satyr
RaceList["multiverse satyr"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*satyr).*$/i,
	name : "Multiverse Satyr",
	sortname : "Satyr, Multiverse",
	source : [["MotM", 29]],
	plural : "Satyr",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	savetxt : { adv_vs : ["spells"] },
	languageProfs : ["Common", 1],
	weaponOptions : {
		baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*(satyr|\bram\b))(?=.*ram|headbutt).*$/i,
		name : "Ram",
		source : [["MotM", 29]],
		damage : [1, 6, "bludgeoning"]
	},
	weaponsAdd : ["Ram"],
	toolProfs : [["Musical instrument", 1]],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	skills : ["Performance", "Persuasion"],
	toolProfs : [["Musical instrument", 1]],
	trait : "Multiverse Satyr (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Fey: My creature type is Fey, rather than humanoid."+
		"\n \u2022 Ram: I can use my head and horns for unarmed strikes that deal 1d6 bludgeoning damage."+
		"\n \u2022 Magic Resistance: I have advantage on saves against spells."+
		"\n \u2022 Mirthful Leaps: Whenever I make a long or high jump, I can roll a d8 and add the number rolled to the number of feet I cover, even when making a standing jump. This extra distance costs movement as normal.",
};
// Sea Elf
RaceList["multiverse sea elf"] = {
	regExpSearch : /^((?=.*multiverse)((?=.*sea)(?=.*elf))).*$/i,
	name : "Multiverse Sea Elf",
	sortname : "Sea Elf, Multiverse",
	source : [["MotM", 30]],
	plural : "Sea Elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : 0 }
	},
	languageProfs : ["Common", "Friend of the Sea", 1],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	dmgres : ["Cold"],
	skills : ["Perception"],
	toolProfs : [["Trance: tool or weapon", 2]],
	age : " can live to be 750 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "\u2022 Elf: My creature type is humanoid, and considered 'Elf' for prereqs."+
		"\n \u2022 Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours while  meditating consciously. At the end of the trance, I gain 2 proficiencies with a weapon/tool from the PHB until the end of my next long rest."+
		"\n \u2022 Child of the Sea. I  can breathe air and water and have resistance to cold damage."+
		"\n \u2022 Friend of the Sea: I can communicate simple ideas with any beast that has a swimming speed. It can understand my words, though I have no special ability to understand it in return.",
};
// Shadar-Kai
RaceList["multiverse shadar-kai"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*shadar-kai).*$/i,
	name : "Multiverse Shadar-kai",
	sortname : "Shadar-kai, Multiverse",
	source : ["MotM", 31],
	plural : "Shadar-kai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	dmgres : ["Necrotic"],
	skills : ["Perception"],
	toolProfs : [["Trance: tool or weapon", 2]],
	age : " can live to be 750 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "\u2022 Elf: My creature type is humanoid, and considered 'Elf' for prereqs."+
		"\n \u2022 Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours while  meditating consciously. At the end of the trance, I gain 2 proficiencies with a weapon/tool from the PHB until the end of my next long rest."+
		"\n \u2022 Blessing of the Raven Queen: Prof bonus per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see. Once I reach 3rd level, after I use the Blessing of the Raven Queen, I appear translucent and have resistance to all damage until the start of my next turn.",
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		}
	}
};
// Shifter
RaceList["multiverse shifter"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*shifter).*$/i,
	name : "Multiverse Shifter",
	sortname : "Shifter, Multiverse",
	source : [["MotM", 32]],
	plural : "Shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	skillstxt : "Choose one skill from Acrobatics, Athletics, Intimidation, or Survival",
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Shifter: (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Bestial Instincts. I have proficiency in one of the following skills: Acrobatics, Athletics, Intimidation, or Survival."+
		"\n \u2022 Shifting: Prof bonus per long rest, as a bonus action, I can assume a more bestial appearance. This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action. Whenever I Shift, I gain twice my proficiency bonus in temporary hit points and an additional benefit based on one of the following options (choose when I select this race): Beasthide, Longtooth, Swiftstride, Wildhunt.",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return 2 * n + " THP"; }),
		}
	},
};
AddRacialVariant("multiverse shifter", "beasthide", {
	regExpSearch : /beasthide/i,
	name : "Multiverse Beasthide Shifter",
	source : [["MotM", 32]],
	plural : "Beasthide Shifters",
	vision : [["Darkvision", 60]],
	trait : "Multiverse Beasthide Shifter: (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Bestial Instincts. I have proficiency in one of the following skills: Acrobatics, Athletics, Intimidation, or Survival."+
		"\n \u2022 Shifting (Beasthide): Prof bonus per long rest, as a bonus action, I can assume a more bestial appearance. This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action. Whenever I Shift, I gain 1d6 + twice my proficiency bonus in temporary hit points and a +1 bonus to my AC.",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "1d6 + " + 2 * n + " THP"; }),
		}
	},
});
AddRacialVariant("multiverse shifter", "longtooth", {
	regExpSearch : /longtooth/i,
	name : "Multiverse Longtooth Shifter",
	source : [["MotM", 32]],
	plural : "Longtooth Shifters",
	vision : [["Darkvision", 60]],
	trait : "Multiverse Longtooth Shifter: (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Bestial Instincts. I have proficiency in one of the following skills: Acrobatics, Athletics, Intimidation, or Survival."+
		"\n \u2022 Shifting (Longtooth): Prof bonus per long rest, as a bonus action, I can assume a more bestial appearance. This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action. Whenever I Shift, I gain twice my proficiency bonus in temporary hit points and my fangs elongate. When I Shift and while I am Shifted, as a Bonus action, I can make a single unarmed strike with my elongated fangs that deals 1d6 piercing damage.",
	action : ["bonus action", "Longtooth Fangs (while Shifted)"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth Fangs",
		source : [["E:RLW", 34]],
		damage : [1, 6, "piercing"],
		description : "Only while shifted; One attack as bonus action",
	},
	weaponsAdd : ["Longtooth Fangs"],
});
AddRacialVariant("multiverse shifter", "swiftstride", {
	regExpSearch : /swiftstride/i,
	name : "Multiverse Swiftstride Shifter",
	source : [["MotM", 32]],
	plural : "Swiftstride Shifters",
	vision : [["Darkvision", 60]],
	trait : "Multiverse Swiftstride Shifter: (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Bestial Instincts. I have proficiency in one of the following skills: Acrobatics, Athletics, Intimidation, or Survival."+
		"\n \u2022 Shifting (Swiftstride): Prof bonus per long rest, as a bonus action, I can assume a more bestial appearance. This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action. Whenever I Shift, I gain twice my proficiency bonus in temporary hit points and +10 ft to my walking speed. Additionally, as a Reaction when a creature ends its turn within 5 ft of me, I can move up to 10 ft. This reactive movement doesn't provoke opportunity attacks.",
	action : [['reaction', 'Reactive Stride (while Shifted)']],
});
AddRacialVariant("multiverse shifter", "wildhunt", {
	regExpSearch : /wildhunt/i,
	name : "Multiverse Wildhunt Shifter",
	source : [["MotM", 32]],
	plural : "Wildhunt Shifters",
	vision : [["Darkvision", 60]],
	trait : "Multiverse Wildhunt Shifter: (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Bestial Instincts. I have proficiency in one of the following skills: Acrobatics, Athletics, Intimidation, or Survival."+
		"\n \u2022 Shifting (Wildhunt): Prof bonus per long rest, as a bonus action, I can assume a more bestial appearance. This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action. Whenever I Shift, I gain twice my proficiency bonus in temporary hit points, I have advantage on Wisdom checks, and no creature within 30 feet of me can make an attack roll with advantage against me unless I'm incapacitated.",
	vision : [["Darkvision", 60], ["While Shifted, no creature within 30 feet of me can make an attack roll with advantage against me", 0]],
	savetxt : { text : ["While Shifted, Adv. on Wis checks"] },
});
// Tabaxi
RaceList["multiverse tabaxi"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*tabaxi).*$/i,
	name : "Multiverse Tabaxi",
	sortname : "Tabaxi, Multiverse",
	source : [["MBM", 33]],
	plural : "Tabaxi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : 0 }
	},
	skills : ["Perception", "Stealth"],
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(tabaxi|\bcat\b))(?=.*claw).*$/i,
		name : "Tabaxi Claws",
		source : ["MBM", 33],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Tabaxi Claws"],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
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
	trait : "Tabaxi (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Cat's Talent: I have proficiency in the Perception and Stealth skills."+
		"\n \u2022 Cat's Claws: I can use my retractable claws to make unarmed strikes dealing 1d6 slashing damage. They also give me a climbing speed equal to my walking speed."+
		"\n \u2022 Feline Agility: When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns.",
};
// Tortle
RaceList["multiverse tortle"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*tortle).*$/i,
	name : "Multiverse Tortle",
	sortname : "Tortle, Multiverse",
	source : [["MotM", 34]],
	plural : "Tortles",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Aquan"],
	skillstxt : "Choose one from Animal Handling, Medicine, Nature, Perception, Stealth, and Survival",
	armorOptions : {
		regExpSearch : /^(?=.*tortle)(?=.*shell).*$/i,
		name : "Tortle's Shell",
		source : [["MotM", 34]],
		ac : 17,
		dex : -10
	},
	armorAdd : "Tortle's Shell",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*tortle)(?=.*\bclaws?\b).*$/i,
		name : "Tortle's Claws",
		source : [["MotM", 34]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Tortle's Claws"],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"shell defense" : {
			name : "Shell Defense",
			minlevel : 1,
			action : ["action", ""]
		}
	},
	trait : "Tortle (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Claws: My unarmed strikes with claws deal 1d6 slashing damage."+
		"\n \u2022 Hold Breath: I can hold my breath for up to 1 hour at a time."+
		"\n \u2022 Natural Armor: I can't wear armor. My shell provides me a base AC of 17, but I can't add my Dexterity modifier. I can still use a shield."+
		"\n \u2022 Shell Defense: As an action, I can withdraw into my shell and gain +4 AC and adv. on Str and Con saves, but I count as prone, have speed 0, have disadv. on Dex saves, and can't take reactions. The only action I can take is a bonus action to emerge from the shell.",
};
// Triton
RaceList["multiverse triton"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*triton).*$/i,
	name : "Multiverse Triton",
	sortname : "Triton, Multiverse",
	source : [["MotM", 35]],
	plural : "Triton",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : 0 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Cold"],
	vision : [["Darkvision", 60]],
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Triton (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Control Air and Water: I can cast the Fog Cloud spell. At 3rd level, Gust of Wind. At 5th level, Water Walk. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (chosen with race)."+
		"\n \u2022 Emissary of the Sea: I can communicate simple ideas to any Beast, Elemental, or Monstrosity with a swimming speed. It can understand my words, though I have no special ability to understand it in return."+
		"\n \u2022 I have resistance to cold damage."+
		"\n \u2022 Amphibious: I can breathe air and water.",
	spellcastingAbility : [4, 5, 6],
	features : {
		"control air and water (level 1)" : {
			name : "Control Air and Water (level 1)",
			minlevel : 1,
			spellcastingBonus : {
				name : "Control Air and Water",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Fog Cloud",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"control air and water (level 3)" : {
			name : "Control Air and Water (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Control Air and Water",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Gust of Wind",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		},
		"control air and water (level 5)" : {
			name : "Control Air and Water (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Control Air and Water",
				spells : ["water walk"],
				selection : ["water walk"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Water Walk",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 3+"
			}]
		}
	},
};
// Yuan-Ti
RaceList["multiverse yuan-ti"] = {
	regExpSearch : /^(?=.*multiverse)(?=.*yaun-ti).*$/i,
	name : "Multiverse Yuan-Ti",
	sortname: "Yaun-Ti, Multiverse",
	source : ["MotM", 36],
	plural : "Yuan-Ti",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	dmgres : ["Poison"],
	savetxt : {
		adv_vs : ["poisoned", "spells"],
	},
	age : " typically live to be around 100 years old",
	height : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	weight : " vary in size. If you'd like to determine your character's height or weight randomly, consult the Randome Height and Weight table in the PHB, and choose the row in the table that best represents the build you imagine for your character.",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	trait : "Multiverse Yaun-Ti (+2/+1 or +1/+1/+1)"+
		"\n \u2022 Magic Resistance: I have advantage on saving throws vs spells."+
		"\n \u2022 Poison Resilience. I have advantage on saving throws to avoid or end the poisoned condition on myself. I also have resistance to poison damage."+
		"\n \u2022 Serpentine Spellcasting: I know the Poison Spray cantrip and I can cast Animal Friendship on snakes at will, and by using spell slots as normal. Once I reach 3rd level, I can cast Suggestion once per long rest, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (chosen with race).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Serpentine Spellcasting",
		spells : ["poison spray"],
		selection : ["poison spray"],
		firstCol : 'atwill'
	}, {
		name : "Serpentine Spellcasting",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : 'atwill'
	}],
	spellChanges : {
		"animal friendship" : {
			description : "One snake with Intelligence 3 or less save or charmed for the duration",
			changes : "I can cast this spell at-will on snakes."
		}
	},
	features : {
		"serpentine spellcasting (level 3)" : {
			name : "Serpentine Spellcasting (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Serpentine Spellcasting (level 3)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Suggestion",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
	},
};
