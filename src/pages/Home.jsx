import React from 'react';
import logo from "../assets/andry.jpg";

export default function Home(){
    return(
        <>
        <div class="flex  gap-4">
           <section class="flex-1">
              <img src={logo} alt="logo"/>
           </section>
       <section class="flex-1 bg-gray-100">
          <h1>Razakanaivo Andry Malala</h1>
          <h2>Développeur Fullstack Python, JS & ERP Odoo</h2>
        <p>
          Passionné par l'ingénierie logicielle, je considère que les langages de programmation, les méthodologies de développement et les architectures ne sont que des outils permettant de résoudre des problèmes réels.<br />
          J'utilise Python, JavaScript et Odoo pour concevoir et intégrer des solutions adaptées à chaque besoin.
       </p>
           <button>Télécharger CV</button>
       </section>
      </div>
      </>

 );
}