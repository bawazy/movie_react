import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Mlist from './components/movie_list';
import axios from'axios';



class App extends Component {
  constructor(props){
        super(props);
    
            this.getMovie = this.getMovie.bind(this);
            this.input = React.createRef();
    }
    
 state = {
  title:'',
  poster:'',
  genre:'',
  actors:'',
  plot:'',
  year:'',
  movies:[],
 }
 
   async load(){
    const response = await axios.get(`https://omdbapi.com?s="2018"&type=movie&page=1&apikey=thewdb`);
       this.setState({
         movies: response.data.Search
   })
  }
      
  
  componentDidMount(){
       this.load();
     }
     
   
     async getMovie(event){
    event.preventDefault();
        var movie = this.input.current.value;
       const response = await axios.get(`https://omdbapi.com?t=${movie}&apikey=thewdb`);
        console.log(response.data);
        this.setState({
                poster:response.data.Poster,
                title:response.data.Title,
                genre:response.data.Genre,
                actors:response.data.Actors,
                plot:response.data.Plot,
                year:response.data.Year
        });
    } 


  render() {
    return (
      <div className='App'>
    <Header />  
                                                                                        
  <div>
        <input 
            type='text' 
            name='search' 
            className='search' 
            placeholder='Enter Movie Name....'
            ref={this.input}
         />
        <input type='submit'
                value='Search'
                className='btn'
                onClick={this.getMovie}
         />
      
        <div className='movie'>
        
          <img src={this.state.poster} alt=''/>
        <h1>{this.state.title}</h1>
        <h2>{this.state.genre}</h2>
        <h3>{this.state.year}</h3>
        <h3>{this.state.actors}</h3>
        <p>{this.state.plot}</p>
  
        </div>
        
      </div>
      <div className='movielist'><Mlist mlist={this.state.movies} /> </div>
      
    </div>
    );
  }
}

export default App;
