import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import { Mowpro } from "./pages/Mowpro";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mowpro />
      <About />
    </>
  );
}

export default App;
