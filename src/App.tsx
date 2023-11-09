import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Info from './components/pokemonInfo/Info';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
