import React from "react";
import "../styles/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {BsFillCartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { ROUTE } from "../utils";
import { deleteItemFromCart } from "../redux/cart/cartSlice";

const Cart = () => {
  const list = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch()

  const totalPrice = list.reduce((acc,red) => acc+=red.price, 0)
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-title">Shopping Cart <BsFillCartFill/></div>
        <div className="project">
          {
            list.length > 0? <div className="shop">
            {list?.map((el) => (

              <div className="box" key={el.id}>
                <img src={el.image} alt="imgGame" />
                <div className="content">
                  <h3>{el.title}</h3>
                  <h4>Price: {el.price} руб.</h4>
                  <p className="btn-area">
                    <i aria-hidden="true" className="fa fa-trash" />
                    <span className="btn2" onClick={()=>dispatch(deleteItemFromCart(el.id))} >Remove</span>
                  </p>
                </div>
              </div>

            ))}
          </div> : <div className="noItems"><div> Ваша корзина пуста... ☹️</div> <Link to={ROUTE.HOME}><button>Вернуться в магазин</button></Link></div>
          }
          
            {
              list.length > 0?   <div className="right-bar">
              <p>
                <span>Subtotal</span> <span>{totalPrice} руб.</span>
              </p>
              <hr />
              <p>
                <span>Скидка (5%)</span> <span>{(totalPrice * 0.05).toFixed(0)} руб.</span>
              </p>
              <hr />
              <p>
                <span>Кол-во игр: </span> <span>{list.length }</span>
              </p>
              <hr />
              <p>
                <span>Итого</span> <span>{(totalPrice * 0.95).toFixed(0)} руб.</span>
              </p>
              <a href="#">
                <i className="fa fa-shopping-cart" />
                Checkout
              </a>
            </div> : ''
            }
         
        </div>
      </div>
    </div>
  );
};

export default Cart;
