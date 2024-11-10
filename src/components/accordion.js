import React, { useState } from 'react';
import './accordion.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">{title}</h3>
        <span className="accordion-icon">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div className={`accordion-content-wrapper ${isOpen ? "open" : ""}`}>
        <p className="accordion-content">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
