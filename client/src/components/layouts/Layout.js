import React from 'react';

// Importing the NavigationBar
import NavigationBar from './Nav';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <NavigationBar />
            {children}
        </div>
    );
};

export default Layout;