/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Druid, called "Circle of Hoarfrost"
				Subclass created by NodHero, based on the Circle Wildfire Druid from Tasha's Cauldron of Everything.
				Some spell content taken from Knuckleheads 
				(Link: https://www.dmsguild.com/product/328568/DDAL0013-Knuckleheads--Other-Such-Curiosities-A-Travelers-Guide-to-Icewind-Dale )
	Code by:	NodHero
	Date:		2022-12-01 (sheet v13)
*/

var iFileName = "Druid - Circle of Hoarfrost [Nod].js"; 
RequiredSheetVersion(13);

SourceList["CHF"] = {
	name : "Druid - Circle of Hoarfrost",
	abbreviation : "CHF",
	abbreviationSpellsheet: "HF",
	group : "Nod's Homebrew",
	date : "2022/12/01"
};


AddSubClass("druid", "circle of hoarfrost", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*circle)(?=.*hoar.{0,1}frost).*$/i,
	subname : "Circle of Hoarfrost",
	source : [["CHF", 1]],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : [["CHF", 1]],
			minlevel : 2,
			description: desc ([
				"My link to an arctic spirit infuses me with the ability to cast Ice Barrage and choose certain",
				"spells as druid spells. My Circle of Hoarfrost spells are always prepared, but don't count",
				"against the number of spells I can prepare"
			]),
			calcChanges : {
			spellList : [
			function(spList, spName, spType) {
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["ray of frost", "wall of ice"]);
			},
		]
	},
			spellcastingBonus: {
				name: "Circle Spells",
				spells: ["ice barrage"],
				selection : ["ice barrage"],
			},
			spellcastingExtra: ["cure wounds", "frost fingers", "buffeting eddies", "rime's binding ice", "revivify", "sleet storm", "auroral winds", "ice storm", "cone of cold", "mass cure wounds"]
		},
		"subclassfeature2.1" : {
			name : "Summon Arctic Spirit",
			source : [["CHF", 1]],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of wild shape to summon an arctic spirit within 30 ft",
				"All within 10 ft of where it manifests must make a Dex save or take 2d10 cold damage",
				"It is friendly and obeys my commands; It lasts for 1 hour, until it has 0 HP, or I die",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can always take reactions and move on its turn; It acts on my initiative, after me",
				'It disappears if I summon another; See "Arctic Spirit" on a companion page for its stats',
			]),
			action : [["action", ""], ["bonus action", "Command Arctic Spirit"]],
			creaturesAdd : [["Arctic Spirit", true]],
			creatureOptions : [{
				name : "Arctic Spirit",
				source : [["CHF", 1]],
				size : 4,
				type : "Elemental",
				alignment : "",
				ac : 13,
				hp : 20,
				hd : [],
				speed : "30 ft, fly 30 ft (hover)",
				scores : [10, 14, 14, 13, 15, 11],
				damage_immunities : "cold",
				condition_immunities : "charmed, frightened, grappled, prone, restrained",
				senses : "Darkvision 60 ft",
				passivePerception : 12,
				languages : "understands the languages of its creator",
				challengeRating : "1/2",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Hailstone",
					ability : 5,
					damage : [1, 6, "cold"],
					range : "60 ft",
					description : "Ranged weapon attack",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "druid"
				}, {
					name : "Frigid Teleportation",
					ability : 5,
					damage : [1, 6, "cold"],
					range : "5-ft radius",
					description : "Dex save for all within 5 ft of teleportation origin, success - no damage; See traits",
					dc : true,
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "druid"
				}, {
					name : "Frigid Manifestation",
					ability : 5,
					damage : [2, 6, "cold"],
					range : "10-ft radius",
					description : "Dex save for all within 10 ft where spirit is summoned, success - no damage",
					dc : true,
					abilitytodamage : false,
					useSpellMod : "druid"
				}],
				features : [{
					name : "Creator",
					description : "The spirit obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
				}],
				actions : [{
					name : "Frigid Teleportation",
					description : "The spirit and each willing creature of its creator's choice within 5 ft of it teleport up to 15 ft to unoccupied spaces its creator can see. Then each creature within 5 ft of the space that the spirit left must succeed on a Dexterity saving throw against its creator's spell save DC or take cold damage equal to 1d6 + its proficiency bonus."
				}],
				traits : [{
					name : "Frigid Manifestation",
					description : "The spirit appears in an unoccupied space of its creator's choice that its creator can see within 30 ft. Each creature within 10 ft of the spirit (other than its creator) when it appears must succeed on a Dexterity saving throw against its creator's spell save DC or take 2d6 cold damage."
				}],
				header : "Tundra",
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var drdLvl = classes.known.druid.level;
						var drdLvl5 = 5 * drdLvl;
						HDobj.alt.push(5 + drdLvl5);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + drdLvl + " from five times its creator's druid level (" + drdLvl5 + ")");
					},
					setAltHp : true
				}
			}]
		},
		"subclassfeature6" : {
			name : "Tundral Bond",
			source : [["CHF", 2]],
			minlevel : 6,
			description : desc([
				"While my arctic spirit is present, I can have my spells originate from it (no range 'self')",
				"I can add 1d8 to a single roll of my spells that restore HP. Also, any spell or effect I create",
				"that deals cold damage ignores resistance to cold damage. At 18th level, any spell or effect",
				"I create that deals cold damage treats immunity to cold damage as resistance", 
			])
		},
		"subclassfeature10" : {
			name : "Boreal Lights",
			source : [["CHF", 2]],
			minlevel : 10,
			description : desc([
				"As a reaction when a Small or larger creature dies within 30 ft of me or arctic spirit,",
				"I can have a spectral light erupt in its space that lasts for 1 minute",
				"As a reaction when I see a creature enter the light's space, I can extinguish the light",
				"This heals or deals cold damage to the creature (my choice) equal to 2d10 + my Wis mod"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Polar Succor",
			source : [["CHF", 2]],
			minlevel : 14,
			description : desc([
				"If I drop to 0 HP and don't die, and my arctic spirit is within 120 ft, it can save me",
				"I can have it drop to 0 HP; I then regain half my HP and immediately rise to my feet"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

// Add New Spells
SpellsList["auroral winds"] = {
	name: "Auroral Winds",
	classes: ["druid", "warlock", "wizard"],
	source: ["CHF", 2],
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
SpellsList["buffeting eddies"] = {
	name: "Buffeting Eddies",
	classes: ["bard","cleric","druid","paladin","ranger","sorcerer","warlock","wizard"],
	source: ["CHF", 2],
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
SpellsList["ice barrage"] = {
	name: "Ice Barrage",
	classes: ["druid","sorcerer","warlock","wizard"],
	source: ["CHF", 2],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "90",
	components: "V,S",
	description: "Fling razor ice 2d4 Piercing dmg; shards at same or different targets; CL5:2, CL11:3, CL17:4 shards",
	descriptionCantripDie: "Fling `CD` razor ice shards 2d4 Piercing dmg; shards at same or different targets;",
	descriptionFull: "I conjure razor-sharp shards of frigid ice and fling it at a creature within range.Make a ranged spell attack against the target.On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one shard when I reach higher levels: two shards at 5th level, three shards at 11th level, and four shards at 17th level.I can direct the shards at the same target or at different ones.Make a separate attack roll for each shard."
};
WeaponsList["ice barrage"] = {
	regExpSearch: /^ice(?=.*barrage).*$/i,
	name: "Ice Barrage",
	source: ["CHF", 2],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	description: "Each 2d4 is a separate shard requiring separate rolls",
	abilitytodamage: false,
	SpellsList: "ice barrage",
};