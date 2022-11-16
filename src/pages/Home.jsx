import React from "react";
import CardList from "../components/cards/CardList";
import Hero from "../components/hero/Hero";

import Nfts from "../components/nfts/Nfts";
import SmallNav from "../components/smallNav/SmallNav";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <SmallNav />
      <CardList />
      <Nfts />
    </div>
  );
};

export default Home;
