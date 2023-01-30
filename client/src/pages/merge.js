import React from "react";
import Playlist from "../components/playlist";
import 'bootstrap/dist/css/bootstrap.min.css';

const Merge = () => {

    function mergePlaylists() {

    }

    return (
        <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center" style={{margin: "3%"}}>
                <h5 class="display-4 fw-normal">Merge Playlists</h5>
                <p class="fs-5 text-muted">Drag and drop songs between playlists.</p>
            </div>
            <Playlist />

            <button onClick={() => mergePlaylists()} className="btn btn-lg btn-outline-primary" style={{margin: "3%"}}>Save changes</button>
        </div>
    )
}

export default Merge