export default class Media {
  constructor({ title, isCheckedOut = false, ratings = [] }) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }
  get title() {
    if (typeof this._title === "string") {
      return this._title;
    } else {
      return "No title name.";
    }
  }
  get isCheckedOut() {
    if (typeof this._isCheckedOut === "boolean") {
      return this._isCheckedOut;
    } else {
      return "Unknown about checkedout";
    }
  }
  set isCheckedOut(boolean) {
    if (typeof boolean === 'boolean') {
      this._isCheckedOut = boolean;
    } else {
      console.log("Enter the boolean for isCheckedout");
    }
  }
  get ratings() {
    if (Array.isArray(this._ratings)) {
      return this._ratings;
    } else {
      return "No ratings detected.";
    }
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !(this._isCheckedOut);
  }
  getAverageRating() {
    const sum = this._ratings.reduce((a, b) => a + b)
    return (sum / this._ratings.length);
  }
  addRating(newRate) {
    if (newRate >= 1 && newRate <= 5) {
      this._ratings.push(newRate);
    } else {
      console.log("Input rate between 1 and 5.");
    }
  }
}