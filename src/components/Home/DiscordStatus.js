import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
	margin: auto;

	display: inline-flex;
`;

const Checkmark = styled(CheckIcon)`
	color: green;
`;

const Cross = styled(CloseIcon)`
	color: red;
`;

const Header = () => {
	const [text, setText] = useState(`Loading...`);
	const [status, setStatus] = useState();
	fetch(`https://srhpyqt94yxb.statuspage.io/api/v2/status.json`)
		.then((res) => res.json())
		.then((r) => {
			setText(r.status.description);
			setStatus(r.status.indicator);
		});
	useEffect(() => {
		let textID = setInterval(() => tick(), 60000);
		//returns the useEffect funciton by resetting the interval
		return function cleanup() {
			clearInterval(textID);
		};
	});
	//sets the state
	function tick() {
		fetch(`https://srhpyqt94yxb.statuspage.io/api/v2/status.json`)
			.then((res) => res.json())
			.then((r) => {
				setText(r.status.description);
				setStatus(r.status.indicator);
			});
	}
	return (
		<Container>
			Discord: {text}
			{status === 'none' ? <Checkmark /> : <Cross />}
		</Container>
	);
};

export default Header;
