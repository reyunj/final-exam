import Image from "next/image"
import linkedin from '@/public/linkedin.png'
import fb from '@/public/fb.png'
import twitter from '@/public/twitter.png'
import youtube from '@/public/youtube.png'
import footer from '@/public/footer.png'

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-b from-blue-700 to-transparent bg-blend-multiply text-white font-sans text-base">
        <div className="container mx-auto">
          <div  className="flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16">
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
                        <li className="pb-2">4517 Washington Ave.</li>
                        <li> Manchester, Kentucky 39495</li>
                        <li className="pb-2">(555) 543 - 7653</li>
                        <li>.</li>
                    </ul>
                </div>
                <div>
                    <Image src={footer} alt= 'footer'/>
                </div>
          </div>
        </div>
      </div>
      <div  className="bg-blue-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16">
              <p className="text-center text-sm pb-3">Copyright © 2023 Lorem Ipsum. All rights reserved. | AGDP IT Solutions</p>
              <div className="flex gap-x-5 items-center">
                <Image src={linkedin} alt="linkedin" />
                <Image src={fb} alt="fb" />
                <Image src={twitter} alt="twitter" />
                <Image src={youtube} alt="youtube" />
              </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer