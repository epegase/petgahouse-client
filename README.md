# Projet pédagogique Fullstack "PetgaHouse"

Ce projet, **PetgaHouse**, a été développé pour aider les développeurs auto-apprenants comme moi à comprendre l'architecture complète d'une application web.

Il s'inspire entièrement du cours "[TinyHouse, A Fullstack React Masterclass](https://www.newline.co/tinyhouse)" de [Newline.co](https://www.newline.co/)

Ce repertoire porte la première partie qui visait à développer rapidement un POC(_proof of concept_), une démonstration de faisabilité.

Ce POC(_proof of concept_) se présente visuellement ainsi :

![annonces petgahouse](/images/petgahouse_poc.png)

Et un travail est en cours pour l'application complète.

De plus, nous avons aussi commis une série de vidéos Youtube où tout est expliqué. Vous pouvez y jeter un coup d'oeil en cliquant sur l'image...

[![Youtube PetgaHouse](/images/petgahouse.png)](https://youtu.be/bvrfnGtff28)

## Technologies Utilisées & Architecture

Pour ce POC, nous avons utilisé les technologies suivantes :

- **React** pour le front-end,
- **Ant Design** pour les composants React prêts à l'emploi,
- **TypeScript** pour sécuriser notre code,
- **Apollo GraphQL** pour notre API GraphQL,
- **MongoDB Atlas** pour notre base de données

L'architecture de cette démonstration de faisabilité se présente ainsi :

![architecture petgahouse](/images/architecture.png)

## Lancer l'application

```bash
# cloner le repertoire
git clone https://github.com/epegase/petgahouse-client.git

# naviguer dans le root
cd petgahouse-client

# installer les dépendances
npm install

# lancer l'application en mode développement
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000) pour afficher l'application dans votre navigateur.

**Il faut noter que vous aurez besoin de lancer aussi le back-end simultanément. Pour savoir comment lancer le serveur, cliquer ici [petgahouse-server](https://github.com/epegase/petgahouse-server)**

## Penser en React

Notre application, PetgaHouse, a été bootstrappée par "[Create React App](https://create-react-app.dev/)"

A la suite, en s'inspirant de la documentation, notamment de la page "[Penser en React](https://fr.reactjs.org/docs/thinking-in-react.html)", nous avons suivi les étapes listées...
![architecture petgahouse](/images/composants_petgahouse.png)

Après avoir testé notre maquette fonctionnellement, nous avons recouru à [Ant-Design](https://ant.design/docs/react/introduce) pour soigner l'aspect visuel de nos composants.

Vous pouvez visionner le développement du front-end à partir de la [vidéo 26](https://youtu.be/1XiaTzj1dQU) de la playlist consacrée à ce tutoriel.

## La suite ?

Ce tutoriel simple avait pour objectif de présenter rapidement l'architecture d'une application front-end et back-end, comment toutes les parties se tiennent pour former un ensemble.

Le prochain challenge est de concevoir l'application complète sensable au cours dont il s'inspire. Vous pouvez jeter un coup d'oeil et même tester cette application complète à cliquant ici : [Tinyhouse.app](https://www.tinyhouse.app/)
