import React from 'react';
import { Link } from '@reach/router';

const Error = () => {
  return (
    <div>
      <div className="pageheader">There's nothing Here, sorry.</div>;
      <div>
        <Link className="pageheader" to="/">
          Go Home.
        </Link>
      </div>
    </div>
  );
};

export default Error;
