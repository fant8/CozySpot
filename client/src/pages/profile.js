import React from "react";
import '../profile_src/profile.css'
import pro_pic from '../profile_src/temp_profile.jpg'
import add_friend from '../profile_src/add_friend.png'
import view_more from '../profile_src/view_more.png'
import playlist1 from '../profile_src/playlist_1.jpg'
import playlist2 from '../profile_src/playlist_2.jpg'
import playlist3 from '../profile_src/playlist_3.jpg'
import playlist4 from '../profile_src/playlist_4.jpg'
import ProfilePlaylist from '../components/profilePlaylist.js'
import ProfileArtist from '../components/profileArtist.js'
import ProfileAlbum from '../components/profileAlbum.js'
import ProfileSong from '../components/profileSong.js'

const Profile = () => {

    return(
        <div classname="UserProfile">
            {/* User Profile */} 
            <img class="center" style={{marginTop: "3%", width: "20%", height: "10%"}} src={pro_pic}></img>
            <center><h1>Lon</h1></center>
            <center><h5>"Music is a moral law. It gives soul to the universe."</h5></center>
            <img class="center" style={{width: "2%", height: "2%"}} src={add_friend}></img>

            {/* Playlists */} 
            <h2>Featured Playlists:</h2>
            <img class = "right" style={{width: "9%", height: "6%"}} src={view_more}></img>
            <div class="row">
                <div class="column">
                    <img src={playlist1} style={{width: "100%", height: "70%"}}></img>
                    <p>Playlist 1</p>
                </div>
                <div class="column">
                    <img src={playlist2} style={{width: "100%", height: "70%"}}></img>
                    <p>Playlist 2</p>
                </div>
                <div class="column">
                    <img src={playlist3} style={{width: "100%", height: "70%"}}></img>
                    <p>Playlist 3</p>
                </div>
                <div class="column">
                    <img src={playlist4} style={{width: "100%", height: "70%"}}></img>
                    <p>Playlist 4</p>
                </div>
            </div>

            {/* Tracks */}
            <h2>Top Tracks this month:</h2>
            <img class = "right" style={{width: "9%", height: "6%"}} src={view_more}></img>
            <div class="grid-container">
                <div class="grid-item"><img style={{width: "70%", height: "100%"}} src={playlist1}></img></div>
                <div class="grid-item">Power</div>
                <div class="grid-item">Kanye West</div>
                <div class="grid-item">My Beautiful Dark Twisted Fantasy</div>
            </div>
            <div class="grid-container">
                <div class="grid-item"><img style={{width: "70%", height: "100%"}} src={playlist2}></img></div>
                <div class="grid-item">Maestro</div>
                <div class="grid-item">Changmo</div>
                <div class="grid-item">DBSG 2</div>
            </div>
            <div class="grid-container">
                <div class="grid-item"><img style={{width: "70%", height: "100%"}} src={playlist3}></img></div>
                <div class="grid-item">New Thing (Prod. Zico) (Feat. Homies)</div>
                <div class="grid-item">Zico</div>
                <div class="grid-item">Street Man Fighter EP 2</div>
            </div>
            <div class="grid-container">
                <div class="grid-item"><img style={{width: "70%", height: "100%"}} src={playlist4}></img></div>
                <div class="grid-item">Mama Lisa</div>
                <div class="grid-item">Swervy</div>
                <div class="grid-item">Undercover Angel</div>
            </div>

            {/* Artists */}
            <h2 style={{marginTop: "5%"}}>Top Artists this month:</h2>
            <img class = "right" style={{width: "9%", height: "6%"}} src={view_more}></img>
            <div class="row">
                <div class="column">
                    <img src={playlist1} style={{width: "100%", height: "70%"}}></img>
                    <p>Artist 1</p>
                </div>
                <div class="column">
                    <img src={playlist2} style={{width: "100%", height: "70%"}}></img>
                    <p>Artist 2</p>
                </div>
                <div class="column">
                    <img src={playlist3} style={{width: "100%", height: "70%"}}></img>
                    <p>Artist 3</p>
                </div>
                <div class="column">
                    <img src={playlist4} style={{width: "100%", height: "70%"}}></img>
                    <p>Artist 4</p>
                </div>
            </div>

            {/* Albums */}
            <h2>Top Albums this month:</h2>
            <img class = "right" style={{width: "9%", height: "6%"}} src={view_more}></img>
            <div class="row">
                <div class="column">
                    <img src={playlist1} style={{width: "100%", height: "70%"}}></img>
                    <p>Album 1</p>
                </div>
                <div class="column">
                    <img src={playlist2} style={{width: "100%", height: "70%"}}></img>
                    <p>Album 2</p>
                </div>
                <div class="column">
                    <img src={playlist3} style={{width: "100%", height: "70%"}}></img>
                    <p>Album 3</p>
                </div>
                <div class="column">
                    <img src={playlist4} style={{width: "100%", height: "70%"}}></img>
                    <p>Album 4</p>
                </div>
            </div>

        </div>

    )
}

export default Profile