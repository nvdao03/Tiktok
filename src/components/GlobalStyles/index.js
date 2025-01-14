import PropTypes from 'prop-types';
import React from 'react';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
  // Chỉ cho phép chứa duy nhất 1 element
  return React.Children.only(children);
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
