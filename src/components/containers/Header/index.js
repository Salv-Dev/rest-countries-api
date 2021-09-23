import React from 'react';
import AppBar from '@/components/ui/AppBar';
import Button from '@/components/ui/Button';
import ToolBar from '@/components/ui/ToolBar';
import { IoMoonOutline } from 'react-icons/io5';
import { IoSunnyOutline } from 'react-icons/io5';

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <AppBar>
        <ToolBar title="Where in the world?">
        <Button 
            startIcon={isDarkMode ? <IoSunnyOutline size={18} /> : <IoMoonOutline size={18} />}
            onClick={() => setIsDarkMode(prev => !prev)}
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        </ToolBar>
    </AppBar>
  );
}

export default Header;