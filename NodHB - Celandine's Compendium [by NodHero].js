var iFileName = "NodHB - Celandine's Compendium [by Nod].js"; 
RequiredSheetVersion(13);

// Arcane Incantations from an ArchMage’s Spellbook -
// (with notations about spells from other less impressive sources)

SourceList.CC={
	name : "Celandine's Compendium",
	abbreviation : "NodHB-CC",
	group : "Nod's Homebrew",
	date : "2020/11/26"
};

// Add Compendium Spells
SpellsList["celandine's connected circumstances"] = {
	name : "Celandine's Connected Circumstances",
	source : ["CC"],
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
SpellsList["celandine's curative concoction"] = {
	name : "Celandine's Curative Concoction",
	classes : ["warlock", "wizard"],
	source : ["CC"],
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
SpellsList["celandine's dictated dislocation"] = {
	name : "Celandine's Dictated Dislocation",
	classes : ["artificer", "bard", "warlock", "wizard"],
	source : ["CC"],
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
SpellsList["celandine's insidious innuendo"] = {
	name : "Celandine's Insidious Innuendo",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["CC"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or incapacitated and end of each turn 1d12 Psychic damage, after which it can save to end",
	descriptionFull : "You unleash a torrent of conflicting thoughts in the mind of one creature you can see within range, impairing its ability to make decisions. The target must succeed on a Wisdom saving throw or be incapacitated. At the end of each of its turns, it takes 1d12 psychic damage, and it can then make another Wisdom saving throw. On a success, the spell ends on the target."
};
SpellsList["celandine's magical melee"] = {
	name : "Celandine's Magical Melee",
	classes : ["artificer", "wizard"],
	source : ["CC"],
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
SpellsList["celandine's piloting pointer"] = {
	name: "Celandine's Piloting Pointer",
	classes: ["artificer", "bard", "cleric", "druid", "wizard"],
	source: ["CC"],
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
SpellsList["celandine's rapid rise"] = {
	name : "Celandine's Rapid Rise",
	classes : ["artificer", "bard", "ranger", "sorcerer", "wizard"],
	source : ["CC"],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "10 ft",
	components : "V",
	duration : "Instantaneous",
	description : "Any creatures within range awaken and can then stand up from prone without expending movement",
	descriptionFull : "Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
};
SpellsList["celandine's servant swarm"] = {
    name: "Celandine's Servant Swarm",
    classes: ["warlock", "wizard"],
    source: ["CC"],
    level: 2,
    school: "Conj",
    time: "1 min",
    range: "Touch",
    components: "V,S",
    duration: "Conc, 1 h",
    description : "Summon 3+1/SL familiars as Find Familiar; can see through their eyes and deliver touch spells; see B",
    descriptionFull: "You temporarily summon three familiars\u2014spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the find familiar spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the find familiar spell or similar means, then one fewer familiars are conjured by this spell.\n   Familiars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you.\n   When you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd."
};
SpellsList["celandine's torporous tonic"] = {
	name : "Celandine's Torporous Tonic",
	source : ["CC"],
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

//Add other spells
SpellsList["call nature spirits"] = {
	name: "Call Nature Spirits",
	classes: ["druid", "ranger"],
	source: ["CC"],
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
SpellsList["encourage"] = {
	name : "Encourage",
	classes : ["cleric", "druid"],
	source : ["CC"],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "1 creature that has at least 1 HP gain (spellcasting ability modifier + proficieny bonus) temp HP start of each of its turns",
	descriptionFull : "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to your spellcasting ability modifier plus your proficiency bonus at the start of each of its turns. The temporary hit points are lost when the spell ends."
};
SpellsList["imbue stone"] = {
	name : "Imbue Stone",
	classes : ["artificer", "druid", "warlock"],
	source : ["CC"],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "1 min",
	description : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6 Bludg. dmg and -10 speed.",
	descriptionCantripDie : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do `CD`d6 Bludg. dmg and -10 speed.",
	descriptionFull : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. On a hit, it takes 1d6 bludgeoning damage, and its speed is reduced by 10 feet until the start of your next turn. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it."
};
WeaponsList["imbue stone"] = {
	regExpSearch : /^(?=.*imbue)(?=.*stone).*$/i,
	name : "Imbue Stone",
	source : ["CC"],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "bludgeoning"],
	range : "60/120 ft",
	description : "Stone can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack. Target -10 ft speed until start of my next turn",
	abilitytodamage : false
};
SpellsList["otherworldly choir"] = {
	name : "Otherworldly Choir",
	classes : ["bard"],
	source : ["CC"],
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
SpellsList["shift shape"] = {
	name : "Shift Shape",
	classes : ["druid", "ranger", "sorcerer"],
	source : ["CC"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "1 creature save or transformed into beast of my choice of CR 1 or lower without flight; charmed if not immune",
	descriptionFull : "This spell transforms a creature you can see within range into a new beast form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw." + "\n   " + "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast of CR 1 or less that does not have a fly speed. While in this new form, the target is charmed by you and views you as a trusted ally. The target can understand simple commands such as “attack” or “stay.” The charm affects creatures that are immune to charm in their normal form. The charm ends immediately when the target reverts to its normal form." + "\n   " + "The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The creature's gear melds into its new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment." + "\n   " + "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form."
};

//Add bonus spells (damage type changes)
// Acid damage
SpellsList["acidic bolt"] = {
		name : "Acidic Bolt",
		classes : ["artificer", "sorcerer", "wizard"],
		source : ["CC"],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell attack for 1d10 Acid dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
		descriptionFull : "You hurl a spark of acid at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 acid damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
WeaponsList["acidic bolt"] = {
		regExpSearch : /^(?=.*acidic)(?=.*bolt).*$/i,
		name : "Acidic Bolt",
		source : ["CC"],
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
	source : ["CC"],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "5-ft cube all crea at casting or entering save or 1d8 Acid dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionFull: "You create an acidspout on ground that you can see within range. Until the spell ends, the magic acidspout fills a 5-foot cube. Any creature in the acidspout's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 acid damage. A creature must also make the saving throw when it moves into the acidspout's space for the first time on a turn or ends its turn there." + "\n   " + "The acidspout ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["create acidspout"] = {
	regExpSearch: /^(?=.*create)(?=.*acidspout).*$/i,
	name: "Create acidspout",
	source : ["CC"],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "acid"],
	range: "60 ft",
	description: "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage: false,
	dc: true
};
// Lightning damage
SpellsList["shocking bolt"] = {
		name : "Shocking Bolt",
		classes : ["artificer", "sorcerer", "wizard"],
		source : ["CC", 0],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell attack for 1d10 Lightning dmg; unattended flammable objects ignite; +1d10 at CL 5, 11, and 17",
		descriptionFull : "You hurl a spark of lightning at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 lightning damage. A flammable object hit by this spell ignites if it isn't being worn or carried." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
WeaponsList["shocking bolt"] = {
		regExpSearch : /^(?=.*shocking)(?=.*bolt).*$/i,
		name : "Shocking Bolt",
		source : ["CC", 0],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "lightning"],
		range : "120 ft",
		description : "Unattended flammable objects ignite (PHB 241)",
		abilitytodamage : false
	}
UpdateDropdown("weapon");
SpellsList["shocking blade"] = {
		name : "Shocking Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["CC"],
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
	source : ["CC"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "lightning"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
SpellsList["lightning burst"] = {
    name : "Lightning Burst",          
    classes : ["sorcerer", "wizard"],     
    source : ["CC", 0], 
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
    source : ["CC", 0], 
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
// Necrotic or Radiant damage
SpellsList["glooming blade"] = {
		name : "Glooming Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : ["CC"],
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
	source : ["CC"],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "necrotic"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round; ",
	abilitytodamage : false
};
SpellsList["radiant bolt"] = {
		name : "Radiant Bolt",
		classes : ["cleric", "sorcerer", "wizard"],
		source : ["CC"],
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
		source : ["CC"],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 10, "radiant"],
		range : "120 ft",
		description : "Unattended flammable objects ignite; ",
		abilitytodamage : false
	}
UpdateDropdown("weapon");

