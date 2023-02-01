import React, { useEffect, useState } from "react";
import Playlist from "../components/playlist";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";

const Merge = (props) => {
    const spotifyApi = props.spotifyApi;
    const [songs, updateSongs] = useState([]);

    useEffect(() => {
        console.log(spotifyApi);
        // mergePlaylists();
    })

    function mergePlaylists() {
        spotifyApi.getMySavedTracks({
            limit: 10,
            offset: 1
        })
            .then(data => updateSongs(data))
            .catch(err => console.log("error! ", err));
    }

    return (
        <div>
            <Layout/>
            <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <div class="pricing-header p-3 pb-md-4 mx-auto text-center" style={{ margin: "3%" }}>
                    <h5 class="display-4 fw-normal">Merge Playlists</h5>
                    <p class="fs-5 text-muted">Drag and drop songs between playlists.</p>
                </div>

                <Playlist />

                <button onClick={() => mergePlaylists()} className="btn btn-lg btn-outline-primary" style={{ margin: "3%" }}>Save changes</button>
            </div>
        </div>
    )
}

export default Merge