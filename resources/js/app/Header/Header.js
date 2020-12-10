import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";



//Imports


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/">Person</Link>
                <Link to="/manager">Manager</Link>
            </div>
        )
    }
}

export default Header;