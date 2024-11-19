import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Sale from "./components/Sale";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Top />
      <Navbar />
      <Hero />
      <Brands />
      <Sale />
      <Footer />

      </div>
  );
}
