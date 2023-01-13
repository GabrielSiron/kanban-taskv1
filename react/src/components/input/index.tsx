import React,{useEffect, useState} from 'react'
import {Input, InputPasswordContainer, InputPassword, PasswordPreview} from './style';
import Eye from '../../assets/icon/eye.svg';
import EyeSlash from '../../assets/icon/eye-slash.svg';
const InputComponent = (props:any)=>{
    let inputType:string = props.inputType;
    const [passwordIsVisible, setPasswordIsVisible] = useState(true);
    const [passwordTypeView, setPasswordTypeView] = useState('password');
    const ChangeSecureText=()=>{
        setPasswordIsVisible(!passwordIsVisible);
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
                    <InputPasswordContainer>
                        <InputPassword placeholder={inputType} required type={passwordTypeView}/>
                        <PasswordPreview type='button' onClick={ChangeSecureText}>
                            { passwordIsVisible ? <img src={Eye} width={22} height={16} alt="view password" draggable={false}/> : <img src={EyeSlash} width={25} height={20} alt="view password" draggable={false}/> }
                        </PasswordPreview>
                    </InputPasswordContainer>
                </>
                :
                <>
                    <Input placeholder={inputType} required/>
                </>
            }
        </>
    );
}

export default InputComponent;