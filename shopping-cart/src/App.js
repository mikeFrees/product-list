import './App.css';
import  {Menu} from './Menu.jsx';
import { Cart } from './Cart.jsx';

function App() {

  const order = [
    {
      amount: 0,
      itemName: 'Classic Tiramisu',
      itemPrice: 5.5,
    },
    {
      amount: 0,
      itemName: 'Classic Tiramisu',
      itemPrice: 5.5,
    }
  ];

  return (
    <div className="App">
      <Cart order= {order}/>
    </div>
  );
}

export default App;