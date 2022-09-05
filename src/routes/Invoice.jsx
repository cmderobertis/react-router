import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getInvoice, deleteInvoice } from "../data"

export default function Invoice() {
  let navigate = useNavigate()
  let location = useLocation()
  let params = useParams()
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  return (
    <div className="row">
      <div className="col">
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number)
            navigate("/invoices" + location.search)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
