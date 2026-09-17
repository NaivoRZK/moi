import React, { useEffect, useState } from 'react';
import CarteExperiences from '../components/cartes/carteExoeriences';
import ScrollReveal from '../components/ScrollReveal';

export default function Experiences() {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('/data/experiences.json')
            .then((res) => res.json())
            .then((data) => setExperiences(data));
    }, []);

    return (
        <section className="min-h-screen px-6 py-20 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">
                    Mes Expériences
                </h1>
                <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                    Parcours professionnel et réalisations techniques au sein du Groupe VISEO
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4A6FA5] -translate-x-1/2" />

                <div className="space-y-12 lg:space-y-0">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={exp.id}
                                className="relative lg:flex lg:items-center lg:min-h-[200px]"
                            >
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#4A6FA5] rounded-full border-4 border-white shadow z-10" />

                                {isLeft ? (
                                    <>
                                        <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                                            <ScrollReveal direction="down">
                                                <CarteExperiences experience={exp} />
                                            </ScrollReveal>
                                        </div>
                                        <div className="lg:w-1/2" />
                                    </>
                                ) : (
                                    <>
                                        <div className="lg:w-1/2" />
                                        <div className="lg:w-1/2 lg:pl-12">
                                            <ScrollReveal direction="right">
                                                <CarteExperiences experience={exp} />
                                            </ScrollReveal>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
