import React from 'react';
import Header from '../Header/Header';
import './HomeDeatils.css'
const HomeDeatils = (props) => {
    const {name,img}=props.cart;
    return (
        <div className="wrapper">
          
           <div className="cart">
               <img src={img} alt=""/>
               <h3>{name}</h3>
           </div>
            
        </div>
    );
};

export default HomeDeatils;