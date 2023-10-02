import Image from "next/image"
import linkedin from '@/public/linkedin.png'
import fb from '@/public/fb.png'
import twitter from '@/public/twitter.png'
import youtube from '@/public/youtube.png'
import footer from '@/public/footer.png'

const Footer = () => {
  return (
    <footer>
        <div className="bg-gradient-to-b from-blue-700 to-transparent bg-blend-multiply py-16">
            <div className="flex justify-between text-white px-80">
                <div>
                    <h4 className="pb-4 font-bold">Get Started</h4>
                    <ul>
                        <li className="pb-2">Login</li>
                        <li className="pb-2">Join Our Group</li>
                        <li className="pb-2">Visit Our Group</li>
                        <li className="pb-2">30 Day Trial Membership</li>
                    </ul>
                 </div>
                  <div>
                    <h4 className="pb-4 font-bold">About</h4>
                    <ul>
                        <li className="pb-2">Why Lorem Ipsum?</li>
                        <li className="pb-2">Our Story</li>
                        <li className="pb-2">Commmunity Involvement</li>
                        <li className="pb-2">Press</li>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-4 font-bold">Contact Us</h4>
                    <ul>
                        <li className="pb-2">4517 Washington Ave. Manchester, Kentucky 39495</li>
                        <li className="pb-2">(555) 543 - 7653</li>
                    </ul>
                </div>
                <div>
                    <Image src={footer} alt= 'footer'/>
                </div>
        </div>
        </div>
        <div className="bg-blue-900 text-white py-5">
        <div className="px-80 flex items-center">
                Copyright © 2023 Lorem Ipsum. All rights reserved. | AGDP IT Solutions
             </div>
          <div className="px-80 flex justify-end items-center h-full gap-x-5">
            <Image src={linkedin} alt="linkedin" />
          <Image src={fb} alt="fb" />
          <Image src={twitter} alt="twitter" />
          <Image src={youtube} alt="youtube" />
        </div>
        </div>
    </footer>
  )
}

export default Footer