/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Paladin, called "Oath of the Raven"
				This is taken from Fateforge Role-Playing Game Adventurers Core Rulebook
				(https://www.drivethrurpg.com/product/302113/)

	Code by:	PalasX
	Date:		2021-11-21 (sheet v13.0.9)
	Please support the creator of this content (Agate RPG) and download their materials from the DTRPG website: 
	https://www.drivethrurpg.com/browse/pub/5029/Agate-RPG
*/

var iFileName = "Paladin - Oath of the Raven [AgateRPG].js";
RequiredSheetVersion("13.0.8");

SourceList["FF:ACR"] = {
	name : "Fateforge RPG Adventurers Core Rulebook",
	abbreviation : "FF:ACR",
	group : "Third Party",
	url : "https://www.5esrd.com/classes/paladin/paladin-sacred-oaths/oath-of-the-raven/",
	date : "2019/04/01"
};

AddSubClass("paladin", "raven", {
	regExpSearch : /^(?=.*raven|bird|flight|nature|fey)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of the Raven",
	source : ["FF:ACR", 1],
	spellcastingExtra : ["bane", "disguise self", "darkvision", "haste", "nondetection", "confusion", "hallucinatory terrain", "commune", "teleportation circle", "alter self"],
	features : {
		"subclassfeature3" : {
			name : "Shadow Vigilante",
			source : ["FF:ACR", 1],
			minlevel : 3,
			description : "Proficiency in Investigation or Stealth.",
			toNotesPage : [{
				name : "Shadow Vigilante", // feature name or whatever you want
				source : ["FF:ACR", 1],
				popupName : "Shadow Vigilante", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"You gain proficiency with the Investigation or Stealth skill. If you were already proficient in both of these skills, choose one and gain expertise in it."])
			}],
			skills : ["Investigation"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Furtive Aura",
			source : ["FF:ACR", 1],
			minlevel : 3,
			description : "Bonus action to become hidden, force enemies to stop paying attention to you.",
			toNotesPage : [{
				name : "Channel Divinity: Furtive Aura", // feature name or whatever you want
				source : ["FF:ACR", 1],
				popupName : "Channel Divinity: Furtive Aura", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"You can use Channel Divinity to escape others’ notice. As a bonus action, you make your opponents forget about you until the end of your turn. You do not actually become invisible, but your enemies stop paying attention to you and you are considered to be hidden (see the Combat chapter). Creatures who can see invisible get a Wisdom save to resist."])
			}],
			action : [["bonus action", ""]]
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Repel Evil",
			source : ["FF:ACR", 1],
			minlevel : 3,
			description : "Use Action to cause humanoid, fey, fiend to fear within 30 feet for 1 minute, Wisdom save.",
			toNotesPage : [{
				name : "Channel Divinity: Repel Evil", // feature name or whatever you want
				source : ["FF:ACR", 1],
				popupName : "Channel Divinity: Repel Evil", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"You can use your Channel Divinity to cause fear in evil creatures. As an action, you present your holy symbol and each evil enemy humanoid, fey, or fiend of Medium size or less that can see you within 30 feet is frightened of you for 1 minute, Wisdom save to resist. The GM makes the saving throws in secret, and may even pretend to roll for enemies that are not evil."])
			}],
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Redirected Strike",
			source : ["FF:ACR", 1],
			minlevel : 7,
			description : "Use Reaction to force an enemy's missed attack to hit one of your enemy's within 5 feet or original attacker.",
			toNotesPage : [{
				name : "Redirected Strike", // feature name or whatever you want
				source : ["FF:ACR", 1],
				popupName : "Redirected Strike", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"When a creature misses a melee attack against you, you can use your reaction to redirect this attack against another creature of your choice within 5 feet of the initial attacker. The initial attacker rerolls the attack with disadvantage."])
			}],
			action : [["reaction", ""]]
		},
		"subclassfeature15" : {
			name : "Exploit Weakness",
			source : ["FF:ACR", 1],
			minlevel : 15,
			description : "After 2 rounds, have advantage against a single enemy or give it disadvantage against you. Once per short/long rest.",
			toNotesPage : [{
				name : "Exploit Weakness", // feature name or whatever you want
				source : ["FF:ACR", 1],
				popupName : "Exploit Weakness", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"As a free action, you can analyze an enemy’s fighting style by watching it fight for at least two rounds, but only one creature at a time. After two rounds have passed, at the start of your subsequent turns, you can choose either advantage on your attacks against the analyzed creature or to give it disadvantage on its attacks against you. [1× per short rest]"])
			}],
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature18" : {
			name : "As the Raven Flies",
			source : ["FF:ACR", 1],
			minlevel : 18,
			description : "Bonus action to grow wings for 1 hour, flying speed equals walking speed. Once per rest.",
			toNotesPage : [{
				name : "As the Raven Flies", // feature name or whatever you want
				source : ["FF:ACR", 1],
				popupName : "As the Raven Flies", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"As a bonus action, you can make black wings sprout from your back unhindered by your equipment, which remain for an hour or until you dismiss them with a bonus action. You get a flying speed equal to your walking speed. You can use this feature even if you are wearing armor: though tangible and raven-like, these wings are magical. [1× per short rest]"])
			}],
			usages: 1,
			recovery: "short rest",
			action : [["bonus action", ""]]
		},
		"subclassfeature20" : {
			name : "Absolution in Darkness",
			source : ["FF:ACR", 1],
			minlevel : 20,
			description : "Bonus action to create magical darkness for 30 feet, choose up to 4 creatures that can see normally. Evil creatures have disadvantage on WIS/CHA saves. Once per long rest.",
			toNotesPage : [{
				name : "Absolution in Darkness", // feature name or whatever you want
				source : ["FF:ACR", 1],
				popupName : "Absolution in Darkness", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"As an action, you create an 30 ft radius aura of darkness. For 1 minute, that area is heavily obscured. Darkvision can’t see through this darkness. Nonmagical light can’t illuminate it. You and up to four creatures that you choose can see normally in the darkness. Evil creatures in aura have disadvantage on WIS and CHA saving throws. [1× per long rest]"])
			}],
			usages: 1,
			recovery: "long rest",
			action : [["action", ""]]
		}
	}
});
