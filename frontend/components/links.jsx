import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <section className="links">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/interests">Interests</NavLink>
      <NavLink to="/places">Places</NavLink>
      <NavLink to="/reading">Reading</NavLink>
    </section>
  );
};

export default Links;
