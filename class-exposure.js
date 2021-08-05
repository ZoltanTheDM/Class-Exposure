
const CLASS_STORAGE = "stored-classes";
const MODULE_NAME = "class-exposure";
const ENGLISH_MODULE_NAME = "Class Exposure";

Hooks.once('ready', function(){
	if (!CONFIG.DND5E.classFeatures){
		console.error(`${ENGLISH_MODULE_NAME} | Somehow classFeatures is missing!`);
		return;
	}

	game.settings.register(MODULE_NAME, CLASS_STORAGE, {
		name: 'Stored 5e Class Data',
		hint: 'Data for 5e classes stored for world',
		scope: 'world',
		config: false,
		type: Object,
		//create deep copy
		default: JSON.parse(JSON.stringify(CONFIG.DND5E.classFeatures))
	});

	let item = game.settings.get(MODULE_NAME, CLASS_STORAGE);

	//change classFeature to use saved class feature
	CONFIG.DND5E.classFeatures = item;

	//classFeatures is a dictionary with lower case class names as keys
	//each class is a dictionary with 2 keys: "features" and "subclasses"
	//features is an dictionary with levels numbers as keys to an array of strings
	//strings are Uuid
	//uuid from compedium: "Compendium.{name from game.packs}.{item id}"
	//uuid from instances "Item.{item id}"
	//subclasses are a dictionary has a key similar to name of subclass
	//the dictionary contains the key "label", "source", "features"
	//features is identical structure to class features
	//label is the exact string name used for that subclass
	//source is a string

	// game.settings.set(MODULE_NAME, CLASS_STORAGE, item);

});

