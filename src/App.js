import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Destinations from "./components/destinations/Destinations";
import Selects from "./components/selects/Selects";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
    </>
  );
}

export default App;
