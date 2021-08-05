
import './Newsapp.css';
import React,{useState,useEffect} from 'react';



const Newsapp1 =()=> {
    const [articles,setArticles]=useState([]);
   
    useEffect(()=>{
        const fetchArticles=async ()=>{
            try{
                const res=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7ab9f0d94d1e434fb09e18a0dbcc8b0c')
                const art=await res.json()
                setArticles(art.articles)
                console.log(art.articles)
            }catch(error){
                console.log(error);
            }
        }
        fetchArticles()
    },[])  

            return(           
            
          <>
        
          <h1>

             
          </h1>
            {articles && articles.map((item) => (
                <>
                 <div className="newsCard">
                   <img
                    alt={item.urlToImage}
                      src={
                        item.urlToImage}
                      
                   className="newsImage"
                      /> 
                      <div className="newsText">
                      <div>
                    <span className="newstitle"> <b>  {item.title}</b></span></div>
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
export default Newsapp1;