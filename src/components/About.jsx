import React from 'react';
import me from '../img/profilepic.jpg';

const About = () => {
  return (
    <div>
      <div className="pageheader">About Me</div>
      <img className="picture" src={me} alt="Me" />
      <div className="aboutTextContainer">
        <p>
          I grew up in the North of England with a very English father and a
          very American mother. I got the idea that something about my voice was
          unique when in elementary school my teachers kept asking me to repeat
          the word 'vertex' for them.
        </p>
        <p>
          Over time, my voice settled into rich and deep tones with a unique
          mid-Atlantic accent that friends and family kept suggesting I should
          'do something with'.
        </p>
        <p>
          Life went on and while I became known to my friends for doing Don
          LaFontaine impressions narrating whatever they happened to be up to on
          nights at the pub ("In a world where the drinks are nearly all gone,
          only one man can stand up to do what's right... And get the next
          round... And that's you, mate.") I didn't make a start on my career in
          voice acting until I moved to California.
        </p>
        <p>Because why not?</p>
        <p>
          I specialise in deep, crisp and autoritative voice work for commercial
          and narration work with a unique mid-Atlantic accent.
        </p>
        <p>
          I hope you'll listen to some of my demos and if you like what you hear
          and want to get in touch, please don't hesitate to contact me by phone
          or email.
        </p>
      </div>
    </div>
  );
};

export default About;
