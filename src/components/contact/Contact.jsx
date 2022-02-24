import {React} from 'react'
import "./contact.css"
import {HiMail} from 'react-icons/hi'
import {IoIosCall} from 'react-icons/io'
import {FaLinkedinIn,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'

const Contact = () => {
  return (
      <section id='contact'>
      <h1 className='h1'>Stay Connected On</h1>
      <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
      <HiMail className='contact__option-icon'/>
      <h4>E-mail</h4>
      <h5>anila.desha094@gmail.com</h5>
      <a href="mailto:anila.desha094@gmail.com">Send a Message</a>
      </article>
      <article className='contact__option'>
      <IoIosCall className='contact__option-icon'/>
      <h4>Contact Number</h4>
      <h5>+91 7674017598</h5>
      <a href='#contact'>Send a Message</a>
      </article>
      </div>
      <div>

      <div className='contact__socials'>
            <h5 className='h5'>OR</h5>
            <a className='icon' href='https://www.linkedin.com/in/anila-gopikumar/'><FaLinkedinIn/></a>
            <a className='icon' href='https://github.com/anilagopikumar'><FaGithub/></a>
            <a className='icon' href='https://twitter.com/DeshaAnila'><FaTwitter/></a>
            <a className='icon' href='https://www.instagram.com/anila_gopikumar/'><FaInstagram/></a>
     </div>
     </div>
     </div>
     </section>
)
}

export default Contact