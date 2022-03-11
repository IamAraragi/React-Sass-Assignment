import React from 'react';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="Prescription__footer container clearfix">
      <Container className="clearfix">
        <div className="Prescription__buttons">
          <a href="index.html">
            <Button className="Prescription__button--footer Prescription__button--first" text="PHIL SUPPORT" />
          </a>
          <a href="index.html">
            <Button className="Prescription__button--footer Prescription__button--second" text="855.977.0975" />
          </a>
        </div>
        <ul className="Prescription__footer-list clearfix">
          <li className="Prescription__footer-items Prescription__footer-items--first left">&#169;Phil,Inc</li>
          <li className="Prescription__footer-items Prescription__footer-items--second left">
            <a href="index.html" className="Prescription__link">
              Privacy Policy
            </a>
          </li>
          <li className="Prescription__footer-items Prescription__footer-items--third left">
            <a href="index.html" className="Prescription__link">
              Terms of Use
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
