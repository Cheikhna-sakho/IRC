import React, { useState, useEffect,useContext, createContext } from "react";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Welcom from "./pages/Welcom";
import io from "socket.io-client";
import Message from "./pages/Message";
const ENDPOINT = "http://localhost:2323";
export const socketContext = createContext(io.connect(ENDPOINT));
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/msg" element={<Message />} />
        <Route  path="/welcom" element={<Welcom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;












{/* <Route path="/nick" element={< />} />
<Route path="/list" element={< />} />
<Route path="/create" element={< />} />
<Route path="/delete" element={< />} />
<Route path="/join" element={< />} />
<Route path="/leave" element={< />} />
<Route path="/user" element={< />} />
<Route path="/msg" element={< />} /> */}
{/* <Route path='*' element={<Home />} /> */}