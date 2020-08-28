import moment from 'moment';
import React, { useState } from 'react';
import '../css/Greeting.css';

const Greeting = ({ greeting }) => {
	const [time, setTime] = useState(moment().format(`k`));
	let theGreet;
	if (greeting === true) {
		if (parseInt(time) >= 21 && parseInt(time) >= 0) {
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
		<div className="greeting">
			<p className="greeting-text">{theGreet}</p>
		</div>
	);
};
export default Greeting;
