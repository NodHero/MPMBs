var iFileName = "Compendium of Additional Arcana II [Nod].js"; 
RequiredSheetVersion(13);

SourceList["CAA2"] = {
	name : "Compendium of Additional Arcana II",
	abbreviation : "CAA2",
	abbreviationSpellsheet: "C2",
	group : "Nod's Homebrew",
	date : "2024/05/26"
};

		// ------------------------------ Cantrips ------------------------------ 
SpellsList["cluster shock"] = { // Lightning Surge VSS p347
	name : "Cluster Shock",
	classes : ["artificer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "V,S,M",
	compMaterial : "Two bits of copper wire",
	duration : "Instantaneous",
	save : "Dex",
	description : "Crea in 5 ft save or 1d6 Lightning dmg; +1d6 CL5/11/17",
	descriptionCantripDie : "Creatures within 5 ft save or `CD`d6 Lightning damage",
	descriptionFull : "You emit a dazzling array of short lightning bolts in all directions. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 lightning damage." + "\n   " + "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
WeaponsList["cluster shock"] = {
	regExpSearch : /cluster shock/i,
	name : "Cluster Shock",
	source : [["CAA2"]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "lightning"],
	range : "S:5-ft rad",
	description : "Crea in range Dex save; success: nothing",
	abilitytodamage : false,
	dc : true
};
/* Cluster Shock
Evocation cantrip
Casting Time: 1 action
Range: Self (5-foot radius)
Components: V, S, M (two bits of copper wire)
Duration: Instantaneous
You emit a dazzling array of short lightning bolts in all directions. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 lightning damage.

At Higher Levels. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
Classes: Warlock, Wizard */
SpellsList["corrosive poke"] = { // Caustic Touch DMS p48
	name : "Corrosive Poke",
	classes : ["cleric", "druid", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell attack, 1d8 Acid dmg, disadv on concentration; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "Spell attack, , disadv on concentration, `CD`d8 Acid dmg",
	descriptionFull : "Your hand sweats profusely and becomes coated in a film of caustic slime. Make a melee spell attack against a creature you touch. On a hit, the target takes 1d8 acid damage. If the target was concentrating on a spell, it has disadvantage on its Constitution saving throw to maintain concentration." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["corrosive poke"] = {
	regExpSearch : /corrosive poke/i,
	name : "Corrosive Poke",
	source : [["CAA2"]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "acid"],
	range : "Melee",
	description : "Disadvantage on concentration",
	abilitytodamage : false
};
/* Corrosive Poke
Evocation cantrip
Casting Time: 1 action
Range: Touch
Components: V, S
Duration: Instantaneous
Your hand sweats profusely and becomes coated in a film of caustic slime. Make a melee spell attack against a creature you touch. On a hit, the target takes 1d8 acid damage. If the target was concentrating on a spell, it has disadvantage on its Constitution saving throw to maintain concentration.

This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
Classes: Cleric, Druid, Sorcerer, Wizard */
SpellsList["eat this"] = { // Toxic Temptation from Kobold Press
	name : "Eat This",
	classes : ["cleric","bard"],
	source : [["CAA2"]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	duration : "Instantaneous",
	compMaterial : "A morsel of food",
	save : "Wis",
	description : "1 creature that I can see save or use reaction, poisoned and save disadv until end of its next turn",
	descriptionFull : "You cause a morsel of spoiled food to appear in the mouth of one creature you can see within range.\n The target must succeed on a Wisdom saving throw or it immediately uses its reaction, if available, to gulp down the food. Until the end of its next turn, the target is poisoned (disadvantage on attack rolls and ability checks) and has disadvantage on saving throws. A creature immune to poison that fails its save must still use its reaction, if available, to eat the morsel, but it is not subject to the other effects."
};
WeaponsList["eat this"] = {
	regExpSearch : /^(?=.*eat)(?=.*this).*$/i,
	name : "Eat This",
	source : [["CAA2"]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["", "", "poisoned"],
	range : "30 ft",
	description : "Wis save, fail = use reaction, poisoned and save disadv until end of its next turn",
	abilitytodamage : false,
	dc : true
};
/* Eat This
Conjuration Cantrip
Casting Time: 1 action
Range: 30 feet
Components: V, S
Duration: 1 round
You cause a morsel of spoiled food to appear in the mouth of one creature you can see within range.
The target must succeed on a Wisdom saving throw or it immediately uses its reaction, if available, to gulp down the food. Until the end of its next turn, the target is poisoned (disadvantage on attack rolls and ability checks) and has disadvantage on saving throws. A creature immune to poison that fails its save must still use its reaction, if available, to eat the morsel, but it is not subject to the other effects.
Classes: Bard, Cleric */
SpellsList["fists afire"] = { // Fists of Fire KCC p24
	name : "Fists Afire",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 min",
	description : "Fists become 1d6 fire dmg, Light property weapons; ignite held objects; 1d4 fire dmg grappled",
	descriptionFull : "You cause your fists to erupt in flames. For the duration, your fists become a set of simple natural weapons that deal 1d6 fire damage. You are proficient in these weapons, and they have the Light property.\n For the duration, any flammable object you attempt to hold catches fire. If you end your turn grappling another creature with your hands, it takes 1d4 fire damage.\n You can end the spell early (no action required)."
};
WeaponsList["fists afire"] = {
	baseWeapon : "unarmed strike",
	regExpSearch : /fists afire/i,
	name : "Fists Afire",
	source : [["CAA2"]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : [1, 6, "fire"],
	range : "Melee",
	description : "Light",
	abilitytodamage : false
};
/* Fists Afire 
Transmutation cantrip
Casting Time: 1 bonus action
Range: Self
Components: V, S
Duration: 1 minute
You cause your fists to erupt in flames. For the duration, your fists become a set of simple natural weapons that deal 1d6 fire damage. You are proficient in these weapons, and they have the Light property.
For the duration, any flammable object you attempt to hold catches fire. If you end your turn grappling another creature with your hands, it takes 1d4 fire damage.
You can end the spell early (no action required).
Classes: Druid, Sorcerer, Warlock */
SpellsList["implement focus"] = {  // Homebrew
	name : "Implement Focus",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A rod or staff",
	duration : "1 min",
	description : "Rod/staff I hold does 1d8 Bludg. dmg and uses my spellcasting ability modifier instead of Str",
	descriptionShorter : "Rod/staff I hold does 1d8 Bludg. dmg \u0026 uses my spellcasting modifier instead of Str",
	descriptionFull : "A rod or staff you are holding is imbued with arcane power. For the duration, you can use the focus as a melee weapon, using your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
};
WeaponsList["implement focus"] = {
	baseWeapon : "quarterstaff",
	regExpSearch : /implement focus/i,
	name : "Implement Focus",
	source : [["CAA2"]],
	list : "spell",
	ability : 5,
	type : "Simple",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	description : "Imbued rod or staff; Counts as a magical weapon",
	monkweapon : true,
	abilitytodamage : true
};
/* Implement Focus
Transmutation cantrip
Casting Time: 1 bonus action
Range: Touch
Components: V, S, M (A rod or staff)
Duration: 1 minute
A rod or staff you are holding is imbued with arcane power. For the duration, you can use the focus as a melee weapon, using your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.
Classes: Sorcerer, Warlock, Wizard */
SpellsList["wild bolt"] = { // Homebrew
	name : "Wild Bolt",
	classes : ["sorcerer"],
	source : [["CAA2"]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell attack for 1d10 random dmg; d8s set dmg type, see B; +1d10 at CL 5, 11, and 17",
	descriptionCantripDie : "Spell attack for `CD`d10 random dmg; d8s set dmg type, see B",
	descriptionFull : "You hurl a drop of chaotic energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 damage. Roll a d8. The number rolled on that die determines the attack's damage type, as shown below."  + "\n\n" + toUni("d8") + "\t" + toUni("Damage Type") + "\n  1\tAcid" + "\n  2\tCold" + "\n  3\tFire" + "\n  4\tForce" + "\n  5\tLightning" + "\n  6\tPoison" + "\n  7\tPsychic" + "\n  8\tThunder" + "\n\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
	dynamicDamageBonus : {
		multipleDmgTypes : {
			dmgTypes : ["acid", "cold", "fire", "force", "lightning", "poison", "psychic", "thunder"],
			inDescriptionAs : ''
		},
	},
};
WeaponsList["wild bolt"] = {
	regExpSearch : /^(?=.*wild)(?=.*bolt).*$/i,
	name : "Wild Bolt",
	source : [["CAA2"]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 10, "random"],
	range : "120 ft",
	description : "d8 dmg type: 1-Acid, 2-Cold, 3-Fire, 4-Force, 5-Lightning, 6-Poison, 7-Psychic, 8-Thunder;",
	abilitytodamage : false
};
/* Wild Bolt
Evocation cantrip
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You hurl a drop of chaotic energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 damage. Roll a d8. The number rolled on that die determines the attack's damage type, as shown below.
Wild Bolt
d8	Damage Type
1	Acid
2	Cold
3	Fire
4	Force
5	Lightning
6	Poison
7	Psychic
8	Thunder

This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).
Classes: Sorcerer
*/

		// ------------------------------ Level 1 Spells ------------------------------
SpellsList["acolyte armor"] = { // Consecrated Armor VSS p334
	name : "Acolyte Armor",
	classes : ["cleric","paladin"],
	source : [["CAA2"]],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A drop of blessed oil",
	duration : "8 h",
	ritual: true,
	description : "AC becomes 12+Dex, or 15+Dex against fiends and undead",
	descriptionFull : "You trace a holy symbol on your chest, and an invisible barrier protects you until the spell ends. Your base AC becomes 12 + your Dexterity modifier. If you are attacked by a fiend or undead, your AC becomes 15 + your Dexterity modifier against that attack.",
};
ArmourList["acolyte armor"] = {
	name : "Acolyte Armor",
	regExpSearch : /^(?=.*(acolyte|priest))(?=.*armou?r).*$/i,
	source : [["CAA2"]],
	ac : 12,
	list : "magic",
	affectsWildShape : true
};
/* Acolyte Armor
1st-level abjuration (ritual)
Casting Time: 1 action
Range: Self
Components: V, S, M (a drop of blessed oil)
Duration: 8 hours
You trace a holy symbol on your chest, and an invisible barrier protects you until the spell ends. Your base AC becomes 12 + your Dexterity modifier. If you are attacked by a fiend or undead, your AC becomes 15 + Dexterity modifier against that attack.
Classes: Cleric, Paladin */
SpellsList["affinity weave"] = { // Bond Item KCC p14
	name : "Affinity Weave",
	classes : ["artificer"],
	source : [["CAA2"]],
	level : 1,
	school : "Conj",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	save : "Cha",
	description : "Link with obj < 100 lbs; if held, crea save, adv if held > 1 min; bonus action to recall item to hand",
	descriptionFull : "You touch an item weighing no more than 100 pounds and form a link between you and it. Until the spell ends, you can recall it to your hand as a bonus action.\n   If another creature is holding or wearing the item when you try to recall it, they make a Charisma saving throw to retain possession of the item, and if they succeed, the spell fails. They make this save with advantage if they have had possession of the item for more than 1 minute."
};
/* Affinity Weave
1st-level conjuration
Casting Time: 1 minute
Range: Touch
Components: V, S
Duration: 8 hours

You touch an item weighing no more than 100 pounds and form a link between you and it. Until the spell ends, you can recall it to your hand as a bonus action.

If another creature is holding or wearing the item when you try to recall it, they make a Charisma saving throw to retain possession of the item, and if they succeed, the spell fails. They make this save with advantage if they have had possession of the item for more than 1 minute.
Classes: Artificer */
SpellsList["augmented aim"] = { // Guided Missile VSS p342
	name : "Augmented Aim",
	classes : ["bard", "cleric", "druid", "paladin"],
	source : [["CAA2"]],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Next ranged weapon atk has advantage and double normal/long range",
	descriptionFull : "You utter a prayer to guide your projectile, causing it to arc toward its target. The next ranged weapon attack you make before the spell ends has advantage, and has double its normal and long ranges."
};
/* Augmented Aim
1st-level transmutation
Casting Time: 1 bonus action
Range: Self
Components: V
Duration: Concentration, up to 1 minute
You utter a prayer to guide your projectile, causing it to arc toward its target. The next ranged weapon attack you make before the spell ends has advantage and has double its normal and long ranges.
Classes: Bard, Cleric, Druid, Paladin */

SpellsList["black look"] = { // Disquieting Gaze DMS p60
	name : "Black Look",
	classes : ["sorcerer","warlock","wizard"],
	source : [["CAA2"]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 min",
	description : "Adv Intimidation checks if creat can see me, Adv necrotic damage spell attacks if creat can see eyes",
	descriptionFull : "Your eyes burn with scintillating motes of unholy light. Until the spell ends, you have advantage on Charisma (Intimidation) checks made against creatures that can see you, and you have advantage on spell attack rolls that deal necrotic damage to creatures that can see your eyes."
};
/* Black Look
1st-level necromancy
Casting Time: 1 action
Range: Self
Components: V, S
Duration: 1 minute
Your eyes burn with scintillating motes of unholy light. Until the spell ends, you have advantage on Charisma (Intimidation) checks made against creatures that can see you, and you have advantage on spell attack rolls that deal necrotic damage to creatures that can see your eyes.
Classes: Sorcerer, Warlock, Wizard */
SpellsList["dashslap"] = { // Abrupt Hug ToH p273
	name : "Dashslap",
	classes : ["ranger"],
	source : [["CAA2"]],
	level : 1,
	school : "Trans",
	time : "1 rea",
	range : "30 ft",
	components : "V", 
	duration : "Instantaneous",
	description : "When creature within 30 ft uses Attack action, creature or I can make unarmed strike and grapple",
	descriptionFull : "You or the creature taking the Attack action can immediately make an unarmed strike. In addition to dealing damage with the unarmed strike, the target can grapple the creature it hit with the unarmed strike."
};
/* Dashslap
1st-level transmutation
Casting Time: 1 reaction, which you take when you or a creature within 30 feet of you takes an Attack action
Range: 30 feet
Components: V
Duration: Instantaneous

You or the creature taking the Attack action can immediately make an unarmed strike. In addition to dealing damage with the unarmed strike, the target can grapple the creature it hit with the unarmed strike.
Classes: Ranger */
SpellsList["endorsement"] = { // Guest of Honor DMS p212
	name : "Endorsement",
	classes : ["bard", "wizard"],
	source : [["CAA2"]],
	ritual: true,
	level : 1,
	school : "Ench",
	time : "10 min",
	range : "Touch",
	components : "V,M\u2020",
	compMaterial : "A signet ring worth 25 gp",
	duration : "10 m",
	description : "Creature adds +1d4 to Persuasion checks for 10 minutes+10 minutes/SL",
	descriptionFull : "You whisper words of encouragement, and a creature that you touch gains confidence along with approval from strangers. For the spell's duration, the target puts its best foot forward and strangers associate the creature with positive feelings. The target adds 1d4 to all Charisma (Persuasion) checks made to influence the attitudes of others." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the effect lasts for an additional 10 minutes for each slot level above 1st."
};
/* Endorsement
1st-level enchantment (ritual)
Casting Time: 10 minutes
Range: Touch
Components: V, M (a signet ring worth 25 gp)
Duration: 10 minutes
You whisper words of encouragement, and a creature that you touch gains confidence along with approval from strangers. For the spell's duration, the target puts its best foot forward and strangers associate the creature with positive feelings. The target adds 1d4 to all Charisma (Persuasion) checks made to influence the attitudes of others.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the effect lasts for an additional 10 minutes for each slot level above 1st.
Classes: Bard, Wizard */
SpellsList["heroes' snack"] = { // Nourishing Repast DMS p97
	name : "Heroes' Snack",
	classes : ["bard", "cleric"],
	source : [["CAA2"]],
	ritual: true,
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "24 h",
	description : "Up to 6 creatures worth of food; Short Rest: +1 hp per Hit Die; Long Rest: Adv. on poison/disease saves for 8h",
	descriptionFull : "You touch a supply of food and turn it into a magical substance that promotes healing and health. Enough food for up to six creatures can be transformed by the spell. The effects of the spell last for 24 hours or until the food is eaten.\n If the food is eaten during a short rest, it provides a +1 bonus to each Hit Die spent to regain hit points. If the food is eaten as part of a long rest instead, then each creature partaking in the meal gains advantage on saving throws against disease or poison for the next 8 hours."
};
/* Heroes' Snack (R)
1st-level transmutation (ritual)
Casting Time: 1 minute
Range: Touch
Components: V, S
Duration: 24 hours
You touch a supply of food and turn it into a magical substance that promotes healing and health. Enough food for up to six creatures can be transformed by the spell. The effects of the spell last for 24 hours or until the food is eaten.

If the food is eaten during a short rest, it provides a +1 bonus to each Hit Die spent to regain hit points. If the food is eaten as part of a long rest instead, then each creature partaking in the meal gains advantage on saving throws against disease or poison for the next 8 hours.
Classes: Bard, Cleric */
SpellsList["horrifying hallucination"] = { // Terrifying Visions KCC p145
	name : "Horrifying Hallucination",
	classes : ["bard"],
	source : [["CAA2"]],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea takes 3d6+1d6/SL Psychic dmg, must use rea to move away; save halves and no move",
	descriptionFull : "You instill a vision of horrifying hallucinations into the mind of a target you can see. The target must make a Wisdom saving throw. On failure, it takes 3d6 psychic damage and must immediately use its reaction to move its movement speed directly away from you. This movement does not force the creature to move into any hazard or take movements that cause it to take damage (such as jumping off a cliff or moving into a spell effect). On a successful save, the target takes half as much damage and isn't forced to move." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
/* Horrifying Hallucination
1st-level illusion
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Instantaneous
You instill a vision of terrifying hallucinations into the mind of a target you can see. The target must make a Wisdom saving throw. On failure, it takes 3d6 psychic damage and must immediately use its reaction to move its movement speed directly away from you. This movement does not force the creature to move into any hazard or take movements that cause it to take damage (such as jumping off a cliff or moving into a spell effect). On a successful save, the target takes half as much damage and isn't forced to move.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
Classes: Bard */
SpellsList["seed to branches"] = { // Nature's Ladder Arcadia #3
	name : "Seed to Branches",
	classes : ["druid", "ranger"],
	source : [["CAA2"]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "An acorn, which the spell consumes",
	duration : "24 h",
	description : "grow tree, choose up to 20 ft tall, climbable, 1 ft diam, 5ac 25hp van aft dur or death, lv x height",
	descriptionFull : "You cause a tree to sprout from an unoccupied space of solid ground that you can see within range. When you cast the spell, you determine the height of the tree, which can be a maximum of 20 feet tall. If there isn’t enough room for the tree to grow to full height, the tree attains the maximum possible height in the space available. The tree has a 1-foot-diameter trunk and evenly spaced branches perfect for climbing. The tree has AC 5 and 25 hit points. After 24 hours, or if the tree is reduced to 0 hit points, it instantly vanishes.\n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can increase the height of the tree by 20 feet for each slot level above 1st."
};
/* Seed to Branches
1st-level transmutation
Casting Time: 1 action
Range: Self
Components: V, S, M (an acorn, which the spell consumes)
Duration: 24 hours
You cause a tree to sprout from an unoccupied space of solid ground that you can see within range. When you cast the spell, you determine the height of the tree, which can be a maximum of 20 feet tall. If there isn’t enough room for the tree to grow to full height, the tree attains the maximum possible height in the space available. The tree has a 1-foot-diameter trunk and evenly spaced branches perfect for climbing. 
The tree has AC 5 and 25 hit points. After 24 hours, or if the tree is reduced to 0 hit points, it instantly vanishes.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can increase the height of the tree by 20 feet for each slot level above 1st.
Classes: Druid, Ranger */
SpellsList["shadowblast"] = { // Shadow Hands DMS p251
	name : "Shadowblast",
	classes : ["warlock", "wizard"],
	source : [["CAA2"]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "S:10" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "All in area 2d4+2d4/SL Necrotic dmg, frightened until end of its next turn; save halves, no frightened;",
	descriptionFull : "A freezing blast of shadow explodes out from you in a 10-foot cone. Each creature in that area must make a Wisdom saving throw. On a failed save, a creature takes 2d4 necrotic damage, and is frightened of you until the end of its next turn. On a successful save, a creature takes half as much damage and is not frightened.." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
};
/* Shadowblast
1st-level evocation
Casting Time: 1 action
Range: Self (15-foot cone)
Components: V, S
Duration: Instantaneous
A freezing blast of shadow explodes out from you in a 10-foot cone. Each creature in that area must make a Wisdom saving throw. On a failed save, a creature takes 2d4 necrotic damage, and is frightened of you until the end of its next turn. On a successful save, a creature takes half as much damage and is not frightened.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st.
Classes: Warlock, Wizard */
SpellsList["shockforce barrier"] = { // Shock Shield by Legendary Games
	name : "Shockforce Barrier",
	classes : ["sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 1,
	school : "Abjur",
	time : "1 a/1 r",
	timeFull : "1 action or 1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "+2 AC until start of next turn; stop Magic Missile dmg; detonate 15-ft 1d6+1d6/SL Lightning dmg",
	descriptionFull : "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +2 bonus to AC, including against the triggering attack, and you take no damage from magic missile. At any time before the start of your next turn, you may detonate your shock shield (no action required). It immediately detonates if used to block a magic missile. When detonated, all other creatures within 15 feet of you must make a Dexterity saving throw. On a failed save, a creature takes 1d6 lightning damage. On a successful save, a creature takes half as much damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
/* Shockforce Barrier
1st-level abjuration 
Casting Time: 1 action or 1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell 
Range: Self 
Components: V, S 
Duration: 1 round
An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +2 bonus to AC, including against the triggering attack, and you take no damage from magic missile. At any time before the start of your next turn, you may detonate your shock shield (no action required). It immediately detonates if used to block a magic missile. When detonated, all other creatures within 15 feet of you must make a Dexterity saving throw. On a failed save, a creature takes 1d6 lightning damage. On a successful save, a creature takes half as much damage. 

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage is increased by 1d6 for each slot level above 1st.
Classes: Sorcerer, Wizard */
SpellsList["telling touch"] = { // Insightful Maneuver DMS p84
	name : "Telling Touch",
	classes : ["artificer","cleric","paladin","ranger","sorcerer","warlock","wizard"],
	source : [["CAA2"]],
	level : 1,
	school : "Div",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Adv on attack rolls until end of turn, learn target's vulnerabilities",
	descriptionFull : "With a flash of insight, you know how to take advantage of your foe's vulnerabilities. Until the end of your turn, you have advantage on all attack rolls you make against the target. Additionally, if the target has any vulnerabilities, you learn them."
};
/* Telling Touch
1st-level divination
Casting Time: 1 bonus action
Range: Touch
Components: V, S
Duration: Instantaneous
With a flash of insight, you know how to take advantage of your foe's vulnerabilities. Until the end of your turn, you have advantage on all attack rolls you make against the target. Additionally, if the target has any vulnerabilities, you learn them.
Classes: Artificer, Cleric, Paladin, Ranger, Sorcerer, Warlock, Wizard */
SpellsList["turnblade charm"] = { // Transient Bulwark VSS p356
	name : "Turnblade Charm",
	classes : ["artificer","wizard"],
	source : [["CAA2"]],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u2020",
	compMaterial : "A pearl worth at least 10 gp, which the spell consumes",
	duration : "8 h",
	ritual: true,
	description : "Next attack against me has -10 to hit",
	descriptionFull : "The next attack made against you within the duration has a -10 penalty to hit."
};
/* Turnblade Charm (R)
1st-level abjuration (ritual)
Casting Time: 1 action
Range: Self
Components: V, S, M (a pearl worth at least 10 gp, which the spell consumes)
Duration: 8 hours
The next attack made against you within the duration has a -10 penalty to hit.
Classes: Artificer, Wizard */

		// ------------------------------ Level 2 spells ------------------------------ 
SpellsList["brilliant particles"] = { // Star Dust KCC p42
	name : "Brilliant Particles",
	classes : ["artificer","sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	description : "Creas in cone take 3d4 Force damage, next attack before your next turn has advantage",
	descriptionFull : "You evoke a burst of brilliant particles of force energy sweeping out in a 30-ft cone originating from you. Creatures in the radius take 3d4 force damage and the next attack roll made against them before the start of your next turn has advantage."
};
/* Brilliant Particles
2nd-level evocation
Casting Time: 1 action
Range: Self (30-foot cone)
Components: V, S
Duration: Instantaneous
You evoke a burst of brilliant particles of force energy sweeping out in a 30-cone originating from you. Creatures in the cone take 3d4 force damage and the next attack roll made against them before the start of your next turn has advantage.
Classes: Artificer, Sorcerer, Wizard */
SpellsList["festering smite"] = { // Bloodletter GH:PG p119
	name : "Festering Smite",
	classes : ["cleric", "paladin", "ranger"],
	source : [["CAA2"]],
	level : 2,
	school : "Necro",
	time : "1 b",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Festering wound, extra 2d6 + 1d6 per SL Necrotic at start its of turn. Heal 1 HP closes wound.",
	descriptionFull : "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 2d6 necrotic damage. Additionally, if the target is a creature, it must succeed on a Constitution saving throw or receive a festering wound. A creature with a festering wound takes 2d6 necrotic damage at the beginning of its turn for the remainder of the spell’s duration. A creature can only have one festering wound at a time. Receiving at least 1 point of magical healing closes a festering wound, ending the recurring damage. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can increase the damage dealt by a festering wound by 1d6 for each slot level above 2nd."
};
/* Festering Smite
2nd-level necromancy
Casting Time: 1 bonus action
Range: Self
Components: V, S
Duration: Concentration, up to 1 minute
The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 2d6 necrotic damage. Additionally, if the target is a creature, it must succeed on a Constitution saving throw or receive a festering wound. A creature with a festering wound takes 2d6 necrotic damage at the beginning of its turn for the remainder of the spell's duration. A creature can only have one festering wound at a time.
Receiving at least 1 point of magical healing closes a festering wound, ending the recurring damage.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can increase the damage dealt by a festering wound by 1d6 for each slot level above 2nd.
Classes: Cleric, Paladin, Ranger */
SpellsList["jerk reality"] = { // Disorient KCC p20
	name : "Jerk Reality",
	classes : ["bard","wizard"],
	source : [["CAA2"]],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A mobius strip",
	duration : "1 min",
	save : "Wis",
	description : "Crea has disadv on atks, moves 10ft in rnd dir., spd 0 till nxt turn; save at end of turn, fails by 5+: prone",
	descriptionFull : "Targeting a creature you can see, you flip their perception of reality. The target creature must pass a Wisdom saving throw or become disoriented. A disoriented creature has disadvantage on all attack rolls and at the start of their turn moves 10 feet (up to its speed) in a random direction before their speed becomes zero until the start of their next turn.\n   At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends, but if the target fails by 5 or more, it falls prone."
};
/* Jerk Reality
2nd-level illusion
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (a mobius strip)
Duration: 1 minute
Targeting a creature you can see, you flip their perception of reality. The target creature must pass a Wisdom saving throw or become disoriented. A disoriented creature has disadvantage on all attack rolls and at the start of their turn moves 10 feet (up to its speed) in a random direction before their speed becomes zero until the start of their next turn.
At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends, but if the target fails by 5 or more, it fails prone.
Classes: Bard, Wizard */
SpellsList["protected perimeter"] = { // Duelist’s Etiquette WotBS p37
	name : "Protected Perimeter",
	classes : ["cleric", "sorcerer", "wizard"],
	source : [["CAA2"]],
	ritual : true, 
	level : 2,
	school : "Abjur",
	time : "1 min",
	range : "touch",
	components : "V,S,M",
	compMaterial : "a pair of padded sticks",
	duration : "1 h",
	description : "Create 30-ft radius magical dueling circle. See description.",
	descriptionFull : "You touch the ground, and a 30-foot radius of the spell’s area is traced with a faintly glowing line of energy. The spell creates a subtle defensive barrier against magical attacks, causing all damage from spells and summoned creatures that originate in the area of effect to become nonlethal. A creature brought to 0 hit points from nonlethal spell damage is unconscious and stable. Whenever a creature enters the warded area or is present when the spell is cast, it must consciously choose to accept this restriction, or else the spell ends. If at any time a creature inside the area no longer wishes to abide by the wards, they can spend an action to end the spell. This spell is primarily used to ensure that spell duels are not fatal, without forcing mages to hold back their strongest powers."
};
/* Protected Perimeter (R)
2nd-level abjuration (ritual)
Casting Time: 1 minute
Range: Touch
Components: V,S,M (a pair of padded sticks)
Duration: 1 hour
You touch the ground, and a 30-foot radius of the spell’s area is traced with a faintly glowing line of energy. The spell creates a subtle defensive barrier against magical attacks, causing all damage from spells and summoned creatures that originate in the area of effect to become nonlethal. A creature brought to 0 hit points from nonlethal spell damage is unconscious and stable.
Whenever a creature enters the warded area or is present when the spell is cast, it must consciously choose to accept this restriction, or else the spell ends. If at any time a creature inside the area no longer wishes to abide by the wards, they can spend an action to end the spell.
This spell is primarily used to ensure that spell duels are not fatal, without forcing mages to hold back their strongest powers.
Classes: Cleric, Sorcerer, Wizard */
SpellsList["shocking ray"] = { // Crackle KCC p16
	name : "Shocking Ray",
	classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
    save : "Con",
	description : "3+1/SL arcs; ranged spell attack for 1d12 Lightn. dmg; 3+ on crea; save or stunned till their next turn",
	descriptionFull : "You create three arcs of lightning striking targets in range. You can direct them at one target or several.\n   Make a ranged spell attack for each arc. On a hit, the target takes 1d12 lightning damage. If three or more arcs hit a single target, they must make a Constitution saving throw or become shocked, stunning them until the start of their next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you create one additional arc for each slot level above 2nd.",
	dynamicDamageBonus : { multipleDmgMoments : true },
};
/* Shocking Ray
2nd-level evocation
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Instantaneous
You create three arcs of lightning striking targets in range. You can direct them at one target or several.
Make a ranged spell attack for each arc. On a hit, the target takes 1d12 lightning damage. If three or more arcs hit a single target, they must make a Constitution saving throw or become shocked, stunning them until the start of their next turn.
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you create one additional arc for each slot level above 2nd.
Classes: Artificer, Druid, Sorcerer, Warlock, Wizard */
SpellsList["slashing squall"] = { // Hurricane Slash KCC p28
	name : "Slashing Squall",
	classes : ["druid", "ranger", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft line",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "1+1/SL 5ft wide lines; 3d8 Slashing dmg; save halves",
	descriptionFull : "You condense wind into a razor-sharp blast that shreds a 30-foot-long, 5-foot-wide line. Creatures in the area must make a Dexterity saving throw. A creature takes 3d8 slashing damage on a failed save or half as much on a success." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can create an additional line of effect. A creature in the area of more than one slash is affected only once."
};
/* Slashing Squall
2nd-level evocation
Casting Time: 1 action
Range: Self (30-foot line)
Components: V, S
Duration: Instantaneous
You condense wind into a razor-sharp blast that shreds a 30-foot-long, 5-foot-wide line. Creatures in the area must make a Dexterity saving throw. A creature takes 3d8 slashing damage on a failed save or half as much on a success.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can create an additional line of effect. A creature in the area of more than one slash is affected only once.
Classes: Druid, Ranger, Sorcerer, Wizard */
SpellsList["vaporous cube"] = { // Vicious Vapors KCC p52
	name : "Vaporous Cube",
	classes : ["druid", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "5ft cube; crea enters/starts turn: 1d12 Poison dmg, poisoned; save halves, no poisoned; bns: move 20ft",
	descriptionFull : "You fill the air with poisonous vapors in a cube 5 feet on each side. A creature must make a Constitution saving throw when it enters the spell's area for the first time or starts its turn there. On a failed save, they take 1d12 poison damage and become poisoned until the end of their next turn. On a successful save, they take half as much damage and do not become poisoned.\n   You can move the cloud of vapors up to 20 feet as a bonus action during your turn."
};
/* Vaporous Cube
2nd-level transmutation
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Concentration, up to 1 minute
You fill the air with poisonous vapors in a cube 5 feet on each side. A creature must make a Constitution saving throw when it enters the spell’s area for the first time or starts its turn there. On a failed save, they take 1d12 poison damage and become poisoned until the end of their next turn. On a successful save, they take half as much damage and do not become poisoned.
You can move the cloud of vapors up to 20 feet as a bonus action during your turn.
Classes: Druid, Warlock, Wizard */

		// ------------------------------ Level 3 spells ------------------------------ 
SpellsList["ally to animosity"] = { // Shadow Monsters DMS p251
	name : "Ally to Animosity",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 4,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A doll",
	duration : "Conc, 1 min",
	save: "Wis",
	description : "2 + 1/SL creatures make Wis save or attack nearest ally. Repeat save end of its turn",
	descriptionFull : "You choose up to two creatures within range. Each creature must make a Wisdom saving throw. On a failed save, the creature perceives its allies as hostile, shadowy monsters, and it must attack its nearest ally. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
};
/* Ally to Animosity
4th-level illusion
Casting Time: 1 action
Range: 120 feet
Components: V, S, M (a doll)
Duration: Concentration, up to 1 minute
You choose up to two creatures within range. Each creature must make a Wisdom saving throw. On a failed save, the creature perceives its allies as hostile, shadowy monsters, and it must attack its nearest ally. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.
Classes: Sorcerer, Warlock, Wizard */
SpellsList["crystalline jinx"] = { // Doom of Blue Crystal DMS p61
	name : "Crystalline Jinx",
	classes : ["cleric","sorcerer","wizard"],
	source : [["CAA2"]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "S:5-ft rad",
	components : "V,S,M",
	compMaterial : "A blue crystal",
	duration : "Conc, 3 rds",
	save: "Con",
	description : "When cast and start of my turn, all creatures within 5 ft Con save or restrained/paralyzed/petrified",
	descriptionFull : "You are surrounded by a field of glowing, blue energy lasting 3 rounds. Creatures within 5 feet of you, including yourself, must make a Constitution saving throw when the spell is cast and again at the start of each of your turns while the spell is in effect. A creature whose saving throw fails is restrained; a restrained creature whose saving throw fails is paralyzed; and a paralyzed creature whose saving throw fails is petrified and transforms into a statue of blue crystal. As with all concentration spells, you can end the field at any time (no action required). If you are turned to crystal, the spell ends after all affected creatures make their saving throws. Restrained and paralyzed creatures recover immediately when the spell ends, but petrification is permanent.\n Creatures turned to crystal can see, hear, and smell normally, but they don't need to eat or breathe. If shatter is cast on a crystal creature, it must succeed on a Constitution saving throw against the caster's spell save DC or be killed.\n Creatures transformed into blue crystal can be restored with dispel magic, greater restoration, or comparable magic."
};
/* Crystalline Jinx
3rd-level transmutation
Casting Time: 1 action
Range: Self
Components: V, S, M (a blue crystal)
Duration: Concentration, up to 3 rounds
You are surrounded by a field of glowing, blue energy lasting 3 rounds. Creatures within 5 feet of you, including yourself, must make a Constitution saving throw when the spell is cast and again at the start of each of your turns while the spell is in effect. A creature whose saving throw fails is restrained; a restrained creature whose saving throw fails is paralyzed; and a paralyzed creature whose saving throw fails is petrified and transforms into a statue of blue crystal. As with all concentration spells, you can end the field at any time (no action required). If you are turned to crystal, the spell ends after all affected creatures make their saving throws. Restrained and paralyzed creatures recover immediately when the spell ends, but petrification is permanent.
Creatures turned to crystal can see, hear, and smell normally, but they don't need to eat or breathe. If shatter is cast on a crystal creature, it must succeed on a Constitution saving throw against the caster's spell save DC or be killed.
Creatures transformed into blue crystal can be restored with dispel magic, greater restoration, or comparable magic.
Classes: Cleric, Sorcerer, Wizard */
SpellsList["enhance mobility"] = { // Skirmish VSS p354
	name : "Enhance Mobility",
	classes : ["artificer", "cleric", "ranger", "wizard"],
	source : [["CAA2"]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A branch from a tree",
	duration : "Conc, 10 min",
	save : "Wis",
	description : "1 crea speed is doubled, ignores diff. terrain, and doesn't provoke opportunity atks",
	descriptionFull : "You enhance the mobility of one willing creature you touch, enabling them to move easily through enemy formations. For the duration, the target’s speed is doubled, it is unaffected by nonmagical difficult terrain, and it doesn’t provoke opportunity attacks."
};
/* Enhance Mobility
3rd-level transmutation
Casting Time: 1 action
Range: Touch
Components: V, S, M (a branch from a tree)
Duration: Concentration, up to 10 minutes
You enhance the mobility of one willing creature you touch, enabling them to move easily through enemy formations. For the duration, the target's speed is doubled, it is unaffected by nonmagical difficult terrain, and it doesn't provoke opportunity attacks.
Classes: Artificer, Cleric, Ranger, Wizard */
SpellsList["feylight fire"] = { // Mass Faerie Fire ToH p294
	name : "Feylight Fire",
	source : [["CAA2"]],
	classes : ["artificer","bard","druid"],
	level : 3,
	school : "Ench",
	time : "1 bns",
	range : "S:60-ft rad",
	components : "V", 
	duration : "Conc, 1 min",
	save : "Dex",
	description : "up to 3 20-ft cubes all obj/crea save or outlined in 10 ft dim light and attacks have adv.; see invisible crea",
	descriptionFull : "You can place up to three 20-foot cubes each centered on a point you can see within range. Each object in a cube is outlined in blue, green, or violet light (your choice). Any creature in a cube when the spell is cast is also outlined in light if it fails a Dexterity saving throw. A creature in the area of more than one cube is affected only once. Each affected object and creature sheds dim light in a 10-foot radius for the duration." + "\n   " + "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
};
/* Feylight Fire
3rd-level enchantment
Casting Time: 1 action
Range: Self (60-foot radius)
Components: V
Duration: Concentration, up to 1 minute

You can place up to three 20-foot cubes each centered on a point you can see within range. Each object in a cube is outlined in blue, green, or violet light (your choice). Any creature in a cube when the spell is cast is also outlined in light if it fails a Dexterity saving throw. A creature in the area of more than one cube is affected only once. Each affected object and creature sheds dim light in a 10-foot radius for the duration.

Any attack roll against an affected object or creature has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.
Classes: Artificer, Bard, Druid */
SpellsList["goldmist"] = { // Glitterdust VSS p342
	name : "Goldmist",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "S:15-ft cone",
	components : "V,S,M",
	compMaterial : "A handful of powdered mica",
	duration : "Conc, 1 min",
	save : "Con",
	description : "15-ft cone goldmist coats all creatures, no benif invis, con save or blinded, repeat end of turn",
	descriptionFull : "You spray golden particles in a 15-foot cone, covering all creatures and objects in that area. Each creature in the area must succeed a Constitution saving throw or be blinded for the duration. A creature blinded by this spell can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Each creature within the area, whether or not it succeeds on its saving throw, can’t benefit from being invisible for the duration."
};
/* Goldmist
3rd-level conjuration
Casting Time: 1 action
Range: Self (15-foot cone)
Components: V, S, M (a handful of powdered mica)
Duration: Concentration, up to 1 minute
You spray golden particles in a 15-foot cone, covering all creatures and objects in that area. Each creature in the area must succeed a Constitution saving throw or be blinded for the duration. A creature blinded by this spell can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Each creature within the area, whether or not it succeeds on its saving throw, can't benefit from being invisible for the duration.
Classes: Bard, Sorcerer, Wizard */
SpellsList["reconfigure curse"] = { // Sir Mittinz's Move Curse DM p106
	name : "Reconfigure Curse",
	classes : ["bard", "cleric", "paladin", "warlock", "wizard"],
	source : [["CAA2"]],
	ritual : true, 
	level : 3,
	school : "Trans",
	time : "1 hr",
	range : "20 ft",
	components : "V,S,M\u2020",
	compMaterial : "A finely crafted hollow glass sphere and incense worth 50 gp, which the spell consumes",
	duration : "Instantaneous",
	description : "Transfer a curse from creature to creature or object to object",
	descriptionFull : "When you are within range of a cursed creature or object, you can transfer the curse to a different creature or object that's also within range. The curse must be transferred from object to object or from creature to creature."
};
/* Reconfigure Curse (R)
3rd-level transmutation (ritual)
Casting Time: 1 hour
Range: 20 feet
Components: V, S, M (a finely crafted hollow glass sphere and incense worth 50 gp, which the spell consumes)
Duration: Instantaneous

When you are within range of a cursed creature or object, you can transfer the curse to a different creature or object that's also within range. The curse must be transferred from object to object or from creature to creature.

Classes: Bard, Cleric, Paladin, Warlock, Wizard */
SpellsList["stick to snake"] = { // Snakestaff VSS p354
	name : "Stick to Snake",
	classes : ["cleric", "druid", "ranger", "wizard"],
	source : [["CAA2"]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A quarterstaff",
	duration : "Conc, 1 h",
	description : "Turn staff into a Giant Constrictor Snake under my control; staff breaks if snake dies",
	descriptionFull : "You cast a unenchanted wooden item that is significantly longer than it is wide, e.g., sticks, torches, staves, planks, spears, etc. to the ground, which writhes and grows into a giant constrictor snake under your control, which acts on its own initiative count.\n The snake is friendly to you and your companions. The snake will obey any verbal commands that you issue to it (no action required by you). If you don’t issue any commands, it defends itself from hostile creatures, but otherwise takes no actions.\n If the snake is reduced to 0 hit points, it dies and reverts to a broken version of the original item."
};
/* Stick to Snake
3rd-level transmutation
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (a quarterstaff)
Duration: Concentration, up to 1 hour
You cast a unenchanted wooden item that is significantly longer than it is wide, e.g., sticks, torches, staves, planks, spears, etc. to the ground, which writhes and grows into a giant constrictor snake under your control, which acts on its own initiative count.
The snake is friendly to you and your companions. The snake will obey any verbal commands that you issue to it (no action required by you). If you don’t issue any commands, it defends itself from hostile creatures, but otherwise takes no actions.
If the snake is reduced to 0 hit points, it dies and reverts to a broken version of the original item.
Classes: Cleric, Druid, Ranger, Wizard */

		// ------------------------------ Level 4 spells ------------------------------ 
SpellsList["charged field"] = { // Storm Shield WotBS p38
	name : "Charged Field",
	classes : ["artificer", "druid", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A bit of fur and a rod of amber, crystal, or glass",
	duration : "10 min (D)",
	description : "Electrical shield gives lightning dmg resist and deals 2d8 lightning dmg type to melee attackers",
	descriptionFull : "Thin crackles of lightning wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it." + "\n   " + "The lightning grants you resistance to lightning damage." + "\n   " + "In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with lightning. The attacker takes 2d8 lightning damage from the shield."
};
/* Charged Field
4th-level evocation
Casting Time: 1 action
Range: Self
Components: V,S,M (a bit of fur and a rod of amber, crystal, or glass)
Duration: 10 minutes
Thin crackles of lightning wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it.
The lightning grants you resistance to lightning damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with lightning. The attacker takes 2d8 lightning damage.
Classes: Artificer, Druid, Sorcerer, Wizard */
SpellsList["dimensional slash"] = { // Dimension Cutter KCC p19
	name : "Dimensional Slash",
	classes : ["ranger"],
	source : [["CAA2"]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,M\u2020",
	compMaterial : "A melee weapon you are proficient with worth at least 1 cp",
	duration : "Instantaneous",
	description : "Each crea takes 6d6 Force damage",
	descriptionFull : "You flourish a weapon weapon you are proficient with used in the casting and sweep through the air, slashing apart the dimensional space. Each creature in a 15-foot cone takes 6d6 force damage."
};
/* Dimensional Slash
4th-level conjuration
Casting Time: 1 action
Range: Self (15-foot cone)
Components: V, M (a melee weapon you are proficient with worth at least 1 cp)
Duration: Instantaneous
You flourish a weapon you are proficient with used in the casting and sweep through the air, slashing apart the dimensional space. Each creature in a 15-foot cone takes 6d6 force damage.
Classes: Ranger */
SpellsList["dispel invisibility"] = { // Invisibility Purge VSS p346
	name : "Dispel Invisibility",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "S:120-ft rad",
	components : "V,S,M\u0192",
	compMaterial : "Powdered silver worth at least 100 gp",
	duration : "Instantaneous",
	description : "Invis. effects in range dispelled if possible, or suppressed for 1 min. if not, except innate invis.",
	descriptionFull : "You purge magical invisibility effects within 120 feet of you. Any creature, object, location, or effect within 120 feet of you that is hidden by magical invisibility is revealed and the invisibility is dispelled." + "\n   " + "This spell applies to innate abilities that are magical in nature, such as an imp’s Invisibility, but it doesn’t affect creatures on other planes of existence, such as the Ethereal Plane. It also doesn’t reveal creatures that are naturally invisible. Items that grant magical invisibility (such as a ring of invisibility) have their effects suppressed for 1 minute."
};
/* Dispel Invisibility
4th-level abjuration
Casting Time: 1 action
Range: Self (120-foot radius)
Components: V, S, M (powdered silver worth at least 100 gp)
Duration: Instantaneous
You purge magical invisibility effects within 120 feet of you. Any creature, object, location or effect within 120 feet of you that is hidden by magical invisibility is revealed and the effect dispelled.
This spell applies to innate abilities that are magical in nature, such as an imp's Invisibility, but it does not affect creatures on other planes of existence, such as the Ethereal Plane. It also does not reveal creatures that are naturally invisible. Items that grant magical invisibility (such as a ring of invisibility) have their effects suppressed for 1 minute.
Classes: Bard, Sorcerer, Wizard */
SpellsList["noxious puffsprout"] = { // Toxic Bloom by Knights of the Shadow Realm
	name : "Noxious Puffsprout",
	classes : ["druid", "ranger"],
	source : [["CAA2"]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A drop of poison, flower petals, pinch of dust",
	duration : "1 min",
	save : "Con",
	description : "Summon AC 8, 50 hp, vuln fire plant. Puffs 15-ft rad, enter/start 4d8 poison dmg and poisoned; Bonus act to repuff",
	descriptionFull : "As an action, you call forth a 5 foot wide plant that erupts from the ground at a point you can see. Once sprouted, it immediately blossoms, releasing toxic fumes in a 15 foot radius. When a creature enters the affected area for the first time on a turn or starts its turn there, it must succeed on a Constitution saving throw or take 18 (4d8) poison damage and become poisoned until the end of its next turn."+
	"\n   The plant has an AC of 8, 50 hit points, and vulnerability to fire damage. The poison dissipates naturally after 1 minute, or until a strong wind blows it away. As long as the plant remains, if the caster is within 60 feet they can spend their bonus action to cause it to release additional fumes, restarting the effect."
};
/* Noxious Puffsprout
4th-level conjuration
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (drop of poison, flower petals, pinch of dust)
Duration: 1 minute
As an action, you call forth a 5 foot wide plant that erupts from the ground at a point you can see. Once sprouted, it immediately blossoms, releasing toxic fumes in a 15-foot radius. When a creature enters the affected area for the first time on a turn or starts its turn there, it must succeed on a Constitution saving throw or take 18 (4d8) poison damage and become poisoned until the end of its next turn.
The plant has an AC of 8, 50 hit points, and vulnerability to fire damage. The poison dissipates naturally after 1 minute, or until a strong wind blows it away. As long as the plant remains, if the caster is within 60 feet they can spend their bonus action to cause it to release additional fumes, restarting the effect.
Classes: Druid, Ranger */
SpellsList["reward for risk"] = { // Blackened Soul - Encyclopaedia Formulae Arcana B p30
	name : "Reward for Risk",
	classes : ["artificer", "bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	ritual : true, 
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "1 crea gains dmg resistance and adv on attack rolls. Each dmg to creat, I gain a level of exhaustion",
	descriptionFull : "Choose a willing creature within range. While the target is within 60 feet of you, it has resistance to all damage and advantage on attack rolls. Each time it takes damage, you gain a level of exhaustion."
};
/* Reward for Risk (R)
4th-level enchantment (ritual)
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Concentration, up to 1 minute

Choose a willing creature within range. While the target is within 60 feet of you, it has resistance to all damage and advantage on attack rolls. Each time it takes damage, you gain a level of exhaustion.

Classes: Artificer, Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, Wizard */
SpellsList["sinkhole"] = { // Hunger Of The Earth VSS p344
	name : "Sinkhole",
	classes : ["cleric", "druid", "sorcerer"],
	source : [["CAA2"]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	save : "Str",
	description : "1 Large or smaller crea save or be pulled into the ground; see book",
	descriptionFull : "Choose a Large or smaller creature on the ground within range. The earth opens up beneath that creature and attempts to swallow them up. The target must make a Strength saving throw or be restrained for the duration. Furthermore, if the target fails the save, it begins sinking into the ground." + "\n   " + "A restrained target, or another creature within 5 feet of it, can attempt to free the target by using an action to make a Strength check against your spell save DC, freeing the target. The target has disadvantage on this Strength check. The spell ends early if the target is freed." + "\n   " + "At the end of the target’s turn, it sinks deeper into the ground. A Small or smaller creature fully sinks into the ground after 2 rounds of sinking, a Medium creature fully sinks after 3 rounds, and a Large creature fully sinks after 4 rounds. If a target fully sinks underground, it begins to suffocate."
};
/* Sinkhole
4th-level transmutation
Casting Time: 1 action
Range: 30 feet
Components: V, S
Duration: Concentration, up to 1 hour
Choose a Large or smaller creature on the ground within range. The earth opens up beneath that creature and attempts to swallow them up. The target must make a Strength saving throw or be restrained for the duration. Furthermore, if the target fails the save, it begins sinking into the ground. A restrained target or another creature within 5 feet of it can attempt to free the target by using an action to make a Strength check against your spell save DC, freeing the target. The target has disadvantage on this Strength check. The spell ends early if the target is freed. At the end of the target's turn, it sinks deeper into the ground. A Small or smaller creature fully sinks into the ground after 2 rounds of sinking, a Medium creature fully sinks after 3 rounds, and a Large creature fully sinks after 4 rounds. If a target fully sinks underground, it begins to suffocate.
Classes: Cleric, Druid, Sorcerer */

		// ------------------------------ Level 5 spells ------------------------------ 
SpellsList["acidic drench"] = { // Acid Rain DMS p164
	name : "Acidic Drench",
	classes : ["sorcerer","warlock","wizard"],
	source : [["CAA2"]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M", 
	compMaterial : "A drop of acid",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "20-ft rad 30-ft high storm;heavily obscured;6d6+1d6/SL acid dmg; save half; half dmg 1st round after",
	descriptionFull : "You unleash a storm of swirling acid in a cylinder 20 feet wide and 30 feet high centered on a point you can see. The area is heavily obscured by the driving acidfall. A creature that starts its turn in the area or that enters the area for the first time on its turn takes 6d6 acid damage, or half damage with a successful Dexterity saving throw. A creature takes half damage from the acid (as if it had made a successful saving throw) automatically at the start of its first turn after leaving the affected area." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for every slot level above 5th."
};
/* Acidic Drench
5th-level conjuration
Casting Time: 1 action
Range: 150 feet
Components: V, S, M (a drop of acid)
Duration: Concentration, up to 1 minute

You unleash a storm of swirling acid in a cylinder 20 feet wide and 30 feet high, centered on a point you can see. The area is heavily obscured by the driving acidfall. A creature that starts its turn in the area or that enters the area for the first time on its turn takes 6d6 acid damage, or half as much damage if it makes a successful Dexterity saving throw. A creature takes half as much damage from the acid (as if it had made a successful saving throw) at the start of its first turn after leaving the affected area.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.

Classes: Sorcerer, Warlock, Wizard */
SpellsList["discern details"] = { // Eidetic Memory DM p66
	name : "Discern Details",
	classes : ["artificer", "bard", "cleric", "druid", "wizard"],
	source : [["CAA2"]],
	ritual : true, 
	level : 5,
	school : "Div",
	time : "1 a",
	range : "Self",
	components : "V,S,M", 
	compMaterial : "A string tied in a knot",
	duration : "Conc, 1 h",
	description : "I can recall any piece of information I've ever read or heard in the past (+10 Int checks)",
	descriptionFull : "When you cast this spell, you can recall any piece of information you've ever read or heard in the past. This ability translates into a +10 bonus on Intelligence checks for the duration of the spell."
};
/* Discern Details (R)
5th-level divination (ritual)
Casting Time: 1 action
Range: Self
Components: V, S, M (a string tied in a knot)
Duration: Concentration, up to 1 hour

When you cast this spell, you can recall any piece of information you've ever read or heard in the past. This ability translates into a +10 bonus on Intelligence checks for the duration of the spell.

Classes: Artificer, Bard, Cleric, Druid, Wizard */
SpellsList["fell vortex"] = { // Shadow Gateway DM p250
	name : "Fell Vortex",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	ritual : true, 
	level : 5, 
	school : "Conj",
	time : "1 min",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "a piece of black chalk",
	duration : "Conc, 1 min",
	description : "Open a stable two-way portal to the Shadowfell; lasts for 1 minute",
	descriptionFull : "By drawing a circle of black chalk up to 15 feet in diameter and chanting for one minute during the casting time, you open a portal directly into the Shadowfell, also known as the Plane of Shadow. The portal fills the chalk circle and appears as a vortex of inky blackness; nothing can be seen through it. Any object or creature that passes through the portal instantly arrives safely at the destination. The portal remains open for 1 minute or until you stop concentrating on the spell, and it can be used to travel between the Shadowfell and the chalk circle, in both directions, as many times as desired during the spell's duration.", 
};
/* Fell Vortex (R)
5th-level conjuration (ritual)
Casting Time: 10 minutes
Range: 30 feet
Components: V, S, M (a piece of black chalk)
Duration: Concentration, up to 1 minute

By drawing a circle of black chalk up to 15 feet in diameter and chanting for one minute during the casting time, you open a portal directly into the Shadowfell, also known as the Plane of Shadow. The portal fills the chalk circle and appears as a vortex of inky blackness; nothing can be seen through it. Any object or creature that passes through the portal instantly arrives safely at the destination. The portal remains open for 1 minute or until you stop concentrating on the spell, and it can be used to travel between the Shadowfell and the chalk circle, in both directions, as many times as desired during the spell's duration.

Classes: Sorcerer, Warlock, Wizard */
SpellsList["pull of darkness"] = { // Devouring Darkness ToH p279
	name : "Pull of Darkness",
	classes : ["warlock", "wizard"],
	source : [["CAA2"]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "S:20" + (typePF ? "-" : "") + "ft rad",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Chosen creas 6d8+1d8/SL Necrotic dmg, moved in 5 ft; save halves, no move; regain HP=dmg dealt/4",
	descriptionFull : "Dark tendrils burst out from you in all directions. Creatures of your choice within must make a Constitution saving throw. On failure, they take 6d8 necrotic damage, and you can move them in a straight line to within 5 feet of you if there is an empty space they can be pulled to. On success, they take half as much damage and are not moved.\n   You regain hit points equal to one quarter (rounded down) of the necrotic damage taken by all targets effected by the spell." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
/* Pull of Darkness
5th-level necromancy
Casting Time: 1 action
Range: Self (20-foot radius)
Components: V, S
Duration: Instantaneous
Dark tendrils burst out from you in all directions. Creatures of your choice within must make a Constitution saving throw. On failure, they take 6d8 necrotic damage, and you can move them in a straight line to within 5 feet of you if there is an empty space they can be pulled to. On success, they take half as much damage and are not moved.
You regain hit points equal to one quarter (rounded down) of the necrotic damage taken by all targets effected by the spell.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th. 
Classes: Warlock, Wizard */
SpellsList["retain consciousness"] = { // Convey Inner Peace ToH p278
	name : "Retain Consciousness",
	classes : ["artificer", "bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 5,
	school : "Trans",
	time : "10 min",
	range : "30 ft",
	components : "V,S,M\u2020",
	compMaterial : "Powdered gemstones worth at least 50 gp, which the spell consumes",
	duration : "24 h",
	description : "Once during duration, 5 creatures and I can elf-trance for 4 hours to complete a long rest",
	descriptionFull : "You imbue yourself and up to five willing creatures within range with the ability to enter a meditative trance like an elf. Once before the spell ends, an affected creature can complete a long rest in 4 hours, meditating as an elf does while in trance. After resting in this way, each creature gains the same benefit it would normally gain from 8 hours of rest."
};
/* Retain Consciousness
5th-level transmutation
Casting Time: 10 minutes
Range: 30 feet
Components: V, S, M (powdered gemstones worth at least 50 gp, which the spell consumes)
Duration: 24 hours

You imbue yourself and up to five willing creatures within range with the ability to enter a meditative trance like an elf. Once before the spell ends, an affected creature can complete a long rest in 4 hours, meditating as an elf does while in trance. After resting in this way, each creature gains the same benefit it would normally gain from 8 hours of rest.

Classes: Artificer, Bard, Cleric, Druid, Sorcerer, Warlock, Wizard */
SpellsList["transpose target"] = { // Swift Exchange DMS p112
	name : "Transpose Target",
	classes : ["paladin", "ranger", "sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 5,
	school : "Conj",
	time : "1 rea",
	range : "30 ft",
	components : "V", 
	duration : "Instantaneous",
	save : "Wis",
	description : "When creature within 30 ft targeted by weap/spell attack, magically switch places (Wis save if unwilling)",
	descriptionFull : "When you or another creature you can see within range is the target of a weapon attack or a spell attack, you can magically switch your position with that of the other creature in an instant. If the creature is unwilling, it can make a Wisdom saving throw to avoid the effect. Otherwise, you and the creature change positions, each appearing in an eyeblink at the location the other previously occupied. Any attack that was about to occur against you or the other creature is resolved against whichever one of you now occupies the targeted space."
};
/* Transpose Target
5th-level conjuration
Casting Time: 1 reaction, which you take when you or another creature within range is attacked
Range: 30 feet
Components: V
Duration: Instantaneous

When you or another creature you can see within range is the target of a weapon attack or a spell attack, you can magically switch your position with that of the other creature in an instant. If the creature is unwilling, it can make a Wisdom saving throw to avoid the effect. Otherwise, you and the creature change positions, each appearing in an eyeblink at the location the other previously occupied. Any attack that was about to occur against you or the other creature is resolved against whichever one of you now occupies the targeted space.

Classes: Paladin, Ranger, Sorcerer, Warlock, Wizard */

		// ------------------------------ Level 6 spells ------------------------------ 
SpellsList["compel corpse"] = { // Extract Knowledge DMS p68
	name : "Compel Corpse",
	classes : ["bard", "cleric", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A blank page",
	duration : "Instantaneous",
	ritual: true,
	description : "Compel one corpse to give a one sentence telepathic answer specific to your question",
	descriptionFull : "By touching a recently deceased corpse, you gain one specific bit of knowledge from it that was known to the creature in life. You must form a question in your mind as part of casting the spell; if the corpse has an answer to your question, it reveals the information to you telepathically. The answer is always brief—no more than a sentence—and very specific to the framed question. It doesn't matter whether the creature was your friend or enemy; the spell compels it to answer in any case."
};
/* Compel Corpse (R)
6th-level necromancy (ritual)
Casting Time: 1 action
Range: Touch
Components: V, S, M (a blank page)
Duration: Instantaneous
By touching a recently deceased corpse, you gain one specific bit of knowledge from it that was known to the creature in life. You must form a question in your mind as part of casting the spell; if the corpse has an answer to your question, it reveals the information to you telepathically. The answer is always brief—no more than a sentence—and very specific to the framed question. It doesn't matter whether the creature was your friend or enemy; the spell compels it to answer in any case.
Classes: Bard, Cleric, Warlock, Wizard */
SpellsList["force fist"] = { // Arcane Capacitor VSS p330
	name : "Force Fist",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A potato",
	duration : "Instantaneous",
	description : "Melee spell atk for 5d10 Force dmg; hit or miss, regain 1st-lvl spell slot; 7th:2nd, 9th:3rd",
	descriptionFull : "You channel a wave of arcane power into your fingertips, recycling the leftover energy into a new spell slot. Make a melee spell attack against a creature you can reach. On a hit, the target takes 5d10 force damage. Whether you hit or miss, you then regain one expended 1st-level spell slot." + AtHigherLevels + "When you cast this spell using a 7th-level spell slot, you instead regain an expended 2nd-level spell slot. If you cast it using a 9th-level spell slot, you instead regain an expended 3rd-level spell slot."
};
/* Force Fist
6th-level evocation
Casting Time: 1 action
Range: Touch
Components: V, S, M (a potato)
Duration: Instantaneous
You channel a wave of arcane power into your fingertips, recycling the leftover energy into a new spell slot. Make a melee spell attack against a creature you can reach. On a hit, the target takes 5d10 force damage. Whether you hit or miss, you then regain one expended 1st-level spell slot.

At Higher Levels. When you cast this spell using a 7th level spell slot, you instead regain an expended 2nd level spell slot. If you cast it using a 9th level spell slot, you instead regain an expended 3rd level spell slot.

Classes: Sorcerer, Warlock, Wizard */
SpellsList["mushroom meditation"] = { // Toadstool Ring ToH p307
	name : "Mushroom Meditation",
	classes : ["druid"],
	source : [["CAA2"]],
	level : 6,
	school : "Div",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A bit of dried mushroom",
	duration : "1 h",
	ritual: true,
	description : "1 creat meditates inside toadstool ring to get one vision each for past/present/future",
	descriptionFull : "You coax a toadstool ring to sprout from the ground. A creature of your choice can sit in the center of the ring and meditate for the duration, catching glimpses of the past, present, and future. The creature can ask up to three questions: one about the past, one about the present, and one about the future. The GM offers truthful answers in the form of dreamlike visions that may be subject to interpretation. The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. When the spell ends, the toadstools turn black and dissolve back into the earth.\n\nIf you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that the meditating creature gets a random vision unrelated to the question. The GM makes this roll in secret."
};
/* Mushroom Meditation (R)
6th-level divination (ritual)
Casting Time: 1 action
Range: 30 feet
Components: V, S, M (a bit of dried mushroom)
Duration: 1 hour

You coax a toadstool ring to sprout from the ground. A creature of your choice can sit in the center of the ring and meditate for the duration, catching glimpses of the past, present, and future. The creature can ask up to three questions: one about the past, one about the present, and one about the future. The GM offers truthful answers in the form of dreamlike visions that may be subject to interpretation. The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. When the spell ends, the toadstools turn black and dissolve back into the earth.

If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that the meditating creature gets a random vision unrelated to the question. The GM makes this roll in secret.

Classes: Druid */
SpellsList["sudden shielding"] = { // Ally Aegis DMS p34
	name : "Sudden Shielding",
	classes : ["bard", "cleric", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 6,
	school : "Abjur",
	time : "1 rea",
	range : "60 ft",
	components : "V,S",
	duration : "1 rd",
	description : "1+1/SL creatures +5 AC, immune to force damage, evasive to all but psychic until start of my next turn",
	descriptionFull : "When your ally is hit by an attack or is targeted by a spell that deals damage other than psychic damage, you can use your reaction to protect that creature with a shield of magical force. Until the start of your next turn, the target creature has a +5 bonus to AC, including against the triggering attack, and is immune to force damage. In addition, if the target creature must make a saving throw against an enemy's spell that deals damage, they take half as much damage on a failed saving throw and no damage on a successful save. Sudden Shielding offers no protection, however, against psychic damage from any source." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you can target one additional ally for each slot level above 6th."
};
/* Sudden Shielding
6th-level abjuration
Casting Time: 1 reaction, which you take when your ally is hit by an attack or is targeted by a spell that deals damage other than psychic damage
Range: 60 feet
Components: V, S
Duration: 1 round
When your ally is hit by an attack or is targeted by a spell that deals damage other than psychic damage, you can use your reaction to protect that creature with a shield of magical force. Until the start of your next turn, the target creature has a +5 bonus to AC, including against the triggering attack, and is immune to force damage. In addition, if the target creature must make a saving throw against an enemy's spell that deals damage, they take half as much damage on a failed saving throw and no damage on a successful save. Sudden Shielding offers no protection, however, against psychic damage from any source.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, you can target one additional ally for each slot level above 6th.

Classes: Bard, Cleric, Sorcerer, Wizard */
SpellsList["unfortunate events"] = { // Misfortune DMS p185
	name : "Unfortunate Events",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A broken mirror",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "15-ft rad Wis save or disadv on checks/saves/attacks for duration or Remove Curse [SPECIAL: see book]",
	descriptionFull : "You cast a pall of bad luck over all creatures in a 15-foot radius centered on a point within range. Each creature in that area must succeed on a Wisdom saving throw or be cursed with bad luck for the duration of the spell. A creature under the effect of this spell has disadvantage on all ability checks, saving throws, and attack rolls. A Remove Curse spell ends this effect.\nSPECIAL: If a targeted creature is carrying a stone of good luck, the creature is unaffected by the spell, but the item ceases to function for 24 hours. Likewise, if a targeted creature is carrying a luck blade, the creature is unaffected by the spell, but the sword's Luck ability and saving throw bonuses cease to function for 24 hours."
};
/* Unfortunate Events
6th-level necromancy
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (a broken mirror)
Duration: Concentration, up to 1 minute

You cast a pall of bad luck over all creatures in a 15-foot radius centered on a point within range. Each creature in that area must succeed on a Wisdom saving throw or be cursed with bad luck for the duration of the spell. A creature under the effect of this spell has disadvantage on all ability checks, saving throws, and attack rolls. A Remove Curse spell ends this effect.

SPECIAL: If a targeted creature is carrying a stone of good luck, the creature is unaffected by the spell, but the item ceases to function for 24 hours. Likewise, if a targeted creature is carrying a luck blade, the creature is unaffected by the spell, but the sword's Luck ability and saving throw bonuses cease to function for 24 hours.

Classes: Bard, Sorcerer, Warlock, Wizard */
SpellsList["umbral imbuement"] = { // Become Nightwing DMS p246
	name : "Umbral Imbuement",
	classes : ["sorcerer","warlock","wizard"],
	source : [["CAA2"]],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "V,S,M", 
	compMaterial : "a crow's eye",
	save : "Dex",
	duration : "Conc, 1 min",
	description : "60-ft fly speed; gain a breath attack; 30-ft cone 5d6 Necrotic dmg; Dex save for half (Recharge 4–6)",
	descriptionFull : "This spell imbues you with umbral wings. For the duration of the spell, you gain a flying speed of 60 feet and a new attack action:\nUmbral Breath (Recharge 4–6). You exhale shadow substance in a 30-foot cone. Each creature in the area takes 5d6 necrotic damage, or half the damage with a successful Dexterity saving throw.",
};
/* Umbral Imbuement
6th-level enchantment
Casting Time: 1 action
Range: Self
Components: V, S, M (a crow's eye)
Duration: Concentration, up to 1 minute
This spell imbues you with umbral wings. For the duration of the spell, you gain a flying speed of 60 feet and a new attack action:
Umbral Breath (Recharge 4–6). You exhale shadow substance in a 30-foot cone. Each creature in the area takes 5d6 necrotic damage, or half the damage with a successful Dexterity saving throw.
Classes: Sorcerer, Warlock, Wizard */

		// ------------------------------ Level 7 spells ------------------------------ 
SpellsList["determined boulder"] = { // Inevitable Boulder VSS p345
	name : "Determined Boulder",
	classes : ["druid", "wizard"],
	source : [["CAA2"]],
	level : 7,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "An almost spherical stone",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Create a boulder that moves 60 ft toward target every turn; see book",
	descriptionFull : "At a point you choose within range, you conjure into existence a Large 8-foot diameter boulder, which rolls in pursuit of one creature that you can see of your choice. The boulder has 18 AC, 75 HP, immunity to poison and psychic damage, and resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks. If the boulder is reduced to 0 hit points, it vanishes and the spell ends." + "\n   " + "At the beginning of each of your turns, the boulder moves 60 feet in the direction of its target. If the boulder enters a creature’s space, the creature must make a Dexterity saving throw. On a failed save, it takes 6d10 bludgeoning damage and, if it is Large size or smaller, is knocked prone. On a success, the creature takes half as much damage and is not knocked prone. The boulder also crushes nonmagical objects smaller than itself in its path. If the boulder reaches its target, it rolls over it and continues on, completing its 60-foot movement. The boulder continues to pursue its target for the duration, rolling over it more than once if possible." + "\n   " + "After the spell ends, the boulder continues to pursue its target for up to 24 hours. Once the boulder strikes its target after the spell ends, it immediately vanishes."
};
/* Determined Boulder
7th-level conjuration
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (an almost spherical stone)
Duration: Concentration, up to 1 minute

At a point you choose within range, you conjure into existence a Large 8-foot diameter boulder which rolls in pursuit of one creature that you can see of your choice. The boulder has 18 AC, 75 HP, immunity to poison and psychic damage, and resistance to nonmagical bludgeoning, piercing, and slashing damage. If the boulder is reduced to 0 hit points, it vanishes and the spell ends.

At the beginning of each of your turns, the boulder moves 60 feet in the direction of its target. If the boulder enters a creature's space, the creature must make a Dexterity saving throw. On a failed save, it takes 6d10 bludgeoning damage and, if it is Large size or smaller, is knocked prone. On a success, the creature takes half as much damage and is not knocked prone. The boulder also crushes nonmagical objects smaller than itself in its path. If the boulder reaches its target, it rolls over it and continues on, completing its 60-foot movement. The boulder continues to pursue its target for the duration, rolling over it more than once, if possible.

After the spell ends, the boulder continues to pursue its target for up to 24 hours. Once the boulder strikes its target after the spell ends, it immediately vanishes.

Classes: Druid, Wizard */
SpellsList["flesh to wood"] = { // Arboreal Curse GH:PG p118
	name : "Flesh to Wood",
	classes : ["druid"],
	source : [["CAA2"]],
	level : 7,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A cup of sap",
	duration : "Until dispelled",
	save : "Con",
	description : "Crea turns to tree, 3 fail stays till dispelled, 3 success turn back",
	descriptionCantripDie : "",
	descriptionFull : "You attempt to turn one creature that you can see within range into wood. If the target’s body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden into bark. On a successful save, the creature isn’t affected. A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its Constitution saving throw three times, it is turned into a tree and subjected to the petrified condition for the duration. The successes and failures don’t need to be consecutive; keep track of both until the target collects three of a kind. If the transformed creature is burned, chopped down, or otherwise destroyed while petrified, the creature is slain. A creature remains transformed unless the effect is reversed within one year with remove curse, wish, or similar magical effects. If the creature spends one year and a day as a tree, the transformation becomes permanent, and nothing can return the creature to its original form."
};
/* Flesh to Wood
7th-level transmutation
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (a cup of sap)
Duration: Until dispelled

You attempt to turn one creature that you can see within range into wood. If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden into bark. On a successful save, the creature isn't affected.

A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its Constitution saving throw three times, it is turned into a tree and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.

If the transformed creature is burned, chopped down, or otherwise destroyed while petrified, the creature is slain.

A creature remains transformed unless the effect is reversed within one year with remove curse, wish, or similar magical effects. If the creature spends one year and a day as a tree, the transformation becomes permanent, and nothing can return the creature to its original form.
Classes: Druid */
SpellsList["heal to harm"] = { // Defile Healing DM p59
	name : "Heal to Harm",
	classes : ["cleric", "warlock"],
	source : [["CAA2"]],
	level : 7,
	school : "Necro",
	time : "1 rea",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "up to 5th lvl (SL8 6th, SL9 7th) healing spell does necrotic damage instead, Con save for half",
	descriptionFull : "You attempt to reverse the energy of a healing spell so that it deals damage instead of healing. If the healing spell is being cast with a spell slot of 5th level or lower, the slot is expended but the spell restores no hit points. In addition, each creature that was targeted by the healing spell takes necrotic damage equal to the healing it would have received, or half as much damage with a successful Constitution saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 8th level, it can reverse a healing spell being cast using a spell slot of 6th level or lower. If you use a 9th-level spell slot, it can reverse a healing spell being cast using a spell slot of 7th level or lower."
};
/* Heal to Harm
7th-level necromancy
Casting Time: 1 reaction, which you take when you see a creature cast a healing spell
Range: 60 feet
Components: V, S
Duration: Instantaneous

You attempt to reverse the energy of a healing spell so that it deals damage instead of healing. If the healing spell is being cast with a spell slot of 5th level or lower, the slot is expended but the spell restores no hit points. In addition, each creature that was targeted by the healing spell takes necrotic damage equal to the healing it would have received, or half as much damage with a successful Constitution saving throw.

At Higher Levels. When you cast this spell using a spell slot of 8th level, it can reverse a healing spell being cast using a spell slot of 6th level or lower. If you use a 9th-level spell slot, it can reverse a healing spell being cast using a spell slot of 7th level or lower.

Classes: Cleric, Warlock */
SpellsList["iron ring"] = { // Ring Ward DMS p233
	name : "Iron Ring",
	classes : ["cleric", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 7,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u2020",
	compMaterial : "An iron ring worth 200 gp, which the spell consumes",
	duration : "Conc, 1 h",
	description : "Myself and allies within range gain adv on saves vs spells, resistance to one damage type of my choice",
	descriptionFull : "The iron ring you use to cast the spell becomes a faintly shimmering circlet of energy that spins slowly around you at a radius of 15 feet. For the duration, you and your allies inside the protected area have advantage on saving throws against spells, and all affected creatures gain resistance to one type of damage of your choice."
};
/* Iron Ring
7th-level abjuration
Casting Time: 1 action
Range: Self
Components: V, S, M (an iron ring worth 200 gp, which the spell consumes)
Duration: Concentration, up to 1 hour

The iron ring you use to cast the spell becomes a faintly shimmering circlet of energy that spins slowly around you at a radius of 15 feet. For the duration, you and your allies inside the protected area have advantage on saving throws against spells, and all affected creatures gain resistance to one type of damage of your choice.

Classes: Cleric, Sorcerer, Wizard */
SpellsList["mass enhance mobility"] = { // Mass Skirmish VSS p349
	name : "Mass Enhance Mobility",
	classes : ["cleric", "wizard"],
	source : [["CAA2"]],
	level : 7,
	school : "Trans",
	time : "1 a",
	range : "S:30-ft rad",
	components : "V,S,M",
	compMaterial : "A branch from a tree",
	duration : "Conc, 10 min",
	description : "Any number of crea get +15 ft spd, ignore diff. terrain, don't provoke opportunity atks",
	descriptionFull : "This spell allows you to enhance the mobility of any number of willing creatures that you can see within range. You bolster each target, enabling them to move easily through enemy formations. For the duration, each target’s speed is increased by 15 feet, is unaffected by nonmagical difficult terrain, and doesn’t provoke opportunity attacks."
};
/* Mass Enhance Mobility
7th-level transmutation
Casting Time: 1 action
Range: Self (30-foot radius)
Components: V, S, M (a branch from a tree)
Duration: Concentration, up to 10 minutes

This spell allows you to enhance the mobility of any number of willing creatures that you can see within range. You bolster each target, enabling them to move easily through enemy formations. For the duration, each target's movement speed is increased by 15 feet, is unaffected by nonmagical difficult terrain, and doesn't provoke opportunity attacks.
Classes: Cleric, Wizard */
SpellsList["reflective realm"] = { // Mirror Realm ToH p295
	name : "Reflective Realm",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 7,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "S,M",
	compMaterial : "A framed mirror at least 5 feet tall",
	duration : "24 h",
	ritual: true,
	description : "Create extradimensional realm of reflection in mirror [see book]",
	descriptionFull : "You transform a mirror into a magical doorway to an extradimensional realm. You and any creatures you designate when you cast the spell can move through the doorway into the realm beyond. For the spell's duration, the mirror remains anchored in the plane of origin, where it can't be broken or otherwise damaged by any mundane means. No creatures other than those you designate can pass through the mirror or see into the mirror realm.\n\nThe realm within the mirror is an exact reflection of the location you left. The temperature is comfortable, and any environmental threats (lava, poisonous gas, or similar) are inert, harmless facsimiles of the real thing. Likewise, magic items reflected in the mirror realm have no magical properties, but those carried into it work normally. Food, drink, and other beneficial items within the mirror realm (reflections of originals in the real world) function as normal, real items; food can be eaten, wine can be drunk, and so on. Only items that were reflected in the mirror at the moment the spell was cast exist inside the mirror realm. Items placed in front of the mirror afterward don't appear in the mirror realm, and creatures never do unless they are allowed in by you. Items found in the mirror realm dissolve into nothingness when they leave it, but the effects of food and drink remain.\n\nSound passes through the mirror in both directions. Creatures in the mirror realm can see what's happening in the world, but creatures in the world see only what the mirror reflects. Objects can cross the mirror boundary only while worn or carried by a creature, and spells can't cross it at all. You can'tstand in the mirror realm and shoot arrows or cast spells at targets in the world or vice versa.\n\nThe boundaries of the mirror realm are the same as the room or location in the plane of origin, but the mirror realm can't exceed 50,000 square feet (for simplicity, imagine 50 cubes, each cube being 10 feet on a side). If the original space is larger than this, such as an open field or a forest, the boundary is demarcated with an impenetrable, gray fog.\n\nAny creature still inside the mirror realm when the spell ends is expelled through the mirror into the nearest empty space.\n\nIf this spell is cast in the same spot every day for a year, it becomes permanent. Once permanent, the mirror can't be moved or destroyed through mundane means. You can allow new creatures into the mirror realm (and disallow previous creatures) by recasting the spell within range of the permanent mirror. Casting the spell elsewhere doesn't affect the creation or the existence of a permanent mirror realm; a determined spellcaster could have multiple permanent mirror realms to use as storage spaces, hiding spots, and spy vantages."
};
/* Reflective Realm (R)
7th-level conjuration (ritual)
Casting Time: 1 action
Range: 90 feet
Components: S, M (framed mirror at least 5 feet tall)
Duration: 24 hours

You transform a mirror into a magical doorway to an extradimensional realm. You and any creatures you designate when you cast the spell can move through the doorway into the realm beyond. For the spell's duration, the mirror remains anchored in the plane of origin, where it can't be broken or otherwise damaged by any mundane means. No creatures other than those you designate can pass through the mirror or see into the mirror realm.

The realm within the mirror is an exact reflection of the location you left. The temperature is comfortable, and any environmental threats (lava, poisonous gas, or similar) are inert, harmless facsimiles of the real thing. Likewise, magic items reflected in the mirror realm have no magical properties, but those carried into it work normally. Food, drink, and other beneficial items within the mirror realm (reflections of originals in the real world) function as normal, real items; food can be eaten, wine can be drunk, and so on. Only items that were reflected in the mirror at the moment the spell was cast exist inside the mirror realm. Items placed in front of the mirror afterward don't appear in the mirror realm, and creatures never do unless they are allowed in by you. Items found in the mirror realm dissolve into nothingness when they leave it, but the effects of food and drink remain.

Sound passes through the mirror in both directions. Creatures in the mirror realm can see what's happening in the world, but creatures in the world see only what the mirror reflects. Objects can cross the mirror boundary only while worn or carried by a creature, and spells can't cross it at all. You can't stand in the mirror realm and shoot arrows or cast spells at targets in the world or vice versa.

The boundaries of the mirror realm are the same as the room or location in the plane of origin, but the mirror realm can't exceed 50,000 square feet (for simplicity, imagine 50 cubes, each cube being 10 feet on a side). If the original space is larger than this, such as an open field or a forest, the boundary is demarcated with an impenetrable, gray fog.

Any creature still inside the mirror realm when the spell ends is expelled through the mirror into the nearest empty space.

If this spell is cast in the same spot every day for a year, it becomes permanent. Once permanent, the mirror can't be moved or destroyed through mundane means. You can allow new creatures into the mirror realm (and disallow previous creatures) by recasting the spell within range of the permanent mirror. Casting the spell elsewhere doesn't affect the creation or the existence of a permanent mirror realm; a determined spellcaster could have multiple permanent mirror realms to use as storage spaces, hiding spots, and spy vantages.

Classes: Bard, Sorcerer, Wizard */
SpellsList["there to here"] = { // Abduct VSS p329
	name : "There to Here",
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 7,
	school : "Conj",
	time : "1 min",
	range : "1 mile",
	components : "V,S,M",
	compMaterial : "A silver saucer",
	duration : "1 h",
	save : "Cha",
	description : "1 known crea in range save or teleport w/in 30 ft of me; sit/stand/prone/bound; stay or return at end",
	descriptionFull : "Choose a creature within range that is known to you as the target of this spell. An unwilling creature can make a Charisma saving throw to resist this effect. The target is placed at a location of your choice within 30 feet of you. You choose if the target is sitting, standing, prone, or bound with nearby restraints. At the end of the spell’s duration, you can choose whether the target remains at your location or is teleported back to the location from which it was abducted."
};
/* There to Here
7th-level conjuration
Casting Time: 1 minute
Range: 1 mile
Components: V, S, M (a silver saucer)
Duration: 1 hour

Choose a creature known to you within range as the target of this spell. An unwilling creature can make a Charisma saving throw to resist this effect. The target is placed at a location of your choice within 30 feet of you. You choose if the target is sitting, standing, prone, or bound with nearby restraints. At the end of the spell's duration, you can choose whether the target remains at your location or is teleported back to the location from which it was abducted.
Classes: Bard, Cleric, Sorcerer, Warlock, Wizard */

		// ------------------------------ Level 8 spells ------------------------------ 
SpellsList["conflagration"] = { // Wildfire VSS p357
	name : "Conflagration",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A piece of flint",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Create 10 5-ft cubes area; crea enter/start turn in area save or 8d8 Fire dmg; success: half; B",
	descriptionFull : "You create a magical fire that fills ten 5-foot cubes on the ground, which you can arrange as you wish within range. Each cube you place must have a face adjacent to the face of another cube. On each of your turns after you cast this spell, you can use a bonus action to expand the area of the fire by up to ten additional 5-foot cubes that each have a face adjacent to the face of another cube of fire. The fire damages objects in the area and ignites flammable objects that aren’t being worn or carried." + "\n   " + "When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. It takes 8d8 fire damage on a failed save, or half as much on a successful save."
};
/* Conflagration
8th-level evocation
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (a piece of flint)
Duration: Concentration, up to 1 minute

You create a magical fire that fills ten 5-foot cubes on the ground, which you can arrange as you wish within range. Each cube you place must have a face adjacent to the face of another cube. On each of your turns after you cast this spell, you can use a bonus action to expand the area of the fire to up to ten additional 5-foot cubes that each have a face adjacent to the face of another cube of fire. The fire damages objects in the area and ignites flammable objects that aren't being worn or carried.

When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. It takes 8d8 fire damage on a failed save, or half as much on a successful save.

Classes: Druid, Sorcerer, Wizard */
SpellsList["excruciating excoriation"] = { // Flense GH:PG p121
	name : "Excruciating Excoriation",
	classes : ["cleric", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 8,
	school : "Necro",
	time : "1 a",
	range : "60 feet",
	components : "V,S,M",
	compMaterial : "A scalpel",
	duration : "Conc, 1 min",
	save : "Con",
	description : "8d6 Necrotic, a each turn to make save again, save half dmg. Ends if 0HP, out of range, or total cover.",
	descriptionFull : "You target a creature you can see within range, using necromantic force to slice the skin from its body. Make a ranged spell attack against that creature. The target must succeed on a Constitution saving throw, taking 8d6 necrotic damage on a failure or half as much damage on a success. On each of your turns for the duration, you can use your action to force the same target to make another Constitution saving throw and repeat the damage. The spell also ends if the target is ever outside the spell’s range, if the target is reduced to 0 hp, or if it has total cover from you."
};	
/* Excruciating Excoriation
8th-level necromancy
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (a scalpel)
Duration: Concentration, up to 1 minute

You target a creature you can see within range, using necromantic force to slice the skin from its body. Make a ranged spell attack against that creature. The target must succeed on a Constitution saving throw, taking 8d6 necrotic damage on a failure or half as much damage on a success. 
On each of your turns for the duration, you can use your action to force the same target to make another Constitution saving throw and repeat the damage. The spell also ends if the target is ever outside the spell's range, if the target is reduced to 0 hp, or if it has total cover from you.

Classes: Cleric, Warlock, Wizard */
SpellsList["forlorn barrier"] = { // Wall of Gloom GH:PG p127
	name : "Forlorn Barrier",
	classebs : ["bard", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 8,
	school : "Conj",
	time : "1 a",
	range : "120 feet",
	components : "V,S,M",
	compMaterial : "A vial of tears",
	duration : "10 minutes",
	save : "Cha",
	description : "Create wall, 60ft long, 10ft high, 5ft thick, or 20ft rad cirle, all but chosen become incapac if within 20ft on fail, moving through gains 1 lvl exhaustion on fail ",
	descriptionCantripDie : "",
	descriptionFull : "You create a wall of swirling grey energy, formed of the psychic pain of forlorn loss. The wall appears within range on a solid surface and lasts for the duration. You choose to make them all up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick—the wall blocks line of sight. The wall radiates dim light out to a range of 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature moves to within 20 feet of it or starts its turn there, the creature must succeed on a Charisma saving throw or become incapacitated for one round as they are overcome with a flood of negative feelings. A creature can move through the wall, though the attempt is emotionally draining. The first time a creature enters the wall on a turn or ends its turn there, the creature must make a Charisma saving throw, taking one level of exhaustion on a failed save."
};
/* Forlorn Barrier
8th-level conjuration
Casting Time: 1 action
Range: 120 feet
Components: V, S, M (a vial of tears)
Duration: 10 minutes

You create a wall of swirling grey energy, formed of the psychic pain of forlorn loss. The wall appears within range on a solid surface and lasts for the duration. You can choose to make it up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.

The wall radiates dim light out to a range of 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature moves to within 20 feet of it or starts its turn there, the creature must succeed on a Charisma saving throw or become incapacitated for one round as they are overcome with a flood of negative feelings.

A creature can move through the wall, though the attempt is emotionally draining. The first time a creature enters the wall on a turn or ends its turn there, the creature must make a Charisma saving throw, taking one level of exhaustion on a failed save.

Classes: Bard, Wizard */
SpellsList["harsh glare"] = { // Harsh Light of Summer's Glare DMS p78
	name : "Harsh Glare",
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 8,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "Creat starts turn sees me, save or blinded (blinded/stunned if darkvision) until start of next turn",
	descriptionFull : "You emit a burst of brilliant light until the start of your next turn, which causes a harsh glare. When a creature that can see you starts its turn within range, it must make a Constitution saving throw. This is not a gaze attack, and it cannot be avoided by averting one's eyes or wearing a blindfold. Creatures with darkvision that fail are blinded and stunned. Creatures without darkvision that fail are blinded. These conditions last until the start of the creature's next turn."
};
/* Harsh Glare
8th-level enchantment
Casting Time: 1 action
Range: 90 feet
Components: V, S
Duration: 1 round

You emit a burst of brilliant light until the start of your next turn, which causes a harsh glare. When a creature that can see you starts its turn within range, it must make a Constitution saving throw. This is not a gaze attack, and it cannot be avoided by averting one's eyes or wearing a blindfold. Creatures with darkvision that fail are blinded and stunned. Creatures without darkvision that fail are blinded. These conditions last until the start of the creature's next turn.

Classes: Bard, Druid, Sorcerer, Warlock, Wizard */
SpellsList["purple pulsing"] = { // Black Sunshine DMS p43
	name : "Purple Pulsing",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 8,
	school : "Illus",
	time : "1 a",
	range : "S:60-ft rad",
	components : "V,S,M\u2020",
	compMaterial : "A discolored pearl, which the spell consumes",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Allies in range invisible (purple shadow); ranged spell atk within 10 ft save or blinded 1 min, repeat save",
	descriptionFull : "You hold up a flawed pearl and it disappears, leaving behind a magic orb in your hand that pulses with dim purple light. Allies that you designate become invisible if they're within 60 feet of you and if light from the orb can reach the space they occupy. An invisible creature still casts a faint, purple shadow.\nThe orb can be used as to make a ranged spell attack against an enemy. On a hit, the orb explodes in a flash of light and the spell ends. The targeted enemy and each creature within 10 feet of it must make a successful Dexterity saving throw or be blinded for 1 minute. A creature blinded in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.",
};
/* Purple Pulsing
8th-level illusion
Casting Time: 1 action
Range: Self (60-foot radius)
Components: V, M (a discolored pearl, which the spell consumes)
Duration: Concentration, up to 1 minute

You hold up a flawed pearl and it disappears, leaving behind a magic orb in your hand that pulses with dim purple light. Allies that you designate become invisible if they're within 60 feet of you and if light from the orb can reach the space they occupy. An invisible creature still casts a faint, purple shadow.

The orb can be used as to make a ranged spell attack against an enemy. On a hit, the orb explodes in a flash of light and the spell ends. The targeted enemy and each creature within 10 feet of it must make a successful Dexterity saving throw or be blinded for 1 minute. A creature blinded in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.

Classes: Sorcerer, Wizard */

		// ------------------------------ Level 9 spells ------------------------------ 
SpellsList["consuming flames"] = { // Phoenix Flames GH:PG p123
	name : "Consuming Flames",
	classes : ["druid", "sorcerer"],
	source : [["CAA2"]],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Explode, all within 20ft 30d6 Radiant dmg and 1 lvl exhaustion, half on save,  revive after 10min",
	descriptionCantripDie : "",
	descriptionFull : "You immolate yourself, consuming your body in a searing cloud of holy flames. All creatures within 20 feet of you must make a Constitution saving throw or take 30d6 radiant damage and gain one level of exhaustion. On a successful save, a creature takes half damage and is not exhausted. If a target is killed by this damage, its body is incinerated. After 10 minutes, you rise from the ashes where you originally cast the spell. You are returned fully to life as if you were affected by a true resurrection spell."
};
/* Consuming Flames
9th-level evocation
Casting Time: 1 action
Range: Self
Components: V, S
Duration: Instantaneous

You immolate yourself, consuming your body in a searing cloud of holy flames. All creatures within 20 feet of you must make a Constitution saving throw or take 30d6 radiant damage and gain one level of exhaustion. On a successful save, a creature takes half damage and is not exhausted. If a target is killed by this damage, its body is incinerated.

After 10 minutes, you rise from the ashes where you originally cast the spell. You are returned fully to life as if you were affected by a True Resurrection spell.

Classes: Cleric, Druid, Sorcerer */
SpellsList["incensed ululation"] = { // Furious Wail ToH p283
	name : "Incensed Ululation",
	classes : ["bard","druid","sorcerer","warlock","wizard"],
	source : [["CAA2"]],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Cha",
	description : "Up to 5 creat in range 10d10+30 psychic dmg and stunned until end of next turn; Cha save halves",
	descriptionFull : "You let out a scream of white-hot fury that pierces the minds of up to five creatures within range. Each target must make a Charisma saving throw. On a failed save, it takes 10d10 + 30 psychic damage and is stunned until the end of its next turn. On a success, it takes half as much damage."
};
/* Incensed Ululation
9th-level evocation
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You let out a scream of white-hot fury that pierces the minds of up to five creatures within range. Each target must make a Charisma saving throw. On a failed save, it takes 10d10 + 30 psychic damage and is stunned until the end of its next turn. On a success, it takes half as much damage.

Classes: Bard, Druid, Sorcerer, Warlock, Wizard */
SpellsList["nudge the die"] = { // Manipulate Fate KCC p33
	name : "Nudge the Die",
	classes : ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	source : [["CAA2"]],
	level : 9,
	school : "Div",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A spool of silk thread",
	duration : "Conc, 1 m",
	description : "When creat within 60 ft makes check/save/attack, can affect the die roll [see book]",
	descriptionFull : "You reach out and grasp the imperceptible threads of fate, subtly manipulating them. Whenever a creature within 60 feet of you makes an attack roll, saving throw, or ability check, you can use your reaction to tweak their fate, altering the value of the roll. You can choose to manipulate fate after the die is rolled, but before the outcome is determined.\nYou can alter the roll of the die to an adjacent number to the number rolled (outcomes listed on the table below).\n\t d20	\t Tweaked Fates\n\t 1	\t 7, 13, or 19\n\t 2	\t 12, 18, or 20\n\t 3	\t 17, 16, or 19\n\t 4	\t 11, 14, or 18\n\t 5	\t 13, 15, or 18\n\t 6	\t 9, 14, or 16\n\t 7	\t 1, 15, or 17\n\t 8	\t 10, 16, or 20\n\t 9	\t 6, 11, or 19\n\t 10	\t 8, 12, or 17\n\t 11	\t 4, 9, or 13\n\t 12	\t 2, 10, or 15\n\t 13	\t 1, 5, or 11\n\t 14	\t 4, 6, or 20\n\t15	\t 5, 7, 12\n\t 16	\t3, 6, or 8\n\t 17	\t 3, 7, or 10\n\t 18	\t 2, 4, or 5\n\t 19	\t 1, 3, or 9\n\t 20	\t 2, 8, or 14\n\nWhen you alter a roll, you can choose to cast aside subtlety and yank the thread of fate, and select any value of the d20 as the outcome of the result, but the backlash causes you to take a number d6 equal to the difference in the value selected from the value rolled in necrotic damage. The spell immediately ends after the result is changed in this more drastic way.\n\nEditor's Note: The numbers you can pick are the adjacent sides of a d20 to the number rolled. This represents literally nudging the die of fate."
};
/* Nudge the Die
9th-level divination
Casting Time: 1 action
Range: Self
Components: V, S, M (a spool of silk thread)
Duration: Concentration, up to 1 minute
You reach out and grasp the imperceptible threads of fate, subtly manipulating them. Whenever a creature within 60 feet of you makes an attack roll, saving throw, or ability check, you can use your reaction to tweak their fate, altering the value of the roll. You can choose to manipulate fate after the die is rolled, but before the outcome is determined.
You can alter the roll of the die to an adjacent number to the number rolled (outcomes listed on the table below).
d20	Tweaked Fates
1	7, 13, or 19
2	12, 18, or 20
3	17, 16, or 19
4	11, 14, or 18
5	13, 15, or 18
6	9, 14, or 16
7	1, 15, or 17
8	10, 16, or 20
9	6, 11, or 19
10	8, 12, or 17
11	4, 9, or 13
12	2, 10, or 15
13	1, 5, or 11
14	4, 6, or 20
15	5, 7, 12
16	3, 6, or 8
17	3, 7, or 10
18	2, 4, or 5
19	1, 3, or 9
20	2, 8, or 14

When you alter a roll, you can choose to cast aside subtlety and yank the thread of fate, and select any value of the d20 as the outcome of the result, but the backlash causes you to take a number d6 equal to the difference in the value selected from the value rolled in necrotic damage. The spell immediately ends after the result is changed in this more drastic way.

Editor's Note: The numbers you can pick are the adjacent sides of a d20 to the number rolled. This represents literally nudging the die of fate.

Classes: Bard, Cleric, Druid, Sorcerer, Warlock, Wizard */
SpellsList["stellar supernova"] = { // Supernova KCC p44
	name : "Stellar Supernova",
	classes : ["sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "Sight",
	components : "V,S,M",
	compMaterial : "Metal forged from a star",
	duration : "Instantaneous",
	save : "Con",
	description : "Up to 5 creat in range 10d10+30 psychic dmg and stunned until end of next turn; Cha save halves",
	descriptionFull : "You form a fist sized point of light at a point you can see within range, that then explodes into a stellar supernova unleashing cataclysmic stellar energy. All creatures within a 60 foot radius of the point must make a Constitution saving throw. On a failure, a creature takes 30d8 radiant damage and becomes blinded for 1 minute. On a success, creatures take half as much damage and are not blinded. Blinded creatures can repeat their saving throw at the end of each of their turns, ending the effect on a success."
};
/* Stellar Supernova
9th-level evocation
Casting Time: 1 action
Range: Sight
Components: V, S, M (metal forged from a star)
Duration: Instantaneous
You form a fist sized point of light at a point you can see within range, that then explodes into a stellar supernova unleashing cataclysmic stellar energy. All creatures within a 60 foot radius of the point must make a Constitution saving throw. On a failure, a creature takes 30d8 radiant damage and becomes blinded for 1 minute. On a success, creatures take half as much damage and are not blinded. Blinded creatures can repeat their saving throw at the end of each of their turns, ending the effect on a success.
Classes: Sorcerer, Wizard */
SpellsList["wild tide"] = { // Unshackled Magic DMS p188
	name : "Wild Tide",
	classes : ["sorcerer", "wizard"],
	source : [["CAA2"]],
	level : 9,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "1 crea save or regard all creatures it can see as enemies, random targeting; save when damaged to end",
	descriptionFull : "You designate a creature within range that has the Spellcasting or Innate Spellcasting special trait and imbue it with wild magic, causing it to lose control of its magical ability. If the target gets a failure on a Charisma saving throw, then on its next turn, it rolls randomly to select one of its available spells. The target then spontaneously casts that spell as an action. If the spell can be cast using a spell slot higher than its level, roll randomly to determine what slot is used to cast the spell. The target still determines factors such as the location of the spell's area or which creatures it affects, as normal, but it is compelled to cast that particular spell at that particular time.\n\nEach round while this spell remains in effect, the target makes another Charisma saving throw. On a successful save, it can act normally in that round, but this spell does not end."
};
/* Wild Tide
9th-level enchantment
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Concentration, up to 1 minute

You designate a creature within range that has the Spellcasting or Innate Spellcasting special trait and imbue it with wild magic, causing it to lose control of its magical ability. If the target gets a failure on a Charisma saving throw, then on its next turn, it rolls randomly to select one of its available spells. The target then spontaneously casts that spell as an action. If the spell can be cast using a spell slot higher than its level, roll randomly to determine what slot is used to cast the spell. The target still determines factors such as the location of the spell's area or which creatures it affects, as normal, but it is compelled to cast that particular spell at that particular time.

Each round while this spell remains in effect, the target makes another Charisma saving throw. On a successful save, it can act normally in that round, but this spell does not end.
Classes: Sorcerer, Wizard */