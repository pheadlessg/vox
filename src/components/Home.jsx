import React from 'react';
import { Link } from '@reach/router';

const Home = () => {
  return (
    <div>
      <div className="fadetext1">deep.</div>
      <div className="fadetext2">crisp.</div>
      <div className="fadetext3">authoritative.</div>
      <div className="fadetext4">classic.</div>
      <Link to="/demos/">
        <div className="fadetext5">Listen.</div>
      </Link>
    </div>
  );
};

export default Home;
