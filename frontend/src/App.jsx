import './App.css'
import {useState} from "react";
import axios from "axios";
import Features from "./components/Features.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("error");
  const [shortURL, setShortURl] = useState("");

  const handleInputChange = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:5000/api/url/shorten", {
      longUrl: inputValue
    });
    const data = await response.data;
    console.log(data, "asdasd");
    setShortURl(data.shortUrl);
  }

  return (
    <>
      {/*<Features/>*/}
      <div>
        <form onSubmit={handleInputChange}
              noValidate={false}>
          <label>
            Input value:
            <input type="text"
                   value={inputValue}
                   onChange={event => setInputValue(event.target.value)}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>


      {/*{errorMessage && (*/}
      {/*  <div className="example-component__error-message">{errorMessage}</div>*/}
      {/*)}*/}

      <br/>
      <br/>
      <br/>
      <br/>

      {shortURL && <div>
        {shortURL}
        <button onClick={() => {
          navigator.clipboard.writeText(shortURL).then();
        }}>Copy URL
        </button>
      </div>}


    </>


  )
}

export default App
