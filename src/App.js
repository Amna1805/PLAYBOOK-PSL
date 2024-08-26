import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/main/home";
import Login from "./components/main/login";
import Signup from "./components/main/signup";

import Players from "./components/main/Players";

import Matches from "./components/main/Matches";
import Predict from "./components/main/Predict";
import Dashboard from "./components/main/Dashboard";
function App() { 
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/matches" element={<Matches/>}/>
        
        <Route path="/teams" element={<Players/>}/>

        <Route path="/predict" element={<Predict/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
