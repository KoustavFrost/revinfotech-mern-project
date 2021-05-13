import React from 'react';
import { Link } from 'react-router-dom';

// Inline styles
const paddingLeft = {
    paddingLeft: '1rem'
};

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link
                style={paddingLeft}
                to="/"
                className="navbar-brand"
            >
                Revinfotech-Mini-Project
            </Link>

            <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">List</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Entry</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;