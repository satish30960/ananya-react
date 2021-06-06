import React, {Component} from 'react';
import {HomePageConatiner, HeroSection1,DesignWeDo1,HeroSection2,DoWeWorks} from './styles';
import DefineImage from '../../images/DMA-8.jpg';
import DesignImage from '../../images/whatwedoDesign.jpg';
import DevelopImage from '../../images/DMA-12.jpg';
import DeliverImage from '../../images/deliver.jpg';
import BackImage from '../../images/DMA-11.png';
import {DoWeWork} from "../Homepage/styles";
import MaintainImage from '../../images/awareness.png';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import { DesignWeD, WeDoList } from '../Services/styles';

const servicesArray = [
  {
    name: "DEFINE",
    image: DefineImage,
    color: "#69c2ff",
    bgColor: "rgba(107, 193, 251, 0.12)",
    description: "we define the process by enhancing business outcomes by harnessing abundance and ecosystems with a modern data-centric approach."
  },
  {
    name: "DESIGN",
    image: DesignImage,
    color: "#93a987",
    bgColor: "rgba(147, 169, 135, 0.12)",
    description: "We follow Abstraction, Encapsulation, Modularisation, and Hierarchy for designing product",
  },
  {
    name: "DEVELOP",
    image: DevelopImage,
    color: "#f8a887",
    bgColor: "rgba(230, 167, 112, 0.12)",
    description: "Our proven approach is an end-to-end approach. We start by choosing the most appropriate solution by objectively assessing the needs in terms of integration, interfaces, data conversion, migration and production support after commissioning. We use the best accelerators and tools on the market for data conversion, testing and interface creation.",
  },
  {
    name: "DELIVER",
    image: DeliverImage,
    color: "rgb(157,135,169)",
    bgColor: "rgb(157,135,169,0.12)",
    description:"Modern software projects are exceedingly complex. Such pressurized and challenging environments we aim to deliver by streamlining delivery architecture, strengthening mutual relationships, developing flexibility and simplifying IT process."
  
  }
];

class WhatsWe extends Component{
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
    heroSection1 = () => (
      <HeroSection1>
      <div className="aboutus">
        WHAT WE DO
      </div>
    </HeroSection1>
    );
    DesignWeDo1 = () => (
      <DesignWeDo1>
        <div className="blue-containter">
          <div>
          WHO WE ARE
          </div>
          <div>
            We  ANANYA IT Services, work closely with clients and partners to take full advantage of the opportunities of technology. 
            <h2>We involve highly skilful teams that create custom solutions for existing and emerging technology to deliver viable outcomes at speed and Our company structure is domain led and empowered to help provide Customers a single window to industry specific solutions</h2>
          </div>
        </div>
        <div className="mission">
        OUR MISSION
        <div className="missions">
         Our mission is to help customers achieve their business objectives by providing innovative, best-in-class consulting, IT solutions and services and to make it a joy for all stakeholders to work with us
        </div>
        <div className="what">
        WHAT WE DO
        <div className="whatwe">
         New, innovative solutions conceived and delivered by a team with a wealth of unparalleled experience with cutting edge technologies
        </div>
        </div>
        </div>
      </DesignWeDo1>
   );
   heroSection2 = () => (
    <HeroSection2>
    <div className="fourds">
    OUR 4-D PROCESS
   </div>
  </HeroSection2>
  );
  heroSection3 = () => (
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
  DoWeWorks = () => (
    <DoWeWorks>
      <div className="he-text">
        <div className="image"><img src={BackImage} alt={"main"}/></div>
        <div>
          <h2>Why Choose Us?</h2>
          <h3>{`> Best Quality Designs`}</h3>
          <h3>{`>Result Oriented Projects`}</h3>
          <h3>{`>Best ROI Techniques`}</h3>
          <h3>{`>Experienced Professionals`}</h3>
        </div>
      </div>
    </DoWeWorks>
  );
  DoWeWork = () => (
    <DoWeWork>
    <div className="he-text">
      <img src={MaintainImage} alt={"main"}/>
      <div>
        <div className="hel-text">
      Would You Like To Start A Project With Us?
      </div>
      <div className="button-text">
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
      {this.heroSection1()}
      {this.DesignWeDo1()}
      {this.heroSection2()}
      {this.heroSection3()}
      {this.DoWeWorks()}
      {this.DoWeWork()}
    </HomePageConatiner>
    );
  }
}
export default WhatsWe;