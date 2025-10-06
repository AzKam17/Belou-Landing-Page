import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import feature from "@/assets/images/feature.jpg";


const Features = () => {
  return (
    <section id="features" className="py-20">
  <div className="container">
    <div className="grid lg:grid-cols-2 items-center gap-6">
      <div className="flex items-center">
        <Image
          src={feature}
          className="h-[650px] rounded-xl mx-auto"
          alt="Vendeur en ligne débordé"
          width={433}
          height={650}
        />
      </div>

      <div className="lg:ms-5 ms-8">
        <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
          Pensé pour les vendeurs connectés
        </span>
        <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
          Tu fais des lives, tu réponds aux messages, tu gères les commandes…
          <br />
          Et si tout devenait plus simple&nbsp;?
        </h2>
        <a
          href="#about"
          className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
        >
          Découvrir Belou
          <IconifyIcon icon="lucide:move-right" />
        </a>

        <hr className="border-gray-200 my-6" />

        <div className="flex items-start gap-5">
          <div>
            <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
              <IconifyIcon
                icon="lucide:check"
                className="text-base text-blue-600"
              />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Tout centraliser, enfin</h4>
            <p className="text-base font-normal text-gray-500 mt-2">
              Produits, commandes et clients regroupés dans une seule app.  
              Fini les notes éparpillées et les messages perdus.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 mt-8">
          <div>
            <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
              <IconifyIcon
                icon="lucide:layers-2"
                className="text-base text-blue-600"
              />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Une boutique, automatiquement</h4>
            <p className="text-base font-normal text-gray-500 mt-2">
              Ajoute tes produits, et Belou crée ton site automatiquement.  
              Tes clients commandent directement dessus, sans prise de tête.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 mt-8">
          <div>
            <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
              <IconifyIcon
                icon="lucide:bell"
                className="text-base text-blue-600"
              />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Notifications instantanées</h4>
            <p className="text-base font-normal text-gray-500 mt-2">
              À chaque commande, tu reçois une alerte avec tous les détails.  
              Tu gagnes du temps, tu restes réactif, et tes clients sont ravis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      )
}

export default Features