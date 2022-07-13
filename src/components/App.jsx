import React from "react";
import Header from "./header/Header.tsx";
import Body from "./body/Body";
import Welcome from "../components/header/welcome/Welcome.tsx";
import Content from "../components/header/content/Content.tsx";
import MainImage from "../assets/img/mainImg.jpg";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const image = { backgroundImage: `url(${MainImage})` };

  return (
    <>
      <Header image={image} content={<Content />} welcome={<Welcome />} />
      <Body />
    </>
  );
}
export default App;
