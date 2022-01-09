import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import {auth} from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    })
  };
  return (
    <Router>
      <nav>
        <Link to = "/"> Home </Link>
        
        {!isAuth ? <Link to = "/login"> Login </Link> : <><Link to = "/create-post"> Create </Link>
        <button onClick={signUserOut}>Log Out</button></> }
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} ></Route>
        <Route path="/create-post" element={<CreatePost isAuth={isAuth}/>} ></Route>

      </Routes>
    </Router>
  );
}

export default App;
