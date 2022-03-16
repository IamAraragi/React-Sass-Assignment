import React from 'react';

import './Button.css';

export default function Button(props) {
  const { className, text } = props;

  return <button className={className}>{text}</button>;
}
