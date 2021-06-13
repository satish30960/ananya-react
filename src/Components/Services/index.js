import React, {Component} from 'react';
import {HomePageConatiner,HowDoWeWor, DesignWe,DesignW,WeDoLists,Design} from './styles';
import DesigImage from '../../images/client1.png';
import DesigneImage from '../../images/client2.png';
import CodeImage from '../../images/client3.jpg'; 
import MaintaiImage from '../../images/client4.png'; 
import SofImage from '../../images/client5.png';
import HarImage from '../../images/client6.png';
import SoImage from '../../images/client7.jpg';
import HaImage from '../../images/client8.png';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import MailIcon from '@material-ui/icons/Mail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {HeroSection1} from '../WhatsWe/styles';
import TabUI from "./TabUI";
  const serviceArray = [
    {
      image: DesigImage,
    },
    {
      image: DesigneImage,
    },
    {
      image: CodeImage,
    },
    {
      image: MaintaiImage,
    },
    {
      image: SofImage,
    },
    {
      image: HarImage,
    },
    {
      image: SoImage,
    },
    {
      image: HaImage,
    },
  ]
class Services extends Component{
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
      hero = () => (
        <HeroSection1>
        <div className="aboutus">
          SERVICES
        </div>
      </HeroSection1>
      );

      howDoWeWor = () => (
        <HowDoWeWor>
          <div className="help-text">
            How We Can Help You?
            {this.rect()}
          </div>
          <div className="desc-text">
          We ensure the highest levels of certainty and satisfaction through a deep-set commitment to our clients, comprehensive industry expertise and a global network of innovation and delivery centres.
          </div>
        </HowDoWeWor>
      );
      DesignWe = () => (
        <DesignWe>
          <div className="blue-containter">
            <div>
            Let’s Make Awesome Things, Together.
            </div>
            <div>
            Tell Us About Your Project.
            <h3><PermPhoneMsgIcon />
          01277725105
          </h3>
          <h3>
          <MailIcon/>
           info@ananyaitservices.com
          </h3>
            </div>
          </div>
          </DesignWe>
   );
   Design = () => (
        <Design> 
           <div className="work">
               Who We've Worked With
            </div>
       </Design>
    );
   DesignW = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
      return <DesignW>
         <Slider {...settings}>{
          serviceArray.map((data, index) => (
              <WeDoLists row={data.rotate ? "row-reverse" : "row"} bgColor={data.bgColor} width={index === 3 ? 1 : 0} key={index}>
                <div className="Software-text">
                <div className="det-text">
                  <img src={data.image} alt={"some"}/>
                </div>
                </div>
              </WeDoLists>
            ))
          }</Slider>
        </DesignW>
   };

  render() {
    return (
      <HomePageConatiner>
        {this.hero()}
        <TabUI/>
        {/* {this.DesignWeD()}
        {this.nursing()} */}
        {this.howDoWeWor()}
        {this.DesignWe()}
        {this.Design()}
        {this.DesignW()}
      </HomePageConatiner>
    );
  }
}

export default Services;