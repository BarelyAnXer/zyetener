import React from 'react';
import styles from "./Features.module.css"
import easy from "../../assets/easy-to-use.png"
import shortened from "../../assets/chain.png"
import secure from "../../assets/cyber-security.png"
import reliable from "../../assets/insignia.png"
import responsive from "../../assets/responsive-design.png"
import qr from "../../assets/qr-code.png"

function Features() {
  const data = [
    {
      title: "Easy to Use",
      logo: easy,
      text: "Shorten long URLs quickly and easily with Zytener - the user-friendly URL shortening tool."
    }, {
      title: "Responsive",
      logo: responsive,
      text: "Works seamlessly across a variety of devices, including smartphones, tablets, and desktop computers."
    }, {
      title: "Secure",
      logo: secure,
      text: "Speed and security are our priorities. encryption protect your data when using our service."
    }, {
      title: "Reliable",
      logo: reliable,
      text: "Any links attempting to distribute spam, viruses, or malware are promptly removed from our platform."
    }, {
      title: "Shortened",
      logo: shortened,
      text: "No matter the length of the link, Zytener can always shorten it for you."
    },
    {
      title: "Qr Code",
      logo: qr,
      text: "QR code feature for efficient access to various information a helpful addition to our platform."
    },
  ]
  return (
    <>
      <div className={styles.gridContainer}>
        {data.map((item, index) => (
          <div className={`${styles.gridItem} ${styles.box} `}
               key={index}>
            <img className={styles.gridImg}
                 src={item.logo}
                 alt=""/>
            <p className={styles.gridTitle}>{item.title}</p>
            <p className={styles.gridContent}>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;