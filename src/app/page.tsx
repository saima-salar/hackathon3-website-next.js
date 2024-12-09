import React from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import TopSelling from "./components/TopSelling";
import Heading from "./components/Heading";
import NewArrival from "./components/NewArrival";
import Blogs from "@/app/components/Blog"
import Instagram from "./components/Instagram";



const page = () => {
  return (
    <div>

<Header />
        <Hero />
        <CardSection />
        <Heading />
        <TopSelling />
        <NewArrival />
        <Blogs />
        <Instagram />
        <Footer />

    </div>
  )
}

export default page
