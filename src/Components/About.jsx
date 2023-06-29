import React from 'react'
import {IoSchool} from 'react-icons/io5'
import {GrReactjs} from 'react-icons/gr'
import {BsDatabaseFillCheck} from 'react-icons/bs'
import {TbFocus2} from 'react-icons/tb'

const About = () => {
    return (
        <>
        <div className='about' style={{ backgroundColor: "#121212",paddingTop:'6rem'}} id='about'>
        <div className="fs-1 py-4 text-center" style={{color:'#F2F3F4'}}>About Me</div>
            <div className="container py-2" style={{ backgroundColor: "#121212" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
                            <div className="timeline ">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><IoSchool/></div>
                                    <h3 className="title fs-2">Education</h3>
                                    <p className="description fs-6">
                                    I am currently pursuing a Bachelor's degree in Information Technology at the esteemed University of Mumbai. My educational journey is focused on acquiring in-depth knowledge and practical skills in this dynamic field.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline ">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><GrReactjs/></div>
                                    <h3 className="title fs-2">Frontend Technology</h3>
                                    <p className="description fs-6">
                                    My focus lies primarily in frontend development, where I excel in HTML, CSS, JavaScript, and have a deep understanding of ReactJS. I have a keen eye for designing visually appealing and user-friendly interfaces that enhance the overall user experience.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline ">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><BsDatabaseFillCheck/></div>
                                    <h3 className="title fs-2">Backend Technology</h3>
                                    <p className="description fs-6">
                                    Additionally, I possess strong skills in backend development. I am proficient in technologies such as NodeJS, ExpressJS, and MongoDB, enabling me to build robust server-side applications and handle database management efficiently.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline ">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><TbFocus2/></div>
                                    <h3 className="title fs-2">Learning</h3>
                                    <p className="description fs-6">
                                    Continuously learning and expanding my skillset, I strive to stay up-to-date with the latest industry trends and emerging technologies. I am passionate about creating innovative and efficient solutions to address real-world challenges.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default About