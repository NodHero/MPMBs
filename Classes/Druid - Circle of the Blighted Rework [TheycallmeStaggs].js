/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Druid - Circle of the Blighted Rework
	Effect:     This file adds the Circle of the Blighted Reworked as a druid subclass
	File link:  https://drive.google.com/file/d/1DbfnzVQ8mayFQhNCcygKk95gjwcmxIVE/view
	Author:     u/TheycallmeStaggs
	Code by:	u/Nod_Hero
	Date:		2023-04-01 (sheet v13)
*/
	
var iFileName = "Druid - Circle of Blight Revamped [TheycallmeStaggs].js"; 
RequiredSheetVersion(13);

SourceList["CotBR"] = {
  name: "Druid - Circle of Blight Revamped",
  abbreviation: "CotBR",
  group: "Third Party",
  url: "https://www.reddit.com/r/UnearthedArcana/comments/105horn/druid_circle_of_the_blighted_revamped/",
  date: "2023-01-07",
};

AddSubClass("druid", "circle of blight", {
	regExpSearch: /^(?=.*(druid|shaman))(?=.*blight).*$/i,
	subname: "Circle of Blight",
	source: ["CotBR", 171],
	features: {
	subclassfeature2: {
		name: "Invoke Blight",
		source: ["CotBR", 1],
		minlevel: 2,
		usages: 1,
		recovery: "short rest",
		altResource : "Wild Shape",
		description: desc([
		"As a bonus action, I can Invoke Blight on a non-Undead/Construct enemy within 30 ft",
		"For one minute, their speed is reduced by 10 ft, and they take extra necrotic damage the",
		"first time they take damage on a turn. I can Invoke Blight on one creature at a time.",
		"Once used, I must complete a short or long rest, or use a Wild Shape to Invoke Blight again.", ]),
		additional : levels.map(function (n) { return n < 2 ? "" : '1d' + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " necrotic dmg"; }),
		action: [["bonus action", ""]],
	},
	"subclassfeature2.1": {
		name: "Shelter from Decay",
		source: ["CotBR", 1],
		minlevel: 2,
		description: desc([
		"As an action, I can touch a creature and end poisoned condition or cure disease",
		"It also gains 5 + my druid level in temporary hit points", ]),
		usages : "Wisdom modifier per ",
		usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
		recovery : "long rest",
		additional : levels.map(function (n) { return n < 2 ? "" : Math.floor(n+5) + " THP"; }),
		action: [["action", ""]],
	},
	subclassfeature6: {
		name: "Corrupted Form",
		source: ["CotBR", 1],
		minlevel: 6,
		description: desc([
		"My body shows the effects of exposure to blight. I gain necrotic and poison resistance and",
		"a creature with THP from my Shelter from Decay also gains necrotic and poison resistance",
		"I gain proficiency in Intimidation and can add my Wisdom modifier to the result.", ]),
		skills: ["Intimidation"],
		addMod : [{ type : "skill", field : "intimidation", mod : "max(Wis|0)", text : "I add my Wisdom mod to Intimidation." }],
		dmgres : ["Necrotic", "Poison"],
	},
	subclassfeature10: {
		name: "Superior Blight",
		source: ["CotBR", 1],
		minlevel: 10,
		description: desc([
		"I can chose one of the following additional effects when I Invoke Blight:",
		"\u2022 Festering Blight: The blighted creature takes extra necrotic damage equal to my Wis mod",
		"\u2022 Spreading Blight: If the blighted creature is reduced to 0 hp, I can move the invoked blight",
		"     to another creature within 30 ft of the original creature, without expending a use",
		"\u2022 Tormenting Blight: Target creature must make a Wisdom save vs my spell save DC or",
		"     become frightened of me while blighted. Successful save = 24 hour Tormenting immunity"
		]),
	},
	subclassfeature14: {
		name: "Plague Eater",
		source: ["CotBR", 1],
		minlevel: 14,
		description: desc([
		"As a reaction to my invoked blight dealing damage, I can choose a creature that is between",
		"1 and half their total hp (myself included) within 30 ft of the damaged creature to regain hp",
		"equal to the damage dealt. I am immune to poison damage and the poisoned condition", ]),
		action: ["reaction", ""],
		savetxt : { immune : ["poison"] }
	},
  },
});
