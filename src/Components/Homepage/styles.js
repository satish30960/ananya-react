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
`;
export {HomePageConatiner, HeroSection};