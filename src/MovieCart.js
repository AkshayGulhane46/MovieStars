import React from "react";
import './index.css'

class MovieCart extends React.Component{
    constructor(){
        super(); // this is a general in JS whenever we call a construcor we need to call super constructor of a class
        this.state = {
            title:"The Avengers from state",
            plot:"hello world from state ",
            price:199,
            rating:2
        }
    }
    render(){
        const {title,plot,price,rating} = this.state; // destructuring of an object otherwise not necessory
        return(
            <>
               <div className="main">
                    <div className="movie-card">
                        <div className="left">
                            <img className="movie-img"></img>
                        </div>
                        <div className="right">
                        <div className="title">{title}</div>
                            <div className="plot">{plot}</div>
                            <div className="price">RS {price}</div>
                            <div className="footer">
                                <div className="rating">{rating}</div>
                                <div className="stars">5</div>
                                <button className="fav-button">Fav Button</button>
                                <button className="cart-button">Add to cart</button>
                            </div>
                        </div>
                    </div>
               </div>
            </> 
        )
    }
} 
export default MovieCart