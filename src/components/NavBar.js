import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';
import {NavLink} from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand 
          href="/" 
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          &lt;/&gt;
        </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#flipcard" className={activeLink === 'flipcard' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('flipcard')}>Projects</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'credentials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('credentials')}>Credentials</Nav.Link>
            
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="http://www.linkedin.com/in/ranjith-bhaskaran05" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Ranji-Bhaskaran" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.credly.com/users/ranjith-bhaskaran.b1d74df8" target="_blank"><img src={navIcon4} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}