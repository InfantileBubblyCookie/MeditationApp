import Videos from './pages/videos.js'
import Home from './pages/home.js';
import Meditations from './pages/meditations.js';
import Videoplayer from './pages/videoplayer.js';
import Error from './pages/error.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/"element = {<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/videos" element={<Videos/>}></Route>
        <Route path="/meditations" element={<Meditations/>}></Route>
        <Route path="/videos/:id" element={<Videoplayer/>}></Route>
        <Route path="/*" element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
