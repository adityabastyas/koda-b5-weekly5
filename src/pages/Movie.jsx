import React from "react";
import Header from "../component/Header";
import FetchMovies from "../component/FetchMovies";
import SubscribeToOur from "../component/SubscribeToOur";
SubscribeToOur;
import Footer from "../component/Footer";
import HomeIron from "../component/HomeIron";

function Movie() {
  return (
    <>
      <Header />
      <HomeIron />
      <FetchMovies />
      <SubscribeToOur />
      <Footer />
    </>
  );
}

export default Movie;
