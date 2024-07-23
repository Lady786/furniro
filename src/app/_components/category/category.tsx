interface CategoryData {
  id: string;
  name: string;
  image: string;
}

async function fetchCategories(): Promise<CategoryData[]> {
  const response = await fetch(
    "https://ecommerce-backend-fawn-eight.vercel.app/api/categories"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Category() {
  const data: CategoryData[] = await fetchCategories();
  return (
    <div className="flex items-center justify-between">
      {data.map((e: CategoryData) => (
        <div
          key={e.id}
          className="w-[350px] h-[400px] transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            src={e.image}
            alt={e.name}
            className="w-full h-full rounded-lg"
          />
          <p className="text-center text-[24px] font-[600] mt-5 font-poppins">
            {e.name}
          </p>
        </div>
      ))}
    </div>
  );
}
