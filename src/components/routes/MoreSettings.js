import React, { useState } from 'react';

const MoreSettings = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleSettings = () => {
		setAnchorEl(null);
	};
	return <h1>hi</h1>;
};

export default MoreSettings;
