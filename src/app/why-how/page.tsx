import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import WhyHowHero from "@/components/whyHow/WhyHowHero";
import WhyAndHowSplit from "@/components/whyHow/WhyAndHowSplit";
import TenThemes from "@/components/whyHow/TenThemes";
import DriversOfChange from "@/components/whyHow/DriversOfChange";
import JoinMissionCta from "@/components/about/JoinMissionCta";

export default function WhyHowPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <WhyHowHero />
        <WhyAndHowSplit />
        <TenThemes />
        <DriversOfChange />
        <JoinMissionCta />
      </main>
      <Footer />
    </>
  );
}
