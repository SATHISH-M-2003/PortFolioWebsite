import React from 'react'
import './Hero.css'
import user from '../../assets/profile1.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={user} alt="" />
            <h1><span>I'm Sathish</span>,FullStack Engineer</h1>
            <p>I am a passionate Full Stack Engineer, crafting dynamic and scalable web solutions with seamless user experiences. </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With ME</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}
export default Hero;
