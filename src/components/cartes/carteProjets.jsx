import React from 'react';

export default function CarteProjets({ projet }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-left">
            {/* Badge catégorie */}
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white bg-[#4A6FA5] px-3 py-1 rounded-full mb-3">
                {projet.categorie}
            </span>

            {/* Titre */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#222222] mb-1">
                {projet.titre}
            </h3>
            <p className="text-base font-medium text-[#333333] mb-1">
                {projet.entreprise}
            </p>

            {/* Dates & Lieu */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B7280] mb-5">
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {projet.dateDebut} – {projet.dateFin}
                </span>
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {projet.lieu}
                </span>
            </div>

            {/* Problématique */}
            <div className="bg-red-50 rounded-xl p-4 mb-4">
                <h4 className="text-sm font-semibold text-[#222222] mb-1 flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Problématique
                </h4>
                <p className="text-sm text-[#2F3437]">{projet.problematique}</p>
            </div>

            {/* Solution */}
            <div className="bg-green-50 rounded-xl p-4 mb-5">
                <h4 className="text-sm font-semibold text-[#222222] mb-1 flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Solution
                </h4>
                <p className="text-sm text-[#2F3437]">{projet.solution}</p>
            </div>

            {/* Impacts */}
            <h4 className="text-sm font-semibold text-[#222222] mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#4A6FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Impacts
            </h4>
            <div className="grid grid-cols-3 gap-3 mb-5">
                {projet.impacts.map((impact, i) => (
                    <div key={i} className="text-center bg-[#F9FAFB] rounded-xl p-3">
                        <span className="block text-lg font-bold text-[#4A6FA5]">{impact.metrique}</span>
                        <span className="text-xs text-[#6B7280] leading-tight">{impact.label}</span>
                    </div>
                ))}
            </div>

            {/* Choix techniques */}
            <h4 className="text-sm font-semibold text-[#222222] mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#4A6FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Choix Techniques
            </h4>
            <ul className="space-y-2 mb-5">
                {projet.choixTechniques.map((choix, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2F3437]">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#4A6FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {choix}
                    </li>
                ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
                {projet.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4A6FA5] text-white">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
