import Media from './Media.js';

export default class CD extends Media {
  constructor(mediaInfo, artist, songs = []) {
    super(mediaInfo);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    if(typeof this._artist === "string") {
      return this._artist;
    } else {
      return "No artist name.";
    }
  }
  get songs() {
    if(Array.isArray(this._songs) && this._songs.length) {
      return this._songs;
    } else {
      return "No artist name.";
    }
  }
  shuffle() {
    let songs = [...this._songs];
    let l = songs.length;
    while(l) {
      const random = Math.floor(Math.random() * l);
      const lastSong = songs[--l];
      songs[l] = songs[random];
      songs[random] = lastSong;
    }
    return songs;
  }
}