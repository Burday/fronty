import React from 'react';
import styled from 'styled-components';
import Header from '../Home/Header.js';
import Settings from '../Home/Settings.js';
import {
	borderColor,
	headerBackground,
	shadow,
	text,
} from '../redux/differentThemes';
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
const TheApp = styled.div``;
const TheHeader = styled.header`
	min-height: 100vh;
	display: flex;
	position: relative;
	width: 100%;
`;
function App() {
	return (
		<TheApp>
			<TheHeader>
				<Settings />
				<Container>
					<Header />
				</Container>
			</TheHeader>
		</TheApp>
	);
}

export default App;
