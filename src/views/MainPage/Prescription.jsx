import React, { useState } from 'react';

import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Container from 'components/Container/Container';
import pathIcon from '../../assets/images/path_icon.png';
import prescriptionIcon from '../../assets/images/prescription_icon.png';
import supportIcon from '../../assets/images/support_icon.png';
import profileIcon from '../../assets/images/profile_icon.png';

import './Prescription.css';
import Footer from 'components/Footer/Footer';
import ToolTip from 'components/ToolTip/ToolTip';

function Prescription() {
  const states = ['default', 'prescription', 'support', 'profile'];

  const [index, setIndex] = useState(0);

  const properties = {
    default: {
      title: 'Bookmark this page',
      text: 'Come back here to track and manage your prescriptions.',
      contentTitle: 'Welcome to My Phil',
      icon: pathIcon,
      iconClass: 'Prescription__icon--default',
      prevButtonClass: 'hidden',
      tooltipClass: 'Prescription__tooltip--default',
    },
    prescription: {
      title: 'Prescription',
      text: 'Quickly check the status of your prescriptions or manage when to receive your refills.',
      icon: prescriptionIcon,
      iconClass: 'Prescription__icon--presc',
      tooltipClass: 'Prescription__tooltip--prescription',
    },
    support: {
      title: 'Support',
      text: 'Click here to contact Phil support.  Our support team will assist you with any questions you have.',
      icon: supportIcon,
      iconClass: 'Prescription__icon--support',
      tooltipClass: 'Prescription__tooltip--support',
    },
    profile: {
      title: 'Profile',
      text: 'Click here to review and update your insurance information, shipping address, and payment information.',
      icon: profileIcon,
      iconClass: 'Prescription__icon--profile',
      nextButtonClass: 'hidden',
      tooltipClass: 'Prescription__tooltip--profile',
    },
  };

  const handleNextButtonClick = () => {
    setIndex(index + 1);
  };

  const handlePrevButtonClick = () => {
    setIndex(index - 1);
  };

  return (
    <div className="Prescription">
      <Header />
      <Container className="Prescription__container-main">
        <ToolTip
          title={properties[states[index]].title}
          text={properties[states[index]].text}
          contentTitle={properties[states[index]].contentTitle}
          icon={properties[states[index]].icon}
          iconClass={properties[states[index]].iconClass}
          prevButtonClass={properties[states[index]].prevButtonClass}
          nextButtonClass={properties[states[index]].nextButtonClass}
          handleNextButtonClick={handleNextButtonClick}
          handlePrevButtonClick={handlePrevButtonClick}
          tooltipClass={properties[states[index]].tooltipClass}
        />
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default Prescription;
