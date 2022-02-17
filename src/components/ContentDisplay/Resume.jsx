import React from 'react'
import styled from 'styled-components'

const ResumeStyled = styled.div`
  left: 2rem;
  right: 2rem;
  height: 540px;
  overflow: scroll;
  position: absolute;
  padding-bottom: 2rem;
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  h4 {
    margin-left: 1rem;
    font-size: 1rem;
  }
  p {
    margin-left: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  ul {
    color: #b3b3b3;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    li {
      margin-bottom: 0.5rem;
      span {
        display: table-cell;
        padding-left: 0.5rem;
      }
      a {
        color: #b3b3b3;
        transition-duration: 0.5s;
        border-bottom: 1px dashed #ff9999;
      }
      a:hover {
        color: #ff9999;
        border-bottom: 1px dashed transparent;
      }
    }
  }
`;

const Section = styled.section`
  margin-top: 4rem;
`;

const Resume = () => {
  return (
    <ResumeStyled>
      <h2>Experience</h2>
      <h4>Full Stack Web Developer ( Self-Taught )</h4>
      <p>Aug 2021 – Present</p>
      <ul>
        <li><span>Built a full stack web app from scratch</span></li>
        <li><span>Managed software packages with NPM and the project through Github</span></li>
      </ul>
      <Section>
        <h2>Education</h2>
        <h4>FreeCodeCamp Courses</h4>
        <ul>
          <li>
            <a href='https://www.freecodecamp.org/certification/fcc8209b424/responsive-web-design' target='_blank' rel="noopener noreferrer">
              Responsive Web Design Certification.
            </a>
          </li>
          <li>
            <a href='https://www.freecodecamp.org/certification/fcc8209b424/javascript-algorithms-and-data-structures' target='_blank' rel="noopener noreferrer">
              JavaScript Algorithms and Data Structures Certification.
            </a>
          </li>
          <li>
            <a href='https://www.freecodecamp.org/certification/fcc8209b424/front-end-development-libraries' target='_blank' rel="noopener noreferrer">
              Front End Development Libraries Certification
            </a>
          </li>
          <li>
            <a href='https://www.freecodecamp.org/certification/fcc8209b424/back-end-development-and-apis' target='_blank' rel="noopener noreferrer">
              Back End Development and APIs Certification
            </a>
          </li>
        </ul>
        <h4>Masters Degree in Digital electronics and communications systems @ KSRM Engineering college.</h4>
        <p>Sep 2015 – Sep 2017</p>
        <ul>
          <li><span>Joint Super Resolution and Deblocking for a Highly Compressed Image</span></li>
          <li><span>GPA: 8.30 / 10.0</span></li>
        </ul>
        <h4>Bachelors Degree in Electronics and communications engineering @ SreeVidyanikethan Engineering college.</h4>
        <p>June 2011 – June 2015</p>
      </Section>
    </ResumeStyled>
  )
}

export default Resume
