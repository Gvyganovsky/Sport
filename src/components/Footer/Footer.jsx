import React from "react";
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
const Footer = () =>{
    return(
        <div className='Footer-container'>
            <hr/>

            <div className='footer'>
                <img src={Github} alt="Github"/>
                <img src={Instagram} alt="Instagram"/>
                <img src={LinkedIn} alt="LinkedIn"/>
            </div>
        </div>
    )
}
export default Footer