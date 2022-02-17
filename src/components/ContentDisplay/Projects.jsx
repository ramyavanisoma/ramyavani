import React from 'react';
import styled from 'styled-components';
import weatherapp from '../../images/weather.JPG';
import tictactoe from '../../images/tictactoe.JPG';
import personalwebsite from '../../images/tictactoe.JPG';

const ProjectStyled = styled.div`
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
  ul {
    color: #b3b3b3;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-bottom: 4rem;
    li {
      margin-bottom: 0.25rem;
      span {
        font-size: 1.25rem;
        line-height: inherit;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  h3 {
    font-size: 1rem;
    margin-top: 4rem;
    margin-left: 1rem;
  }
  a{
    img {
      width: 80%;
      display: block;
      margin: 0rem auto 1rem;
      ${'' /* margin-left: 1rem;
      margin-bottom: 1rem; */}
      transition-duration: 0.5s;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    p {
      color: #eeeeee;
      font-size: 1rem;
      margin-left: 1rem;
      display: inline-block;
      transition-duration: 0.5s;
      border-bottom: 1px dashed #ff9999;
    }
  }
  a:hover {
    p{
      color: #ff9999;
      border-bottom: 1px dashed transparent;
    }
    img {
      box-shadow: 0 0 10px rgba(145,202,249,0.5)
    }
  }
`;

const Projects = () => {
  return (
    <ProjectStyled>
      <h2>Personal Website</h2>
      <a href='https://ramyavanisoma.github.io/personal-website/' target='_blank' rel="noopener noreferrer">
        <img src={personalwebsite} alt='personal-website'/>
        {/* <p>Personal Website</p> */}
      </a>
      <ul>
        <li>
          A pure front-end web app to sell myself&nbsp;
          <span role="img" aria-label="NERD FACE">&#128526;</span>
        </li>
        <li>Hosted by GitHub Pages</li>
      </ul>

      <h2>TicTacToe</h2>
      <a href='https://github.com/ramyavanisoma/TicTacToe' target='_blank' rel="noopener noreferrer">
        <img src={tictactoe} alt='tictactoe'/>
        {/* <p>tictactoe</p> */}
      </a>
      <ul>
        <li>A full stack web app which support playing Tic-Tac-Toe with computer.</li>
        <li>Layout and style created by Jquery and CSS3</li>
      </ul>

      <h2>Weather App</h2>
      <a href='https://github.com/ramyavanisoma/weather' target='_blank' rel="noopener noreferrer">
        <img src={weatherapp} alt='weatherapp'/>
        {/* <p>weatherapp</p> */}
      </a>
      <ul>
        <li>
          An app find out weather info for current location&nbsp;
        </li>
      </ul>
      <h3>To Be continued ...</h3>
    </ProjectStyled>
  )
}

export default Projects
