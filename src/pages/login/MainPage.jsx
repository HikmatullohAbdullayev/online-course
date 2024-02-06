import React from 'react';
import Login from "./components/Login.Jsx"
import SignUp from './components/SignUp';

function MainPage(props) {
    return (
        <div>
            <SignUp/>
            <Login/>
        </div>
    )
}

export default MainPage;