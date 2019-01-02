import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title,poster,genres,synopsis}){
    return(
        <div className="movie-content">
            <div className="movie-column">
                <MoviePoster poster={poster} />
            </div>
            <div className="movie-column">
                <h1>{title}</h1>
                <div className="movie-genres">
                {
                    genres.map((genre,index) => 
                        <MovieGenre genre={genre} key={index} />
                    )
                }
                </div>
                <p className="movie-synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />   
                </p>
            </div>
        </div>
    );
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" width="250px" className="movie-poster" />
    );
}
function MovieGenre({genre}){
    return(
        <span className="movie-genre">{genre} </span>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre:PropTypes.string.isRequired
}

export default Movie;