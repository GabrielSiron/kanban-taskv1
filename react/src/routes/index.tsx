
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/sign-in/index';
import CyclesList from '../pages/cycles-list/index';

export const AppRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path='/cycles' element={<CyclesList/>}/>
                <Route path='/' element={<SignIn/>}/>
            </Routes>
        </Router>
    );
}