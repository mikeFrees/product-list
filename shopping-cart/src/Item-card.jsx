import React from 'react';
import styles from './Item-card.module.css';
import  {ButtonArticle} from './Buttons';

export function ItemCard({ item }) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <article className={styles.itemCard}>
      <img src={item.image.desktop} alt={item.name} className={styles.itemImage} />
      <ButtonArticle />
      <div className={styles.itemDetails}>
        <h2 className={styles.itemCategory}>{item.category}</h2>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>{USDollar.format(item.price)}</p>
      </div>
    </article>
  );
}