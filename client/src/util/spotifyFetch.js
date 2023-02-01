import SpotifyWebAPI from "spotify-web-api-node";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "./apikeys";

const spotifyApi = new SpotifyWebAPI({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

class Song {
    constructor(name, artist, id, image, url){
        this.name = name;
        this.artist = artist;
        this.id = id;
        this.image = image;
        this.url = url;
    }
}

class Artist {
    constructor(name, id, image, url){
        this.name = name;
        this.id = id;
        this.image = image;
        this.url = url;
    }
}

class UserAPI {
    constructor(clientId, clientSecret, redirectUri, accessToken, refreshToken) {
        this.api = new SpotifyWebAPI({
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: redirectUri,
            accessToken: accessToken,
            refreshToken: refreshToken,
        });
        this.id = "";
        this.name = "";
        this.email = "";
        this.profile_img = "";
        this.top_artists = [];
        this.top_albums = [];
        this.userInfo();
    }

    set setUserInfo(data){
        let body = data.body;
        this.id = body.id;
        this.name = body.display_name
        this.email = body.email;
        this.profile_img = body.images[0].url;
    }

    set setTopSongs(data){

    }

    set setTopArtists(data){

    }

    userInfo(){
        let requests = [this.api.getMe(), this.api.getMyTopArtists(), this.api.getMyTopTracks()];
        let handlers = [setUserInfo, setTopSongs, setTopArtists];
        Promise.all(requests)
            .then(resArr => {
                resArr.forEach((data, i) => {
                    handlers[i](data);
                });
            })
    }
}

async function getPlaylists(api, user){
    let promise = await api.getUserPlaylists();
    promise.then(

    )
}