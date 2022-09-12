import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Welcom from "./pages/Welcom";
import Message from "./pages/Message";
import useSession from "./hooks/useSession";
import UserContext from "./contexts/UserContext";

function App() {
  const [username, setUsername] = useSession('username', null);
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {username && (
          <>
            <Route path="/msg" element={<Message />} />
            <Route path="/welcom" element={<Welcom />} />
          </>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;












