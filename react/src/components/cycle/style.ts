import styled from 'styled-components'

export const Card = styled.div `
    margin-left: 40px;
    margin-top: 40px;
    background-color: #fff;
    box-shadow: 0px 8px 26px -6px rgba(0,0,0,0.2);
    width: 288px;
    height: 140px;
    border-radius: 13px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr;
`

export const CycleName = styled.h2 `
    font-family: 'inter-semibold';
    margin: 15px;
    font-size: 1.2rem;
    color: #171D51;
`

export const Span = styled.span `
    font-family: 'inter-medium';
    margin: 15px;
    font-size: 0.8rem;
    color: #B5BFE7;
`

export const DataContainer = styled.div `

`

export const ButtonContainer = styled.div `
    position: relative;
`

export const EditButton = styled.button `
    width: 20px;
    height: 20px;
    background: transparent;
    border: none;
    position: absolute;
    top: 14px;
    right: 25px;
`

export const DeleteButton = styled.button `
    width: 25px;
    height: 25px;
    background: transparent;
    border: none;
    margin: 10px auto;
    position: absolute;
    bottom: 6px;
    right: 25px;
    
`