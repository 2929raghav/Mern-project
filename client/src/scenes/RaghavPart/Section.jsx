// src/components/Section.js
import React from 'react';
import './Section.css';

const Section = ({ id ,title, imageFirst, imageUrl, content }) => {
  return (
    <div className={`section ${imageFirst ? 'image-first' : 'content-first'}`}>
      <div className="image-container">
        <img src={imageUrl} alt="Random" />
      </div>
     
      <div className="content-container">
      <h2 >{title}</h2> {/* Add the heading here */}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Section;
