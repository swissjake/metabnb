import { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PlaceToStay from "./pages/PlaceToStay";
import Home from "./pages/Home";
import Modal from "./components/modal/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="App">
        <Navbar openModal={openModal} setOpenModal={setOpenModal} />
        {openModal ? (
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        ) : null}
        <Routes>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/placeToStay" element={<PlaceToStay />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
