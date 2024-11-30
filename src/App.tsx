import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import Editor from "../src/components/Editor";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
};

export default App;
