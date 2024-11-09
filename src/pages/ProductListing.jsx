import ProductCard from '../components/ProductCard';

function ProductListing() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
