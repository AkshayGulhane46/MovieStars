import React from "react";
import './index.css'
import MovieCart from "./MovieCart";

class MovieList extends React.Component{
    constructor(){
        super(); // this is a general in JS whenever we call a construcor we need to call super constructor of a class
        this.state = {
            movies : [{
                title:"The Avengers from state",
                plot:"hello world from state ",
                price:199,
                rating:2,
                stars:2,
                fav: true,
                incart : false
            },
            {
                title:"Harry Potter",
                plot:"hello world array Potter ",
                price:199,
                rating:2,
                stars:2,
                fav: true,
                incart : false
            }
        ]
        }
    }

    handleIncStars=(movie)=>{
        const {movies} = this.state // get all the movies
        const movieID = this.state.movies.indexOf(movie) // get the index of the movie on which user clicked 
        movies[movieID].stars += 0.5  // increment the stars

        this.setState({ // show the stars 
            movies : movies
        })
    }

    removeStars=()=>{
        console.log("stars are removed")
        // here we dont need binding as we are using arrow function 
        console.log(this.state)
        // set state second form which takes callback function

        if(this.state.stars <=0){
            return;
        }else{
            this.setState({
                stars : this.state.stars - 1
            })
        }
    }

    handleFav = () =>{
        this.setState({
            fav:!this.state.fav // NOT operator to make sure it will change the condition
        })
    }

    handleAddCart = () =>{ 

        console.log("added to cart")
        this.setState({   
            incart:!this.state.incart // NOT operator to make sure it will change the condition
        })
    }

    render(){
        const {movies} = this.state;
        return(
            <>
            {movies.map((movie)=>  < MovieCart movies = {movie}
            addStars = {this.handleIncStars}
            />)}
            
            </>
        )
    }
   
} 
export default MovieList