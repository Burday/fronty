import React from 'react';
import styled from 'styled-components';
import '../css/Input.css';
import { shadow, text } from '../redux/differentThemes';

const Input = () => {
	const Input = styled.input`
		background-color: ${shadow};
		color: ${text};
	`;

	return (
		<form id="form" method="get" action="https://duckduckgo.com/">
			<Input
				placeholder="Search on DuckDuckGo"
				id="search"
				size="40"
				name="q"
				autoComplete="off"
			></Input>
		</form>
	);
};

export default Input;
