import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
  
     
      <main className="" >
        
        <div className="">
        <HeroSection/>
        
        <About />
        
        <Services />
        
        <Mywork />
        <Contact />
        <Footer />
        </div>
      </main>
    
  );
}
