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
    <div className='prod'>
        <div className="product-leftcont">
            <div className="left-head">
                <span>{product.availabilityStatus}</span>
                <div className="head"><h3>{product.title}</h3> </div>
                <span>{product.stock} left</span>
            </div>
            <div className="prod-img"><img src={product.images} alt="{product.title}" /></div>
            <div className="prod-purchase">
                <button>Buy now</button>
                <button>Add to Cart</button>
            </div>
        </div>
        <div className="product-rightcont">
            <div className="prod-desc"><p><b>Description:</b> {product.description}</p></div>
            <div className="prod-ship"><b>Shipping Status: </b>{product.shippingInformation}</div>
            <div className="prod-warranty">
                <p><b>Warranty: </b>{product.warrantyInformation}</p>
                <p><b>Return Policy: </b>{product.returnPolicy}</p>
            </div>
            <div className="prod-price">
                <span><b>Price: </b> {product.price}$</span>
                <span><b>Discount: </b> {product.discountPercentage}%</span>
            </div>
            <div><span className='overal-rate'><b>Rating: </b> {product.rating}/5 (rated by {product.reviews.length} Users)</span></div>
            <div className="prod-review">
                <p><b>Reviews:</b></p>
                {product.reviews?.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div className="comment" key={index}>
                            <span><b>{review.reviewerName}</b></span>
                            <span>{new Date(review.date).toLocaleDateString('en-GB')}</span>
                            <p>{review.rating}⭐</p>
                            <p>{review.comment}</p>
                        </div>
                    ))
                    ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default Product;
