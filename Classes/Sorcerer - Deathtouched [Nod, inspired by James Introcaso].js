var iFileName = "Sorcerer Origin - Deathtouched.js";
RequiredSheetVersion(13);

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a sorcerer subclass called "Deathtouched", inspired by "Lichtouched – A New Sorcerous Origin" 
			by James Introcaso (https://worldbuilderblog.me/2017/05/18/lichtouched-a-new-sorcerous-origin/)
	Code by:	NodHero
	Completed Date:	2023-09-18
*/

SourceList["SO-DT"] = {
	name : "Sorcerer Origin - Deathtouched",
	abbreviation : "SO-DT",
	group : "Nod's Homebrew",
	url : "https://github.com/NodHero/MPMBs/blob/master/Classes/Sorcerer%20-%20Deathtouched.pdf",
	date : "2023/09/18",
};

AddSubClass("sorcerer", "deathtouched", {
	regExpSearch : /^((?=.*(sorcerer|witch))|(?=.*deathtouched)(?=.*undead)).*$/i,
	subname : "Deathtouched",
	source : [["SO-DT", 1]],
	features : {
		"subclassfeature1" : {
			name : "Withering Spells",
			source : [["SO-DT", 1]],
			minlevel : 1,
			description : desc([
				"I learn Chill Touch and add my Charisma modifier to its damage.",
				"I learn additional spells, which do not count towards the number of spell I can know",
				"Whenever I gain a sorcerer level, I can replace one of these with another of the same level",
				"It must be a necromancy or transmutation spell on the sorcerer, wizard, or warlock spell list"
			]),
			spellcastingBonus : [{
				name : "Withering Spells (cantrip)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Necro", "Trans"],
				level : [0, 0],
				extraspells : ["chill touch"],
				selection : ["chill touch"],				
			}, {
				name : "Withering Spells (1st-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Necro", "Trans"],
				level : [1, 1],
				firstCol : "WS",
				extraspells : ["false life", "inflict wounds"],
				selection : ["false life", "inflict wounds"],
				times : 2
			}, {
				name : "Withering Spells (2nd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Necro", "Trans"],
				level : [2, 2],
				firstCol : "WS",
				extraspells : ["ray of enfeeblement", "wither and bloom"],
				selection : ["ray of enfeeblement", "wither and bloom"],
				times : levels.map(function (n) { return n < 3 ? 0 : 2; })
			}, {
				name : "Withering Spells (3rd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Necro", "Trans"],
				level : [3, 3],
				firstCol : "WS",
				extraspells : ["summon undead", "vampiric touch"],
				selection : ["summon undead", "vampiric touch"],
				times : levels.map(function (n) { return n < 5 ? 0 : 2; })
			}, {
				name : "Withering Spells (4th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Necro", "Trans"],
				level : [4, 4],
				firstCol : "WS",
				extraspells : ["blight", "shadow of moil"],
				selection : ["blight", "shadow of moil"],
				times : levels.map(function (n) { return n < 7 ? 0 : 2; })
			}, {
				name : "Withering Spells (5th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Necro", "Trans"],
				level : [5, 5],
				firstCol : "WS",
				extraspells : ["danse macabre", "enervation"],
				selection : ["danse macabre", "enervation"],
				times : levels.map(function (n) { return n < 9 ? 0 : 2; })
			}],
				calcChanges : { atkCalc : [ function (fields, v, output) {
				if (v.baseWeaponName == 'chill touch') output.extraDmg += What('Cha Mod');
				},
				"I add my Charisma modifier to the damage of my Chill Touch cantrip."],
				}		
		},
		"subclassfeature1.1" : {
			name : "Flesh of Undead",
			source : [["SO-DT", 1]],
			minlevel : 1,
			description : desc([
				"I no longer require food or drink and am resistant to necrotic damage.",
				"I have advantage on saving throws against effects that reduce my hit point maximum."
			]),
			dmgres : ["Necrotic"],
			savetxt : { adv_vs : ["effects that reduce max hp"] }
		},
		"subclassfeature6" : {
			name : "Undeath Conduit",
			source : [["SO-DT", 1]],
			minlevel : 6,
			description : desc([
				"I don't need to breathe and no longer require sleep. I can rest while doing light activity",
				"When a creature I can see dies, I can use my reaction to regain 2 sorcery points.", 
			]),
			action : [["reaction", ""]],
			recovery : "long rest",
			usages : 2,
		},
		"subclassfeature14" : {
			name : "Blood of Undead",
			source : [["SO-DT", 2]],
			minlevel : 14,
			description : desc([
				"I am immune to disease and poison damage. Whenever I deal necrotic damage to a",
				"creature with a spell, that creature cannot regain hit points until the start of my next turn",
			]),
			savetxt : { immune : ["disease", "poison"] },
		},
		"subclassfeature18" : {
		name : "Unlife Conduit",
		source : [["SO-DT", 2]],
		minlevel : 18,
		description : desc([
			"As an action, I spend 5 sorcery points and become ghostly for up to 1 minute (concentration)",
			"I create 60-ft radius aura of fear. All hostiles in this aura must make a Wis save at the start",
			"of their turn or be frightened. A creature that succeeds on the save is immune to my aura",
			"for 24 hours. While transformed, I have fly speed equal to my walking speed, resistance to",
			"acid, fire, lightning, and thunder damage, and bludgeoning, piercing, and slashing damage",
			"from nonmagical weapons. Also, I can move through other creatures and objects as if they", 
			"were difficult terrain. I take 1d10 force damage if I end my turn inside an object"
		]),
		additional : "5 sorcery points",
		action : ["action", ""]
	}
	}
});

