import styled from 'styled-components';
import {Font} from '../../helpers/constants';
import Banner from '../../images/banner.png';

const HomePageConatiner = styled.div`
  width: 100%;
  float: left;
`;
const HeroSection = styled.div`
  font-family: ${Font};
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >div: first-child{
    margin-left: 20px;
    .welcome-text{
      font-family: ${Font};
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      letter-spacing: 2px;
      font-weight: 600;
      margin-top: 20px;
      margin-bottom: 11px;
      @media(max-width: 500px){
        font-size: 15px;
      }
    }.des-text{
      font-family: ${Font};
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      letter-spacing: 2px;
      font-weight: 400;
      margin-top: 20px;
      margin-bottom: 11px;
      @media(max-width: 500px){
        font-size: 15px;
      }
    }
    .hero-text{
      font-size: 48px;
      margin: 0px;
      color: #FFFFFF;
      font-family: ${Font};
      letter-spacing: 0px;
      font-weight: 800;
      line-height: 57px;
      word-break: break-word;
      width: 100%;
      text-transform: uppercase;
      @media(max-width: 500px){
        font-size: 25px;
      }
      position: relative;
      .line{
        position: absolute;
        top: 30px;
        left: 0;
      }
    }
    .buttonWrap{
      width: 100%;
      button{
        margin-top: 0px;
        width: 37%;
        background-color: rgb(246, 121, 125);
        color: rgb(255, 255, 255);
        padding: 13px 10px;
        border-radius: 3px;
        border: none;
        font-size: 18px;
        box-shadow: rgb(0 0 0 / 11%) 4px 6px 5px -1px;
        font-family: ${Font};
        font-weight: 500;
        line-height: 21px;
        text-align: center;
        text-transform: uppercase;
        font-style: normal;
        cursor: pointer;
      }
    }
  }
  >div: last-child{
    width: 50%;
    img{
      width: 80%;
      border-radius: 50%;
    }
  }
  margin-bottom: 100px;
`;
const HowDoWeWork = styled.div`
  width: 100%;
  .help-text{
    width: 100%;
    font-family: ${Font};
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    font-size: 30px;
    color: rgb(36, 58, 90);
    margin-bottom: 30px;
    position: relative;
    >svg{
      left: 46%;
      top: 37px;
      position: absolute;
    }
  }
  .desc-text{
    width: 80%;
    font-family: ${Font};
    font-weight: 400;
    text-align: center;
    font-size: 20px;
    margin: 0 auto;
    color: rgb(37, 58, 91);
    margin-bottom: 100px;
  }
  `;
  const DesignWeDo =styled.div`
    width: 100%; 
  `;
  const WeDoList = styled.div`
  width: 100%;
  display: flex;
  //align-items: center;
  padding: 20px;
  flex-direction: ${({row}) => row};
  .Software-text{
    width: 50%;
    .header{
      width: 100%;
      text-align: center;
      font-family: ${Font};
      font-weight: 600;
      font-size: 28px;
      text-align: left;
      padding-left: 30px;
      margin-bottom: 15px;
      position: relative;
      >svg{
        left: 28px;
        top: 35px;
        position: absolute;
      }
    }
    .description{
      width: 80%;
      font-family: ${Font};
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 15px;
      text-align: left;
      margin-left: 30px;
      padding: 20px;
      color: rgb(37, 58, 91);
      border-radius: 7px;
      background: ${({bgColor}) => bgColor};
    }
  }
  .det-text{
    width:50%;
    margin: 0 auto;
    margin-bottom: 20px;
    // animation-name: example;
    // animation-duration: 2s;
    // animation-direction: normal;
    // @keyframes example {
    //   0%   {display: block; transform: translateY(0)}
    //   10%  {display: block; transform: translateY(-100%);}
    // }
    >img{
      width: 85%;
      height: 85%;
      border-radius: 15px;
    }
  }
  `;
  const DoWeWork =styled.div`
  width: 100%;
  .he-text{
    width: 80%;
    height:80%;
    margin: 0 auto;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    >div{
      width: 90%;
      display: flex;
      align-items: center;
      position: absolute;
      left: 40px;
      bottom: 50%;
    .hel-text{
      width: 70%;
      font-family: ${Font};
      text-align: left;
      font-weight: bold;
      font-size: 30px;
      line-height: 47px;
      color: rgb(255, 255, 255);
    }
    .button-text{
      width: 30%;
      font-family: ${Font};
      font-size: 30px;
      line-height: 47px;
      color: rgb(255, 255, 255);
      >svg{
        with: 20px;
        height: 20px;
      }
    }
  }
  }
 `;
export {HomePageConatiner, HeroSection, HowDoWeWork,DesignWeDo,DoWeWork, WeDoList};