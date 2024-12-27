import { Button } from "../Button/Button";
import "./ServiceCard.css";

export function ServiceCard({ card }) {
  return (
    <div className="service-card">
      <div className="service-top">
        <img src={card.src} />
      </div>

      <div className="service-bottom">
        <h1>{card.title}</h1>
        <p>{card.description}</p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
