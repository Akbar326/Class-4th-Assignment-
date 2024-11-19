import Image from "next/image";
import Banner from "@/app/assets/Banner.1.png";
import Star1 from "@/app/assets/Star.1.png";
import Star2 from "@/app/assets/Star.2.png";
import ShopNow from "@/app/assets/Shop Now.png";
import Banner2 from "@/app/assets/Banner.2.png";

export default function Hero() {
  return (
    <div className="w-full  max-w-[1440px] h-[823px] xs:h-[663px] relative bg-[#F2F0F1]">
      <Image
        src={Banner}
        alt="Banner"
        className="w-full max-w-[1440px] h-full object-cover hidden sm:flex"
      />
      <Image
        src={Star1}
        alt="Star1"
        className="w-14 h-14 top-[310px] left-[750px] absolute hidden sm:flex"
      />
      <Image
        src={Star2}
        alt="Star2"
        className="w-[104px] h-[104px] top-[90px] left-[1255px] absolute hidden sm:flex"
      />
      <div className="absolute top-[38px] xs:top-[90px] left-[20px] xs:left-[100px]">
        <p className="font-integralCF w-[315px] h-[93px] xs:w-[577px] xs:h-[173px] text-[36px] xs:text-[68px] font-extrabold leading-[36px] xs:leading-[64px] text-[#000000]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>
        <p className="w-[348px] h-[50px] sm:w-[545px] sm:h-[33px] font-satoshi text-[14px] sm:text-[16px] font-normal leading-5 sm:leading-[22px] text-[#00000099] mt-6 sm:mt-14 max-w-[540px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Image
          src={ShopNow}
          alt="Shop Now"
          className="w-[328px] xs:w-[210px] h-[52px] mt-14 max-w-full"
        />
        <Image
          src={Banner2}
          alt="Model Picture"
          className="w-full max-w-[390px] h-[460px] ml-[-18px] mt-[50px] sm:hidden"
        />

        <div className="relative flex w-full h-[55px] xs:w-[596px] xs:h-[74px] justify-around bottom-[480px] xs:mt-[530px] sm:gap-[20px] sm:flex-wrap">
          <div className="flex flex-col items-start w-[106px] h-[48px] sm:w-[107px] sm:h-[54px]">
            <p className="font-satoshi text-[24px] xs:text-[40px] font-bold leading-[32.4px] xs:leading-[54px] text-[#000000]">
              200+
            </p>
            <p className="xs:w-[141px] xs:h-[22px] font-satoshi text-xs xs:text-base font-normal leading-[22px] xs:leading-[22px] text-[#00000099]">
              International Brands
            </p>
          </div>
          <div className="border-l-[1px] border-[#0000001A] xs:ml-7"></div>
          <div className="flex flex-col items-start w-[117px] h-[48px] xs:w-[156px] xs:h-[74px]">
            <p className="font-satoshi text-[24px] xs:text-[40px] font-bold leading-[32.4px] xs:leading-[54px] text-[#000000] sm:w-[146px] sm:h-[54px]">
              2,000+
            </p>
            <p className="font-satoshi text-xs xs:text-base font-normal leading-[22px] xs:leading-[22px] text-[#00000099] sm:w-[156px] sm:[22px]">
              High-Quality Products
            </p>
          </div>
          <div className="border-l-[1px] border-[#0000001A]"></div>
          <div className="flex flex-col items-start w-[103px] h-[48px] xs:w-[171px] xs:h-[74px]">
            <p className="font-satoshi text-2xl xs:text-[40px] font-bold leadin-[32.4px] xs:leading-[54px] text-[#000000] sm:w-[171px] sm:h-[54px]">
              30,000+
            </p>
            <p className="font-satoshi text-xs xs:text-base font-normal leading-[22px] text-[#00000099] sm:w-[126px] sm:h-[22px]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
