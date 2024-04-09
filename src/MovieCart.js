import React from "react";
import './index.css'

class MovieCart extends React.Component{
    render(){
        const {title,plot,price,rating,stars,fav,incart} = this.props.movies

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
                                <div className="stars">{stars} Stars</div>
                          
                                {fav ? <button className="unfav-button" onClick={this.handleFav}>UnFav Button</button> :
                                      <button className="fav-button" onClick={this.handleFav}>Fav Button</button>
                                }
                                
                                <button className="cart-button" onClick={this.handleAddCart}>{incart?"add to cart":"Remove from cart" }</button>
                                <button className="increase" onClick={() => {this.props.addStars(this.props.movies)}}>Increase</button>
                                <button className="decrease" onClick={this.removeStars}>Descrease</button>
                            </div>
                        </div>
                    </div>
               </div>
            </> 
        )
    }
} 
export default MovieCart