/*
 * @Author: Micheal.Ye 
 * @Date: 2018-09-05 21:15:43 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-09-14 11:45:28
 */
import styled, { injectGlobal, css } from "styled-components";
const placeholderColor = css`
    color: #c8c8c8;
`;
injectGlobal`
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
    body { color:#555; font-size:14px; font-family: '微软雅黑', Arial, Helvetica, sans-serif; }
    td,th,caption { font-size:14px; }
    h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
    address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
    a { color:#555; text-decoration:none; }
    a:hover { text-decoration:underline; }
    img { border:none; }
    ol,ul,li { list-style:none; }
    input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
    table { border-collapse:collapse; }
    html {overflow-y: scroll;} 
    .clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
    .clearfix { *zoom:1; }
    input {
        border: 0;
        &::-webkit-input-placeholder {
            ${ placeholderColor }
        }
        &::-moz-placeholder {
            ${ placeholderColor }
        }
        &::-ms-input-placeholder {
            ${ placeholderColor }
        }
    }
    img{
        max-width: 100%;
    }
    pre {
        overflow-x: auto;
    }
`;
export const alignCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.9rem;
    z-index: 100;
    background: linear-gradient(#1c388c, #3c4f9b);
    overflow: hidden;
    .logo {
        margin-top: -0.2rem;
    }
    & + div {
        margin-top: 1.1rem;
    }
`;
export const Content = styled.div`
    
`;
/**
 * 可以用在所有需要icons的地方
 * */
interface MyIconsProps {
    width: string;
    height?: string;
    url: string;
    bgc?: string;
    color?: string;
    fsize?: string;
  }
export const MyIcons = styled.div<MyIconsProps>`
    ${ alignCenter }
    position: relative;
    width: ${props => props.width}rem;
    height: ${props => props.height ? props.height : props.width }rem;
    background: url(${props => props.url}) center no-repeat;
    background-size: 100%;
    background-color: ${ props => props.bgc ? props.bgc : 'none' };
    color: ${ props => props.color ? props.color : "#3c3c3c" };
    font-size: ${ props => props.fsize ? props.fsize : "0.22" }rem;
`;