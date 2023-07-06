//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Myfooter.css';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';

const MyFooter = () => {

//class MyFooter extends Component {
  // render() {
    return (
      <footer className="mt-5 footer lead display-5 bg-dark sticky-bottom">
        <div className="container">
          <div className="row">
          <div className='col d-flex flex-column socialTxt'>
              <span > Terms & Conditions</span>
              <span > Curiosity </span>
              <span > Partners </span>
              <span > Work with Us </span>
            </div>
            <div className='col d-flex flex-column socialTxt'>
              <span > Seguici sui Social:</span>
              <span > Twitter <FaTwitter /></span>
              <span > Instagram <FaInstagram /></span>
              <span > Facebook <FaFacebook /></span>
            </div>
            <div className='col d-flex flex-column socialTxt'>
              <span> Help</span>
              <span> Blog</span>
              <span> Press</span>
              <span> Credits</span>
            </div>
            <div className='col d-flex flex-column socialTxt'>
              <span> Stay tuned</span>
              <span> Policy</span>
              <span> Our mission</span>
              <span> Contact Us</span>
            </div>
            
          </div>
          <div className="copyRi">
              <span className=""><RiCopyrightLine />Copyright Luigi Ciangola 2023</span>
            </div>
        </div>
      </footer>
    );
  
}

export default MyFooter;