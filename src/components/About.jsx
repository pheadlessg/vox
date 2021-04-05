import React from 'react';
import me from '../img/profile_pic.jpg';
import meBiz from '../img/profile_picbiz.jpeg';

const About = () => {
  return (
    <div>
      <div className="pageheader">About Me</div>
      <img className="picture" src={meBiz} alt="Me in business attire" />
      <img className="picture" src={me} alt="Me" />
      <div className="aboutTextContainer">
        <p>
          Sean has been living and working in Southern California as a voice,
          on-camera and theatre actor since 2019.
        </p>
        <p>
          His voice has been described as crisp, clear and authentic - with a
          classic style and deep authoritative tones that make him perfect for
          commercial and narration. He is excellent at taking direction and
          tries to make every project as much fun for the people he works for as
          he has working on it.
        </p>
        <p>
          Outside of work Sean can usually either be found going on adventures
          with his dog Dusty or baking for his wife Ashley and their friends and
          family.
        </p>
      </div>
    </div>
  );
};

export default About;
