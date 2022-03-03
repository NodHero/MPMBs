var iFileName = "Nod's Homebrew - Primaeval Heritage Feats [Nod].js"; 
RequiredSheetVersion(13);

// Feats both found and fabricated

SourceList["NodHB"] = {
	name : "Primaeval Heritage Feats",
	abbreviation : "NodHB",
	group : "Nod's Homebrew",
	date : "2021/11/18"
};

/* Primaeval Heritage
Your heritage carries magic left over from ancient times, granting you the following benefits:
• Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.
• You learn two spells based on your chosen primaeval element. 
	Air - Feather Fall, Levitate
	Earth - Earth Tremor, Maximilian's Earthen Grasp
	Fire - Hellish Rebuke, Flame Blade
	Water - Create or Destroy Water, ‌‌‌‌‌‌‌‌‌​​​​​Blur 
You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.
*/
FeatsList["primaeval air heritage"] = {
    name : "Primaeval Air Heritage",
    source : ["NodHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Feather Fall and Levitate spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Feather Fall",
		spells : ["feather fall"],
		selection : ["feather fall"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Levitate",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Feather Fall and Levitate spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};

FeatsList["primaeval earth heritage"] = {
    name : "Primaeval Earth Heritage",
    source : ["NodHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Earth Tremor",
		spells : ["earth tremor"],
		selection : ["earth tremor"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp",
		spells : ["maximilian's earthen grasp"],
		selection : ["maximilian's earthen grasp"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};

FeatsList["primaeval fire heritage"] = {
    name : "Primaeval Fire Heritage",
    source : ["NodHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Hellish Rebuke",
		spells : ["hellish rebuke"],
		selection : ["hellish rebuke"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Flame Blade",
		spells : ["flame blade"],
		selection : ["flame blade"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Hellish Rebuke and ‌‌‌‌‌‌‌‌‌​​​​​Flame Blade spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};

FeatsList["primaeval water heritage"] = {
    name : "Primaeval Water Heritage",
    source : ["NodHB"],
	descriptionFull : "Your heritage carries magic left over from ancient times, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn the Earth Tremor and ‌‌‌‌‌‌‌‌‌​​​​​Maximilian's Earthen Grasp spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Create or Destroy Water",
		spells : ["create or destroy water"],
		selection : ["create or destroy water"],
		firstCol : "oncelr"
	}, {
		name : "‌‌‌‌‌‌‌‌‌​​​​​Blur",
		spells : ["blur"],
		selection : ["blur"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn the Create or Destroy Water and ‌‌‌‌‌‌‌‌‌​​​​​Blur spells. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};