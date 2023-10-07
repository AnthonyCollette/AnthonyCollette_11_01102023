import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/scss/main.scss'
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Details from "./pages/Details";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/details/*" element={<Error404 />} />
              <Route path="/about" element={<About />} />
              <Route path="/error-404" element={<Error404 />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
