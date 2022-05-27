import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YaziListesi from "./components/YaziListesi";
import YaziDetayi from "./components/YaziDetayi";

function App() {
  
  return (
  
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
          <Route path="/" exact element={<YaziListesi/>} />
          <Route path="/posts/:id" element={<YaziDetayi/>} />
         </Routes>
          
          </div>
        </div>
        
     </Router>
  );
  
}

export default App;
