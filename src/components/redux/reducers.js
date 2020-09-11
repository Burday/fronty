import { combineReducers } from 'redux';
import * as actions from './actions';

const preferences = (
	state = { darkThemeEnabled: false, greetingEnabled: false },
	action,
) => {
	switch (action.type) {
		case actions.TOGGLE_DARKTHEME:
			return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
		case actions.TOGGLE_GREETING:
			return { ...state, greetingEnabled: !state.greetingEnabled };
		default:
			return state;
	}
};

export default combineReducers({ preferences });
