import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
return (
<section id="experience">
<h5 class="exp-head">What Skills I have</h5>      
<h2>Skills</h2>  
<div className="container experience__container">
<div className='experience__frontend'>
<h3>Frontend & Cloud,Version Control</h3>
<div className='experience__content'>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>HTML</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>CSS</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Bootstrap</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Javascript</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>AngularJS</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>ReactJs</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Vue.Js</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>AWS</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>GCP</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>GIT</h4>
</div>
</article>


</div>
</div>
<div className='experience__backend'>
<h3>Backend & Database</h3>
<div className='experience__content'>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Node.Js</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Python</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>R</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Java</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>DS</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Algorithms</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>Data Science</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>ML,AI,NLP,DL</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>MYSQL</h4>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill className="experience__details-icon"/>
<div>
<h4>MongoDB</h4>
</div>
</article>
</div>
</div>
</div>      
</section>
);
}
export default Experience