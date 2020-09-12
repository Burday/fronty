import React from 'react';
import styled from 'styled-components';
import Hamburger from '../MoreSettings/Hamburger';
const MoreSettings = () => {
	const Container = styled.div`
		min-height: 100vh;
		display: flex;
		position: relative;
	`;
	return (
		<Container>
			<Hamburger />
		</Container>
	);
};

export default MoreSettings;
