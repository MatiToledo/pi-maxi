import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";
import CreatePage from "./pages/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videogame/detail/:id" element={<DetailPage />}></Route>
        <Route path="/videogame/create" element={<CreatePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
