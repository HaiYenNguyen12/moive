import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import Movie from "../component/Movie";
function Detail (){

    const [loading,setLoading] = useState(true);
    const [movie, setMovie] = useState({
      id: 0,
      key: "0",
      medium : "",
      title : "",
      summary: "",
      genres: []
    });
    const { id } = useParams();


    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json.data.movie);
      setMovie({
        id : json.data.movie.id,
        key: json.data.movie.id,
        medium : json.data.movie.medium_cover_image,
        title : json.data.movie.title,
        summary: json.data.movie.description_intro,
        genres: json.data.movie.genres      }                
      ); 
      setLoading(false);
    
    };
    useEffect(() => {
      getMovie();
    }, [] );

    return (
        <div>
         { loading ? <h1>Loading ...</h1> :
         ( <div> 
  
          <Movie
     key = {movie.id}
     id = {movie.id}
     medium={movie.medium}
     title={movie.title}
     summary = {movie.summary}
     genres={movie.genres} />
         
         </div>)}
           
        </div>
      );
}
export default Detail;