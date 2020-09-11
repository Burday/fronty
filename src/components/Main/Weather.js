import React from 'react';
import styled from 'styled-components';
//TODO: Actually make it show the real weather from a given location (provided in settings)
const Weather = () => {
	const Container = styled.div`
		margin-bottom: 2%;
	`;
	return (
		<Container>
			<p className="Weather-text">26*C</p>
		</Container>
	);
};

export default Weather;
