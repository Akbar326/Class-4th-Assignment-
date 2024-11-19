import Image from "next/image";
import ViewAll from "@/app/assets/View-All.png";

import TShirt from "@/app/assets/T-Shirt.png";
import Skinny from "@/app/assets/Skinny.png";
import Checkered from "@/app/assets/Checkered.png";
import Sleeve from "@/app/assets/Sleeve-Striped.png";
import VerticalShirt from "@/app/assets/Vertical-Striped.png";
import CourageShirt from "@/app/assets/Courage-Graphics.png";
import LosseFit from "@/app/assets/Loose-Fit.png";
import FadedJeans from "@/app/assets/Faded-Skinny.png";
import Casual from "@/app/assets/Casual.png";
import Fromal from "@/app/assets/Formal.png";
import Party from "@/app/assets/Party.png";
import Gym from "@/app/assets/Gym.png";

import Rating1 from "@/app/assets/4.5.png";
import Rating2 from "@/app/assets/3.5.png";
import Rating3 from "@/app/assets/5.0.png";
import Rating4 from "@/app/assets/4.0.png";
import Rating5 from "@/app/assets/3.0.png";

import Dollar1 from "@/app/assets/120.png";
import Dollar2 from "@/app/assets/240.png";
import Dollar3 from "@/app/assets/180.png";
import Dollar4 from "@/app/assets/130.png";
import Dollar5 from "@/app/assets/212.png";
import DollarM from "@/app/assets/232.png";
import DollarP from "@/app/assets/-20.png";
import Dollar6 from "@/app/assets/145.png";
import Dollar7 from "@/app/assets/80.png";
import Dollar8 from "@/app/assets/210.png";

import Sarah from "@/app/assets/Sarah-M.png";
import Alex from "@/app/assets/Alex-K.png";
import James from "@/app/assets/James-L.png";

import Subscribe from "@/app/assets/Subscribe.png";

