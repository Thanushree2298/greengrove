
import About from "@/components/About";
import BestSeller from "@/components/BestSeller";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <BestSeller />
     <About />
     <Contact />
     <Footer />

     </div>
    
  );
}
