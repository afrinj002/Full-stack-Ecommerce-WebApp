import React from 'react'
import logoImage from '../assest/logoImage.jpg';
const Logo = ({w,h}) => {
  return (
    <img src={logoImage} alt="Logo"
    style={{ width: '150px', height: 'auto' }} />
  )
}

export default Logo