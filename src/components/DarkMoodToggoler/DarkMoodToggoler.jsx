import React from 'react';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from '../../ThemeContext/ThemeContext';

const DarkMoodToggoler = () => {
    const {darkMode, setDarkMode} = useDarkMode();
    return (
        <button
        onClick={() => setDarkMode(!darkMode)}
        >
           {darkMode ? <MdSunny size={25}  className='cursor-pointer'/> : <FaMoon size={25} className='text-gray-900 cursor-pointer'/>}
        </button>
    );
};

export default DarkMoodToggoler;