var iFileName = "Weapons - Nod's Notebook to Hardly Anything [Nod].js"; 
RequiredSheetVersion(13);

SourceList["NN:W"] = {
	name : "Weapons - Nod's Notebook to Hardly Anything [Nod]",
	abbreviation : "NN:W",
	group : "Nod's Homebrew",
	date : "2022/11/13"
};

// Add Simple Melee Weapons
WeaponsList["boathook"] = {
	baseWeapon : "spear",
	regExpSearch : /boathook/i,
	name : "Boathook",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, versatile (1d8), tripping",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["crescent"] = {
	baseWeapon : "sickle",
	regExpSearch : /crescent/i,
	name : "Crescent",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "Slash/Pierc"],
	range : "Melee",
	weight : 1,
	description : "Finesse, light, tripping",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["loop-stick"] = {
	baseWeapon : "club",
	regExpSearch : /loop-stick/i,
	name : "Loop-stick",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "Melee, 10/30 ft",
	weight : 2,
	description : "Finesse, light, thrown",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["scythe"] = {
	baseWeapon : "sickle",
	regExpSearch : /scythe/i,
	name : "Scythe",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 10,
	description : "Heavy, reach, two-handed, disadv. to attack within 5 ft",
	special : true,
	abilitytodamage : true
};
WeaponsList["throwing stick"] = {
	baseWeapon : "club",
	regExpSearch : /^(?=.*throwing)(?=.*stick).*$/i,
	name : "Throwing stick",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 8, "bludgeoning"],
	range : "Melee, 10/30 ft",
	weight : 3,
	description : "Thrown",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["two-staff"] = {
	baseWeapon : "quarterstaff",
	regExpSearch : /two-staff/i,
	name : "Two-staff",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "Reach, versatile (2d4); ",
	monkweapon : true,
	abilitytodamage : true
};

// Add Simple Ranged Weapons
WeaponsList["boomerang"] = {
	baseWeapon : "dart",
	regExpSearch : /boomerang/i,
	name : "Boomerang",
	source : [["NN:W"]],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "60/120 ft",
	weight : 2,
	description : "Thrown, return",
	abilitytodamage : true
};
WeaponsList["cane-sling"] = {
	baseWeapon : "sling",
	regExpSearch : /cane-sling/i,
	name : "Cane-sling",
	source : [["NN:W", 66]],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 6, "bludgeoning"],
	range : "80/320 ft",
	weight : 2,
	description : "Ammunition, two-handed",
	abilitytodamage : true,
	ammo : "bullet"
};
WeaponsList["repeating lightbow"] = {
	baseWeapon : "light crossbow",
	regExpSearch : /^(?=.*(repeating))(?=.*lightbow).*$/i,
	name : "Repeating Lightbow",
	source : ["NN:W"],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 8, "piercing"],
	range : "40/60 ft",
	weight : 5,
	description : "Ammunition, two-handed, repeating (6)",
	abilitytodamage : true,
	ammo: "bolt"
};
WeaponsList["throwing knife"] = {
	baseWeapon : "dart",
	regExpSearch : /^(?=.*throwing)(?=.*knife).*$/i,
	name : "Throwing Knife",
	source : [["NN:W", 66]],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "20/60 ft",
	weight : 0.25,
	description : "Finesse, light, thrown",
	abilitytodamage : true
};

