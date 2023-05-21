import React from 'react';
import { BsFacebook, BsGithub, BsTelegram, BsTwitter } from 'react-icons/bs';

import logo from '../../../assets/logomain1.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white"> 
            <div>
                
                <img className='w-52 pb-5 relative bottom-10' src={logo} alt="" />
                <p className='ml-8'>© Toyland Animals @2023</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="my-5 link link-hover">Cow Toys</a>
                <a className="link link-hover mb-5">Hourse Toys</a>
                <a className="link link-hover mb-5">Birds Toys</a>
                <a className="link link-hover">Lion Toys</a>
            </div>
            <div>
                <span className="footer-title">Contact Info</span>
                <a className="link link-hover my-5">About us</a>
                <a className="link link-hover mb-5">+880123738493</a>
                <a className="link link-hover mb-5">fensami@gmail.com</a>
                <a className="link link-hover">Feni-town, ssk road, block-4, <br /> building: 45</a>
            </div>        
            <div>
                <span className="footer-title">Social</span>
                <Link to='' className="link link-hover my-5 ml-4"> <BsFacebook style={{fontSize: '1.5rem'}}></BsFacebook></Link>
                <a className="link link-hover mb-5 ml-4"> <BsTwitter style={{fontSize: '1.5rem'}}></BsTwitter></a>
                <a className="link link-hover ml-4"><BsTelegram style={{fontSize: '1.8rem'}}></BsTelegram></a>


                <Link to='https://github.com/fensami' className="link link-hover mt-5 ml-4"><BsGithub style={{fontSize: '1.8rem'}}></BsGithub></Link>
            </div>
           
        </footer>
    );
};

export default Footer;