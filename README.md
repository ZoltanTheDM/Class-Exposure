# Class Exposure

A simple project meant to be inculded in other projects. This to exposes leveling inforamtion about dnd 5e classes.

Class data now availible with:
```javascript
const CLASS_STORAGE = "stored-classes";
const MODULE_NAME = "class-exposure";
let classFeatures = game.settings.get(MODULE_NAME, CLASS_STORAGE);
game.settings.set(MODULE_NAME, CLASS_STORAGE, classFeatures);
```

Data is registered during ready Hook
