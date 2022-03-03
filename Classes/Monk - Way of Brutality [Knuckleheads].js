AddSubClass("monk", "way of brutality", {
	regExpSearch: /^(?=.*(monk))(?=.*(brutality|frightful)).*$/i,
	subname: "Way of Brutality",
	source: ["BurnSky"],
	features: {
		"subclassfeature3": {
			name: "Bonus Proficiencies",
			source: ["BurnSky"],
			minlevel: 3,
			skills: ["Intimidation"],
			description: desc([
				"I gain proficiency with the Intimidation skill."
			]),
		},
		"subclassfeature3.1":= {
			name: "Dirty Fighting",
			source: ["BurnSky"],
			minlevel: 3,
			description: desc([
				"Whenever I hit a creature with a Flurry of Blows attack, I may impose one of these effects",
				"until the end of my next turn: Dex save or blinded, Con save or unable to breath/vocalize,", "Str save or be slowed by 5 ft. Alternatively, I may use Flurry of Blows to make an improvised",
   				"ranged weapon attack against a target within 30-ft. This uses my Martial Arts die for damage"
			]),
		},
		"subclassfeature6": {
			name: "Frightful Presence",
			source: ["BurnSky"],
			minlevel: 6,
			description: desc([
				"When I take this action, each creature within 30-ft must succeed a Wis saving throw or become frightened until the end of my next turn.",
			]),
			action : ["action",""]
		},
		"subclassfeature11": {
			name: "Brutal Blows",
			source: ["BurnSky"],
			minlevel: 11,
			description: desc([
				"When I hit a creature with an attack granted by Flurry of Blows, the attack does an additional Martial Arts die of dmg",
			]),
		},
		"subclassfeature17": {
			name: "Reactive Flurry",
			source: ["BurnSky"],
			minlevel: 17,
			description: desc([
				"When a creature provokes an attack of opportunity from me, I may use Flurry of Blows as a reaction."
			]),
		},
	}
});