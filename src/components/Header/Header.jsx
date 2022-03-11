import React from 'react';

import logo from '../../assets/images/logo.png';
import logoDesktop from '../../assets/images/logo_desktop.png';
import rxIcon from '../../assets/images/rx_icon.png';
import userIcon from '../../assets/images/user_icon.png';

import './Header.css';

function Header() {
  return (
    <header className="Prescription__header">
      <div className="Prescription__header-container clearfix">
        <figure className="Prescription__logo left">
          <a href="index.html">
            <img src={logo} alt="logo" className="Prescription__img--mobile" />
          </a>
          <a href="index.html">
            <img src={logoDesktop} alt="logo" className="Prescription__img--desktop" />
          </a>
        </figure>
        <div className="Prescription__list clearfix right">
          <div className="Prescription__items clearfix left">
            <img src={rxIcon} alt="rx_icon" className="Prescription__icon left" />
            <p className="Prescription__paragraph left">Prescriptions</p>
            <div className="Prescription__overlay"></div>
          </div>
          <div className="Prescription__items Prescription__items--second clearfix right">
            <img src={userIcon} alt="user_icon" className="Prescription__icon left" />
            <p className="Prescription__paragraph left">Jenny Bradely</p>
            <div className="Prescription__overlay"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
