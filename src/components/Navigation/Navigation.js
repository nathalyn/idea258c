import React from 'react';
const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resources</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Funsies</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;