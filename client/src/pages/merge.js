import React from "react";
import Playlist from "../components/playlist";
import 'bootstrap/dist/css/bootstrap.min.css';

const Merge = () => {

    function mergePlaylists() {

    }

    return (
        <div style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <Playlist />

                <button onClick={() => mergePlaylists()}>Merge Playlists</button>
        </div>
    )
}

export default Merge