// EXERCISE NUMBER 1

//1)Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. 
//Create a variable crewCount and assign the spaceship‘s numCrew property to it.
//2)Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// 1)
let crewCount = spaceship.numCrew;
// console.log(crewCount);

// 2)
let planetArray = spaceship.flightPath;
// console.log(planetArray);

//*******************************************************
// EXERCISE NUMBER 2
let spaceship2 = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

//1)Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. 
//Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
//2)Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.

// 1)
let isActive = spaceship2["Active Mission"];
// console.log(isActive);

// 2)
console.log(spaceship2[propName]);

//*******************************************************
// EXERCISE NUMBER 3

let spaceship3 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

//Reassign the color property of the spaceship object to have a value of 'glorious gold'
//Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
//Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

spaceship3.color = 'glorious gold';
spaceship3.numEngines = 5;
delete spaceship3['Secret Mission'];
// console.log(spaceship3);

//*******************************************************
// EXERCISE NUMBER 4

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

//1)Below the retreatMessage variable in the code editor, create an alienShip object. 
//It should contain a method .retreat() which will console.log() the retreatMessage.
//2)Add another method to your object literal. 
//This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
//3) Invoke your two methods: first .retreat() then .takeOff().

// 1)
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  }
}

// 2)
const stringBlastOff = 'Spim... Borp... Glix... Blastoff!';
alienShip.takeOff = () => {
  console.log(stringBlastOff);
};

// 3)
alienShip.retreat();
alienShip.takeOff();

//*******************************************************
// EXERCISE NUMBER 5

let spaceship5 = {
  passengers: null, // Changed here to null because array was set by default
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

//1) Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. 
//Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
//2)Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. 
//Make at least one passenger object in the array that has at least one key-value pair on it.
//3) Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). 
//Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)
//*******************************************************

// 1)
let capFave = spaceship5.crew.captain["favorite foods"][0];
// console.log(capFave);

// 2)
spaceship5.passengers = [{ 
  name: "Tom",
  age: 18
}, {
  name: "Michael",
  age: 50
}]

// 3)
let firstPassenger = spaceship5.passengers[0];
// console.log(firstPassenger);