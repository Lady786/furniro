import AddToCartBtn from "../AddToCartBtn";
import Link from "next/link";

interface ProductData {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  rate: number;
  price: number;
  color: string;
  size: string;
}

async function fetchProducts(): Promise<ProductData[]> {
  const response = await fetch(
    "https://ecommerce-backend-fawn-eight.vercel.app/api/products"
  );
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
}

export default async function Product({ limit }: { limit?: number }) {
  const data: ProductData[] = await fetchProducts();
  const displayedProducts = limit ? data.slice(0, limit) : data;

  return (
    <div className="grid grid-cols-4 gap-6">
      {displayedProducts.map((product) => (
        <div
          key={product._id}
          className="bg-[#F4F5F7] pb-4 rounded-lg shadow-sm mb-3 transform transition-transform hover:scale-105"
        >
          <Link
            href={{ pathname: "/singleproduct", query: { _id: product._id } }}
          >
            <img
              className="object-fit w-full h-[300px] rounded-t-lg"
              src={product.image}
              alt={product.title}
            />
            <div className="flex flex-col gap-1 pl-4 pb-3 rounded-b-lg">
              <h2 className="font-poppins capitalize text-[24px] font-[600]">
                {product.title}
              </h2>
              <h3 className="font-poppins capitalize text-[16px] font-[500]">
                {product.subtitle}
              </h3>
              <p className="font-poppins capitalize text-[20px] font-[600]">
                RP {product.price}
              </p>
            </div>
          </Link>
          <AddToCartBtn
            product={{
              _id: product._id,
              title: product.title,
              subtitle: product.subtitle,
              image: product.image,
              description: product.description,
              rate: product.rate,
              price: product.price,
              color: product.color,
              size: product.size,
            }}
          />
        </div>
      ))}
    </div>
  );
}
