import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import logo from '../../assets/cover/logo-no-background.png';

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="coverImage-container">
        <img src={coverImage} alt="wooden background" className="coverImage" />
      </div>
      {props.children}
    </header>
  );
}

export default Header;
