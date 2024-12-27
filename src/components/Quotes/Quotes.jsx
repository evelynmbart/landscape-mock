import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./Quotes.css";

export function Quotes({ customer }) {
  return (
    <div className="quote-card">
      <div className="quote-top">
        <FormatQuoteIcon />
        <p>{customer.quote}</p>
      </div>
      <div className="quote-customer">
        <span>
          <img src={customer.avatar} />
          <p>{customer.customer}</p>
        </span>
      </div>
    </div>
  );
}
