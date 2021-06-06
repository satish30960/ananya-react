import styled from "styled-components"
import {Font} from '../../helpers/constants';
 
const CareersContainer = styled.div`
    width: "100%";
    float: "left";
`;

const Filters = styled.div`
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

const CareerListContainer = styled.div`
    width: 100%;
    float: left;
    padding: 10px;
    margin: ${({margin}) => margin && "40px 0 0"};
    >div{
        width: 100%;
        float: left;
        padding-left: 40px;
        @media(max-width: 700px){
            padding-left: 10px;
        }
        .roleName{
            width: 100%;
            font-family: ${Font};
            font-weight: 500;
            font-size: 26px;
            color: #000;
        }
        .jobDetails{
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 20px;
            float: left;
            .dateinfo{
                width: auto;
                display: flex;
                align-items: center;
                margin-right: 10px;
                >svg{
                    width: 24px;
                    height: 24px;
                    margin-right: 5px;
                }
                >span{
                    font-family: ${Font};
                    font-weight: 300;
                    font-size: 16px;
                    color: #000;
                    margin-right: 5px;
                }
                font-family: ${Font};
                font-weight: 300;
                font-size: 16px;
                color: #000;
            }
        }
        .jobDescription{
            width: 85%;
            text-align: justify;
            display: flex;
            align-items: center;
            padding-top: 20px;
            font-family: ${Font};
            font-weight: 300;
            font-size: 16px;
            color: #000;
            line-height: 26px;
            >ul{
                li{
                    font-family: ${Font};
                    font-weight: 300;
                    font-size: 16px;
                    color: #000;
                    line-height: 26px;
                    padding-bottom: 10px;
                    list-style-type: circle;
                }
            }
        }
        .header{
            padding-top: 20px;
            font-family: ${Font};
            font-weight: 500;
            font-size: 18px;
            color: #000;
            line-height: 26px;
        }
        .expired{
            padding-top: 20px;
            font-family: ${Font};
            font-weight: 400;
            font-size: 18px;
            color: red;
            line-height: 26px;
        }
        .loadMore{
            border: 1px solid #001689;
            border-radius: 25px;
            width: 130px;
            height: 40px;
            font-family: ${Font};
            font-weight: 400;
            font-size: 16px;
            color: #001689;
            line-height: 26px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover{
                background: #001689;
                color: #ffffff;
            }
        }
    }
`;
export {CareersContainer, Filters, CareerListContainer};