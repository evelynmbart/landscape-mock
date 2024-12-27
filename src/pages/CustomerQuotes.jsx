import { SectionHead } from "../components/SectionHead/SectionHead";
import "./CustomerQuotes.css";

export function CustomerQuotes() {
  return (
    <section className="custQuotes-container">
      <SectionHead>
        <h1>What our Customers are saying</h1>
        <p>
          MowPro is a highly rated, 5-star professional lawn care service
          recognized for its unparalleled expertise, consistent reliability, and
          exceptional results.
        </p>
      </SectionHead>
    </section>
  );
}
