import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  children = 'click here',
  handleClick = () => {},
  type = 'button',
  className = '',
  style = {},
  disabled = false,
}) => (
  <button
    type={type}
    disabled={disabled}
    style={style}
    className={`btn ${className}`}
    onClick={handleClick}
  >
    {children}
  </button>
);
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Button;
