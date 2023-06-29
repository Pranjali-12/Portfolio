import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard';


const Projects = () => {
    const projects = [
        {
          title: "Classic Footwears",
          techstack: "MERN stack",
          description: "User can buy shoes in online transaction mode.",
          imgUrl: require('../Assets/classic.jpeg'),
          git: 'https://github.com/Pranjali-12/Classic-Footwears'
        },
        {
          title: "Restaurant Website",
          techstack:"Html,Css",
          description: "Its a portfolio of Restaurant Website",
          imgUrl: require('../Assets/restaurant.jpeg'),
          git: 'https://github.com/Pranjali-12/Restaurant-Website'
        },
        {
          title: "Book Recommendation System",
          techstack: "Python,Html,Css,Flask",
          description: "System recommends books to the user by book name",
          imgUrl: require('../Assets/book.jpeg'),
          git: 'https://github.com/Pranjali-12/Book-Recommendation-System'
        },
        {
          title: "ATM Interface",
          techstack: "Java,MySQL",
          description: "System helps the customer in checking the balance and transaction of the amount by validating the pin number ",
          imgUrl: require('../Assets/atm.jpeg'),
          git: 'https://github.com/Pranjali-12/ATM-Interface'
        },
        {
          title: "Smart Audiobook",
          techstack:"Python",
          description: "Smart audiobook covered the implementation of audiobook, which can read the pdf book using python automation code",
          imgUrl: require('../Assets/smart.jpeg'),
          git: 'https://github.com/Pranjali-12/Smart-Audiobook'
        },
        {
          title: "Base Converter",
          techstack: "Html,Css,Js",
          description: "Its converts base of number",
          imgUrl: require('../Assets/base.jpeg'),
          git: 'https://github.com/Pranjali-12/Base-Converter'
        }
      ];
  return (
    <section className="project my-0" id="projects" style={{paddingTop:'6rem'}}>
    <Container>
      <Row>
        <Col size={12}>
          {/* <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
              <div className="fs-1 text-center " style={{color:'#F2F3F4'}}>Projects</div>
              <p>My projects makes use of vast variety of latest technology tools.Below are some of my projects</p>
                    <Row lg={2}>  
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
            {/* </div>}
          </TrackVisibility> */}
        </Col>
      </Row>
    </Container>
    
  </section>
  )
}

export default Projects