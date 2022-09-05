import { NavLink, Outlet, useSearchParams } from "react-router-dom"
import { getInvoices } from "../data"

export default function Invoices() {
  let invoices = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className="row">
      <nav className="row border-right-1 p-3">
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter")
            if (!filter) return true
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((invoice) => (
            <div className="col">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-danger" : "text-primary"
                }
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            </div>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}
