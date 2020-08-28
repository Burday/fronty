import { Button, Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/Settings.css';

const Settings = ({ theme, themeToggler, greetingToggler, greeting }) => {
	const CustomIcon = styled(MoreVertIcon)`
		color: ${(props) => props.theme.text};
	`;
	//console.log(`State of darkmode ${state.darkMode} \n State of greeting ${state.greeting}`)

	const handleDarkMode = () => {
		themeToggler();
	};

	const handleGreeting = () => {
		greetingToggler();
	};

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
		<div className="Settings-div">
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
				<div className="buttonDiv">
					<Button
						name="darkMode "
						variant="contained"
						color="primary"
						onClick={handleDarkMode}
					>
						{theme ? 'Disable' : 'Enable'} Dark Mode
					</Button>
				</div>
				<div className="buttonDiv">
					<Button
						name="greeting"
						variant="contained"
						color="primary"
						onClick={handleGreeting}
					>
						{greeting ? 'Disable' : 'Enable'} Greeting
					</Button>
				</div>
				<Link to="/settings">
					<div className="buttonDiv">
						<Button
							name="router"
							variant="contained"
							color="primary"
							onClick={handleSettings}
						>
							More Settings
						</Button>
					</div>
				</Link>
			</Menu>
		</div>
	);
};

export default Settings;
