import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';

const Greeting = ({ greeting }) => {
	const [time, setTime] = useState(moment().format(`k`));
	let theGreet;
	const Text = styled.p`
		text-align: center;
		font-size: 25px;
		font-weight: 200;
		bottom: 0px;
		margin-bottom: 0px;
		margin-top: 5px;
	`;

	const Container = styled.div`
		margin-bottom: 2%;
	`;
	if (greeting === true) {
		if (parseInt(time) >= 21 || (parseInt(time) >= 0 && parseInt(time) < 5)) {
			theGreet = `Good Night`;
		} else if (parseInt(time) >= 19) {
			theGreet = `Good Evening`;
		} else if (parseInt(time) >= 16) {
			theGreet = `Good Afternoon`;
		} else if (parseInt(time) >= 12) {
			theGreet = `Good Day`;
		} else if (parseInt(time) >= 5) {
			theGreet = `Good Morning`;
		}
	}
	return (
		<Container>
			<Text>{theGreet}</Text>
		</Container>
	);
};
export default Greeting;
