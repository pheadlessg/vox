import React from 'react';
import me from '../css/img/pic1.jpg';

const About = () => {
  return (
    <div>
      <div className="pageheader">About Me</div>
      <img className="picture" src={me} alt="Me" />
      <p>
        Here's some information about me. Lots of information. All of the
        things. Mostly lies.
      </p>
    </div>
  );
};

export default About;
