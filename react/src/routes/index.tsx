import  UserContext  from '../contexts/user';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/sign-in/index';
import SignUp from '../pages/sign-up/index';
import Home from '../pages/home/index';

export const AppRoutes = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    
    return(
        <Router>
            <UserContext.Provider value={{email, setEmail, password, setPassword, token, setToken}}>
                { !token ?
                    <Routes>
                        <Route path='/' element={<SignIn/>}/>
                        <Route path='/signup' element={<SignUp/>}></Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                    </Routes>
                }
            </UserContext.Provider>
        </Router>
    );
}