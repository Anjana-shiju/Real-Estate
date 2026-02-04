import Footer from "../COMPONENTS/Footer";
import Hero from "../COMPONENTS/Hero";
import Navbar from "../COMPONENTS/Navbar";
import PromoBanners from "../COMPONENTS/PromoBanners";
import PropertySection from "../COMPONENTS/PropertySection";
import RentProperties from "../COMPONENTS/RentProperties";
import TrendingProperties from "../COMPONENTS/TrendingProperty";
export default function Homepage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <PropertySection/>
        <TrendingProperties/>
        <RentProperties/>
        <PromoBanners/>
        <Footer/>

    </div>
  )
}