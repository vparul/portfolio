import { Routes, Route, BrowserRouter } from "react-router-dom"
import { LandingPage } from "./pages/landingPage/LandingPage";

function App() {
  return (
   <div className="bg-black h-full">
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} />
        <Route path="/" element={<LandingPage />}/>
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
