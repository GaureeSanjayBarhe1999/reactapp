import React from 'react';


const Header =()=> {
 
    

   
        return (
            <>  
                      <center><h1>NEWS APP</h1></center>
                      <div className="navbar navbar-expand-lg navbar-light bg-light">
                      <ul className="navbar-nav">
                      <li className="nav-item active">
                      <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item active" >
                      <a className="nav-link" href="/Newsapp" >technology</a>
                      </li>
                      <li className="nav-item active">
                      <a className="nav-link" href="/Newsapp1">entertainment</a>
                     </li>
                     <li className="nav-item active" >
                    <a  className="nav-link" href="/Newsapp2">Sports</a>
                     </li>
                    </ul></div>
        
            </>
        );
        }


export default Header;