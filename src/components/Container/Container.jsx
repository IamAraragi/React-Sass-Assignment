import React from 'react';

import './Container.css';

const Container = props => {
  const { children, className } = props;

  const containerClassName = className ? `Container ${className}` : 'Container';

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
};

export default Container;
