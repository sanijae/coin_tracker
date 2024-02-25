import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <p>
        {' '}
        {` Muhammad Sani  ${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}

export default Footer;
