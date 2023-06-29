import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="sticky-top mx-0 shadow-lg py-3" expand="lg" style={{ backgroundColor: "rgba(0, 0, 0,0.9)",backdropFilter: 'blur(4px)' }}>

      <Navbar.Toggle aria-controls="navbarSupportedContent" className='m-3'  style={{ backgroundColor: "#fc2569" }}/><br />

      <Navbar.Collapse id="navbarSupportedContent" className=''>
        <Nav className="fs-5 justify-content-end ms-auto " style={{ fontFamily:'Kanit' }}>
          <Nav.Link href="/" className='px-4 links'  style={{ color: "#F2F3F4" }}>Home</Nav.Link>
          <Nav.Link href="#about" className='px-4 links'  style={{ color: "#F2F3F4" }}>About</Nav.Link>
          <Nav.Link href="#skills" className='px-4 links'  style={{ color: "#F2F3F4" }}>Skills</Nav.Link>
          <Nav.Link href="#projects" className='px-4 links'  style={{ color: "#F2F3F4" }}>Projects</Nav.Link>
          {/* <Nav.Link href="#contact" className='px-4 links'  style={{ color: "#F2F3F4" }}>Contact</Nav.Link> */}
        </Nav>

        <button className='px-3 py-2 mx-4 my-2 fs-5 fw-semibold me-5' style={{backgroundColor:'#fc2569',color:'white',border:'none',borderRadius:'5px',fontFamily:'Kanit'}} onClick={() => window.location.href = '#contact'}>Let's Connect</button>
      </Navbar.Collapse>

     

    </Navbar>
  )
}

export default Header