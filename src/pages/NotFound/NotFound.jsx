import React from 'react';
import { useRouteError } from 'react-router-dom';

function NotFound(props) {
    const error = useRouteError();
    return (
        <div id='erroe-page'>
           <h1>not Found</h1>
            <i>{error.statusText || error.message}</i>
        </div>
    );
}

export default NotFound;