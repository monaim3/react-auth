import React, { useEffect, useState } from 'react';
import Information from '../../Data/Data.json';
import HomeDeatils from './HomeDeatils/HomeDeatils';
const Home = () => {
    const [user,setUser]=useState([]);
    
    useEffect(()=>{
          setUser(Information);
          console.log(Information)
    },[])
    
    return (
        <div>
           {
             user.map(cart=> <HomeDeatils cart={cart}></HomeDeatils>)
           }
        </div>
    );
};

export default Home;