import React, { Component } from 'react';
import Movie from "./Movie";
import "./App.css";
class App extends Component {
  state = {
    
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
        return <Movie 
        title={movie.title}
        poster={movie.medium_cover_image} 
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id} />
      })
      return movies;
  }

  _getMovies = async() => {
    const movies = await this._callApi()
    this.setState({
        movies
    })
  }
  
  _callApi = () =>{
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(getJson => getJson.data.movies)
    .catch(error => console.log(error))
  }
  render() {
    const {movies} = this.state;
    return (
        <div className={ movies? "App" : "App-loading" }>
          {
            movies ? this._renderMovies() : "Loadings..."
          }
        </div>
    );
  }
}

export default App;
