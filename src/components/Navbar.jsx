import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-pastelBlue p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">UEP Platform</h1>
      <div className="space-x-4 text-gray-700">
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <Link to="/products" className="hover:text-gray-900">Products</Link>
        <Link to="/inventory" className="hover:text-gray-900">Inventory</Link>
        <Link to="/orders" className="hover:text-gray-900">Orders</Link>
        <Link to="/analytics" className="hover:text-gray-900">Analytics</Link>
        <Link to="/contact" className="hover:text-gray-900">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
