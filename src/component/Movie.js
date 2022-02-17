
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";
function Movie (props){
    return(
    <div className="movie">
    <img className="movie__img" src= {props.medium} alt="cover_image"></img>
    <h2 className="movie__title">
    <Link to={`/movie/${props.id}`}>{props.title}</Link>
    </h2>
    <p>{props.summary}</p>
    <ul className="movie__genres">
      {props.genres.map((item,index)=>
        <li key = {index}>{item}</li>
      )}
    </ul>
    </div>
    );
}

Movie.propTypes = {
        id: PropTypes.number.isRequired,
        medium: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
      


export default Movie;