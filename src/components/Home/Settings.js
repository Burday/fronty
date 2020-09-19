import { Button, Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import styled from 'styled-components';
import DarkThemeToggle from '../redux/DarkThemeToggle';
import { text } from '../redux/differentThemes';
import GreetingToggle from '../redux/greetingToggler';
const Settings = () => {
	const CustomIcon = styled(MoreVertIcon)`
		color: ${text};

		@media (max-width: 850px) {
			width: 40%;
		}
	`;

	const TheButton = styled(Button)``;

	const SettingsContainer = styled.div`
		margin-left: 1%;
		margin-top: 1%;

		@media (max-width: 850px) {
			width: 10%;
		}
		@media (max-width: 300px) {
			width: 1%;
			margin-left: 0%;
		}
	`;

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<SettingsContainer>
			<TheButton
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<CustomIcon />
			</TheButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<DarkThemeToggle />
				<GreetingToggle />
			</Menu>
		</SettingsContainer>
	);
};

export default Settings;
