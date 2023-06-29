import React,{useRef} from 'react'
import {FaHandPointDown} from 'react-icons/fa'
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_241d7tf', 'template_9n6bzd9',form.current, '92fqK_KkMzN9F_S1V')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        alert("Response Submitted")
    };
    return (
        <>
            <div className='p-3 contact' style={{ backgroundColor: "#121212"}} id='contact'>
                
                <div className="text-center" name="Contact" style={{color:'#F2F3F4'}}>
                        <div className="">
                            <div className="fs-1 py-4">Get In Touch <span style={{color:'#fc2569'}}><FaHandPointDown size={40}/></span></div>
                        </div>
                        <div className="">
                            <form ref={form} onSubmit={sendEmail} className="" >
                                <input type="text" placeholder="Enter your name" name="user_name" required className="inputt fs-4 my-3 p-2" style={{backgroundColor:'#121212',color:'#F2F3F4',border:'solid',borderWidth:'3px',borderColor:'#F2F3F4',borderRadius:'6px',outline:'none'}} /><br />
                                <input type="email" placeholder="Enter your Email" name="user_email" required className="inputt fs-4 my-3 p-2" style={{backgroundColor:'#121212',color:'#F2F3F4',border:'solid',borderWidth:'3px',borderColor:'#F2F3F4',borderRadius:'6px',outline:'none'}} /><br />
                                <textarea placeholder="Enter your message" name="message" required rows={6} className="inputt fs-4 my-3 p-2" style={{backgroundColor:'#121212',color:'#F2F3F4',border:'solid',borderWidth:'3px',borderColor:'#F2F3F4',borderRadius:'6px',outline:'none'}} ></textarea><br />
                                <button type='submit' value="Send" className='px-5 py-2 mx-4 my-2 mb-4 fs-5 fw-semibold me-5' style={{backgroundColor:'#fc2569',color:'white',border:'none',borderRadius:'5px',fontFamily:'Kanit'}} >Submit</button>
                            </form>
                        </div>
                </div>

                
            </div>
        </>
    )
}

export default Contact