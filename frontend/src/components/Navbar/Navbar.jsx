import React from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="#">Logo</a>
        <div className={styles.right}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;