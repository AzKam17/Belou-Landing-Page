import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "swiper/css";
import Swiperslider from "@/components/Swiperslider";
import Hero from "./components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

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
