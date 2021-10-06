import React, {Component} from 'react';
import {HomePageConatiner, HeroSection, HowDoWeWork, DesignWeDo, DoWeWork, WeDoList, FeedsCard, Feeds} from './styles';
import Line from '../../images/Rectangle-pink.svg';
import MainImage from '../../images/h2.jpg';
import DesignImage from '../../images/coode.jpg';
import DesignerImage from '../../images/designer.jpg';
import CoderImage from '../../images/cood.jpg'; 
import MaintainImage from '../../images/awareness.png'; 
import SoftImage from '../../images/soft.jpg';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import {FeedsContainer, Header} from '../Feeds/styles';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  constructor(props) {
    super(props);
    this.state = { feedsData: [] }
}
  componentDidMount(){ 
    axios.get(`https://my-json-server.typicode.com/satish30960/ananyaJson/feeds`).then((res) => {
      this.setState({feedsData: res.data})
    }).catch(() => {
      this.setState({feedsData: []})
    })
  }
getDiff = (stringDate) => {
    let currDate = new Date();
    let diffMs=currDate.getTime() - new Date(stringDate).getTime();
    let sec=(diffMs/1000);
    if(sec<60)
        return parseInt(sec)+' second'+(parseInt(sec)>1?'s':'')+' ago';
    let min=sec/60;
    if(min<60)
        return parseInt(min)+' minute'+(parseInt(min)>1?'s':'')+' ago';
    let h=min/60;
    if(h<24)
        return parseInt(h)+' hour'+(parseInt(h)>1?'s':'')+' ago';
    let d=h/24;
    if(d<30)
        return parseInt(d)+' day'+(parseInt(d)>1?'s':'')+' ago';
    let m=d/30;
    if(m<12)
        return parseInt(m)+' month'+(parseInt(m)>1?'s':'')+' ago';
    let y=m/12;
    return parseInt(y)+' year'+(parseInt(y)>1?'s':'')+' ago';
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
      <div className="des-text"/>
      <div className="buttonWrap">
       <button onClick={() => this.props.history.push('/contact')}>
         Contact US
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
DesignFeeds = (feedsData) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    return(
      <FeedsContainer margin={1} onClick={() => this.props.history.push('/feeds')}>
        {/* <Header>
            Latest Feeds
        </Header> */}
        <Feeds bgColor={1}>
          <Slider {...settings}>{
            feedsData && feedsData.length > 0 ? feedsData.map((data, index) => (<FeedsCard key={index} margin={1}>
              <div className={"title"}>
                  {data.feedName}
              </div>
            </FeedsCard>)) : null}
          </Slider>
        </Feeds>
      </FeedsContainer>
    )
 };
  render() {
    return (
       <HomePageConatiner>
         {this.heroSection()}
         {this.howDoWeWork()}
         {this.DesignWeDo()}
         {this.DoWeWork()}
         {this.DesignFeeds(this.state.feedsData)}
       </HomePageConatiner>
    );
  }
}

export default HomePage;