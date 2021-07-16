var iFileName = "Nod's Homebrew - Burning Sky [WIP].js"; 
RequiredSheetVersion(13);

SourceList["WotBS"] = {
	name : "Burning Sky",
	abbreviation : "WotBS",
	group : "Enworld",
	date : "2018/04/4"
};

// New Feats - Gate Pass Connections
FeatsList["blade of the resistance"] = {
	name : "Blade of the Resistance",
	source : ["WotBS", 18 ],
	description : "You select an intelligent creature who has ever dealt damage to you or your allies as your preferred foe. You have advantage on attack rolls against your preferred foe until the end of your turn. Once you use this feature, you must finish a short or long rest before you can use it again.",
	usages : 1,
	recovery : "short rest",
	action: ["bonus action", "Select preferred foe"],
};
FeatsList["blessed by dreams"] = {
	name : "Blessed by Dreams",
	source : ["WotBS", 18 ],
	description : "Fortune smiles on me. Me or any ally within 30 feet of me may re-roll a single saving throw, using the better of the two results. Once I use this feature, I must finish a long rest before I can use it again.",
	usages : 1,
	recovery : "long rest",
};
FeatsList["civic minded"] = {
	name : "Civic Minded",
	source : ["WotBS", 18 ],
	description : "Helping others is second nature to you. You may use the Help action as a bonus action to aid an ally with an attack roll or ability check using a skill or tool you have proficiency with. Once you use this feature, you must finish a short or long rest before you can use it again.",
	usages : 1,
	recovery : "short rest",
	action: ["bonus action", "Help action (Civic Minded)"],
};
FeatsList["guild sympathizer"] = {
	name : "Guild Sympathizer",
	source : ["WotBS", 18 ],
	description : "If I am not surprised at the start of an encounter, I may use my bonus action to warn my allies. Any surprised ally whose turn is after mine in the initiative order is no longer surprised.",
	action: ["bonus action", "Warn Allies (Guild Sympathizer)"],
};

//New Feats - Burning Sky Boons
FeatsList["indomitability's stabilization"] = {
	name : "Indomitability's Stabilization",
	source : ["WotBS"],
	description : "I stabilize whenever I am dying at the start of my turn.",
};
FeatsList["indomitability's withstandment"] = {
	name : "Indomitability's Withstandment",
	source : ["WotBS"],
	description : "I am always under the effect of the Stand the Heat spell.",
	action: ["bonus action", "Extinguish flames (Stand the Heat)"],
	spellcastingBonus : {
		name : "Always",
		spells : ["stand the heat"],
		selection : ["stand the heat"],
		firstCol : "(A)"
	},
};
FeatsList["loss's boon"] = {
	name : "Loss's Boon",
	source : ["WotBS"],
	description : "I gain the ability to cast the Calm Emotions spell on one creature within 60 feet. Charisma is the spellcasting ability for this spell. I must complete a long rest before I can use this benefit again.",
	usages : 1,
	recovery : "long rest",
	spellcastingBonus : {
		name : "once per dawn",
		spellcastingAbility : 6,
		spells : ["calm emotions"],
		selection : ["calm emotions"],
		firstCol : "oncelr"
	},
		spellChanges : {
			"calm emotions" : {
				description : "One creature saves or I suppress either charm/fear effects or hostility.",
				changes : "A creature who receives Loss’s boon gains the ability to cast calm emotions on one creature within 60 feet. Charisma is the spellcasting ability for this spell. The creature must complete a long rest before they can use this benefit again."
			}
		},
};
FeatsList["silverblood vision"] = {
	name : "Silverblood Vision",
	source : ["WotBS"],
	description : "When you finish a long rest, roll a d20 and record the number. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with this foretelling roll. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.",
	usages : 1,
	recovery : "long rest",
};

