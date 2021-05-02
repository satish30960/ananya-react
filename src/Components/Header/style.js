import styled from 'styled-components';
import {Font} from '../../helpers/constants';

const HeaderContainer = styled.div`
  width: 100%
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${Font};
  height: 68px;
  .logo{
    width: 20%;
    >img{
      width: 235px;
      height: 65px;
    }
  }
  .menu-List{
    width: 60%;
    display: flex;
    justify-content: center;
    @media(max-width: 835px){
      display: none;
    }
  }
  .icon{
    width: 28px;
    height: 28px;
    display: none;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 4px;
    margin-right: 20px;
    >svg{
      width: 20px;
      height: 20px;
    }
    @media(max-width: 835px){
      display: flex;
    }
  }
`;
const MenuLinks = styled.a`
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  color: #979ba0;
  font-family: ${Font};
`;

const MenuList = styled.ul`
  display: flex;
  margin-bottom: 0 !important;
  height: 50px;
  ${'' /* @media (max-width: 1200px) { */}
    ${'' /* position: absolute;
    top: 50px;
    right: 20px;
    padding: 10px 0;
    margin: 0;
    background-color: white;
    border-radius: 4px;
    box-shadow: 1px 1.732px 46px rgba(0,0,0,0.18);
    z-index: 1;
    width: 155px;
  }
  
  @media (max-width: 1200px) {
    right: 0;
  }
  margin: 3px 0 -15px; */}
  @media(max-width: 1200px){
    ul > li:hover {
    color: #F6797D;
    }
  
    .platform-div{
      >div:last-child{
        cursor: default;
      }
      >div{
        cursor: pointer;
        padding: 10px 10px;
        >div{
          display: flex;
          >h1{
            margin: 0 15px;
          }
        }
        &:hover{
          >div{
            >h1{
            color: #F6797D;
            }
            >div{
              >svg {
                fill : #F6797D;
                >path{
                  fill : #F6797D;
                }
              }
            }
          }
        }
      }
      >div:last-child{
        background: rgba(246, 121, 125, 0.14);
        padding: 16px 0 5px 30px;
        >h1{
          font-family: Rubik;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          padding-bottom: 7px;
          color: #243A5A;
        }
        >ul{
          padding-left: 20px;
          li{
            font-family: Rubik;
            padding: 5px 0;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #979797;
          }
        }
      }
    }
  }
`;
const CustomListItem = styled.li`
  margin: 10px 14px 0px 14px;
  padding-bottom: 15px;
  border-bottom: ${({ active }) => active ? '3px solid #F6797D' : '3px solid transparent'};
  border-radius: unset;
  text-align: center;
  cursor: pointer;
  list-style-type: none;
  position: relative;
  display: ${({ showTab }) => showTab ? 'inline-block' : 'none'};
  color: #49b5d6;
  > a {
    float: left;
    text-transform: capitalize;
    font-size: 16px;
    color: ${({ active }) => active ? '#F6797D' : '#C4C4C4'};
    font-family: ${Font};
    > svg {
      fill: ${({ active }) => active ? '#F6797D' : '#C4C4C4'};
      width: 10px;
      margin-left: 3px;
    }
    &:hover, &:focus, &:active {
      text-decoration: none;
      color: ${({ active }) => active ? '#F6797D' : '#C4C4C4'};
      > svg {
        fill: #F6797D;
        width: 10px;
        margin-left: 3px;
      }
    }
  }
  &:hover, &:focus, &:active {
    border-bottom: 3px solid #F6797D;
    
    > a {
      text-decoration: none;
      color: #F6797D;
    }
  }
  
  @media (max-width: 1200px) {
    // min-width: 120px;
    // border-left: ${({ active }) => active ? '5px solid #F6797D' : '5px solid transparent'};
    // border-bottom: none;
    // text-align: left;
    ${'' /* color: ${({ active }) => active ? '#F6797D' : '#C4C4C4'}; */}
    > a {
      color: ${({ active }) => active ? '#F6797D' : '#C4C4C4'};
      > svg {
        fill: ${({ active }) => active ? '#F6797D' : '#C4C4C4'};
      }
    }
    &:hover, &:focus, &:active {
      border-left: 5px solid #F6797D;
      border-bottom:none;
        >a {
          text-decoration: none;
          color: #F6797D;
        }
    }
  }
  &:hover ul {
    display: block;
  }   
  
  .platform-div {
    list-style: none;
    display: none;
    position: absolute;
    padding-left: 118px;
    height: 200px;
    flex-direction: row;
    width: 100vw;
    top: 42px;
    left: -266px;
    background-color: white;
    font-family: ${Font};
    z-index: 1;
    >div:last-child{
      cursor: default;
    }
    >div{
      width:17%;
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: left;
      >h1{
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin: 5px 0;
        color: #252530;
      }
      >p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #252530;
      }
      &:hover{
        >h1{
        color: #F6797D;
        }
        >div{
          >svg {
            fill : #F6797D;
            >path{
              fill : #F6797D;
            }
          }
        }
      }
    }
    >div:last-child{
      width:32%;
      background: rgba(246, 121, 125, 0.14);
      padding: 16px 0 5px 30px;
      >h1{
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        padding-bottom: 7px;
        color: #243A5A;
      }
      >ul{
        padding-left: 20px;
        li{
          font-family: Rubik;
          padding: 5px 0;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
          color: #979797;
        }
      }
    }
  } 

  &:hover .platform-div{
    display: flex;
  }
  ul > li:hover {
    color: #F6797D;
  }
  
`;
const MobileView = styled.div`
width: 100%;
display: none;
@media(max-width: 835px){
  display: flex;
  position: absolute;
}
.mobileMenu{
  margin-top: 10px;
  transition: max-height .3s,transform .3s;
  transform-origin: top;
  overflow: auto;
  display: block;
  top: 25px;
  left: 0;
  position: absolute;
  z-index: 99;
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  ul{
    list-style-type: none;
    padding: 10px 0;
    margin: 0;
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(245,245,245, 0.5);
      padding: 10px 35px;
      cursor: pointer;
      &:last-child{
        border-bottom: none;
      }
      // width: 100%;
      // .svgContainer{
      //   width: 50%;
      //   width: 50%;
      //   display: flex;
      //   align-items: center;
      //   justify-content: flex-end;
      //   >svg{
      //     width: 24px;
      //     height: 24px;
      //     fill: #444444;
      //     margin-right: 13px;
      //     @media (min-width: 1500px){
      //       width: 32px;
      //       height: 32px;
      //       margin-right: 20px;
      //     }
      //   }
      // }
      .text{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        color: #9155a8;
        text-align: left;
        font-family: ${Font};
        font-size: 20px;
        letter-spacing: 0px;
        opacity: 1;
        >svg{
          width: 20px;
        }
        @media(max-width: 1500px){
          font-size: 14px;
        }
      }
    }
  }
}
`;
export {HeaderContainer, MenuLinks, MenuList, CustomListItem, MobileView};