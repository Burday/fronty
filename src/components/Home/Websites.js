import React from 'react';
import styled from 'styled-components';
import { effect, text } from '../redux/differentThemes';

const Websites = () => {
	const UL = styled.ul`
		color: ${text};
		display: table-cell;
		text-align: center;
		margin: auto;
		top: auto;
		padding: 1vh;
		cursor: default;
		list-style-type: none;
		width: 40%;
		@media (max-width: 850px) {
			padding: 0.5vh;
		}
	`;
	const Container = styled.div`
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;

		@media (max-width: 850px) {
			flex-direction: column;
		}
	`;
	const Listed = styled.div`
		color: ${text};
		transition: 0.5s;

		&:hover {
			color: ${effect.notSelected};
		}

		& > li > a:hover {
			color: ${effect.selected};
			transition: 0.5s;
		}
		& > li > a {
			margin: 0px 10px 0px 10px;
		}
	`;
	const Text = styled.p`
		bottom: 0px;
		font-size: 20px;
		margin: 0;
	`;

	const Unique = styled.a`
		top: auto;
		width: auto;
		left: auto;
		right: auto;
		bottom: 0px;
		margin-bottom: 0px;
		margin-top: 5px;
		font-size: 20px;
		margin: 0px 10px 0px 10px;
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	`;

	const Links = styled.a`
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	`;
	return (
		<Container>
			<UL className="entertainment unlisted-element">
				<Listed>
					<Text className="title">Entertainment</Text>
					<li>
						<Links href="https://www.youtube.com/">YouTube</Links>
					</li>
					<li>
						<Links href="https://www.twitch.tv/">Twitch</Links>
					</li>
					<li>
						<Links href="https://www.sportsurge.net/">SportSurge</Links>
					</li>
				</Listed>
			</UL>
			<UL className="social unlisted-element">
				<Listed>
					<Text className="title">Communication</Text>
					<li>
						<Links href="https://www.messenger.com/">Messenger</Links>
					</li>
					<li>
						<Links href="https://www.instagram.com/">Instagram</Links>
					</li>
					<li>
						<Links href="https://www.ruqqus.com/">Ruqqus</Links>
					</li>
				</Listed>
			</UL>
			<UL className="music unlisted-element">
				<Listed>
					<Text className="title">Music</Text>
					<li>
						<Links href="https://www.last.fm/">Lastfm</Links>
					</li>
					<li>
						<Links href="https://www.rym.com/">RateYourMusic</Links>
					</li>
					<li>
						<Links href="https://www.spotify.com/">Spotify</Links>
					</li>
				</Listed>
			</UL>
			<UL className="Reddit unlisted-element">
				<Listed>
					<Unique className="unique title" href="https://www.reddit.com/">
						Reddit
					</Unique>
					<li>
						<Links href="https://www.reddit.com/r/formula1">r/formula1</Links>
					</li>
					<li>
						<Links href="https://www.reddit.com/r/startpages">
							r/startpages
						</Links>
					</li>
					<li>
						<Links href="https://www.reddit.com/r/forsen">r/forsen</Links>
					</li>
				</Listed>
			</UL>
			<UL className="chan unlisted-element">
				<Listed>
					<Unique className="unique title" href="https://www.4chan.org/">
						4chan
					</Unique>
					<li>
						<Links href="https://www.boards.4channel.org/sp/">/sp/</Links>
					</li>
					<li>
						<Links href="https://www.boards.4channel.org/tv/">/tv/</Links>
					</li>
					<li>
						<Links href="https://www.boards.4chan.org/pol/">/pol/</Links>
					</li>
				</Listed>
			</UL>
		</Container>
	);
};
export default Websites;
