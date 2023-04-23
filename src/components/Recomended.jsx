import React from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../redux/data/dataSlice";
import styles from '../styles/Recomended.module.scss'
import { Link } from "react-router-dom";

const Recomended = ({item}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  

  return <div className={styles.container}>
   <Link onClick={() => window.scrollTo(0, 0)} to={`/game/${item.id}`}>
    <div className={styles.item}>
        <img src={item.image} alt="game" />
        <div className={styles.title}>    {item.title}</div>
    </div>
    </Link>
  </div>;
};

export default Recomended;
