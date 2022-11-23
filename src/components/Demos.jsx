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
      <p className="pageheader">Performance Reels</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NZK6HzTZaY8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Pe-SzCjPHR8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Demos;
