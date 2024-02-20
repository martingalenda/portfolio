import { useEffect } from 'react'
import WOW from 'wow.js';

const useWow = (dependency) => {
    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, [dependency]);
}

export default useWow