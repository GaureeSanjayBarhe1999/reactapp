
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Newsapp from './Newsapp';
import Newsapp1 from './Newsapp1';
import Newsapp2 from './Newsapp2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const App=()=>  {
  

    
  return (
    <Router>
    
    <div className="container">
      <header className="row">
        <div className="col-sm-12 bg-info">
          <Header />
        </div>
      </header>


      <main className="row">
        <div className="col-sm-12  ">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Newsapp" component={Newsapp}/>
          <Route exact path="/Newsapp1" component={Newsapp1}/> 
          <Route exact path="/Newsapp2" component={Newsapp2}/>
         
        </Switch>
        </div>
      </main>

      <footer className="row">
        <div className="col-sm-12 ">
          <Footer/>
        </div>
      </footer>
    </div>



    </Router>
  );

}

/*
import React from 'react';
import './App.css';
import './Todo.js';
function App() {
  return (
    <div className="App">
   <Todo />
  
    </div>
  );
}
*/
export default App;
