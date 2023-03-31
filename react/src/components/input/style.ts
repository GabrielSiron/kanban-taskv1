import styled from "styled-components";
type ProtoType = {
    validation: any;
};
const CommonInput = styled.input`
    padding: 10px;
    font-size: 1.2rem;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: 'inter-regular'; 
    outline: 0;
`;


export const InputPasswordContainer = styled.div.attrs((props:ProtoType)=>({
    border: props.validation,
}))<ProtoType>`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, .0);
    border: 2px solid ${(props)=>props.validation.length == 0 ? '#6A6A6A' : props.validation.length < 6 ? '#eb4d4b' : props.validation.length >= 6 ? '#2ecc71' : ''};
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
export const IncorrectInputWarning = styled.p`
    align-self: flex-start;
    font-family:'inter-regular';
    color: #eb4d4b;
    margin-top: 10px;
`
export const Input = styled(CommonInput).attrs((props:ProtoType)=>({
    border: props.validation,
}))<ProtoType>`
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, .0);
    border: 2px solid ${(props)=>props.validation == null ? '#6A6A6A' : props.validation == false ? '#eb4d4b' : props.validation == true ? '#2ecc71' : ''};
    margin-top: 30px;
`;