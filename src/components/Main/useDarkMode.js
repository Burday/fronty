import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState(true);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === false ? setMode(true) : setMode(false)
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)

    console.log(`themeee ${theme}`)
    }, []);
    return [theme, themeToggler]
};
