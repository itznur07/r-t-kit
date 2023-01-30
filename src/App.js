import "./styles.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";

export default function App() {
  return (
    <div className="container mb-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
