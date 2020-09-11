import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = () => {
	const TimeContainer = styled.p`
		font-size: 40px;
		font-weight: 600;
		margin-bottom: auto;

		bottom: 0px;
		margin-bottom: 0px;
		margin-top: 5px;
	`;
	const DateContainer = styled.p`
		font-size: 30px;
		font-weight: 600;

		bottom: 0px;
		margin-bottom: 0px;
		margin-top: 5px;
	`;
	//sets the state used for displaying the time and date
	const [time, setTime] = useState(moment().format(`HH:mm:ss`));
	const [date, setDate] = useState(moment().format(`dddd MMMM Do`));
	//changes the state every 1000ms
	useEffect(() => {
		let timerID = setInterval(() => tick(), 1000);
		//returns the useEffect funciton by resetting the interval
		return function cleanup() {
			clearInterval(timerID);
		};
	});
	//sets the state
	function tick() {
		setTime(moment().format(`HH:mm:ss`));
		setDate(moment().format(`dddd MMMM Do`));
	}

	return (
		<header>
			<div>
				<TimeContainer>{time}</TimeContainer>
			</div>

			<div>
				<DateContainer>{date}</DateContainer>
			</div>
		</header>
	);
};

export default Header;
