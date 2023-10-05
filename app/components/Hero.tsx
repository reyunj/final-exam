import Image from "next/image";
import banner from "@/public/HeroPoster.png";
import ban from "@/public/ban.png";
const Hero = () => {
  return (
    <div>
      <div>
        <Image src={banner} alt="banner" />
      </div>
      <div className="w-full">
        <Image src={ban} alt="ban" />
      </div>
    </div>
  );
};

export default Hero;
