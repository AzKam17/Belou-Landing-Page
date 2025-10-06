import Image from 'next/image'
import React from 'react'
import googlePlay from '@/assets/images/google-play.svg'
import apple from '@/assets/images/iphone.svg'
import payment from '@/assets/images/payment.png'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      className="relative pt-10 pb-20 bg-[url(../images/home/bg-5.png)] bg-no-repeat bg-cover"
      id="home"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
          <div className="relative">
            {/* Logo */}
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src={logo}
                  alt="Belou logo"
                  width={200}
                  height={18}
                  className="h-auto w-[160px] md:w-[190px] lg:w-[200px]"
                />
              </Link>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-black tracking-normal capitalize leading-normal font-bold max-w-2xl mt-4">
              Gérez vos commandes sans stress.
            </h1>

            <p className="text-base text-muted font-medium max-w-lg mt-6 capitalize">
              Belou regroupe vos produits, vos clients et vos commandes pour que tout devienne plus clair et plus simple.
            </p>

            {/* Store buttons */}
            <div className="mt-12 flex space-x-4">
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={googlePlay} alt="Google Play" />
              </Link>
              <Link
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={apple} alt="App Store" />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <Image
              src={payment}
              alt="App preview"
              width={800}   // increase from 628
              height={600}  // increase proportionally
              className="object-contain rounded-xl drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
