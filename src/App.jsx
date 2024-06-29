import Kalkulator from "./components/Kalkulator";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kalkulator" element={<Kalkulator />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
