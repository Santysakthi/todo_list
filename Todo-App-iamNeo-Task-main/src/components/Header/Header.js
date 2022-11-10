import React from 'react';
import "./Header.css";
const Header = () => {
  const logo = 'https://iamneo.ai/wp-content/uploads/2022/07/iamneo-logo.png';
  
  return (
    <div>
        <header>
            <h1>  
            <img src={logo} alt="logo" style={{width: 80}} />
               <span>       </span>TO DO APPLICATION
            </h1>
        </header>
    </div>
    
  )
}

export default Header
