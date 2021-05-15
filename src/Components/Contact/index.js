import React, {Component} from 'react';
import Form from "./Form"
import {HomePageConatiner, HeroSec,DoWeWorkc} from './styles';
import MainImage from '../../images/contact.jpg';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import MailIcon from '@material-ui/icons/Mail';
import {DoWeWork} from "../Homepage/styles";
import MaintainImage from '../../images/awareness.png'; 
class Contact extends Component{
  rect = (color) => (
    <svg width="87" height="13" viewBox="0 0 87 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <rect x="4" width="78.7487" height="4.66064" fill={color || "#F6797D"}/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="86.7487" height="12.6606" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
      </svg>
    );
    heroSec = () => (
      <HeroSec>
      <div className="aboutu">
      <img src={MainImage} alt={""}/>
      </div>
    </HeroSec>
    );
    DoWeWorkc = () => (
      <DoWeWorkc>
        <div className="he-text">
          <div>
          <div className="hel-text">
          <h2>Contact Us ?</h2>
          <h1>
          Where to find us
          </h1>
          <h3>
          #225</h3>
          <h3>
          Jubilee House
          </h3>
          <h3>
          3 The Drive
          </h3>
          <h3>
          Brentwood
          </h3>
          <h3>
          CM13 3FR
          </h3>
          <h3><PermPhoneMsgIcon />
          01277725105
          </h3>
          <h3>
          <MailIcon/>
           info@ananyaitservices.com
          </h3>
          </div>
          <div className="lets">
          Lets Talk About Your Needs
          <Form />
          </div>
          </div>
          </div>
      </DoWeWorkc>
    );
    DoWeWork = () => (
    <DoWeWork>
    <div className="he-text">
      <img src={MaintainImage} alt={"main"}/>
      <div>
        <div className="hel-text">
      Would You Like To Start A Project With Us?
      </div>
      <div class="button-text">
        <PermPhoneMsgIcon />
        01277725105
        </div>
      </div>
    </div>
    </DoWeWork>
    );
  render() {
    return (
      <HomePageConatiner>
      {this.heroSec()}
      {this.DoWeWorkc()}
      <iframe style={{width: "100%", height: "300px"}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=CM13%203FR&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" aria-label="CM13 3FR"></iframe>
      {this.DoWeWork()}
    </HomePageConatiner>
    );
  }
}

export default Contact;