import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotels from "./components/Hotels";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import WeblayOut from "./components/WeblayOut";
import Home from "./components/Home";

const App = () => (
  <div className="">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeblayOut />}>
          <Route path="/" index element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
