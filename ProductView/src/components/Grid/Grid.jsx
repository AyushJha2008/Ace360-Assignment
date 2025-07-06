import { useEffect } from "react";
import { useState } from "react";
import './grid.css'
import { Link } from "react-router-dom";

const Grid = ({searchTerm}) => {
    const [products, setproducts] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=30')
        .then(response => response.json())
        .then(data => setproducts(data.products))
        .catch(err => console.error('error fetching data:',err))
    },[]);
    const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm?.toLowerCase() || ""));
    
  return (
    <div className='grid'>
        <div className="header"><h2>Tap to see more info</h2></div>
        <div className="product-grid">
            {filteredProducts.map(product =>(
                <Link to={`/product/${product.id}`} key={product.id}>
                <div className="product">
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="product-head">
                        <h3>{product.title}</h3>
                    </div>
                    <div className="product-category">
                        <p>{product.tags[0]}</p>
                        <p>{product.tags[1]}</p>
                    </div>
                    <div className="product-rating">
                        <span>{product.rating}⭐</span>
                        <span>{product.stock} stocks left</span>
                    </div>
                    <div className="product-price">
                        <p>$ {product.price}</p>
                        <p>{product.discountPercentage}% off</p>
                    </div>
                </div> </Link>
            ))}
        </div>
    </div>
  )
}

export default Grid