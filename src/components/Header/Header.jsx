// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header>
      <h1>To Do List: {props.openItems} pending</h1>
    </header>
  );
}

Header.propTypes = {
  openItems: PropTypes.number.isRequired, // Ensure openItems is expected as a number
};

export default Header;
