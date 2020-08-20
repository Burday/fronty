import { useEffect, useState } from 'react';
const lelocal = window.localStorage.getItem('theme');
const localTheme = JSON.parse(lelocal)

export const useDarkMode = () => {
    const [theme, setTheme] = useState(localTheme);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === false ? setMode(true) : setMode(false)
    };

    useEffect(() => {
        
        localTheme ? setTheme(localTheme) : setMode(false)

    }, []);

    return [theme, themeToggler]
};