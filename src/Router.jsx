import { Routes, Route } from "react-router";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/signin">
          <Route index element={<Signin />} />
        </Route>
        <Route path="/signup">
          <Route index element={<Signup />} />
        </Route>
        <Route path="/movie">
          <Route index element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
