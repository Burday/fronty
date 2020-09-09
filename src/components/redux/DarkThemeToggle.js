import { FormControlLabel, Switch } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TOGGLE_DARKTHEME } from './actions';

const DarkThemeToggle = () => {
	const darkThemeEnabled = useSelector(
		(state) => state.preferences.darkThemeEnabled,
	);
	const dispatch = useDispatch();
	const Container = styled.div``;
	return (
		<Container>
			<FormControlLabel
				control={
					<Switch
						checked={darkThemeEnabled}
						onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
						name="checkedA"
						color="primary"
					/>
				}
				label="Dark Mode"
			/>
		</Container>
	);
};

export default DarkThemeToggle;
