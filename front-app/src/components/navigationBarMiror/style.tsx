import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const StyledNavBarMobile = styled.nav`
    display: flex;
    height: 150px;
`

export const StyledText = styled.text`
    @font-face{
        font-family: 'Montserrat-Regular';
        src: url('./fonts/Montserrat/Montserrat-Regular.ttf') format('truetype'), 
    }
    font-style: normal;
    font-weight: 40;
    font-size: 15px;
    line-height: 30px;
    font-variant: small-caps;
    color: #2C2C2C;
    
`
export const ButtonMenu = styled.button`
    display: block;
    width: 100%;
    border: none;
    align-items: center;
    background-color: white;
`

export const Wrap = styled.nav`
    width: 30%;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
`

