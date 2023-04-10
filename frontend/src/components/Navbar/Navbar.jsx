import React from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.logo}
           href=""><b>ZY</b>tener</a>
        <div className={styles.right}>
          <a href="#">Github</a>
          <a href="#">Gulu Gulu ?</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;