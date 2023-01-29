import React, { useEffect, useState } from "react";

const Merge = (props) => {
    const spotifyApi = props.spotifyApi;
    const [songs, updateSongs] = useState([]);

    useEffect(mergePlaylists)

    function mergePlaylists(){
        spotifyApi.getMySavedTracks({
            limit: 10
        })
        .then(data => updateSongs(data))
        .catch(err => console.log("error! ", err));
    }

    return (
        <div className="temp">
            <p>Songs: {songs}</p>
            <label for="playlist1">Playlist 1</label>
            <input type="text" id="playlist1" name="playlist1"></input>
            
            <label for="playlist2">Playlist 2</label>
            <input type="text" id="playlist2" name="playlist2"></input>
            <br></br>
            <button onClick={() => mergePlaylists()}>Merge Playlists</button>
        </div>
    )
}

export default Merge