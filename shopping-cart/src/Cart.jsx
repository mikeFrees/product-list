import React from 'react';
import styles from './Cart.module.css';
import {ReactComponent as Tree} from './icons/icon-carbon-neutral.svg';
import { ReactComponent as EmptySlice} from './icons/illustration-empty-cart.svg';
import { ReactComponent as Remove } from './icons/icon-remove-item.svg';

export function Cart({order}) {

  const orderTotal = order.reduce((total, product) => total += product.amount * product.itemPrice, 0);
  const orderItems = order.reduce((total, product) => total += product.amount, 0);
  
  if (orderTotal === 0) {
    return (<EmptyCart />);
  } else {
    return (<FullCart order= {order} orderTotal= {orderTotal} orderItems= {orderItems}/>);
  }
};

function EmptyCart() {

  return (
    <aside className={styles.emptyCart}>
      <h2>Your Cart (0)</h2>
      <EmptySlice />
      <p>Your added items will appear here</p>
    </aside>
  );
}

function FullCart({order, orderTotal, orderItems}) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const items = order.map( item => (
    <div>
      <h3>{item.itemName}</h3>
      <p>{item.amount}x  @{USDollar.format(item.itemPrice)}  {USDollar.format(item.itemPrice * item.amount)}</p>
      <Remove />
    </div>
  ));

  return (
    <aside>
      <h2>Your Cart ({orderItems})</h2>

      {items}

      <p>Order Total <span>{USDollar.format(orderTotal)}</span></p>

      <p><Tree />This is a <bold>carbon-neutral</bold> delivery</p>
      <button>Confirm Order</button>
    </aside>
  );
}