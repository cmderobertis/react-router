import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import About from "./routes/About"
import Invoices from "./routes/Invoices"
import Invoice from "./routes/Invoice"
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />}></Route>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<p>Select an Invoice</p>}></Route>
            <Route path=":invoiceId" element={<Invoice />}></Route>
          </Route>
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
