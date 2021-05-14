import styled from 'styled-components';
import {Font} from '../../helpers/constants';
const HomePageConatiner = styled.div`
  width: 100%;
  float: left;
`;
const Hero = styled.div`
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
const DesignWeD =styled.div`
width: 100%;
margin-left:15%;
margin-right:15%;
margin-bottom:8%;
display:flex:
align-items:center;
flex-wrap: wrap;
  `;
  const WeDoList = styled.div`
  width: calc((100% / 3) - 80px);
  display: flex;
  align-items: left;
  padding: 20px;
  flex-direction: ${({column}) => column};
  @media(max-width: 900px){
    flex-direction: row;
  }
  .Software-text{
    width:100%;
    @media(max-width: 700px){
      width: 100%;
    }
    .det-text{
        width:50%;
        @media(max-width: 900px){
          width: 100%;
        }
        margin-bottom: 20px;
        >img{
          width: ${({width}) => width ? '90%' : '80%'};
          height: 200px;
          border-radius: 20px;
          @media(max-width: 900px){
            width: ${({width}) => width ? '90%' : '90%'};
            height: auto;
          }
        }
      }
    .header{
      width: 50%;
      font-family: ${Font};
      font-weight: 500;
      font-size: 24px;
      text-align: left;
      margin-bottom: 15px;
      
      >svg{
        left: 28px;
        top: 35px;
        position: absolute;
      }
      }
    }
    .description{
      width: 50%;
      font-family: ${Font};
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 15px;
      text-align: left;
      color: rgb(37, 58, 91);
      border-radius: 7px;
    }
  }
  `;
const HowDoWeWor = styled.div`
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
      @media(max-width: 700px){
        left: 40%;
      }
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
    @media(max-width: 700px){
      text-align: center;
    }
  }
  `;
  const DesignWe =styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  .blue-containter{
    width: 100%;
    background: #001689;
    padding: 40px 40px;
    >div:first-child{
      font-weight: 300;
      color: #fff;
      font-size: 2.1875rem;
      line-height: 2.8125rem;
      margin-bottom: 1.4375rem;
      font-family: ${Font};
      text-align: center;
    }      
    >div: last-child{
      width:100%;
      font-weight: 400;
      font-size: 24px;
      text-align: center;
      color: #fff;
      font-family: ${Font};
      text-align: center;
    }
  }
  margin-bottom:8%;
  `;
  const Design = styled.div`
  width: 100%;
  .work{
    font-weight: 500;
    text-align: center;
    font-size: 34px;
    margin-bottom:5%;
    font-family: ${Font};
  }
  `;
const DesignW = styled.div`
  width: 100%;
  margin-left:5%;
margin-right:5%;
display:flex:
align-items:center;
flex-wrap: wrap;
  `;
  const WeDoLists = styled.div`
  width: calc((100% / 6) - 40px);
  display: flex;
  align-items: left;
  flex-direction: ${({column}) => column};
  @media(max-width: 700px){
    flex-direction: row;
  }
  .Software-text{
    width:100%;
    @media(max-width: 700px){
      width: 100%;
    }
    .det-text{
        width:60%;
        @media(max-width: 700px){
          width: 100%;
        }
        margin-bottom: 10px;
        >img{
          width: ${({width}) => width ? '80%' : '70%'};
          height: 150px;
          border-radius: 10px;
          @media(max-width: 500px){
            width: ${({width}) => width ? '80%' : '80%'};
            height: auto;
          }
        }
      }
  `;



export {HomePageConatiner,HowDoWeWor,Hero,WeDoList,DesignWeD,DesignWe,DesignW,WeDoLists,Design};