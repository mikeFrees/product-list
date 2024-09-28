import React from 'react';
import styles from './buttons.module.css';
import { ReactComponent as Increment } from './icons/icon-increment-quantity.svg';
import { ReactComponent as Decrement } from './icons/icon-decrement-quantity.svg';
import { ReactComponent as ShoppingCart } from "./icons/icon-add-to-cart.svg";

function ButtonAddToCart({ onAdd }) {
  return (
      <button className= {styles.addToCart} onClick={onAdd}>
        <ShoppingCart />
        Add to Cart
      </button>
  );
}

function ButtonChangeAmount({ amount, onAdd, onReduce }) {
  return (
      <div className= {styles.changeAmount}>
        <button onClick={onReduce} aria-label='Decrease amount'>
          <Decrement />
        </button>
        <span>{amount}</span>
        <button onClick={onAdd} aria-label='Increase amount'>
          <Increment />
        </button>
      </div>    
  );
}

export function ButtonArticle() {
  const [amount, setAmount] = React.useState(0);

  if (amount === 0) {
    return <ButtonAddToCart onAdd={() => setAmount(amount + 1)} />;
  } else {
    return (
      <ButtonChangeAmount 
        amount={amount} 
        onAdd={ () => setAmount(amount + 1)}
        onReduce={() => setAmount(amount - 1)}
        />
    );
  }
}