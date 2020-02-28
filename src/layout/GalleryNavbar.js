import React from 'react';
import { Link } from 'react-router-dom';

const GalleryNavbar = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/collections">Collections</Link>
                </li>
            </ul>
        </div>
    );
}

export default GalleryNavbar;
