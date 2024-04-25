var iFileName = "Rogue - Acrobat [Nod].js";
RequiredSheetVersion("13.1.12");

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a rogue subclass called "Acrobat"
				Subclass created by Nod_Hero
				https://github.com/NodHero/MPMBs/blob/master/Classes/Rogue%20-%20Acrobat.pdf
	Code by:	NodHero
	Completed Date:	2024-03-16
*/

SourceList["RA:A"] = {
	name : "Roguish Archetype - Acrobat",
	abbreviation : "Acrobat",
	group : "Nod's Homebrew",
	url : "https://github.com/NodHero/MPMBs/blob/master/Classes/Rogue%20-%20Acrobat.pdf",
	date : "2024/03/16",
};

AddSubClass("rogue", "acrobat", {
	regExpSearch : /acrobat|tumbler|gymnast/i,
	subname : "Acrobat",
	fullname : "Acrobat",
	source : [["RA:A"]],
	features : {
		"subclassfeature3" : {
			name : "Acrobatic Artistry",
			source : [["RA:A"]],
			minlevel : 3,
			description : desc([
				"I gain proficiency and expertise with the Acrobatics skill, and have advantage with skill",
				"checks with it during my turn."
			]),
			skills : [['Acrobatics', 'full']]
		},
		"subclassfeature3.1" : {
			name : "Nimble Tumble",
			source : [["RA:A"]],
			minlevel : 3,
			description : desc([
				"Standing from prone only costs me 5 ft of movement. As a reaction when a hostile ends its", 
				"turn within 5 ft of me, I can move half my speed without provoking opportunity attacks",
				"When I use the Dash, Disengage, or Dodge action, I can move thru one hostile creature's",
				"space. Until the end of my turn, I don't need advantage to sneak attack that creature",
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature9" : {
			name : "Flick-Flac",
			source : [["RA:A"]],
			minlevel : 9,
			description : desc([
				"Once during my turn when I move out of a creature's reach, I can make an additional",
				"ranged weapon attack as part of the Attack action, targeting that creature"
			]),
			action : [["action", " (w/ Attack action)"]]
		},
		"subclassfeature13" : {
			name : "Over, Under, Around and Through",
			source : [["RA:A"]],
			minlevel : 13,
			description : desc([
				"I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable). I ignore",
				"non-magical difficult terrain, and climb at my normal speed. Once per turn I can extend a",
				"jump by the result of an Acrobatics check in feet. I have resistance to falling damage, take",
				"no damage from falling 30 ft or less, and do not fall prone after taking falling damage"
			]),
			dmgres : ["Falling"],
			savetxt : { immune : ["fall 30 ft"] },
			speed : {
				walk : { spd : "+10", enc : "+10" },
				climb : { spd : "_10", enc : "_10" },
				swim : { spd : "_10", enc : "_10" }
			}
		},
		"subclassfeature17" : {
			name : "Cunning Dodge",
			source : [["RA:A"]],
			minlevel : 17,
			description : desc([
				"Opportunity attacks against me have disadvantage. No advantage against me when prone",
				"I can take the Dodge action as a bonus action and gain the benefit of Disengage or Dash",
				"Once per short rest, I can Uncanny Dodge for no damage instead of half",
			]),
			limfeaname : "Uncanny Dodge (nullify damage)",
			usages : 1,
			recovery : "short rest",
			action : [["bonus action", "Cunning Dodge"]]
		}
	}
});
/* Roguish Archetype - Acrobat
Not all rogues are dastardly thieves or burglars. Exceptional feats of agility and motor coordination define those rogues who adhere to the archetypical Acrobat. The acrobatic rogue moves gracefully, light on their feet and incredibly agile, able to tumble, somersault, and walk across tightropes with ease. Making use of intricate handsprings, vaults, and flips, they are able to defy gravity and confound their enemies.
The skills of a gymnast find a myriad of applications in the adventuring world, whether in battle or in the stillness of night, so acrobats are always great to have on your side.

Acrobatic Artistry
When you choose this archetype at 3rd level, you gain proficiency in the Acrobatics skill if you don't already have it. Your proficiency bonus is doubled for any ability check you make with it, and you have advantage on ability checks made with it on your turn.

Nimble Tumble
Beginning at 3rd level, you are difficult to pin down during a fight:
	• When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed.
	• You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn't provoke opportunity attacks.
	• When you use the Dash, Disengage, or Dodge action, you can move through one hostile creature's space. Whenever you do so, until the end of your turn, you don't need advantage on your attack roll to use Sneak Attack against the creature, providing you don't have disadvantage on the attack roll. All the other rules for Sneak Attack still apply to you.

Flick-Flac
By 9th level, you know how to make the most out of your momentum during your acrobatic movements:
	• Once during your turn when you move out of a creature's reach, you can make an additional ranged weapon attack as part of the Attack action, targeting that creature.

Over, Under, Around and Through
At 13th level, you gain the ability to move with incredible speed, precision, and power. Few obstacles can prevent you from reaching your destination:
	• Your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well. Climbing and moving through non-magical difficult terrain no longer costs you extra movement.
	• When you jump, you can make an Acrobatics check and extend your jump by a number of feet equal to the check's total. You can make this special check only once per turn.
	• As long as you are not incapacitated and your speed is greater than zero, you have resistance to falling damage, and you do not take damage for the first 30 feet of a fall. Additionally, you do not fall prone after taking falling damage.

Cunning Dodge
By 17th level, you are so nimble, you can dodge almost anything:
	• Opportunity attacks against you have disadvantage.
	• When you are prone, enemies within 5 feet of you don't have advantage on attack rolls against you.
	• You can use the bonus action granted by your Cunning Action to take the Dodge action. When you do so, you also gain the benefit of your choice of the Dash or Disengage actions.
	• When you use your reaction to Uncanny Dodge to halve an attack's damage against you, you instead take no damage. Once you do so, you can't use this feature again until you finish a short or long rest.  
*/