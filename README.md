# Évaluation Finale - 420-WA6-AG - Programmation Web Avancée

**Étudiant:** [PRÉNOM ÉTUDIANT] [NOM ÉTUDIANT]
**Cours:** 420-WA6-AG - Programmation Web Avancée
**Date:** Automne 2025

## Aperçu du Projet
Ce projet est une application de gestion de tâches construite avec la stack PERN/MERN (MySQL, Express, React, Node.js). Elle permet aux utilisateurs de s'inscrire, de se connecter et de gérer leurs tâches personnelles.

## Technologies
- **Frontend:** React (Vite), CSS Modules
- **Backend:** Node.js, Express.js
- **Base de données:** MySQL
- **Tests:** Jest (Backend), Cypress (E2E)

## Instructions d'Installation

### 1. Configuration de la Base de Données
1. Créez une base de données MySQL nommée `testdb2`.
2. Importez le fichier `server/testdb2.sql` pour créer les tables et les données initiales.

### 2. Configuration du Backend
```bash
cd server
npm install
cp .env.example .env # Configurez vos identifiants DB
npm start
```
Le serveur démarrera sur `http://localhost:5000`.

### 3. Configuration du Frontend
```bash
cd client
npm install
npm run dev
```
L'application sera accessible à `http://localhost:5173`.

## Tests

### Tests Backend (Jest)
```bash
cd server
npm test
```

### Tests E2E (Cypress)
```bash
cd client
npx cypress open
```

## Déploiement

### URLs de Production
- **Frontend (Vercel):** [Lien vers le déploiement Vercel]
- **Backend (Render):** [Lien vers le déploiement Render]
- **Base de données (Railway):** [Lien vers la base de données Railway]

## Licence
Ce projet est à des fins éducatives uniquement.
