
const CLASS_STORAGE = "stored-classes";
const MODULE_NAME = "class-exposure";

Hooks.once('ready', function(){
	if (!CONFIG.DND5E.classFeatures){
		console.error("Somehow class Features is missing!");
		return;
	}

	game.settings.register(MODULE_NAME, CLASS_STORAGE, {
		name: 'Stored 5e Class Data',
		hint: 'Data for 5e classes stored for world',
		scope: 'world',
		config: false,
		type: Object,
		default: JSON.parse(JSON.stringify(CONFIG.DND5E.classFeatures))
	});

	let item = game.settings.get(MODULE_NAME, CLASS_STORAGE);

	//change classFeature to use saved class feature
	CONFIG.DND5E.classFeatures = item;

	// game.settings.set(MODULE_NAME, CLASS_STORAGE, item);

});

