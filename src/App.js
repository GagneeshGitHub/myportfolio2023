import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";
import { BrowserRouter,Routes,Route,HashRouter } from "react-router-dom";
import Mywebsitespage from './pages/Mywebsitespage'
import Educationpage from './pages/Educationpage'
import Myskillpage from './pages/Myskillpage'
import Contactpage from './pages/Contactpage'

function App() {
  return (
    <HashRouter>
      <div className="outerScreenDiv">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/mywebsites" element={<Mywebsitespage/>}/>
          <Route path="/education" element={<Educationpage/>}/>
          <Route path="/myskills" element={<Myskillpage/>}/>
          <Route path="/conatct" element={<Contactpage/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
