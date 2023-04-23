import styles from "../styles/Footer.module.scss";

import React from 'react'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
          <h1>Newsletter</h1>
          <input type="text" placeholder='email...'  />
          <img src="/img/arrow.svg" alt="" />
          <span>Sign up to our newsletter for special things and receive 10% off your next order.</span>
          <div>© 2023 gloshi</div>
      </div>
      <div className={styles.right}>
        <div className={styles.policy}>
          <span>TERMS AND CONDITIONS</span>
          <span>CENCELLATION POLICY</span>
          <span>PRIVACY POLICY</span>
        </div>
        <div className={styles.icons}>
          <img src="/img/paypal-logo.svg" alt="" />
          <img src="/img/master.svg" alt="" />
          <img src="/img/visa.svg" alt="" />
          <img src="/img/bank.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer