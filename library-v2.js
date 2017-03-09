var library = {
  tracks: { 
    t01: { id: "t01",
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
  playlists: { 
    p01: { id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists : function () {
    var result = {};
    for(var playlist in library.playlists){
      //var playlistName = library.playlists[playlist].name;
      result[playlist] = library.playlists[playlist].name + "-" +  library.playlists[playlist].tracks.length + "track";
    }
    console.log(result);
  },
  printTracks : function () {
    var result = {};
    for(var keys in library.tracks) {
      result[keys] = library.tracks[keys].name + "by" + library.tracks[keys].artist + "(" + library.tracks[keys].album + ")";
    }
    console.log(result);
  },
  printPlaylist : function (playlistId) {
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
  },
  addTrackToPlaylist : function (trackId, playlistId) {
   library.playlists[playlistId] = { 
    id: playlistId,
    name: "newly added",
    tracks: [trackId]
  }

  console.log(library.playlists[playlistId]);
  },
  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack : function (name, artist, album) {
    var newTrack = library.uid();
    library.tracks[newTrack] = {
      id: newTrack,
      name: name,
      artist: artist,
      album: album
    }
    console.log(library.tracks[newTrack]);
  },
  addPlaylist : function (name) {
    var newid = library.uid();
    library.playlists[newid] = { 
      id: newid,
      name: name,
      tracks: "nothing"
    }
    
    console.log(library.playlists[newid]);
  }

}

library.printPlaylists();

library.printTracks();

library.printPlaylist("p01");

library.addTrackToPlaylist("t04","p03");

library.addTrack("try every thing","shakira","zootopia");

library.addPlaylist("try every thing");
