import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/button/Button';

export default function Contacts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Message envoyé !');
        reset();
    };

    return (
        <section className="min-h-screen px-6 py-20 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
                {/* Titre */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">
                        Me Contacter
                    </h1>
                    <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                        Une question, un projet ou une collaboration ? N'hésitez pas à me contacter.
                    </p>
                </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-md p-8 lg:p-12 border border-gray-100 space-y-6">
                    {/* Nom */}
                    <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-[#222222] mb-2">
                            Nom complet
                        </label>
                        <input
                            id="nom"
                            type="text"
                            {...register('nom', { required: 'Le nom est requis' })}
                            className={`w-full px-4 py-3 rounded-lg border text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] transition-colors ${
                                errors.nom ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Votre nom"
                        />
                        {errors.nom && (
                            <p className="mt-1 text-sm text-red-500">{errors.nom.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'L\'email est requis',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Adresse email invalide',
                                },
                            })}
                            className={`w-full px-4 py-3 rounded-lg border text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] transition-colors ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="exemple@email.com"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Sujet */}
                    <div>
                        <label htmlFor="sujet" className="block text-sm font-medium text-[#222222] mb-2">
                            Sujet
                        </label>
                        <input
                            id="sujet"
                            type="text"
                            {...register('sujet', { required: 'Le sujet est requis' })}
                            className={`w-full px-4 py-3 rounded-lg border text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] transition-colors ${
                                errors.sujet ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Sujet de votre message"
                        />
                        {errors.sujet && (
                            <p className="mt-1 text-sm text-red-500">{errors.sujet.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#222222] mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            {...register('message', {
                                required: 'Le message est requis',
                                minLength: { value: 10, message: 'Minimum 10 caractères' },
                            })}
                            className={`w-full px-4 py-3 rounded-lg border text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] transition-colors resize-none ${
                                errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Votre message..."
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Bouton */}
                    <div className="text-center pt-4">
                        <Button variant="primary" className="inline-flex items-center gap-2">
                            Envoyer
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
