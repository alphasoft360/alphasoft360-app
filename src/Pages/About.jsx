import React from 'react'
import AboutImg from '../About/AboutImg';
import AboutSection from '../About/AboutSection';
// import Pricing from '../Home/pricing';
import TeamWork from '../About/TeamWork';
import AboutForm from '../About/TeamForm';
// import TeamSection from '../About/TeamSection';
import '../About/About.css';

const About = () => {
  return (
    <div>
      <AboutImg/>
      <AboutSection/>
      <TeamWork/>
      {/* <TeamSection/> */}
      {/* <Pricing/> */}
      <AboutForm/>
    </div>
  )
}

export default About
