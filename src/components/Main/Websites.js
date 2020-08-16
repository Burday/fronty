import React from 'react'
import '../css/Websites.css'
const Websites = () => {
    return(
        <div>
            <ul className="entertainment unlisted">
                <p className="title">Entertainment</p>
                    <li><a href="https://www.youtube.com/">YouTube</a></li>
                    <li><a href="https://www.twitch.tv/">Twitch</a></li>
                    <li><a href="https://www.sportsurge.net/">SportSurge</a></li>
            </ul>
            <ul className="social unlisted">
                <p className="title">Communication</p>
                    <li><a href="https://www.messenger.com/">Messenger</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://www.ruqqus.com/">Ruqqus</a></li>
            </ul>
            <ul className="music unlisted">
                <p className="title">Music</p>
                    <li><a href="https://www.last.fm/">Lastfm</a></li>
                    <li><a href="https://www.rym.com/">RateYourMusic</a></li>
                    <li><a href="https://www.spotify.com/">Spotify</a></li>
            </ul>
            <ul className="Reddit unlisted">
                <a className="unique title" href="https://www.reddit.com/">Reddit</a>
                    <li><a href="https://www.reddit.com/r/formula1">r/formula1</a></li>
                    <li><a href="https://www.reddit.com/r/startpages">r/startpages</a></li>
                    <li><a href="https://www.reddit.com/r/forsen">r/forsen</a></li>
            </ul>
            <ul className="chan unlisted">
                <a className="unique title"href="https://www.4chan.org/">4chan</a>
                    <li><a href="https://www.boards.4channel.org/sp/">/sp/</a></li>
                    <li><a href="https://www.boards.4channel.org/tv/">/tv/</a></li>
                    <li><a href="https://www.boards.4chan.org/pol/">/pol/</a></li>
            </ul>
            </div>
    )
}
export default Websites;