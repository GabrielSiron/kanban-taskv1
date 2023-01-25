import React ,{useEffect, useState, useRef} from 'react';
import Lottie from 'react-lottie-player';
import { AuthPage, CallToActionSide, AuthSide, MainView, MainTitle, SubTitle, ImageContainer,
PoweredContainer, PoweredTxt, WelcomeContainer,AuthTitle, AuthSubTitle, Form, AuthButton, LinkTo,
Underlined } from '../../styles/main-auth-structure';
import { RemembermeContainer, RemembermeInput, RemembermeLabel } from './style'
import Kanban from '../../assets/img/kanban.jpg';
import QuickupLogo from '../../assets/img/quickup.svg'
import { UserContext } from '../../contexts/user';
import InputComponent from '../../components/input/index';
import { Login } from '../../services/auth/index';
import LoadingIcon from '../../assets/animations/icons/loading.json';



const SignIn = ( ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const Auth = async()=>{
    await Login({email, password}, {setLoading}, {setToken});
  }
  useEffect(()=>{
  }, [token]);
  
  /* if(!localStorage.getItem('token')){
        GetToken().then((token:string)=>{
            localStorage.setItem("token", token);
        })
    }
    else{
        alert('vc está logado');
        
    } */
  return(
    <UserContext.Provider value={{email, setEmail, password, setPassword}}>
      <AuthPage>
        <CallToActionSide>
          <MainView>
            <MainTitle>Divide your tasks to conquer your results.</MainTitle>
            <SubTitle>The solution you need!</SubTitle>
            <PoweredContainer>
              <PoweredTxt>Powered by</PoweredTxt>
              <img src={QuickupLogo} width={121} height={25} alt="Quickup logo" draggable={false}/>
            </PoweredContainer>
          </MainView>
          <ImageContainer>
            <img src={Kanban} width={1686} height={1125} alt='kanban board'/>
          </ImageContainer>
        </CallToActionSide>
        <AuthSide>
          <WelcomeContainer>
            <AuthTitle>Welcome</AuthTitle>
            <AuthSubTitle>Good to see you again!</AuthSubTitle>
          </WelcomeContainer>
          <Form>
            <InputComponent inputType={'email'}/>
            <InputComponent inputType={'password'}/>
            <RemembermeContainer>
              <RemembermeInput type='checkbox' id='login' name='login'/>
              <RemembermeLabel htmlFor='login'>Remember-me</RemembermeLabel>
            </RemembermeContainer>
            <AuthButton onClick={Auth} type="button" disabled={loading}>
              { loading == true ? <Lottie loop animationData={LoadingIcon} play style={{ width: '100%', height: '100%', scale: '1.8' }}/> : 'SignIn'}
            </AuthButton>
            <LinkTo to="/signup">Don't have an account? <Underlined>Sign up!</Underlined></LinkTo>
          </Form>
        </AuthSide>
      </AuthPage>
    </UserContext.Provider>
  )
}
export default SignIn;