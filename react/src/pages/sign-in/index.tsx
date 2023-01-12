import React from 'react';
import { AuthPage, CallToActionSide, AuthSide, MainTitle} from '../../styles/main-auth-structure';

const SignIn = () => {
  return(
    <AuthPage>
      <CallToActionSide>
        <MainTitle>Divide your tasks to conquer your results.</MainTitle>
      </CallToActionSide>
      <AuthSide></AuthSide>
    </AuthPage>
  )
}
export default SignIn;