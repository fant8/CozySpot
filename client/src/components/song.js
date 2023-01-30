import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Song = ({ data }) => {


    return (
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static" style={{width: "300px"}}>
                <h6 class="mb-0">{data.artist}</h6>
                <p class="card-text mb-auto">{data.name}</p>
            </div>
            <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="125" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
        </div>
    )

}

export default Song