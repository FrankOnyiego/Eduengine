import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Router, Route, Routes } from "react-router-dom";
import Consult from "./consult";
import Chemistry from "./Chemistry";
import Physics from "./physics";
import Projects from "./Projects";
import Header from "./Header";
import STEMKitsPage from "./kits";
import Requests from "./consultationsRequests";
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      {/* Consult Q&A forum */}
      <Route path="/consult" element={<Consult />} />
      <Route path="/chemistry" element={<Chemistry />} />
      <Route path="/physics" element={<Physics />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/kits" element={<STEMKitsPage />} />
      <Route path="/requests" element={<Requests />} />

    </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
