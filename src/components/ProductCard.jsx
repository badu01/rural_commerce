function ProductCard({ product }) {
    return (
      <div className="border p-4 rounded-lg bg-pastelGreen shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    );
  }
  
  export default ProductCard;
  