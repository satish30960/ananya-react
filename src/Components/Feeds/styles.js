import styled from 'styled-components';
import {Font} from '../../helpers/constants';

const FeedsContainer = styled.div`
    width: 100%;
    padding: 20px;
    float: left;
`;
const Header = styled.div`
    width: 100%;
    float: left;
    font-size: 30px;
    margin: 0px;
    color: #000;
    font-family: ${Font};
    letter-spacing: 0px;
    font-weight: 600;
    @media(max-width: 1400px){
        font-size: 22px;
    }
    @media(max-width: 1000px){
        font-size: 26px;
    }
`;
const FeedsGridContainer = styled.div`
    width: 100%;
    float: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start,
    align-items: center;
    margin: 20px 0;
`;
const FeedsCard = styled.div`
    width: calc((90% / 4) - 40px);
    float: left;
    margin-right: 15px;
    background: rgba(134, 193, 170, 0.5);
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    @media(max-width: 1200px){
        width: calc((90% / 3) - 40px);
    }
    @media(max-width: 1000px){
        width: calc((90% / 2) - 40px);
    }
    @media(max-width: 550px){
        width: 78%;
    }
    &:nth-child(odd){
        background: rgba(137,149,138, 0.5);
    }
    .title{
        width: 100%;
        font-size: 18px;
        margin: 0px;
        color: #000;
        font-family: ${Font};
        line-height: 26px;
        letter-spacing: 0px;
        font-weight: 500;
    }
    .date{
        width: 100%;
        font-size: 14px;
        margin: 10px 0 0;
        color: #000;
        font-family: ${Font};
        letter-spacing: 0px;
        font-weight: 300;
    }
    .description{
        width: 100%;
        font-size: 16px;
        margin: 0px;
        color: #000;
        font-family: ${Font};
        letter-spacing: 0px;
        font-weight: 300;
        margin: 10px 0 0;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(134, 193, 170, 0.2);
        &:nth-child(odd){
            border-bottom: 1px solid rgba(137,149,138, 0.2); 
        }
    }
    .readMore {
        display: flex;
        padding-top: 20px;
        align-items: center;
        justify-content: flex-end;
        >button{
            font-size: 18px;
            margin: 0px;
            color: rgba(134, 193, 170, 0.7);
            font-family: ${Font};
            letter-spacing: 0px;
            font-weight: 300;
            background: transparent;
            cursor: pointer;
            border: 1px solid rgba(134, 193, 170, 0.7);
            &:nth-child(odd){
                border: 1px solid rgba(137,149,138, 0.7);
                color: rgba(137,149,138, 0.7);
                &:hover{
                    color: rgb(137,149,138);
                }
            }
            &:hover{
                color: rgb(134, 193, 170);
                &:nth-child(odd){
                    color: rgb(137,149,138);
                }
            }
        }
    }
`;
export {FeedsContainer, Header, FeedsGridContainer, FeedsCard};