import Image from "next/image"
import linkedin from '@/public/linkedin.png'
import fb from '@/public/fb.png'
import twitter from '@/public/twitter.png'
import youtube from '@/public/youtube.png'
import footer from '@/public/footer.png'
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-b from-blue-950 to-transparent bg-blue-700 text-white font-sans text-base ">
        <div className="container mx-auto w-3/5">
          <div  className="flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16">
                <div>
                <h4 className="pb-4 font-bold">Get Started</h4>
                    <ul>
                    <Link href="/">
                        <li className="pb-2">Login</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2">Join Our Group</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2">Visit Our Group</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2">30 Day Trial Membership</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-4 font-bold">About</h4>
                    <ul>
                    <Link href="/">
                        <li className="pb-2">Why Lorem Ipsum?</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2">Our Story</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2">Commmunity Involvement</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2">Press</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-4 font-bold">Contact Us</h4>
                    <ul>
                    <Link href="/">
                        <li className="pb-2">4517 Washington Ave.</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2"> Manchester, Kentucky 39495</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2">(555) 543 - 7653</li>
                        </Link>
                        <li className="pb-2">.</li>
                    </ul>
                </div>
                    <Link href="/">
                    <Image src={footer} alt= 'footer'/>
                    </Link>
                </div>
        </div>
      </div>
      <div  className="bg-blue-950 text-white font-light p-4 text-2xl">
      <div className="container mx-auto w-3/5">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
              <p className="text-center text-sm pb-3">Copyright © 2023 Lorem Ipsum. All rights reserved. | AGDP IT Solutions</p>
              <div className="flex gap-x-5 items-center">
              <Link href="/">
                <Image src={linkedin} alt="linkedin" />
                </Link>
                <Link href="/">
                <Image src={fb} alt="fb" />
                </Link>
                <Link href="/">
                <Image src={twitter} alt="twitter" />
                </Link>
                <Link href="/">
                <Image src={youtube} alt="youtube" />
                </Link>
              </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer