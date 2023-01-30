import styled from "styled-components";

export const CyclePage = styled.div `
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr;
    width: 100vw;
    height: 100vh;
`

export const SideMenu = styled.div `
    background-color: #000;
    width: 100%;
    height: 100%;
`

export const Header = styled.header `
    background-color: #E1E5F4; 
    height: 10%;
`

export const Content = styled.div `
    background-color: #E1E5F4;
    width: 100%;
    height: 30%;
`

export const Title = styled.h1 `
    max-width: 593px;
    font-size: 3.2rem;
    color: #171D51;
    margin-left: 60px;
    
    font-family: 'inter-bold';
`