import React from "react";
import styles from "../styles/Info.module.scss";
import ReactPlayer from "react-player";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.steam}>
        <div className={styles.icon}>
            <img src="https://cdn.akamai.steamstatic.com/store//about/logo_steam.svg" alt="logo" />
        </div>
        <div className={styles.title}>
        Steam — превосходная платформа для <br />
        игроков и разработчиков.
        </div>
        <div className={styles.online}>
        <div className={styles.players}>
        <div className={styles.blue}></div>
          В сети: <br />
          29,000,000
        </div>
        <div className={styles.inGame} >
          <div className={styles.green}></div>
           В игре: <br />
          9,000,000
        </div>
        </div>
        <button>Загрузить steam</button>
      </div>
      <div className={styles.video}>
        <ReactPlayer
         
          playing={true}
          muted={true}
          url={
            "https://cdn.akamai.steamstatic.com/store/about/videos/about_hero_loop_web.webm"
          }
        />
      </div>
    </div>
  );
};

export default Info;
