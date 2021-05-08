import React, {Component} from 'react';
import {HomePageConatiner, HeroSection, HowDoWeWork, DesignWeDo, DoWeWork, WeDoList} from './styles';
import Line from '../../images/Rectangle-pink.svg';
import MainImage from '../../images/h2.jpg';
import DesignImage from '../../images/coode.jpg';
import DesignerImage from '../../images/designer.jpg';
import CoderImage from '../../images/cood.jpg'; 
import MaintainImage from '../../images/awareness.png'; 
import SoftImage from '../../images/soft.jpg';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

const servicesArray = [
  {
    name: "Design",
    image: DesignImage,
    rotate: 0,
    color: "#69c2ff",
    bgColor: "rgba(107, 193, 251, 0.12)",
    description: "We follow Abstraction, Encapsulation, Modularisation, and Hierarchy for designing product, the process by which an agent creates a specification of a software artifact intended to accomplish goals, using a set of primitive components and subject to constraints."
  },
  {
    name: "Software QA",
    image: DesignerImage,
    rotate: 1,
    color: "#93a987",
    bgColor: "rgba(147, 169, 135, 0.12)",
    description: "we enable our customers using leading quality expertise provides a full spectrum of software quality validation and testing services and our process works with you to assure you meet your business outcomes",
  },
  {
    name: "Development",
    image: CoderImage,
    rotate: 0,
    color: "#f8a887",
    bgColor: "rgba(230, 167, 112, 0.12)",
    description: "We help our clients by developing the product by Develop iteratively, Manage requirements, Use component architecture, Model software visually, Verify quality Control change.",
  },
  {
    name: "Maintenance",
    image: SoftImage,
    color: "rgb(157,135,169)",
    rotate: 1,
    bgColor: "rgb(157,135,169,0.12)",
    description:"We believe, Unlike physical entities, the software has the potential to be immortal. This would only be possible with good maintenance which we provide to our clients.",
  }
  ];


class HomePage extends Component{
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
  heroSection = () => (
    <HeroSection>
    <div>
      <div className="welcome-text">
        Welcome To
      </div>
      <div className="hero-text">
         Ananya IT Services
        <div className="line">
          <img src={Line} alt={"lines"}/>
        </div>
      </div>
      <div className="des-text">
        Heralding a new era for onsite IT solutions
      </div>
      <div className="buttonWrap">
       <button>
         SEE MORE
       </button>
      </div>
    </div>
    <div>
     <img src={MainImage} alt={"imageMain--s"}/>
    </div>
  </HeroSection>
  );
  howDoWeWork = () => (
    <HowDoWeWork>
      <div className="help-text">
        How We Can Help You?
        {this.rect()}
      </div>
      <div className="desc-text">
        We ensure the highest levels of certainty and satisfaction through a deep-set commitment to our clients, comprehensive industry expertise and a global network of innovation and delivery centers.
        Our mission is to help customers achieve their business objectives by providing innovative, best-in-class consulting, IT solutions and services and to make it a joy for all stakeholders to work with us.
      </div>
    </HowDoWeWork>
  );
  DesignWeDo = () => (
    <DesignWeDo>
      {
        servicesArray.map((data, index) => (
          <WeDoList row={data.rotate ? "row-reverse" : "row"} bgColor={data.bgColor} width={index === 3 ? 1 : 0} key={index}>
            <div className="Software-text">
              <div className="header">
                {data.name}
                {this.rect(data.color)}
              </div>
              <div className="description">
                {data.description}
              </div>
            </div>
            <div className="det-text">
              <img src={data.image} alt={"some"}/>
            </div>
          </WeDoList>
        ))
      }
 </DesignWeDo>
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
         {this.heroSection()}
         {this.howDoWeWork()}
         {this.DesignWeDo()}
         {this.DoWeWork()}
       </HomePageConatiner>
    );
  }
}

export default HomePage;