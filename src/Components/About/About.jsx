import React from 'react'
import './About.css'
import profile from '../../assets/profile1.webp'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
               
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate Full Stack Engineer with expertise in building scalable and high-performance web applications.With a strong foundation in both front-end and back-end technologies, I specialize in creating seamless user experiences and robust server-side logic
                        </p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>REACT JS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JAVASCRIPT</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JAVA</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>COMPLETED CERFICATES</p>
                </div>
            </div>

        </div>
    )
}
export default About;