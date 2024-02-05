import React from 'react';
import Singin from "../login/components/Singin"
import Login from "./components/Login"

function MainPage(props) {
    return (
        <div>
            <Singin/>
            <Login/>
        </div>
    )
}

export default MainPage;