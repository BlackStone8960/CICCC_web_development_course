import Media from './Media.js';

export default class Book extends Media {
  constructor(mediaInfo, author, pages) {
    super(mediaInfo);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    if (typeof this._author === "string") {
      return this._author;
    } else {
      return "No author detected";
    }
  }
  get pages() {
    if (typeof this._pages === "number") {
      return this._pages;
    } else {
      return "No pages detected.";
    }
  }
}