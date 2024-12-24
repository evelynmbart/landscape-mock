import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./pages/Hero";
import { Mowpro } from "./pages/Mowpro";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mowpro />
    </>
  );
}

export default App;
