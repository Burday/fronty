import { Button, Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { text } from '../redux/differentThemes';
const Settings = () => {
	const CustomIcon = styled(MoreVertIcon)`
		color: ${text};
	`;
	const ButtonContainer = styled.div`
		margin: 1%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	`;

	const SettingsContainer = styled.div`
		margin-left: 1%;
		margin-top: 1%;
	`;
	//console.log(`State of darkmode ${state.darkMode} \n State of greeting ${state.greeting}`)

	const handleSettings = () => {
		handleClose();
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<SettingsContainer>
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<CustomIcon />
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<Link to="/">
					<ButtonContainer>
						<Button
							name="router"
							variant="contained"
							color="primary"
							onClick={handleSettings}
						>
							More Settings
						</Button>
					</ButtonContainer>
				</Link>
			</Menu>
		</SettingsContainer>
	);
};

export default Settings;
