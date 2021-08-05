import React from "react";
import './Home.css';
export default function Search({ fetchNewsApiData }) {
  
    function handleSubmit(event) {
        event.preventDefault();
        let searchTerm = event.target[0].value;
        fetchNewsApiData(searchTerm);
    }

    return (
        <div className="search" >
          <center>
            <form  onSubmit={handleSubmit}>
                <input
                    type='text'
                  
                    aria-label='Search Bar'
                    placeholder='Type Some Keywords'></input>

                      <button type="submit" ><i className="fa fa-search"></i></button>
            </form>
            </center>
        </div>
    );
}



