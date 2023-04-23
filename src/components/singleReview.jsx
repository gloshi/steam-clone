import React from 'react'
import styles from "../styles/GameReview.module.scss";

const SingleReview = ({review,title}) => {

  console.log(title)
  return (
    <>
   
    {

        review?.text.map(el=>(
          <div key={el.id} className={styles.main}>
        <span>Игра: {title}</span>
        <div className={styles.logoGameRec}>
          <img src="/img/logoGameRec.svg" alt="logoGameRec" />
          <img
            className={el.rating>4 ? styles.like : styles.unlike}
            src="/img/like.svg"
            alt="like"
          />
          <div>
            <div>{el.rating>4 ? "Рекомендую" : "Не рекомендую"} </div>
            <div>12.3 ч. всего</div>
          </div>
        </div>
        <div className={styles.date}>
          <div>Опубликовано: 12 сентрября</div>
        </div>
        <div className={styles.text}>
         {el.text}
        </div>
        <div className={styles.user}>
          <div className={styles.userProfile}>
            <img src="/img/user.svg" alt="user" />
            <div className={styles.username}>
              gleb
              <span>Продуктов на аккаунте: 193</span>
            </div>
          </div>
          <div>
            <div className={styles.icon}>
              <img src="/img/dialog.svg" alt="" />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
        ))

      }
        </>
  )


}

export default SingleReview