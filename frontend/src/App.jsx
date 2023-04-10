import './App.css'
import Features from "./components/Features/Features.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./index.css"
import SectionOne from "./components/SectionOne/SectionOne.jsx";
import SectionTwo from "./components/SectionTwo/SectionTwo.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {useState} from "react";

function App() {
  const [shortURL, setShortURL] = useState("");

  const updateShortURL = (newShortURL) => {
    setShortURL(newShortURL);
  };

  return (
    <>
      <Navbar/>

      <SectionOne shortURL={shortURL}
                  updateShortURL={updateShortURL}/>

      <SectionTwo shortURL={shortURL}
                  updateShortURL={updateShortURL}/>


      <Features/>

      <Footer/>

    </>
  )
}

export default App
