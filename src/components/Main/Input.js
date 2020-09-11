import React from 'react';
import styled from 'styled-components';
import { headerBackground, input, text } from '../redux/differentThemes';

const Input = () => {
	const Input = styled.input`
		background-color: ${headerBackground};
		color: ${text};
			text-align:center;
			display: table-cell;
			width: 40%;
			padding: 10px 10px;
			border-radius: 25px;
			background: transparent;
			border: 2px solid;
			transition: 0.25s;
			text-align: center;
			border-color: ${input.notFocused}
		}
		/*Whenever the input is focused*/
		&:focus {
			outline: 0;
			width: 80%;
			border-color: ${input.focused}

		}
	`;

	const Form = styled.form`
		margin-bottom: 10px;
		text-align: center;
	`;

	return (
		<Form id="form" method="get" action="https://duckduckgo.com/">
			<Input
				placeholder="Search on DuckDuckGo"
				id="search"
				size="40"
				name="q"
				autoComplete="off"
			></Input>
		</Form>
	);
};

export default Input;
