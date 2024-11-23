import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Text from './Text';
import "./About.css";
function About(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="aboutme"

      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='modaltitle'>
          Suryaa K Sridhar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Text>
        <h4><b><i >About</i></b></h4>
        <p>
        Hello there! 👋I'm <b><i className='aboutcon'>Suryaa</i></b>  , a prefinal year student with a passion for <b><i className='aboutcon'>Computer Science and Engineering</i></b>. Aspiring to be a <b><i className='aboutcon'>Full Stack Developer</i></b>, I am dedicated to leveraging my skills and knowledge to make a positive impact in the world of Web Development.
In my academic journey, I am currently pursuing a UG degree at <b><i className='aboutcon'>Rajalakshmi Engineering College</i></b>. I thrive in challenging environments, constantly seeking opportunities to expand my horizons and contribute to innovative projects.
Beyond academia, I am a individual with a keen eye for detail and a drive for continuous improvement. I believe in the power of collaboration and am always excited to work with like-minded individuals who share a passion for Web development.
        </p>
        </Text>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}


  

export default About;