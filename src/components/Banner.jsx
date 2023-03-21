import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Full-Stack"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <BrowserRouter>
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h1>{`Hi! I'm Renny Belandria`} <br></br> </h1>
                    <h4><span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "Full-Stack" ]'><span className="wrap">{text}</span></span></h4>
                    <p>I am a cheerful, responsible, and proactive person. I'm studying in the Full-Stack Development Bootcamp at Prográmate-Academy powered by EducaMás, GOYN & Simplon partnership program. Through these experiences, I have learned Web Development with the MERN Stack.</p>
                    <Router>
                      <HashLink to="#bio" style={{ textDecoration: "none" }}>
                        <button onClick={() => console.log('connect')}>Let’s go ahead! <ArrowRightCircle size={25} /></button>
                      </HashLink>
                    </Router>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {<div className="svg">
                  <iframe src="https://cdn.svgator.com/assets/main-page/fold1/astronaut-hero.svg" alt="Header Img" />
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </section>
  )
}
