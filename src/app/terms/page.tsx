import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | OBEC",
  description: "Read OBEC's terms of use for website visitors and community participants.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        <section className="container-app py-20">
          <h1 className="font-alt font-bold text-[40px] md:text-[56px] text-text-strong mb-6">
            Terms of Use
          </h1>
          <p className="text-text-normal text-lg">
            Our terms of use are currently being updated. Please check back soon.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
