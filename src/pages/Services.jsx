import { ServiceCard } from "../components/Services/ServiceCard";
import "./Services.css";

const SERVICE_CARD = [
  {
    src: "/two.png",
    title: "Lawn Mowing",
    description:
      "We offer routine mowing services. All mowing services include hedge trimming.",
  },
  {
    src: "/six.png",
    title: "Professional Landscaping",
    description:
      "MowPro Lawn Care offers professional, high-quality landscaping services.",
  },
  {
    src: "/four.png",
    title: "Lawn Care Treatment",
    description: "Providing lawn care treatment for your lawn specific needs.",
  },
  {
    src: "/three.png",
    title: "Irrigation Services",
    description:
      "Supplying top-notch irrigation treatments for your thirsty lawn.",
  },
  {
    src: "/seven.png",
    title: "Hardscaping Service",
    description:
      "Out with the old, in with the New! We offer hardscaping patio services as well.",
  },
  {
    src: "/eight.png",
    title: "Property Cleanup",
    description: "Too much debris around the lawn? We'll take care of it!",
  },
];

export function Services() {
  return (
    <section className="service-container">
      <div className="service-title">
        <h1>Landscaping & Lawn Care Services</h1>
        <p>Design, maintenance, and care for your lawns</p>
      </div>
      <div className="service-content">
        {SERVICE_CARD.map((card, index) => (
          <ServiceCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
