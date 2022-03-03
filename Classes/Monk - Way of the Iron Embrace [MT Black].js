/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass and Magic Items
	Effect:		This script adds a subclass for the Monk, called "Way of the Iron Embrace"
				This is taken from the DMs Guild website (https://www.dmsguild.com/product/275382/)
				This subclass is made by M.T. Black
	Code by:	NodHero
	Date:		2019-05-11 (sheet v13.0.8)
	Please support the creator of this content (M.T. Black) and download their materials from the DMs Guild website: https://www.dmsguild.com/browse.php?author=M.T.%20Black
*/

var iFileName = "Monk - Way of the Iron Embrace [MT Black].js";
RequiredSheetVersion("13.0.8");

// Define the source
SourceList["MTB:WotIE"]={
	name : "MT Black: Way of the Iron Embrace",
	abbreviation : "MTB:WotIE",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/275382/",
	date : "2019/05/11"
};

// Add subclass
AddSubClass("monk", "way of the iron embrace", {
	regExpSearch : /^(?=.*iron)(?=.*(embrace))((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Iron Embrace",
	source : ["MTB:WotIE", 3],
	features : {
	"subclassfeature3" : {
		name : "Supple Palms",
		source : ["MTB:WotIE", 3],
		minlevel : 3,
		description : desc([
		"I can use Acrobatics to make a grapple or shove check. While I am grappling a creature,",
		"I can use a bonus action to attempt to shove that creature. When I escape from a grapple,",
		" I can use my reaction to attempt to grapple the creature that held me.",
		]),
		action : [
		["bonus action", "Shove Grappled Creature"], 
		["reaction", "Escape Grapple Reversal"]
		],
		},
	"subclassfeature6" : {
		name : "Crashing Wave",
		source : ["MTB:WotIE", 3],
		minlevel : 6,
		description : desc([
		"When I shove a creature, I can spend up to half my monk level in ki points to increase the",
		"push distance by 10 ft per ki point. The pushed target takes 1d6 bludgeoning damage for",
		"every 20 ft it is pushed and lands prone unless it avoids taking damage from the shove.",
		]),
		additional : levels.map(function(n) {
			return n < 6 ? '' : 'up to ' + Math.floor(n/2) + ' ki points'
		})
	},
	"subclassfeature11" : {
	    name : "Python's Coil",
		extraname : "Ki Feature",
		source : ["MTB:WotIE", 3],
		minlevel : 11,
		description : desc([
		"As an action, I can force a creature I am grappling to succeed on a Constitution save or fall", 
		"unconscious for 1 minute, unless the target takes damage or someone uses an action to",
		"wake it. An undead or immune to charm creature is immune to this effect.", 
		]),
		action : ["action", ""],
		additional : "4 ki points",
		},
	"subclassfeature17" : {
		name : "Giant's Grasp",
		source : ["MTB:WotIE", 1],
		minlevel : 17,
		description : desc([
		"I can grapple or shove a creature up to two sizes larger than me. In addition, creatures",
		"grappled by me are subjected to the restrained condition until the grapple ends."
		]),
	},
	}
});

// add magic items
MagicItemsList["armored gi"] = {
	name : "Armored Gi",
	source : ["MTB:WotIE", 5],
	type : "wondrous",
	rarity : "uncommon",
	attunement : true,
	description : "While wearing this gi, I gain a +1 bonus to AC and saving throws.",
	descriptionFull : "This set of clothing comprises a thick cotton jacket and reinforced trousers. It is usually colored white with aheavy black cotton belt. You gain a +1 bonus to AC and all saving throws while you wear this gi.",
	extraAC : [{name : "Armored Gi", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
	addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Armored Gi, I gain a +1 bonus to all my saving throws." }]
};
MagicItemsList["belt of pankration"] = {
	name : "Belt of Pankration",
	source : ["MTB:WotIE", 5],
	type : "wondrous",
	rarity : "rare",
	attunement : true,
	description : "While wearing this belt, I may use a bonus action to make an unarmed attack against any creature I am grappling, provided I have a free hand.",
	descriptionFull : "This dark leather belt is decorated with plates of patterned brass. While wearing it, you may use a bonus action to make an unarmed attack against any creature you are grappling, provided you have a free hand.",
	action : [["bonus action", "Unarmed Strike (grappled creature)"]]
};
MagicItemsList["gloves of the grappler"] = {
	name : "Gloves of the Grappler",
	source : ["MTB:WotIE", 5],
	type : "wondrous",
	rarity : "uncommon",
	attunement : true,
	description : "While wearing these gloves, I have advantage on grapple checks and my speed is not halved when moving while grappling.",
	descriptionFull : "These fingerless gloves are made of black, hardened leather. While wearing them, you have advantage on your grapple check when you attempt to grapple a creature. In addition, when you move a grappled creature your speed is not halved.",
};
MagicItemsList["Wrestling Oil"] = {
	name : "Wrestling Oil",
	source : ["MTB:WotIE", 5],
	type : "wondrous",
	rarity : "common",
	attunement : false,
	description : "As an action, I can apply one dose of this oil. For one hour afterwards, I have advantage on rolls to escape a grapple.",
	descriptionFull : "This brass cannister has a swirling pattern engraved upon it, and contains 1d4 + 1 doses of a thick, sticky, translucent mixture. As an action, one dose of the oil can be applied to your skin. You then have advantage on any ability check you make to escape a grapple for 1 hour.",
	weight : 0.5,
	usages : "1d4+1",
	recovery : "Never",
	action : [["action", " (apply)"]]
};
