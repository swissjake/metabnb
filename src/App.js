import { useState } from "react";
import CardList from "./components/cards/CardList";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Modal from "./components/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import Nfts from "./components/nfts/Nfts";
import SmallNav from "./components/smallNav/SmallNav";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal ? <Modal /> : null}
      <div className="App">
        <Navbar openModal={openModal} setOpenModal={setOpenModal} />
        <Hero />
        <SmallNav />
        <CardList />
        <Nfts />
        <Footer />
      </div>
    </>
  );
}

export default App;
