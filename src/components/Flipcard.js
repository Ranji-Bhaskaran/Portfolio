import React from "react";
import "./Flipcard.css";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";

import Text from "./Text";
function Flipcard() {
    return (
      
      <section className ="flipcard" id="flipcard">
        <br></br>
        <div class="container our-services">
<h2>Projects</h2>
<br></br>
          <div class="row">
            <div class="col-sm-4">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#c770f0 ' }}>
                    {/* <h3>Hostel Management System</h3> */}
                    <img
                      class="lazyload"
                      src={projImg1 }
                      alt=""
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>REAL ESTATE MANAGEMENT</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#9381FF ' }}>
                    <h5> <Text>REAL ESTATE MANAGEMENT</Text></h5>
                    <p><Text>Developed a complex Real-Estate Listing Application using Django and AWS.
                    </Text>
                    </p>
                    <p> <Text>Prepared user authentication with secure login, real-time buy/sell property listings integrated with CRUD operations and secure image storage with S3.
                    </Text>
                    </p>
                    <p> <Text>Deployed with AWS Elastic Beanstalk, and automated CI/CD via GitHub Actions.
                    </Text>
                    </p>
                    <p> <Text>Tech Stack: Django, AWS (Cloud9, S3, DynamoDB, ElastiCache - Redis Cluster, Lambda, CloudWatch, SNS, Elastic Beanstalk), GitHub Actions, Git/GitHub.
                    </Text>
                    </p>
                    <a href="https://github.com/"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#9381FF' }}>
                    <img
                      class="lazyload"
                      src={projImg2 }
                      alt=""
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3> <Text>PET CARE ANALYSIS</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#c770f0' }}>
                    <h5>PET CARE ANALYSIS</h5>
                    <p>
                    •	Created a User-friendly Pet care analysis application enabling management of pet profiles and logs through a dashboard.
                    </p>
                    <p>
                    •	Designed a global public section alongside personalized insights for pet health and activity tracking displayed using charts and graphs with Matplotlib.
                    </p>
                    <p>
                    •	Integrated Pylint for Testing and Bandit for security vulnerability checks.
                    </p>
                    <p>
                    Tech Stack: Django, AWS Cloud9, AWS Code Pipeline, JS, Pylint, Bandit, Git/GitHub.
                    </p>
                    <a href="https://github.com/Suryaa2004/swot-analysis"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#c770f0' }}>
                    <img
                      class="lazyload"
                      src={projImg3 }
                      alt="Avatar"
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>BLOCKCHAIN</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#9381FF' }}>
                    <h5>BLOCKCHAIN</h5>
                    <p>
                    •	Proposed and deployed ERC-20 and ERC-721 smart contracts using Remix, with ETH transaction management via MetaMask.
                    </p>
                    <p>
                    •	Tested functionality in a local Ethereum environment with Ganache, and integrated decentralized storage through local IPFS and deployed 4 tokens.
                    </p>
                    <p>
                    Tech Stack: Solidity, Remix, MetaMask, Ganache, IPFS, Ethereum.
                    </p>
                    <a href="https://github.com/Suryaa2004/Portfolio"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#9381FF ' }}>
                    <img
                      class="lazyload"
                      src={projImg4 }
                      alt="Avatar"
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>WEATHER APP</Text></h3>
                  </div>
                  <div class="back" style={{ background:'#c770f0' }}>
                    <h5>WEATHER APP</h5>
                    <p>
                    •	Created an application that provides Real-time weather details by inputting latitude and longitude integrated with an external API in Angular. 
                    </p>
                    <p>
                    Tech Stack: HTML, CSS, JS, Angular, API, Git/GitHub.

                    </p>
                    <a href="https://github.com/Suryaa2004/Tindog"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#c770f0 ' }}>
                    <img
                      class="lazyload"
                      src={projImg5 }
                      alt="Avatar"
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>DAY AND NIGHT SMART ANIMAL INTRUSION DETECTION SYSTEM USING DEEP LEARNING TECHNIQUES</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#9381FF ' }}>
                    <h5>DAY AND NIGHT SMART ANIMAL INTRUSION DETECTION SYSTEM USING DEEP LEARNING TECHNIQUES</h5>
                    <p>
                    •	Implemented an IOT integrated Deep Learning project to prevent animal intrusion in farm-lands.
                    </p>
                    <p>
                    •	Introduced a custom dataset comprising of raw-images of 15 animal species using 3 existing open-source datasets.
                    </p>
                    <p>
                    •	Achieved 98.4% during the day, 97.3% during the night, and an impressive combined accuracy of 98.9% for both day and night conditions.
                    </p>
                    <p>
                    •	Collaborated Twilio API for message notification and Telegram API for Image retrieval.
                    </p>
                    <p>
                    Tech Stack: Raspberry pi, CNN Architecture, RESNET-50, VGG-19, Twilio API, Telegram API.
                    </p>
                    <a href="https://github.com/Suryaa2004/rec-ieee"><button class='btn btn-primary'>Know more</button></a>
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
  