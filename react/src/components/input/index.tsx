import React,{useEffect, useState} from 'react'
import {Input, InputPasswordContainer, InputPassword, PasswordPreview, IncorrectEmailWarning} from './style';
import Eye from '../../assets/icon/eye.svg';
import EyeSlash from '../../assets/icon/eye-slash.svg';
const InputComponent = (props:any) => {
    let inputType:string = props.inputType;
    
    const [passwordIsVisible, setPasswordIsVisible] = useState(true);
    const [passwordTypeView, setPasswordTypeView] = useState('password');
    const [emailContent, setEmailContent] = useState('');
    const [emailValidation, setEmailValidation] = useState(null);
    const [nameContent, setNameContent] = useState('');
    const [nameValidation, setNameValidation] = useState(null);

    const ChangeSecureText=()=>{
        setPasswordIsVisible(!passwordIsVisible);
    }
    
    function testName(nameContent: string): boolean | null {
        return nameContent.length > 3;
    }

    const NameValidation = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setNameContent(event.target.value);
    }

    const EmailValidation = (event: React.ChangeEvent<HTMLInputElement>)=>{
        let emailRegex:any =  /\S+@\S+\.\S+/;
        setEmailContent(event.target.value);
        setEmailValidation(emailRegex.test(emailContent));
    }

    useEffect(()=>{
        if (passwordIsVisible == true){
            setPasswordTypeView('password');
        }
        else{
            setPasswordTypeView('text');
        }
    })

    return(
        <>
            {
                inputType == 'password' ?
                    <InputPasswordContainer>
                        <InputPassword placeholder={inputType} required type={passwordTypeView}/>
                        <PasswordPreview type='button' onClick={ChangeSecureText}>
                            { passwordIsVisible ? <img src={Eye} width={22} height={16} alt="view password" draggable={false}/> : <img src={EyeSlash} width={25} height={20} alt="view password" draggable={false}/> }
                        </PasswordPreview>
                    </InputPasswordContainer>
                :
                inputType == 'email' ?
                    <>
                        <Input placeholder={inputType} onChange={EmailValidation} validation={emailValidation} required/>
                        {
                            emailValidation == false ?
                            <IncorrectEmailWarning>Your email should look like this: username@server.com!</IncorrectEmailWarning>
                            :
                            <></>
                        }
                    </>
                :
                
                <>
                        <Input placeholder={inputType} onChange={NameValidation} validation={ nameContent.length > 3? true : null } required/>
                </>
            }
        </>
    );
}

export default InputComponent;