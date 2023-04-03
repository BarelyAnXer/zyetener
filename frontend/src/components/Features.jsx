import React from 'react';

function Features() {
  const data = [
    {
      logo: "",
      text: "Zyetener is a quick and user-friendly tool that allows you to shorten long URLs. Simply input the lengthy link you want to shorten, and you'll receive a shortened URL in no time."
    }, {
      logo: "",
      text: "Works seamlessly across a variety of devices, including smartphones, tablets, and desktop computers."
    }, {
      logo: "",
      text: "Our service prioritizes both speed and security. We employ the HTTPS protocol and data encryption to ensure that your data is protected while using our platform."
    }, {
      logo: "",
      text: "Any links attempting to distribute spam, viruses, or malware are promptly removed from our platform."
    },{
      logo: "",
      text: "No matter the length of the link, Zyetener can always shorten it for you."
    },
  ]
  return (
    <>
      <div>
        {data.map(item => (
          <div key={item.id}>
            <img src={item.logo}
                 alt=""/>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;