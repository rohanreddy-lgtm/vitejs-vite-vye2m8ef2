import ViewProductButton from "../components/Button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150"; // Dummy product image
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm bg-white">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-3">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;