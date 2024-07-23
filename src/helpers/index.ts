export interface ProductData {
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

export const getSingleProduct = async (): Promise<ProductData[]> => {
  const response = await fetch(
    "https://ecommerce-backend-fawn-eight.vercel.app/api/products"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getSingleProductById = async (
  _id: string
): Promise<ProductData> => {
  const items = await getSingleProduct();
  const singleItem = items.find((item) => item._id === _id);
  if (!singleItem) {
    throw new Error("Product not found");
  }
  return singleItem;
};
