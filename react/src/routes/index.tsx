
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/sign-in/index';
import SignUp from '../pages/sign-up/index';

export const AppRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}></Route>
            </Routes>
        </Router>
    );
}