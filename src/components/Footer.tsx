import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/christianoomondi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/christiano-omondi-5b99541b9/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>

      </div>
      <p>A portfolio designed & built by <a href="https://github.com/christianoomondi/react-portfolio-template" target="_blank" rel="noreferrer">Christiano Omondi</a> with 💜</p>
    </footer>
  );
}

export default Footer;