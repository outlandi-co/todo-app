// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ openItems }) => {
  return (
    <div>
      <h1>Header Component</h1>
      <p>Open Items: {openItems}</p>
    </div>
  );
};

Header.propTypes = {
  openItems: PropTypes.number.isRequired, // Ensure openItems is required and must be a number
};

export default Header;
