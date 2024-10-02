import React from 'react';
import './App.css';
import  {Menu} from './Menu.jsx';
import { Cart } from './Cart.jsx';

export const OrderContext = React.createContext();

function App() {

  const [order, setOrder] = React.useState([]);

  function stateChange(newOrder) {
    setOrder(newOrder);
  }

  return (
    <OrderContext.Provider value={{order, stateChange}}>
      <div className="App">
        <Menu />
        <Cart order= {order}/>
      </div>
    </OrderContext.Provider>
  );
}

export default App;