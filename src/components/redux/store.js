import { createStore } from 'redux';
import rootReducer from './reducers';

const settingsStorage = 'settings';
const persistedTheme = localStorage.getItem(settingsStorage);

let initialState = {
	preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
	const preferences = store.getState().preferences;

	if (!preferences) return;

	localStorage.setItem(settingsStorage, JSON.stringify(preferences));
});

export default store;
