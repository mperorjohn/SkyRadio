// import { useState } from 'react';
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import RadioHome from "./pages/RadioHome";
// import Footer from "./components/Footer";

const App = () => {
  return <>
  <Layout />
  <Routes>
    <Route path="/" element={<RadioHome/>} />
  </Routes>
  {/* <Footer /> */}
  </>;
};

export default App;
