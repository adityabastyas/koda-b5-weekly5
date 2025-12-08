import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import FetchMovies from "./component/FetchMovies.jsx";
import TiketPurchases from "./component/TiketPurchases.jsx";
import SubscribeToOur from "./component/SubscribeToOur.jsx";
import HomeIron from "./component/HomeIron.jsx";
import SpiderBackground from "./component/SpiderBackground.jsx";
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Signin /> */}
      <Router />
      {/* <HomeIron /> */}
      {/* <SpiderBackground /> */}
      {/* <SubscribeToOur /> */}
      {/* <TiketPurchases /> */}
      {/* <FetchMovies /> */}
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
