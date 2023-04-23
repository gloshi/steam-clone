import React from "react";
import styles from "../styles/GamesList.module.scss";
import Game from "./Game";
import { useSelector } from "react-redux";
import GamesHomeSkeleton from "../skeletons/GamesHomeSkeleton";

const GamesList = () => {
  const items = useSelector((state) => state.game.listGames);
  const isLoad = useSelector((state) => state.game.isLoading);
  const search = useSelector((state) => state.params.searchValue);
  const categoriesValue = useSelector((state) => state.params.categoriesValue);


  return (
    <div className={styles.container}>
      <div className={styles.gameGrid}>
        {isLoad ? (
          <>
            <GamesHomeSkeleton />
            <GamesHomeSkeleton />
            <GamesHomeSkeleton />
          </>
        ) : (
          items
            ?.filter((el) => {
              if (categoriesValue === "Все") {
                return true;
              } else if (el.genres.find((el) => el === categoriesValue)) {
                return true;
              }
              return false;
            })
            .filter((el) => {
              if (el.title.toLowerCase().includes(search.toLowerCase())) {
                return true;
              }
              return false;
            })
            .map((game) => <Game game={game} key={game.id} />)
        )}
      </div>
    </div>
  );
};

export default GamesList;