/* Sorcerous Origin: Deathtouched
Your innate magic comes from some place of dark energy. Your parents may have been cursed by a powerful undead spellcaster. You could have visited a plane of negative energy. Perhaps you were even once an undead creature yourself. The reason you attuned to necromantic magic may never be clear, but what is obvious is that you can wield this power as easily as any lich.

Withering Magic
When you choose this origin at 1st level, you gain the chill touch cantrip if you don’t already know it. In addition, when you cast and deal damage with chill touch, add your Charisma modifier to the damage roll of the spell.
You learn additional spells when you reach certain levels in this class, as shown on the Withering Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.
Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be a necromancy or transmutation spell from the sorcerer, warlock, or wizard spell list.
Withering Spells
Sorcerer Level	Spell
	1st			false life, inflict wounds
	3rd			ray of enfeeblement, wither and bloom
	5th			summon undead, vampiric touch
	7th			blight, shadow of moil
	9th			danse macabre, enervation

Flesh of Undead
Starting at 1st level, your flesh takes on a dull gray or stark white appearance. You no longer require food or drink and are resistant to necrotic damage. You have advantage on saving throws against effects that reduce your hit point maximum.

Undeath Conduit
Starting at 6th level, your connection to undeath has a profound effect on your body and magic. You don't need to breathe, and you no longer require sleep. To gain the benefits of a long rest, you can spend 8 hours doing light activity.
When a creature you can see dies, you can use your reaction to tap into the energy of that death and regain 2 sorcery points. You can use this feature twice, and you regain any expended uses when you finish a long rest.

Blood of Undead
Starting at 14th level, you are immune to disease and poison. In addition, whenever you deal necrotic damage to a creature with a spell, that creature cannot regain hit points until the start of your next turn.

Unlife Conduit
Beginning at 18th level, you can channel necrotic energy to become ghostly. As an action, you spend 5 sorcery points to draw on this power. For 1 minute, or until you lose your concentration (as if you were casting a concentration spell), you exude an aura of fear to a distance of 60 feet. Each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be frightened until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours. You gain a fly speed equal to your walking speed and you can move through other creatures and objects as if they were difficult terrain. You take 1d10 force damage if you end your turn inside an object. While in this form, you are resistant to bludgeoning, piercing, and slashing damage from nonmagical weapons as well as acid, fire, lightning, and thunder damage.
*/
