import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Global/Navbar";
import Homepage from "./components/Home/Homepage";
import SinglePage from "./components/Layout/SinglePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path ="/property/:id" element={<SinglePage/>} />
      </Routes>
    </>
  );
}

export default App;
