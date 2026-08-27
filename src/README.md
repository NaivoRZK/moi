# Razakanaivo Andry Malala - portfolio:
## 1-Problémes:
**J'ai besoin d'une page qui permette de présenter mes projets personnels, mes expériences, mes services et mon parcours, tout en offrant un moyen de me contacter facilement.**

## 2-Solution:
**Création d'un site web pour présenter mes projets personnels, mes expériences, mes services, mon parcours et me contacter facilement.**

## 3-Stack:
- React! Liberté totale d'architecture, immense écosystème 
- TailwindsCss: Liberté de design infinie ; performances excellentes avec des fichiers finaux très légers.

## 4-Architecture:
Le projet repose sur une **architecture Jamstack / Frontend Pur**. L'interface React consomme directement des jeux de données **JSON statiques**, éliminant le besoin d'un serveur backend dynamique ou d'une base de données complexe.

```text
/
├── public/              # Assets statiques (images, favicons, documents)
│   └── data/            # Données JSON statiques servies en direct
│       ├── projects.json
        └── expériences.json
        └── services.json
        └── parcours.json
│
├── src/
│   ├── components/      # Composants UI réutilisables (Cards, Navbar, Modales)
│   ├── pages/           # Vues principales de l'application
│   ├── hooks/           # Custom Hooks pour le chargement des fichiers JSON
│   ├── types/           # Définitions TypeScript des structures JSON
│   └── utils/           # Fonctions de filtrage, tri et formatage
│
├── package.json         # Dépendances et scripts du projet
└── README.md
```

## 5-Installations:
### a)-Cloner le dépot :
``` bash
 https://xxxxxxxxxxxxxxxxxxxx
```
### b)Placez-vous dans le dossier du projet.  /site_andry :
``` bash
 cd /site_andry
```

### c)-Installez les dépendances :
``` bash
 npm install
```
### c)-Lancez le projet :
``` bash
 npm run dev
```

### d)-Collez cela dans votre navigateur (Chrome, Firefox, Brave):
``` bash
 http://localhost:port
 
```






  
    

