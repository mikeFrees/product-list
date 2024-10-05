import * as React from 'react';
import styles from './Confirmation-Card.module.css';
import { ReactComponent as Confirmed } from './icons/icon-order-confirmed.svg';
import { OrderContext } from './App';

export function ConfirmationCard({visible} ) {
  const { order, resetOrder} = React.useContext(OrderContext);
  let orderTotal = 0;

  if (order.length) {
    orderTotal = order.reduce((total, product) => total += product.amount * product.itemPrice, 0);
  }

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const items = order.map( item => (
    <div key={item.itemName} className={styles.item}>
    <img src= {item.image} alt={ item.name }/>
      <h3>{item.itemName}</h3>
      <p>{item.amount}x&nbsp;&nbsp;</p><p>@&nbsp;{USDollar.format(item.itemPrice)}</p><p>&nbsp;&nbsp;{USDollar.format(item.itemPrice * item.amount)}</p>
    </div>
  ));

  return (
    <section className= { visible ? styles.confirmationCard : styles.invisibleConfirmationCard }>
      <Confirmed />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
        { items }
      <p>Order Total{USDollar.format(orderTotal)}</p>
      <button onClick={() => resetOrder()}>Start New Order</button>
    </section>
  );
}