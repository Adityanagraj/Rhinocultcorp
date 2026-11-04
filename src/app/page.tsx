import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Clients from "@/components/Clients";
import Brands from "@/components/Brands";
import Catalogues from "@/components/Catalogues";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import SendGiftsAbroad from "@/components/SendGiftsAbroad";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Top offset clears the fixed navbar so the banner sits just below it. */}
        <div className="mt-[60px] sm:mt-[68px]">
          <Ticker />
        </div>
        <Hero />
        <Clients />
        <Brands />
        <Catalogues />
        <About />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Insights />
        <Testimonials />
        <SendGiftsAbroad />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
