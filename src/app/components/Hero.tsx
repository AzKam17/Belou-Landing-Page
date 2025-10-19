'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import payment from '@/assets/images/payment.png'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [phone, setPhone] = useState('')
  const [promo, setPromo] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const promoCode = searchParams.get('p')
    if (promoCode) {
      setPromo(promoCode.trim())
      console.log('Promo code detected:', promoCode)
    }
  }, [searchParams])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    value = value.slice(0, 10)
    const formatted = value.replace(/(\d{2})(?=\d)/g, '$1 ')
    setPhone(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER
      const response = await fetch(`${backendUrl}/api/v1/waitlist_root/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          invited_by: promo || 'EAWL',
          phone_number: phone.replace(/\s/g, ''),
        }),
      })

      if (!response.ok) throw new Error('Failed to register')

      const data = await response.json()

      console.log('✅ Registration success:', data)

      // Redirect to success page with promo code
      router.push(`/success?promo=${encodeURIComponent(data.promo || promo || '')}`)
    } catch (error) {
      console.error('❌ Registration failed:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
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
                Belou te permet de créer un site web pour ton business, de gérer tes produits,
                tes clients et tes commandes facilement, depuis ton téléphone.
              </p>

              <p className="text-base text-gray-700 font-semibold mt-6">
                🎉 Crée dès maintenant ton compte Belou et commence à développer ton business en ligne !
              </p>

              {/* Registration form */}
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
                    disabled={loading}
                    className={`px-6 py-3 bg-black text-white rounded-xl font-semibold transition flex items-center justify-center ${
                        loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                    }`}
                >
                  {loading ? (
                      <span className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                      'Créer mon compte 🚀'
                  )}
                </button>
              </form>
            </div>

            {/* App preview */}
            <div className="relative flex justify-center items-center">
              <Image
                  src={payment}
                  alt="Aperçu de l’application Belou"
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
