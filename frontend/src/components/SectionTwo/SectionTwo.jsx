import React, {useRef} from 'react';
import styles from './SectionTwo.module.css';
import image1 from '../../assets/qr.png';
import '../../index.css';
import {QRCodeSVG} from 'qrcode.react';

function SectionTwo(props) {
  const svgRef = useRef(null);
  const {shortURL} = props;
  const downloadQRCode = () => {
    const svg = svgRef.current.querySelector('svg');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngData;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>
          <div ref={svgRef}>
            <QRCodeSVG className={styles.image}
                       value={shortURL}
                       size={256}/>
          </div>
          <button className={'button'}
                  onClick={downloadQRCode}>
            Download
          </button>
        </div>
        <div className={`${styles.column} ${styles.hiddenSmall}`}>
          <img className={`${styles.image} ${styles.hiddenSmall}`}
               src={image1}/>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
