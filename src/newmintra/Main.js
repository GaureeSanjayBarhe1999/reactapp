import React, {useState,useEffect} from 'react';
import './Main.css'
const Main=()=>{
    const [articles,setArticles]=useState([]);
   
    useEffect(()=>{
        const fetchproducts=async ()=>{
            try{
                const res=await fetch('https://demo7242716.mockable.io/products')
                const art=await res.json()
                setArticles(art.products)
                console.log(art.products)
            }catch(error){
                console.log(error);
            }
        }
        fetchproducts()
    },[])  
   return(
         
        <div>
        <div className="left">
            <div>Home/<span><b>Black</b></span></div>
            <div><span><b>Black</b></span>-119139 items</div>
            <br></br>

            <div><span><b>FILTERS</b></span></div>
            <hr/>
           
            <div>
              <div>  <input type="radio" ></input>{"   "}<label> Male</label></div>
              <div>  <input type="radio" ></input>{"   "}<label> Female</label></div>
             <div> <input type="radio" ></input>{"   "}<label>Boys</label></div>  
             <div>  <input type="radio" ></input>{"   "}<label> Girls</label></div> 
            </div>
            <hr></hr>
            <br/>
            <div>
                <div><b>CATEGORIES</b></div>
                <br></br>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Tshirts{" "}<span className="price">(3558)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Tops{" "}<span className="price">(3678)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Dresses{" "}<span className="price">(68)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Shirts{" "}<span className="price">(345)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Trousers{" "}<span className="price">(32)</span></label></div>
            </div>
            <hr></hr>
            <br />
            <div>
                <div><b>BRAND</b></div>
                <br></br>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Rosdster{" "}<span className="price">(3208)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>QUANCIOUS{" "}<span className="price">(1535)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>WRONGN{" "}<span className="price">(1313)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Free Authority{" "}<span className="price">(1150)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Max{" "}<span className="price">(1031)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Puma{" "}<span className="price">(181)</span></label></div>
            </div>
            <hr></hr>
            <br />
            <div>
                <div><b>PRICE</b></div>
                <br></br>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Rs. 149 to Rs. 2612 {" "}<span className="price">(56229)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Rs. 2612 to Rs. 5075{" "} <span className="price">(902)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Rs. 5075 to Rs. 7538 {" "}<span className="price">(48)</span></label></div>
                <div> <input type="checkbox" value="Tshirts" />{"  "}<label>Rs. 7538 to Rs. 10000 {" "}<span className="price">(5)</span></label></div>
               
            </div>
            <br></br>

        </div>
        <div className="right">
           
            <div className="recommnd">
                <select>
                    <option>sort by: Recommended</option>
                    <option>Popularity</option>
                    <option>Discount</option>
                </select>
            </div>
            <div className="all">
            {articles && articles.map((item)=>(
              <div className="Card">
                  <div>
                  <img src={item.searchImage} className="image"></img></div>
                  <p>{"  "}</p>
                  <h6>{item.brand}</h6>
                  <p>{item.productName}</p>
                  <h6>Rs. {" "}{item.price}</h6>

              </div>

            ))}
            </div>
        </div>
        </div>
         
   )
   
}
export default Main;
