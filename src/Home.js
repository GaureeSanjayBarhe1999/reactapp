import React,{useState,useEffect} from 'react';
import './Newsapp.css';
import './Home.css';
import axios from "axios";
import Search from'./Search.js';
const Home =()=> {
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        const fetchArticles=async ()=>{
            try{
                const res=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=7ab9f0d94d1e434fb09e18a0dbcc8b0c')
                const art=await res.json()
                setArticles(art.articles)
                console.log(art.articles)
            }catch(error){
                console.log(error);
            }
        }
        fetchArticles()
    },[])    
    async function fetchNewsApiData(searchQuery) {
        if (searchQuery === "") {
            return alert("Search Required");
        }
        let newsData = await axios.get(
            `https://gnews.io/api/v3/search?q=${searchQuery}&token=d823322f70a243c01a0da4d04ba47363`
        );
        console.log(newsData.data)
        setArticles(newsData.data.articles);
    }


    

            return(           
            
          <>
         
          <h1 className="jk">

              <Search fetchNewsApiData={fetchNewsApiData}/>
          </h1 >
            {articles && articles.map((item) => (
                <>
                 <div className="newsCard">
                 <img
                   alt={item.title}
                   src={
                    item.urlToImage
                   ? item.urlToImage
                    : item.image
                     }
                       className="newsImage"
                      /> 
                      <div className="newsText">
                      <div>
                    <span className="newstitle"> <b>{item.title}</b></span></div>
                    <div>
                    <span><a href={item.url}><b>short {" "}</b></a>by{" "}{item.author ? item.author : "unknown"} {" "}</span>
                    <span>{" "}{item.publishedAt}{" "}</span>
                    </div>
                  
                    <div className="lowerNewsText">
                    <div className="description">{item.description}
                    <h6>{item.content}</h6></div>
                   
                    <span className="readmore">
                    read more at{" "}
                    <a href={item.url} target="__blank" className="source">
                    <b>{item.source.name}</b>
                    </a>
                    </span>
                    
                    </div>
                    
                    </div>
                    </div>
                  
                   
                </>
            ))}
            
        </>
            )
    
}
export default Home;