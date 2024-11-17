import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductListing from './pages/ProductListing';
import InventoryManagement from './pages/InventoryManagement';
import OrderManagement from './pages/OrderManagement';
import Recommendations from './pages/Recommendations';
import Analytics from './pages/Analytics';
import Contact from './pages/Contact';
import ItemListing from './pages/ItemsList';
import CartPage from './pages/CartPage';
import { CartProvider } from './Constants/Values/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/products/:category' element={<ItemListing/>}/>
            <Route path='/cart' element={<CartPage/>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
