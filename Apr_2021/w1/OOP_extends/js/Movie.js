import Media from './Media.js';

export default class Movie extends Media {
  constructor(mediaInfo, director, runtime, catalog) {
    super(mediaInfo);
    this._director = director;
    this._runtime = runtime;
    catalog.add(this);
  }
  get director() {
    if(typeof this._director === "string") {
      return this._director;
    } else {
      return "No director name detected";
    }
  }
  get runtime() {
    if(typeof this._runtime === "number") {
      return this._runtime;
    } else {
      return "No runtime detected.";
    }
  }
}