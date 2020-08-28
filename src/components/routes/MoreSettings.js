import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../Main/useDarkMode';
import { GlobalStyles } from '../themes/globalStyles';
import { darkTheme, lightTheme } from '../themes/Theme';

const MoreSettings = () => {
	const [theme] = useDarkMode();
	const themeMode = theme === false ? lightTheme : darkTheme;

	const [anchorEl, setAnchorEl] = useState(null);
	const handleSettings = () => {
		setAnchorEl(null);
	};
	console.log(themeMode);
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<div className="App">
					<header className="App-header">
						<p className="title">
							Here you can see more settings yes pretty empty right now init
						</p>
						<Link to="/">
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
					</header>
				</div>
			</>
		</ThemeProvider>
	);
};

export default MoreSettings;
