import React,{useEffect, useState} from 'react'
import {Input, InputPasswordContainer, InputPassword, PasswordPreview, IncorrectInputWarning} from './style';
import Eye from '../../assets/icon/eye.svg';
import EyeSlash from '../../assets/icon/eye-slash.svg';

const InputComponent = ({inputType, getEmail, getPassword}: {inputType:any, getEmail:any, getPassword:any}) => {

    const [passwordIsVisible, setPasswordIsVisible] = useState(true);
    const [passwordTypeView, setPasswordTypeView] = useState('password');
    const [emailContent, setEmailContent] = useState('');
    const [emailValidation, setEmailValidation] = useState(null);
    const [nameContent, setNameContent] = useState('');
    const [passwordContent, setPasswordContent] = useState('');
    const [warningValue, setWarningValue] = useState('');

    useEffect(()=>{
        getEmail(emailContent);
    }, [emailContent])
    useEffect(()=>{
        getPassword(passwordContent);
    }, [passwordContent]);
    
    const ChangeSecureText=()=>{
        setPasswordIsVisible(!passwordIsVisible);
    }

    const NameValidation = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setNameContent(event.target.value);
    }

    const EmailValidation = (event: React.ChangeEvent<HTMLInputElement>)=>{
        let emailRegex:any =  /\S+@\S+\.\S+/;
        let EmailContent:string = event.target.value;
        setEmailContent(EmailContent);
        if (EmailContent.length != 0){
            setEmailValidation(emailRegex.test(EmailContent));
            setWarningValue('Your email should look like this: username@server.com!');
        }
        else{
            setWarningValue('This field is mandatory!');
        }
    }

    const PasswordValidation = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setPasswordContent(event.target.value);
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
                    <>
                        <InputPasswordContainer validation={passwordContent}>
                            <InputPassword placeholder={inputType} onChange={PasswordValidation} type={passwordTypeView} required/>
                            <PasswordPreview type='button' onClick={ChangeSecureText}>
                                { passwordIsVisible ? <img src={Eye} width={22} height={16} alt="view password" draggable={false}/> : <img src={EyeSlash} width={25} height={20} alt="view password" draggable={false}/> }
                            </PasswordPreview>
                        </InputPasswordContainer>
                        {
                            passwordContent.length == 0 || passwordContent.length >= 6 ? 
                                <></>
                            :
                            <IncorrectInputWarning>Your password must be 6 characters or more!</IncorrectInputWarning>
                        }
                    </>
                :
                inputType == 'email' ?
                    <>
                        <Input placeholder={inputType} onBlur={EmailValidation} validation={emailValidation} required/>
                        {
                            emailValidation == false ?
                            <IncorrectInputWarning>{warningValue}</IncorrectInputWarning>
                            :
                            <></>
                        }
                    </>
                :
                <>
                    <Input placeholder={inputType} onBlur={NameValidation} validation={ nameContent.length > 3? true : null } required/>
                </>
            }
        </>
    );
}

export default InputComponent;