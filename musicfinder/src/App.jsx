// import { useState } from "react";
import "./App.scss";
import Music from "./components/Music/Music";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
