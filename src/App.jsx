import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Routes, Route, NavLink, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Routing Example</h1>
      <nav className="d-flex">
        <div className="pe-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-danger" : "text-primary"
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div className="">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-danger" : "text-primary"
            }
            to="/invoices"
          >
            Invoices
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
