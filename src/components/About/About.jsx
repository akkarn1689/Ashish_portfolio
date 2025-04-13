import React from "react";
import { stackList, toolist } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <React.Fragment>
      <svg
        height="20%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container" data-aos="fade-up">
          <div className="SectionTitle">About Me</div>
          <div className="AboutBio">
            Hello, I'm <strong>Ashish Karn</strong>, a passionate software developer with expertise in <strong> Node.js, JavaScript, TypeScript, C++,</strong> along with their related frameworks.  
            I completed my <strong>B.Tech in Electronics & Communications Engineering</strong> from <strong> NIT Surat</strong> and am currently working as a <strong>Associate Technology - Node.js at FlexiEle Consulting Service,</strong> an early-stage startup.  

            <br />
            <br />

            At <strong>FlexiEle</strong>, my main focus is <strong>backend development</strong>, where I work   
            on <strong>adding features, implementing system designs, and setting up automated procedures and workflow.</strong> I 
             enjoy creating efficient, scalable solutions that enhance the functionality of our software.
            During my internship at Pried.in, I worked on designing complex user interfaces and front-end development, 
            giving me a well-rounded perspective on software engineering.

            <br />
            <br />

            Besides coding, I enjoy <strong>reading books</strong> and <strong>cooking</strong>, 
            which help me stay balanced and creative.  
            Let's collaborate and create something amazing together!  
          </div>

          <br />
          <br />

          <div className="AboutBio tagline2">My Technical Skills</div>
          <br />
          <Technologies data-aos="fade-up">
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <br />

          <div className="AboutBio tagline2">Tools That I Use</div>
          <br />
          <Technologies data-aos="fade-up">
            {toolist.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </ContactWrapper>
    </React.Fragment>
  );
}

export default About;
