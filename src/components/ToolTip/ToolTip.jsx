import React, { useEffect, useState } from 'react';
import closeIcon from '../../assets/images/x_icon.png';
import nextIcon from '../../assets/images/next_icon.png';
import prevIcon from '../../assets/images/prev_icon.png';

import './ToolTip.css';

export default function ToolTip(props) {
  const {
    title,
    text,
    contentTitle,
    icon,
    iconClass,
    prevButtonClass,
    nextButtonClass,
    tooltipClass,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = props;

  const iconClassName = `${iconClass} left`;
  const newTooltipClassName = `Prescription__tooltip ${tooltipClass}`;
  const [tooltipClassName, setTootltipClassName] = useState(newTooltipClassName);

  const prevButtonClassName = prevButtonClass
    ? `Prescription__content-button left ${prevButtonClass} clearfix`
    : 'Prescription__content-button left clearfix';

  const nextButtonClassName = nextButtonClass
    ? `Prescription__content-button right ${nextButtonClass} clearfix`
    : 'Prescription__content-button right clearfix';

  useEffect(() => {
    setTootltipClassName(newTooltipClassName);
  }, [newTooltipClassName]);

  const handleCloseButtonClick = () => {
    setTootltipClassName(tooltipClassName + ' hidden');
  };

  return (
    <div className={tooltipClassName}>
      <div className="Prescription__tooltip-title clearfix">
        <img src={icon} alt="path_icon" className={iconClassName} />
        <p className="left">{title}</p>
        <img
          src={closeIcon}
          alt="close_icon"
          className="Prescription__icon-close right"
          onClick={handleCloseButtonClick}
        />
      </div>
      <div className="Prescription__tooltip-content">
        <div className="Prescription__tooltip-description">
          <p className="Prescription__content-title">{contentTitle}</p>
          <p className="Prescription__content-text">{text}.</p>
        </div>
        <div className="Prescription__content-buttons">
          <button className={prevButtonClassName} onClick={handlePrevButtonClick}>
            <img src={prevIcon} alt="prev_icon" className="left" />
            <p className="right">Prev</p>
          </button>
          <button className={nextButtonClassName} onClick={handleNextButtonClick}>
            <p className="left">Next</p>
            <img src={nextIcon} alt="next_icon" className="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
