import 'react-multi-carousel/lib/styles.css';
import colorSharp2 from "../assets/img/color-sharp2.png"
import Perfil from '../assets/img/PerfilSinFondo.png'
import PerfilCircular from '../assets/img/renny.svg'
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Bio = () => {
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
    <section className="skill" id="bio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <Container>
                <Row className="aligh-items-center">
                  <h2>Bio</h2>
                  <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible? "animate__animated animate__zoomIn":""}>
                          <img src={PerfilCircular} alt="Header Img" />
                        </div>}
                    </TrackVisibility>
                  </Col>
                  <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible? "animate__animated animate__fadeIn":""}>
                          <p>Full-stack developer with intermediate English level. Interest in web development, sustainability, finance and data science. Projects carried out in the design and development of e-commerce and user management pages and project management interfaces. Management of the MERN Stack (Mongo, Express, React and Node) as well as SQL and Responsive Design with CSS, Material UI, Bootstrap and Tailwind.
                            <br></br>
                            <br></br> I graduated from the Full-Stack Developer Bootcamp at Prográmate-Academy powered by EducaMás, GOYN & Simplon partnership program.</p>
                          <a href="https://www.canva.com/design/" target="_blank" style={{ color: "white" }}><button style={{ color: "white" }} className="cv_arrow">Get my CV in Spanish  <ArrowRightCircle size={25} style={{ color: "white" }} /></button></a>
                        </div>}
                    </TrackVisibility>
                  </Col>

                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp2} alt="Image" /> */}
    </section>
  )
}
