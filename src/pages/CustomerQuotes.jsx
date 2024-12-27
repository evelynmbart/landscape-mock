import { Quotes } from "../components/Quotes/Quotes";
import { SectionHead } from "../components/SectionHead/SectionHead";
import "./CustomerQuotes.css";

const CUSTOMERS = [
  {
    quote:
      "MowPro transformed my lawn! The service was quick, professional, and the results were beyond my expectations. Highly recommend!",
    avatar: "/customers/john-smith.png",
    customer: "John Smith",
  },
  {
    quote:
      "I’ve never had such a beautiful yard. MowPro is my go-to for all lawn care. Worth every penny!",
    avatar: "/customers/jane-doe.png",
    customer: "Jane Doe",
  },
  {
    quote:
      "MowPro has been amazing! Fast, friendly, and my lawn has never looked better. I’m so happy with their work!",
    avatar: "/customers/mark-johnson.png",
    customer: "Mark Johnson",
  },
  {
    quote:
      "The team at MowPro really knows what they’re doing. My garden looks pristine, and I’ve never had such reliable service.",
    avatar: "/customers/susan-miller.png",
    customer: "Susan Miller",
  },
  {
    quote:
      "I couldn’t be more pleased with MowPro. They truly care about the details, and my lawn has never looked this good!",
    avatar: "/customers/kevin-brown.png",
    customer: "Kevin Brown",
  },
];

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
      <div className="quotes-container">
        {CUSTOMERS.map((customer, index) => (
          <Quotes key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
}
