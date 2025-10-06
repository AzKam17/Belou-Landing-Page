import React from "react";
import Footer from "@/components/Footer";
import "swiper/css";
import Hero from "./components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";

export const metadata = {
  title: "Belou - Gérez vos commandes en ligne facilement",
  description:
    "Belou vous permet de créer votre boutique en ligne en un instant, de regrouper vos produits, vos clients et vos commandes pour que tout devienne plus clair et plus simple.",
};

const page = () => {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <Features />
      {/* <Newsletter /> */}
      <About />
      {/* <Pricing /> */}
      {/* <Faqs /> */}
      {/* <Swiperslider />
      <Testimonials /> */}
      {/* <Blog />
      <Contact /> */}
      <Footer />
    </>
  );
};

export default page;
