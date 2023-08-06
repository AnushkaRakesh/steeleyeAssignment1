import React from 'react';

const Button = ({ children, ...rest }) => {
  return (
    <a target="_blank" href="http://localhost:6006/?path=/story/example-button--primary" rel="noreferrer" >
    <button className="button" {...rest}>
      { children }
    </button>
    </a>
  )
}

export default Button;