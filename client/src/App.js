import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./components/pages/home.js";
import ViewContacts from './components/pages/viewcontacts.js';
import AddContacts from "./components/pages/addcontacts.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-contacts" element={<ViewContacts/>} />
          <Route path="/add-contacts" element={<AddContacts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
