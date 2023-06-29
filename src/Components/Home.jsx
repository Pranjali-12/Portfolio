import React from 'react';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';


const Home = () => {
    const styles = StyleSheet.create({
        fadeIn: {
          animationName: fadeIn,
          animationDuration: '3s',
        },
      });
      
    return (
        <div className='d-flex px-5 home justify-content-center align-items-center my-0' style={{ backgroundColor: "#121212",paddingTop:'5rem' }}>
            <div className={`p-5 fs-4 mx-4 home1 ${css(styles.fadeIn)}`} style={{ color: "#F2F3F4", width: '70vw', boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(92, 92, 92, 0.3) 0px 18px 36px -18px" }}>
            {/* <div className='p-5 fs-4 mx-4 home1' style={{ color: "#F2F3F4", width: '70vw', height: 'auto'}}> */}
                <div className='fw-semibold fs-1 pb-4' style={{ height: 'auto' }}>
                    Hey! I'm <span style={{ color: '#fc2569' }}>Pranjali Kasbale</span> 
                </div>
                <div className=''>
                Welcome to my Full Stack Developer portfolio.<br/>
                I'm always eager to learn new things and stay updated with the latest trends in web development. 
                </div>
                <div className='fs-4 d-flex justify-content-start mt-4' style={{ color: "#F2F3F4" }}>
                    Find me on :
                </div>
                <div className='d-flex justify-content-start' style={{ color: "#fc2569" }}>
                    <BsLinkedin style={{cursor:'pointer'}} size={33} className='my-3 me-3' onClick={()=>window.location.href='https://www.linkedin.com/in/pranjali-kasbale-1b828a247/'} />
                    <BsInstagram style={{cursor:'pointer'}} size={33} className='m-3' onClick={()=>window.location.href='https://www.instagram.com/pranj_k12/'} />
                    <BsGithub style={{cursor:'pointer'}} size={33} className='m-3' onClick={()=>window.location.href='https://github.com/Pranjali-12'} />
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ width: '50%' }}><img src={require('../Assets/img.gif')} alt="" style={{ height: '23rem', width: '23rem' }} />
            </div>
            
        </div>
    )
}

export default Home