/**
# Vanane's Item name generator
## What ?
You've heard right ! This is an item name generator, that generate item names for items.
## Definitions
An adjective is any word that qualifies an object (e.g red, blue, big, small, beautiful...).
A name is any common word. It can be a concept, a profession, a live object...
An object is an actual live object (e.g a sword, a hammer, a chair...).
A person is a name that an actual entity can wear (e.g Donald, Vanane, My hamster John...).
A protagonist is a set of words that refers to an actual entity, or an organization (e.g Elon Musk, NOD Brotherhood, Donald Trump the Third...).
A protagonist can be compounded of either just a person's name, or a person's name with a title. 
A title qualifies the rank of a protagonist, and is compounded of the word "The", and either an adjective or a name.
An item name is the final result of the generator.
**/


var words = 
{
	"adjective":["Indestructible", "Victorious", "Flawless", "Reckless", "Mighty", "Shining", "Wooden", "Broken", "Red", "Blue", "Violent", "Tiny", "Useless", "Legendary", "Aristotelian", "Arthurian", "Bohemian", "Brethren", "Mosaic", "Oceanic", "Proctor", "Terran", "Tudor", "abroad", "absorbing", "abstract", "academic", "accelerated", "accented", "accountant", "acquainted", "acute", "addicting", "addictive", "adjustable", "admired", "adult", "adverse", "advised", "aerosol", "afraid", "aggravated", "aggressive", "agreeable", "alienate", "aligned", "all-round", "alleged", "almond", "alright", "altruistic", "ambient", "ambivalent", "amiable", "amino", "amorphous", "amused", "anatomical", "ancestral", "angelic",
    "angrier", "answerable", "antiquarian", "antiretroviral", "appellate", "applicable", "apportioned", "approachable", "appropriated", "archer", "aroused", "arrested", "assertive", "assigned", "athletic", "atrocious", "attained", "authoritarian", "autobiographical", "avaricious", "avocado", "awake", "awsome", "backstage", "backwoods", "balding", "bandaged", "banded", "banned", "barreled", "battle", "beaten", "begotten", "beguiled", "bellied", "belted", "beneficent", "besieged", "betting", "big-money", "biggest", "biochemical", "bipolar", "blackened", "blame", "blessed", "blindfolded", "bloat", "blocked", "blooded", "blue-collar", "blushing", "boastful", "bolder", "bolstered", "bonnie", "bored", "boundary",
    "bounded", "bounding", "branched", "brawling"],
	
	"name":["Victory", "Starvation", "Education", "Oblivion", "Animation", "Fire", "Water", "Air", "Earth", "Enchanter", "Shit",
    "Armour", "Barrymore", "Cabot", "Catholicism", "Chihuahua", "Christianity", "Easter", "Frenchman", "Lowry", "Mayer", "Orientalism", "Pharaoh", "Pueblo", "Pullman", "Rodeo", "Saturday", "Sister", "Snead", "Syrah", "Tuesday", "Woodward", "abbey", "absence", "absorption", "abstinence", "absurdity", "abundance", "acceptance", "accessibility", "accommodation", "accomplice", "accountability", "accounting", "accreditation", "accuracy", "acquiescence", "acreage", "actress", "actuality", "adage", "adaptation", "adherence", "adjustment", "adoption", "adultery", "advancement", "advert", "advertisement", "advertising", "advice", "aesthetics", "affinity", "aggression", "agriculture", "aircraft", "airtime", "allegation", "allegiance",
    "allegory", "allergy", "allies"],
	
	"object":["Sword", "Staff", "Piece", "Ring", "Necklace", "Boots", "Bracets", "Armor", "Mass", "Stick", "Cross", "Knife"],
	"person":["Ragnar", "Vanane", "King Arthur", "Merlin", "Ricardo Milos", "Victuris", "Loutre", "Terminator"],
	"itemName":
	[
		"{protagonist}'s {adjective} {object} of {adjective} {name}",
		"{adjective} {object} of {name}",
		"{adjective} {object} of {adjective} {name}",
	],
	"protagonist":
	[
		"{person}",
		"{person} The {name}",
		"{person} The {adjective}",
	]
}


function GetItemName()
{
	var name = words.itemName[RandomInt(0, words.itemName.length - 1)];
	name = GenerateSyntax(name);
	return name;
}


function GenerateSyntax(str)
{
	if(!ContainsSyntax(str))
	{
		return str[0].toUpperCase() + str.substring(1);
	}
	
	[...str.matchAll(/\{([a-zA-Z]+)\}/g)].map((e) =>
	{
		var syntax = words[e[1]][RandomInt(0, words[e[1]].length - 1)];
		var r = new RegExp("\\{" + e[1] + "\\}");
		str = str.replace(r, GenerateSyntax(syntax));
	});
	return str;
}


function ContainsSyntax(word)
{
	return Boolean(word.match(/\{[a-zA-Z]+\}/g));
}
	

function RandomInt(min, max)
{ 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


document.addEventListener("DOMContentLoaded", (e) => {console.log(GetItemName());});
