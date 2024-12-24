import { Button } from "../Button/Button";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
        <span>Locations</span>
      </div>
      <div className="logo">
        <img src="./public/logo3.png" />
      </div>

      <Button>Get a Quote</Button>
    </nav>
  );
}
