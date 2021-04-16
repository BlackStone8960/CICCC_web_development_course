import School from './School.js';

export default class PrimarySchool extends School {
  constructor(name, numberOfStudent, pickupPolicy) {
    super(name, "primary", numberOfStudent);
    this._pickupPoilcy = pickupPolicy;
  }
  get pickupPolicy() {
    if(typeof this._pickupPolicy === "string") {
      return this._pickupPoilcy;
    } else {
      return "Couldn't find pickup policy.";
    }
  }
}