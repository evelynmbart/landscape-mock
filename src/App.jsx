import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About";
import { CustomerQuotes } from "./pages/CustomerQuotes";
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
      <CustomerQuotes />
    </>
  );
}

export default App;
