import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import { InternCard } from "./InternCard";
import projImg1 from "../assets/img/b_cloud.jpg";
import projImg2 from "../assets/img/b_storage2.jpg";
import projImg3 from "../assets/img/b_compute.jpg";
import projImg4 from "../assets/img/i_android.jpeg";
import projImg5 from "../assets/img/i_web.jpeg";
import projImg6 from "../assets/img/i_smt.jpeg";
import projImg7 from "../assets/img/b_network.jpg";
import projImg8 from "../assets/img/b_data.jpg";
import projImg9 from "../assets/img/b_ibm.jpg";
import projImg10 from "../assets/img/b_ai.jpg";
import projImg11 from "../assets/img/c_awscloudprac.jpg";
import projImg12 from "../assets/img/c_go.jpg";
import projImg13 from "../assets/img/c_joy.jpg";
import projImg14 from "../assets/img/c_js.jpg";
import projImg15 from "../assets/img/c_lead.jpg";
import projImg16 from "../assets/img/c_linux.jpg";
import projImg17 from "../assets/img/c_prob.jpg";
import projImg18 from "../assets/img/c_pyth.jpg";
import projImg19 from "../assets/img/c_sql.jpg";
import projImg20 from "../assets/img/c_git.jpg";
import projImg21 from "../assets/img/c_cn.jpg";
import pythonAndAiImg from "../assets/img/c_pythonandai.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import { Link } from "react-router-dom"; 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AWS Educate Introduction to Cloud 101",
      imgUrl: projImg1,
      url1: 'https://www.credly.com/badges/1249c34b-1130-4942-a11d-d413c0a67f63/public_url',
    
    },
    {
      title: "AWS Educate Getting Started with Storage",      
      imgUrl: projImg2,
      url1: 'https://www.credly.com/badges/2006c7eb-fb71-48ab-9bf6-d3d98b5685b3/public_url',
      
    },
    {
      title: "AWS Educate Getting Started with Compute", 
      imgUrl: projImg3,
      url1:'https://www.credly.com/badges/b5917abd-53b4-4dec-9d78-1ec62bd6eb8b/public_url',
    },
    {
      title: "AWS Educate Getting Started with Networking",
      imgUrl: projImg7,
      url1:'https://www.credly.com/badges/fb8cebe5-6190-4962-8e14-841addef6409/public_url',
    },
    {
      title: "AWS Educate Getting Started with Databases",
      imgUrl: projImg8,
      url1:'https://www.credly.com/badges/7d555eaa-b664-4499-a97f-5329e6c27bdc/public_url',
    },
    {
      title: "Python for Data Science",
      imgUrl: projImg9,
      url1:'https://www.credly.com/badges/ac15a13a-3ae5-4b55-a044-f51c2f3d5231/public_url',
    },
    {
      title: "Introduction to Generative AI",
      imgUrl: projImg10,
      url1:'https://www.cloudskillsboost.google/public_profiles/c0f565f0-95af-4020-ae3b-e9abee938806/badges/5649029',
    },
  ];

  const certifications = [
    {
      title: 'AWS Cloud Practitioner Essentials',
      description: "Amazon Web Services (AWS)",
      imgUrl: projImg11,
      url1: 'https://drive.google.com/file/d/1ivOR1VX7Drkx2szLDKGBKX0LcsB4SgX2/view?usp=drive_link',
    },
    {
      title: 'Python & AI Coding Tools',
      description: "Udemy ",
      imgUrl: pythonAndAiImg,
      url1: 'https://www.udemy.com/certificate/UC-3457a5d9-3c37-407c-8233-650263fec100/',
    },
    {
      title: 'Javascript ',
      description: "Udemy",
      imgUrl: projImg14,
      url1: 'https://www.udemy.com/certificate/UC-77ac3553-3e7f-4ba0-83b5-d98eccf76491/',
    },
    {
      title: 'GitHub ',
      description: "Udemy",
      imgUrl: projImg20,
      url1: 'https://www.udemy.com/certificate/UC-069c9711-40b2-47dc-b170-98cd8e36b68e/',
    },
    {
      title: 'Go Lang',
      description: "HackerRank",
      imgUrl: projImg12,
      url1: 'https://drive.google.com/file/d/14nFTNGrsi1MwacOzb_rMYpK1nAuy_9Zg/view?usp=drive_link',
    },
    {
      title: 'MySQL ',
      description: "HackerRank",
      imgUrl: projImg19,
      url1: 'https://drive.google.com/file/d/1MrFtwI0OyJfxJS0AdYVw2azGzeVTkkfm/view?usp=drive_link',
    },
    {
      title: 'Problem Solving In Python',
      description: "HackerRank",
      imgUrl: projImg17,
      url1: 'https://drive.google.com/file/d/1VR0zS7ioc6jusHbnOO2RR4vqNBvgKacK/view?usp=drive_link',
    },
    {
      title: 'Python',
      description: "HackerRank",
      imgUrl: projImg18,
      url1: 'https://drive.google.com/file/d/18jYwl_NkY4qAr5E2IZ3BNjVxPwDBWLPD/view?usp=drive_link',
    },
    {
      title: 'Linux Tutorial',
      description: "Great Learning",
      imgUrl: projImg16,
      url1: 'https://drive.google.com/file/d/1iVN0B0ppgvnU8hKMExqk-ClnCfAJee8l/view?usp=drive_link',
    },
    {
      title: 'Computer Networking',
      description: "Great Learning",
      imgUrl: projImg21,
      url1: 'https://drive.google.com/file/d/1mSzY5bPBdHst5Fdikz0UqrEXycToz8Sx/view?usp=drive_link',
    },
    {
      title: 'The Joy Of Computing Using Python',
      description: "NPTEL",
      imgUrl: projImg15,
      url1: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS122S1446049210039924',
    },
    {
      title: 'Leadership and Team Effectiveness ',
      description: "NPTEL",
      imgUrl: projImg15,
      url1: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MG28S1334077204233567',
    },
  ];

  const internships = [
    {
      title: 'Frontend Developer Intern',
      description: 'Collaborated with a cross-functional team to design and enhance the frontend of a Transport Management System using Angular, achieving a 30% improvement in user interface efficiency. Contributed to the development and deployment of interactive components, significantly enhancing the systems usability. Gained hands-on experience in API integration by developing a weather API project in Angular, showcasing real-time data handling and responsiveness. Demonstrated the ability to quickly master new tools and frameworks, earning recognition as a swift and proficient learner.',
      imgUrl: projImg4,
      url1: 'https://drive.google.com/file/d/1C8PdxN55Q4ECAjSr-H1sHtk2WkIdWyFg/view?usp=drivesdk',
    },
    {
      title: 'Frontend Masters',
      description: 'Completed an intensive 3-month course in modern frontend development, acquiring advanced proficiency in HTML, CSS, JavaScript, and ReactJS. Developed interactive and responsive web applications, gaining a deep understanding of component-based architecture and creating reusable UI components to streamline development processes.',
      imgUrl: projImg5,
      url1: 'https://drive.google.com/file/d/1COXJglGYKOuaV8jQ-lMI1WiQ1PBC3J-f/view?usp=drivesdk',
    },
    {
      title: 'SMD Line Production',
      description: 'Throughout the internship, I developed a deep understanding of SMD production processes, including solder paste application, pick-and-place operations, and reflow soldering techniques.Working closely with industry professionals, I gained expertise in operating and maintaining SMD assembly lines, ensuring the efficient production of electronic components.',
      imgUrl: projImg6,
      url1: 'https://drive.google.com/file/d/1CNO7pgZrUQT0PX0jPGjkkfVa-SiuILjk/view?usp=drivesdk',
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
                <h2>Credentials</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Badges</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Internships</Nav.Link>
                </Nav.Item>
                
              </Nav>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
  <Row>
    {
      certifications.map((certification, index) => {
        return (
          <EducationCard
            key={index}
            {...certification}
          />
        )
      })
    }
  </Row>
</Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                    
                          {
                          internships.map((internship, index) => {
                            return (
                              <InternCard
                                key={index}
                                {...internship}
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
