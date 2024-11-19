import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

import Twitter from "@/app/assets/Twitter.png";
import Facbook from "@/app/assets/Facebook.png";
import Instagram from "@/app/assets/Instagram.png";
import Github from "@/app/assets/Github.png";

import Visa from "@/app/assets/Visa-Card.png";
import Master from "@/app/assets/Master-Card.png";
import PayPal from "@/app/assets/PayPal.png";
import ApplePay from "@/app/assets/Apple-Pay.png";
import GooglePay from "@/app/assets/Google-Pay.png";

export default function Footer() {
  return (
    <div className="w-full bg-[#F0F0F0] py-32 px-5">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[1240px] lg:mx-auto">
        <div className="xs:w-[248px] xs:h-[177px] mb-8 xs:mb-0 flex flex-col xs:items-start xs:text-left">
          <Image src={Logo} alt="Logo" className="w-[167px] h-[23px] mb-4" />
          <p className="text-sm text-[#00000099] mb-4">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="xs:mt-[40px] flex gap-4">
            <Image src={Twitter} alt="Twitter" className="w-7 h-7" />
            <Image src={Facbook} alt="Facebook" className="w-7 h-7" />
            <Image src={Instagram} alt="Instagram" className="w-7 h-7" />
            <Image src={Github} alt="Github" className="w-7 h-7" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 xs:flex xs:gap-[150px] xs:items-start xs:text-left">
          <div>
            <h3 className="text-lg font-medium tracking-wide text-black mb-4">
              Company
            </h3>
            <ul className="text-sm text-[#00000099] space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wide text-black mb-4">
              Help
            </h3>
            <ul className="text-sm text-[#00000099] space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wide text-black mb-4">
              FAQ
            </h3>
            <ul className="text-sm text-[#00000099] space-y-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wide text-black mb-4">
              Resources
            </h3>
            <ul className="text-sm text-[#00000099] space-y-2">
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-8"></div>

      <div className="flex flex-col xs:flex-row items-center xs:justify-between xs:w-[1240px] xs:mx-auto">
        <p className="text-sm text-[#00000099] text-center mb-4 lg:mb-0">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex gap-1">
          <Image src={Visa} alt="Visa Card" className="w-[50px]" />
          <Image src={Master} alt="Master Card" className="w-[50px]" />
          <Image src={PayPal} alt="Paypal" className="w-[50px]" />
          <Image src={ApplePay} alt="Apple Pay" className="w-[50px]" />
          <Image src={GooglePay} alt="Google Pay" className="w-[50px]" />
        </div>
      </div>
    </div>
  );
}
