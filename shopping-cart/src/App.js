import React from 'react';
import './App.css';
import  {Menu} from './Menu.jsx';
import { Cart } from './Cart.jsx';
import { ConfirmationCard } from './Confirmation-Card.jsx';

export const OrderContext = React.createContext();

function App() {

  // const [order, setOrder] = React.useState([]);
  const [order, setOrder] = React.useState([
    {
      "amount": 2,
      "itemName": "Vanilla Panna Cotta",
      "itemPrice": 6.5,
      "image": "./images/image-panna-cotta-thumbnail.jpg"
    },
    {
      "amount": 1,
      "itemName": "Classic Tiramisu",
      "itemPrice": 5.5,
      "image": "./images/image-tiramisu-thumbnail.jpg"
    },
    {
      "amount": 4,
      "itemName": "Vanilla Bean Crème Brûlée",
      "itemPrice": 7,
      "image": "./images/image-creme-brulee-thumbnail.jpg"
    }
  ]);
  const [amounts, setAmounts] = React.useState({});
  // const [visible, setVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  

  function stateChange(newOrder) {
    setOrder(newOrder);
  }

  function updateAmount(newAmount, itemName) {
    setAmounts(prevAmounts => ({
      ...prevAmounts,
      [itemName]: newAmount
    }));
  }

  function resetOrder() {
    setAmounts({});
    setVisible(false);
    setOrder([]);
  }

  return (
    <OrderContext.Provider value={{order, stateChange, amounts, updateAmount, setVisible, resetOrder}}>
      <div className="App">
        <Menu />
        <Cart order= {order}/>
        <ConfirmationCard visible= { visible }/>
      </div>
    </OrderContext.Provider>
  );
}

export default App;