/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding - when none of the other rules apply and not in strict mode, the this keyword points to the window or the object console
* 2. implicit binding - the value of this is the object preceding the dot
* 3. new binding - refers to the instance of the object created by the constructor function 
* 4. explicit binding - when call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greet(person) {
    console.log(this);
    return `Hello, ${person}`;
}

greet('Jevon');

// Principle 2

// code example for Implicit Binding
let singer = {
    name: 'Lil Nas X',
    hometown: 'Atlanta',
    lyrics: 'I\'m gonna take my horse to the Old Town Road',
    sing: function() {
        console.log(this.lyrics);
    }
}

singer.sing();



// Principle 3

// code example for New Binding
function Animal(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
}

let simba = new Animal ('Simba', 'lion', 'roar!!')

console.log(simba.sound);

// Principle 4

// code example for Explicit Binding

let bernie = {
    name: 'Bernie Sanders',
    politics: 'progressive',
    phrase: 'I wrote the damn bill!'
}

let biden = {
    name: 'Joe Biden',
    politics: 'moderate',
    phrase: 'I can beat Trump!',
}

function giveSpeech() {
    console.log(this.phrase);
}

giveSpeech.call(bernie);
giveSpeech.call(biden);

