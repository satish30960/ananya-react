import React, {Component} from 'react';
import {HomePageConatiner, HeroSection} from './styles';
import Line from '../../images/Rectangle-pink.svg';
import MainImage from '../../images/h2.jpg';
class HomePage extends Component{
  render() {
    return (
       <HomePageConatiner>
         <HeroSection>
           <div>
             <div className="welcome-text">
               Welcome To
             </div>
             <div className="hero-text">
                Ananya IT Services
               <div className="line">
                 <img src={Line} alt={"line"}/>
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
            <img src={MainImage} alt={"imageMain"}/>
           </div>
         </HeroSection>
       </HomePageConatiner>
    );
  }
}

export default HomePage;