import './App.css'
import Features from "./components/Features/Features.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./index.css"
import SectionOne from "./components/SectionOne/SectionOne.jsx";

function App() {


  return (
    <>
      <Navbar/>

      <SectionOne/>

      {/*<button className={"button"}>Shorten</button>*/}
      {/*<input className={"input"}*/}
      {/*       placeholder={"Enter Link Here"}*/}
      {/*       type="text"/>*/}

      {/*{shortURL && <QRCodeSVG value={shortURL}*/}
      {/*                        size={256}/>}*/}

      {/*{errorMessage && (*/}
      {/*  <div className="example-component__error-message">{errorMessage}</div>*/}
      {/*)}*/}


      {/*{shortURL && <div>*/}
      {/*  {shortURL}*/}
      {/*  <button onClick={() => {*/}
      {/*    navigator.clipboard.writeText(shortURL).then();*/}
      {/*  }}>Copy URL*/}
      {/*  </button>*/}
      {/*</div>}*/}

      <Features/>

    </>


  )
}

export default App
