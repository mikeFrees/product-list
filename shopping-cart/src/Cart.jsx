import React from 'react';
import styles from './Cart.module.css';
import {ReactComponent as Tree} from './icons/icon-carbon-neutral.svg';
import { ReactComponent as EmptySlice} from './icons/illustration-empty-cart.svg';
import { ReactComponent as Remove } from './icons/icon-remove-item.svg';
import { OrderContext } from './App';

export function Cart() {

  const { order } = React.useContext(OrderContext);
  let orderTotal = 0, orderItems = 0;

  if (order.length) {
    orderTotal = order.reduce((total, product) => total += product.amount * product.itemPrice, 0);
    orderItems = order.reduce((total, product) => total += product.amount, 0);
  }

  
  
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

function FullCart({orderTotal, orderItems}) {
  const {order, stateChange} = React.useContext(OrderContext);
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const items = order.map( item => (
    <div key={item.itemName}>
      <h3>{item.itemName}</h3>
      <p>{item.amount}x  @{USDollar.format(item.itemPrice)}  {USDollar.format(item.itemPrice * item.amount)}</p>
      <Remove onClick={() => removeArticle(item.itemName)}/>
    </div>
  ));

  return (
    <aside>
      <h2>Your Cart ({orderItems})</h2>

      {items}

      <p>Order Total <span>{USDollar.format(orderTotal)}</span></p>

      <p><Tree />This is a <strong>carbon-neutral</strong> delivery</p>
      <button>Confirm Order</button>
    </aside>
  );

  function removeArticle(item) {
    let oldOrder = [...order];
    let update = false;
    for (let i = 0; i < oldOrder.length; i++) {
      let product = oldOrder[i];
      if (product.itemName === item) {
        update = true;
        oldOrder.splice(i, 1);
      }
    };
    if (update) stateChange(oldOrder);
  }
}