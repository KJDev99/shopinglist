import { useState } from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ModalProduct from "./components/modal/modalProduct";
import ModalNoProduct from "./components/modal/modalNoProduct";
import ModalCart from "./components/modal/modalCart";
import ModalInfo from "./components/modal/modalInfo";
import ModalConfirm from "./components/modal/modalConfirm";
import ModalError from "./components/modalError/modalError";
import ModalMainInfo from "./components/modalInfo/modalMainInfo";

export default function App() {
  const [modalAct, setModalAct] = useState(false);

  return (
    <div>
      <Navbar />
      {modalAct && <ModalProduct setModalAct={setModalAct} />}
      {/* {modalAct && (
        <ModalNoProduct
          setModalAct={setModalAct}
          text="Unrecognized product"
          img="/sea.png"
        />
      )} */}
      {/* {modalAct && (
        <ModalCart
          setModalAct={setModalAct}
          status="delete" // add
          productImg="/sea.png"
          productTitle="Pasteurized milk House in the Village 2.5%, 930 ml"
          info="Get the document"
        />
      )} */}
      {/* {modalAct && (
        <ModalInfo
          setModalAct={setModalAct}
          status="info" // check
          productImg="/sea.png"
          productTitle="Pasteurized milk House in the Village 2.5%, 930 ml"
          info="Get the document"
          buttonText="Cancel"
        />
      )} */}
      {/* {modalAct && <ModalConfirm setModalAct={setModalAct} />} */}
      {/* <ModalError
        imgBg={true}
        title={"The checkout is temporarily closed"}
        info="Go to another checkout"
      /> */}
      {/* <ModalMainInfo
        img="/apple.svg"
        title={"The checkout is temporarily closed"}
      /> */}
      <Content />
      <Footer setModalAct={setModalAct} />
    </div>
  );
}
