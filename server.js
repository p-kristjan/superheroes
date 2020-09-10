// Require the installed packages for this code.
var superheroes = require('superheroes');
var supervillains = require('supervillains');

// Utilize installed packages - get the name of a random superhero from the array.
var superheroName = superheroes.random();
var supervillainName = supervillains.random();

// Log the randomized names.
console.log(superheroName);
console.log(supervillainName);