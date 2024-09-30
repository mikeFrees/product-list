import React from 'react';
import styles from './Menu.module.css';
import { ItemCard } from './Item-card';
import data from './data.json';

export function Menu() {
  const menuItems = data.map(item => (
    <ItemCard key={item.name} item={item}></ItemCard>
  ))
  return (
    <>
    <h1>Desserts</h1>
    <main className={styles.menu}>
      {menuItems}
    </main> 
    </>
  );
}