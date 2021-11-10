/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Paladin, called "Oath of Providence"
				This is taken from the 'Xanathar's Lost Notes to Everything Else v2.0' made by Lysa Chen, Will Doyle, James Haeck, James Introcaso, Rich Lescouflair, Shawn Merwin, Cindy Moore, Satine Phoenix, and Ruty Rutenberg (https://www.dmsguild.com/product/228484/)
	Code by:	NodHero
	Date:		2020-04-07 (sheet v13)
*/

var iFileName = "Paladin - Oath of Providence [XLNtEE, transcribed by Nodhero].js"; 
RequiredSheetVersion(13);

SourceList["XLNtEE2"] = {
	name : "Xanathar's Lost Notes to Everything Else v2.0",
	abbreviation : "XLNtEE",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/228484/",
	date : "2018/08/30"
};

AddSubClass( "paladin", "oath of providence", {
	regExpSearch : /^(((?=.*(providence|fated|fate|destined|destiny))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(providence|fated|destined|chosen))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of Providence",
	source : ["XLNtEE", 26],
	spellcastingExtra : ["bless", "divine favor", "aid", "augury", "bestow curse", "clairvoyance", "death ward", "divination", "commune", "legend lore"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Predestination",
			source : ["XLNtEE", 26],
			minlevel : 3,
			description : desc([
				"As a reaction, a creature I can see within 60 ft can make a saving throw with advantage",
				"If it would take half-damage on a success, it takes none, and half-damage on a failure.",
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Kiss of Calamity",
			source : ["XLNtEE", 26],
			minlevel : 3,
			description : desc([
				"As an action, all unfriendly creatures within 30 ft that can see or hear me must make a",
				"Charisma saving throw, gaining disadvantage on all saving throws for 1 min on a failure.",
			]),
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Favor the Bold",
			source : ["XLNtEE", 26],
			minlevel : 7,
			description : desc([
				"I can turn a miss with a weapon attack into a hit. When I use this feature, my target takes",
				"extra radiant damage equal to my Charisma modifier (minimum of 1)",
			]),
			recovery : "long rest",
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Cha Mod').value);",
		},
		"subclassfeature15" : {
			name : "Gift of Foresight",
			source : ["XLNtEE", 26],
			minlevel : 15,
			description : desc([
				"When I finish a short or long rest, I roll a d20 and record the prophetic roll number.",
				"I can replace any attack roll, saving throw, or ability check made by me or a creature I can see",
				"with my prophetic roll. I must choose to do so before the roll, and I can use the roll in this",
				"way only once. When I finish a short or long rest, I lose any unused prophetic roll",
			]),
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature20" : {
			name : "Hand of Fate",
			source : ["XLNtEE", 26],
			minlevel : 20,
			description : desc([
				"For 1 min, I project an aura of dim, silver light in a 10-foot radius.",
				"Whenever an enemy creature starts its turn in my aura, it has disadvantage on attacks and",
				"saving throws, while I and friendly creatures have advantage on attack rolls and saving",
				"throws. When the aura fades away, I regain all expended uses of my Favor the Bold feature.",
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
