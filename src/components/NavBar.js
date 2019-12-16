import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='NavbarContainer'>
      <NavLink to='/' className='NavbarLink'>Home</NavLink> 
      <NavLink to='/destinations' className='NavbarLink'>Destinations</NavLink> 
      <NavLink to='/destinations/visited' className='NavbarLink'>Visited Destinations</NavLink> 
      <NavLink to='/destinations/bucket-list' className='NavbarLink'>Bucket List</NavLink> 
    </div>
  );
};

export default NavBar;