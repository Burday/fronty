import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import '../css/Input.css';

export const text = theme('theme', {
	light: '#363537',
	dark: '#adadad',
});

export const shadow = theme('theme', {
	light: '#b5b5b5',
	dark: '#202020',
});

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
