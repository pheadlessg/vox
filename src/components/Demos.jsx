import React from 'react';

const Demos = () => {
  return (
    <div>
      <p className="pageheader">Commercial Voiceover Demo</p>
      <iframe
        className="soundcloud"
        title="soundcloud"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/766979650&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
      <p className="pageheader">Performance Reel</p>
      <iframe
        className="soundcloud"
        title="soundcloud"
        src="https://player.vimeo.com/video/691058644?h=1a8474fabf"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Demos;
