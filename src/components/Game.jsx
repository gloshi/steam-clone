import React, { useRef } from "react";
import styles from "../styles/GamesList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../redux/cart/cartSlice";
import { AiOutlineSmile } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";
import { Link } from "react-router-dom";
const Game = ({ game }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = list.some((item) => item.id === game.id);

  const onClickToCart = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className={styles.game}>
      <Link onClick={() => window.scrollTo(0, 0)} to={`/game/${game.id}`}>
        <img src={game.image} alt="game" />
        <div className={styles.title}>{game.title}</div>

        <div className={styles.price}>
          от {(game.price * 0.8).toFixed(0)} руб.
        </div>
        <div className={styles.categories}>
          {game.genres.map((el) => (
            <div key={el}>{el}</div>
          ))}
        </div>
        <div className={styles.imgBox}></div>
      </Link>
      <button  onClick={(e) => onClickToCart(e)} className={styles.btnRemove}>
        {isItemInCart ? "Убрать из корзины" : "Добавить в корзину"}
      </button>
    </div>
  );
};

export default Game;
