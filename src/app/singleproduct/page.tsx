import { getSingleProductById } from "@/helpers";
import Link from "next/link";
import pic1 from "../../../public/singleProductImages/Group 94.png";
import pic2 from "../../../public/singleProductImages/Group 96.png";
import pic3 from "../../../public/singleProductImages/Group 97.png";
import pic4 from "../../../public/singleProductImages/Group 98.png";
import star from "../../../public/singleProductImages/Group 88.png";
import sofa from "../../../public/singleProductImages/Group 109.png";
import Product from "../_components/products/products";
import AddToCartBtn from "../_components/AddToCartBtn";

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

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _id = searchParams?._id as string;
  const product: ProductData | null = await getSingleProductById(_id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div>
        <div className="container h-[100px]  bg-[#F9F1E7] pt-[30px]">
          <ul className="flex items-center gap-[60px]">
            <li className="text-base font-medium font-poppins">
              <Link className="text-[#9F9F9F]" href={"/"}>
                Home |
              </Link>
            </li>
            <li className="text-base font-medium font-poppins">
              <Link className="text-[#9F9F9F]" href={"/shop"}>
                Shop |
              </Link>
            </li>
            <h1>{product.title}</h1>
          </ul>
        </div>
        <div className="container h-[820px]  flex justify-between mt-[50px]">
          <div className="w-[553px] h-[500px] flex justify-around ">
            <div className="w-[76px] h-[416px]  flex flex-col justify-between ">
              <img src={pic1.src} alt="" />
              <img src={pic2.src} alt="" />
              <img src={pic3.src} alt="" />
              <img src={pic4.src} alt="" />
            </div>
            <div className="w-[423px] h-[500px] ">
              <img
                src={product.image}
                alt={product.title}
                className="product-image flex w-[423px] h-[500px]"
              />
            </div>
          </div>

          <div className="w-[600px] h-[700px]  flex flex-col justify-between ">
            <h1 className="text-[42px] font-poppins font-regular">
              {product.title}
            </h1>
            <p className="text-[#9F9F9F] text-[24px]">Rs.{product.price}</p>
            <div className="flex justify-between w-[350px] ">
              <img src={star.src} alt="" />
              <div className="border "></div>
              <p className="text-[#9F9F9F] text-[13px]">
                {product.rate} Customer Review
              </p>
            </div>
            <p className="font-poppins text-[13px] font-regular w-[424px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p className="text-[#9F9F9F]">Size:</p>
            <p>{product.size}</p>
            <p className="text-[#9F9F9F]">Color</p>
            <p>{product.color}</p>
            <div className="w-[500px] flex justify-between">
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
              {/* <button className="w-[215px] text-slate-950 h-[64px] border-2 rounded-2xl   hover:bg-[#B88E2F] hover:text-white transition duration-300">
                Add To Cart
              </button> */}
              <Link href={"/singleproduct/compare"}>
                <button className="w-[215px] text-slate-950 h-[64px] border-2 rounded-2xl   hover:bg-[#B88E2F] hover:text-white transition duration-300">
                  + Compare
                </button>
              </Link>
            </div>
            <div className="w-[600px] "></div>
            <div className="flex justify-between w-[250px] h-[150px] ">
              <div className="w-[125px] flex flex-col justify-between">
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular">
                  SKU
                </p>
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular">
                  Category
                </p>
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular">
                  Tags
                </p>
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular">
                  Share
                </p>
              </div>
              <div className="w-[125px]  flex flex-col justify-between">
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular">
                  : SS001
                </p>
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular">
                  : Sofas
                </p>
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular w-[200px]">
                  : Sofa, Chair, Home, Shop
                </p>
                <p className="text-[#9F9F9F] text-[16px] font-poppins font-regular">
                  : Sofas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container border"></div>
        <div className="container">
          <div className="w-[650px] flex justify-around m-auto mt-[50px]">
            <p className="text-[24px] font-poppind font-medium">Description</p>
            <p className="text-[24px] font-regular font-poppins text-[#9F9F9F]">
              Additional Information
            </p>
            <p className="text-[24px] font-regular font-poppins text-[#9F9F9F]">
              Reviews [5]
            </p>
          </div>
          <p className="text-[#9F9F9F] text-[16px] mt-[40px]">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.br
          </p>
          <br />
          <br />
          <br />

          <p className="text-[#9F9F9F] text-[16px]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <img className="mt-[40px] mb-[90px]" src={sofa.src} alt="" />
        </div>
        <div className="container border"></div>
        <div className=" container flex flex-col justify-around h-auto mt-[50px]">
          <p className="text-[36px] font-poppins font-medium mt-[40px] text-center mb-[40px]">
            Related Products
          </p>
          <Product />
          <div className="flex items-center justify-center my-4">
            <button className=" mb-[40px] border py-3 px-16 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition duration-300">
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
