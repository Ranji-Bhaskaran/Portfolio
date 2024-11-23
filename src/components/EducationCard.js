import React from 'react';
import { Col } from "react-bootstrap";
import { FaExternalLinkAlt } from 'react-icons/fa';
export const EducationCard = ({ title, description, imgUrl, url1 }) => {
  return (
    <Col sm={4} md={3}>
      <div className="proj-imgbx" style={{ position: 'relative' }}>
        <img src={imgUrl} alt={title} />
        <div className="icons-container" style={{ position: 'absolute', top: '0', right: '0', zIndex: '1', padding: '10px' }}>
          {url1 && (
            <a href={url1} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        <div className="proj-txtx">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};



