import React, {useState} from 'react';
import axios from "axios";
import styles from "./SectionOne.module.css"
import "../../index.css"

function SectionOne() {
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
      <form className={styles.container}
            onSubmit={handleInputChange}
            noValidate={false}>

        <input className={`${styles.input} input`}
               type="text"
               placeholder={"Enter Link Here"}
               value={inputValue}
               onChange={event => setInputValue(event.target.value)}/>

        <button className={`${styles.button} button`}
                type="submit">Shorten URL
        </button>
      </form>
    </>
  );
}

export default SectionOne;
