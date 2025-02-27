import { useState } from "react";
import "./App.scss";
import Music from "./componenets/Music/Music";
import Header from "./componenets/Header/Header";
import Footer from "./componenets/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Music />
        <Footer />
      </div>
    </>
  );
}

export default App;
