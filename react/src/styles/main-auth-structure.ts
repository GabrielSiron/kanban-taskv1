import styled from "styled-components";

export const AuthPage = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
`;

export const CallToActionSide = styled.section`
    position: relative;
`;

export const MainView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 10;
    backdrop-filter: blur(10px);
    background-color: rgba(27, 31, 69, .56);
    box-sizing: border-box;
    padding: 85px 20px 20px 20px;
`;

export const MainTitle = styled.h1`
    max-width: 593px;
    font-size: 3.5rem;
    text-align: center;
    color: #fff;
    font-family: 'inter-bold';
`;

export const SubTitle = styled.h2`
    font-size: 1.3rem;
    color: #fff;
    font-family: 'inter-regular';
    margin-top: 20px;
`
export const AuthSide = styled.section`
    
`;

export const ImageContainer = styled.div`
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export const PoweredContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
`;

export const PoweredTxt = styled.div`
    color: #fff;
    font-size: 1.3rem;
    margin-right: 10px;
    font-family: 'inter-semibold';
`;