import React from "react";
import MovieCart from "./MovieCart";
import './index.css'
import MovieList from "./MovieList";
import TodoList from "./TodoList.tsx";
import NotesList from "./NotesList";

class App extends React.Component{
  render(){
    return(
      <>
      
      <NotesList/>
      <TodoList/>
      </>)
  }
}
export default App