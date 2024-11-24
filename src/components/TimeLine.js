import React from 'react';
import { Chrono } from 'react-chrono';
import './TimeLine.css';
import Text from './Text';

export const TimeLine = () => {
  const timelineItems = [
    {
      title: '2024 - 2025',
      cardTitle: "Master's Degree",
      cardSubtitle: 'National College of Ireland, Dublin',
      cardDetailedText: 'MSc in Cloud Computing',
    },
    {
      title: '2020 - 2024',
      cardTitle: "Bachelor's Degree",
      cardSubtitle: 'Easwari Engineering College, Chennai',
      cardDetailedText: 'B.E (Electronics and Communication Engineering)\nCGPA: 9.1 | 91% | 1:1',
    },
  ];

  return (
    <section id="about">
      <br />
      <br />
      <br />
      <h2 className="education">
        <Text>Education</Text>
      </h2>
      <div className="chrono-wrapper">
        <Chrono
          items={timelineItems}
          mode="VERTICAL_ALTERNATING" // Alternate layout
          hideControls={true} // Disable navbar and controls
          theme={{
            primary: '#c770f0',
            secondary: '#B8B8FF',
            cardBgColor: '#2c2c2c',
            cardForeColor: 'white',
          }}
          cardHeight={100} // Keep small card size
        />
      </div>
    </section>
  );
};