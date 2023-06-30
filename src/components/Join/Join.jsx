import React from "react";
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {

    return(
        <div className='Join'>
            <div className='left-j'>
                <hr/>
                <div>
                    <span>READY TO</span>
                    <span className='stroke-text'> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>
            <div className='right-j'>
                <form className='email-container'>

                    <input
                        type="email"
                        name='user_email'
                        placeholder='Enter your Email addres'
                    />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join