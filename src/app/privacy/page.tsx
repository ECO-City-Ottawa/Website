import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OBEC",
  description: "Read OBEC's privacy policy and how privacy information will be published for website visitors.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        <section className="container-app py-20">
          <h1 className="font-alt font-bold text-[40px] md:text-[56px] text-text-strong mb-6">
            Privacy Policy
          </h1>
          <p className="text-text-normal text-lg">
            Our privacy policy is currently being updated. Please check back soon.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
