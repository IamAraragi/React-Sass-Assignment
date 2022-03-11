import React from 'react';
import dotIcon from '../../assets/images/dot-icon.png';
import './PrescriptionComponent.css';

export default function PrescriptionComponent(props) {
  const containerClassName = props.className
    ? `Prescription__dropdown ${props.className} clearfix`
    : 'Prescription__dropdown clearfix';

  return (
    <div>
      <div className="Prescription__title clearfix">
        <img src={props.icon} alt="package_icon" className="left" />
        <p className="left">{props.title}</p>
      </div>
      <div className="Prescription__container">
        <div className={containerClassName}>
          <p className="left">{props.text}</p>
          <img src={dotIcon} alt="dot-icon" className="right" />
        </div>
      </div>
    </div>
  );
}
