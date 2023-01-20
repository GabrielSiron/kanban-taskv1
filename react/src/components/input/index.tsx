import React,{useEffect, useState} from 'react'
import {Input, InputPasswordContainer, InputPassword, PasswordPreview, IncorrectEmailWarning} from './style';
import Eye from '../../assets/icon/eye.svg';
import EyeSlash from '../../assets/icon/eye-slash.svg';

const InputComponent = ({inputType, getEmail, getPassword}: {inputType:any, getEmail:any, getPassword:any}) => {
    /* console.log(trigger); */
    
    const [passwordIsVisible, setPasswordIsVisible] = useState(true);
    const [passwordTypeView, setPasswordTypeView] = useState('password');
    const [emailContent, setEmailContent] = useState('');
    const [emailValidation, setEmailValidation] = useState(null);
    const [nameContent, setNameContent] = useState('');
    const [passwordContent, setPasswordContent] = useState('');
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
        setEmailContent(event.target.value);
        setEmailValidation(emailRegex.test(emailContent));
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
                    <InputPasswordContainer>
                        <InputPassword placeholder={inputType} onChange={PasswordValidation} required type={passwordTypeView}/>
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