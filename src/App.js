
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import Postview from './components/post-view/post-view';
import Post from "./components/create-post/create-post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/post-view" element={<Postview/>}/>
          <Route path="/post" element={<Post/>}/>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
