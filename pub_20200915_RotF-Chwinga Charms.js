var iFileName = "pub_20200915_RotF-Chwinga Charms.js";
RequiredSheetVersion(13);
// This file adds the Chwinga Charms from 'Icewind Dale: Rime of the Frostmaiden' to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets

/* NOTE: 
>>> Unofficial document! This script should be removed once the official script is released to prevent conflict <<<
>>> Tested for [Printer Friendly] version ONLY! <<< */

// Define the source
SourceList.I={
	name : "Icewind Dale: Rime of the Frostmaiden",
	abbreviation : "RoTF",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/icewind-dale-rime-frostmaiden",
	date : "2020/09/15"
};

// Add Chwinga Charms
MagicItemsList["chwinga charm"] = {
		name : "Chwinga Charm",
		source : ["RoTF"],
		type : "wondrous item",
		rarity : "rare",
		descriptionFull : "This tiny object looks like a snowflake. Different types of chwinga charms exist, each with a different effect.",
		allowDuplicates : true,
		choices : ["Animal Conjuring", "Biting Cold", "Bounty", "Cold Resistance", "Heroism", "Snowball Strike", "The Ice Troll", "The Snow Walker", "The Traveler's Haven", "Vitality"],
		"animal conjuring" : {
			name : "Chwinga Charm of Animal Conjuring",
			description : "This tiny object looks like a snowflake. As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
			name : "1 charge",
			spells : ["conjure animals"],
			selection : ["conjure animals"],
			firstCol : "1",
			}],
			action : [["action", ""]]
		},
		"biting cold" : {
			name : "Chwinga Charm of Biting Cold",
			description : "This tiny object looks like a snowflake. As a bonus action, I can can expend 1 of the charm's charges to wreathe my weapon attacks with biting cold for 1 minute. Until this effect ends, I deal an extra 1d6 cold damage when I hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			action : [["bonus action", ""]]
		},
		"bounty" : {
			name : "Chwinga Charm of Bounty",
			description : "This tiny object looks like a snowflake. As an action, I can can expend 1 of the charm's charges to cast the Create Food And Water spell, requiring no components. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
			name : "1 charge",
			spells : ["create food and water"],
			selection : ["create food and water"],
			firstCol : "1",
			}],
			action : [["action", ""]]
		},
		"cold resistance" : {
			name : "Chwinga Charm of Cold Resistance",
			description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself resistance to cold damage for 24 hours.",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		},
		"heroism" : {
			name : "Chwinga Charm of Heroism",
			description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself the benefit of a Potion of Heroism. I gain 10 temporary hit points that last for 1 hour and am under the effect of the Bless spell (no concentration required).",
			usages : 1,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
			name : "once",
			spells : ["bless"],
			selection : ["bless"],
			firstCol : "1",
			}],
			spellChanges : {
			"bless" : {
				time : "1 a",
				range : "Self",
				components : "",
				compMaterial : "",
				duration : "1 hour",
				description : "I can add 1d4 on every attack roll or saving throw during the duration",
				changes : "My Charm of Heroism gives me the effect of the Bless spell (no concentration required) for one hour."
				}
			},
			action : [["action", ""]]
		},
		"snowball strike" : {
			name : "Chwinga Charm of Snowball Strike",
			description : "As a bonus action, I can can expend 1 of the charm's charges to create a magical snowball in my hand and throw it. The snowball is a magic ranged weapon , has a 20/60 range, deals 1d4 cold damage, and scores a critical hit on a roll of 19 or 20. On a critical hit, the target is blinded until the end of its next turn",
			usages : 5,
			recovery : "never",
			action : [["bonus action", ""]]
		},
		"the ice troll" : {
			name : "Chwinga Charm of The Ice Troll",
			description : "This tiny object looks like a snowflake. As a reaction when I take cold damage, I can expend the charm to reduce the damage to 0. I regain a number of hit points equal to half the cold damage I would have taken.",
			usages : 1,
			recovery : "never",
			action : [["reaction", "Chwinga Charm (cold damage)"]]
		},
		"the snow walker" : {
			name : "Chwinga Charm of The Snow Walker",
			description : "As an action, I can expend 1 of the charm's charges to gain these 24 hour benefits: I can see 60 ft through areas heavily obscured by snow, I am immune to the effects of extreme cold (described in DMG), and I and my allies within 15 feet of me ignore snow/ice difficult terrain. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			action : [["action", ""]]
		},
		"the traveler's haven" : {
			name : "Chwinga Charm of The Traveler's Haven",
			description : "This tiny object looks like a snowflake. As an action, I can expend 1 of the charm's charges to cast the Leomund's Tiny Hut spell, no components required. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
			name : "1 charge",
			spells : ["leomund's tiny hut"],
			selection : ["leomund's tiny hut"],
			firstCol : "1",
			}],
		},
		"vitality" : {
			name : "Chwinga Charm of Vitality",
			description : "As an action, I can can expend the charm to give myself the benefit of a Potion of Vitality. I remove any exhaustion I am suffering and am cured of any disease or poison affecting me. For the next 24 hours, I regain the maximum number of hit points for any Hit Die I spend.",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		}
	};
