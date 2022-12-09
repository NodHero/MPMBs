var iFileName = "Sword of Zariel.js";
RequiredSheetVersion("13.1.3");

// Add Magic Items missing from official sources
MagicItemsList["sword of zariel"] = { // DiA
	name : "Sword of Zariel",
	source : ["DiA", 225],
	type : "weapon (longsword)",
	rarity : "artifact",
	storyItemAL : true,
	languageProfs : ["[Celestial]"],
	dmgres : ["Necrotic", "Radiant"],
	scoresOverride : [0, 0, 0, 0, 0, 20],
	speed : { fly : { spd : "fixed90", enc : "fixed80" } },
	vision : [["Truesight", 60]],
	advantages : [["Insight", true]],
	vision : [["Adv. on Insight checks", 0]],
	action : [["bonus action", " (spread/dim light)"]],
	description : "The sword sheds bright light in a 5-ft radius and dim light for an additional 5 feet. Fiends have disadvantage on attack rolls made within the bright light, even if they can't see it. You can intensify the sword's light as a bonus action, causing it to shed bright light and dim light each for a 15-ft radius instead. (See Notes)",
	descriptionFull : "This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, it gives off a faint glow and hum. The weapon chooses who can attune to it and who can't. It desires a wielder who embodies bravery and heroism.\n   "+
	toUni("Attunement") + ".The sword allows you to attune to it immediately, without having to take a short rest. The first time you attune to the sword, you are transformed into a heavenly, idealized version of yourself, blessed with otherworldly beauty and a touch of heaven in your heart. Neither magic nor divine intervention can reverse this transformation. Your alignment becomes lawful good, and you gain the following traits:\n \u2022  " + toUni("Angelic Language") + ". You can speak, read, and write Celestial.\n \u2022  " + toUni("Celestial Resistance") + ". You have resistance to necrotic and radiant damage.\n \u2022  " + toUni("Divine Presence") + ". Your Charisma score becomes 20, unless it is already 20 or higher.\n \u2022  " + toUni("Feathered Wings") + ". You sprout a beautiful pair of feathered wings that grant you a flying speed of 90 feet and the ability to hover. If you already have a different kind of wings, these new wings replace the old ones, which fall off.\n \u2022  " + toUni("Truesight") + ". Your eyes become luminous pools of silver. You can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, perceive the original form of a shapechanger or a creature that is transformed by magic, and see into the Ethereal Plane, all within a range of 60 feet.\n \u2022  " + toUni("New Personality") + ". You gain new personality traits, determined by rolling once on each of the following tables. These traits override any conflicting personality trait, ideal, bond, or flaw.\n\n"+
	toUni("d8\tPersonality Trait")+
	"\n 1\tI treat all beings, even enemies, with respect."+
	"\n 2\tI won't tell a lie."+
	"\n 3\tI enjoy sharing my philosophical worldview and experiences with others."+
	"\n 4\tI cut right to the chase in every conversation."+
	"\n 5\tI often quote (or misquote) religious texts."+
	"\n 6\tI anger quickly when I witness cruelty or injustice."+
	"\n 7\tMy praise and trust are earned and never given freely."+
	"\n 8\tI like everything clean and organized.\n\n"+
	toUni("d6\tIdeal")+
	"\n 1\tCharity. I always help those in need. (Good)"+
	"\n 2\tFaith. I choose to follow the tenets of a particular lawful good deity to the letter. (Lawful)"+
	"\n 3\tResponsibility. It is the duty of the strong to protect the weak. (Lawful)"+
	"\n 4\tRespect. All people deserve to be treated with dignity. (Good)"+
	"\n 5\tHonor. The way I conduct myself determines my reward in the afterlife. (Lawful)"+
	"\n 6\tRedemption. All creatures are capable of change for the better. (Good)\n\n"+
	toUni("d6\tBond")+
	"\n 1\tI have a favorite religious hymn that I constantly hum."+
	"\n 2\tI must keep a written record of my beliefs and the sins that I witness. When finished, this book will be my gift to the multiverse."+
	"\n 3\tI have cherished memories of Idyllglen, though I've only seen this bucolic town in dreams."+
	"\n 4\tI would die for those who fight beside me, regardless of their faults."+
	"\n 5\tI seek to honor the angel Zariel by destroying fiends and other evildoers wherever I find them."+
	"\n 6\tThe Sword of Zariel has chosen me. I shall not fail to wield it justly.\n\n"+
	toUni("d6\tFlaw")+
	"\n 1\tI am too quick to judge others."+
	"\n 2\tI offer forgiveness too readily."+
	"\n 3\tI will sacrifice innocent lives for the greater good."+
	"\n 4\tFlaw? What flaw? I am flawless. Utter perfection!"+
	"\n 5\tI allow nothing to stand in the way of my crusade to eradicate evil from the multiverse."+
	"\n 6\tI ignore those who do not support my plans, for my calling is higher than all others.\n\n"+
	toUni("Holy Light") + ".The sword sheds bright light in a 5-foot radius and dim light for an additional 5 feet. Fiends find the sword's light disconcerting and painful, even if they can't see it, and have disadvantage on attack rolls made within the weapon's radius of bright light.\n   As a bonus action, you can intensify the sword's light, causing it to shed bright light in a 15-foot radius and dim light for an additional 15 feet, or reduce its glow to its normal intensity.\n   "+
	toUni("Random Properties") + ".The sword has 2 minor minor beneficial properties.\n   "+
	toUni("Searing Radiance") + ".The sword deals an extra 9 (2d8) radiant damage to any creature it hits, or 16 (3d10) radiant damage if you're wielding the weapon with two hands. An evil creature that takes this radiant damage must succeed on a DC 17 Constitution saving throw or be blinded until the end of its next turn.\n   "+
	toUni("Sentience") + ".The Sword of Zariel is a sentient, lawful good item with an Intelligence of 10, a Wisdom of 20, and a Charisma of 18. It has hearing and normal vision out to a range of 30 feet.\n   The sword communicates by transmitting emotion to the creature carrying or wielding it.\n   "+
	toUni("Truth Seer") + ".While holding the sword, you gain advantage on all Wisdom (Insight) checks.\n   "+
	toUni("Destroying the Sword") + ".\n   Zariel can destroy the sword simply by grasping it. She couldn't bring herself to do so when she was an angel, but as an archdevil she has no compunction about ridding the multiverse of the weapon. The sword is also destroyed if it's used to shatter the Companion (see \"Shattering the Companion\"), unless the blade is wielded by an angel of challenge rating 15 or higher, or a good-aligned cleric or paladin of at least 10th level.\n   If Zariel is killed for good (that is, if she dies in the Nine Hells), the sword becomes no harder to destroy than a normal longsword.",
	attunement : true,
	prerequisite : "Requires attunement by a creature the sword deems worthy",
	weight : 3,
	weaponsAdd : ["Sword of Zariel"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*sword)(?=.*zariel).*$/i,
		name : "Sword of Zariel",
		source : ["DiA", 225],
		description : "+2d8 radiant or Versatile (1d10 + 3d10 radiant), evil DC 17 Con save or blinded until end of its next turn;",
	},
	toNotesPage : [{
    name : "Attunement and Personality",
    note : desc([
	"This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, it gives off a faint glow and hum. The weapon chooses who can attune to it and who can't. It desires a wielder who embodies bravery and heroism.\n",
	"Attunement.", 
	"The sword allows you to attune to it immediately, without having to take a short rest. The first time you attune to the sword, you are transformed into a heavenly, idealized version of yourself, blessed with otherworldly beauty and a touch of heaven in your heart. Neither magic nor divine intervention can reverse this transformation. Your alignment becomes lawful good, and you gain new personality traits, determined by rolling once on each of the tables. These traits override any conflicting personality trait, ideal, bond, or flaw.",
	"d8\tPersonality Trait",
	"1\tI treat all beings, even enemies, with respect.",
	"2\tI won't tell a lie.",
	"3\tI enjoy sharing my philosophical worldview/experiences with others.",
	"4\tI cut right to the chase in every conversation.",
	"5\tI often quote (or misquote) religious texts.",
	"6\tI anger quickly when I witness cruelty or injustice.",
	"7\tMy praise and trust are earned and never given freely.",
	"8\tI like everything clean and organized.\n",
	"d6\tIdeal",
	"1\tCharity. I always help those in need. (Good)",
	"2\tFaith. I choose to follow the tenets of a particular lawful good deity", 
	"\tto the letter. (Lawful)",
	"3\tResponsibility. It is the duty of the strong to protect the weak. (Lawful)",
	"4\tRespect. All people deserve to be treated with dignity. (Good)",
	"5\tHonor. The way I conduct myself determines my reward in the", 
	"\tafterlife. (Lawful)",
	"6\tRedemption. All beings are capable of change for the better. (Good)\n",
	"d6\tBond",
	"1\tI have a favorite religious hymn that I constantly hum.",
	"2\tI must keep a written record of my beliefs and the sins that I witness.", 
	"\tWhen finished, this book will be my gift to the multiverse.",
	"3\tI have cherished memories of Idyllglen, though I've only seen this", 
	"\tbucolic town in dreams.",
	"4\tI would die for those who fight beside me, regardless of their faults.",
	"5\tI seek to honor the angel Zariel by destroying fiends and other", 
	"\tevildoers wherever I find them.",
	"6\tThe Sword of Zariel has chosen me. I shall not fail to wield it justly.\n",
	"d6\tFlaw",
	"1\tI am too quick to judge others.",
	"2\tI offer forgiveness too readily.",
	"3\tI will sacrifice innocent lives for the greater good.",
	"4\tFlaw? What flaw? I am flawless. Utter perfection!",
	"5\tI allow nothing to stand in the way of my crusade to eradicate evil",
	"\tfrom the multiverse.",
	"6\tI ignore those who do not support my plans, for my calling is higher",
	"\tthan all others.\n",
	"Sentience.",
	"The Sword of Zariel is a sentient, lawful good item with an Intelligence of 10, a Wisdom of 20, and a Charisma of 18. It has hearing and normal vision out to a range of 30 feet. The sword communicates by transmitting emotion to the creature carrying or wielding it.\n",
	])}, {
    name : "Benefits and Properties",
    note : desc([
	"While you are attuned to the sword, you gain the following benefits:",
	"\u2022 Angelic Language. You can speak, read, and write Celestial.",
	"\u2022 Celestial Resistance. You have resistance to necrotic and radiant damage.",
	"\u2022 Divine Presence. Your Charisma score becomes 20, unless it is already 20+.",
	"\u2022 Feathered Wings. You sprout a beautiful pair of feathered wings that grant\n     you a flying speed of 90 feet and the ability to hover. If you already have a\n     different kind of wings, these new wings replace the old ones, which fall off.",
	"\u2022 Truesight. Your eyes become luminous pools of silver. You can see in normal\n     and magical darkness, see invisible creatures and objects, automatically detect\n     visual illusions and succeed on saving throws against them, perceive the\n     original form of a shapechanger or a creature that is transformed by magic,\n     and see into the Ethereal Plane, all within a range of 60 feet.",
	"\u2022 Truth Seer. While holding the sword, you gain advantage on all Insight checks.\n",
	"Properties. The Sword of Zariel has the following properties:",
	"\u2022 Random Properties. The sword has 2 minor beneficial properties. (DMG 219)",
	"\u2022 Holy Light. The sword sheds bright light in a 5-foot radius and dim light for an\n     additional 5 feet. Fiends find the sword's light disconcerting and painful, even\n     if they can't see it, and have disadvantage on attack rolls made within the\n     weapon's radius of bright light. As a bonus action, you can intensify the\n     sword's light, causing it to shed bright light in a 15-foot radius and dim light\n     for an additional 15 feet, or reduce its glow to its normal intensity.",
	"\u2022 Searing Radiance. The sword deals an extra 2d8 radiant damage to any\n     creature it hits, or 3d10 radiant damage if you're wielding the weapon with\n     two hands. An evil creature that takes this radiant damage must succeed on a\n     DC 17 Constitution saving throw or be blinded until the end of its next turn.\n",
	"Destroying the Sword",
	"Zariel can destroy the sword simply by grasping it. She couldn't bring herself to do so when she was an angel, but as an archdevil she has no compunction about ridding the multiverse of the weapon. The sword is also destroyed if it's used to shatter the Companion (see \"Shattering the Companion\" (DiA 154)), unless the blade is wielded by an angel of challenge rating 15 or higher, or a good-aligned cleric or paladin of at least 10th level.\n   If Zariel is killed for good (that is, if she dies in the Nine Hells), the sword becomes no harder to destroy than a normal longsword.\n\n",
	]) + sentientItemConflictTxt
	}]
};
