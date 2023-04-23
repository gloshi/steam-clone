import React from "react";
import styles from "../styles/GameReview.module.scss";
import { Link, useParams } from "react-router-dom";
import { ROUTE } from "../utils";
import { getReview } from "../redux/review/reviewSlice";
import { useDispatch, useSelector } from "react-redux";

const GameReview = () => {
  const { id } = useParams();

  const review = useSelector((state) => state.review.listReviews[id - 1]);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  console.log(review);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.name}>{review?.title}</span>
        <Link to={`/game/${id}`}>
          <span className={styles.back}>Страница в магазине</span>
        </Link>
      </div>
      <div className={styles.params}>
        <div>
          <select id="standard-select">
            <option value="Option 1">САМЫЕ ПОЛЕЗНЫЕ</option>
            <option value="Option 2">НЕДАВНИЕ</option>
            <option value="Option 3">ЗАБАВНЫЕ</option>
            <option value="Option 4">Созданное друзьями </option>
          </select>
        </div>
        <div>
          <select id="standard-select">
            <option value="Option 1">ВСЕ</option>
            <option value="Option 2">ТОЛЬКО ПОЛОЖИТЕЛЬНЫЕ</option>
            <option value="Option 3">ТОЛЬКО ОТРИЦАТЕЛЬНЫЕ</option>
          </select>
        </div>
        <span>ЯЗЫК:</span>
        <div>
          <select id="standard-select">
            <option value="Option 2">РУССКИЙ АНГЛИЙСКИЙ</option>
            <option value="Option 1">ВСЕ</option>
            <option value="Option 3">КИТАЙСКИЙ(УПР.)</option>
          </select>
        </div>
        <Link to={ROUTE.INFO}>
          <button>Об обзорах</button>
        </Link>
      </div>

      {
        review? 
        review.text.map(el=>(
          <div key={el.id} className={styles.main}>
        <span>Ещё никто не посчитал этот обзор полезным</span>
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
        : 'loading...'
      }
    </div>
  );
};

export default GameReview;
