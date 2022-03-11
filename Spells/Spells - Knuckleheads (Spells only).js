/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making my character with it).
*/

/*  -INFORMATION-
	Subject:    "Knuckleheads & Other Such Curiosities: A traveller's guide to Icewind Dale" 
	Effect:     This script adds most player options from the book "Knuckleheads & Other Such Curiosities"
				This is based on the pdf version of the book (which is v1.1 of the rules)
				All content was produced by Adeventure League ©2020 Wizards of the Coast LLC

	Content:	21 spells

	Code by:	AqueonTheConjurer & MorePurpleMoreBetter
	Import by:  Mark Frellips
	Date:		2020-11-12 (sheet v12.999)

	Please support the creator of this content (Dungeon Masters Guild) and purchase therir creation.
	It contains a lot more than just player options!
	Link: https://www.dmsguild.com/product/328568/DDAL0013-Knuckleheads--Other-Such-Curiosities-A-Travelers-Guide-to-Icewind-Dale
*/

var iFileName = "Knuckleheads - Spells only.js";
RequiredSheetVersion(13);

// Define the source
SourceList.KaSC = {
	name: "Knuckleheads Spells",
	abbreviation: "KaSC",
	group: "Adventurers League",
	url: "https://www.dmsguild.com/product/328568/DDAL0013-Knuckleheads--Other-Such-Curiosities-A-Travelers-Guide-to-Icewind-Dale",
	date: "2020/10/17"
};

