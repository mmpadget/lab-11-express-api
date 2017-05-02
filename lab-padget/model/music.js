'use strict';
// eslint-disable-next-line
const debug = require('debug')('http:music');
const uuid = require('uuid/v4');

// constructor
module.exports = function(artist, album, song) {
  if(!artist || !album) throw new Error('Invalid arguments');
  this.artist = artist;
  this.album = album;
  this.song = song;
  this.id = uuid();
};
