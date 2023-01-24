import {useState, useEffect} from 'react';
import { AuthPage, CallToActionSide, AuthSide, MainView, MainTitle, SubTitle, ImageContainer,
PoweredContainer, PoweredTxt, WelcomeContainer,AuthTitle, AuthSubTitle, Form, AuthButton, LinkTo,
Underlined } from '../../styles/main-auth-structure';
import { RemembermeContainer, RemembermeInput, RemembermeLabel } from './style'
import Kanban from '../../assets/img/kanban.jpg';
import QuickupLogo from '../../assets/img/quickup.svg'
import InputComponent from '../../components/input/index';
import { Login } from '../../services/restful/index'

const SignIn = () => {
  const [getEmail, setGetEmail] = useState('');
  const [getPassword, setGetPassword]= useState('')

  const Auth = ()=>{
    Login({getEmail, getPassword});
  }
  return(
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
          <InputComponent inputType={'email'} getEmail={(content:any)=>{setGetEmail(content)}} getPassword={()=>{}}/>
          <InputComponent inputType={'password'} getPassword={(content:any)=>{setGetPassword(content)}} getEmail={()=>{}}/>
          <RemembermeContainer>
            <RemembermeInput type='checkbox' id='login' name='login'/>
            <RemembermeLabel htmlFor='login'>Remember-me</RemembermeLabel>
          </RemembermeContainer>
          <AuthButton onClick={Auth} type="button" >Sign in</AuthButton>
          <LinkTo to="/signup">Don't have an account? <Underlined>Sign up!</Underlined></LinkTo>
        </Form>
      </AuthSide>
    </AuthPage>
  )
}
export default SignIn;