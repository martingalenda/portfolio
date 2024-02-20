import { useEffect } from 'react'
import WOW from 'wowjs';

const useWow = (dependency) => {
    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, [dependency]);
}

export default useWow