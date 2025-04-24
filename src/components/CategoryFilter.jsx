const categories = ["All", "Grocery", "Medicines"];

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 sm:gap-4 md:gap-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition ${
            selectedCategory === category
              ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
              : "bg-white text-gray-700 border-gray-300"
          } hover:scale-105 md:text-base md:px-6 md:py-3`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;


