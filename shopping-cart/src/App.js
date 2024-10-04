import React from 'react';
import './App.css';
import  {Menu} from './Menu.jsx';
import { Cart } from './Cart.jsx';

export const OrderContext = React.createContext();

function App() {

  const [order, setOrder] = React.useState([]);
  const [amounts, setAmounts] = React.useState({});

  function stateChange(newOrder) {
    setOrder(newOrder);
  }

  function updateAmount(newAmount, itemName) {
    setAmounts(prevAmounts => ({
      ...prevAmounts,
      [itemName]: newAmount
    }));
  }

  return (
    <OrderContext.Provider value={{order, stateChange, amounts, updateAmount}}>
      <div className="App">
        <Menu />
        <Cart order= {order}/>
      </div>
    </OrderContext.Provider>
  );
}

export default App;