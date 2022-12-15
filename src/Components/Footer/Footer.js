import React from 'react'
import styles from "./Footer.module.css"
import { AiFillHeart } from "react-icons/ai";
function Footer() {
  return (
    <footer className={styles.footer}>
      <h4> Made by Moises with  <AiFillHeart className={styles.heart}/> </h4>
    </footer>
  )
}

export default Footer