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
import Terms from './Terms&Conditions'

function App() {
  let [userData, setUserData] = useState(null);
  const [allProducts, setallProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    handleAllProducts();
    let storagekey = localStorage.getItem("userToken");
    handleUser(storagekey);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    if (storagekey) {
      setUserLogged(true);
    }
  }, []);

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
          setUserData(data?.user);
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

  if (loading) {
    return (
      <>
        <Header
          userData={userData}
          handleUser={handleUser}
          setUserData={setUserData}
        />
        <div className="Loader flex justify-center items-center">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_AQEOul.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Header
          userData={userData}
          handleUser={handleUser}
          setUserData={setUserData}
          setUserLogged={setUserLogged}
        />
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
            <SignIn
              loading={loading}
              setUserLogged={setUserLogged}
              handleUser={handleUser}
            />
          </Route>
          <Route path="/signup" exact>
            <SignUp loading={loading} />
          </Route>
          <Route path="/cart" exact>
            <Cart loading={loading} />
          </Route>
          <Route path="/about">
            <About loading={loading} />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/allItems" exact>
            <AllItems
              loading={loading}
              allProducts={allProducts}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/faq" exact>
            <FAQ />
          </Route>
          <Route path="/:id" exact>
            <Individual allProducts={allProducts} userLogged={userLogged} />
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
