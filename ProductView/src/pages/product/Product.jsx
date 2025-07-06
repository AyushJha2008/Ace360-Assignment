import React, { useEffect, useState } from 'react'
import './product.css'
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();  //get product id from url
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchProduct = async () =>{
        try{
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
            setLoading(false)
        } catch(err){
            console.log("error:", err);
            setLoading(false)
        }
    }; fetchProduct()
  }, [id]);
  if(loading) return <p>Loading.. please wait</p>
  if(!product) return <p>Product not found</p>

  return (
    <div>
        <div className="product-leftcont">
            <div className="left-head">
                <span>{product.availabilityStatus}</span>
                <div className="head"><h3>{product.title}</h3> </div>
                <span>{product.stock} left</span>
            </div>
            <div className="prod-img"><img src={product.images} alt="{product.title}" /></div>
        </div>
      <div className="prod-desc"><p>{product.description}</p></div>
      <div className="prod-price">
        <span>{product.price}</span>
        <span>{product.discountPercentage}%</span>
      </div>
      <div className="prod-ship">{product.shippingInformation}</div>
      <div className="prod-warranty">
        <p>{product.warrantyInformation}</p>
        <p>{product.returnPolicy}</p>
      </div>
      <div className="prod-review">
        <p>Rating: {product.rating}⭐</p>
        <p>Reviews:</p>
        <div className="comment">
            <span>{product.reviews[0].reviewerName}</span>
            <span>{product.reviews[0].date}</span>
            <p>{product.reviews[0].rating}⭐</p>
            <p>{product.reviews[0].comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
