import CottageIcon from "@mui/icons-material/Cottage";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HandymanIcon from "@mui/icons-material/Handyman";
import { SectionHead } from "../../src/components/SectionHead/SectionHead";
import { MowCard } from "../components/MowCard/MowCard";
import "./Mowpro.css";

const CARD_DETAILS = [
  {
    icon: <EngineeringIcon fontSize="large" />,
    title: "5 Star Professional",
    description:
      "MowPro is a highly rated, 5-star professional lawn care service recognized for its unparalled expertise, consistent reliability, and exceptional results.",
  },
  {
    icon: <HandymanIcon fontSize="large" />,
    title: "Locally Owned & Operated",
    description:
      "MowPro is a highly rated, 5-star professional lawn care service recognized for its unparalled expertise, consistent reliability, and exceptional results.",
  },
  {
    icon: <CottageIcon fontSize="large" />,
    title: "Certified, Licensed & Insured",
    description:
      "MowPro is a highly rated, 5-star professional lawn care service recognized for its unparalled expertise, consistent reliability, and exceptional results.",
  },
];

export function Mowpro() {
  return (
    <section className="mowpro-container">
      <SectionHead>
        <h1>Why MowPro for all your lawn needs?</h1>
        <p>
          Keep your lawn looking fresh and feeling healthy with MowPro. Easy to
          schedule, easy to serve.
        </p>
      </SectionHead>
      <div className="mowpro-cards">
        {CARD_DETAILS.map((card, index) => (
          <MowCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
