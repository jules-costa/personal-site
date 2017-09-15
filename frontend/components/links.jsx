import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <section className="links">
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/interests">Interests</Link>
      <Link to="/places">Places</Link>
      <Link to="/reading">Reading</Link>
    </section>
  );
};

export default Links;
