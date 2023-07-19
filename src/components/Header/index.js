import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import logo from '../../assets/cover/logo-no-background.png';

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <img src={logo} alt="logo" className='logo'></img>
      <img src={coverImage} alt="wooden background" className='coverImage'></img>
      {props.children}
    </header>
  );
}

export default Header;
