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
        <h1>You're One Of Our Own At MowPro</h1>
        <div className="about-summary">
          <p>
            MowPro is a locally owned landscaping company dedicated to
            transforming yards with the utmost care and attention to detail.
            With a personal touch and a commitment to our community, we ensure
            every lawn feels like our own.
          </p>
          <p>
            Our team of friendly professionals takes pride in providing
            reliable, top-notch service that enhances the beauty of your outdoor
            spaces, season after season.
          </p>
        </div>

        <div className="about-stats">
          {ABOUT_STATS.map((stat, index) => (
            <div key={index}>
              <h2 style={{ fontSize: "3rem" }}>{stat.amount}</h2>
              <h5
                style={{
                  fontSize: "1rem",
                  fontWeight: "normal",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {stat.description}
              </h5>
            </div>
          ))}
        </div>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
