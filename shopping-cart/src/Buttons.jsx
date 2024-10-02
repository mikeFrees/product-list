import React from 'react';
import styles from './buttons.module.css';
import { ReactComponent as Increment } from './icons/icon-increment-quantity.svg';
import { ReactComponent as Decrement } from './icons/icon-decrement-quantity.svg';
import { ReactComponent as ShoppingCart } from "./icons/icon-add-to-cart.svg";
import { OrderContext } from './App';

function ButtonAddToCart({ onAdd }) {
  return (
      <button className= {styles.addToCart} onClick={onAdd}>
        <ShoppingCart />
        <p>Add to Cart</p>
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

export function ButtonArticle({item}) {
  const {order, stateChange} = React.useContext(OrderContext);
  const [amount, setAmount] = React.useState(0);

  if (amount === 0) {
    return <ButtonAddToCart onAdd={() => updateOrder(true)} />;
  } else {
    return (
      <ButtonChangeAmount 
        amount={amount} 
        onAdd={ () => updateOrder(true)}
        onReduce={() => updateOrder(false)}
        />
    );
  }

  function updateOrder(increment) {
    increment ? setAmount(amount + 1) : setAmount(amount - 1);
    let oldOrder = [...order];
    let update = false;
    for (let i = 0; i < oldOrder.length; i++) {
      let product = oldOrder[i];
      if (product.itemName === item.name) {
        increment ? product.amount += 1 : product.amount -= 1;
        update = true;
        if (product.amount === 0) {
          oldOrder.splice(i, 1);
        }
      }
    };
    const newOrder = {
      amount: 1,
      itemName: item.name,
      itemPrice: item.price,
    };
    update ? stateChange(oldOrder) : stateChange([...oldOrder, newOrder]);
  }
}