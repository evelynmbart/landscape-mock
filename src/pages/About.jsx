import { Button } from "../components/Button/Button";
import "./About.css";

const ABOUT_STATS = [
  {
    amount: 11,
    description: "years of experience",
  },
  {
    amount: "324+",
    description: "projects in 2023",
  },
  {
    amount: "24k",
    description: "5-star reviews",
  },
];

export function About() {
  return (
    <section className="about-container">
      <div className="about-left">
        <img src="./public/five.png" />
      </div>
      <div className="about-right">
        <h1></h1>
        <p></p>
        <p></p>
        <div className="about-stats">
          {ABOUT_STATS.map((stat, index) => (
            <div key={index}>
              <h2>{stat.amount}</h2>
              <h5>{stat.description}</h5>
            </div>
          ))}
        </div>
      </div>
      <Button>Get Started</Button>
    </section>
  );
}
