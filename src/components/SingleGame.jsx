import React from "react";
import styles from "../styles/SingleGame.module.scss";
import { Link, useParams } from "react-router-dom";
import Recomended from "./Recomended";
import bg from "../fest.png";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../redux/cart/cartSlice";
import { getGames } from "../redux/data/dataSlice";
import { getReview } from "../redux/review/reviewSlice";
import SliderImg from "./Slider";

const SingleGame = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getGames());
    dispatch(getReview());
  }, [dispatch]);
  let { id } = useParams();

  const item = useSelector((state) => state.game.listGames[id - 1]);
  const review = useSelector((state) => state.review.listReviews[id - 1])
  const items = useSelector((state) => state.game.listGames);

 

  const onClickToCart = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(item));
    } else {
      dispatch(setItemInCart(item));
    }
  };

  const randomIndex = Math.round((Math.random() * 2 ))
  const randomTime = Math.round((Math.random() * 30 ))

  const list = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = list.some((el) => el.id === item.id);
  const likes =  review? review?.text[randomIndex].rating : ''


  function generateUniqueRandomNumbers(rangeMin, rangeMax, count) {
    const randomNumbers = [];
  
    while (randomNumbers.length < count) {
      const num = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
  
      if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
      }
    }
  
    return randomNumbers;
  }
  
  const uniqueRandomNumbers = generateUniqueRandomNumbers(0, 5, 3);
  
  return (
    <div className={styles.container}>
      {item ? (
        <>
          <h4 className={styles.mainTitle}>{item?.title}</h4>
          <div className={styles.game}>
            <div className={styles.left}>
              <div className={styles.mainImg}>
                <ReactPlayer
                  width={854}
                  height={543}
                  playing={true}
                  muted={true}
                  controls={true}
                  url={item?.video}
                />
              </div>

             
            </div>

            <div className={styles.right}>
              <div className={styles.logosRecomend}>
                <div className={styles.logoGameRec}>
                  <img  src="/img/logoGameRec.svg" alt="logoGameRec" />
                  <img className={likes>4? styles.like : styles.unlike} src="/img/like.svg" alt="like" />
                </div>
                <div className={styles.Recommended}>
                  <h3>Recommended</h3>
                  <div>23.1 hrs on record</div>
                </div>
                <div>
                  <img src="/img/steamLogo.svg" alt="steamLogo" />
                </div>
              </div>
              <div className={styles.textRec}>
                <div className={styles.date}>POSTED: {randomTime} SEPTEMBER</div>
                <div className={styles.text}>
                 { review?
                  review.text[randomIndex].text : 'loading...'
                 }
                </div>
                <div className={styles.readMore}>
                  <Link to={`/review/${item.id}`}>
                  <span>Read more...</span>
                  </Link>
                </div>
                <div className={styles.stats}>
                  <span>381 people found this review helpful</span>
                  <span>59 people found this review funny</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
           
            <SliderImg img={item.image}/>
            
          </div>
          <div className={styles.info}>
            <div className={styles.leftGame}>
              <div className={styles.titleGame}>{item.title}</div>
              <div className={styles.descGame}>{item.description}</div>
              <div className={styles.window}>
                <img
                  src="/img/Windows_logo_2012-Black.svg"
                  alt="Windows_logo_2012"
                />
              </div>
            </div>
            <div className={styles.prices}>
                <div className={styles.green}>-50%</div>
                <div className={styles.blue}>
                  <div className={styles.sale}>{item?.price} руб.</div>
                  <div className={styles.price}>
                    {(item?.price * 0.8).toFixed(0)}руб.
                  </div>
                </div>
              </div>
            <div className={styles.rigthGame}>
              <div className={styles.genres}>
                <h6>Популярные метки для этого продукта:</h6>
                <div className={styles.categories}>
                  {item.genres === undefined
                    ? ""
                    : item?.genres.map((el, id) => <div key={id}>{el}</div>)}
                </div>
              </div>
              <button
                onClick={(e) => onClickToCart(e)}
                className={styles.addToCart}
              >
                <div>ДОБАВИТЬ В КОРЗИНУ</div>
                <p>ПРОДОЛЖАЕТСЯ НЕДЕЛЯ! Предложение заканчивается 10 октября</p>
              </button>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className={styles.fest}
          >
            <div>
              <div className={styles.icon}>
                <img src="/img/steam.svg" alt="steam" />
              </div>
              <div className={styles.titleFest}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.titleFestDiv}>FEST</div>
              </div>
            </div>
            <div>
              <div className={styles.festDate}>
                OCT . 03 - OCT . 10 @10AM PACIFIC
              </div>
              <div className={styles.celebration}>
                A CELEBRATION OF UPCOMING GAMES
              </div>
            </div>
          </div>
          <div className={styles.featured}>FEATURED & RECOMMENDED</div>
          <div className={styles.RECOMMENDED}>
           <Recomended item={items[uniqueRandomNumbers[0]]} />
           <Recomended item={items[uniqueRandomNumbers[1]]} />
           <Recomended item={items[uniqueRandomNumbers[2]]} />
           </div>
        </>
      ) : (
        "идет загрузка..."
      )}
    </div>
  );
};


export default SingleGame;
