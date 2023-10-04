import Image from "next/image"
import banner from "@/public/HeroPoster.png"
import ban from '@/public/ban.png'
const Hero = () => {
  return (
    <div>
        <Image src={banner} alt ="banner"/>
        <Image src={ban} alt="ban"/>
    </div>
  )
}

export default Hero