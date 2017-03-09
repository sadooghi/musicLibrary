var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var result = {};
  for(var playlist in library.playlists){
    //var playlistName = library.playlists[playlist].name;
    result[playlist] = library.playlists[playlist].name + "-" +  library.playlists[playlist].tracks.length + "track";
  }
    console.log(result);
}
 printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var result = {};
for(var keys in library.tracks) {
  result[keys] = library.tracks[keys].name + "by" + library.tracks[keys].artist + "(" + library.tracks[keys].album + ")";
}
console.log(result);
}
printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
var result = {};
var trackNum = {};
for(var playlist in library.playlists){
  if (playlist == playlistId) {
    result[playlist] = library.playlists[playlist].name + "-" + library.playlists[playlist].tracks.length + "track";
    trackNum = library.playlists[playlist].tracks
    for (var i = 0; i < trackNum.length; i++ ){
      for (var keys in library.tracks){
        if(trackNum[i] == keys){ 
          result[trackNum[i]] = library.tracks[trackNum[i]].name + "by" + library.tracks[trackNum[i]].artist + "(" + library.tracks[trackNum[i]].album + ")";
        }
      } 
    }
  } 
}                
console.log(result);  
}
printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
 library.playlists[playlistId] = { 
  id: playlistId,
  name: "newly added",
  tracks: [trackId]
}
  
  console.log(library.playlists[playlistId]);
  }
addTrackToPlaylist("t04","p03");


// generates a unique id
// (use this for addTrack and addPlaylist)
console.log("start");

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library


var addTrack = function (name, artist, album) {
  var newTrack = uid();
  library.tracks[newTrack] = {
    id: newTrack,
    name: name,
    artist: artist,
    album: album
  }
  console.log(library.tracks[newTrack]);
}
addTrack("try every thing","shakira","zootopia");


// adds a playlist to the library

var addPlaylist = function (name) {
  var newid = uid();
 library.playlists[newid] = { 
  id: newid,
  name: name,
  tracks: "nothing"
}
  
  console.log(library.playlists[newid]);
  }
addPlaylist("try every thing");

//done

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}