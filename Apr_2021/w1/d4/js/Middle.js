import School from "./School.js";

export default class MiddleSchool extends School {
  constructor(name, numberOfStudent) {
    super(name, "middle", numberOfStudent);
  }
}