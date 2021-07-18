import styled from 'styled-components';
import {Font, FooterBackground} from '../../helpers/constants';

const FooterPanelContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  background-color: ${FooterBackground};
  padding-top: 20px;
  margin-top: 20px;
  color: #ffffff;
  @media(max-width: 900px){
    margin-top: 20px;
  }
  .MuiGrid-spacing-xs-3{
    margin: 0px;
    width: calc(100% - 3px);
    .MuiGrid-item{
      @media(max-width: 700px){
        padding: 0;
      }
    }
  }
`;
const LogoStyles = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  >img{
    width: 150px;
  }
  >div{
    font-family: ${Font};
    font-size: 18px;
    text-align: left;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding: 20px 44px 0px 0px;
    @media(max-width: 1366px){
      font-size: 14px;
    }
    @media(max-width: 700px){
      padding: 0;
    }
  }
`;
const HelpContainer = styled.div`
  width: 100%;
  text-align: left;
> ul {
  list-style-type: none;
  color: #FFFFFF;
  margin: 0px;
  padding-left: 20px;
    li:first-child {
       font-size: 20px;
       font-family: ${Font};
       font-weight: 600;
       cursor: default;
    }
  li {
    color: #FFFFFF;
    font-size: 15px;
    font-family: ${Font};
    padding: 7px 0px;
    span {
      cursor: pointer;
    }
    img {
        width: 25px;
        margin-right: 8px;
      }
    i {
      font-size: 20px;
      color: #FFFFFF;
      margin: 0px 5px;
      padding: 0px 3px;
      cursor: pointer;
      font-weight: 900;
    }
    a, a:hover {
      text-decoration: none;
      color: #ffffff;
      margin-right: 10px;
      word-break: break-all;
    }
  }
  @media(max-width: 1366px){
    li:first-child {
      font-size: 16px;
    }
    li{
      font-size: 14px;
    }
  }
  .support li:first-child {
    color: #000;
    font-family: ${Font}; 
    max-width: 270px;
    font-size: 15px;
  }
  
  .support li:nth-child(3) {
    > span {
      color: #337ab7
      font-family: ${Font}
    }
  } 
  .support li:last-child{
    > span {
      color: #337ab7
      font-family: ${Font}
    }
  }
}
`;
const CopyRight =styled.div`
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  padding: 20px 0;
  @media (max-width: 1500px){
    padding: 15px 0;
  }
  @media (max-width: 700px){
    padding: 10px 0;
  }
`;
export {FooterPanelContainer, LogoStyles, HelpContainer, CopyRight};