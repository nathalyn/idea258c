import React from 'react';
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  mx-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/schedule" className="nav-link">Schedule</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources" className="nav-link">Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Funsies</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;