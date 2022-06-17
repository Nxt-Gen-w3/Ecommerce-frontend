import React, { useEffect, useState } from "react";
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
import About from "./About";

function App() {
  let [userData, setUserData] = useState(null);
  const [allProducts, setallProducts] = useState(null);

  useEffect(() => {
    let storagekey = localStorage.getItem("userToken");
    handleUser(storagekey);
    handleAllProducts();
  }, "");

  const handleUser = (storagekey) => {
    if (storagekey) {
      fetch(
        `https://achaari-couple-k28px.ondigitalocean.app/api/v1/users/user`,
        {
          method: "GET",
          headers: {
            authorization: `${storagekey}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setUserData(data.user);
        });
    }
  };
  const handleAllProducts = () => {
    fetch(`https://achaari-couple-k28px.ondigitalocean.app/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        setallProducts(data?.products);
      });
  };
  return (
    <>
      <div>
        <Header userData={userData} />
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Menu allProducts={allProducts} />
            <Offers />
            <PopularDishes />
            <HotDog />
            <TopReceipes allProducts={allProducts} />
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/allItems" exact>
            <AllItems allProducts={allProducts} />
          </Route>
          <Route path="/faq" exact>
            <FAQ />
          </Route>
          <Route path="/:id" exact>
            <Individual allProducts={allProducts} />
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
