import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/specs.png";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const toRotate = [
  "Cloud Enthusiast 🚀",
  "AWS Certified Developer ☁️",
  "Full-Stack Engineer 💻"
];
const typingSpeed = 80;
const deletingSpeed = 40;
const pauseTime = 1500;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(typingSpeed);
  const [viewCount, setViewCount] = useState(() => {
  return Number(localStorage.getItem("viewCount")) || 0;
});

  const [downloadCount, setDownloadCount] = useState(() => {
    return Number(localStorage.getItem("downloadCount")) || 0;
  });

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);
    return () => clearTimeout(ticker);
  }, [text]);

  useEffect(() => {
    // Increment view count only once on mount
    setViewCount(prev => {
      const newCount = prev + 1;
      localStorage.setItem("viewCount", newCount);
      return newCount;
    });
  }, []);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseTime);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(typingSpeed);
    } else {
      setDelta(isDeleting ? deletingSpeed : typingSpeed);
    }
  };

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1n49iYC3vd6qt2-AimxRvNj_0pkIieyku/view?usp=drive_link", "_blank");
    setDownloadCount(prev => {
      const newCount = prev + 1;
      localStorage.setItem("downloadCount", newCount);
      return newCount;
    });
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi, I'm Ranjith Bhaskaran`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                <p>AWS Certified Solutions Architect Associate with hands-on experience designing and deploying scalable cloud-native applications on AWS using Django, ReactJS, Lambda, and CI/CD pipelines. Skilled in building secure and cost-optimized cloud infrastructure, serverless architecture, automation, API development and containerization with Docker and Kubernetes.</p>
                <button onClick={handleDownload}>
                  Download CV <ArrowDownCircle size={25} />
                </button>
                <div style={{ marginTop: "10px" }}>
                  <p>Website Views: {viewCount}</p>
                  <p>CV Downloads: {downloadCount}</p>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}