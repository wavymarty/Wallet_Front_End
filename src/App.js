import './App.css';
import ReactDOM from "react-dom/client";
//import React, { components } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListUsers from './components/list-users.component';
import Home from './components/home.component';
import AddUser from './components/add-user.component';
import ListTransactions from './components/list-transactions';
export default function App() {
  return (
    <div className="App">
      <header className="App-header1">
        <div className="page-header text-center">
          <h2>User Registration App</h2>
        </div>
      </header>
      <div className="container-fluid">
        <nav class="navbar bg-primary justify-contentcenter">
          <div className="col-sm"></div>
          <a href="/"
            className="col-sm btn btn-outline-light"

            role="button">
            Home
          </a>
          <div className="col-sm"></div>
          <a href="/list-all-users"
            className="col-sm btn btn-outline-light"
            role="button">
            List All Users
          </a>
          <div className="col-sm"></div>
          <a href="/add-user"
            className="col-sm btn btn-outline-light"
            role="button">
            Add User
          </a>
          <div className="col-sm"></div>
          <a href="/list-transactions"
            className="col-sm btn btn-outline-light"
            role="button">
            List Transactions
          </a>
          <div className="col-sm"></div>
        </nav>
        <br />
        <div className="container mt-3">
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/list-all-users" element={<ListUsers />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/list-transactions" element={<ListTransactions/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
