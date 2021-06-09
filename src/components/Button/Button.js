import React from 'react'
import './styles.css';
export const Button = ({ children, ...props }) => {

  return <a className="button btn-5" {...props} >
    {children}
  </a>
}
