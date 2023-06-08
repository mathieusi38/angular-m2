# AngularM2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

# Student

- Nom: Mathieu SIAUD
- Classe: M2 IW
- Expérience en Angular : Première fois, jamais utilisé

## Pour lancer le projet

- Lancer la commande `npm install` pour installer les dépendances
- Lancer la commande `ng serve --open` pour lancer le serveur

# Structure et choix de librairies

## Fonctionnalités

- Se connecter, s'inscrire, se déconnecter
- Voir la liste des jeux vidéos (avec pagination) avec des informations sur la date de sortie, la note données par la communauté et le nombre de vote ( API )
- Voir la liste des éditeurs de jeux vidéos (avec pagination) avec des informations sur le total de jeux vidéos ( API )
- Permet d'ajouter des commentaires avec comme information le titre et une description ( Firebase )
- Permet de voir les commentaires des utilisateurs ( Firebase )
- Permet de supprimer et modifier des commentaires ( Firebase)

## L'API rawg.io

L'API de rawg.io permet de récupérer beaucoup d'informations sur les jeux vidéos ( date de sortie, développeurs, etc). 

## Structure de l'application

- `environment` : Dossier contenant les variables d'environnement de l'application pour le bon fonctionnement de firebase
-  `app.module.ts` : Importation des modules de l'application
-  `app-routing.module.ts` : Permet de gérer le routage de l'application et gérer les guards
-  `components` : Dossier contenant les composants de l'application
-  `services` : Dossier contenant les services de l'application
-  `models` : Dossier contenant les modèles de l'application qui permet de typer les données de l'application et d'améliorer la  la maintenabilité du code
-  `assets` : Dossier contenant les assets de l'application
- `pipes` : Dossier contenant les pipes custom de l'application

## Choix de librairies

- `Angular Material` : Librairie de composants pour Angular qui permet de gagner du temps sur le développement de l'application et d'avoir une application réactive


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
