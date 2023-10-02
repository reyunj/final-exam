import Image from "next/image"
import banner from "@/public/HeroPoster.png"
import ban from '@/public/ban.png'
const Hero = () => {
  return (
    <div className="flex-col w-full">
        <Image src={banner} alt ="banner" height="300"/>
        <Image src={ban} alt="ban"/>
    </div>
  )
}

export default Hero