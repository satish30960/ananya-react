import styled from "styled-components"
import {Font} from '../../helpers/constants';
const HomePageConatiner = styled.div`
  width: 100%;
  float: left;
`;
const HeroSec = styled.div`
  width: 100%;
  .aboutu{
    width:100%;
    height:100%;
     margin-bottom:30%;
    }
    img{
        width:100%;
        height:100%;
    }
}
`;
const DoWeWorkc =styled.div`
  width: 100%;
  .he-text{
    width: 90%;
    height:50%;
    margin: 0 auto;
    position: relative;
    @media(max-width: 700px){
      width: 90%;
      height: 200px;
    }
    img{
      width: 100%;
      height: 100%;
    }
    >div{
      width: 90%;
      display: flex;
      align-items: center;
      position: absolute;
      left: 30px;
      bottom: 20%;
      @media(max-width: 700px){
        width: 90%;
        flex-direction: column;
        left: 15px;
        justify-content: center;
        bottom: 10%;
      }
    .hel-text{
      width:50%;
      background: pink;
      padding:10px 20px;
      margin: 10px 10px;
      font-family: ${Font};
      text-align: left;
      font-weight: bold;
      font-size: 30px;
      line-height: 10px;
      color: rgb(255, 255, 255);
      @media(max-width: 700px){
        width: 100%;
        font-size: 14px;
      }
    }
    }
    h1{
        font-weight: 500;
        text-align: left;
        font-size: 32px;
        font-family: ${Font};
        color: #001689;
        line-height: 20px;
      }
    h2{
        font-weight: 500;
        text-align: left;
        font-size: 20px;
        font-family: ${Font};
        color: #001689;
        line-height: 10px;
      }
      h3{
        font-weight: 400;
        text-align: left;
        font-size: 20px;
        font-family: ${Font};
        color: #333;
      }
  }
  }
  .lets{
    width:50%;
    font-weight: 500;
    text-align: center;
    font-size: 30px;
    font-family: ${Font};
    color: #333;
  }
}
`;
const Form =styled.div`
  .component-simple{
    width:50%;
    font-weight: 500;
    text-align: center;
    font-size: 30px;
    font-family: ${Font};
    color: #333;
  }
 `;
export {HomePageConatiner,HeroSec,DoWeWorkc,Form};