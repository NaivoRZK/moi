import React from 'react';

export default function CarteExperiences({ experience }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-left">
            {/* Badge type */}
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#4A6FA5] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {experience.type}
            </span>

            {/* Titre */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#222222] mb-1">
                {experience.poste}
            </h3>
            <p className="text-base font-medium text-[#333333] mb-1">
                {experience.entreprise}
            </p>
            <p className="text-sm text-[#4A6FA5] font-medium mb-4">
                {experience.sousTitre}
            </p>

            {/* Dates & Lieu */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B7280] mb-5">
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {experience.dateDebut} – {experience.dateFin}
                </span>
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {experience.lieu}
                </span>
            </div>

            {/* Équipe */}
            <div className="bg-[#F9FAFB] rounded-xl p-4 mb-5">
                <h4 className="text-sm font-semibold text-[#222222] mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#4A6FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Équipe
                </h4>
                <p className="text-sm text-[#2F3437] mb-1">
                    <span className="font-medium">Composition :</span> {experience.equipe.composition}
                </p>
                <p className="text-sm text-[#2F3437]">
                    <span className="font-medium">Collaboration :</span> {experience.equipe.collaboration}
                </p>
            </div>

            {/* Impacts */}
            <h4 className="text-sm font-semibold text-[#222222] mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#4A6FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Impacts & Performance
            </h4>
            <div className="space-y-3 mb-5">
                {experience.impacts.map((impact, i) => (
                    <div key={i} className="bg-[#F9FAFB] rounded-xl p-3">
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-lg font-bold text-[#4A6FA5]">{impact.metrique}</span>
                            <span className="text-sm font-medium text-[#222222]">{impact.label}</span>
                        </div>
                        <p className="text-xs text-[#6B7280]">{impact.details}</p>
                    </div>
                ))}
            </div>

            {/* Choix architecturaux */}
            <h4 className="text-sm font-semibold text-[#222222] mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#4A6FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Choix Architecturaux
            </h4>
            <div className="space-y-3 mb-5">
                {experience.choixArchitecturaux.map((choix, i) => (
                    <div key={i} className="border-l-4 border-[#4A6FA5] pl-4">
                        <h5 className="text-sm font-semibold text-[#222222]">{choix.titre}</h5>
                        <p className="text-xs text-[#2F3437] mt-1">{choix.description}</p>
                    </div>
                ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                    <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4A6FA5] text-white"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
