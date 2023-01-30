import styled from "styled-components";

export const CyclePage = styled.div `
    display: grid;
    overflow: hidden;
    grid-template-columns: .8fr 4fr;
    grid-template-rows: .5fr 5fr;
    width: 100vw;
    height: 100vh;
`
export const PageContent = styled.div `
    display: grid;
    grid-template-rows: 1fr 5fr;
    width: 100%;
    grid-column-start: 2;
    grid-column-end: 3;
    overflow-y: hidden;
`
export const Cycles = styled.div `
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: fit-content;
    overflow: auto;
    box-sizing: border-box;
    padding-bottom: 20px;

`

export const SideMenu = styled.div `
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    background-color: #F6F6F6;
    width: 100%;
    height: 100%;
    box-shadow: 2px 5px 10px #00000021;
`

export const Header = styled.header `
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: #000; 
    border-bottom: 2px #CECEEA solid;
    height: 100%;
    
`

export const Content = styled.div `
    background-color: #E1E5F4;
    width: 100%;
    display: table;
    height: 15vh;
`

export const Title = styled.h1 `
    max-width: 593px;
    font-size: 2.4rem;
    color: #171D51;
    padding-left: 40px;
    display: table-cell; 
    vertical-align: middle;
    font-family: 'inter-semibold';
`

export const Img = styled.img `
    margin: 10px;
    margin-right: 5px
`

export const MenuTitle = styled.h2 `
    font-family: 'inter-bold';
    font-size: 1.8rem;   
    margin: 20px;
    margin-left: 5px;
`