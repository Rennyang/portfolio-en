import vite from "../assets/Logos/vite.svg";
import figma from "../assets/Logos/figma.svg";
import python from "../assets/Logos/python.svg";
import mern from '../assets/Logos/mern.png'
import mongo from '../assets/Logos/mongodb.svg'
import express2 from '../assets/Logos/expressjs-dark.svg'
import reactLogo from "../assets/Logos/react.svg";
import node from '../assets/Logos/node.svg'
import tailwind from '../assets/Logos/tailwind.svg'
import bootstrap from '../assets/Logos/bootstrap.svg'
import HtmlLogo from '../assets/Logos/html-5.svg'
import CssLogo from '../assets/Logos/css-3.svg'
import JavaScript from '../assets/Logos/javascript.svg'
import Git from '../assets/Logos/git.svg'
import MySql from '../assets/Logos/mysql.svg'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 901 },
      items: 3
    },
    bigmobile: {
      breakpoint: { max: 800, min: 0 },
      items: 2
    },
    smallmobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I have knowledge of and have used the following technologies: MERN Stack (React, Node, Express and MongoDB), and Responsive Design with CSS, MaterialUI, Bootstrap and Tailwind. On the other hand, I have knowledge of MySQL and Mongo in data handling.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={vite} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>Data Analysis</h5>
                </div>
                <div className="item">
                  <img src={mern} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>MERN</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={express2} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={HtmlLogo} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CssLogo} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={JavaScript} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={Git} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={MySql} alt="Image" style={{ maxHeight: "111.5px" }} />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
