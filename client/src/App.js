import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Welcom from "./pages/Welcom";
import Message from "./pages/Message";
import UserContext from "./contexts/UserContext";
import Layout from "./templates/Layout";
import { RoomDataContext } from "./contexts/CommandContext";

function App() {

  const { username } = useContext(UserContext);
  const { room } = RoomDataContext();
  console.log(room);
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {username && (
          <>
            {<Route path="/msg" element={room ? <Message /> : <Welcom />} />}
            <Route path="/welcom" element={<Welcom />} />
          </>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;












