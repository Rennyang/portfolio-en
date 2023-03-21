import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import MenuIcon from '/MenuIcon.svg'

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

  const navRef=useRef(null);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [toggle, setToggle]=useState(false);
  const handleLinkClick=() => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className={scrolled? "scrolled":""} ref={navRef}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logoIcon"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {/* <span className="navbar-toggler-icon"></span> */}
            <img src={MenuIcon} alt="" className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('home'); handleLinkClick()}}>Home</Nav.Link>
              <Nav.Link href="#bio" className={activeLink==='bio'? 'active navbar-link':'navbar-link'} onClick={() => { onUpdateActiveLink('bio'); handleLinkClick() }}>Bio</Nav.Link>
              <Nav.Link href="#skills" className={activeLink==='skills'? 'active navbar-link':'navbar-link'} onClick={() => { onUpdateActiveLink('skills'); handleLinkClick()}}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink==='projects'? 'active navbar-link':'navbar-link'} onClick={() => { onUpdateActiveLink('projects'); handleLinkClick()}}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in//" target="_blank"><img src={navIcon1} alt="" /></a>
                {/* Por el momento no tengo instagram ni facebook */}
                <a href="https://github.com/" target="_blank"><img src={navIcon2} alt=""/></a>
                {/* <a href="#"><img src={navIcon3} alt="" /></a> */}
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
