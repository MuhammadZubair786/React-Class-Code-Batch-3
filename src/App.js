import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Gadi804 from "./Components/apge804";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Gadi804/>}/>


    </Routes>
  );
}

export default App;
