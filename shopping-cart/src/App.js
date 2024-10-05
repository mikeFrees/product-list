import React from 'react';
import './App.css';
import  {Menu} from './Menu.jsx';
import { Cart } from './Cart.jsx';
import { ConfirmationCard } from './Confirmation-Card.jsx';

export const OrderContext = React.createContext();

function App() {

  const [order, setOrder] = React.useState([]);
  const [amounts, setAmounts] = React.useState({});
  const [visible, setVisible] = React.useState(false);

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