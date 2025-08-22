import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/chris2.jpeg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
         <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/christianoomondi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/christiano-omondi-5b99541b9/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Christiano Omondi</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;