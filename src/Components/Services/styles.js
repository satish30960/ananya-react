import styled from 'styled-components';
import {Font} from '../../helpers/constants';
import TextField from '@material-ui/core/TextField';
const HomePageConatiner = styled.div`
  width: 100%;
  float: left;
  background: #f0f0f0;
`;
const FAQConatiner = styled.div`
  width: 100%;
  float: left;
  background: #ffffff;
  padding: 0px 12px;
  margin: 12px;
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
  margin-bottom:20px;
  display:flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f0f0f0;
`;
  const WeDoList = styled.div`
  width: calc((100% / 3) - 80px);
  display: flex;
  align-items: left;
  padding: 20px;
  flex-direction: ${({column}) => column};
  @media(max-width: 900px){
    flex-direction: row;
    width: calc((100% / 2) - 80px);
  }
  @media(max-width: 700px){
    flex-direction: row;
    width: 95%;
  }
  .Software-text{
    width:100%;
    @media(max-width: 700px){
      width: 100%;
    }
    .det-text{
        width:100%;
        @media(max-width: 900px){
          width: 100%;
        }
        margin-bottom: 20px;
        >img{
          width: 100%;
          height: 300px;
          @media(max-width: 900px){
              width: 100%;
              height: 500px;
          }
          @media(max-width: 500px){
              width: 100%;
              height: 300px;
          }
        }
      }
    .header{
      width: 100%;
      font-family: ${Font};
      font-weight: 400;
      font-size: 24px;
      text-align: left;
      margin-bottom: 15px;
      padding-left: 10px;
      >svg{
        left: 28px;
        top: 35px;
        position: absolute;
      }
      }
    }
    .description{
      padding: 10px;
      width: 100%;
      font-family: ${Font};
      font-weight: 300;
      font-size: 16px;
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
  float: left;
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
      top: 42px;
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
    text-align: ${({left}) => left ? 'left' : 'center'};
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
    @media(max-width: 700px){
      padding: 10px;
    }
    >div:first-child{
      font-weight: 300;
      color: #fff;
      font-size: 2.1875rem;
      line-height: 2.8125rem;
      margin-bottom: 1.4375rem;
      font-family: ${Font};
      text-align: center;
      @media(max-width: 700px){
        font-size: 15px;
      }
    }      
    >div: last-child{
      width:100%;
      font-weight: 400;
      font-size: 24px;
      text-align: center;
      color: #fff;
      font-family: ${Font};
      text-align: center;
      h3{
        align-items: center;
        display: flex;
        justify-content: center;
        >svg{
          margin-right: 5px;
        }
      }
      @media(max-width: 700px){
        font-size: 16px;
      }
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
  float: left;
  `;
  const WeDoLists = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  cursor: pointer;
  flex-direction: ${({column}) => column};

  .Software-text{
    width:100%;
    @media(max-width: 700px){
      width: 100%;
    }
    .det-text{
        width:100%;
        @media(max-width: 700px){
          width: 100%;
        }
        margin-bottom: 10px;
        >img{
          width: 60%;
          margin: 0 auto;
          border-radius: 10px;
        }
      }
  `;

const NursingContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
  float: left;
  .combine{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .fullLine{
      float: left;
      width: 45%;
      @media(max-width: 500px){
        width: 100%;
      }
      .dheader{
        width: 100%;
        font-family: ${Font};
        font-weight: 600;
        font-size: 22px;
        text-align: left;
        margin-bottom: 10px;
        color: rgb(36,58,90);
      }
      .textDetails{
        width: 100%;
        font-family: ${Font};
        text-align: left;
        margin-bottom: 10px;
        color: rgb(37,58,91);
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        text-align: justify;
      }
    }  
  }
  .header{
    width: 100%;
    font-family: ${Font};
    font-weight: 400;
    font-size: 24px;
    text-align: left;
    margin-bottom: 15px;
    padding-left: 10px;
    >svg{
      left: 28px;
      top: 35px;
      position: absolute;
    }
    }
  }
  .container{
    width: 100%;
    float: left;
    display: flex;
    align-items: flex-start;
    margin-top: 15px;
    @media(max-width: 900px){
      flex-direction: column;
    }
    .image{
      width: 40%;
      float: left;
      >img{
        width: 85%;
        height: 100%;
      }
      @media(max-width: 900px){
        width: 90%;
        margin: 0 auto;
        >img{
          width: 90%;
          height: 100%;
        }
      }
    }
    .description{
      width: 50%;
      float: left;
      .dheader{
        width: 100%;
        font-family: ${Font};
        font-weight: 600;
        font-size: 22px;
        text-align: left;
        margin-bottom: 10px;
        color: rgb(36,58,90);
      }
      .data{
        width: 100%;
        font-family: ${Font};
        text-align: left;
        margin-bottom: 10px;
        color: rgb(37,58,91);
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        ul{
          li{
            font-family: ${Font};
            text-align: left;
            margin-bottom: 10px;
            color: rgb(37,58,91);
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
      @media(max-width: 900px){
        width: 100%;
      }
    }
  }
  .fullLines{
    float: left;
    width: 100%;
    .dheader{
      width: 100%;
      font-family: ${Font};
      font-weight: 600;
      font-size: 22px;
      text-align: left;
      margin-bottom: 10px;
      color: rgb(36,58,90);
    }
    .textDetails{
      width: 100%;
      font-family: ${Font};
      text-align: left;
      margin-bottom: 10px;
      color: rgb(37,58,91);
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
    }
  }
`;
const CustomInputField = styled(TextField)`
.MuiInputLabel-outlined {
  z-index: 1;
  transform: translate(14px, 15px) scale(1);
  pointer-events: none;
}
.MuiOutlinedInput-root{
  width: 428px;
  @media(max-width: 450px){
    width: 85%;
  }
}
.MuiOutlinedInput-input{
  padding: 12px;
}
`;
const SelectField = styled.select`
  width: 428px;
  height: 43px;
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.00938em;
  padding: 0 12px;
  border-color: #c4c4c4;
  border-radius: 4px;
  margin: 8px;
  @media(max-width: 450px){
    width: 85%;
  }
`;

const FaqList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 20px;
  .fullLine{
    float: left;
    width: calc(95% / 3);
    padding-bottom: 20px;
    @media(max-width: 500px){
      width: 100%;
    }
    .dheader{
      width: 100%;
      font-family: ${Font};
      font-weight: bold;
      font-size: 14px;
      text-align: left;
      margin-bottom: 10px;
      color: rgb(36,58,90);
    }
    .textDetails{
      width: 85%;
      font-family: ${Font};
      text-align: left;
      margin-bottom: 10px;
      color: rgb(37,58,91);
      font-weight: 500;
      font-size: 12px;
      line-height: 30px;
      text-align: justify;
    }
  } 
`;
export {FaqList, FAQConatiner, HomePageConatiner,HowDoWeWor,Hero,WeDoList,DesignWeD,DesignWe,DesignW,WeDoLists,Design, NursingContainer, SelectField, CustomInputField};