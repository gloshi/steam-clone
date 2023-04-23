import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/GameReview.module.scss";
import { ROUTE } from "../utils";
import { Link } from "react-router-dom";
import SingleReview from "./singleReview";
import { getReview } from "../redux/review/reviewSlice";

const Explore = () => {
  const review = useSelector((state) => state.review.listReviews);
  console.log(review);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.name}>ВСЕ ОБЗОРЫ</span>
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
      {review.lenght === 0 ? (
        "Идет загрузка..."
      ) : (
        <>
          {
            review?.map(el => (
              <SingleReview key={el.id} review={el} title={el.title} />
            ))
          }
        </>
      )}
    </div>
  );
};
export default Explore;
