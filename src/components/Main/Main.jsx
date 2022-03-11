import React from 'react';
import Button from 'components/Button/Button';
import medsIcon from '../../assets/images/meds_icon.png';
import welcome from '../../assets/images/welcome.png';
import packageIcon from '../../assets/images/package_icon.png';
import processingIcon from '../../assets/images/processing_icon.png';
import questionIcon from '../../assets/images/question_icon.png';
import welcomeDesktop from '../../assets/images/welcome_desktop.png';

import './Main.css';
import PrescriptionComponent from 'components/PrescriptionComponent/PrescriptionComponent';

export default function Main() {
  return (
    <main className="Prescription__main">
      <div className="Prescription__div clearfix">
        <p className="Prescription__main-paragraph left">Prescriptions</p>
        <Button className="Prescription__button--main right" text="&#43;ADD" />
      </div>
      <div className="Prescription__div clearfix">
        <p className="Prescription__description-text left">
          Welcome back ManagerFirstName! Use this page to manage your prescriptions with Phil at any time.
        </p>
        <img src={medsIcon} alt="Prescription_icon" className="Prescription__img right" />
      </div>
      <div className="Prescription__content">
        <PrescriptionComponent
          className="Prescription__dropdown--solid"
          icon={packageIcon}
          title="Shipping on 6/15/17"
          text="Doxepin 5mg"
        />
        <PrescriptionComponent
          className="Prescription__dropdown--dotted"
          icon={processingIcon}
          title="Processing"
          text="Nexium 10mg"
        />

        <div className="Prescription__queries">
          <div className="clearfix">
            <img src={questionIcon} alt="question_icon" className="left" />
            <div className="Prescription__dropdown Prescription__dropdown--dotted Prescription__dropdown--queries left clearfix">
              <span>Any prescriptions missing from the list? </span>
              <a href="index.html" className="main__link">
                Tell Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Prescription__welcome">
        <img src={welcome} alt="welcome" className="Prescription__welcome-img--mobile" />
        <img src={welcomeDesktop} alt="welcome_desktop" className="Prescription__welcome-img--desktop" />
      </div>
    </main>
  );
}
