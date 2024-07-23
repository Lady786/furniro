import Link from "next/link";
import React from "react";
import shopBg from "../../../../public/img/shop-bg.png";

const CheckoutPage = () => {
  return (
    <>
      <div className="relative">
        <img className="mx-[auto]" src={shopBg.src} alt="" />
        <div className="absolute top-[40%] text-center w-full">
          <div className="container">
            <p className="font-poppins text-[48px] font-[600]">Checkout</p>
            <p className="font-poppins text-[16px] font-[300] ml-3">
              <Link href={"/"}>Home</Link> / Checkout
            </p>
          </div>
        </div>
      </div>
      <div className="container h-[2100px]  flex mt-[30px]">
        <div className="w-[608px] h-[1710px]">
          <div>
            <h1 className="text-[36px] font-bold font-poppins mt-[30px]">
              Billing details
            </h1>
          </div>
          <div className="h-[150px] w-[608px]  flex justify-between mt-[30px]">
            <div className="w-[530px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-[211px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="firstName"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="lastName"
              >
                Last Name{" "}
              </label>
              <input
                className="w-[211px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="lastName"
                type="text"
              />
            </div>
          </div>
          <div className="h-[1400px] w-[608px]  flex justify-between  flex-col ">
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                Company Name (Optional)
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                Country / Region
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                Street address
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                Town / City
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                Province
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
                placeholder="Western Province"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                ZIP code
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                Phone
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <label
                className="text-[16px] font-poppins font-bold"
                htmlFor="name"
              >
                {" "}
                Email address
              </label>
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                id="name"
                type="text"
              />
            </div>
            <div className="w-[520px] h-[121px]  flex flex-col justify-between">
              <input
                className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl mt-[30px]"
                id="name"
                type="text"
                placeholder="Additional information"
              />
            </div>
          </div>
        </div>
        <div className="w-[608px] h-[789px]">
          <div className=" w-[608px] flex  mt-[30px]">
            <div className="w-[608px]  flex flex-col justify-around">
              <h1 className="font-bold font-poppins text-[24px]">Product</h1>
              <p className="text-[#9F9F9F] text-[16px]">Asgaard sofa x1</p>
              <p>Subtotal</p>
              <p>Total</p>
            </div>
            <div className="w-[608px] h-[150px]  text-right flex flex-col justify-around">
              <h1 className="font-bold font-poppins text-[24px]">Subtotal</h1>
              <p>Rs. 250,000.00</p>
              <p>Rs. 250,000.00</p>
              <p className="text-[24px] font-bold font-poppins text-[#B88E2F]">
                Rs. 250,000.00
              </p>
            </div>
          </div>
          <div className="w-[608px]  mt-[30px]"></div>
          <div className="w-[608px]  h-[400px] flex flex-col justify-between">
            <p className="font-medium font-poppins">Direct Bank Transfer</p>
            <p className="text-[#9F9F9F]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <p className="font-medium font-poppins">Direct Bank Transfer</p>
            <p className="font-medium font-poppins">Cash On Delivery</p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-bold">privacy policy</span>.
            </p>

            <button className="w-[318px] h-[64px] border rounded-2xl ml-[150px]">
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
