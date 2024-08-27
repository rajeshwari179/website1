import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link"; 
const Navbarlink = ({href, text, path}) => {
  if(path === href){
    return (
      <p key = {text} className={styles.active}>{text}</p>
    );

  }
  else{
    return (
      
        <p key = {text}className={styles.inactive}>
        <Link href={href}>{text}</Link>
        </p>
      
    );
  }
};
export default Navbarlink;
