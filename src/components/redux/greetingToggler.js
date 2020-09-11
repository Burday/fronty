import { FormControlLabel, Switch } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TOGGLE_GREETING } from './actions';

const DarkThemeToggle = () => {
	const greetingEnabled = useSelector(
		(state) => state.preferences.greetingEnabled,
	);
	const dispatch = useDispatch();
	const Container = styled.div``;
	return (
		<Container>
			<FormControlLabel
				control={
					<Switch
						checked={greetingEnabled}
						onChange={() => dispatch({ type: TOGGLE_GREETING })}
						name="checkedA"
						color="primary"
					/>
				}
				label="Greeting"
			/>
		</Container>
	);
};

export default DarkThemeToggle;
