import React, { useState } from 'react';
import { useDarkMode } from '../Main/useDarkMode';

const MoreSettings = () => {
	const [theme, themeMode] = useDarkMode();

	const [anchorEl, setAnchorEl] = useState(null);
	const handleSettings = () => {
		setAnchorEl(null);
	};
	return <h1>hi</h1>;
};

export default MoreSettings;
