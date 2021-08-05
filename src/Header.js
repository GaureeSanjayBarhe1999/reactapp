import React from 'react';


class Header extends React.Component {
   

    render() {
        return (
            <>  
            <center><h1>NEWS APP</h1></center>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav" >
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Newsapp" >technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Newsapp1">entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Newsapp2">sports</a>
                        </li>
                    
                        </ul>
                    </div>
                    </nav>
            </>
        );
        }
}

export default Header;