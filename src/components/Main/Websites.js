import React from 'react'
import styled from 'styled-components'
import '../css/Websites.css'
const Websites = () => {
    const UL = styled.ul`
    border-color: ${props => props.theme.headerBackground}; 
color:${props => props.theme.text};
`
    return(
        <div>
            <UL className="entertainment unlisted-element">
                <p className="title">Entertainment</p>
                    <li><a href="https://www.youtube.com/">YouTube</a></li>
                    <li><a href="https://www.twitch.tv/">Twitch</a></li>
                    <li><a href="https://www.sportsurge.net/">SportSurge</a></li>
            </UL>
            <UL className="social unlisted-element">
                <p className="title">Communication</p>
                    <li><a href="https://www.messenger.com/">Messenger</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://www.ruqqus.com/">Ruqqus</a></li>
            </UL>
            <UL className="music unlisted-element">
                <p className="title">Music</p>
                    <li><a href="https://www.last.fm/">Lastfm</a></li>
                    <li><a href="https://www.rym.com/">RateYourMusic</a></li>
                    <li><a href="https://www.spotify.com/">Spotify</a></li>
            </UL>
            <UL className="Reddit unlisted-element">
                <a className="unique title" href="https://www.reddit.com/">Reddit</a>
                    <li><a href="https://www.reddit.com/r/formula1">r/formula1</a></li>
                    <li><a href="https://www.reddit.com/r/startpages">r/startpages</a></li>
                    <li><a href="https://www.reddit.com/r/forsen">r/forsen</a></li>
            </UL>
            <UL className="chan unlisted-element">
                <a className="unique title"href="https://www.4chan.org/">4chan</a>
                    <li><a href="https://www.boards.4channel.org/sp/">/sp/</a></li>
                    <li><a href="https://www.boards.4channel.org/tv/">/tv/</a></li>
                    <li><a href="https://www.boards.4chan.org/pol/">/pol/</a></li>
            </UL>
            </div>
    )
}
export default Websites;