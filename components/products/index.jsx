import Link from "next/link";
import { useRouter } from "next/router";
import ProductDetail from "../products/productDetail/productDetail";
import { products } from "../../constants/products";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const isNewProduct = product.cat && product.cat.includes("new");
  const hasDiscount = product.discount > 0;

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  const handleBrandClick = () => {
    router.push(product.brand);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer relative">
        <div className="relative bg-[#F9F9F9]">
          {isNewProduct && (
            <span className="absolute top-0 left-0 bg-[#FFC8CB] text-black text-xs px-2 py-1 rounded-md m-2 uppercase">
              New
            </span>
          )}
          {hasDiscount && (
            <span
              className={`absolute ${
                isNewProduct ? "top-[calc(5%+10px)]" : "top-0"
              } left-0 bg-[#C8E8FF] text-black text-xs px-2 py-1 rounded-md m-2`}
            >
              -{product.discount}%
            </span>
          )}
          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-full object-contain object-center"
              style={{ height: "400px" }}
            />
          </div>
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center mt-1">
            <span
              className="brand-link text-black cursor-pointer"
              onClick={handleBrandClick}
            >
              {product.brand}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-black">{product.name}</h3>
          <div className="flex">
            {hasDiscount ? (
              <>
                <p className="text-black text-lg mt-auto line-through mr-2">
                  {product.price.toFixed(2)}
                </p>
                <p className="text-red-500 text-lg mt-auto">
                  {(
                    product.price -
                    (product.price * product.discount) / 100
                  ).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-black text-lg mt-auto">
                {product.price.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4 mt-[10vh]">
      <h2 className="text-3xl font-bold text-black mb-12">New collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
