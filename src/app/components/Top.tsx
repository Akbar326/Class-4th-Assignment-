import Image from "next/image";
import close from "@/app/assets/Close.png";
export default function Top() {
  return (
    <div className="flex justify-center items-center w-full max-w-full h-[38px] bg-black px-4">
      <p className="font-satoshi w-[320px] xs:w-full text-white/90 text-[12px] xs:text-[14px] leading-[16.2] xs:leading-[18.9px] font-normal text-center">
        Sign up and get 20% off to your first order.{" "}
        <span className="text-white font-medium underline">Sign Up Now</span>
      </p>

      <div className="w-5 h-5 text-white cursor-pointer absolute right-16 hidden sm:block">
        <Image src={close} alt="Close Sign" layout="intrinsic" />
      </div>
    </div>
  );
}