// New Magic Items
MagicItemsList["bhurisrava's mace"] = {
	name : "Bhurisrava's Mace",
	nameAlt : "Bhurisrava's Mace",
	source : ["WotBS"],
	type : "weapon (mace)",
	rarity : "uncommon",
	description : "This mace is a simple iron shaft. I have a +1 bonus to attack and damage rolls made with this magic mace. I can use an action to touch a creature with the mace and cast Cure Wounds from it. The mace can’t be used this way again until the next dawn.",
	descriptionFull : "This mace is a simple iron shaft. I have a +1 bonus to attack and damage rolls made with this magic mace. I can use an action to touch a creature with the mace and cast Cure Wounds from it. The mace can’t be used this way again until the next dawn.",
	attunement : false,
	usages : 1,
	recovery : "dawn",
	additional : "Healing Touch",
	weight : 3,
	action : [["action", "Healing Touch"]],
		spellcastingBonus : {
		name : "Once per dawn",
		spells : ["cure wounds"],
		selection : ["cure wounds"],
		firstCol : "oncelr"
	},
	weaponsAdd : ["Bhurisrava's Mace"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*bhurisrava's)(?=.*mace).*$/i,
		name : "Bhurisrava's Mace",
		source : ["WotBS"],
		description : "Healing Touch (1/day) ",
		modifiers : [1, 1]
	}
}
MagicItemsList["dream shroud"] = {
	name : "Dream Shroud",
	source : ["WotBS"],
	type : "wondrous item",
	rarity: "uncommon",
	description : "While you wear this shroud (as a belt, sash, or cloak), it alerts you just before you are about to do something that would modify your alignment. Additionally, as a bonus action you can say the command phrase, 'Please don’t let my death be in vain' to cast the Magic Weapon spell from it. The shroud can’t be used this way again until the next dawn.",
	descriptionFull : "This silk sheet displays faded images of old myths of the city of Gate Pass. When worn as a belt, sash, or cloak, this item alerts you when you are about to perform an action or use an item that would modify your alignment before you actually carry it out. Additionally, as a bonus action it allows you to cast the Magic Weapon spell from it by whispering the command phrase, 'Please don’t let my death be in vain.' This special ability cannot be used again until the next dawn.",
	attunement : false,
	usages : 1,
	recovery : "dawn",
	additional : "Dream Shroud",
	action : [["bonus", "Dream Shroud"]],
		spellcastingBonus : {
		name : "Once per dawn",
		spells : ["magic weapon"],
		selection : ["magic weapon"],
		firstCol : "oncelr",
	},	
};
MagicItemsList["ancestry cord"] = {
	name : "Ancestry Cord",
	source : ["WotBS"],
	type : "wondrous item",
	rarity: "uncommon",
	description : "This two-foot-long, red, lacy cord radiates faint divination magic. While wrapped around the hands or wrists of two people at once, it changes color to a darker shade if both people share a common ancestor within three generations, all the way to black if they are siblings.",
};
MagicItemsList["sylvan necklace"] = {
	name : "Sylvan Necklace",
	source : ["WotBS"],
	type : "wondrous item",
	rarity: "uncommon",
	description : "This necklace of ivory leaves radiates faint divination magic. While wearing the necklace, you can speak and understand Sylvan but cannot speak or understand any other languages.",
	languageProfs : ["Only Sylvan"],
};

// New Spells
SpellsList["cancel"] = {
	name : "Cancel",
	classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	source : ["WotBS", 36],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Break concentration (bonus) / stop spell being cast (reaction) within 60 ft; make DC 10+SL spellcasting ability check if above the spell slot lvl used",
	descriptionFull : "You form a sphere of antimagic in your hand. As a bonus action, you can throw the sphere at a creature within 60 feet of you that you think is concentrating on a spell, or you can use your reaction to throw it at a creature within 60 feet of you that you see casting a spell. If the creature is casting or concentrating on a spell of 2nd level or lower, its spell fails and has no effect. If it is casting a spell of 3rd level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect." + "\n   " + "At Higher Level. When you cast this spell using a spell slot of 3rd level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
};
SpellsList["duelist’s etiquette"] = {
	name : "Duelist’s Etiquette",
	classes : ["cleric", "sorcerer", "wizard"],
	source : ["WotBS", 37],
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
SpellsList["like lightning"] = {
	name : "Like Lightning",
	classes : ["sorcerer", "wizard"],
	source : ["WotBS", 38],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "100-ft line",
	components : "V,S,M",
	compMaterial : "A bit of fur and a rod of amber, crystal, or glass",
	duration : "Instantaneous",
	save : "Dex",
	description : "Transform into 100-ft long 5-ft wide all 8d6+1d6/SL Lightn. dmg; save halves; unattended flammable obj ignite",
	descriptionFull : "Choose a point you can see within range. You transform your body into a 5-foot-wide stroke of lightning from your current position to that point and transform back into your original form at the destination. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one." + "\n   " + "The lightning ignites flammable objects in the area that aren't being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot above 5th."
};
SpellsList["stand the heat"] = {
	name : "Stand the Heat",
	classes : ["sorcerer", "wizard", "bard", "cleric", "druid", "paladin", "ranger"],
	source : ["WotBS", 27],
	ritual : false, 
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
        compMaterial : "ten gold coins which have sat in a fire for at least one hour",
	duration : "24 h",
	description : "1+1/SL willing creature & equipment comfortable up to 500 degrees. If afire, extinguish as bonus action",
	descriptionFull : "You touch a willing creature, and the creature and all equipment it carries suffer no harm from being in extreme heat. It can exist comfortably in temperatures as high as 500 degrees Fahrenheit. This protection is sufficient to endure the oven-like heat of a forest fire, though neither the creature nor its equipment is protected against fire damage." + "\n   " + "If the affected creature catches fire, it can put the flames out with a bonus action." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be touching you or another of the affected creatures."
};
SpellsList["storm shield"] = {
	name : "Storm Shield",
	classes : ["druid", "sorcerer", "wizard"],
	source : ["WotBS", 38],
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
