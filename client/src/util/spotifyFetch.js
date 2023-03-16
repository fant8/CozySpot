import SpotifyWebAPI from "spotify-web-api-node";

// const spotifyApi = new SpotifyWebAPI({
//   clientId: CLIENT_ID,
//   clientSecret: CLIENT_SECRET,
//   redirectUri: REDIRECT_URI
// });

export class Album {
    constructor(albumData){
        //console.log("Album data", albumData);
        this.type = albumData.album_type;
        this.artists = albumData.artists.map(data => new Artist(data));
        this.id = albumData.id;
        this.release_date = new Date(albumData.release_date);
        this.images = albumData.images;
        this.name = albumData.name;
        this.total_tracks = albumData.total_tracks;
    }
}
export class Song {
    constructor(songData){
        //console.log("Song data", songData);
        this.album = new Album(songData.album);
        this.artists = songData.artists.map(data => new Artist(data))
        this.length = songData.duration_ms;
        this.id = songData.id;
        this.name = songData.name
        this.preview_url = songData.preview_url;
    }
}

export class Artist {
    constructor(artistData){
        //console.log("Artist data", artistData);
        // this.followers = artistData.followers.total;
        // this.genres = artistData.genres;
        // this.images = artistData.images;
        this.id = artistData.id;
        this.name = artistData.name;
    }
}

export class User {
    constructor(userData){
        //console.log("User data", userData);
        this.id = userData.id;
        this.name = userData.display_name
        this.email = userData.email;
        this.profile_img = userData.images[0].url;
        this.top_songs = [];
        this.top_artists = [];
    }
}

export default class UserAPI {
    constructor(api) {
        this.api = api;
        // this.api = new SpotifyWebAPI({
        //     clientId: clientId,
        //     clientSecret: clientSecret,
        //     redirectUri: redirectUri,
        //     accessToken: accessToken,
        //     refreshToken: refreshToken,
        // });
        this.user = null;
        this.done = false;
        this.status = "initial";
        //this.userInfo();
    }

    setUserInfo(data){
        this.user = new User(data.body);
        console.log(this.user)
    }

    setTopSongs(data){
        this.top_songs = data.body.items.map(data => new Song(data));
        console.log(this.top_songs);
    }

    setTopArtists(data){
        this.top_artists = data.body.items.map(data => new Artist(data));
    }

    userInfo(){
        let requests = [this.api.getMe(), this.api.getMyTopTracks(), this.api.getMyTopArtists()];
        let handlers = [this.setUserInfo, this.setTopSongs, this.setTopArtists];
        this.status = "working";
        Promise.all(requests)
            .then(resArr => {
                resArr.forEach((data, i) => {
                    handlers[i](data);
                });
                this.done = true;
            })
        this.status = "done";
        console.log("object:", this);
    }
}