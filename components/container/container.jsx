import React from 'react';

export default (props = {}) => {
  const { className = '' } = props;

  return (
    <div className={ `container ${className}` }>
      { props.children }
    </div>
  );
};
