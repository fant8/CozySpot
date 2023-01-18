import React from "react";

const Merge = () => {

    function mergePlaylists(){

    }

    return (
        <div className="temp">
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