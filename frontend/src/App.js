import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Global/Navbar";
import Homepage from "./components/Home/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
