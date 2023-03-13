import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Button } from '../index';
import ThemeContext from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const themeValue = useContext(ThemeContext);
  const { theme } = themeValue;
  const { setThemeActive } = themeValue;

  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <Button>About us</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <Button>Contact</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <Button>Blog</Button>
          </NavLink>
        </li>
      </ul>
      <div className="switchTheme">
        <h5> select theme</h5>
        <Button
          style={{
            margin: '0 2px',
            backgroundColor: theme === 'light' && '#f7c04a',
          }}
          handleClick={() => {
            setThemeActive('light');
          }}
        >
          <BsSunFill
            style={{
              fontSize: '1rem',
              color: theme === 'light' && 'white',
            }}
          />
        </Button>
        <Button
          style={{
            margin: '0 2px',
            backgroundColor: theme === 'dark' && '#f7c04a',
          }}
          handleClick={() => {
            setThemeActive('dark');
          }}
        >
          <BsFillMoonFill
            style={{
              fontSize: '1rem',
              color: theme === 'dark' && 'white',
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
