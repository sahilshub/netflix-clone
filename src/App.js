import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";

const App = () => {
  const user = {
    name: "John",
  };
  return (
    <div className="app">
      <Router>
        {!user ? (
          <h1>LoginScreen</h1>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
