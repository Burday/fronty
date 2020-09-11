import React from 'react';
import styled from 'styled-components';
import { effect, headerBackground, text } from '../redux/differentThemes';

const Websites = () => {
	const UL = styled.ul`
		border-color: ${headerBackground};
		color: ${text};
		display: table-cell;
		text-align: center;
		height: 100%;
		top: auto;
		padding: 4px 10px 10px 10px;
		transition: all 0.5s;
		cursor: default;
		list-style-type: none;

		border-style: solid;
		border-width: 0px 1px 0px 1px;
	`;
	const Container = styled.div``;
	const Listed = styled.div`
		border-width: 0px 1px 0px 1px;
		border-right-style: solid;
		border-left-style: solid;
		color: ${text};
		border-color: ${headerBackground};
		transition: 0.5s;

		&:hover {
			border-width: 0px 1px 0px 1px;
			border-right-style: solid;
			border-left-style: solid;
			color: ${effect.notSelected};
			border-color: ${effect.notSelected};
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
		top: auto;
		width: auto;
		left: auto;
		right: auto;
		bottom: 0px;
		margin-bottom: 0px;
		margin-top: 5px;
		font-size: 20px;
		margin: 0px 10px 0px 10px;
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
