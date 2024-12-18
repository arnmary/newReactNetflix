import React from 'react'
import Login from './Login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 function Header () {
    const nowDay = new Date()
 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayOfWeek = days[nowDay.getDay()];
    const month = months[nowDay.getMonth()];
    const day = nowDay.getDate();

    const formattedDate = `${dayOfWeek}  ${month}  ${day}`;
    const userStyle={
        position: 'absolute',
        top: '3.75rem',
        right: '3.5rem', 
         display:'none',
    }
  return (
   <>
   <div className='header'>
     <div className="navLeft" >
            <div className="logo">
               <img src="./netflixLogo.png" alt="img" />
            </div>
            <p className="apper inter-500">
                I
            </p>
            <div className="date inter-500">
                <p className="dateText">
                   {formattedDate}
                </p>
            </div>
        </div>
        <div className="navRight">
             <Login></Login>
             {/* <div style={userStyle} className="userBlock">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchIcon' />
            <div className="userImg">
             <img src="./user.png" alt="User icon" />
            </div>
             </div> */}
        
        </div>
   </div>
  
  
   </>
       
    
  )
}
export default Header;