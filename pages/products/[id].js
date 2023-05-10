import Navbar from "../../components/Navbar/index";
import { useRouter } from "next/router";
import { products } from "../../constants/products";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the product based on the ID parameter
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto my-8 px-4 h-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-[10vh] md:ml-8">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-lg text-gray-600 mb-4">Brand: {product.brand}</p>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="flex space-x-2 mb-4">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-pink-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg font-bold text-black">
              Price: $
              {(
                product.price -
                (product.price * product.discount) / 100
              ).toFixed(2)}
            </p>
            <button
              className="bg-[#FFC8CB] text-black font-semibold px-4 py-2 rounded-md mt-4 hover:bg-[#ba8083] hover:text-white"
              onClick={() => addToCart(product)}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
