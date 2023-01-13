import styled from "styled-components";

const CommonInput = styled.input`
    padding: 10px;
    font-size: 1.2rem;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: 'inter-regular'; 
    outline: 0;
`;

export const Input = styled(CommonInput)`
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, .0);
    border: 2px solid #6A6A6A;
    margin-top: 30px;
`
export const InputPasswordContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, .0);
    border: 2px solid #6A6A6A;
    box-sizing: border-box;
    margin-top: 30px;
    padding-right: 10px;
`

export const InputPassword = styled(CommonInput)`
    width: 100%;
    height: 100%;
    border: none;
`;

export const PasswordPreview = styled.button`
    min-width: 25px;
    min-height: 20px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    cursor: pointer;
`