import Kalkulator from "./components/Kalkulator";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Get from "./components/CRUD/Get";
import Post from "./components/CRUD/Post";
import Put from "./components/CRUD/Put";
import Delete from "./components/CRUD/Delete";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kalkulator" element={<Kalkulator />}></Route>
          <Route path="/get" element={<Get />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/put" element={<Put />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
