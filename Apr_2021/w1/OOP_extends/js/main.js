import Book from './Book.js';
import Catalog from './Catalog.js';
import CD from './CD.js';
import Movie from './Movie.js';

const catalog = new Catalog();

const historyOfEverything = new Book({ title: 'A Short History of Nearly Everything' }, 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie({ title: "Speed" }, 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const masterPiece = new CD({ 
  title: "Appetite for Destruction" 
}, 
"Guns N' Roses", [
  "Welcome to the Jungle",
  "It's So Easy",
  "Nightrain",
  "Out ta Get Me",
  "Mr. Brownstone",
  "Paradise City",
  "My Michelle",
  "Think About You",
  "Sweet Child o' Mine",
  "You're Crazy",
  "Anything Goes",
  "Rocket Queen"
]);

masterPiece.toggleCheckOutStatus();
console.log(masterPiece.isCheckedOut);
masterPiece.addRating(5);
masterPiece.addRating(5);
masterPiece.addRating(4.5);
console.log(masterPiece.getAverageRating());
console.log(masterPiece.title, masterPiece.songs, masterPiece.shuffle());

catalog.add([historyOfEverything, speed, masterPiece]);
console.log(catalog.items);