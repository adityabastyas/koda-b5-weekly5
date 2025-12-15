import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/movies.slice";
import { useNavigate } from "react-router";

const GENRES = [
  { id: 53, name: "Thriller" },
  { id: 27, name: "Horror" },
  { id: 10749, name: "Romance" },
  { id: 12, name: "Adventure" },
  { id: 878, name: "Sci-Fi" },
];

function FetchMovies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.movie);

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredMovies = data
    .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    .filter((movie) =>
      selectedGenre ? movie.genre_ids.includes(selectedGenre) : true,
    );

  const getGenreNames = (genreIds) => {
    return GENRES.filter((genre) => genreIds.includes(genre.id))
      .map((genre) => genre.name)
      .join(", ");
  };

  return (
    <div className="px-[130px] py-[55px]">
      <div className="flex items-center gap-[20px]">
        <div className="mb-6">
          <label htmlFor="textSearch">Cari Movie</label>
          <input
            type="text"
            id="textSearch"
            placeholder="New Born Expert"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-2 block rounded border px-3 py-2"
          />
        </div>

        <div className="mb-8 flex gap-3">
          <label htmlFor="">Filter</label>

          <button
            onClick={() => setSelectedGenre(null)}
            className={`rounded px-4 py-2 ${
              selectedGenre === null ? "bg-blue-600 text-white" : "border"
            }`}
          >
            All
          </button>

          {GENRES.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre.id)}
              className={`rounded px-4 py-2 ${
                selectedGenre === genre.id ? "bg-blue-600 text-white" : "border"
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-[16px] md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              className="rounded-[6px]"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <p className="my-[8px] font-semibold">{movie.title}</p>

            <p className="text-sm text-gray-500">
              {getGenreNames(movie.genre_ids)}
            </p>
          </div>
        ))}
      </div>

      {filteredMovies.length === 0 && <p className="mt-4">Movie not found</p>}
    </div>
  );
}

export default FetchMovies;
