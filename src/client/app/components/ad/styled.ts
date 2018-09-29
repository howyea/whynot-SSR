/*
 * @Author: Micheal.Ye 
 * @Date: 2018-09-06 10:56:08 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-09-06 11:11:44
 */
import styled from "styled-components";
export const AdStyled = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
    .skip {
        position: absolute;
        color: #ffffff;
        background-color: #9f9f9f;
        opacity: 0.6;
        right: 0.3rem;
        top: 0.3rem;
        width: 1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        border-radius: 0.3rem;
        span:first-child {
            margin-right: 0.06rem;
        }
    }
    .logo {
        position: absolute;
        bottom: 0;
        border-radius: 50%;
    }
    h5 {
        position: absolute;
        left: 25%;
        top: 40%;
        color: #1c388c;
        font-size: 0.4rem;
    }
    h3 {
        position: absolute;
        right: 1rem;
        bottom: 1.2rem;
        color: #1c388c;
        font-size: 0.8rem;
        transform: rotateZ(60deg)
    }
`;