var iFileName = "Background - Chef [Kobold Press].js"; 
RequiredSheetVersion(13);

SourceList["KP-Chef"] = {
	name : "Background - Chef [Kobold Press]",
	abbreviation : "KP-Chef",
	group : "Third Party",
	url : "https://koboldpress.com/bards-with-class-chef-background/",
	date : "2022/05/25"
};

/* You are a skilled chef, knowledgeable in various cuisines, which you prepare for diners and companions alike. You learned your culinary secrets as an apprentice to a master chef, and now you are a master in your own right. You might have served as the cook in a tavern or the military, the chef de cuisine at a fine dining establishment, or the proprietor of your own catering business. 
*/
BackgroundList["chef"] = { 
	regExpSearch : /chef/i,
	name : "Chef",
	source : [["KP-Chef"]],
	skills : ["Nature", "Persuasion"],
	toolProfs : ["Cook's utensils"],
	gold : 15,
	equipleft : [
		["Cook's utensils", "1", ""],
		["letter of recommendation", "1", ""],		
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	// Culinary Training - Chefs are employed in every town, city, and village. Every chef learned their trade in one or more establishments, and this often influences their style of cooking. You can select your source of training, the place where you apprenticed or otherwise learned your trade, from the Culinary Training table or roll randomly.
	extra : [
		"Select Culinary Training",
		"Military",
		"Tavern",
		"Private Master Chef",
		"Fine-dining establishment",
		"Self-Taught",
		"Family member",
		"In-law",
		"Culinary school",
		"Royal Chef apprenticeship",	
	],
	feature : "Traveling Chef",
	// Suggested Characteristics - Chefs are artists and businesspeople. They enjoy sharing their cuisine with others and often get a thrill participating in culinary competitions.
	trait : [
		"I can’t rest until my food is perfect. And nothing is ever perfect.",
		"I can’t help but brag about my cooking.",
		"I love to learn about food and ingredients from different cultures.",
		"I will try anything once.",
		"I’m a food snob and constantly berate people for their bad taste.",
		"I can’t shut up about my food.",
		"I tend to fall in love with other chefs, especially if they’re better than I am.",
		"I am the greatest chef in the world, and I don’t appreciate it when people fail to recognize that."
	],
	ideal : [
		["Loyalty", "Loyalty. I learned to cook to support the folks in my military unit, priesthood, monastery, or school. (Lawful)" ],
		["Charity", "Charity. I use my gifts to feed the poor and underprivileged. (Good)" ],
		["Adventure", "Adventure. Cooking takes me to strange and wonderful new places. (Chaotic)" ],
		["Greed", "Greed. I learned to cook to make money. It doesn’t hurt that I can slip poison into dishes I cook for my enemies. (Evil)" ],
		["Altruism", "Altruism. The thing that makes me happiest is cooking for others. (Neutral)" ],
		["Aspiration", "Aspiration. I work hard to be the best chef in the world. (Any)" ]
	],
	bond : [
		"The place where I learned to cook holds special memories for me.",
		"I met my significant other when I served them a meal I cooked.",
		"I owe everything to the master chef who trained me.",
		"I keep my family member’s cooking knives to remember all they did for me.",
		"I’ve never won an important cooking competition, but I will someday.",
		"My successful restaurant burnt down, and I think a rival did it. They will pay."
	],
	flaw : [
		"I can’t tolerate constructive criticism of my cooking.",
		"I’m not above sabotaging my rivals.",
		"I’m so competitive that I sulk for weeks when a rival cooks better food than me.",
		"I know I’m the best chef in the world, and I tell people that constantly.",
		"I’ve strongly considered murdering a food critique who wrote bad things about me.",
		"I’m envious of anyone who people think is a better cook than I am."
	],
	languageProfs : [["Choose one", 1]],
	lifestyle : "modest"
};
BackgroundFeatureList["traveling chef"] = {
	description : "Your renowned culinary services are in constant demand. You rarely lack for a place to stay or a way to earn money. You can earn money with your cooking in the same way a bard can with a Performance. Make a Charisma (cook’s utensils) check to determine the money you make cooking professionally in your downtime. In addition, on a roll of 15 or higher, the diners are charmed for 8 hours.",
	source : [["KP-Chef"]]
};	



