import ProductCard from '../components/ProductCard';

function ProductListing() {
  const products = [
    { id: 1, name: 'Organic Honey', description: 'Pure, raw honey sourced directly from local farms, rich in natural antioxidants.' },
    { id: 2, name: 'Handwoven Cotton Scarf', description: 'Soft and lightweight scarf made by local artisans using 100% organic cotton.' },
    { id: 3, name: 'Natural Beeswax Candles', description: 'Eco-friendly candles made from pure beeswax, offering a warm, natural fragrance.' },
    { id: 4, name: 'Herbal Tea Blend', description: 'A soothing blend of locally sourced herbs, perfect for relaxation and stress relief.' },
    { id: 5, name: 'Wooden Spice Box', description: 'Beautiful handcrafted wooden box with multiple compartments for storing spices.' }
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
