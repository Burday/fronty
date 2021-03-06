import theme from 'styled-theming';

export const body = theme('theme', {
	light: '#ecf0f1',
	dark: '#34495e',
});

export const text = theme('theme', {
	light: '#363537',
	dark: '#adadad',
});

export const borderColor = theme('theme', {
	light: '#adadad',
	dark: '#363537',
});

export const toggleBorder = theme('theme', {
	light: '#FFF',
	dark: '#6B8096',
});

export const background = theme('theme', {
	light: '#363537',
	dark: '#242424',
});

export const headerBackground = theme('theme', {
	light: '#dedede',
	dark: '#2c3e50',
});

export const shadow = theme('theme', {
	light: '#b5b5b5',
	dark: '#202020',
});

export const inputBG = theme('theme', {
	light: '',
	dark: '#242424',
});

export const effect = {
	notSelected: '#e74c3c',
	selected: '#c0392b',
};

export const input = {
	notFocused: '#adadad',
	focused: '#27ae60',
};
