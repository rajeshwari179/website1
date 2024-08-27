'use client'
import React, {useEffect, useState}from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbarlink from "./Navbarlink";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div id = "navbar" className={styles.navbar}>
      <Navbarlink href="/" text="Home" path={pathname}/>
      <Navbarlink href="/about" text="Experience" path={pathname}/>
      <Navbarlink href="/project" text="Projects" path={pathname}/>
      <Navbarlink href="/designs" text="Designs" path={pathname}/>
    
     </div>
  );
};

export default Navbar;
