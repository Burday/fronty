import React from 'react';
import styled from 'styled-components';
import DateTime from './DateTime.js';
import DiscordStatus from './DiscordStatus';
import Greeting from './Greeting.js';
import Input from './Input.js';
import Websites from './Websites.js';
const Container = styled.div`
	margin: auto;
`;
const Header = ({ greeting, greetingToggler }) => {
	return (
		<Container>
			<Greeting greeting={greeting} greetingToggler={greetingToggler} />
			<nav className="Header-nav">
				<DateTime />
				<Input />
				<Websites />
				<DiscordStatus />
			</nav>
		</Container>
	);
};

export default Header;
