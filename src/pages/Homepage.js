import React from "react";
import "./homepage.css";
import profileImg from "../assets/profleimg.png";
import javascriptLogo from "../assets/javascriptlogo.png";
import reactLogo from "../assets/reactlogo.png";
import nodeLogo from "../assets/nodejslogo.png";
import expressLogo from "../assets/expresslogo.png";
import htmlLogo from "../assets/htmllogo.png";
import cssLogo from "../assets/csslogo.png";
import pythonLogo from '../assets/pythonlogo.png'
import godotLog from '../assets/godotlogo.png'
import inkscapeLogo from '../assets/inkscapelogo.png'
import djangoLogo from '../assets/django.png'
import cLogo from '../assets/clogo.png'
import cppLogo from '../assets/cpplogo.png'
import chashLogo from '../assets/chashlogo.png'
import blenderLogo from '../assets/blenderlogo.png'
import wordpressLogo from '../assets/wordpresslogo.png'
import javaLogo from '../assets/javalogo.png'
import socketLogo from '../assets/socketlogo.png'
import './logoCardsCss.css'

export default function Homepage() {
  return (
    <>
      <div className="homepageClass">
        <div className="innerHomeClass">
          <div className="innHomeLeftDiv">
            <div className="innHLDText">
              <p className="firstPara">Hi There! , I am </p>
              <p className="nameIPara">Gagneesh Vimal</p>
              <p className="secondPara">
                I am a <p className="webDevText">web developer</p>
              </p>
            </div>
          </div>
          <div className="innHomeRightDiv">
            <div className="profileImage">
              <img className="profileImg" src={profileImg} alt="NoImgeToShow" />
            </div>
          </div>
        </div>
      </div>
      <div className="theGapDiv"></div>
      <div className="topskillclass">
        <div className="innSkillClass">
        <h3 className="mySkillHeading"><u>MySkills</u></h3>
          <div className="skillCards">
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={javascriptLogo} alt="" /> */}
                {/* <h4>JAVASCRIPT</h4> */}
                <h2 id="jsLogo" className="logoHeading">JavaScript</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={reactLogo} alt="" /> */}
                {/* <h4>REACT JS</h4> */}
                <h2 id="rjsLogo" className="logoHeading">ReactJS</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={nodeLogo} alt="" /> */}
                {/* <h4>NODE JS</h4> */}
                <h2 id="njsLogo" className="logoHeading">NodeJS</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={expressLogo} alt="" /> */}
                {/* <h4>EXPRESS JS</h4> */}
                <h2 id="ejsLogo" className="logoHeading">ExpressJS</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={pythonLogo} alt="" /> */}
                {/* <h4>PYTHON</h4> */}
                <h2 id="phpLogo" className="logoHeading">PhP</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={htmlLogo} alt="" /> */}
                {/* <h4>HTML</h4> */}
                <h2 id="hlLogo" className="logoHeading">Html</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={cssLogo} alt="" /> */}
                {/* <h4>CSS</h4> */}
                <h2 id="cssLogo" className="logoHeading">Css</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={wordpressLogo} alt="" /> */}
                {/* <h4>WORDPRESS</h4> */}
                <h2 id="wpLogo" className="logoHeading">Wordpress</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={djangoLogo} alt="" /> */}
                <h2 id="djLogo" className="logoHeading">Django</h2>
                {/* <h4>DJANGO</h4> */}
              </div>
            </div>
            {/* <div className="cards">
              <div className="innCards">
                <img className="cardLogo" src={cLogo} alt="" />
                <h4>C</h4>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                <img className="cardLogo" src={cppLogo} alt="" />
                <h4>C++</h4>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                <img className="cardLogo" src={chashLogo} alt="" />
                <h4>C#</h4>
              </div>
            </div> */}
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={javaLogo} alt="" /> */}
                {/* <h4>JAVA</h4> */}
                <h2 id="jvLogo" className="logoHeading">JAVA</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={socketLogo} alt="" /> */}
                {/* <h4>SCOKET IO</h4> */}
                <h2>SocketIO</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={blenderLogo} alt="" /> */}
                {/* <h4>BLENDER 3D</h4> */}
                <h2>Blender3D</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={godotLog} alt="" /> */}
                {/* <h4>GODOT</h4> */}
                <h2 id="gdLogo" className="logoHeading">GODOT</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={cssLogo} alt="" /> */}
                {/* <h4>UNITY</h4> */}
                <h2>Unity</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={inkscapeLogo} alt="" /> */}
                {/* <h4>INKSCAPE</h4> */}
                <h2>Inkscape</h2>
              </div>
            </div>
            <div className="cards">
              <div className="innCards">
                {/* <img className="cardLogo" src={pythonLogo} alt="" /> */}
                {/* <h4>PYTHON</h4> */}
                <h2 id="pyLogo" className="logoHeading">Python</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
