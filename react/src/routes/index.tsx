
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/sign-in/index';
export const AppRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
            </Routes>
        </Router>
    );
}