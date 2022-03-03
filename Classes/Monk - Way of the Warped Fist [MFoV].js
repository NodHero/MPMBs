var iFileName = "Way of the Warped Fist [MFoV, transcribed by Tetsurai].js"; 
// Define the source
SourceList["MFoV:WotWF"]={
	name : "Middle Finger of Vecna: Way of the Warped Fist",
	abbreviation : "MFoV:WotWF",
	group : "Middle Finger of Vecna",
	url : "http://mfov.magehandpress.com/p/homebrew.html",
	date : "2015/05/08"
};
// Add 1 subclass for the Monk
AddSubClass("monk", "way of the warped fist-mfov", {
	regExpSearch : /^((?=.*warped)(?=.*fist))|(((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Warped Fist",
	source : ["MFoV:WotWF", 1],
	fullname : "Way of the Warped Fist",
	features : {
		"subclassfeature3" : {
			name : "Visions of Infinity",
			source : ["MFoV:WotWF", 1],
			minlevel : 3,
			description : desc([
			"One target hit by Flurry of Blows has disadvantage on next attack roll until end of its turn",
			"Creatures that can’t be charmed are immune to this effect"
			])
		},
		"subclassfeature6" : {
			name : "Twisted Limbs",
			source : ["MFoV:WotWF", 1],
			minlevel : 6,
			description : desc([
			"My walking speed increases by 5 ft and my unarmed strikes have Reach",
			"If grappled, I can use a reaction or bonus action to end it and move to empty adjacent space"
			]),
			speed : {
				walk : { spd : "+5", enc : "+5" }
			},
			calcChanges : {
					atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) {fields.Description += (fields.Description ? '; ' : '') + 'reach'; }; ", "My unarmed strikes have reach"]
			},
			action : ["bonus action", " (escape grappled)"],
			eval : "AddAction('reaction', 'Twisted Limbs (escape grappled)')",
			removeeval : "RemoveAction('reaction', 'Twisted Limbs (escape grappled)')"
		},
		"subclassfeature11" : {
		    name : "Distorted Thoughts",
			source : ["MFoV:WotWF", 1],
			minlevel : 11,
			description : desc([
			"My thoughts can’t be read by telepathy or other means unless I allow it", 
			"I am immune to being charmed", 
			"When someone attempts to charm me, I can use a reaction to deal psychic damage"
			]),
			savetxt : { immune : ["charmed"] },
			action : ["bonus action", " (attempted charm)"],
			additional : levels.map(function (n) { return n < 6 ? "" : Math.floor(n/2) + " psychic damage"; }),
            extraname : "Way of the Warped Fist 11",
			eval : "ClassFeatureOptions(['monk', 'subclassfeature11', 'psionic blast', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'subclassfeature11', 'psionic blast', 'extra'], 'remove');",
			"psionic blast" : {
				name : "Psionic Blast",
				source : ["MFoV:WotWF", 1],
				description : desc([
				"Each creature within 15 ft must make an Int saving throw",
				"Fail take psychic damage of 1d8 per ki point expended + my Wis modifier"
			]),
				additional : "1-6 ki points",
				action : ["action", " (1-6 ki points)"]
			}
		},
		"subclassfeature17" : {
			name : "Warped Strike",
			source : ["MFoV:WotWF", 1],
			minlevel : 17,
			description : desc([
			"Once per turn, if I miss with an unarmed strike, I can immediately make an additional attack"
			]),
		}
	}
});