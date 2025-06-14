import { Container, Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/s_html.png";
import meter2 from "../assets/img/s_css.png";
import meter3 from "../assets/img/s_js.png";
import meter4 from "../assets/img/s_react.png";
import meter5 from "../assets/img/aws.svg";
import meter6 from "../assets/img/python.png";
import meter7 from "../assets/img/c.svg";
import meter8 from "../assets/img/mysql.svg";
import meter9 from "../assets/img/angular.svg";
import meter10 from "../assets/img/next-js.svg";
import meter11 from "../assets/img/express js.svg";
import meter12 from "../assets/img/metamask.svg";
import meter13 from "../assets/img/django.svg";
import meter14 from "../assets/img/mongodb.svg";
import meter15 from "../assets/img/kubernets.svg";
import meter16 from "../assets/img/docker.svg";
import meter17 from "../assets/img/github-icon.svg";
import meter18 from "../assets/img/go.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skillStyle = {
    width: "100px", // Adjust to your preferred size
    height: "100px", // Ensures all images are square
    objectFit: "contain", // Prevents distortion
  };

  return (
    <section className="skills" id="skills" style={{ position: "relative", backgroundColor: "black" }}>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <div className="skill-bx">
              <h2 style={{ color: "white" }}>Skills</h2>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              > 
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter5} alt="AWS" style={skillStyle} />
                  <h5 style={{ color: "white" }}>AWS</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter1} alt="HTML" style={skillStyle} />
                  <h5 style={{ color: "white" }}>HTML</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter2} alt="CSS" style={skillStyle} />
                  <h5 style={{ color: "white" }}>CSS</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter3} alt="JavaScript" style={skillStyle} />
                  <h5 style={{ color: "white" }}>JavaScript</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter4} alt="React JS" style={skillStyle} />
                  <h5 style={{ color: "white" }}>React JS</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter6} alt="Python" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Python Programming</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter18} alt="Go Lang" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Go Lang</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter7} alt="C" style={skillStyle} />
                  <h5 style={{ color: "white" }}>C ++</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter8} alt="SQL" style={skillStyle} />
                  <h5 style={{ color: "white" }}>SQL Server</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter9} alt="Angular" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Angular</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter10} alt="Next JS" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Next JS</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter11} alt="Express JS" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Express JS</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter12} alt="Metamask" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Metamask</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter13} alt="Django" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Django</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter14} alt="MongoDB" style={skillStyle} />
                  <h5 style={{ color: "white" }}>MongoDB</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter15} alt="Kubernetes" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Kubernetes</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter16} alt="Docker" style={skillStyle} />
                  <h5 style={{ color: "white" }}>Docker</h5>
                </div>
                <div style={{ textAlign: "center", width: "150px" }}>
                  <img src={meter17} alt="GitHub" style={skillStyle} />
                  <h5 style={{ color: "white" }}>GitHub</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensures the image stays behind the content
        }}
      />
    </section>
  );
};
