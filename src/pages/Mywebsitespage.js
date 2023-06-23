import React from 'react'
import './mywebsite.css'

// Images for projects
import dotChatLogin from '../assets/projectimages/dotChatLogin.png'
import dotChatSection from '../assets/projectimages/dotChatChatSection.png'
import homeNSGB from '../assets/homepagewithoutlogin.png'
import homeSGB from '../assets/gaganblogwithloggedin.png'
import signForm from '../assets/signupform.png'

export default function Mywebsitespage() {
  return (
    <div className='outMyWeb'>
      <h1 className='firstHeading'>Here are some of my Websites</h1>
      <div className="innMyWeb">

        {/* For the first project */}
        <div className="firstDone">
          <div className="firstDoneDet">
            <h1><u>DOTCHAT - A REAL TIME CHAT APP</u></h1>
            <a className='visitLink' target={"_blank"} href="https://6469b4bd5a32342c742ea46e--delicate-lily-0a2564.netlify.app/">VISIT THE SITE</a>
            <a className='visitLink' target={"_blank"} href="https://github.com/GagneeshGitHub/dotchatfrontend">GITHUB SOURCE CODE (FRONT END)</a>
            <a className='visitLink' target={"_blank"} href="https://github.com/GagneeshGitHub/dotchatbackend">GITHUB SOURCE CODE (BACK END)</a>

            <div className="innDoneSec">
              <img className='projectImage' src={dotChatLogin} alt="No image yet" />
              <p className='projcetDetails'>
                I have created a <b><i>real time chat app</i></b> with Node js as backend and React as the front end.
                For real time communcation I have used Socket.io (WebSocket), which makes it very easy to achieve real time communcation with the other user or the backend.
                <br />
                <br />
                &ensp;First image is the login page for the dot chat app.
                <br />
                <br />
                <b>Here I have</b>, not provided any Sign Up form, because currently I don't have any database server to which I can connect the chat app for login, registration and saving message etc.
              </p>
            </div>
            <div className="innDoneSec">
              <img className='projectImage' src={dotChatSection} alt="No image yet" />
              <p>
                This second image is the chat section for the communication between the users.
                <br />
                <br />
                <b>Note that,</b> for the users account details, I have already predefined a global variable in Node js backend, which saves the account detail such as username and password of the user.
                <br />
                Later (In future) when I will add database to the backend, I will add Sign Up form so new users can login to the app.
              </p>
            </div>
            <h3 style={{color: "red"}}>Currently, the web socket is not supported in the free tier of hosting for node js application.</h3>
          </div>
        </div>


        {/* For the second project */}
        <div className="firstDone">
          <div className="firstDoneDet">
            <h1><u>GAGAN'S BLOG</u></h1>
            {/* <a className='visitLink' target={"_blank"} href="https://6469b4bd5a32342c742ea46e--delicate-lily-0a2564.netlify.app/">VISIT THE SITE</a> */}
            <a className='visitLink' target={"_blank"} href="https://github.com/GagneeshGitHub/gaganblogfrontend">GITHUB SOURCE CODE (FRONT END)</a>
            <a className='visitLink' target={"_blank"} href="https://github.com/GagneeshGitHub/gaganblogphpbackend">GITHUB SOURCE CODE (BACK END)</a>

            <div className="innDoneSec">
              <p className='projcetDetails'>
                This is a simple blog site, where you can upload contents (Simple text contents).In this website you can signup and login, which is handled by php backend connected to MySql database.
                <br />
                <br />
                &ensp;First image is the login page for the dot chat app.
                <br />
                <br />
                We have Sign Up form in it, it checks for the username length, no in between space etc and only then the signup is done, if any writing wrong username (string) it will give error above it.
              </p>
            </div>
            <div className="innDoneSec">
              <img className='threeImg' src={homeNSGB} alt="No Image" />
              <img className='threeImg' src={signForm} alt="No Image" />
              <img className='threeImg' src={homeSGB} alt="No Image" />
            </div>
            {/* <h3 style={{color: "red"}}>Currently, the web socket is not supported in the free tier of hosting for node js application.</h3> */}
          </div>
        </div>
      </div>
    </div>
  )
}
