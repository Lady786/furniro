import bgHero from "../../public/img/bg-hero.jpg";
import Category from "./_components/category/category";
import Product from "./_components/products/products";
import sectionImg from "../../public/img/section-img.png";
import exploreImg from "../../public/img/explore-img.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <img className="mx-[auto] w-full" src={bgHero.src} alt="hero-banner" />
        <div className="w-[550px] absolute top-[30%] left-[50%] px-[30px] pt-[60px] pb-[40px] bg-[#FFF3E3] transition duration-300 ease-in-out transform hover:bg-[#FFE7D3] hover:shadow-lg hover:scale-105">
          <p className="text-arapawa font-semibold text-[16px] font-poppins">
            New Arrival
          </p>
          <h1 className="text-[52px] uppercase font-bold text-[#B88E2F] font-poppins">
            discover our new collection
          </h1>
          <p className="mb-5 font-medium text-[18px] font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="uppercase px-8 py-4 bg-[#B88E2F] font-semibold text-white text-[12px] font-poppins hover:bg-[#A87D2C] hover:text-[#FFF3E3] transition duration-300">
            buy now
          </button>
        </div>
      </div>

      <div className="container py-[52px]">
        <h2 className="text-center font-[700] text-[32px] font-poppins">
          Browse The Range
        </h2>
        <p className="text-center text-[20px] font-medium mb-[48px] font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Category />
      </div>

      <div className="container py-[52px]">
        <h2 className="font-poppins text-[40px] font-[700] text-center mb-8">
          Our Products
        </h2>
        <Product limit={8} />
        <div className="flex items-center justify-center my-4">
          <button className="border py-3 px-16 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition duration-300">
            Show More
          </button>
        </div>
      </div>

      <div className="bg-[#FCF8F3]">
        <div className="container py-[52px] flex justify-between">
          <div className="w-[400px]">
            <h3 className="text-[40px] font-[700] mb-[7px] font-poppins">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="text-[16px] font-[500] mb-[25px] font-poppins text-[#65625F]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <button className="uppercase px-5 py-3 font-semibold bg-[#B88E2F] text-white text-[12px] font-poppins hover:bg-[#A87D2C] hover:text-[#FFF3E3] transition duration-300">
              explore more
            </button>
          </div>
          <div>
            <img src={exploreImg.src} alt="" />
          </div>
        </div>
      </div>
      <div className="container py-[52px]">
        <img src={sectionImg.src} alt="" />
      </div>
    </>
  );
}
