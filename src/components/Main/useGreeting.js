import { useEffect, useState } from 'react';
export const useGreeting = () => {
    const [greeting, setGreeting] = useState(true);
    const setMode = mode => {
        window.localStorage.setItem('greeting', mode)
        setGreeting(mode)
    };

    const greetingToggler = () => {
        greeting === true ? setMode(false) : setMode(true)
    };

    useEffect(() => {
        const localGreeting = window.localStorage.getItem('greeting');
        localGreeting && setGreeting(localGreeting)
    }, []);
    return [greeting, greetingToggler]
};
