import { useEffect, useState } from "react";

function FetchMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6cdecc1372bfdcdd015f791bdfa22813";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();

        const results = datas.results.map((item) => {
          return {
            poster_path: item.poster_path,
            title: item.title,
            release_date: item.release_date,
          };
        });

        console.log(results);

        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className='grid grid-cols-4 gap-[19px] bg-gray-300'>
      {movies.map((item, idx) => (
        <div className='flex flex-col gap-[19px]' key={idx}>
          <img
            className='rounded-[6px]'
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
          <p>{item.title}</p>
          <p>{item.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchMovies;
