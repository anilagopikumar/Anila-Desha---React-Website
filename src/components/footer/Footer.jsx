import React from 'react'
import "./footer.css"
import {FaLinkedinIn,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
      <footer>
        <a href="#header" className='footer__logo'>Anila</a>
          <ul className='permalinks'>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className='footer__socials'>
            <a href='https://www.linkedin.com/in/anila-gopikumar/'><FaLinkedinIn/></a>
            <a href='https://github.com/anilagopikumar'><FaGithub/></a>
            <a href='https://twitter.com/DeshaAnila'><FaTwitter/></a>
            <a href='https://www.instagram.com/anila_gopikumar/'><FaInstagram/></a>
          </div>
          <div className='footer__copyright'>
          <small>&copy; Developed by Anila Gopikumar. All Rights Reserved.</small>
          </div>
      </footer>
   
  );
}

export default Footer