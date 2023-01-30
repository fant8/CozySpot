import React, { useEffect, useState } from "react";
import Playlist from "../components/playlist";
import 'bootstrap/dist/css/bootstrap.min.css';

const Merge = (props) => {
    const spotifyApi = props.spotifyApi;
    const [songs, updateSongs] = useState([]);

    useEffect(() => {
        console.log(spotifyApi);
        // mergePlaylists();
    })

    function mergePlaylists(){
        spotifyApi.getMySavedTracks({
            limit: 10,
            offset: 1
        })
        .then(data => updateSongs(data))
        .catch(err => console.log("error! ", err));
    }

    return (
        <div className="temp">
            <p>Songs: {JSON.stringify(songs)}</p>
            <label for="playlist1">Playlist 1</label>
            <input type="text" id="playlist1" name="playlist1"></input>
            
            <label for="playlist2">Playlist 2</label>
            <input type="text" id="playlist2" name="playlist2"></input>
            <br></br>
            <button onClick={() => mergePlaylists()}>Merge Playlists</button>
        <div style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <Playlist />

                <button onClick={() => mergePlaylists()}>Merge Playlists</button>\
            </div>
        </div>
    )
}

export default Merge