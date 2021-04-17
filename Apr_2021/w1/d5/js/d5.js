//JAVASCRIPT CHALLENGE
//MEALMAKER

//As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
// However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, 
// and you want an easier way to be able to figure out what you are going to eat.

//In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. 
// We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  courseNames: {
    appetizers: ["Salad", "Bruschetta", "French Fries"],
    mains: ["French Fries", "Fettuccine Alfredo", "Chicken Parmesan"],
    desserts: ["Ice cream", "Strawberry parfait", "Macha Ice cream"]
  },
  get appetizers() {
    if (Array.isArray(this._courses.appetizers)) {
      return this._courses.appetizers;
    } else {
      return "No appetizers detected.";
    }
  },
  set appetizers(array) {
    if (typeof array === "array" && array.length) {
      this._courses.appetizers = array;
    } else {
      console.log("Pass in an array that has some values to appetizers.");
    }
  },
  get mains() {
    if (Array.isArray(this._courses.appetizers)) {
      return this._courses.mains;
    } else {
      return "No mains detected.";
    }
  },
  set mains(array) {
    if (typeof array === "array" && array.length) {
      this._courses.mains = array;
    } else {
      console.log("Pass in an array that has some values to mains.");
    }
  },
  get desserts() {
    if (Array.isArray(this._courses.desserts)) {
      return this._courses.desserts;
    } else {
      return "No desserts detected.";
    }
  },
  set desserts(array) {
    if (typeof array === "array" && array.length) {
      this._courses.desserts = array;
    } else {
      console.log("Pass in an array that has some values to desserts.");
    }
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  findCourse(courseName) {
    for (let course in this.courseNames) {
      if (courseNames[course].includes(courseName)) {
        return course; // return name of course
      }
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[this.findCourse(courseName)].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    // let dishes = 
  },
};

const courseName = {

}

// 1. Start by creating an empty menu object.
// 2. Add a _courses property to your menu object and set its value to an empty object. 
// This property will ultimately contain a mapping between each course and the dishes available to order in that course.
// 3. Create three properties inside the _courses object called appetizers, mains, and desserts. 
// Each one of these should initialize to an empty array.
// 4. Create getter and setter methods for the appetizers, mains, and desserts properties.
// 5. Inside your menu object, create an empty getter method for the _courses property.
// 6. Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
// 7. Inside the menu object, we are going to create a method called .addDishToCourse() 
// which will be used to add a new dish to the specified course on the menu.
// The method should take in three parameters: the courseName, the dishName , and the dishPrice.
// 8. The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
// The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
// 9. Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.
// Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.
// 10. There are a few steps in getting the .getRandomDishFromCourse() to work.
// Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
// Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
// Round that generated number to a whole number by using Math.floor() on the result.
// Return the dish located at that index in dishes.

// 11.
// Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.

// The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
// Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.
// Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.

// 12.
// Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).



// 13.
// Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.






// //***************************************************
// //CODE SOLUTION BELOW
// //***************************************************


// //Team Stats
// //We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.
// //Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.


// 1.
// We want a data structure to store the information about our team. Create an empty team object.

// 2.
// Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.

// 3.
// Populate the empty array that corresponds to the _players key in your team object with three actual players. They should be in the following format:

// {
//   firstName: 'Pablo',
//   lastName: 'Sanchez',
//   age: 11
// }
// You should put each player on a new line to prevent the line from getting too long.

// 4.
// Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format:

// {
//   opponent: 'Broncos',
//   teamPoints: 42,
//   opponentPoints: 27
// }


// 5.
// Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.

// 6.
// We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.


// 7.
// Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.

// Print out the team‘s players to check they were all properly added.



// 8.
// The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:

// takes in an opponent’s name,
// your team’s points,
// the opponent’s points,
// creates a game object,
// adds the game object to your team‘s games array.



// 9.
// Invoke your addGame method on three games and print the team‘s updated games array.

// //***************************************************
// //CODE SOLUTION BELOW
// //***************************************************
