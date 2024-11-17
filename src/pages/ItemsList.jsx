import { useParams } from "react-router-dom";
import { categories } from "../Constants/APIs/API";
import ItemCard from "../components/ItemCard";

function ItemListing() {
  const { category } = useParams();
  const selectedCategory = categories.find((cat) => cat.title === category);
  console.log(selectedCategory);

  if (!selectedCategory) {
    return <p>Category not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl mt-20 font-bold text-gray-800 mb-4">
        {selectedCategory.title}
      </h1>
      <p className="text-gray-600 mb-6">{selectedCategory.desc}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16">
        {selectedCategory.items.map((product) => (
          <ItemCard product={product}/>
        ))}
      </div>
    </div>
  );
}

export default ItemListing;
