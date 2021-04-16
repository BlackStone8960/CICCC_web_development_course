import PrimarySchool from "./Primary.js";
import MiddleSchool from "./Middle.js";
import HighSchool from "./High.js";

const substituteTeachers = [
  "Jamal Crawford", 
  "Lou Williams", 
  "J. R. Smith", 
  "James Harden",
  "Jason Terry",
  "Manu Ginobli"
];

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
lorraineHansbury.quickFacts();
const substituteTeacher = PrimarySchool.pickSubstituteTeacher(substituteTeachers);
console.log(substituteTeacher);

const sportsTeams = [
  "Baseball", 
  "Basketball", 
  "Volleyball", 
  "Track and Field"
];

const alSmith = new HighSchool("Al E. Smith", 415, sportsTeams);
const sportsTeamsResult = alSmith.sportsTeams;

const fifteen = new MiddleSchool('Fifteen', 300);

console.log(lorraineHansbury);
console.log(fifteen);
console.log(alSmith);