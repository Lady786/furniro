import Link from "next/link";
import React from "react";
import shopBg from "../../../../public/img/shop-bg.png";
import img from "../../../../public/Group 156.png";
import star from "../../../../public/singleProductImages/Group 88.png";

const ComparePage = () => {
  return (
    <>
      <div className="relative">
        <img className="mx-[auto] w-full" src={shopBg.src} alt="" />
        <div className="absolute top-[40%] text-center w-full">
          <div className="container">
            <p className="font-poppins text-[48px] font-[600]">
              Product Comparison
            </p>
            <p className="font-poppins text-[16px] font-[300] ml-3">
              <Link href={"/"}>Home</Link> / Comparison
            </p>
          </div>
        </div>
      </div>
      <div className="container h-auto  mt-[50px]">
        <div className="  flex justify-around ">
          <div className="w-[223px]">
            <p className="text-[28px] font-poppins font-bold">
              Go to Product page for more Products{" "}
            </p>
            <p className="font-poppins font-bold text-[20px] text-[#727272] underline">
              View More
            </p>
          </div>
          <div className="w-[280px] h-[300px]  flex flex-col justify-between">
            <img src={img.src} alt="" />
            <h1 className="text-[24px] font-poppins font-bold">Asgaard Sofa</h1>
            <p className="font-poppins font-bold">Rs. 250,000.00</p>
            <div className="flex justify-between">
              <p>4.7</p>
              <img src={star.src} alt="" />
              <p className="text-[#9F9F9F] ">|</p>
              <p>204 Review</p>
            </div>
          </div>
          <div className="w-[280px] h-[300px]  flex flex-col justify-between">
            <img src={img.src} alt="" />
            <h1 className="text-[24px] font-poppins font-bold">Asgaard Sofa</h1>
            <p className="font-poppins font-bold">Rs. 250,000.00</p>
            <div className="flex justify-between">
              <p>4.7</p>
              <img src={star.src} alt="" />
              <p className="text-[#9F9F9F] ">|</p>
              <p>204 Review</p>
            </div>
          </div>
          <div className="w-[242px] h-[79px] ">
            <p className="text-[26px] font-poppins font-bold">Add A Product</p>
            <select
              className="outline-none bg-[#B88E2F] w-[242px] h-[40px] rounded-xl text-white pl-[5px]"
              name="products"
              id="product"
            >
              <option value="product">Choose a Product</option>
              <option value="furniture">furniture</option>
              <option value="sofa">sofa</option>
              <option value="badroom">badroom</option>
            </select>
          </div>
        </div>
        <div className="w-[1440px]  flex justify-start h-auto pt-[100px]">
          <div className="w-[350px] border h-[1500px] pl-[30px]">
            <div className="general flex flex-col justify-around h-[320px]">
              <p className="text-[28px] font-poppins font-medium">General </p>
              <p className="text-[20px]">Sales Package </p>
              <p>Model Number </p>
              <p>Secondary Material </p>
              <p>Configuration </p>
              <p>Upholstery Material </p>
              <p>Upholstery Color </p>
            </div>
            <div className="general flex flex-col justify-around h-[320px]">
              <p className="text-[28px] font-poppins font-medium">Product </p>
              <p className="text-[20px]">Filling Material </p>
              <p>Finish Type </p>
              <p>Adjustable Headrest </p>
              <p>Maximum Load Capacity </p>
              <p>Origin of Manufacture </p>
            </div>
            <div className="general flex flex-col justify-around h-[320px]">
              <p className="text-[28px] font-poppins font-medium">
                Dimensions{" "}
              </p>
              <p className="text-[20px]">Width </p>
              <p>Height </p>
              <p>Depth</p>
              <p>Weight </p>
              <p>Seat Height </p>
              <p>Leg Height </p>
            </div>
            <div className="general flex flex-col justify-around h-[400px]">
              <p className="text-[28px] font-poppins font-medium">Warranty </p>
              <p className="text-[20px]">Warranty Summary </p>
              <p>Warranty Service Type</p>
              <p>Covered in Warranty </p>
              <p>Not Covered in Warranty </p>
              <p>Domestic Warranty </p>
            </div>
          </div>

          <div className="w-[400px] border h-[1500px] pt-[55px] pl-[30px]">
            <div className="general flex flex-col justify-around h-[280px]">
              <p className="text-[20px]">1 sectional sofa </p>
              <p>TFCBLIGRBL6SRHS</p>
              <p>Solid Wood </p>
              <p>L-shaped </p>
              <p>Fabric + Cotton </p>
              <p>Bright Grey & Lion </p>
            </div>
            <div className="general flex flex-col justify-around h-[250px] mt-[50px]">
              <p className="text-[20px]">Foam </p>
              <p>Bright Grey & Lion</p>
              <p>No</p>
              <p>280 KG </p>
              <p>India </p>
            </div>
            <div className="general flex flex-col justify-around h-[260px] mt-[60px]">
              <p className="text-[20px]">265.32 cm </p>
              <p>76 cm</p>
              <p>167.76 cm </p>
              <p>45 KG </p>
              <p>41.52 cm </p>
              <p>5.46 cm</p>
            </div>
            <div className="general flex flex-col justify-around h-[320px] mt-[90px]">
              <p className="text-[20px]">1 Year Manufacturing Warranty </p>
              <p>
                For Warranty Claims or Any Product Related Issues Please Email
                at operations@trevifurniture.com
              </p>
              <p>Warranty Against Manufacturing Defect</p>
              <p>
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </p>
              <p>1 Year</p>
            </div>
            <button className="uppercase px-5 py-3 font-semibold bg-[#B88E2F] text-white text-[12px] font-poppins hover:bg-[#A87D2C] hover:text-[#FFF3E3] transition duration-300 mt-[40px]">
              explore more
            </button>
          </div>
          <div className="w-[350px] border h-[1500px] pl-[30px]">
            <div className="general flex flex-col justify-around h-[320px] mt-[50px]">
              <p className="text-[20px]">1 Three Seater, 2 Single Seater </p>
              <p>DTUBLIGRBL568</p>
              <p>Solid Wood</p>
              <p>L-shaped </p>
              <p>Fabric + Cotton </p>
              <p>Bright Grey & Lion </p>
            </div>
            <div className="general flex flex-col justify-around h-[280px] mt-[10px]">
              <p className="text-[20px]">Matte </p>
              <p>Bright Grey & Lion</p>
              <p>yes</p>
              <p>300 KG </p>
              <p>India </p>
            </div>
            <div className="general flex flex-col justify-around h-[280px] mt-[30px]">
              <p className="text-[20px]">265.32 cm </p>
              <p>76 cm</p>
              <p>167.76 cm</p>
              <p>65 KG </p>
              <p>41.52 cm </p>
              <p>5.46 cm </p>
            </div>
            <div className="general flex flex-col justify-around h-[320px] mt-[80px]">
              <p className="text-[20px]">1.2 Year Manufacturing Warranty </p>
              <p>Bright Grey & Lion</p>
              <p>
                For Warranty Claims or Any Product Related Issues Please Email
                at support@xyz.com
              </p>
              <p>
                Warranty of the product is limited to manufacturing defects
                only.
              </p>
              <p>
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </p>
              <p>3 Months </p>
            </div>
            <button className=" mt-[40px] uppercase px-5 py-3 font-semibold bg-[#B88E2F] text-white text-[12px] font-poppins hover:bg-[#A87D2C] hover:text-[#FFF3E3] transition duration-300">
              explore more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparePage;
