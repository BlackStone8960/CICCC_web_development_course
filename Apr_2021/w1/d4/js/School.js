export default class School {
  constructor(name, level, numberOfStudent) {
    this._name = name;
    this._level = level;
    this._numberOfStudent = numberOfStudent;
  }
  get name() {
    if(typeof this._name === "string") {
      return this._name;
    } else {
      return "Couldn't find school name.";
    }
  }
  get level() {
    if(this._level === "primary" || this._level === "middle" || this._level === "high") {
      return this._level;
    } else {
      return "Couldn't find school name.";
    }
  }
  get numberOfStudent() {
    if(typeof this._numberOfStudent === "number") {
      return this._numberOfStudent;
    } else {
      return "Couldn't find number of student.";
    }
  }
  set numberOfStudent(num) {
    if(typeof num === 'number' && num >= 0) {
      this._numberOfStudent = num;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudent} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}