// Add Martial Melee Weapons
WeaponsList["bill"] = {
	baseWeapon : "pike",
	regExpSearch : /bill/i,
	name : "Bill",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "Melee",
	weight : 10,
	description : "Heavy, reach, two-handed, disadv. to attack within 5 ft, tripping",
	special : true,
	abilitytodamage : true
};
WeaponsList["broadsword"] = {
	baseWeapon : "longsword",
	regExpSearch : /broadsword/i,
	name : "Broadsword",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "Slash/Pierc"],
	range : "Melee",
	weight : 6,
	description : "Heavy, disadv. if using with Str less than 18",
	special : true,
	abilitytodamage : true
};
WeaponsList["chain-dagger"] = {
	baseWeapon : "whip",
	regExpSearch : /chain-dagger/i,
	name : "Chain-dagger",
	source : [["NN:W"]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "Bludg/Pierc"],
	range : "Melee",
	weight : 3,
	description : "Finesse, reach, versatile (1d6)",
	abilitytodamage : true
};
WeaponsList["chain-sickle"] = {
	baseWeapon : "whip",
	regExpSearch : /chain-sickle/i,
	name : "Chain-sickle",
	source : [["NN:W"]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "Slash/Bludg"],
	range : "Melee",
	weight : 3,
	description : "Finesse, reach, versatile (1d6)",
	abilitytodamage : true
};
WeaponsList["cutlass"] = {
	baseWeapon : "longsword",
	regExpSearch : /cutlass/i,
	name : "Cutlass",
	source : [["NN:W", 66]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 2,
	description : "Finesse",
	abilitytodamage : true
};
WeaponsList["double-axe"] = {
	regExpSearch : /double-axe/i,
	baseWeapon : "battleaxe",
	name : "Double-axe",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
WeaponsList["double-flail"] = {
	regExpSearch : /double-flail/i,
	baseWeapon : "flail",
	name : "Double-flail",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "bludgeoning"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
WeaponsList["double-sickle"] = {
	regExpSearch : /double-sickle/i,
	baseWeapon : "sickle",
	name : "Double-sickle",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
WeaponsList["double-spear"] = {
	baseWeapon : "spear",
	regExpSearch : /double-spear/i,
	name : "Double-spear",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "piercing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
WeaponsList["double-trident"] = {
	regExpSearch : /double-trident/i,
	baseWeapon : "trident",
	name : "Double-trident",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "piercing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};
WeaponsList["fauchard"] = {
	baseWeapon : "glaive",
	regExpSearch : /fauchard/i,
	name : "fauchard",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "Slash/Pierc"],
	range : "Melee",
	weight : 6,
	description : "Heavy, reach, two-handed",
	abilitytodamage : true
};
WeaponsList["fullaxe"] = {
	baseWeapon : "greataxe",
	regExpSearch : /fullaxe/i,
	name : "Fullaxe",
	source : [["NN:W", 66]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "slashing"],
	range : "Melee",
	weight : 7,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
WeaponsList["fullflail"] = {
	baseWeapon : "flail",
	regExpSearch : /fullflail/i,
	name : "Fullflail",
	source : [["NN:W", 66]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 12, "bludgeoning"],
	range : "Melee",
	weight : 7,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
WeaponsList["fullstar"] = {
	baseWeapon : "morningstar",
	regExpSearch : /fullstar/i,
	name : "Fullstar",
	source : [["NN:W", 66]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 12, "piercing"],
	range : "Melee",
	weight : 7,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
WeaponsList["fullsword"] = {
	baseWeapon : "greatsword",
	regExpSearch : /fullsword/i,
	name : "Fullsword",
	source : [["NN:W", 66]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 12, "slashing"],
	range : "Melee",
	weight : 7,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
WeaponsList["keensword"] = {
	regExpSearch : /keensword/i,
	name : "Keensword",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, versatile (1d10)",
	abilitytodamage : true
};
WeaponsList["spiked chain"] = {
	regExpSearch : /^(?=.*(spiked))(?=.*chain).*$/i,
	baseWeapon : "flail",
	name : "Spiked chain",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "bludgeoning"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4 piercing",
	abilitytodamage : true
};

// Add Martial Ranged Weapons
WeaponsList["catch-cord"] = {
	name : "Catch-cord",
	source : ["NN:W"],
	regExpSearch : /catch-cord/i,
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : ["\u2015", "", "Restrained"],
	range : "5/30 ft",
	weight : 2,
	description : "Finesse, light, thrown, up to medium creature restrained (DC 10 Str check)",
	tooltip : "Special: A Medium or smaller creature hit by a catch-cord is restrained until it is freed. A catch-cord has no effect on creatures that are formless, or creatures that are Large or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the catch-cord (AC 10) also frees the creature without harming it, ending the effect and destroying the catch-cord.",
	special : true,
	abilitytodamage : false
};
WeaponsList["repeating handbow"] = {
	baseWeapon : "hand crossbow",
	regExpSearch : /^(?=.*(repeating))(?=.*handbow).*$/i,
	name : "Repeating Handbow",
	source : ["NN:W"],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "15/60 ft",
	weight : 3,
	description : "Ammunition, light, repeating (4)",
	abilitytodamage : true,
	ammo: "bolt"
};
WeaponsList["repeating heavybow"] = {
	baseWeapon : "heavy crossbow",
	regExpSearch : /^(?=.*(repeating))(?=.*heavybow).*$/i,
	name : "Repeating Heavybow",
	source : ["NN:W"],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "50/200 ft",
	weight : 18,
	description : "Ammunition, heavy, repeating (8)",
	abilitytodamage : true,
	ammo: "bolt"
};
WeaponsList["twirl-hoop"] = {
	baseWeapon : "dart",
	regExpSearch : /twirl-hoop/i,
	name : "Twirl-hoop",
	source : ["NN:W"],
	list : "ranged",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "60/120 ft",
	weight : 3,
	description : "Finesse, thrown, return",
	abilitytodamage : true,
};
WeaponsList["twirl-ring"] = {
	baseWeapon : "dart",
	regExpSearch : /twirl-ring/i,
	name : "Twirl-ring",
	source : ["NN:W"],
	list : "ranged",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "slashing"],
	range : "20/60 ft",
	weight : 2,
	description : "Finesse, light, thrown, return",
	abilitytodamage : true,
};

// Add Goblin Weapons
WeaponsList["dogslicer"] = {
	baseWeapon : "scimitar",
	regExpSearch : /dogslicer/i,
	name : "Dogslicer",
	nameAlt : "Goblin Blade",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light",
	abilitytodamage : true,
	monkweapon : true,
};
WeaponsList["horsechopper"] = {
	baseWeapon : "halberd",
	regExpSearch : /horsechopper/i,
	name : "Horsechopper",
	nameAlt : "Goblin Polearm",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, reach, two-handed",
	abilitytodamage : true,
};
WeaponsList["kneekraker"] = {
	baseWeapon : "club",
	regExpSearch : /kneekraker/i,
	name : "Kneekraker",
	source : ["NN:W"],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 1,
	description : "Finesse, light, (1/2 damage tripping)",
	monkweapon : true,
	abilitytodamage : true
};