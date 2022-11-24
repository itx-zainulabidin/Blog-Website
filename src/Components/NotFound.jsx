import React from 'react';
import "./NotFound.css"
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Sorry</h1>
            <p>Page Not Found</p>
            <Link to={'/'}>
                Back to homepage...
            </Link>
        </div>
    );
};

export default NotFound;