import React from 'react';
import logo from "../assets/andry.jpg";
import Button from '../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-16 lg:px-12 xl:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-100 w-full">

                {/* Photo de profil - animation de gauche vers centre */}
                <div className="flex-shrink-0">
                    <ScrollReveal direction="right">
                        <img
                            className="w-56 h-56 lg:w-[420px] lg:h-[420px] object-cover rounded-3xl shadow-lg"
                            src={logo}
                            alt="Razakanaivo Andry Malala - Photo de profil"
                        />
                    </ScrollReveal>
                </div>

                {/* Texte de présentation - animation de droite vers centre */}
                <div className="flex-1 w-full">
                    <ScrollReveal direction="left">
                        <h1 className="text-3xl lg:text-5xl font-bold text-[#222222] leading-tight mb-4">
                            Razakanaivo Andry Malala
                        </h1>

                        <h2 className="text-lg lg:text-2xl font-medium text-[#333333] mb-8">
                            Développeur Fullstack Python, JS & ERP Odoo
                        </h2>

                        <div className="space-y-5 text-base lg:text-lg text-[#2F3437] leading-relaxed mb-10 max-w-2xl">
                            <p>
                                Passionné par l'ingénierie logicielle, je considère que les
                                langages de programmation, les méthodologies de développement
                                et les architectures ne sont que des outils permettant de
                                résoudre des problèmes réels.
                            </p>

                            <p>
                                J'utilise Python, JavaScript et Odoo pour concevoir et
                                intégrer des solutions adaptées à chaque besoin.
                            </p>

                            <p>
                                Mon objectif est d'allier rigueur technique et efficacité pour
                                créer des applications performantes et évolutives.
                            </p>
                        </div>

                        <Button
                            variant="primary"
                            className="inline-flex items-center gap-2"
                        >
                            Télécharger mon CV
                            <FontAwesomeIcon icon={faDownload} />
                        </Button>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
