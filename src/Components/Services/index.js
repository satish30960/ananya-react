import React, {Component} from 'react';
import {HomePageConatiner,HowDoWeWor,Hero,DesignWeD,WeDoList, DesignWe,DesignW,WeDoLists,Design} from './styles';
import MainImage from '../../images/our-services.jpg';
import DesignImage from '../../images/health.jpg';
import DesignerImage from '../../images/development.jpg';
import CoderImage from '../../images/financial.jpg'; 
import MaintainImage from '../../images/software.jpg'; 
import SoftImage from '../../images/mobile.jpg';
import HardImage from '../../images/cloud.jpg';
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

const servicesArray = [
  {
    name: "Healthcare",
    image: DesignImage,
    color: "#69c2ff",
    bgColor: "rgba(107, 193, 251, 0.12)",
    description: "Transformational healthcare technology and services give caregivers the tools they need to improve processes across the continuum of care."
  },
  {
    name: "Development & DevOps",
    image: DesignerImage,
    color: "#93a987",
    bgColor: "rgba(147, 169, 135, 0.12)",
    description: "We help our clients by developing the product by Develop iteratively, Manage requirements, Use component architecture, Model software visually, Verify quality Control change with integration of DevOps which helps improve deployment frequency, leading to faster time to market, lower failure rate of new releases, shortened lead time between ﬁxes and faster time to recovery.",
  },
  {
    name: "Financial Solutions",
    image: CoderImage,
    color: "#f8a887",
    bgColor: "rgba(230, 167, 112, 0.12)",
    description: "We help customers in procure-to-pay (P2P), and record-to-analyze (R2A), business to business(B2B), Business to Consumer (B2C) and Front Office – promising the very best-in-class finance operations for your business by bench-marking your operations to ensure top performance, reducing your total cost of service",
  },
  {
    name: "Software QA",
    image: MaintainImage,
    color: "rgb(157,135,169)",
    bgColor: "rgb(157,135,169,0.12)",
    description:"We follow and adept years of matured testing advancements, continually enhance conventional testing capabilities through flexible, reliable and robust functional, automation & non-functional testing solutions.",
  },
  {
    name: "Mobile Solutions",
    image: SoftImage,
    color: "rgb(157,135,169)",
    bgColor: "rgb(157,135,169,0.12)",
    description:"Mobility drives agile enterprises that can pivot as quickly as technology demands in this era of electrifying change. We offers a portfolio of tools and services for the mobile enterprise that moves with the speed of its customers.",
  },
  {
    name: "Cloud Computing",
    image: HardImage,
    color: "rgb(157,135,169)",
    bgColor: "rgb(157,135,169,0.12)",
    description:"We help our customers establishing a robust private cloud solution which is not only highly available, but also highly flexible and elastic to cater to unpredictable demands and inorganic growth.",
  },
  ];
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
        <Hero>
        <div className="aboutus">
        <img src={MainImage} alt={"some"}/>
        </div>
      </Hero>
      );
      DesignWeD = () => (
        <DesignWeD>
          {
            servicesArray.map((data, index) => (
              <WeDoList row={data.rotate ? "row-reverse" : "row"} bgColor={data.bgColor} width={index === 3 ? 1 : 0} key={index}>
                <div className="Software-text">
                <div className="det-text">
                  <img src={data.image} alt={"some"}/>
                </div>
                  <div className="header">
                    {data.name}
                  </div>
                  <div className="description">
                    {data.description}
                  </div>
                </div>
              </WeDoList>
            ))
          }
     </DesignWeD>
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
        {this.DesignWeD()}
        {this.howDoWeWor()}
        {this.DesignWe()}
        {this.Design()}
        {this.DesignW()}
      </HomePageConatiner>
    );
  }
}

export default Services;