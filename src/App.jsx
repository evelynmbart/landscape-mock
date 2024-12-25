import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import { Mowpro } from "./pages/Mowpro";
import { Services } from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mowpro />
      <About />
      <Services />
    </>
  );
}

export default App;
