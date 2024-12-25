import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./MowCard.css";

export function MowCard({ card }) {
  return (
    <div className="mowpro-card">
      <div className="card-icon">{card.icon}</div>
      <h3 className="card-title">{card.title}</h3>
      <p className="card-description">{card.description}</p>
      <span className="card-link">
        <a style={{ textTransform: "uppercase" }}>read more</a>{" "}
        <ArrowRightAltIcon />
      </span>
    </div>
  );
}
