import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
// import Search from './components/searchMovie';
import axios from'axios';
// import Movie from './components/movie';


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
 }
     

   async getMovie(event){
    
    event.preventDefault();
        var movie = this.input.current.value;
       const response = await axios.get(`https://omdbapi.com?t=${movie}&apikey=thewdb`);
        console.log(response.data);
        this.setState({poster:response.data.Poster});
        this.setState({title:response.data.Title});
        this.setState({genre:response.data.Genre});
        this.setState({actors:response.data.Actors});
        this.setState({plot:response.data.Plot});
        this.setState({year:response.data.Year});
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
    </div>
    );
  }
}

export default App;
