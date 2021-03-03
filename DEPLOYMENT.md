## Plateforme de deployement
```
Heroku
```
## Pourquoi Heroku ?
```
La première raison principale justifiant le choix de Heroku est la facilité de déploiement. En seulement 4 étapes ou 4 commandes, voici notre application qui est déjà fonctionnelle en ligne, ce qui permet de sauver énormément du temps. Comparativement à GitHub OnePage que je trouve un peu plus pénible par expérience au niveau du déploiement.
```
***
Autres raisons:
* Heroku est un service cloud ce qui permet d’évoluer rapidement son application si elle devient plus gourmande en ressources
* L’autre aspect est le monitoring: dont l’avantage est visualiser l’état de notre application en temps réel et de la gérer
* La dernière raison est que Heroku a une très grosse communauté de développeurs qui la supporte. Ce qui permet de trouver rapidement de l’assistance ou de l’aide lorsqu’on est bloqué sur un problème

## Etapes de deployement
***
Exécuter les commandes suivantes dans l'ordre chronologique à la racine du projet:
* heroku create
* heroku buildpacks:add heroku/nodejs
* heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static 
* git push heroku master

## Url du site déployé
```
Url : https://stormy-citadel-79798.herokuapp.com
```