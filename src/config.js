const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'ball', number: 2 },
    { name: 'eye color', number: 12 },
    { name: 'iris', number: 3 },
    { name: 'shine', number: 1 },
    { name: 'shine', number: 1 },
    { name: 'bottom lid', number: 3 },
    { name: 'top lid', number: 3 },
];
  
const format = {
    width: 1024,
    height: 1024
};

const rarity = [
    { key: "_c", val: "Common" },
    { key: "_uc", val: "Uncommon" },
    { key: "_r", val: "Super Rare" },
    { key: "_sr", val: "Epic"},
    {key: "_l", val: "Legendary"}
];

const defaultEdition = 5000;

module.exports = { layersOrder, format, rarity, defaultEdition };