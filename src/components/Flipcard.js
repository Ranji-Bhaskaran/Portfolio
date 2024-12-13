import React from "react";
import "./Flipcard.css";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/bg1.jpg";
import Text from "./Text";

function Flipcard() {
  return (
    <section
      className="flipcard"
      id="flipcard"
      style={{ backgroundImage: `url(${colorSharp2})` }} // Apply the background image dynamically
    >
      <br />
      <div className="container our-services">
        <h2>Projects</h2>
        <br />
        <div className="row">
          {/* Project 1 */}
          <div className="col-sm-4">
            <div className="flip-container">
              <div className="flipper">
                <div className="front" style={{ background: '#c770f0' }}>
                  <img
                    className="lazyload"
                    src={projImg1}
                    alt="Real Estate Management"
                    style={{ width: '300px', height: '250px' }}
                  />
                  <h3><Text>REAL ESTATE MANAGEMENT</Text></h3>
                </div>
                <div className="back" style={{ background: '#9381FF' }}>
                  <h5><Text>REAL ESTATE MANAGEMENT</Text></h5>
                  <p><Text>Developed a complex Real-Estate Listing Application using Django and AWS.</Text></p>
                  <p><Text>Prepared user authentication with secure login, real-time buy/sell property listings, and secure image storage with S3.</Text></p>
                  <p><Text>Deployed with AWS Elastic Beanstalk, and automated CI/CD via GitHub Actions.</Text></p>
                  <p><Text>Tech Stack: Django, AWS (Cloud9, S3, DynamoDB, ElastiCache, Lambda, CloudWatch, SNS, Elastic Beanstalk), GitHub Actions, Git/GitHub.</Text></p>
                  <a href="https://github.com/"><button className="btn btn-primary">Know more</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-sm-4">
            <div className="flip-container">
              <div className="flipper">
                <div className="front" style={{ background: '#9381FF' }}>
                  <img
                    className="lazyload"
                    src={projImg2}
                    alt="Pet Care Analysis"
                    style={{ width: '300px', height: '250px' }}
                  />
                  <h3><Text>PET CARE ANALYSIS</Text></h3>
                </div>
                <div className="back" style={{ background: '#c770f0' }}>
                  <h5>PET CARE ANALYSIS</h5>
                  <p><Text>Created a User-friendly Pet care analysis application for managing pet profiles and logs.</Text></p>
                  <p><Text>Designed a public section alongside personalized insights for pet health tracking displayed with charts and graphs using Matplotlib.</Text></p>
                  <p><Text>Integrated Pylint for Testing and Bandit for security checks.</Text></p>
                  <p><Text>Tech Stack: Django, AWS Cloud9, AWS Code Pipeline, JS, Pylint, Bandit, Git/GitHub.</Text></p>
                  <a href="https://github.com/Suryaa2004/swot-analysis"><button className="btn btn-primary">Know more</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-sm-4">
            <div className="flip-container">
              <div className="flipper">
                <div className="front" style={{ background: '#c770f0' }}>
                  <img
                    className="lazyload"
                    src={projImg3}
                    alt="Blockchain"
                    style={{ width: '300px', height: '250px' }}
                  />
                  <h3><Text>BLOCKCHAIN</Text></h3>
                </div>
                <div className="back" style={{ background: '#9381FF' }}>
                  <h5>BLOCKCHAIN</h5>
                  <p><Text>Proposed and deployed ERC-20 and ERC-721 smart contracts using Remix, with ETH transaction management via MetaMask.</Text></p>
                  <p><Text>Tested functionality in a local Ethereum environment with Ganache, and integrated decentralized storage via IPFS.</Text></p>
                  <p><Text>Tech Stack: Solidity, Remix, MetaMask, Ganache, IPFS, Ethereum.</Text></p>
                  <a href="https://github.com/Suryaa2004/Portfolio"><button className="btn btn-primary">Know more</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Project 4 */}
          <div className="col-sm-6">
            <div className="flip-container">
              <div className="flipper">
                <div className="front" style={{ background: '#9381FF' }}>
                  <img
                    className="lazyload"
                    src={projImg4}
                    alt="Weather App"
                    style={{ width: '300px', height: '250px' }}
                  />
                  <h3><Text>WEATHER APP</Text></h3>
                </div>
                <div className="back" style={{ background: '#c770f0' }}>
                  <h5>WEATHER APP</h5>
                  <p><Text>Created an app providing real-time weather details by inputting latitude and longitude integrated with an external API in Angular.</Text></p>
                  <p><Text>Tech Stack: HTML, CSS, JS, Angular, API, Git/GitHub.</Text></p>
                  <a href="https://github.com/Suryaa2004/Tindog"><button className="btn btn-primary">Know more</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="col-sm-6">
            <div className="flip-container">
              <div className="flipper">
                <div className="front" style={{ background: '#c770f0' }}>
                  <img
                    className="lazyload"
                    src={projImg5}
                    alt="Animal Intrusion Detection System"
                    style={{ width: '300px', height: '250px' }}
                  />
                  <h3><Text>SMART ANIMAL INTRUSION DETECTION SYSTEM</Text></h3>
                </div>
                <div className="back" style={{ background: '#9381FF' }}>
                  <h5>SMART ANIMAL INTRUSION DETECTION SYSTEM</h5>
                  <p><Text>Implemented an IoT-based Deep Learning system for preventing animal intrusion in farmlands.</Text></p>
                  <p><Text>Achieved 98.9% combined accuracy for day and night conditions using CNN architecture and deep learning models.</Text></p>
                  <p><Text>Tech Stack: Raspberry Pi, CNN Architecture, RESNET-50, VGG-19, Twilio API, Telegram API.</Text></p>
                  <a href="https://github.com/Suryaa2004/rec-ieee"><button className="btn btn-primary">Know more</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flipcard;
