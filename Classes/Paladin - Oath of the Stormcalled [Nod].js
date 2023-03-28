var iFileName = "Paladin - Oath of the Stormcalled [Nod].js";

RequiredSheetVersion(13);

SourceList["PSC"] = {
	name : "Paladin - Oath of the Stormcalled",
	abbreviation : "PSC",
	abbreviationSpellsheet: "SC",
	group : "Nod's Homebrew",
	date : "2023/03/28"
};

AddSubClass("paladin", "oath of the stormcalled", {
	regExpSearch: /^(((?=.*(sea|pirate|swashbuckler|storm|stormcalled))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(sea|pirate|swashbuckler))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname: "Oath of the Stormcalled",
	source: [["PSC", 174]],
	features: {
		subclassfeature3: {
			name: "Channel Divinity: Fog Bank",
			source: [["PSC", 175]],
			minlevel: 3,
			description: desc([
			"As an action, I can surround myself with a 20 ft radius of heavily obscuring fog",
			"It lasts for 10 minutes, spreads around corners, moves with me, and cannot be dispersed",
			"I and creatures within 5 ft of me treat it as lightly obscured; can dismiss (no action " +
			  (typePF ? "required" : "") +
			  ")", ]),
			action: ["action", ""],
			spellcastingExtra: ["thunderous smite", "thunderwave", "misty step", "shatter", "call lightning", "haste", "freedom of movement", "summon elemental", "control winds", "steel wind strike"],
		},
		"subclassfeature3.1": {
			name: "Channel Divinity: Destructive Wrath",
			source: [["PSC", 175]],
			minlevel: 3,
			description : desc([ 
			"Instead of rolling, I can do maximum damage when I do lightning or thunder damage"]),
		},
		"subclassfeature7": {
			name: "Aura of Storm Strike",
			source: [["PSC", 176]],
			minlevel: 7,
			description: desc([
			"When I deal lightning or thunder damage to a Large or smaller creature within 10 ft",
			"of me, I can push it up to 10 ft away. If pushed into another creature or obstacle,",
			"the pushed creature takes bludgeoning damage equal to my Charisma modifier" ]),
			additional: levels.map(function (n) {
			return n < 7 ? "" : n < 18 ? "10-foot aura" : "30-foot aura"; }),
		},
		"subclassfeature15": {
			name: "Storm Crash",
			source: [["PSC", 176]],
			minlevel: 15,
			description: desc([
			"I can use my reaction to crash storm on a creature that enters/exits my melee range",
			"It takes 1d12 bludgeoning damage and makes a Strength save or is knocked prone" ]),
			action: ["reaction", ""],
		},
		"subclassfeature20": {
			name: "Captain of Tempests",
			source: [["PSC", 176]],
			minlevel: 20,
			description: desc([
			"As an action, I channel the spirits of historic figures for 1 minute; See 3rd page"]),
			toNotesPage: [{
				name: "Captain of Tempests Benefits",
				popupName: "Oath of the Stormcalled: Captain of Tempests",
				page3notes: true,
				note: [
				" \u2022 Climbing costs no additional movement; I have advantage on Strength (Athletics) checks",
				" \u2022 My attacks have advantage against a creature within 5 ft if no one else within 5 ft of me",
				" \u2022 I can take the Dodge action as a bonus action",
				" \u2022 I have advantage on Dexterity checks and Dexterity saves against seen effects", ],},],
			recovery: "long rest",
			usages: 1,
			action: ["action", ""],
		},
	},
});