export default function Sale() {
  return (
    <div className="w-full mx-auto px-4 bg-white text-[#000000]">
      <div className="relative">
        <h1 className="text-center font-integralCF text-4xl font-bold mt-12">
          NEW ARRIVALS
        </h1>

        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image src={TShirt} alt="T-Shirt" className="w-full h-auto" />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              T-shirt with Tape Details
            </h3>
            <Image
              src={Rating1}
              alt="Rating"
              className="w-[150px] h-[19px] mt-2"
            />
            <Image src={Dollar1} alt="Price" className="w-[55px] h-8 mt-2" />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image src={Skinny} alt="Skinny Jeans" className="w-full h-auto" />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              Skinny Fit Jeans
            </h3>
            <Image
              src={Rating2}
              alt="Rating"
              className="w-[126.2px] h-[19px] mt-2"
            />
            <Image src={Dollar2} alt="Price" className="w-[200px] h-8 mt-2" />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image
              src={Checkered}
              alt="Checkered Shirt"
              className="w-full h-auto"
            />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              Checkered Shirt
            </h3>
            <Image
              src={Rating1}
              alt="Rating"
              className="w-[150px] h-[19px] mt-2"
            />
            <Image
              src={Dollar3}
              alt="Price"
              className="w-[56px] h-[25px] mt-2"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image src={Sleeve} alt="Sleeve Shirt" className="w-full h-auto" />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              Sleeve Striped T-shirt
            </h3>
            <Image
              src={Rating1}
              alt="Rating"
              className="w-[150px] h-[19px] mt-2"
            />
            <Image src={Dollar4} alt="Price" className="w-[189px] h-8 mt-2" />
          </div>
        </div>

        <Image
          src={ViewAll}
          alt="View All"
          className="w-[218px] h-[52px] mt-8 mx-auto"
        />

        <div className="border-t border-[#0000001A] mt-8"></div>
      </div>

      <div className="relative mt-16">
        <h1 className="text-center font-integralCF text-4xl font-bold mt-12">
          TOP SELLING
        </h1>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image
              src={VerticalShirt}
              alt="Vertical Striped Shirt"
              className="w-full h-auto"
            />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              Vertical Striped Shirt
            </h3>
            <Image
              src={Rating3}
              alt="Rating"
              className="w-[160.7px] h-[19px] mt-2"
            />
            <div className="flex gap-3">
              <Image src={Dollar5} alt="Price" className="w-[53px] h-7 mt-2" />
              <Image
                src={DollarM}
                alt="Discount"
                className="w-[56px] h-7 mt-2"
              />
              <Image
                src={DollarP}
                alt="Discount Percentage"
                className="w-[58px] h-7 mt-2"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image
              src={CourageShirt}
              alt="Courage Graphic T-shirt"
              className="w-full h-auto"
            />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              Courage Graphic T-shirt
            </h3>
            <Image
              src={Rating4}
              alt="Rating"
              className="w-[137.9px] h-[19px] mt-2"
            />
            <Image src={Dollar6} alt="Price" className="w-[54px] h-7 mt-2" />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image
              src={LosseFit}
              alt="Loose Fit Bermuda Shorts"
              className="w-full h-auto rounded-[20px]"
            />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              Loose Fit Bermuda Shorts
            </h3>
            <Image
              src={Rating5}
              alt="Rating"
              className="w-[113.09px] h-[19px] mt-2"
            />
            <Image
              src={Dollar7}
              alt="Price"
              className="w-[47px] h-[30px] mt-2"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <Image
              src={FadedJeans}
              alt="Faded Skinny Jeans"
              className="w-full h-auto"
            />
            <h3 className="font-satoshi text-xl font-bold mt-4">
              Faded Skinny Jeans
            </h3>
            <Image
              src={Rating1}
              alt="Rating"
              className="w-[150px] h-[19px] mt-2"
            />
            <Image src={Dollar8} alt="Price" className="w-[55px] h-8 mt-2" />
          </div>
        </div>

        <Image
          src={ViewAll}
          alt="View All"
          className="w-[218px] h-[52px] mt-8 mx-auto"
        />
      </div>

      <div className="relative w-[350px] h-[1100px] xs:w-[1239px] sm:h-[866px] mt-16 xs:ml-20 bg-[#F0F0F0] rounded-[40px] py-8">
        <h1 className="text-center font-integralCF text-[32px] xs:text-[48px] leading-9  xs:leading-[57.6px] font-bold text-black mt-12">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full  md:w-1/2 p-4">
            <Image
              src={Casual}
              alt="Casual Wear"
              className="w-[310px] h-[190px] xs:w-[407px] xs:h-[289px] xs:left-[64px] xs:absolute"
            />
          </div>

          <div className="w-full  md:w-1/2 p-4">
            <Image
              src={Fromal}
              alt="Formal Wear"
              className="w-[310px] h-[190px] xs:w-[684px] xs:h-[289px] xs:left-[491px] xs:absolute"
            />
          </div>

          <div className="w-full  md:w-1/2 p-4">
            <Image
              src={Party}
              alt="Party Wear"
              className="w-[310px] h-[190px] xs:w-[684px] xs:h-[289px] xs:mt-[280px] xs:left-[64px] xs:absolute"
            />
          </div>

          <div className="w-full  md:w-1/2 p-4">
            <Image
              src={Gym}
              alt="Gym Wear"
              className="w-[310px] h-[190px] xs:w-[407px] xs:h-[289px] xs:mt-[280px] xs:left-[768px] xs:absolute"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col xs:left-[100px] items-center xs:items-start mt-16">
        <h1 className="text-left left-4 xs:text-left font-integralCF text-[32px] xs:text-[48px] font-bold leading-[40px] xs:leading-[57.6px] text-black mb-8">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex flex-col xs:flex-row gap-5 w-full">
          <Image
            src={Sarah}
            alt="Review"
            className="w-[350px] h-[180px] xs:w-[400px] xs:h-[240px]"
          />
          <Image
            src={Alex}
            alt="Review"
            className="w-[350px] h-[180px] xs:w-[400px] xs:h-[239.58px]"
          />
          <Image
            src={James}
            alt="Review"
            className="w-[350px] h-[180px] xs:w-[400px] xs:h-[240px]"
          />
        </div>
      </div>

      <div className="relative flex xs:flex-row flex-col  xs:justify-around items-center w-[350px] h-[293px] xs:w-[1240px] xs:h-[180px] xs:left-[75px] top-[100px] xs:top-[80px] xs:py-7 py-12  bg-[#333] rounded-[30px] text-center xs:text-center">
        <h1 className="w-[290px] h-[105px] xs:w-[551px] xs:h-[94px] text-left font-integralCF text-[32px] leading-[35px] xs:text-[40px] xs:leading-[45px] font-bold text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <Image
          src={Subscribe}
          alt="Subscribe"
          className="w-[311px] h-[90px] xs:w-[394px] xs:h-[108px] mt-5"
        />
      </div>
    </div>
  );
}
