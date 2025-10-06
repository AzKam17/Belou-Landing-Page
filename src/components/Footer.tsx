import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.png'

function Footer() {
  return (
    <footer className="bg-[#F4EAE1] text-[#17243A]">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo et description */}
        <div>
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Belou logo"
              width={90}
              height={290}
              className="h-15 me-5"
            />
          </div>
          <p className="mt-6 text-[#17243A]/80 max-w-sm">
            Belou vous permet de créer votre boutique en ligne en un instant et de gérer vos commandes sans stress.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="mailto:support@belou.store"
              className="flex items-center gap-x-3 hover:text-[#FE4000] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={20} height={16} x={2} y={4} rx={2} />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              support@belou.store
            </a>

            <a
              href="tel:+2250779136356"
              className="flex items-center gap-x-3 hover:text-[#FE4000] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +225 07 79 13 63 56
            </a>
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-semibold text-[#FE4000] uppercase mb-6">Liens utiles</h4>
          <ul className="space-y-3">
            <li>
              <a href="#features" className="hover:text-[#A7C957] transition">Fonctionnalités</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#A7C957] transition">Politique de confidentialité</a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="font-semibold text-[#FE4000] uppercase mb-6">Suivez-nous</h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="size-9 flex justify-center items-center rounded-full border border-[#F4BBA8] hover:bg-[#FE4000] hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a
              href="#"
              className="size-9 flex justify-center items-center rounded-full border border-[#AFC3E4] hover:bg-[#FE4000] hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166C5.913 3.166 4.14 4.574 3.508 6.47a4.792 4.792 0 0 0 0 3.063c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="bg-[#FE4000] text-white py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Belou. Tous droits réservés.</p>
          <p className="text-[#F4EAE1]">Made with ❤️ in Côte d'Ivoire</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
