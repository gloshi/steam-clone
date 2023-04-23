import React, { useState } from 'react'
import styles from '../styles/Faq.module.scss'

const Faq = () => {

    const [open,setOpen] = useState({
      prices: true,
      walkUp: false,
      capacity: false,
      pets: false,
      check: false,
    })
  
  
    return (
      <div className={styles.container}>
        <div className={styles.Box}>
          Цены
          <img onClick={()=>setOpen(open => ({...open, prices: !open.prices}))} src={!open.prices? "/img/arrowDown.svg" : "/img/arrowUp.svg"} alt="arrowFaq" />
        </div>
        {open.prices ? (
          <div className={styles.info}>
            <h1>CANCELLATION POLICY</h1>
            <span>
            В разных странах налогообложение электронных операций происходит по-разному. В конечном счёте ответственность за уплату налогов полностью лежит на вас. Если вы не уверены, нужно ли платить налоги, посоветуйтесь со специалистом.
            </span>
          </div>
        ) : (
          ""
        )}
        <div className={styles.Box}>
        Следите лучше за собой
          <img onClick={()=>setOpen(open => ({...open, walkUp: !open.walkUp}))} src={!open.walkUp? "/img/arrowDown.svg" : "/img/arrowUp.svg"} alt="arrowFaq" />
        </div>
        {open.walkUp ? (
          <div className={styles.info}>
            <h1>CANCELLATION POLICY</h1>
            <span>
            Модерацией занимаются модераторы. Попытки участников, которые не являются модераторами, наводить порядок на форумах, нами не приветствуются. Если кто-то нарушает правила, воспользуйтесь кнопкой «Пожаловаться»  или проигнорируйте оскорбительное сообщение, тему или обзор.

            </span>
          </div>
        ) : (
          ""
        )}
         <div className={styles.Box}>
         Сообщайте модераторам о нарушениях
          <img  onClick={()=>setOpen(open => ({...open, capacity: !open.capacity}))} src={!open.capacity? "/img/arrowDown.svg" : "/img/arrowUp.svg"} alt="arrowFaq" />
        </div>
        {open.capacity ? (
          <div className={styles.info}>
            <h1>CANCELLATION POLICY</h1>
            <span>
            Если вы заметите, что кто-то нарушает правила и принципы, описанные выше, сообщите об этом, нажав на кнопку «Пожаловаться»,  которая находится под каждым предметом, сообщением или обзором.

            </span>
          </div>
        ) : (
          ""
        )}
        <div className={styles.Box}>
        Ответственность за нарушения

          <img onClick={()=>setOpen(open => ({...open, pets: !open.pets}))} src={!open.pets? "/img/arrowDown.svg" : "/img/arrowUp.svg"} alt="arrowFaq" />
        </div>
        {open.pets ? (
          <div className={styles.info}>
            <h1>CANCELLATION POLICY</h1>
            <span>
            За постоянные нарушения правил и принципов Steam нарушитель будет заблокирован в сообществе Steam. Любой модератор имеет право по своему усмотрению заблокировать нарушителя.
            </span>
          </div>
        ) : (
          ""
        )}
         <div className={styles.Box}>
         CHECK-IN / CHECK-OUT
          <img onClick={()=>setOpen(open => ({...open, check: !open.check}))} src={!open.check? "/img/arrowDown.svg" : "/img/arrowUp.svg"} alt="arrowFaq" />
        </div>
        {open.check ? (
          <div className={styles.info}>
            <h1>CANCELLATION POLICY</h1>
            <span>
              Cancellation four weeks prior = 100% refund Cancellation two weeks
              prior = 50% refund Cancellation later than two weeks = full payment
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

export default Faq