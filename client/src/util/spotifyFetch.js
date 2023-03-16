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
        this.user = new User({id: 0, name: "", email: "", images: [{url : 0}]});
        this.done = false;
        this.status = "initial";
        this.top_songs = [];
        this.top_artists = [];
        //this.userInfo();
    }

    getUserInfo(data){
        return new User(data.body);
    }

    getTopSongs(data){
        return data.body.items.map(data => new Song(data));
    }

    getTopArtists(data){
        return data.body.items.map(data => new Artist(data));
    }

    userInfo(){
        let requests = [this.api.getMe(), this.api.getMyTopTracks(), this.api.getMyTopArtists()];
        let functions = [this.getUserInfo, this.getTopSongs, this.getTopArtists];
        let props = ["user", "top_songs", "top_artists"];
        this.status = "working";
        Promise.all(requests)
            .then(resArr => {
                resArr.forEach((data, i) => {
                    this[props[i]] = functions[i](data);
                });
                this.done = true;
            })
        this.status = "done";
        console.log("object:", this);
    }
}