import {React} from 'react'
import Myntra from './Myntra.png'
import people from './people.png'
import heart from './heart.png'
import bag from './bag.png'
import './Menubar.css';
const Header =()=>{
  
    return (
        <>
        
           <div >
             <div className="searchbar">
               <ul>
               <li><img src={Myntra} className="app-logo" alt="logo" /></li>
                 <li><a href="#">MEN</a></li>
                 <li><a href="#">WOMEN</a></li>
                 <li><a href="#">KIDS</a></li>
                 <li><a href="#">HOME & LIVING</a></li>
                 <li><a href="#">BEAUTY</a></li>
                 <br/>
                 
                <div className="bar1"><input type='text' aria-label='Search Bar' placeholder='Search for product branch and more'></input>
                <button type="submit" ><i className="fa fa-search"></i></button> 
                <span  className="bar2" >
                  <span className="bar3">  {<img src={people} className="app-logo1" alt="logo" />}</span>
                  <span className="bar3"> {<img src={heart} className="app-logo1" alt="logo" />}</span>
                  <span className="bar3">{<img src={bag} className="app-logo1" alt="logo" />}</span>
            
                </span>
               
                   
                </div>
                

               </ul>
             </div>

        
           </div>
        </>
    );
}
export default Header;