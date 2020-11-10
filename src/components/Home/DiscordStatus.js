import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
	margin: auto;
	colorprimary: red;
	display: inline-flex;
`;

const Checkmark = styled(CheckIcon)`
	color: green;
`;

const Cross = styled(CloseIcon)`
	color: red;
`;
const LoadingIcon = styled.div`
	padding-left: 7%;
	width: 1%;
`;
const Header = () => {
	const [text, setText] = useState(`Loading...`);
	const [status, setStatus] = useState(`loading`);
	function CheckLoading() {
		if (status === `loading`) {
			return (
				<LoadingIcon>
					<CircularProgress size="20px" color="#27ae60" />
				</LoadingIcon>
			);
		} else if (status === 'none') {
			return <Checkmark />;
		} else {
			return <Cross />;
		}
	}
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
			<CheckLoading />
		</Container>
	);
};

export default Header;
