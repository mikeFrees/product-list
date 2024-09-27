import React from 'react';
import styles from './buttons.module.css';
import increment from './images/icon-increment-quantity.svg';
import decrement from './images/icon-decrement-quantity.svg';
import shoppingCart from "./images/icon-add-to-cart.svg";

export function ButtonAddToCart({ onAdd }) {
  return (
      <button className= {styles.addToCart} onClick={onAdd}>
        <img src={shoppingCart} alt='a shopping cart logo with a plus sign in it' />
        Add to Cart
      </button>
  );
}

export function ButtonChangeAmount({ amount, onAdd, onReduce }) {
  return (
      <div className= {styles.changeAmount}>
        <button onClick={onReduce} aria-label='Decrease amount'>
          <img src={decrement} alt='a circle with a minus sign in it'></img>
        </button>
        <span>{amount}</span>
        <button onClick={onAdd} aria-label='Increase amount'>
          <img src={increment} alt='a circle with a plus sign in it'></img>
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