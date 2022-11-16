import { lazy, Suspense, useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal";
import Loader from "./components/loader/Loader";
const PlaceToStay = lazy(() => import("./pages/PlaceToStay"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Navbar openModal={openModal} setOpenModal={setOpenModal} />
          {openModal ? (
            <Modal openModal={openModal} setOpenModal={setOpenModal} />
          ) : null}
          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/placeToStay" element={<PlaceToStay />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
