import React from 'react'
import { Col } from 'react-bootstrap'
import {  BsGithub } from 'react-icons/bs'

const ProjectCard = ({title,techstack, description,imgUrl,git}) => {
  return (
    <Col size={12}  lg={4} sm={6} md={4}>
      <div className="proj-imgbx m-4" >
        <img src={imgUrl} style={{width:'100%'}}/>
        <div className="proj-txtx">
          <div className='fs-3 fw-semibold' style={{color:"#121212"}}>{title}</div>
          <div className='fs-5 fw-semibold' style={{color:"#121212"}}>{techstack}</div>
          <div className='fs-6 fw-semibold px-3' style={{color:"#121212"}}>{description}</div>
          <button className='px-3 py-2 fw-semibold fs-5 my-3' style={{backgroundColor:'#121212',color:'#fc2569',border:'none',borderRadius:'5px',fontFamily:'Kanit'}} onClick={()=>window.location.href = `${git}`}><BsGithub size={30} className='mx-3' />Source Code</button>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard