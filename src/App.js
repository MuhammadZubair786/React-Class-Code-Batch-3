import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Gadi804 from "./Components/apge804";
import Contact from "./Components/Contact/contact";
import UserDetails from "./Components/Contact/usersDetails/user";
import Test from "./Components/Home/text";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:id" element={<UserDetails />} />
      <Route path="/contact/:id/:newid" element={<Test />} />
      <Route path="*" element={<Gadi804/>}/>
    </Routes>
  );
}

export default App;
