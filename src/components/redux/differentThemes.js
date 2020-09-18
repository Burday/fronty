import theme from 'styled-theming';
import {
	backgroundF,
	bodyF,
	borderColorF,
	headerBackgroundF,
	inputBGF,
	shadowF,
	textF,
	toggleBorderF,
} from './themeSwitch';
export const body = theme('theme', {
	light: bodyF.light,
	dark: bodyF.dark,
});

export const text = theme('theme', {
	light: textF.light,
	dark: textF.dark,
});

export const borderColor = theme('theme', {
	light: borderColorF.light,
	dark: borderColorF.dark,
});

export const toggleBorder = theme('theme', {
	light: toggleBorderF.light,
	dark: toggleBorderF.dark,
});

export const background = theme('theme', {
	light: backgroundF.light,
	dark: backgroundF.dark,
});

export const headerBackground = theme('theme', {
	light: headerBackgroundF.light,
	dark: headerBackgroundF.dark,
});

export const shadow = theme('theme', {
	light: shadowF.light,
	dark: shadowF.dark,
});

export const inputBG = theme('theme', {
	light: '',
	dark: inputBGF.dark,
});

export const effect = {
	notSelected: '#e74c3c',
	selected: '#c0392b',
};

export const input = {
	notFocused: '#adadad',
	focused: '#27ae60',
};
