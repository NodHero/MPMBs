var iFileName = "Spells - Nod's Notebook to Hardly Anything [Nod].js"; 
RequiredSheetVersion(13);

/* Arcane Incantations from an ArchMage’s Spellbook
   (with notations about spells from other less impressive sources)
*/

SourceList["NN:S"] = {
	name : "Spells - Nod's Notebook to Hardly Anything [Nod]",
	abbreviation : "NN:S",
	abbreviationSpellsheet: "NN",
	group : "Nod's Homebrew",
	date : "2022/02/26"
};

// Add New spells
// Cantrip
SpellsList["arcane barrage"] = { // Ice Barrage (Knuckleheads) with choose your own damage
	name: "Arcane Barrage",
	classes: ["sorcerer","warlock","wizard"],
	source: ["NN:S"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90 ft",
	components: "V,S",
	description: "Fling arcane projectile 2d4 Bludgeoning/Piercing/Slashing dmg; projectiles at same or different targets; CL5:2, CL11:3, CL17:4 projectiles",
	descriptionCantripDie: "Fling `CD` arcane projectile 2d4 Bludge./Pierce./Slash. dmg; projectiles at same or different targets;",
	descriptionFull: "I conjure arcane projectiles and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning, piercing, or slashing damage (chosen when the spell is cast.)" + "\n   " + AtHigherLevels + "The spell creates more than one projectile when I reach higher levels: two projectiles at 5th level, three projectiles at 11th level, and four projectiles at 17th level. I can direct the projectiles at the same target or at different ones. Make a separate attack roll for each projectile."
},
WeaponsList["arcane barrage"] = { // Ice Barrage (Knuckleheads) with choose your own damage
	regExpSearch : /^(?=.*arcane)(?=.*barrage).*$/i,
	name: "Arcane Barrage",
	source: ["NN:S"], 
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "B/P/S"],
	range: "90 ft",
	description: "Choose B/P/S damage when cast; Each 2d4 requires separate rolls",
	SpellsList: "arcane projectile",
	abilitytodamage : false
},
SpellsList["create caltrops"] = {
	name : "Create Caltrops",
	classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : [["NN:S", 152]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "5-ft sq crea now/enter Dex save or 1d6 Piercing damage/stop move/-10 ft speed until end of next turn",
	descriptionFull : "You create caltrops in a 5-foot square area on ground that you can see within range. Any creature in the caltop's space when you cast the spell or moves into the caltrop's space for the first time on a turn must succeed on a Dexterity saving throw.\n A creature moving through the caltrop's area at half speed doesn't need to make the saving throw. On a failed save, the creature stops moving, takes 1d6 piercing damage and its speed is reduced by 10 feet until the end of its next turn. On a successful save, the creature is unaffected by the caltrops."
};
WeaponsList["create caltrops"] = {
	regExpSearch : /^(?=.*create)(?=.*caltrops).*$/i,
	name : "Create Caltrops",
	source : [["NN:S", 152]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : [1, 6, "piercing"],
	range : "30 ft",
	description : "5-ft square; Dex save at casting/moved into, failure - 1d6/stop/-10 ft move until EoNT, success - no damage;",
	abilitytodamage : false,
	dc : true
};
SpellsList["encourage"] = {
	name : "Encourage",
	classes : ["cleric", "druid"],
	source : ["NN:S"],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "1 creature w/ at least 1 HP gains (spellcasting ability modifier + prof bonus) THP start of each its turns",
	descriptionFull : "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to your spellcasting ability modifier plus your proficiency bonus at the start of each of its turns. The temporary hit points are lost when the spell ends."
};
SpellsList["fearsome mockery"] = {
	name : "Fearsome Mockery",
	classes : ["bard"],
	source : [["NN:S", 189]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Cha",
	description : "1 creature save or 1d4 Psychic dmg and frightened until start of my next turn; +1d4 at CL 5, 11, and 17",
	descriptionCantripDie : "1 creature save or `CD`d4 Psychic dmg and frightened until start of my next turn",
	descriptionFull : "You unleash a string of fearsome insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Charisma saving throw or take 1d4 psychic damage and is frightened of you until the start of your next turn.\n If a target's saving throw is successful or the effect ends for it, the target is immune to your fearsome mockery for the next 24 hours." + "\n   " + "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4) and 17th level (4d4)."
};
WeaponsList["fearsome mockery"] = {
	regExpSearch : /^(?=.*fearsome)(?=.*mockery).*$/i,
	name : "Fearsome Mockery",
	source : [["NN:S", 189]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 4, "psychic"],
	range : "60 ft",
	description : "Cha save, success - no damage and immune 24 hrs, fail - frightened until start of my next turn;",
	abilitytodamage : false,
	dc : true
};
SpellsList["imbue stone"] = {
	name : "Imbue Stone",
	classes : ["artificer", "druid", "warlock"],
	source : ["NN:S"],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "1 min",
	description : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6 Bludg. dmg and -10 speed.",
	descriptionCantripDie : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do `CD`d6 Bludg. dmg and -10 speed.",
	descriptionFull : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. On a hit, it takes 1d6 bludgeoning damage, and its speed is reduced by 10 feet until the start of your next turn. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it. This spell's damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6)."
};
WeaponsList["imbue stone"] = {
	regExpSearch : /^(?=.*imbue)(?=.*stone).*$/i,
	name : "Imbue Stone",
	source : ["NN:S"],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "bludgeoning"],
	range : "60/120 ft",
	description : "Stone can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack. Target -10 ft speed until start of my next turn",
	abilitytodamage : false
};
SpellsList["keen sense"] = { // Hunter Sense from GH
	name : "Keen Sense",
	classes : ["druid"],
	source : [["NN:S", 122]],
	level : 0,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Target's Perception checks below 9 count as 10",
	descriptionCantripDie : "",
	descriptionFull : "You touch one willing creature. While this spell is active, the target’s senses are heightened. If the target rolls a 9 or below on the die when making a Wisdom (Perception) check, they instead act as if they rolled a 10."
};
SpellsList["quicken"] = {
	name : "Quicken",
	classes : ["artificer", "bard", "cleric", "druid"],
	source : [["NN:S", 175]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "1 willing crea add 1d4 to one Dex ability check or saving throw after rolling, once during the duration",
	descriptionFull : "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one Dexterity ability check or Dexterity saving throw of its choice. It can roll the die before or after making the roll. The spell then ends."
};
SpellsList["temporal curtailment"] = {
	name : "Temporal Curtailment",
    source : [["NN:S"]],
	classes : ["wizard"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "S", 
	duration : "Instantaneous",
	save : "Cha",
	description : "Target creature makes Cha save or halves speed and disadv on Dex saves; can be combined or split; CL5:2, CL11:3, CL17:4 rays",
	descriptionCantripDie : "Cha save for `CD` ray(s) or halves speed and disadv on Dex saves; rays can be combined or split",
	descriptionFull : "You send a glowing ray of temporal energy streaking towards a creature within range.\n A target must succeed on a Charisma saving throw or its speed is halved and it has disadvantage on Dexterity saving throws until the end of your next turn.\n The spell creates more than one ray when you reach higher levels:  two rays at 5th level, three rays at 11th level, and four rays at 17th level. You can direct the beams at the same target (though the effects do not stack), or at different ones."
};
SpellsList["touch of vitality"] = {
	name : "Touch of Vitality",
	classes : ["bard", "sorcerer", "warlock"],
	source : ["NN:S"],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "1 creature w/ at least 1 HP gains (spellcasting ability modifier + prof bonus) THP start of each its turns",
	descriptionFull : "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to your spellcasting ability modifier plus your proficiency bonus at the start of each of its turns. The temporary hit points are lost when the spell ends."
};
SpellsList["vanish"] = {
	name : "Vanish",
	classes : ["artificer", "warlock", "wizard"],
	source : [["NN:S", 190]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Conc, 1 m",
	description : "Store 1 held obj <1 lb in extradim. space; 1 a to summon obj in free hand or return; reappears at end",
	descriptionFull : "You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 1 pound, is transported to an extradimensional space, where it remains for the duration.\n   Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet."
};

// Level 1
SpellsList["augmented alacrity"] = {
	name : "Augmented Alacrity",
	classes : ["artificer", "bard", "sorcerer", "warlock", "wizard"],
	source : [["NN:S", 186]],
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a pinch of dried tea leaves",
	duration : "1 h",
	description : "1+1/SL willing creature has advantage on its next initiative roll during the duration",
	descriptionFull : "You touch a creature and give it a small amount of foresight that enables it to react quickly in battle. The target has advantage on the next initiative roll it makes before the duration expires.\n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can touch and affect one extra creature for each slot level above 1st."
};
SpellsList["bowstaff"] = {
	name : "Bowstaff",
	classes : ["paladin","ranger"],
	source : [["NN:S", 3]],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V, M",
	compMaterial : "A short or longbow",
	duration : "1 min",
	description : "Short/longbow I hold does melee 1d8 Bludg. dmg and uses my spellcasting ability modifier instead of Str",
	descriptionShorter : "Short/longbow I hold does 1d8 Bludg. dmg \u0026 uses my spellcasting modifier instead of Str",
	descriptionFull : "The bow that is touched takes on the rigidity and toughness of forged steel, allowing it to be used as a two-handed melee weapon instead of a ranged weapon. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The bow’s enhancement bonus, if any, applies on melee attack and damage rolls.\n Additional weapon special weapon qualities also apply to melee attacks if such qualities can be added to a melee weapon. The weapon also becomes magical, if it isn't already. On each of your turns before the spell ends, you can use a bonus action to switch the weapon between melee and ranged. The spell ends if you cast it again or if you let go of the weapon. \n At Higher Levels. When you cast this spell using a spell slot of 2nd or 3rd level, the duration becomes 10 minutes. When you use a spell slot of 4th level, the duration becomes 1 hour. When you use a spell slot of 5th level or higher, the duration becomes 8 hours."
};
WeaponsList["bowstaff"] = {
	baseWeapon : "quarterstaff",
	regExpSearch : /bowstaff/i,
	name : "Bowstaff",
	source : [["NN:S", 3]],
	list : "spell",
	ability : 5,
	type : "Simple",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	description : "Imbued short or longbow; two-handed, counts as a magical weapon",
	monkweapon : true,
	abilitytodamage : true
};
/* Bowstaff
1st-level transmutation
Casting Time: 1 bonus action
Range: Touch
Components: S, M (A short or longbow)
Duration: 1 minute

The bow that is touched takes on the rigidity and toughness of forged steel, allowing it to be used as a two-handed melee weapon instead of a ranged weapon. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. 
The bow’s enhancement bonus, if any, applies on melee attack and damage rolls. Additional weapon special weapon qualities also apply to melee attacks if such qualities can be added to a melee weapon. The weapon also becomes magical, if it isn't already. On each of your turns before the spell ends, you can use a bonus action to switch the weapon between melee and ranged. The spell ends if you cast it again or if you let go of the weapon.

At Higher Levels.
When you cast this spell using a spell slot of 2nd or 3rd level, the duration becomes 10 minutes. When you use a spell slot of 4th level, the duration becomes 1 hour. When you use a spell slot of 5th level or higher, the duration becomes 8 hours.

Classes: Paladin, Ranger */
SpellsList["call nature spirits"] = {
	name: "Call Nature Spirits",
	classes: ["druid", "ranger"],
	source: ["NN:S"],
	ritual: true,
	level: 1,
	school: "Trans",
	time: "1 min",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Call nature spirits to aid you with camping or finding food/drink/tracks/shelter; see description",
	descriptionFull: "You call out to the spirits of nature to aid you. When you cast this spell, choose up to three of the following effects:\n  \u2022 If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again.\n  \u2022 If there is edible forage within range, you know it and where to find it.\n  \u2022 If there is clean drinking water within range, you know it and where to find it.\n  \u2022 If there is suitable shelter for you and your companions with range, you know it and where to find.\n  \u2022 Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption.\n  \u2022 Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish."
};
SpellsList["call to arms"] = {
	name : "Call to Arms",
	classes : ["paladin"],
	source : ["NN:S", 50],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "20 ft",
	components : "V,S",
	duration : "1 rnd",
	description : "All friendly crea gain a +2 to atk on their next atk, add your spellcasting ability modifier to the dmg",
	descriptionFull : "Your battle cry fills your allies within 20 feet of you with righteous fury, making their strikes more sure and deadly. Until the start of your next turn, the first time each turn that you or a creature friendly to you makes a melee attack, that creature gains a +2 bonus to the attack roll. If an attack that benefits from this bonus hits, the damage of the attack is increased by an amount equal to your spellcasting ability modifier."
};
SpellsList["connected circumstances"] = {
	name : "Connected Circumstances",
	source : ["NN:S"],
	classes : ["cleric", "warlock", "wizard"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "1 h",
	save : "Cha",
	description : "2 crea save or share damage & healing; adv. on save if hostile; dis. on save if charmed",
	descriptionFull : "Choose two creatures that you can see. Both creatures must make Charisma saving throws, and they do so with advantage if they are hostile to you. If a creature is charmed by you, it has disadvantage on this saving throw. If both creatures fail their saving throws, then their circumstances are now connected." + "\n " + "\u2022 Whenever one of the creatures takes damage, the other creature takes an identical amount of damage, unless both creatures took damage from the same source." + "\n " + "\u2022 Whenever one of the creatures regains hit points, the other creature regains an identical number of hit points, unless both creatures regained hit points from the same source." + "\n   " + "The two target creatures remain connected for the duration of the spell, even if both targets are on different planes of existence."
};
SpellsList["creepy fingers"] = {
	name : "Creepy Fingers",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["NN:S", 120]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "Hand becomes spider, 1d6 Psychic if destroyed.",
	descriptionFull : "You detach your hand at the wrist, transforming it into a spider. While the spider is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through its eyes and hear what it hears until the start of your next turn. During this time, you are deaf and blind with regard to your own senses. If the spider is killed or prevented from returning to you, your hand is restored, but you take 1d6 points of psychic damage. If you command the spider to return, it crawls back to your wrist, and the spell ends."
};
SpellsList["curative concoction"] = {
	name : "Curative Concoction",
	classes : ["warlock", "wizard"],
	source : ["NN:S"],
	level : 1,
	school : "Conj",
	time : "1 min",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Alchemist's supplies",
	duration : "24 h",
	description : "Make vial with alchemist's supplies; heals 2d4+2 HP as an action; if not used, disappears after 24 h",
	descriptionFull : "You create a healing elixir in a simple vial that appears in your hand. The elixir retains its potency for the duration or until it's consumed, at which point the vial vanishes." + "\n   " + "As an action, a creature can drink the elixir or administer it to another creature. The drinker regains 2d4 + 2 hit points."
};
SpellsList["designate adversary"] = {
	name : "Designate Adversary",
	classes : ["cleric", "paladin", "ranger"],
	source : ["NN:S", 17],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Weapon gains +1 to hit, 1d6 dmg against a chosen crea type",
	descriptionFull: "When you cast this spell, you designate a foe by creature type and imbue a nonmagical weapon you touch with the power to deal additional damage to that foe. The weapon gains a +1 bonus to attack rolls against the designated foe and deals an additional 1d6 points of damage when it hits those foes."
};
SpellsList["dictated dislocation"] = {
	name : "Dictated Dislocation",
	classes : ["artificer", "bard", "warlock", "wizard"],
	source : ["NN:S"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 humanoid save or move its speed to where I choose and drop held items, if chosen (charm effect)",
	descriptionFull : "Your gesture forces one humanoid you can see within range to make a Constitution saving throw. On a failed save, the target must use it's reaction to move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding. This spell has no effect on a humanoid that is immune to being charmed."
};
SpellsList["gear shield"] = {
	name : "Gear Shield",
    source : [["NN:S"]],
	classes : ["artificer"],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M", 
	compMaterial : "a small iron gear",
	duration : "Conc, 10 min",
	description : "1 creature gains +2 AC for the duration",
	descriptionFull : "As part of casting this spell you touch a willing creature, and you cause large spectral gears to orbit them" + "\n   " + "These gears shield the target from incoming attacks, granting a +2 bonus to AC for the duration, without hindering the subject’s movement, vision, or attacks."
};
SpellsList["ghost light"] = { // GH
	name : "Ghost Light",
	classes : ["bard", "cleric", "sorcerer", "wizard"],
	source : [["NN:S", 121]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A clear marble",
	duration : "1 hour",
	description : "Target emits light 20ft, 20ft dim only visible by selected.",
	descriptionCantripDie : "",
	descriptionFull : "You touch one object that is no larger than 10 feet in any dimension and specify any number of creatures you can see within 10 feet. Until the spell ends, the object sheds bright silvery light in a 20-foot radius and dim light for an additional 20 feet. This light is only visible to the creatures you specified during the initial casting of the spell; all other creatures perceive the area affected by the ghost lantern as they regularly would."
};
SpellsList["insidious innuendo"] = {
	name : "Insidious Innuendo",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["NN:S"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or incapacitated; end of its turn 1d12 Psychic damage, repeat save; ends if out of range or total cover",
	descriptionFull : "You unleash a torrent of conflicting thoughts in the mind of one creature you can see within range, impairing its ability to make decisions. The target must succeed on a Wisdom saving throw or become incapacitated and can’t move. At the end of each of its turns, it takes 1d12 psychic damage, and it can then make another Wisdom saving throw. On a success, the spell ends on the target. The spell also ends if the target is ever outside the spell's range or if it has total cover from you."
};
SpellsList["magical melee"] = {
	name : "Magical Melee",
	classes : ["artificer", "wizard"],
	source : ["NN:S"],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a simple or martial weapon",
	duration : "Conc, 1 m",
	description : "1 wea gain proficiency and bonus 1d4+1 force damage. SL2: conc, 10 min | SL4: conc, 1 hour",
	descriptionFull : "You channel arcane energy into one simple or martial weapon you're holding. Until the end of your current turn, you are considered proficient with it and if the weapon isn't magical, it becomes a magic weapon for the spell's duration. Until the spell ends, when you attack with this magic weapon, you can use your Intelligence modifier instead of Strength or Dexterity modifier for the attack and damage rolls. You deal an extra 1d4+1 force damage to any target you hit with the weapon." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd or 3rd level, you can maintain your concentration on the spell for up to 10 minutes. When you use a spell slot of 4th level or higher, you can maintain your concentration on the spell for up to 1 hour."
};
SpellsList["momentary maneuvering"] = {
	name : "Momentary Maneuvering",
	classes : ["artificer","bard","cleric","druid","paladin"],
	source: ["NN:S"],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "30 ft",
	components : "V", 
	duration : "Instantaneous",
	description : "Move 1+1/SL willing creature 5ft;does not provoke an opportunity attack.",
	descriptionFull : "You adjust the location of an ally to a better tactical position. You move one willing creature 5 feet. This movement does not provoke opportunity attacks. The creature moves bodily through the intervening space (as opposed to teleporting or gating), so there can be no physical blockage (wall, door) between them." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can target an additional willing creature for each slot level above 1st."
};
SpellsList["otherworldly choir"] = {
	name : "Otherworldly Choir",
	classes : ["bard"],
	source : ["NN:S"],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	save: "Cha",
	description : "Use bns a to make 1 crea in range save or be friendly for 1 h; I adv on Cha (Performance) checks",
	descriptionFull : "Music of a style you choose fills the air around you in a 30-foot radius. The music spreads around corners and can be heard from up to 100 feet away. The music moves with you, centered on you for the duration." + "\n   " + "Until the spell ends, you make Charisma (Performance) checks with advantage. In addition, you can use a bonus action on each of your turns to beguile one creature you choose within 30 feet of you that can see you and hear the music. The creature must make a Charisma saving throw. If you or your companions are attacking it, the creature automatically succeeds on the saving throw. On a failure, the creature becomes friendly to you for as long as it can hear the music and for 1 hour thereafter. You make Charisma (Deception) checks and Charisma (Persuasion) checks against creatures made friendly by this spell with advantage."
};
SpellsList["piloting pointer"] = {
	name: "Piloting Pointer",
	classes: ["artificer", "bard", "cleric", "druid", "wizard"],
	source: ["NN:S"],
	ritual: true,
	level: 1,
	school: "Div",
	time: "1 min",
	range: "5 ft",
	components: "V,S",
	duration: "Conc, 8 h",
	description: "Tiny incorporeal arrow directs you to one major landmark you name that is on the same plane",
	descriptionFull: "You create a Tiny incorporeal arrow of shimmering light in an unoccupied space you can see within range. The arrow exists for the duration, but it disappears if you teleport or you travel to a different plane of existence.\n   When the arrow appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the arrow, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you.\n   If you don't move toward the arrow, it remains in place until you do and beckons for you to follow once every 1d4 minutes."
};
SpellsList["rapid rise"] = {
	name : "Rapid Rise",
	classes : ["artificer", "bard", "ranger", "sorcerer", "wizard"],
	source : ["NN:S"],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "10 ft",
	components : "V",
	duration : "Instantaneous",
	description : "Any creatures within range awaken and can then stand up from prone without expending movement",
	descriptionFull : "Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
};
SpellsList["retroactive continuity"] = {
	name : "Retroactive Continuity",
	classes : ["artificer", "bard", "paladin", "ranger"],
	source : ["NN:S", 346],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 min",
	description : "Next time I miss an attack, I can reroll it",
	descriptionFull : "The next time you miss a creature with an attack before this spell ends, you can instantly reset yourself to the moment before the attack and repeat it against the same target."
};
SpellsList["shadowcall armor"] = {
	name : "Shadowcall Armor",
	classes : ["warlock"],
	source : [["NN:S", 215]],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A cup of water",
	duration : "1 h",
	description : "5+5/SL temp HP; as long as temp HP last any crea that hits in melee takes 5+5/SL Necrotic dmg",
	descriptionFull : "A protective magical force surrounds you, manifesting as shadowy wisps  that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 necrotic damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the necrotic damage increase by 5 for each slot level above 1st."
};
SpellsList["shadow siphon"] = {
	name : "Shadow Siphon",
	classes : ["sorcerer", "warlock", "wizard"],
	source: ["NN:S", 250],
	level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "reaction vs being attacked; you impose disadvantage on the attack and gain resistance to radiant dmg",
	descriptionFull : "You can siphon energy from the plane of shadow to protect yourself from an immediate threat. As a reaction, you pull shadows around yourself to distort reality. The attack against you is made with disadvantage, and you have resistance to radiant damage until the start of your next turn." 
};
SpellsList["spiritual safeguard"] = {
	name : "Spiritual Safeguard",
	classes : ["cleric", "paladin", "warlock", "wizard"],
	source : ["NN:S"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S", 
	duration : "Conc, 1 min",
	description : "1 creature +2 AC;If it fails a Dex save it can reroll as a reaction;this ends the spell",
	descriptionFull : "You conjure a minor angelic guardian to protect a creature you can see within range. A faintly glowing figure resembling a human head and shoulders hovers within 5 feet of the target for the duration. The figure moves to interpose itself between the target and any incoming attacks, granting the target +2 to AC. If the target fails a Dexterity saving throw while the spell is active, it can use its reaction to roll a new save. The spell then ends."
};
SpellsList["surge of action"] = {
	name : "Surge of Action",
	classes : ["artificer", "bard", "druid", "paladin", "ranger", "sorcerer", "wizard"],
	source : ["NN:S", 329],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A shaving of licorice root",
	duration : "1 rnd",
	description : "1 willing crea gets add'l action next turn to Attack (1 wea atk), Dash, Diseng., Hide, or Use Object",
	descriptionFull : "Choose a willing creature that you can see within range. During its next turn, the target gains an additional action. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action."
};
SpellsList["word of advice"] = { // Auspicious Warning from Midgard
	name : "Word of Advice",
	classes : ["artificer","bard","sorcerer","wizard"],
	level : 1,
	school : "Div",
	time : "1 rea",
	range : "30 ft",
	components : "V", 
	duration : "Instantaneous",
	description : "Ally adds 1d4 to an attack roll, ability check, or saving throw they just made",
	descriptionFull : "Just in time, you call out a fortunate warning to a creature. The target rolls a d4 and adds the number rolled to the attack roll, ability check, or saving throw that they have just made and uses the new result for determining success or failure."
};

// Level 2
SpellsList["hex deflection"] = {
	name : "Hex Deflection",
	classes : ["cleric", "paladin", "warlock", "wizard"],
	source : ["NN:S", 335],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 h",
	description : "1 willing crea resist Necro. dmg; immune to curse, possession, and hexes; max HP can't be reduced",
	descriptionFull : "You reach out your hand and touch a willing creature within your reach, raising a smoke-like barrier around it. For the duration, the target has resistance to necrotic damage and can’t be cursed, possessed, or targeted by a hex. Also, its maximum hit points can’t be lowered. If the target is already affected by one of these effects, the effect is suspended until the spell ends."
};
SpellsList["fiendish flesh"] = { // GH
	name : "Fiendish Flesh",
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	source : [["NN:S", 121]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A handful of sulfur",
	duration : "Conc, 1 h",
	description : "Target gains Res to Cold, Fire, and Lightning, and Immune to Poison dmg",
	descriptionCantripDie : "",
	descriptionFull : "You touch a willing creature. Until the spell ends, the target’s skin has a red, scaly appearance, and the target has resistance to cold, fire, and lightning damage. For the duration, they also gain immunity to poison damage."
};
SpellsList["perpetual progress"] = {
	name : "Perpetual Progress",
	classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source : [["NN:S", 133]],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	compMaterial: "a cockroach (dead or alive)",
	duration: "Conc, 1 m",
	description : "For the duration, no extra movement cost to crawl, climb, squeeze, swim, or move across difficult terrain",
	descriptionFull : "For the duration, it does not cost you extra movement to crawl, climb, squeeze, swim, or move across difficult terrain."
};
SpellsList["scold"] = { // Destructive Resonance from Midgard
	name : "Scold",
	classes : ["bard","cleric","paladin","sorcerer","wizard"],
	source: ["NN:S"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,S", 
	duration : "Instantaneous",
	description : "15-ft cone, 4d6 (+1d6/SL) psychic damage/Wis half, prevents reactions 1 round.",
	descriptionFull : "You shout a scathing speech that assaults the minds of any creatures who hear it. Each creature in a 15-foot cone who can hear you takes 4d6 psychic damage, or half damage with a successful Wisdom saving throw. Creatures damaged by this spell can’t take reactions until the start of their next turn" + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd." 
};
SpellsList["servant swarm"] = {
    name: "Servant Swarm",
    classes: ["warlock", "wizard"],
    source: ["NN:S"],
    level: 2,
    school: "Conj",
    time: "1 min",
    range: "Touch",
    components: "V,S",
    duration: "Conc, 1 h",
    description : "Summon 3+1/SL familiars as Find Familiar; can see through their eyes and deliver touch spells; see B",
    descriptionFull: "You temporarily summon three familiars\u2014spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the find familiar spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the find familiar spell or similar means, then one fewer familiars are conjured by this spell.\n   Familiars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you.\n   When you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd."
};
SpellsList["supportive grace"] = {
	name : "Supportive Grace",
	classes : ["cleric", "paladin"],
	source : ["NN:S", 7],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "At start of your turn up to 4 creas in range gain 5 temp hp",
	descriptionFull : "At the start of each of your turns, up to 4 creatures of your choice within the area each gain 5 temporary hit points."
};
SpellsList["time step"] = {
	name : "Time Step",
    source : [["NN:S"]],
	classes : ["wizard"],	
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 rd",
	description : "Vanish 1 round; reappear within 30 ft at start of next turn: Can't be affected by anything while gone",
	descriptionFull : "You step forward briefly in time" + "\n   " + "You disappear from your location and reappear at the beginning of your next turn in a location 30 feet of the space you disappeared from." + "\n   " + "You can't be affected by anything that happens during the interval you're missing" + "\n   " + "You aren't aware of anything that happens during that time."
};
SpellsList["torporous tonic"] = {
	name : "Torporous Tonic",
	source : ["NN:S"],
	classes : ["artificer", "bard", "warlock", "wizard"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "20 ft",
	components : "V,S,M",
	compMaterial : "A container of liquid",
	duration : "1 min",
	save : "Int",
	description : "1 crea falls unconscious if less than 9d8+3d8/SL HP; drowsy if higher; see book",
	descriptionFull : "You open a liquid-filled container and a sandy brown smoke flows from you to a target creature. Roll 9d8; if the target creature has fewer current hit points than the total, then it falls unconscious. The target remains unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. If the target creature has more hit points than the rolled total, then it becomes drowsy and its speed is halved, it can’t take reactions, and it can’t make more than one melee or ranged attack during its turn. The target remains drowsy until it takes damage or until the spell ends." + "\n   " + "Undead and creatures that are immune to being charmed aren’t affected by this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, roll an additional 3d8 for each slot level above the 2nd."
};
SpellsList["tremorsense"] = {
	name : "Tremorsense",
	classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source : [["NN:S", 133]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration: "1 h",
	description : "1 willing creature has tremorsense 30 ft + 10 ft/SL for the duration",
	descriptionFull : "You touch a willing creature to grant it the ability to detect and pinpoint the origin of vibrations within a specific radius. For the duration, that creature has tremorsense out to a range of 30 feet.\n At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the range of the tremorsense increases by 15 feet for every slot level above 2nd."
};

// Level 3
SpellsList["celestial manifestation"] = {
	name : "Celestial Manifestation",
	classes : ["cleric", "paladin"],
	source : ["NN:S", 19],
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 min",
	description : "1 creature gains resistance to damage caused by demons and devils",
	descriptionFull : "A creature you touch gains resistance to damage caused by fiends for the duration."
};
SpellsList["shift shape"] = {
	name : "Shift Shape",
	classes : ["druid", "ranger", "sorcerer"],
	source : ["NN:S"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "1 creature save or transformed into beast of my choice of CR 1 or lower without flight; charmed if not immune",
	descriptionFull : "This spell transforms a creature you can see within range into a new beast form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw." + "\n   " + "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast of CR 1 or less that does not have a fly speed. While in this new form, the target is charmed by you and views you as a trusted ally. The target can understand simple commands such as “attack” or “stay.” The charm affects creatures that are immune to charm in their normal form. The charm ends immediately when the target reverts to its normal form." + "\n   " + "The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The creature's gear melds into its new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment." + "\n   " + "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form."
};

// Level 4
SpellsList["pep talk"] = {
	name : "Pep Talk",
	classes : ["bard", "cleric", "paladin"],
	source : ["NN:S"],
	level : 4,
	school : "Ench",
	time : "10 min",
	range : "60 ft",
	components : "V", 
	duration : "1 h",
	description : "Each creature that listens, +1 to attack rolls, advt vs charm and frightened;+ temp hp=spellcasting mod",
	descriptionFull : "The verbal component of this spell is a 10-minute-long, inspiring speech by you. At the end of the speech, all your allies within the area of effect who heard the speech gain a +1 bonus on attack rolls and have advantage on saving throws against effects that cause the charmed or frightened condition for 1 hour. Additionally, each recipient gains temporary hit points equal to your spellcasting ability modifier. If you move farther than 1 mile from your allies or you die, this spell ends. A character can be affected by only one inspiring speech at a time; subsequent, overlapping castings have no additional effect and don't extend the spell's duration."
};
SpellsList["rapturous smite"] = {
	name : "Rapturous Smite",
	classes : ["paladin"],
	source : ["NN:S", 39],
	level : 4,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Next weapon hit +2d8 Radiant dmg; save or disadv on atks, ability checks, and saves for 1 rnd",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, the attack deals an extra 2d8 radiant damage and the target must succeed on a Wisdom saving throw or it has disadvantage on all attacks, ability checks, and saving throws until the end of its next turn."
};
SpellsList["ride the lightning"] = {
	name : "Ride the Lightning",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["NN:S", 124]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A length of copper wire",
	duration : "Instantaneous",
	description : "Teleport 60ft+10ft per SL, 4d6+1d6 per SL in 5ft line.",
	descriptionCantripDie : "",
	descriptionFull : "You transform yourself into a bolt of lightning and teleport up to 60 feet to an unoccupied space you can see. Each creature within 5 feet of the line created between your starting point and final destination takes 4d6 lightning damage.\n At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th. In addition, you can teleport yourself an additional 10 feet further for each slot level above 4th."
};
SpellsList["timely transport"] = { // Galder's Speedy Courier from LLoK
    name: "Timely Transport",
    classes: ["artificer", "warlock", "wizard"],
    source: ["NN:S"],
    level: 4,
    school: "Conj",
    time: "1 a",
    range: "10 ft",
    components: "V,S,M\u2020",
    compMaterial: "25 gp, or mineral goods of equivalent value, which the spell consumes",
    duration: "10 min",
	description: "Send 3\xD73\xD73 ft chest of items I put in it to named crea on same plane; SL8: other plane (25gp cons.)",
	descriptionMetric : "Send 1\xD71\xD71 m chest of items I put in it to named crea on same plane; SL8: other plane (25gp cons.)",
    descriptionFull: "You summon a Small air elemental to a spot within range. The air elemental is formless, nearly transparent, immune to all damage, and cannot interact with other creatures or objects. It carries an open, empty chest whose interior dimensions are 3 feet on each side. While the spell lasts, you can deposit as many items inside the chest as will fit. You can then name a living creature you have met and seen at least once before, or any creature for which you possess a body part, lock of hair, clipping from a nail, or similar portion of the creature's body.\n   As soon as the lid of the chest is closed, the elemental and the chest disappear, then reappear adjacent to the target creature. If the target creature is on another plane, or if it is proofed against magical detection or location, the contents of the chest reappear on the ground at your feet.\n   The target creature is made aware of the chest's contents before it chooses whether or not to open it, and knows how much of the spell's duration remains in which it can retrieve them. No other creature can open the chest and retrieve its contents. When the spell expires or when all the contents of the chest have been removed, the elemental and the chest disappear. The elemental also disappears if the target creature orders it to return the items to you. When the elemental disappears, any items not taken from the chest reappear on the ground at your feet." + AtHigherLevels + "When you cast this spell using an 8th-level spell slot, you can send the chest to a creature on a different plane of existence from you."
};

// Level 5
SpellsList["haunting swarm"] = {
	name : "Haunting Swarm",
	classes : ["cleric", "wizard"],
	source : [["NN:S", 126]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "120 feet",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "Spirits attack, take 8d8 Psychic dmg and frightened, half on save and not frightened",
	descriptionFull : "You invite spirits to take their revenge upon a target. A creature that you can see within range must make a Charisma saving throw. A creature with a Charisma score of 2 or lower can’t be affected by this spell. A target takes 8d8 psychic damage on a failed save and is frightened of you until the spell ends. On a successful save, a target takes half damage and is not frightened."
};
SpellsList["virtuous smite"] = {
	name : "Virtuous Smite",
	classes : ["paladin"],
	source : ["NN:S", 57],
	level : 5,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Next melee weapon hit +3d8 Radiant dmg, target takes 10 Radiant dmg after attacking, save negates",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, your attack deals an extra 3d8 radiant damage. In addition, until the spell ends, if the affected target makes an attack during its turn, at the end of its turn it must make a successful Wisdom saving throw or it takes 10 radiant damage."
};

// Level 8
SpellsList["eldritch perception"] = {
	name : "Eldritch Perception",
	classes : ["sorcerer","warlock","wizard"],
	source: ["NN:S"],
	level : 8,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a piece of clear quartz",
	duration : "Conc, 1 h",
	description : "1 creature gains truesight, detect magic, and spell recognition for the duration",
	descriptionFull : "The recipient of this spell can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, perceives the original form of a shapechanger or a creature that is transformed by magic, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet. Furthermore, the recipient can sense the presence of magic within 30 feet of themself. If they sense magic in this way, they can use their action to see a faint aura around any visible creature or object in the area that bears magic, and they learn its school of magic, if any. The recipient also knows the name and effect of every spell they witness during Eldritch Perception's duration."
};

// Add reflavored spells
// Bludgeoning damage
SpellsList["stone barrage"] = {
	name: "Stone Barrage",
	classes: ["artificer","druid"],
	source: ["NN:S"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling conjured stone cube 2d4 Bludgeoning dmg; cubes at same or different targets; CL5:2, CL11:3, CL17:4 cubes",
	descriptionCantripDie: "Fling `CD` ice cubes 2d4 Bludgeoning dmg; cubess at same or different targets;",
	descriptionFull: "I conjure cubes of stone and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 bludgeoning damage." + "\n   " + AtHigherLevels + "The spell creates more than one cube when I reach higher levels: two cubes at 5th level, three cubes at 11th level, and four cubes at 17th level. I can direct the cubes at the same target or at different ones. Make a separate attack roll for each cube."
};
WeaponsList["stone barrage"] = {
	regExpSearch: /^stone(?=.*barrage).*$/i,
	name: "Stone Barrage",
	source: ["NN:S"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "bludgeoning"],
	range: "90 ft",
	description: "Each 2d4 is a separate cube requiring separate rolls; ",
	abilitytodamage: false,
	SpellsList: "stone barrage",
};

// Piercing damage
SpellsList["spike barrage"] = {
	name: "Spike Barrage",
	classes: ["artificer","druid"],
	source: ["NN:S"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling spike 2d4 Piercing dmg; spikes at same or different targets; CL5:2, CL11:3, CL17:4 spikes",
	descriptionCantripDie: "Fling `CD` spike barrages 2d4 Piercing dmg; spikes at same or different targets;",
	descriptionFull: "I conjure spike and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one spike when I reach higher levels: two spikes at 5th level, three spikes at 11th level, and four spikes at 17th level. I can direct the spikes at the same target or at different ones. Make a separate attack roll for each spike."
};
WeaponsList["spike barrage"] = {
	regExpSearch : /^(?=.*spike)(?=.*barrage).*$/i,
	name: "Spike Barrage",
	source: ["NN:S"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	range: "90 ft",
	description: "Each 2d4 is a separate spike requiring separate rolls",
	SpellsList: "spike barrage",
};
SpellsList["thorn barrage"] = {
	name: "Thorn Barrage",
	classes: ["artificer","druid"],
	source: ["NN:S"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling razor thorn 2d4 Piercing dmg; thorns at same or different targets; CL5:2, CL11:3, CL17:4 thorns",
	descriptionCantripDie: "Fling `CD` razor-sharp thorns 2d4 Piercing dmg; thorns at same or different targets;",
	descriptionFull: "I conjure razor-sharp thorns and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one thorn when I reach higher levels: two thorns at 5th level, three thorns at 11th level, and four thorns at 17th level. I can direct the thorns at the same target or at different ones. Make a separate attack roll for each thorn."
};
WeaponsList["thorn barrage"] = {
	regExpSearch: /^thorn(?=.*barrage).*$/i,
	name: "Thorn Barrage",
	source: ["NN:S"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	range: "90 ft",
	description: "Each 2d4 is a separate thorn requiring separate rolls",
	SpellsList: "thorn barrage",
};

// Slashing damage
SpellsList["leaf barrage"] = {
	name: "Leaf Barrage",
	classes: ["artificer","druid"],
	source: ["NN:S"],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling razor leaf 2d4 Slashing dmg; leaves at same or different targets; CL5:2, CL11:3, CL17:4 leaves",
	descriptionCantripDie: "Fling `CD` razor-sharp leaves 2d4 Slashing dmg; leaves at same or different targets;",
	descriptionFull: "I conjure razor-sharp leaves and fling it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 slashing damage." + "\n   " + AtHigherLevels + "The spell creates more than one leaf when I reach higher levels: two leaves at 5th level, three leaves at 11th level, and four leaves at 17th level. I can direct the leaves at the same target or at different ones. Make a separate attack roll for each leaf."
};
WeaponsList["leaf barrage"] = {
	regExpSearch: /^leaf(?=.*barrage).*$/i,
	name: "Leaf Barrage",
	source: ["NN:S"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "slashing"],
	range: "90 ft",
	description: "Each 2d4 is a separate leaf requiring separate rolls",
	SpellsList: "leaf barrage",
};

// Acid damage
SpellsList["acidic bolt"] = {
		name : "Acidic Bolt",
		classes : ["artificer", "sorcerer", "wizard"],
		source : ["NN:S"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell attack for 1d10 Acid dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
		descriptionCantripDie : "Spell attack for `CD`d10 Acid dmg; unattended flammable objects ignite",
		descriptionFull : "You hurl a drop of acid at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 acid damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
WeaponsList["acidic bolt"] = {
		regExpSearch : /^(?=.*acidic)(?=.*bolt).*$/i,
		name : "Acidic Bolt",
		source : ["NN:S"],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "acid"],
		range : "120 ft",
		description : "Unattended flammable objects ignite",
		abilitytodamage : false
	};
SpellsList["create acidspout"] = {
	name: "Create Acidspout",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : ["NN:S"],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "5-ft cube all crea at casting or entering save or 1d8 Acid dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionCantripDie : "5-ft cube all crea at casting, entering, or end turn in save or `CD`d8 Acid dmg; ignites flammable",
	descriptionFull: "You create an acidspout on ground that you can see within range. Until the spell ends, the magic acidspout fills a 5-foot cube. Any creature in the acidspout's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 acid damage. A creature must also make the saving throw when it moves into the acidspout's space for the first time on a turn or ends its turn there." + "\n   " + "The acidspout ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["create acidspout"] = {
	regExpSearch: /^(?=.*create)(?=.*acidspout).*$/i,
	name: "Create acidspout",
	source : ["NN:S"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "acid"],
	range: "60 ft",
	description: "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage: false,
	dc: true
};

// Cold damage
SpellsList["freezing blade"] = {
		name : "Freezing Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["NN:S"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "V,M",
		compMaterial : "A weapon",
		duration : "Instantaneous",
		description : "Melee weap atk with cast; if hit: 0d8 Cold dmg., if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Cold dmg and if it moves next round +`CD`d8 Cold dmg",
		descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in cold energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 cold damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 cold damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
	};
WeaponsList["freezing blade"] = {
	regExpSearch : /^(?=.*freezing)(?=.*blade).*$/i,
	name : "Freezing Blade",
	source : ["NN:S"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "cold"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
SpellsList["toll of the tides"] = {
	name : "Toll of the Tides",
	classes : ["cleric", "warlock", "wizard"],
	source : ["NN:S"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 1d12 Cold dmg (d8 instead of d12 if at full HP); +1d12/1d8 at CL 5, 11, \u0026 17",
	descriptionCantripDie : "1 crea save or `CD`d12 Cold damage (d8 instead of d12 if at full HP)",
	descriptionFull : "You point at one creature you can see within range, and the sound of a ship's bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 cold damage. If the target is missing any of its hit points, it instead takes 1d12 cold damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
};
WeaponsList["toll of the tides"] = {
	regExpSearch : /^(?=.*toll)(?=.*the)(?=.*tides).*$/i,
	name : "Toll of the Tides",
	source : ["NN:S"],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 12, "cold"],
	range : "60 ft",
	description : "Wis save, success - no damage; If target is at full HP, d8 instead of d12 damage",
	abilitytodamage : false,
	dc : true
};

// Fire damage

// Force damage

// Lightning damage
SpellsList["create arcing current"] = {
	name: "Create Arcing Current",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : ["NN:S"],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "5-ft cube all crea at casting or entering save or 1d8 Lightning dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionCantripDie : "5-ft cube all crea at casting, entering, or end turn in save or `CD`d8 Lightning dmg; ignites flammable",
	descriptionFull: "You create an arcing current on ground that you can see within range. Until the spell ends, the magic arcing current fills a 5-foot cube. Any creature in the arcing current's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 lightning damage. A creature must also make the saving throw when it moves into the arcing current's space for the first time on a turn or ends its turn there." + "\n   " + "The arcing current ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["create arcing current"] = {
	regExpSearch : /^(?=.*create)(?=.*arcing)(?=.*current).*$/i,
	name: "Create Arcing Current",
	source : ["NN:S"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "lightning"],
	range: "60 ft",
	description: "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage: false,
	dc: true
};
SpellsList["shocking bolt"] = {
	name : "Shocking Bolt",
	classes : ["artificer", "sorcerer", "wizard"],
	source : ["NN:S", 0],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell attack for 1d10 Lightning dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
	descriptionCantripDie : "Spell attack for `CD`d10 Lightning dmg; unattended flammable objects ignite",
	descriptionFull : "You hurl a spark of lightning at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 lightning damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
WeaponsList["shocking bolt"] = {
		regExpSearch : /^(?=.*shocking)(?=.*bolt).*$/i,
		name : "Shocking Bolt",
		source : ["NN:S", 0],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "lightning"],
		range : "120 ft",
		description : "Unattended flammable objects ignite (PHB 241)",
		abilitytodamage : false
	}
SpellsList["shocking blade"] = {
		name : "Shocking Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["NN:S"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "V,M",
		compMaterial : "A weapon",
		duration : "Instantaneous",
		description : "Melee weap atk with cast; if hit: 0d8 Lightning dmg., if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Lightning dmg and if it moves next round +`CD`d8 Lightning dmg",
		descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in lightning energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 lightning damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 lightning damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
	};
WeaponsList["shocking blade"] = {
	regExpSearch : /^(?=.*shocking)(?=.*blade).*$/i,
	name : "Shocking Blade",
	source : ["NN:S"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "lightning"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
SpellsList["shocking discharge"] = {
	name : "Shocking Discharge",
	classes : ["sorcerer", "wizard"],
	source : [["NN:S", 123]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "All in area 3d6+1d6/SL Lightning dmg; save halves; unattended flammable objects ignite",
	descriptionFull : "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 lightning damage on a failed save, or half as much damage on a successful one." + "\n   " + "The lightning ignites any flammable objects in the area that aren't being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["lightning burst"] = {
    name : "Lightning Burst",          
    classes : ["sorcerer", "wizard"],     
    source : ["NN:S", 0], 
    ritual : false,     
    level : 3,     
    school : "Evoc",     
    time : "1 a", 
    range : "150 ft", 
    components : "V,S,M", 
    compMaterial : "A bit of fur and an amber, crystal, or glass rod", 
    duration : "Instantaneous", 
    description : "20-ft rad all crea 8d6+1d6/SL Lightning dmg; save halves; unattended flammable objects ignite", 
    descriptionFull : "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of electricity. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 lightning damage on a failed save, or half as much damage on a successful one." + "\n   " + "The lightning spreads around corners. It ignites flammable objects in the area that aren't being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."     
};
SpellsList["delayed burst lightning"] = {
    name : "Delayed Burst Lightning",          
    classes : ["sorcerer", "wizard"],     
    source : ["NN:S", 0], 
    ritual : false,     
    level : 7,     
    school : "Evoc",     
    time : "1 a", 
    range : "150 ft", 
    components : "V,S,M", 
    compMaterial : "A bit of fur and an amber, crystal, or glass rod", 
    duration : "Conc, 1 min", 
    save : "Dex",
    description : "Create bead; at chosen moment, or if conc. is broken, 20-ft rad 12d6+1d6/SL Lightning dmg; save halves", 
    descriptionFull : "A beam of blue light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of electricity that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes lightning damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one." + "\n   " + "The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6." + "\n   " + "If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in electricity. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes." + "\n   " + "The lightning damages objects in the area and ignites flammable objects that aren't being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."     
};

// Necrotic damage
SpellsList["glooming blade"] = {
		name : "Glooming Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["NN:S"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "V,M",
		compMaterial : "A weapon",
		duration : "Instantaneous",
		description : "Melee wea atk with cast; if hit: 0d8 Necrotic dmg., if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Necrotic dmg and if it moves next round +`CD`d8 Necrotic dmg",
		descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in necrotic energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 necrotic damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 necrotic damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
	};
WeaponsList["glooming blade"] = {
	regExpSearch : /^(?=.*glooming)(?=.*blade).*$/i,
	name : "Glooming Blade",
	source : ["NN:S"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "necrotic"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
SpellsList["withering gaze"] = {
	name : "Withering Gaze",
	classes : ["warlock"],
	source : [["NN:S", 154], ["SRD", 154], ["P", 250]],
	level : 1,
	school : "Evoc",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Cast when taking dmg, crea that dealt dmg 2d10+1d10/SL Necro dmg; save halves",
	descriptionFull : "You point your finger and glare, and the creature that damaged you is momentarily surrounded by necrotic energies. The creature must make a Dexterity saving throw. It takes 2d10 necrotic damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
};

// Poison damage

// Psychic damage

// Radiant damage
SpellsList["knell the departed"] = {
	name : "Knell the Departed",
	classes : ["cleric", "warlock", "wizard"],
	source : ["NN:S"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 1d12 Radiant dmg (d8 instead of d12 if at full HP); +1d12/1d8 at CL 5, 11, \u0026 17",
	descriptionCantripDie : "1 crea save or `CD`d12 Radiant damage (d8 instead of d12 if at full HP)",
	descriptionFull : "You point at one creature you can see within range, and the sound of a celestial bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 radiant damage. If the target is missing any of its hit points, it instead takes 1d12 radiant damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
};
WeaponsList["knell the departed"] = {
	regExpSearch : /^(?=.*knell)(?=.*the)(?=.*departed).*$/i,
	name : "Knell the Departed",
	source : ["NN:S"],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 12, "radiant"],
	range : "60 ft",
	description : "Wis save, success - no damage; If target is at full HP, d8 instead of d12 damage",
	abilitytodamage : false,
	dc : true
};
SpellsList["radiant bolt"] = {
		name : "Radiant Bolt",
		classes : ["artificer","cleric", "sorcerer", "wizard"],
		source : ["NN:S"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell attack for 1d10 Radiant dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
		descriptionFull : "You hurl a spark of divine energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 radiant damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
	};
WeaponsList["radiant bolt"] = {
		regExpSearch : /^(?=.*radiant)(?=.*bolt).*$/i,
		name : "Radiant Bolt",
		source : ["NN:S"],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "radiant"],
		range : "120 ft",
		description : "Unattended flammable objects ignite; ",
		abilitytodamage : false
	}
SpellsList["starflame"] = {
	name : "Starflame",
	classes : ["cleric", "druid"],
	source : ["NN:S"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "10 min (D)",
	description : "Starlight 10 ft bright light; once 30 ft ranged spell attack for 1d8 Radiant dmg; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "Starlight 10 ft bright light; once 30 ft ranged spell attack for `CD`d8 Radiant dmg",
	descriptionFull : "A flickering starflame appears in your hand. The starflame remains there for the duration and harms neither you nor your equipment. The starflame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again." + "\n   " + "You can also attack with the starflame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the starflame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 radiant damage." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	};
WeaponsList["starflame"] = {
		regExpSearch : /starflame/i,
		name : "Starflame",
		source : ["NN:S"],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 8, "radiant"],
		range : "30 ft",
		description : "10-ft radius bright light and 10-ft radius dim light until thrown; ",
		abilitytodamage : false
	};

// Thunder damage
SpellsList["arcane flourish"] = { // Booming Blade
	name : "Arcane Flourish",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["NN:S"]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "S,M\u0192",
	compMaterial : "A melee weapon worth at least 1 sp",
	duration : "1 round",
	description : "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next round +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionShorter : "melee wea atk with cast; hit: 0d8 Thunder dmg, if move next rnd +1d8; +1d8 CL 5/11/17 ",
	descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if moves next round +`CD`d8 Thunder dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in arcane energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n   This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
	dynamicDamageBonus : {
		extraDmgGroupsSameType : /(next r(?:ou)?nd )((?:\+?\d+d?\d*)+)/i
		}
},
WeaponsList["arcane flourish"] = { // Booming Blade
	regExpSearch : /^(?=.*arcane)(?=.*flourish).*$/i,
	name : "Arcane Flourish",
	source : [["NN:S"]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "thunder"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round",
	abilitytodamage : false
},
SpellsList["crooning blade"] = {
		name : "Crooning Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["NN:S"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "V,M",
		compMaterial : "A weapon",
		duration : "Instantaneous",
		description : "Melee weap atk with cast; if hit: 0d8 Thunder dmg., if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if it moves next round +`CD`d8 Thunder dmg",
		descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in thunder energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 thunder damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
	};
WeaponsList["crooning blade"] = {
	regExpSearch : /^(?=.*crooning)(?=.*blade).*$/i,
	name : "Crooning Blade",
	source : ["NN:S"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "thunder"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};

// Add Dunamancy Spells (Customized)
// Cantrip
SpellsList["flash fatigue"] = { // Sapping Sting
	name : "Flash Fatigue",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 189]],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 creature that I can see save or 1d4 Necrotic dmg and fall prone; +1d4 at CL 5, 11, and 17",
	descriptionCantripDie : "1 creature that I can see save or `CD`d4 Necrotic dmg and fall prone",
	descriptionFull : "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.\n   This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
},
WeaponsList["flash fatigue"] = { // Sapping Sting
	regExpSearch : /^(?=.*flash)(?=.*fatigue).*$/i,
	name : "Flash Fatigue",
	source : [["NN:S", 189]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 4, "necrotic"],
	range : "30 ft",
	description : "Con save, success - no damage, fail - also fall prone",
	abilitytodamage : false,
	dc : true
},
// Level 1
SpellsList["gravity surge"] = { // Magnify Gravity
	name : "Gravity Surge",
	classes : ["wizard"],
	source : [["NN:S", 188]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "10-ft rad all crea 2d8+1d8/SL Force dmg, half spd; Save halves \u0026 no spd reduce; Str check to move obj",
	descriptionShorter : "10-ft rad all 2d8+1d8/SL Force dmg, half spd; Save half, no spd reduce; Str check to move obj",
	descriptionFull : "The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed.\n   Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
},
SpellsList["stimulate initiative"] = { // Gift of Alacrity
	name : "Stimulate Initiative",
	classes : ["wizard"],
	source : [["NN:S", 186]],
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "1 willing creature can add 1d8 to its initiative rolls for the duration",
	descriptionFull : "You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls."
},
// Level 2
SpellsList["augment fortune"] = { // Fortune's Favor
	name : "Augment Fortune",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 186]],
	level : 2,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "A white pearl worth at least 100 gp, which the spell consumes",
	duration : "1 h",
	description : "1+1/SL crea once roll extra d20 and select which to use for atk, check, save, or atk vs. it (100gp cons.)",
	descriptionFull : "You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this spell on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.\n   If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
},
SpellsList["demipouch"] = { // Wristpocket
	name : "Demipouch",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 190]],
	ritual : true,
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Conc, 1 h",
	description : "Store 1 held obj <5 lb in extradim. space; 1 a to summon obj in free hand or return; reappears at end",
	descriptionMetric : "Store 1 held obj <2,5 kg in extradim. space; 1 a summon obj in free hand or return; reappears at end",
	descriptionFull : "You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration.\n   Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet."
},
SpellsList["unyielding anchoring"] = { // Immovable Object
	name : "Unyielding Anchoring",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 187]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Gold dust worth at least 25 gp, which the spell consumes",
	duration : "1 h",
	description : "1 obj <10 lb fixed in place; holds 4k lb; Str check move, except chosen/password; See B (25gp cons.)",
	descriptionMetric : "1 obj <5 kg fixed in place; holds 2k kg; Str check move, except chosen/password; See B (25gp cons.)",
	descriptionFull : "You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and the creatures you designate when you cast this spell can move the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute.\n   If the object is fixed in the air, it can hold up to 4,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your spell save DC. On a success, the creature can move the object up to 10 feet." + AtHigherLevels + "If you cast this spell using a spell slot of 4th or 5th level, the DC to move the object increases by 5, it can carry up to 8,000 pounds of weight, and the duration increases to 24 hours. If you cast this spell using a spell slot of 6th level or higher, the DC to move the object increases by 10, it can carry up to 20,000 pounds of weight, and the effect is permanent until dispelled."
},
// Level 3
SpellsList["pressure pulse"] = { // Pulse Wave
	name : "pressure pulse",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 188]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "6d6+1d6/SL Force dmg, pulled/pushed 15+5/SL ft from me (also free obj); save halves, no move",
	descriptionMetric : "6d6+1d6/SL Force dmg, pull/push 4,5+1,5/SL m from me (also free obj); save halves, no move",
	descriptionShorter : "6d6+1d6/SL Force dmg, pull/push 15+5/SL ft from me (also free obj); save half, no move",
	descriptionFull : "You create intense pressure, unleash it in a 30-foot cone, and decide whether the pressure pulls or pushes creatures and objects. Each creature in that cone must make a Constitution saving throw. A creature takes 6d6 force damage on a failed save, or half as much damage on a successful one. And every creature that fails the save is either pulled 15 feet toward you or pushed 15 feet away from you, depending on the choice you made for the spell.\n   In addition, unsecured objects that are completely within the cone are likewise pulled or pushed 15 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the distance pulled or pushed increases by 5 feet for each slot level above 3rd."
},
// Level 4
SpellsList["gravity sphere"] = { // Gravity Sinkhole
	name : "Gravity Sphere",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 187]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A black marble",
	duration : "Instantaneous",
	save : "Con",
	description : "20-ft rad all crea 5d10+1d10/SL Force dmg, pulled to center of radius; save halves and not pulled",
	descriptionFull : "A 20-foot-radius sphere of crushing force forms at a point you can see within range and tugs at the creatures there. Each creature in the sphere must make a Constitution saving throw. On a failed save, the creature takes 5d10 force damage and is pulled in a straight line toward the center of the sphere, ending in an unoccupied space as close to the center as possible (even if that space is in the air). On a successful save, the creature takes half as much damage and isn't pulled." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
},
// Level 5
SpellsList["phase nudge"] = { // Temporal Shunt
	name : "Phase Nudge",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 189], ["W", 189]],
	level : 5,
	school : "Trans",
	time : "1 rea",
	timeFull : "1 reaction, taken when a creature you can see makes an attack roll or starts to cast a spell",
	range : "120 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Wis",
	description : "Cast if see atk/cast, 1+1/SL crea, each max 30 ft apart, save or vanish until next turn, atk/cast wasted",
	descriptionFull : "You target the triggering creature, which must succeed on a Wisdom saving throw or vanish, being thrown to another point in time and causing the attack to miss or the spell to be wasted. At the start of its next turn, the target reappears where it was or in the closest unoccupied space. The target doesn't remember you casting the spell or being affected by it." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. All targets must be within 30 feet of each other."
},
// Level 6
SpellsList["pulsing fissure"] = { // Gravity Fissure
	name : "Pulsing Fissure",
	classes : ["artificer", "wizard"],
	source : [["NN:S", 187], ["W", 187]],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "S:100" + (typePF ? "-" : "") + "ft line",
	components : "V,S,M",
	compMaterial : "A fistful of iron filings",
	duration : "Instantaneous",
	save : "Con",
	description : "100-ft long 5-ft wide all 8d6+1d6/SL Force dmg, save half; all in 10 ft of line save or dmg \u0026 pull to it",
	descriptionShorter : "100-ft long 5-ft wide all 8d6+1d6/SL Force dmg, save half; all in 10 ft of it save or dmg \u0026 pulled",
	descriptionFull : "You manifest a ravine of gravitational energy in a line originating from you that is 100 feet long and 5 feet wide. Each creature in that line must make a Constitution saving throw, taking 8d8 force damage on a failed save, or half as much damage on a successful one.\n   Each creature within 10 feet of the line but not in it must succeed on a Constitution saving throw or take 8d8 force damage and be pulled toward the line until the creature is in its area." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th."
},
// Level 7
SpellsList["inevitibility"] = {  // Tether Essence
	name : "Inevitibility",
	classes : ["wizard"],
	source : [["NN:S", 189], ["W", 189]],
	level : 7,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "A spool of platinum cord worth at least 250 gp, which the spell consumes",
	duration : "Conc, 1 h",
	save : "Con",
	description : "2 crea save (dis. if in 30 ft) or if both fail take same dmg and same healing; ends if 0 hp (250gp cons.)",
	descriptionFull : "Two creatures you can see within range must make a Constitution saving throw, with disadvantage if they are within 30 feet of each other. Either creature can willingly fail the save. If either save succeeds, the spell has no effect. If both saves fail, the creatures are magically linked for the duration, regardless of the distance between them. When damage is dealt to one of them, the same damage is dealt to the other one. If hit points are restored to one of them, the same number of hit points are restored to the other one. If either of the tethered creatures is reduced to 0 hit points, the spell ends on both. If the spell ends on one creature, it ends on both."
};
// Level 8
SpellsList["black hole sun"] = { // Dark Star
	name : "Black Hole Sun",
	classes : ["wizard"],
	source : [["NN:S", 186], ["W", 186]],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A shard of onyx and a drop of the caster's blood, both of which the spell consumes",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Up to 40-ft rad as Darkness spell, as Silence spell, dif. ter.; enter/start turn 8d10 Force dmg, save half",
	descriptionShorter : "Up to 40-ft rad as Darkness \u0026 Silence, dif. ter.; enter/start turn 8d10 Force dmg, save half",
	descriptionFull : "This spell creates a sphere centered on a point you choose within range. The sphere can have a radius of up to 40 feet. The area within this sphere is filled with magical darkness and crushing gravitational force.\n   For the duration, the spell's area is difficult terrain. A creature with darkvision can't see through the magical darkness, and nonmagical light can't illuminate it. No sound can be created within or pass through the area. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.\n   Any creature that enters the spell's area for the first time on a turn or starts its turn there must make a Constitution saving throw. The creature takes 8d10 force damage on a failed save, or half as much damage on a successful one. A creature reduced to 0 hit points by this damage is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust."
};
SpellsList["reality break"] = { // Reality Break
	name : "Reality Break",
	classes : ["wizard"],
	source : [["NN:S", 189], ["W", 189]],
	level : 8,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A crystal prism",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or can't take reactions, random effect each turn, see book; extra save at end of every turn",
	descriptionFull : "You shatter the barriers between realities and timelines, thrusting a creature into turmoil and madness. The target must succeed on a Wisdom saving throw, or it can't take reactions until the spell ends. The affected target must also roll a d10 at the start of each of its turns; the number rolled determines what happens to the target, as shown on the Reality Break Effects table."+
	"\n   At the end of each of its turns, the affected target can repeat the Wisdom saving throw, ending the spell on itself on a success."+
	"\n\n d10 \tEffect"+
	"\n 1-2 \tVision of the Far Realm: The target takes 6d12 psychic damage, and it is stunned until the end of the turn."+
	"\n 3-5 \tRending Rift: The target must make a Dexterity saving throw, taking 8d12 force damage on a failed save, or half as much damage on a successful one."+
	"\n 6-8 \tWormhole: The target is teleported, along with everything it is wearing and carrying, up to 30 feet to an unoccupied space of your choice that you can see. The target also takes 10d12 force damage and is knocked prone."+
	"\n 9-10\tChill of the Dark Void: The target takes 10d12 cold damage, and it is blinded until the end of the turn."
};
// Level 9
SpellsList["pulsing void sphere"] = { // Ravenous Void
	name : "Pulsing Void Sphere",
	classes : ["wizard"],
	source : [["NN:S", 188], ["W", 188]],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "1000 ft",
	components : "V,S,M",
	compMaterial : "A small, nine-pointed star made of iron",
	duration : "Conc, 1 min",
	save : "Str",
	description : "20-ft rad all enter/start 5d10 Force dmg, restrained; all enter/start in 100 ft save or pulled in; see B",
	descriptionShorter : "20-ft rad all enter/start 5d10 Force dmg, restrained; all start in 100 ft save or pull in; see B",
	descriptionFull : "You create a 20-foot-radius sphere of destructive gravitational force centered on a point you can see within range. For the spell's duration, the sphere and any space within 100 feet of it are difficult terrain, and nonmagical objects fully inside the sphere are destroyed if they aren't being worn or carried.\n   When the sphere appears and at the start of each of your turns until the spell ends, unsecured objects within 100 feet of the sphere are pulled toward the sphere's center, ending in an unoccupied space as close to the center as possible.\n   A creature that starts its turn within 100 feet of the sphere must succeed on a Strength saving throw or be pulled straight toward the sphere's center, ending in an unoccupied space as close to the center as possible. A creature that enters the sphere for the first time on a turn or starts its turn there takes 5d10 force damage and is restrained until it is no longer in the sphere. If the sphere is in the air, the restrained creature hovers inside the sphere. A creature can use its action to make a Strength check against your spell save DC, ending this restrained condition on itself or another creature in the sphere that it can reach. A creature reduced to 0 hit points by this spell is annihilated, along with any nonmagical items it is wearing or carrying."
};
SpellsList["life siphon"] = { // Time Ravage
	name : "Life Siphon",
	classes : ["wizard"],
	source : [["NN:S", 189], ["W", 189]],
	level : 9,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M\u2020",
	compMaterial : "An hourglass filled with diamond dust worth at least 5,000 gp, which the spell consumes",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea 10d12 Necrotic dmg \u0026 aged: dis. atk/chk/save, die in 30 days; save half, not aged (5k gp cons.)",
	descriptionShorter : "1 crea 10d12 Necro. dmg, aged: dis. atk/chk/save, die in 30 days; save hlf, no aged (5k gp cons)",
	descriptionFull : "You target a creature you can see within range, putting its physical form through the devastation of rapid aging. The target must make a Constitution saving throw, taking 10d12 necrotic damage on a failed save, or half as much damage on a successful one. If the save fails, the target also ages to the point where it has only 30 days left before it dies of old age. In this aged state, the target has disadvantage on attack rolls, ability checks, and saving throws, and its walking speed is halved. Only the wish spell or the greater restoration cast with a 9th-level spell slot can end these effects and restore the target to its previous age."
};


// Add Familiar Options
CreatureList["chicken"] = {
	name : "Chicken",
	nameAlt : ["Rooster"],
	source : [["NN:S", 382]],
	size : 5,
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 4,
	hd : [2, 4],
	speed : "30 ft, fly 30 ft",
	scores : [3, 14, 8, 2, 12, 6],
	passivePerception : 11,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Beak",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : true
	}],
	actions : [{
	name : "Uncanny Dodge",
	description : "When an attacker that the [THIS] can see hits it with an attack, the [THIS] can use their reaction to halve the attack's damage against them."
	}],
	traits : [{
		name : "Bad Flier",
		description : "The [THIS] falls at the end of a turn if it's airborne and the only thing holding it aloft is its flying speed."
	},{
		name : "Chicken Walk",
		description : "All attempts to grapple the [THIS] have disadvantage."
	}]
};
CreatureList["hummingbird"] = {
	name : "Hummingbird",
	source : ["NN:S"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "5 ft, fly 70 ft",
	scores : [3, 16, 12, 2, 12, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
	},
	condition_immunities : "exhaustion",
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing/sight",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Beak",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [0, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Swiftness",
			description : "The hummingbird doesn't provoke opportunity attacks when it flies out of an enemy's reach, and has advantage on saving throws made against effects that would knock it prone."
		}, {
			name : "Keen Senses",
			description : "The hummingbird has advantage on Wisdom (Perception) checks that rely on hearing/sight."
		}, {
			name : "Torpor",
			description : "The hummingbird loses the benefits of it's Keen Senses and Swiftness traits when sleeping."
		}
	],
	wildshapeString : "\u25C6 Senses: Darkvision 60 ft; Advantage on Wisdom (Perception) checks that rely on hearing/sight.\n\u25c6 Swiftness: Don't provoke opportunity attacks when you fly out of an enemy's reach, advantage on saving throws made against effects that would knock you prone.\n\u25C6 Immune to: exhaustion.\n\u25C6 Torpor: Lose the benefits of Keen Senses and Swiftness traits when sleeping."
};
CreatureList["skunk"] = {
	name : "Skunk",
	source : ["NN:S"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft",
	scores : [3, 16, 8, 2, 12, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 5
		},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["", "", false]
		}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The skunk has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name : "Innate Spellcasting (1/day)",
			description : "The skunk can innately cast Stinking Cloud, requiring no material components. Its innate spellcasting ability is Wisdom (DC 11)."
		}
		]
};
/* Skunk
This cuddly little brute makes a playful (if alarming) companion. 
It can be summoned using find familiar and has the statistics of a weasel. 
It can cast stinking cloud once per day, save DC 11. */

SourceList.DDCE = {
    name : "D&D Celebration Event 2020",
    abbreviation : "DDCE",
    group : "Adventurers League",
    date : "2020/09/19"
};
/* Arctic Stink Squirrel
This cuddly little brute makes a playful (if alarming) companion. 
It can be summoned using find familiar and has the statistics of a weasel. 
It can cast stinking cloud once per day, save DC 11. */
CreatureList["arctic stink squirrel"] = {
	name : "Arctic Stink Squirrel",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft",
	scores : [3, 16, 8, 2, 12, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 5
		},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["", "", false]
		}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The arctic stink squirrel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name : "Innate Spellcasting (1/day)",
			description : "The arctic stink squirrel can innately cast Stinking Cloud, requiring no material components. Its innate spellcasting ability is Wisdom (DC 11)."
		}
		]
};
/* Chwinga Squidling
This bizarre mutation is both devoted and dangerous. 
You can summon the chwinga squidling using find familiar.
It has the statistics of a stirge with no fly speed. */
CreatureList["chwinga squidling"] = {
	name : "Chwinga Squidling",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Beast",
	companion : "familiar",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 2,
	hd : [1, 4],
	speed : "10 ft",
	scores : [4, 16, 11, 2, 8, 6],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 9,
	languages : "",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Blood Drain",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "The chwinga squidling attaches itself to the target, see Blood Drain trait"
		}],
	traits : [{
		name : "Blood Drain",
		description : "While attached, the chwinga squidling doesn't attack. Instead, at the start of each of the it's turns, the target loses 5 (1d4 + 3) HP due to blood loss. The squidling can detach itself by spending 5 feet of its movement. It does so after it drains 10 HP of blood from the target or the target dies. A creature, including the target, can use its action to detach the chwinga squidling."
		}],
};
/* Gelatinous Ice Cube
You have a friendly psychic link with this tiny cube of death. 
You can summon the gelatinous ice cube using find familiar.
It has the statistics of an oblex spawn. */
CreatureList["gelatinous ice cube"] = {
	name : "Gelatinous Ice Cube",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Ooze",
	subtype : "",
	companion : "familiar",
	alignment : "Lawful Evil",
	ac : 13,
	hp : 18,
	hd : [4, 4],
	speed : "20 ft",
	scores : [8, 16, 15, 14, 11, 10],
	saves : ["", "", "", "4", "", "2"],
	condition_immunities : "blinded, charmed, deafened, exhaustion, prone",
	skills : {
		"perception" : 3,
		"stealth" : 4
		},
	senses : "Blindsight 60 ft (blind beyond this distance)",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Pseudopod",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "+1d4 psychic damage on a hit"
		}],
		traits : [{
			name : "Amorphous",
			description : "The cube can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name : "Aversion to Fire",
			description : "If the cube takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}]
};
/* Snowy Owlbear Cub
The cub of this rare breed of tiny owlbear forms a loving bond with a single adventurer. 
You can summon the owlbear cub using find familiar.
It has the statistics of a cat. */
CreatureList["snowy owlbear cub"] = {
	name : "Snowy Owlbear Cub",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "40 ft, climb 30 ft",
	scores : [3, 15, 10, 3, 12, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 4
		},
	senses : "Adv. on Wis (Perception) checks using smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claws",
		ability : 2,
		damage : [1, "", "slashing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["Str", "", false]
		}],
	traits : [{
		name : "Keen Smell",
		description : "The snowy owlbear cub has advantage on Wisdom (Perception) checks that rely on smell."
		}]
};

// Add Withdraw trait to all familiars (Disengage as a bonus action)
var WithdrawTrait = { 
  name : "Withdraw",
  description : "The [THIS] can take the Disengage action as a bonus action on each of its turns."
};
if (CompanionList.familiar.attributesAdd.actions) {
  CompanionList.familiar.attributesAdd.actions.push(WithdrawTrait);
} else {
  CompanionList.familiar.attributesAdd.actions = [WithdrawTrait];
};

