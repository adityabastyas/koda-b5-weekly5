import Header from "../component/Header";
import Footer from "../component/Footer";
import TiketPurchases from "../component/TiketPurchases";
import SubscribeToOur from "../component/SubscribeToOur";
import FetchMovies from "../component/FetchMovies";

function Home() {
  return (
    <>
      <Header />
      <TiketPurchases />
      <FetchMovies />

      <SubscribeToOur />

      <Footer />
    </>
  );
}

export default Home;
