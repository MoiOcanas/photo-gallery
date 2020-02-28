import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <ul className="navbar-nav ml-auto mx-auto text-lighten-1">
                        <span className="navbar-brand text-dark">Photo Gallery</span>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
