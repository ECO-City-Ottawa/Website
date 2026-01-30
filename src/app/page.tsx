import Footer from "@/components/footer/Footer";
import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        {/* Add more sections below */}
      </main>
      <Footer />
    </>
  );
}
