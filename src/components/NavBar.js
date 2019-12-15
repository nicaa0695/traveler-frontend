import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='NavbarContainer'>
      <img className='NavbarImage' src='images/105701227-6ED1-REQ-AirbusBoeing-012519.jpg' alt='traveling' />
      <NavLink to='/' className='NavbarLink'>Home</NavLink>
      <NavLink to='/destinations' className='NavbarLink'>Destinations</NavLink>
      <NavLink to='/destinations/visited' className='NavbarLink'>Visited Destinations</NavLink>
      <NavLink to='/destinations/bucket-list' className='NavbarLink'>Bucket List</NavLink>
    </div>
  );
};

export default NavBar;