import React from 'react'
import "./about.css"
import ME from "../../assets/me.JPG"
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5 className='about-head'>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
      <div className='about__me'>
      <div className='about__me-image'>
      <img src={ME} alt="AboutImage"/>
      </div>
      </div>
      <div className='about__content'>
      <div className='about__cards'>
      <article className='about__card'>
      <FaAward className='about__icon'/>
      <h5>Experience</h5>
      <small>1+ Year </small>
      </article>
      <article className='about__card'>
      <VscFolderLibrary className='about__icon'/>
      <h5>Projects</h5>
      <small>4 Projects</small>
      </article>
      </div>
      <br/>
      <p className='para'>
      An Alumni understudy who procured a four year certification in Data Innovation , Intrigued by Computerized reasoning and Front-End programming.
      I've finished undertakings in the fields of ANDROID and WEB applications with incredible achievement.
      </p>
      <div className='interests'>
      <strong>Interests:</strong> Cooking | Badminton | Watching movies | Traveling | Trekking | Photography | Yoga .
      </div>
      <div className='button'>
      <a href="#contact" className='btn btn-primary'>Know More</a>
      </div>
      </div>
      </div>
    </section>
  )
}

export default About