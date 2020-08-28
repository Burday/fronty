import { useEffect, useState } from 'react';
const lelocal = window.localStorage.getItem('greeting');
const localGreeting = JSON.parse(lelocal)

export const useGreeting = () => { 
    const [greeting, setGreeting] = useState(localGreeting);

    const setMode = mode => {
        window.localStorage.setItem('greeting', mode)
        setGreeting(mode)
    };

    const greetingToggler = () => {
        greeting === false ? setMode(true) : setMode(false)
    };

    useEffect(() => {
        
        localGreeting ? setGreeting(localGreeting) : setMode(false)

    }, []);

    return [greeting, greetingToggler]
};