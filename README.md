Jeux - pour Sarah V3

Auteur : Hervé le hibou

Le plugin Jeux est un petit plugin fonctionnant sous SARAH version 3, capable de faire plusieurs petites choses.

Permet de simuler le lancement aléatoire d'un dé virtuel, si vous jouez à un jeu nécéssitant un dé et que vous n'en avez pas sous la main.

Permet de simuler le lancement aléatoire d'un dé virtuel pipé, (en trichant 50% de chance de tomber sur le résultat souhaité).

Permet de simuler le lancement aléatoire de deux dés virtuels, si vous jouez à un jeu nécéssitant deux dés et que vous n'en avez pas sous la main.

Permet de simuler le lancement aléatoire de deux dés virtuels pipés, (en trichant 50% de chance de tomber sur le résultat souhaité).

Permet de choisir une carte au hasard d'un jeu de poker virtuel (jeu de 52 cartes).

Permet de jouer à pile ou face avec une pièce virtuelle lancée par Sarah.
Installation :

Téléchargez et dézippez le plugin sur votre ordinateur.

Au cas ou ce ne serait pas déjà le cas, renomez le dernier dossier jeux et placez le directement sous le répertoire C:/sarah/plugins/

le répertoire jeux doit contenir directement les fichiers suivants :
index.html (le présent fichier d'aide)
jeux.js
jeux.prop
jeux.xml
portlet.css
portlet.html
portlet_back.html
Le sous répertoire "images" contenant le fichier suivant :
jeux.png
Le sous répertoire "medias" contenant les fichiers suivants :
carte.mp3
de.mp3
piece.mp3
IMPORTANT : Vous ne devez pas avoir de sous répertoires du type C:/sarah/plugins/jeux-master/jeux/

Fonctionnement du plugin :

Ce pluging est entièrement basé sur le hasard (ou hasard un peu forcé pour les dés pipés) et lance selon des phrases clés une action avec des réponses aléatoires parmi un choix de plusieurs réponses possibles. Le tout agrémenté d'un petit effet sonore au format mp3 soulignant l'action.

Lancement d'un dé virtuel :
Sarah, lance un dé
-----------------------------------------------------------------------------------

Lancement d'un dé virtuel pipé (truqué) :
Sarah, lance moi un dé
Le dé est actuellement pipé avec le chiffre 6, vous avez 50% de fois plus de chance que le résultat soit le 6, le chiffre pipé est modifiable dans le fichier jeux.js en remplaçant les valeurs Txt[7] à Txt[12] de la case "1depipe".

-----------------------------------------------------------------------------------

Lancement de deux dés virtuels :
Sarah, lance deux dés
-----------------------------------------------------------------------------------

Lancement de deux dés virtuels pipés (truqués) :
Sarah, lance moi deux dés
Les deux dés sont actuellement pipés avec le chiffre 6, vous avez 50% de fois plus de chance que le résultat soit un double 6, les chiffres pipés sont modifiables dans le fichier jeux.js en remplaçant les valeurs Txt[36] à Txt[70] de la case "2depipe".

-----------------------------------------------------------------------------------

Choix d'une carte au hasard dans un jeu de poker virtuel de 52 cartes :
Sarah, choisi une carte
Sarah, choisi une autre carte
-----------------------------------------------------------------------------------

Jouer à pile ou face :
Sarah, pile ou face
Sarah, on joue à pile ou face
A ce moment, Sarah vous demandera de choisir entre pile ou face.

Choisir le côté pile :
Sarah, pile

Choisir le côté face :
Sarah, face
Bonne utilisation à tous.

Les remontées sur le forum sont les bienvenues.
