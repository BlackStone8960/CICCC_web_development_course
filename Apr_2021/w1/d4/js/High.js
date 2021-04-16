import School from "./School.js";

export default class HighSchool extends School {
  constructor(name, numberOfStudent, sportsTeams) {
    super(name, "high", numberOfStudent);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    if (Array.isArray(this._sportsTeams)) {
      for (let sport of this._sportsTeams) {
        console.log(sport)
      }
      return this._sportsTeams;
    }
  }
}