'use client';

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { useSearchParams } from 'next/navigation'
import { FaWhatsapp, FaRegCopy } from "react-icons/fa"
import { motion } from "framer-motion"

const SuccessPage = () => {
    const searchParams = useSearchParams()
    const promo = searchParams.get('promo') || '—'

    const shareLink = `https://belou.store?p=${promo}`
    const [copied, setCopied] = useState(false)

    const whatsappText = useMemo(() => {
        return "Salut !\n\n" +
            "Je viens de m’inscrire sur *Belou* !\n\n" +
            "Avec *Belou*, tu peux créer ton site internet en quelques minutes, vendre directement depuis *WhatsApp*, *Instagram* ou *Facebook*, et encaisser tes paiements facilement.\n\n" +
            `Rejoins l’aventure ici\n\n${shareLink}`
    }, [shareLink])

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Rejoins-moi sur Belou 🚀",
                    text: whatsappText,
                    url: shareLink,
                })
            } catch (err) {
                console.error("Erreur partage :", err)
            }
        } else {
            console.warn("Le partage natif n'est pas disponible sur votre appareil.")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareLink)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <section className="min-h-screen flex flex-col items-center justify-center
                            bg-white dark:bg-black px-4 py-10 space-y-6">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-2"
                >
                    <Image
                        src={logo}
                        alt="Belou logo"
                        width={200}
                        height={50}
                        className="h-auto w-[160px] md:w-[190px] lg:w-[200px]"
                    />
                </motion.div>

                {/* Texte principal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center max-w-2xl space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                        🎉 Bienvenue sur Belou !
                    </h1>
                    <p className="text-lg text-gray-800 dark:text-white/80">
                        Vous êtes maintenant inscrit sur notre liste d’attente.
                    </p>
                    <p className="text-gray-700 dark:text-white/70">
                        Pour continuer, partage ton lien unique avec <b>au moins 5 amis</b> autour de toi et invite-les à rejoindre Belou !
                    </p>

                    {/* Boîte du lien avec bouton copier */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex max-w-md mx-auto border border-black rounded-xl overflow-hidden mt-4"
                    >
                        <input
                            type="text"
                            value={shareLink}
                            readOnly
                            className="flex-1 px-4 py-2 text-black bg-white focus:outline-none"
                        />
                        <button
                            onClick={handleCopyLink}
                            className="px-4 py-2 bg-white text-black border-l border-black flex items-center gap-1 font-semibold hover:bg-gray-100 transition"
                        >
                            <FaRegCopy />
                            {copied ? "Copié !" : "Copier"}
                        </button>
                    </motion.div>

                    {/* Boutons de partage */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex justify-center gap-4 flex-wrap mt-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
                        >
                            <FaWhatsapp size={25} />
                            Partager sur WhatsApp
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNativeShare}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-black border border-black rounded-xl font-semibold hover:bg-gray-200 transition"
                        >
                            🔗 Partager sur mes réseaux
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default SuccessPage
