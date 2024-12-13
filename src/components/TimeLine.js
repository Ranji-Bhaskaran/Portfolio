import React, { useState } from 'react';
import './TimeLine.css';

const TimeLine = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const educationData = [
    {
      year: '2024 - 2025',
      degree: "Master's Degree",
      institution: 'National College of Ireland, Dublin',
      details: 'MSc in Cloud Computing',
      modules: [
        'Cloud Architectures',
        'Cloud DevOpsSec',
        'Blockchain',
        'Data Governance',
        'Fog Computing',
        'Compliance and Ethics',
      ],
    },
    {
      year: '2020 - 2024',
      degree: "Bachelor's Degree",
      institution: 'Easwari Engineering College, Chennai',
      details: 'B.E (Electronics and Communication Engineering)\nCGPA: 9.1 | 91% | 1:1',
      modules: [
        'Networking Protocols and Communications',
        'Signal Processing and Digital Communication',
        'Embedded Systems and Microcontroller Programming',
        'Control Systems and Automation',
      ],
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div
            className={`education-card ${expandedCard === index ? 'expanded' : ''}`}
            key={index}
            onClick={() => toggleCard(index)}
            onKeyDown={(e) => e.key === 'Enter' && toggleCard(index)}
            tabIndex={0}
            role="button"
            aria-expanded={expandedCard === index}
          >
            <div className="education-header">
              <h3 className="education-year">{edu.year}</h3>
              <h4 className="education-degree">{edu.degree}</h4>
            </div>
            <div className="education-body">
              <p className="education-institution">{edu.institution}</p>
              <p className="education-details">{edu.details}</p>
              {expandedCard === index && (
                <p className="education-modules">
                  <strong>Modules:</strong> {edu.modules.join(', ')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeLine;
