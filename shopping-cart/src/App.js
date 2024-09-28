import './App.css';
import  {ItemCard} from './Item-card.jsx';
import './variables.css'

function App() {
  return (
    <div className="App">
      <ItemCard item={    {
       "image": {
            "thumbnail": "/images/image-waffle-thumbnail.jpg",
            "mobile": "/images/image-waffle-mobile.jpg",
            "tablet": "/images/image-waffle-tablet.jpg",
            "desktop": "/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    }}></ItemCard>
    </div>
  );
}

export default App;