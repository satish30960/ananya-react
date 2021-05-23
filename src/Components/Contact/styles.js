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
     margin-bottom: 60px;;
     @media(max-width: 1000px){
       margin-bottom: 40px;
     }
    }
    img{
        width:100%;
        height:100%;
    }
}
`;
const DoWeWorkc =styled.div`
  width: 100%;
  float: left;
  .he-text{
    width: 100%;
    margin: 0 auto;
    @media(max-width: 700px){
      width: 100%;
      height: 200px;
    }
    img{
      width: 100%;
      height: 100%;
    }
    >div{
      width: 100%;
      display: flex;
      align-items: center;
      margin: 10px;
      float: left;
      @media(max-width: 1000px){
        flex-direction: column-reverse;
        margin: 0px;
      }
    .hel-text{
      width:50%;
      background: #0099a8;
      padding:10px 20px;
      margin: 10px 10px;
      font-family: ${Font};
      text-align: left;
      font-weight: bold;
      font-size: 30px;
      line-height: 10px;
      border-radius: 6px;
      color: #FFFFFF;
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
        color: #FFFFFF;
        line-height: 20px;
      }
    h2{
        font-weight: 500;
        text-align: left;
        font-size: 20px;
        font-family: ${Font};
        color: #FFFFFF;
        line-height: 10px;
      }
      h3{
        font-weight: 400;
        text-align: left;
        font-size: 20px;
        font-family: ${Font};
        color: #FFFFFF;
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
    @media(max-width: 1000px){
      width: 90%;
    }
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
    
    @media(max-width: 1000px){
      width: 100%;
      ont-size: 22px;
    }
  }
 `;
export {HomePageConatiner,HeroSec,DoWeWorkc,Form};