import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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

const Greeting = () => {
	const greetingEnabled = useSelector(
		(state) => state.preferences.greetingEnabled,
	);
	const [time, setTime] = useState(moment().format(`k`));
	let theGreet;

	useEffect(() => {
		let timerID = setInterval(() => tick(), 1000);
		//returns the useEffect funciton by resetting the interval
		return function cleanup() {
			clearInterval(timerID);
		};
	});
	function tick() {
		setTime(moment().format(`k`));
	}
	if (greetingEnabled === true) {
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
