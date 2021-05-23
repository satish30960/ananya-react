import styled from "styled-components"
import {Font} from '../../helpers/constants';
const HomePageConatiner = styled.div`
  width: 100%;
  float: left;
`;
const HeroSection1 = styled.div`
  width: 100%;
  .aboutus{
    width:100%;
    height:100%;
    }
    img{
        width:100%;
        height:100%;
    }
    margin-bottom: 20px;
}
`;
const DesignWeDo1 =styled.div`
    width: 100%;
    margin: 40px 50px;
    display: flex;
    align-items: flex-start;
    @media(max-width: 800px){
      flex-direction: column;
      margin: 40px 0px;
      width: 100%;
    }
    .blue-containter{
      width: 30%;
      background: #001689;
      padding: 60px 40px;
      @media(max-width: 800px){
        width: 90%;
        padding: 40px 20px;
        margin-bottom: 20px;
      }
      >div:first-child{
        font-weight: 300;
        color: #fff;
        font-size: 2.1875rem;
        line-height: 2.8125rem;
        margin-bottom: 1.4375rem;
        font-family: ${Font};
        text-align: left;
      }      
      >div: last-child{
        width:100%;
        font-weight: 300;
        font-size: 18px;
        text-align: center;
        color: #fff;
        font-family: ${Font};
        text-align: left;
        h2{
          font-weight: 300;
          text-align: left;
          font-size: 18px;
          margin-bottom: 1.4375rem;
          font-family: ${Font};
          color: #fff;
        }
      }
    }
    .mission{
      width:50%;
      font-weight: 500;
      font-size: 30px;
      text-align: left;
      margin-left: 30px;
      margin-bottom:70px;
      font-family: ${Font};
      color: #0099a8;
      @media(max-width: 800px){
        width: 90%;
      }
    }
    .missions{
      margin-top: 1.4375rem;
      width:100%;
      font-weight: 300;
      font-size: 20px;
      margin-bottom:70px;
      text-align: left;
    }
    .what{
      width:100%;
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 50px;
      text-align: left;
  }
  .whatwe{
    margin-top: 1.4375rem;
    width:100%;
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: left;
  }
  `;
  const HeroSection2 = styled.div`
  width: 100%;
  .fourds{
    width:100%;
    height:100%;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
`;
const HeroSection3 = styled.div`
    width: 100%;
    display:flex:
    align-items: center;
    flex-wrap: wrap;
  `;
const WeDoListd = styled.div`
  width: calc((100% / 2) - 40px);
  float: left;
  padding: 20px;
  @media(max-width: 800px){
    width: 100%;
    padding: 10px;
  }
  .Software-text{
    width: 100%;
    @media(max-width: 700px){
      width: 100%;
    }
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
      @media(max-width: 700px){
        width: 100%;
        padding-left: 0px;
        >svg{
          left: 0px;
        }
      }
    }
    .det-text{
    width:70%;
    @media(max-width: 700px){
      width: 100%;
    }
    margin: 0 auto;
    margin-bottom: 20px;
    >img{
      width: ${({width}) => width ? '100%' : '100%'};
      height: 200px;
      border-radius: 15px;
      @media(max-width: 700px){
        width: ${({width}) => width ? '80%' : '80%'};
        height: auto;
      }
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
      min-height: 150px;
      background: ${({bgColor}) => bgColor};
      @media(max-width: 700px){
        width: 80%;
        margin-left: 0px;
      }
    }
  }
`;
const DoWeWorks =styled.div`
  width: 100%;
  float: left;
  .he-text{
    width: 95%;
    margin: 0 auto;
    position: relative;
    @media(max-width: 700px){
      width: 95%;
      height: 450px;
    }
    @media(max-width: 700px){
      width: 95%;
      height: 350px;
    }
    .image{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    >div: last-child{
      width: 90%;
      display: flex;
      align-items: left;
      position: absolute;
      flex-direction: column;
      left: 10%;
      top:10%;
      @media(max-width: 700px){
        width: 90%;
        flex-direction: column;
        left: 15px;
        justify-content: center;
        bottom: 30%;
      }
      h2{
        font-weight: 500;
        text-align: left;
        font-size: 30px;
        margin-bottom: 1.4375rem;
        font-family: ${Font};
        color: #001689;
        @media(max-width: 700px){
          font-size: 22px;
        }
      }
      h3{
        font-weight: 400;
        text-align: left;
        font-size: 24px;
        margin-bottom: 1.4375rem;
        font-family: ${Font};
        color: #333;
        @media(max-width: 700px){
          font-size: 16px;
        }
      }
    }
  }
 `;

export {HomePageConatiner,HeroSection1,DesignWeDo1,HeroSection2,HeroSection3,WeDoListd,DoWeWorks};