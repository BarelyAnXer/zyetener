import React from 'react';
import styles from "./Features.module.css"
import easy from "../../assets/easy-to-use.png"
import shortened from "../../assets/chain.png"
import secure from "../../assets/cyber-security.png"
import reliable from "../../assets/responsive-design.png"
import responsive from "../../assets/responsive-design.png"
import qr from "../../assets/qr.png"

function Features() {
  const data = [
    {
      logo: easy,
      text: "Zyetener is a quick and user-friendly tool that allows you to shorten long URLs. Simply input the lengthy link you want to shorten, and you'll receive a shortened URL in no time."
    }, {
      logo: responsive,
      text: "Works seamlessly across a variety of devices, including smartphones, tablets, and desktop computers."
    }, {
      logo: secure,
      text: "Our service prioritizes both speed and security. We employ the HTTPS protocol and data encryption to ensure that your data is protected while using our platform."
    }, {
      logo: reliable,
      text: "Any links attempting to distribute spam, viruses, or malware are promptly removed from our platform."
    }, {
      logo: shortened,
      text: "No matter the length of the link, Zyetener can always shorten it for you."
    },
    {
      logo: qr,
      text: "Equipped with a helpful QR code feature that enables users to easily and efficiently access a range of information."
    },
  ]
  return (
    <>
      <div className={styles.gridContainer}>
        {data.map(item => (
          <div className={styles.gridItem}
               key={item.id}>
            <img className={styles.gridImg}
                 src={item.logo}
                 alt=""/>
            <p className={styles.gridContent}>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;