import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
