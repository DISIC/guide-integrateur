# Guide de l'intégrateur

## Fiche 10&nbsp;: Informations par la forme et la couleur

- [Introduction - cas utilisateur][1]
- [Synthèse][4]
- [Informations par la couleur][2]
- [Informations par la forme, taille ou position][3]
- [Voir ailleurs / Ressources][5]
- [Critères RGAA][6]

### <a name="introduction"></a>Introduction - cas utilisateurs

Les informations données par la forme et les informations données par la couleur impactent de nombreux utilisateurs. En premier lieu, les personnes aveugles qui ne peuvent pas voir les couleurs ou les formes, mais également les utilisateurs qui ne voient pas ou ne distinguent pas certaines couleurs ou combinaisons de couleurs. Pour tous ces utilisateurs, une information donnée uniquement par la forme ou la couleur sera ignorée.

### <a name="resume"></a>Synthèse

- Ne pas donner d'informations uniquement par la couleur.
- Ne pas donner d'informations uniquement par la forme.
- Implémenter des alternatives à la couleur et à la forme qui soient pertinentes.

### <a name="informationcouleur"></a>Informations par la couleur

Le cas le plus courant d'information par la couleur est l'indication de la page active dans le menu de navigation. Dans ce cas, une réparation simple consiste à fournir l'information sous forme textuelle afin qu'un utilisateur qui ne perçoit pas les couleurs (aveugle ou utilisateur ne percevant pas les contrastes) puisse accéder à la même information. Dans le cas du lien actif, on pourra tout simplement ajouter dans le titre du lien une mention sur le modèle&nbsp;: «&nbsp;Accueil&nbsp;-&nbsp;page active&nbsp;».

Le principe à garder en tête est que toute couleur qui véhicule une information doit être accessible par un autre moyen, notamment un élément textuel.

À noter que l'utilisation d'une information donnée par la forme comme alternative à une information donnée par la couleur sera insuffisante, les utilisateurs aveugles ne voyant ni forme ni couleur.

### <a name="informationforme"></a>Informations par la forme, taille ou position

Les informations données par la forme, la taille ou la position regroupent une grande variété de cas. Il peut s'agir d'indiquer par un effet CSS qu'un contenu est «&nbsp;affiché&nbsp;» ou «&nbsp;masqué&nbsp;», d'indiquer dans un nuage de tags le score de pertinence par la taille des caractères, d'indiquer l'élément actif d'un contenu par un effet CSS comme un triangle inséré en propriété de fond.

Dans ces cas, la réparation la plus simple est pratiquement identique à celle pour les informations données par la couleur&nbsp;: mettre à disposition un équivalent soit avec une image avec une alternative (attribut `alt`) pertinente, soit à l’aide d’une icône doublée d'un texte alternatif positionné hors écran.

Dans l'extrait de code suivant, la période sélectionnée indiquée par un triangle noir utilise une image (balise `<img>`) avec une alternative pertinente.

````
	<button><img src="monimage.png" alt="période sélectionnée" />12h à 14h</button>
````

**À noter que l'utilisation d'une information donnée par la couleur comme seule alternative à une information donnée par la forme serait insuffisante. Les utilisateurs aveugles ne voyant ni forme ni couleur.**

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [La section «&nbsp;Information par la couleur&nbsp;» de la fiche «&nbsp;Couleurs&nbsp;» dans le guide «&nbsp;Contribuer sur le Web de manière accessible&nbsp;»][7]

### <a name="criteres"></a>Critères RGAA

- 3.1 [A]
- 3.2 [A]
- 10.14 [A]
- 10.15 [A]

### Sommaire du guide de l'intégrateur

* [Introduction][8]
* [Fiche 1&nbsp;: Gabarit général][9]
* [Fiche 2&nbsp;: Navigation][10]
* [Fiche 3&nbsp;: Contenus][11]
* [Fiche 4&nbsp;: Tableaux][12]
* [Fiche 5&nbsp;: Liens][13]
* [Fiche 6&nbsp;: Formulaires][14]
* [Fiche 7&nbsp;: Prise de focus][15] 
* [Fiche 8&nbsp;: Respecter la distinction fond et forme][16]
* [Fiche 9&nbsp;: Images][17]
* [Fiche 10&nbsp;: Informations par la couleur et la forme][18] 
* [Fiche 11&nbsp;: Agrandissement des caractères][19]
* [Fiche 12&nbsp;: Multimédia][20]

[1]:	#introduction
[2]:	#informationcouleur
[3]:	#informationforme
[4]:	#resume
[5]:	#ailleurs
[6]:	#criteres
[7]:	http://disic.github.io/guide-contribuer_accessible/couleurs.html
[8]:	0-intro.md
[9]:	1-gabarit-general.md
[10]:	2-navigation.md
[11]:	3-contenus.md
[12]:	4-tableaux.md
[13]:	5-liens.md
[14]:	6-formulaires.md
[15]:	7-focus.md
[16]:	8-distinction-fond-forme.md
[17]:	9-images.md
[18]:	10-infos-forme-couleur.md
[19]:	11-agrandissement-des-caracteres.md
[20]:	12-multimedia.md
