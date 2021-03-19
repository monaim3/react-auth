import React from 'react';
import './Header.css';

const Header = () => {
    return (
     
             <div className="header">
              <div className="logo">
                <h2>Ticket Zone</h2>
              </div>
              <div className="nav">
              <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><button>Login</button></li>
                </ul>
              </div>
            </div>
    
    );
};

export default Header;