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
  constructor(){
    super();
    this.state={
      tabStatus: '',
      historyStatus: ''
    }
  }
  componentDidUpdate(){
    if(this.props.history.location.pathname !== this.state.historyStatus){
      console.log("this.props.history !== this.state.historyStatus", this.props.history.location.pathname !== this.state.historyStatus, this.props.history.location.pathname , this.state.historyStatus);
      this.setState({historyStatus: this.props.history.location.pathname, tabStatus: this.props.history.location.pathname==='/services/it'?'it':'nursing'})
    }
  }
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
          {this.state.tabStatus === 'it'? 'INFORMATION TECHNOLOGY': 'NURSING'}
        </div>
        {this.state.tabStatus === 'it'? null :<div className="float" onClick={() => this.props.history.push("/nursing-faq")}>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z"/><path d="M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M14.01,15 c-0.59,0-1.05-0.47-1.05-1.05c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04C15.04,14.53,14.6,15,14.01,15z M16.51,8.83 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52c0-0.41-0.06-1.08,0.26-1.65c0.41-0.73,1.18-1.16,1.63-1.8 c0.48-0.68,0.21-1.94-1.14-1.94c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26 C16.87,6.87,17.08,7.99,16.51,8.83z"/></g></g></svg>
        </div>}
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
        <TabUI tabStatus={this.state.tabStatus}/>
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