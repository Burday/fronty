import React from 'react';
import styled from 'styled-components';
import '../css/App.css';
import Header from '../Main/Header.js';
import Settings from '../Main/Settings.js';
import { useGreeting } from '../Main/useGreeting';
import {
	borderColor,
	headerBackground,
	shadow,
	text,
} from '../redux/differentThemes';
function App() {
	const Container = styled.div`
		background: ${headerBackground};
		background-color: ${headerBackground};
		border-color: ${borderColor};
		color: ${text};
		font-size: 15px;
		text-align: center;
		padding-top: 20px;
		padding-bottom: 20px;
		position: relative;
		border-radius: 25px;
		left: auto;
		right: auto;
		margin: auto;
		box-shadow: 10px 5px ${shadow};
	`;
	const TheHeader = styled.header`
		min-height: 100vh;
		display: flex;
		position: relative;
	`;
	const [greeting, greetingToggler] = useGreeting();
	return (
		<div className="App">
			<TheHeader>
				<Settings greeting={greeting} greetingToggler={greetingToggler} />
				<Container>
					<Header greeting={greeting} greetingToggler={greetingToggler} />
				</Container>
			</TheHeader>
		</div>
	);
}

export default App;
