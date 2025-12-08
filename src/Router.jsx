import { Routes, Route } from "react-router";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function Router() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
