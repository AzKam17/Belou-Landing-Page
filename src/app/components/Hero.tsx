'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import payment from '@/assets/images/payment.png'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'

const Hero = () => {
  const [phone, setPhone] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // remove all non-digit characters
    let value = e.target.value.replace(/\D/g, '')

    // limit to 10 digits (for format XX XX XX XX XX)
    value = value.slice(0, 10)

    // add spacing every 2 digits
    const formatted = value.replace(/(\d{2})(?=\d)/g, '$1 ')

    setPhone(formatted)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: replace with your actual saving logic (API call, Firebase, etc.)
    alert(`Numéro enregistré : ${phone}`)
    setPhone('')
  }

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
                Crée ton site web pour ton business.
              </h1>

              <p className="text-base text-muted font-medium max-w-lg mt-6">
                Belou est une application qui te permet de créer un site web pour ton business,
                gérer tes produits, tes clients et tes commandes en toute simplicité.
              </p>

              <p className="text-base text-gray-700 font-semibold mt-6">
                🚀 Rejoins dès maintenant la liste d’attente pour être parmi les premiers à essayer Belou !
              </p>

              {/* Waitlist input */}
              <form
                  onSubmit={handleSubmit}
                  className="mt-10 flex flex-col sm:flex-row items-center gap-4"
              >
                <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Entrez votre numéro (XX XX XX XX XX)"
                    className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-lg"
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
                >
                  Rejoindre la liste d’attente
                </button>
              </form>
            </div>

            {/* App preview */}
            <div className="relative flex justify-center items-center">
              <Image
                  src={payment}
                  alt="App preview"
                  width={800}
                  height={600}
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
