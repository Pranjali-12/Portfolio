import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='pt-4 pb-2 fs-4 text-center' style={{ backgroundColor: "#121212",color:'#F2F3F4'}}>
        Created By <span className='' style={{ color: '#fc2569',cursor:'pointer' }} onClick={()=>window.location.href='https://github.com/Pranjali-12'}>@Pranjali Kasbale</span> 
    </div>
    </>
  )
}

export default Footer