// Add Spells
SpellsList["auroral winds"] = {
	name: "Auroral Winds",
	classes: ["druid", "warlock", "wizard"],
	source: ["KaSC", 33],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "150 ft",
	components: "V,S,M",
	compMaterial: "A candle wrapped in silver wire",
	duration: "Conc, 1 min",
	save: "Con",
	description: "30-ft rad sphere all crea 6d6+1d6/SL Radiant dmg start turn in; Con save half; all crea in the area disadv on Wis(Perception) hearing and snared 10-ft; crea immune to cold are immune to snare",
	descriptionMetric: "30-ft rad sphere all crea 6d6+1d6/SL Radiant dmg start turn in; Con save to avoid snare",
	descriptionFull: "30-ft radius of flickering light and howling winds. Creatures in the area have disadvantage on Wisdom(Perception) checks based on hearing. Any creature that starts its turn in the area takes 6d6+1d6/SL Radiant damage. Any creature that ends its turn in the area must succeed on a Constitution saving throw or have its speed reduced by 10-ft until the end of their next turn. Creatures immune to cold are immune to this reduction in speed."
};
SpellsList["brittle"] = {
	name: "Brittle",
	classes: ["artificer","cleric", "druid", "paladin", "wizard"],
	source: ["KaSC", 33],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "15 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "1 crea w/ non-magic weapon save or weapon is destroyed after its next use",
	descriptionFull: "I freeze a non-magical weapon held by a creature. The next time the weapon is used to make an attack, the creature holding it must succeed a Dexterity saving throw or the weapon shatters and is destroyed after the attack is resolved. If the save succeeds, the weapon is unharmed and the spell ends."
};
SpellsList["buffeting eddies"] = {
	name: "Buffeting Eddies",
	classes: ["artificer","bard","cleric","druid","paladin","ranger","sorcerer","warlock","wizard"],
	source: ["KaSC", 33],
	level: 2,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A tiny paper fan",
	duration: "Conc, 1 min",
	save: "Str",
	description: "self 5ft-rd aura. ranged wea disadv., bns action to push a crea 10-ft and prone",
	descriptionFull: "A (5-ft radius) aura moves centered upon I until the spell ends. Any creature has disadvantage on ranged weapon attacks made against creatures within the aura. As a bonus action, I can assail one creature of my choice within the aura with a blast of wind. The creature must succeed on a Strength saving throw or be pushed away 10 feet and fall prone."
};
SpellsList["chardalyn hide"] = {
	name: "Chardalyn Hide",
	classes: ["cleric", "druid", "sorcerer", "wizard"],
	source: ["KaSC", 33],
	level: 7,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "a small shard of chardalyn worth 500gp, which the spell consumes",
	duration: "Conc, 1 hr",
	description: "1 crea, gain resist bludg., pierce, slash dmg. adv on saves vs magic effects. disadv for spell attack vs the crea",
	descriptionFull: "This spell turns the flesh of a willing creature into crystal that is as hard as steel and repels all but the most potent spells.Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, 	and slashing damage.They also have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against them."
};
SpellsList["charm elemental"] = {
	name: "Charm Elemental",
	classes: ["artificer","bard","druid","ranger","sorcerer","warlock","wizard"],
	source: ["KaSC", 33],
	level: 3,
	school: "Ench",
	time: "1 a",
	range: "30-ft",
	components: "V,S",
	duration: "1 hr",
	save: "Wis",
	description: "1+1/SL elmentals, each 30-ft apart, save or charmed; adv on save if me/ally is fighting it",
	descriptionFull: "I attempt to charm an elemental I can see within range.It must make a Wisdom saving throw, and does so with advantage if I or my companions do anything harmful to it.The charmed creature regards me as a friendly acquaintance. When the spell ends, the creature knows it was charmed by I." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 4th or higher level, I can target one additional elemental for each slot level above 3rd. The creatures must be within 30 feet of each other when I target them."
};
SpellsList["climbing spikes"] = {
	name: "Climbing Spikes",
	classes: ["artificer","druid","ranger","wizard"],
	source: ["KaSC", 33],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a nail",
	duration: "8 hr",
	description: "1 crea's boots and gloves, gain adv on checks to climb/balance on icy or rocky terrain, ignore difficult terrain of ice or snow.",
	descriptionFull: "Icy spikes grow from the boots and gloves of a creature I touch.Until the spell ends, the creature has advantage on any checks made to climb or maintain their balance on icy or rocky terrain, and they ignore difficult terrain created by ice or deep snow.The spell ends early if the boots or gloves are removed." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd or higher level, I can target one additional creature for each slot level above 1st."
};
SpellsList["conjure compass"] = {
	name: "Conjure Compass",
	classes: ["artificer","druid", "ranger","wizard"],
	source: ["KaSC", 34],
	level: 1,
	school: "Conj",
	time: "1 min",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a small stone",
	duration: "8 hr",
	description: "Ench a stone that tugs north in a creature's hand",
	descriptionFull: "I temporarily enchant a small stone to emit a gentle tug when the creature holding it faces north."
};
SpellsList["freezing blast"] = {
	name: "Freezing Blast",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["KaSC", 34],
	level: 2,
	school: "Evoc",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a white dragon's scale",
	save: "Con",
	description: "30-ft line, 5-ft wide. 2d10 cold dmg, Con save half. Dex save prone. Creates difficult terrain 1 min.",
	descriptionFull: "A line of frigid air 30 feet long and 5 feet wide emanates from I in a direction I choose.Each creature in the line must succeed on a Constitution saving throw.A creature takes 2d10 cold damage on a failed save, or half as much damage on a successful one. The ground in the area of the spell is also covered in a thick coating of slippery ice for 1 minute.The ice is difficult terrain and a creature that enters the area or starts their turn there must succeed on a Dexterity saving throw or fall prone."
};
SpellsList["frozen flame"] = {
	name: "Frozen Flame (R)",
	classes: ["artificer","druid","ranger","wizard"],
	source: ["KaSC", 34],
	level: 2,
	school: "Trans",
	time: "1 min",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a source of fire as large as a torch",
	duration: "8 hr",
	description: "transmute a flame into unextinquishable radiating crystal",
	descriptionFull: "The fire’s flames solidify into translucent orange, red, and yellow crystals. For the duration of the spell, the fire continues to radiate heat and light without consuming fuel, and can’t be extinguished by heavy winds."
};
SpellsList["heart of ice"] = {
	name: "Heart of Ice",
	classes: ["artificer","druid","ranger","sorcerer","wizard"],
	source: ["KaSC", 33],
	level: 4,
	school: "Abjur",
	time: "1 rea",
	range: "Self",
	components: "S",
	compMaterial: "a small shard of chardalyn worth 500gp",
	description: "After taking cold dmg, heal 1/2dmg taken and gain immunity to cold dmg for 1 rnd",
	descriptionFull: "I have immunity to cold damage until the start of my next turn.Also, I regain a number of hit points equal to half of the cold damage that triggered the spell."
};
SpellsList["hibernate"] = {
	name: "Hibernate",
	classes: ["bard","cleric","druid","wizard"],
	source: ["KaSC", 34],
	level: 6,
	school: "Ench",
	time: "1 min",
	range: "30-ft",
	components: "V,S,M",
	compMaterial: "pinch of sand",
	duration: "Conc, 1 hr",
	description: "1 crea, fall unconscious, gain the benefit of a long rest in a short rest",
	descriptionFull: "With a casual wave of my hand, a willing creature of my choice that I can see within range falls unconscious for the spell’s duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake.If a target remains unconscious for the full duration that target gains the benefit of a long rest and it can’t be affected by this spell again until it finishes a long rest."
};
SpellsList["ice barrage"] = {
	name: "Ice Barrage",
	classes: ["artificer","druid","sorcerer","warlock","wizard"],
	source: ["KaSC", 34],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90 ft",
	components: "V,S",
	description: "Fling razor ice 2d4 Piercing dmg; shards at same or different targets; CL5:2, CL11:3, CL17:4 shards",
	descriptionCantripDie: "Fling `CD` razor ice shards 2d4 Piercing dmg; shards at same or different targets;",
	descriptionFull: "I conjure razor-sharp shards of frigid ice and fling it at a creature within range. Make a ranged spell attack against the target.On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one shard when I reach higher levels: two shards at 5th level, three shards at 11th level, and four shards at 17th level.I can direct the shards at the same target or at different ones.Make a separate attack roll for each shard."
};
SpellsList["icicle trap"] = {
	name: "Icicle Trap",
	classes: ["artificer","druid","ranger","wizard"],
	source: ["KaSC", 33],
	level: 2,
	school: "Abjur",
	time: "10 min",
	range: "15 ft",
	components: "V,S,M",
	compMaterial: "a piece of glass shaped like an icicle",
	duration: "till trigger",
	description: "create a 10-ft trap. 4d6 Piercing dmg, Dex save halves.",
	descriptionFull: "When I cast this spell, I create a 10-foot square area of icicles on a ceiling, doorway, or similar overhang.The icicles fall when a creature or creatures walk beneath them, dealing 4d6 piercing damage.Creatures that succeed on a Dexterity saving throw take half damage.I can set 		conditions for creatures that don’t trigger the icicle trap, such as exempting yourself or those who say a certain password. A successful Intelligence(Investigation) check against my spell save DC recognizes the icicles as dangerous and likely to fall.The icicles are destroyed if they take 15 points of fire damage." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["invigorate"] = {
	name: "Invigorate",
	classes: ["bard","cleric","druid","paladin"],
	source: ["KaSC", 35],
	level: 4,
	school: "Abjur",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "powdered silver worth at least 50gp, which the spell consumes",
	duration: "8 hr",
	description: "3+1/SL crea, gain advantage for saving throws vs exhaustion",
	descriptionFull: "I imbue up to three creatures with protection against weariness, granting them advantage on any saving throws made to resist gaining levels of exhaustion." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher level, I can target one additional creature for each slot level above 4th."
};
SpellsList["leomunds tinier tent"] = {
	name: "Leomund's Tinier Tent (R)",
	classes: ["druid","ranger","wizard"],
	source: ["KaSC", 35],
	level: 1,
	school: "Evoc",
	time: "1 min",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a stake and a short length of twine",
	duration: "8 hr",
	description: "Personal immobile area; blocks magic; ends if I leave or another crea enters",
	descriptionFull: "An immobile dome of force springs into existence around and above I and remains stationary for the duration.The spell ends if I leave the area. The dome adjusts in area to allow I to lay down comfortably, but no other creatures can fit inside. The spell fails if any other creatures are within the area.I can move through the dome freely, but all other creatures and objects are barred from passing through it.Spells and other magical effects can’t extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, 	regardless of the weather outside. Until the spell ends, I can command the interior to become dimly lit or dark.The dome is opaque from the outside, of any color I choose, but is transparent from the inside."
};
SpellsList["shackling smite"] = {
	name: "Shackling Smite",
	classes: ["paladin"],
	source: ["KaSC", 35],
	level: 2,
	school: "Evoc",
	time: "1 bns",
	range: "Self",
	components: "V",
	duration: "Conc, 1 min",
	save: "Str",
	description: "adds 3d8 Cold dmg to next melee weapon attack hit; Target save Str or be restrained",
	descriptionFull: "The next time I hit a creature with a melee weapon attack during this spell’s duration, my weapon emits a blast of cold air and the attack deals an extra 3d8 cold damage to the target.Additionally, 	the target must succeed on a Strength saving throw or be restrained until the spell ends. A creature restrained by this spell makes another Strength saving throw at the end of each of its turns. On a successful save, it is no longer restrained."
};
SpellsList["shivering touch"] = {
	name: "Shivering Touch",
	classes: ["artificer","cleric","sorcerer","warlock", "wizard"],
	source: ["KaSC", 35],
	level: 3,
	school: "Necro",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Con",
	description: "Melee spell attack vs crea, cause disadv on Dex saving throws and attacks. Subject to Cold or Exhaustion immunity",
	descriptionFull: "Make a melee spell attack against a creature I can reach.On a hit the creature becomes chilled to the bone and begin to shiver uncontrollably.While affected, the creature has disadvantage on Dexterity saving throws and attack rolls.At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends on the target. Creatures immune to cold or exhaustion are immune to this spell."
};
SpellsList["snillocs single snowball"] = {
	name: "Snilloc’s Single Snowball",
	classes: ["sorcerer", "wizard"],
	source: ["KaSC", 35],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S,M",
	compMaterial: "a piece of ice or a small white rock chip",
	save: "Dex",
	description: "1 crea 3d6+1d6/SL Cold dmg. Dex save halves dmg",
	descriptionFull: "A snowball erupts from my hand and hurtles towards the target who must make a Dexterity saving throw. A creature takes 3d6 cold damage n a failed save, or half as much damage on a successful one." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["snow shoes"] = {
	name: "Snow Shoes",
	classes: ["artificer","bard","druid","ranger"],
	source: ["KaSC", 33],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "1 hr",
	description: "1 crea (+1/SL crea or hr) gains snow/ice walk or climb without check and leaves no tracks.",
	descriptionFull: "A creature that I touch becomes able to walk in snow rather than sink into it.The creature can move across and climb icy or snowy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost extra movement. A creature benefiting from this spell leaves behind no tracks or other traces of its passage and can’t be tracked except by magical means." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, I may affect an additional creature or extend the duration by 1 hour for each slot level above 2nd."
};
SpellsList["thaw"] = {
	name: "Thaw",
	classes: ["artificer","cleric", "druid", "sorcerer", "wizard"],
	source: ["KaSC", 36],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "30-ft",
	components: "V,S",
	duration: "1 hr",
	description: "Melt 3+1/SL x 10-ft cubes or deal 1 ice/snow-noid crea 3d6+1d6/SL Fire dmg, Dex save to halve",
	descriptionFull: "I melt an area of ice and snow that I can see within range.Three 10-ft.cubes anywhere within 30 feet of I am instantaneously melted.The resulting ater is not magical and will refreeze normally. Instead of melting ice and snow, I may choose to instead target a single creature with 30 feet that is made of ice or snow such as an ice mephit or a simulacrum.The creature must make a Constitution saving throw.On a failed save the creature takes 3d6 fire damage, or half as much damage on a successful one." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, I may affect an additional 10 - ft.cube or increase the damage by 1d6 for each slot level above 1st."
};
SpellsList["winters mantle"] = {
	name: "Winter's Mantle",
	classes: ["paladin"],
	source: ["KaSC", 36],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "Self",
	components: "V",
	duration: "1 min",
	description: "30-ft rad aura from self. ally crea's gain advant on save throws vs cold & wea deal +1d4 Cold dmg.",
	descriptionFull: "With a quick prayer, I wrap yourself in bitter cold which radiates from I in an aura with a 30-foot radius, inuring friendly creatures to low temperatures.Until the spell ends, the aura moves with I, centered on I.While in the aura, each nonhostile creature in the aura(including I) makes saving throws against spells and effects that do cold damage with advantage.In addition, an affected creature deals an extra 1d4 cold damage when it hits with a weapon attack."
};

WeaponsList["ice barrage"] = {
	regExpSearch: /^ice(?=.*barrage).*$/i,
	name: "Ice Barrage",
	source: ["KaSC", 34],
	list: "spell", // lists of weapons in the sheet are: "melee", "ranged", "spell", and "improvised"
	ability: 6, // Required; the ability score used to calculate the to hit modifier (and the damage if applicable, see below). [Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6]
	type: "Cantrip", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, I can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	damage : ["C\u00D7" + 2, 4, "piercing"], // Required; the damage it does. First entry is the amount of dice, second is the type of dice, and third is the damage type. This example is 2d4 worth of piercing damage. //if I want the amount of dice to be an amount determined by the Character Level, then put "C" as the first value. Alternatively, I can use "B" for the value minus 1 (such as with Green-Flame Blade)
	range: "90 ft", // Required; the range of the weapon
	description: "Each 2d4 is a separate shard requiring separate rolls (KaSC 34)", // Required; the description of the attack. If I have nothing to put here, just put two quotation marks ("").
	abilitytodamage: false, // Required; whether or not the ability score modifier is added to the damage (true or false)
	SpellsList: "ice barrage", // Optional; if the attack I am making is a spell/cantrip that is listed in the SpellsList variable under another name that I am using for this weapon (in this example it would be "leattack"), write the name used in the SpellsList variable here
};
