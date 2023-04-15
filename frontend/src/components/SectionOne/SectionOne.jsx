import React, {useState} from 'react';
import axios from "axios";
import styles from "./SectionOne.module.css"
import "../../index.css"


function SectionOne(props) {
  const {shortURL, updateShortURL} = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://zytener-env.eba-2ntk9pyz.us-west-2.elasticbeanstalk.com/api/url/shorten", {
      longUrl: inputValue
    });
    const data = await response.data;
    updateShortURL(data.shortUrl);
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


      {shortURL &&
        <div className={styles.container}>
          <input className={`${styles.input} input`}
                 type="text"
                 value={shortURL}
                 readOnly={true}
                 onChange={event => setInputValue(event.target.value)}/>

          <button className={`${styles.button} button`}
                  onClick={() => {
                    navigator.clipboard.writeText(shortURL).then();
                  }}
                  type="submit">Copy
          </button>
        </div>
      }


    </>
  );
}

export default SectionOne;
