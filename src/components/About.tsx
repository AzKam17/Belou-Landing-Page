import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import iphone from "@/assets/images/feature-iphone.png";

const About = () => {
  return (
    <section id="about" className="py-20">
  <div className="container">
    <div className="grid lg:grid-cols-2 items-center gap-6">
      <div className="lg:ms-5 ms-8">
        <div>
          <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
            Comment ça marche
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
          Commence en quelques minutes&nbsp;: installe l’app, ajoute tes produits, et vends sans stress
        </h2>
        <p className="text-base font-normal text-muted mt-6">
          Belou simplifie tout pour toi.  
          En quelques clics, tu crées ta boutique, tu reçois tes commandes directement sur ton téléphone  
          et tu restes concentré sur ce que tu fais le mieux&nbsp;: vendre et créer du contenu.  
          Fini les tableaux compliqués, les messages oubliés et les pertes de temps.
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-9">
          <div className="">
            <div className="flex items-center justify-start">
              <div className="items-center justify-center flex bg-green-50 rounded-full h-20 w-20 border border-dashed border-green-50">
                <IconifyIcon
                  icon="lucide:smartphone"
                  className="h-8 w-8 text-black"
                />
              </div>
            </div>
            <h1 className="text-xl font-semibold pt-6">1. Télécharge</h1>
            <p className="text-base text-gray-600 font-normal mt-2">
              Installe l’application Belou et crée ton compte gratuitement.
            </p>
          </div>

          <div className="">
            <div className="flex items-center justify-start">
              <div className="items-center justify-center flex bg-red-50 rounded-full h-20 w-20 border border-dashed border-red-50">
                <IconifyIcon
                  icon="lucide:file-text"
                  className="h-8 w-8 text-black"
                />
              </div>
            </div>
            <h1 className="text-xl font-semibold pt-6">2. Ajoute tes produits</h1>
            <p className="text-base text-gray-600 font-normal mt-2">
              Belou crée automatiquement ton site à partir de tes produits.
            </p>
          </div>

          <div className="">
            <div className="flex items-center justify-start">
              <div className="items-center justify-center flex bg-primary/10 rounded-full h-20 w-20 border border-dashed border-primary/10">
                <IconifyIcon
                  icon="lucide:rocket"
                  className="h-8 w-8 text-black"
                />
              </div>
            </div>
            <h1 className="text-xl font-semibold pt-6">3. Reçois et gère tes commandes</h1>
            <p className="text-base text-gray-600 font-normal mt-2">
              À chaque commande, tu es notifié et tu peux tout suivre facilement.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Image
          src={iphone}
          className="h-[600px] rounded-xl mx-auto"
          alt="Application Belou sur smartphone"
          width={538}
          height={600}
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default About