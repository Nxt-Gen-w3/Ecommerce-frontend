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
import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import Individual from "./Individual";
import Cart from "./Cart";
import AllItems from "./AllItems";
import FAQ from "./FAQ";

function App() {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Menu />
            <Offers />
            <PopularDishes />
            <HotDog />
            <TopReceipes />
            <Description />
            <LatestNews />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/allItems" exact>
            <AllItems />
          </Route>
          <Route path="/faq" exact>
            <FAQ />
          </Route>
          <Route path="/:id" exact>
            <Individual />
          </Route>

          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
