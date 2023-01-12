import React from 'react';
import { AuthPage, CallToActionSide, AuthSide, MainView, MainTitle, SubTitle, ImageContainer,
PoweredContainer, PoweredTxt
} from '../../styles/main-auth-structure';
import Kanban from '../../assets/img/kanban.jpg';
import QuickupLogo from '../../assets/img/quickup.svg'
const SignIn = () => {
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
      <AuthSide></AuthSide>
    </AuthPage>
  )
}
export default SignIn;