import './App.css';
import ReactDOM from "react-dom/client";
import React, { components } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListUsers from './components/list-users.component';
import Home from './components/home.component';
import AddUser from './components/add-user.component';
export default function App() {
  return (
    <div className="App">
      <header className="App-header1">
        <div class="page-header text-center">
          <h2>User Registration App</h2>
        </div>
      </header>
      <div class="container-fluid">
        <nav class="navbar bg-primary justify-contentcenter">
          <div class="col-sm"></div>
          <a href="/"
            class="col-sm btn btn-outline-light"

            role="button">
            Home
          </a>
          <div class="col-sm"></div>
          <a href="/list-all-users"
            class="col-sm btn btn-outline-light"
            role="button">
            List All Users
          </a>
          <div class="col-sm"></div>
          <a href="/add-user"
            class="col-sm btn btn-outline-light"
            role="button">
            Add User
          </a>
          <div class="col-sm"></div>
          <a href="/list-transactions"
            class="col-sm btn btn-outline-light"
            role="button">
            List Transactions
          </a>
          <div class="col-sm"></div>
        </nav>
        <br />
        <div className="container mt-3">
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/list-all-users" element={<ListUsers />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
