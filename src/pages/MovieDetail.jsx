import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../component/Footer";
import Header from "../component/Header";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return null;

  return (
    <>
      <Header />
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>

      <div className="px-[130px]">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
          />

          <h1>{movie.title}</h1>
          <p>Release: {movie.release_date}</p>
          <p>Duration: {movie.runtime}</p>

          <p>Genres: {movie.genres.map((item) => item.name).join(", ")}</p>
          <p>{movie.overview}</p>
        </div>
        <div className="mt-[24px]">
          <p>Buy Now</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MovieDetail;
