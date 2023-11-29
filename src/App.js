import "./App.css";
import Navbar from "./Components/Component/Navbar/Navbar";
import Home from "./Components/Component/Home/Home";
import { Routes, Route } from "react-router-dom";
import Footers from "./Components/Component/Footer/Footers";
import Womenpage from "./Components/Component/WomenPage/Womenpage";
import Blog from "./Components/Component/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/womenpage" element={<Womenpage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footers />
    </div>
  );
}

export default App;
