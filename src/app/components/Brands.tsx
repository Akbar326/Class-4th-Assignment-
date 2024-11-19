import Image from "next/image";
import Versace from "@/app/assets/Versace.png";
import Zara from "@/app/assets/Zara.png";
import Gucci from "@/app/assets/Gucci.png";
import Prada from "@/app/assets/Prada.png";
import Calvin from "@/app/assets/Calvin.Klein.png";

export default function Brands() {
  return (
    <div className="w-full max-w-[1420px] bg-black py-10 flex flex-wrap justify-around gap-6">
      <div className="w-[140px] xs:w-[166px]">
        <Image src={Versace} alt="Versace" className="w-full h-auto" />
      </div>
      <div className="w-[70px] xs:w-[91px]">
        <Image src={Zara} alt="Zara" className="w-full h-auto" />
      </div>
      <div className="w-[130px] xs:w-[156px]">
        <Image src={Gucci} alt="Gucci" className="w-full h-auto" />
      </div>
      <div className="w-[160px] xs:w-[192px]">
        <Image src={Prada} alt="Prada" className="w-full h-auto" />
      </div>
      <div className="w-[190px] xs:w-[206px]">
        <Image src={Calvin} alt="Calvin Klein" className="w-full h-auto" />
      </div>
    </div>
  );
}
