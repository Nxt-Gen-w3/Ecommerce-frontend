import React from "react";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HotDog from "./HotDog";
import LatestNews from "./LatestNews";
import Menu from "./Menu";
import Offers from "./Offers";
import PopularDishes from "./PopularDishes";
import TopReceipes from "./TopReceipes";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Menu />
        <Offers />
        <PopularDishes />
        <HotDog />
        <TopReceipes />
        <Description />
        <LatestNews />
        <Footer />
      </div>
    </>
  );
}

export default App;
