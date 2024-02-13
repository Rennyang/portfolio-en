import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Pawe from '../assets/img/Pawe.png'
import Portfolio from '../assets/img/Porfolio.png'
import Music from '../assets/img/Music.png'
import Video from '../assets/img/Video.png'
import Cuerda from '../assets/img/Cuerda.png'
import Marca from '../assets/img/Marca.png'
import Anefty from '../assets/img/Anefty.png'

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const development = [
    {
      title: "Web Developer Portfolio",
      description: "Design & Development",
      imgUrl: Portfolio,
      github: "https://github.com/Rennyang/portfolio-en",
      deploy: "https://rb-portfolio-en.netlify.app/",
    },
    {
      title: "Simple HTML&CSS page",
      description: "Design & Development",
      imgUrl: Anefty, 
      github: "https://github.com/Rennyang/Simple-page",
      deploy: "https://rennyang.github.io/Simple-page/",
    },
    {
      title: "Rick and Morty API Consume",
      description: "Design & Development",
      imgUrl: Music, 
      github: "https://github.com/Rennyang/rick-api",
      deploy: "https://rickandmortyapi-rb-consume.netlify.app/",
    },
    {
      title: "Green Calculator",
      description: "Design & Development",
      imgUrl: Cuerda,
      github: "https://github.com/Rennyang/green-calculator",
      deploy: "https://rennyang.github.io/green-calculator/",
    },
    {
      title: "Array Sum",
      description: "Design & Development",
      imgUrl: Video,
      github: "https://github.com/Rennyang/ArraySum",
      deploy: "https://rb-array-sum.netlify.app/",
    },
    {
      title: "Pokedex",
      description: "Design & Development",
      imgUrl: Pawe,
      github: "https://github.com/Rennyang/pokedex",
      deploy: "https://rennyang.github.io/pokedex/",
    },
    {
      title: "Simple Image Menu",
      description: "Design & Development",
      imgUrl: Marca,
      github: "https://github.com/Rennyang/special-menu",
      deploy: "https://rennyang.github.io/special-menu/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                  <p>The projects I have done range from the development of Landing Pages, games with a simple interface, static web pages, dynamic web pages, portfolios and simple electronic commerce linked to the WhatsApp API. 💻 On the other hand, in the design sector I have experience designing brand manuals, logos, and interface and application mockups. 🎨</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Apps</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          development.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}