import React from "react";
import styles from "../styles/NavBar.module.scss";
import { ImDownload } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import {CiDark} from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../utils";
const NavBar = () => {
  const liArr = [
    { id: 1, title: "SHOP" },
    { id: 2, title: "EXPLORE" },
    { id: 3, title: "CART" },
    { id: 4, title: "INFO" },
    { id: 5, title: "FAQ" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.leftBar}>
        <Link to={ROUTE.HOME}>
        <img src="/img/logo.png" alt="logo" />
        </Link>
        <Link to={ROUTE.HOME}>
        <h1>GAMES</h1>
        </Link>
        <div className={styles.categories}>
          <ul>
            {liArr.map((el) => (
              <Link key={el.id} to={el.title.toLowerCase() === 'shop'? ROUTE.HOME : el.title.toLowerCase()}>
              <li > {el.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.rightBar}>
          <div className={styles.download}><ImDownload />Скачать приложение</div>
          <div className={styles.login}>Войти</div>
          <div className={styles.language}><BiWorld size={30} />Язык</div>
          <div className={styles.dark}>{true? <CiDark size={30} /> : <MdDarkMode size={30}/>}</div>
      </div>
      
    </div>
  );
};

export default NavBar;
