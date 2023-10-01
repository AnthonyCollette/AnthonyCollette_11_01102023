import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/scss/main.scss'
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/details" element={<Details />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
