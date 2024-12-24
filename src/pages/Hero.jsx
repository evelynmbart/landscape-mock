import "./Hero.css";

export function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <h1>
          We deliver top level
          <br />
          lawn care and landscaping
        </h1>
        <p>
          The art of lawn perfection, the science of beautiful landscapes, the
          science of <br />
          beautiful landscapes, designed to thrive
        </p>
      </div>

      <img className="hero-img" src="./public/one.png" />
    </section>
  );
}
