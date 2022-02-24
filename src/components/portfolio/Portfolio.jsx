import React from 'react'
import "./portfolio.css"
import {BsFillRecordCircleFill} from 'react-icons/bs'
const Portfolio = () => {
return (
<section id='portfolio'>
<h5 className="port-head">Education & Work History</h5>
<h2>Portfolio</h2>
<div className='container portfolio__container'>
<div className='portfolio__work'>
<h3>Experience</h3>
<div className='portfolio__content'>
<article className='portfolio__details'>
<div>
<h4>Software Developer - Prolifics Corporation - Hyderabad , India</h4>
<small className='text-light'>July 2021 - Present</small>
</div>
</article>
<article className='portfolio__details'>
<div>
<h4>Full Stack Intern - Edvenswa Tech Pvt ltd - Hyderabad , India</h4>
<small className='text-light'>Apr 2021 - Jun 2021</small>
</div>
</article>
<article className='portfolio__details'>
<div>
<h4>Systems Engineer Intern - Clinch Infotech - Hyderabad , India</h4>
<small className='text-light'>Jan 2021 - Mar 2021</small>
</div>
</article>
</div>
</div>
<div className='portfolio__education'>
<h3>Education</h3>
<div className='portfolio__content'>
<article className='portfolio__details'>
<div>
<h4>B.E - IT , Snist - Aff JNTU - Hyderabad , India</h4>
<small className='text-light'>May 2018 , 7.6 CGPA</small>
</div>
</article>
<article className='portfolio__details'>
<div>
<h4>Secondary Education , BIE - Hyderabad , India</h4>
<small className='text-light'>May 2014 , 9.2 CGPA</small>
</div>
</article>
<article className='portfolio__details'>
<div>
<h4>10TH Standard , BSET - Hyderabad , India</h4>
<small className='text-light'>May 2012 , 9.5 CGPA</small>
</div>
</article>
</div>
</div>
</div>
</section>
)
}
export default Portfolio