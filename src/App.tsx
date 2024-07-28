import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialMedia } from "./components/SocialMedia";
import { Us } from "./components/Us";
import { Principles } from "./components/Principles";
import { Operations } from "./components/Operations";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Hero></Hero>
      <Us></Us>
      <Principles></Principles>
      <Operations></Operations>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}

export default App;
