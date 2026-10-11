import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "./components/WhatsappButton";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ  from "./components/FAQ";
import Footer from "./components/Footer";

import './styles/main.scss';
function App() {


  return (
    <>
      <WhatsAppButton />
      <Header />
      <Hero />
      <Features />
      <Projects />
      <Process />
      <Pricing />
      <FAQ />
      <Footer />
      <Analytics />
    </>
  )
}

export default App
