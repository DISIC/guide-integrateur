# Guide de l'intégrateur

##  Fiche 3&nbsp;: Contenus et structuration

- [Introduction - cas utilisateur][1]
- [Synthèse][9]
- [Cadres][2]
- [Titres][3]
- [Listes][4]
- [Changement de langue][5]
- [Changement de sens de lecture][6]
- [Nouvelles fenêtres][7]
- [Fichiers en téléchargements][8]
- [Voir ailleurs / Ressources][10]
- [Critères RGAA][11]

### <a name="introduction"></a>Introduction - cas utilisateurs

Dans cette fiche, nous allons traiter des éléments de structure utilisés notamment dans les contenus et les corps de page. 

Structurer les contenus avec les éléments appropriés offre une expérience de navigation enrichie pour les utilisateurs de lecteurs d'écran. Un utilisateur aveugle, malvoyant ou ayant des difficultés de lecture et qui utilise un lecteur d'écran pour parcourir le contenu d'une page, va utiliser des raccourcis clavier pour naviguer entre les types d'éléments. Il peut naviguer de titre en titre, aller au prochain champ de formulaire, afficher la liste des <span lang="en">iframe</span> ou encore aller à la liste précédente.

En plus de permettre de naviguer entre éléments, cela lui permet également de les éviter.

### <a name="resume"></a>Synthèse

- Donnez un titre pertinent aux cadres en ligne.
- Utilisez les balises appropriées pour structurer les listes.
- Indiquez les changements de langue et de sens de lecture.
- Indiquez les ouvertures de nouvelles fenêtres.
- Indiquez le format et le poids des documents en téléchargements.

### <a name="cadres"></a>Cadres

Pour un utilisateur déficient visuel utilisant un lecteur d'écran, être prévenu du type de contenu d'un cadre lui permet de choisir s'il va l'explorer. De plus, avoir à disposition un titre fournit à l'utilisateur un moyen supplémentaire de navigation entre les éléments&nbsp;: il va pouvoir rechercher entre tous les cadres, ou aller de cadre en cadre.

Lorsque vous embarquez des contenus issus d'autres sites web via des cadres en ligne, vous devez implémenter un attribut <code>title</code> sur ces cadres qui permettent d'identifier le contenu. Les utilisateurs aveugles sont les plus impactés par cette problématique. Vous devez leur donner les indications suffisantes pour qu'ils sachent quels types de contenus ils vont y trouver. En effet, certains lecteurs d'écran offrent une fonctionnalité permettant d'afficher la liste des cadres de la page, le <code>title</code> servira à identifier les cadres dans cette liste.

````
<iframe title="Fil Twitter de la DInSIC"></iframe>
````

Dans le cas des cadres techniques, non visibles et utiles uniquement à la gestion des données par les scripts, un titre générique sur le modèle «&nbsp;Cadre technique&nbsp;» est suffisant.

### <a name="titres"></a>Titres

Utiliser des titres et des sous-titres permet de structurer et découper un texte. Cela fournit à l'utilisateur un plan du document et lui permet de naviguer de titre en titre pour se déplacer plus rapidement dans le contenu de la page.

Le titrage des contenus est une étape importante dans la structuration des contenus qui répond à deux besoins&nbsp;: identifier rapidement un contenu recherché et, surtout, naviguer rapidement dans le contenu en se déplaçant de titre en titre.

Il y a 3 obligations pour le titrage des contenus&nbsp;:

- la page doit comporter au moins un titre <code>&lt;h1&gt;</code> ;
- la hiérarchie de titres doit être cohérente&nbsp;;
- tous les titres nécessaires doivent être présents.

Une hiérarchie cohérente est une hiérarchie qui ne contient pas de saut dans les niveaux de titres. Par exemple, après un `h2` on doit trouver un `h3` ou un autre `h2`, mais surtout pas un `h4`.

Enfin, tous les titres nécessaires à l'architecture de l'information doivent être présents. Il s'agit de proposer un plan de la page permettant de comprendre et de naviguer rapidement dans le contenu.

Pour valider la structure de votre page, vous pouvez utiliser <a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/">l'extension <span lang="en">Firefox</span> <span lang="en">HeadingsMap</span></a>. Sélectionnez l'onglet «&nbsp;<span lang="en">Headings</span>&nbsp;» et vérifiez la cohérence et l'imbrication des titres.

#### ARIA

ARIA propose des propriétés qui permettent de transformer n'importe quel élément HTML en titre&nbsp;: <code>role="heading"</code> et <code>aria-level="n"</code>.

Toutefois, certaines fonctionnalités de navigation rapide dans les titres  peuvent ne plus fonctionner avec une implémentation de titre ARIA, qui ne devrait être utilisé que lorsque le recours à un vrai titre HTML n'est pas possible.

````
<div role="heading" aria-level="2">Accueil</div>
````

**Note&nbsp;:** les outils de tests automatiques comme <span lang="en">HeadingsMap</span> ne font pas entrer les titres créés avec des propriétés ARIA dans les plans de documents qu'ils génèrent. Attention donc à vérifier manuellement vos hiérarchies si vous utilisez ce type d'implémentation.

### <a name="listes"></a>Listes

Pour un utilisateur aveugle naviguant avec un lecteur d'écran, le nombre d'éléments que contient la liste est annoncé, ainsi que le niveau de l'élément dans la liste. Ainsi, si l'utilisateur juge la liste trop longue, il pourra tout simplement l'éviter plutôt que de la parcourir en entier, il peut aussi aller au début de la liste, ou à la fin directement.

Toutes les listes doivent être structurées avec les balises appropriées. On distingue 3 types de listes&nbsp;:
- les listes non ordonnées <code>ul li</code>&nbsp;;
- les listes ordonnées <code>ol li</code>&nbsp;;
- les listes de définitions <code>dl dd dt</code>.

Toutes les suites d'éléments doivent être considérées comme une liste. Par exemple, une succession de liens, une succession d'indications courtes (recette de cuisine par exemple). Ces structures de listes sont surtout utiles aux utilisateurs aveugles pour qui la liste, la nature de la liste, le nombre d'éléments et le niveau de l'élément en cours de lecture sont vocalisés. De plus, grâce aux flèches de direction, ces utilisateurs peuvent circuler d'item de liste en item de liste ou encore,à l'aide d’un raccourci clavier, se déplacer rapidement de liste en liste.

Dans certains cas néanmoins, le recours à une liste peut-être considéré comme inutile. Par exemple, pour un bloc d'adresse isolé dans un contenu le recours à une liste n'a pas d'utilité pratique.

#### ARIA

ARIA propose des propriétés qui permettent de transformer une succession d'éléments en liste non ordonnée&nbsp;: <code>role=list</code> et <code>role=list-item</code>.

Toutefois, certaines fonctionnalités de navigation rapide dans les éléments de listes peuvent ne plus fonctionner avec une implémentation de liste ARIA qui devrait être réservée lorsqu'il n'est pas possible d'utiliser une vraie liste HTML.

````
  <div role="list">
	<p role="list-item">Accueil</p>
	<p role="list-item">Actualités</p>
	<p role="list-item">Contact</p>
  <div>
````

### <a name="langue"></a>Changement de langue

Pour tous les termes de langue étrangère qui n'appartiennent pas au dictionnaire de la langue française (par exemple&nbsp;: brainstorming ) et qui ne sont pas des noms propres (par exemple Watson), vous devez indiquer un changement de langue avec l'attribut <code>lang</code> sur l'élément lui-même ou un de ses éléments parents.

L'indication des changements de langue est nécessaire pour indiquer aux technologies d'assistance de modifier la restitution vocale d'un élément. Les changements de langue concernent tous les contenus, y compris les valeurs de certains attributs comme <code>title</code>. Il n'est pas possible d'indiquer des changements de langue dans une valeur d'attribut elle-même, dans ce cas le changement de langue est indiqué sur l'élément qui contient l'attribut. Un lien affecté d'un title en anglais devra comporter un attribut lang="en". Lorsque l'attribut contient plusieurs passages de texte dans des langues différentes, il est admis qu'aucune indication pertinente ne peut être faite et donc qu'aucun attribut ne soit présent.

La valeur de l'attribut <code>lang</code> correspond au [code ISO de 2 caractères (ISO 639-1)][12] ou 3 caractères (ISO 639-2 et suivants).

````
<p>Retrouvez vos interprètes préférés au cours de l'<span lang="en">after</span> organisé par nos partenaires.</p>
````

### <a name="senslecture"></a>Changement de sens de lecture

Pour les changements de sens de lecture, vous devez implémenter l'attribut <code>dir</code> sur l'élément lui-même ou un parent pour traiter des contenus successifs. L'attribut <code>dir</code> prend une des valeurs suivantes&nbsp;:

- <code>ltr</code>&nbsp;: <span lang="en">left to right</span>, de gauche à droite
- <code>rtl</code>&nbsp;: <span lang="en">right to left</span>, de droite à gauche

````
  <span lang="ar" dir="rtl">
شكرا جزيلا
  </span>
````

### <a name="nouvellesfenetres"></a>Nouvelles fenêtres

Les ouvertures de nouvelles fenêtres peuvent demander beaucoup d'efforts à certains utilisateurs pour revenir à la page qu'ils consultaient. Ainsi, un utilisateur naviguant uniquement à l'aide de la touche tabulation va devoir effectuer des manipulations supplémentaires pour fermer et revenir à la fenêtre d'origine. Les utilisateurs ayant des troubles de l'attention peuvent également être désorientés par les ouvertures de nouvelles fenêtres, surtout si elles ne sont pas de leur fait (ouverture sans action de l'utilisateur).

Pour chaque élément interactif qui ouvre une nouvelle fenêtre (ou un nouvel onglet), vous devez avertir l'utilisateur.

Sont concernés&nbsp;:

- les liens qui possèdent l'attribut <code>target</code> (avec n'importe quelle valeur sauf <code>_self</code>,<code>_top</code> ou <code>_parent</code>)&nbsp;;
- les scripts qui déclenchent l'ouverture de nouvelles fenêtres&nbsp;;
- les éléments <code>object</code> ou <code>embed</code> qui ouvrent une nouvelle fenêtre&nbsp;;
- les contrôles de formulaires (<code>button</code>, <code>input type="submit"</code>, <code>input type="reset"</code> par exemple) qui déclenchent l'ouverture de nouvelles fenêtres.

Pour avertir l'utilisateur, vous pouvez&nbsp;:

- ajouter la mention «&nbsp;nouvelle fenêtre&nbsp;» directement dans l'intitulé de l'élément concerné&nbsp;;
- ajouter, si l'élément le permet, un <code>title</code> sur le modèle&nbsp;: Intitulé du lien - nouvelle fenêtre (attention à respecter les règles de création des <code>title</code>).

#### Pas de nouvelles fenêtres sans action de l'utilisateur

L'ouverture d'une nouvelle fenêtre lorsque l'utilisateur ne l'a pas sollicitée peut être très perturbante.

Si cet usage est fortement déconseillé, il y a un cas où la gêne occasionnée est trop importante pour être accepté. Cela concerne l'ouverture de nouvelles fenêtres au chargement de la page.

En effet, dans ce cas les personnes aveugles, utilisatrices de lecteur d'écran, et les personnes handicapées mentales peuvent ne plus savoir quelle est la page de contenu principal.

**Important**&nbsp;: L'ouverture de nouvelles fenêtres au chargement de la page est strictement interdite.

### <a name="telechargements"></a>Fichiers en téléchargement

Sur le même principe que l'ouverture de nouvelles fenêtres, pour tous les documents en téléchargements, vous devez indiquer&nbsp;: 
- le poids du document&nbsp;;
- le format (PDF, doc, xls&hellip;)&nbsp;;
- la langue si elle est différente de celle du site.

Cette information peut être mise à disposition dans le contexte adjacent du lien ou de l'élément de formulaire (par exemple la phrase). Il est néanmoins préférable d'ajouter ces informations sur l'élément lui-même, par exemple l'intitulé ou le <code>title</code>.

````
<p>Téléchargez le <a href="#" title="catalogue 2016 (PDF, 450ko)">catalogue 2016</a></p>
````

Lorsque les documents en téléchargement sont générés à la volée (par exemple, le résultat d'un questionnaire ou d'une recherche) et qu'il n'est a priori pas possible de définir le poids du document, il est admis que seul le format soit indiqué.

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [Code de langue ISO 639-1][13]
- [La spécification ARIA au sujet du role="list"][14]
- <a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/"><span lang="en">HeadingsMap</span>, extension <span lang="en">Firefox</span> pour contrôler le plan du document</a>

### <a name="criteres"></a>Critères RGAA

- 2.1 [A]
- 2.2 [A]
- 8.7 [AA]
- 8.8 [AA]
- 8.10 [A]
- 9.1 [A]
- 9.3 [A]
- 13.2 [A]
- 13.3 [A]
- 13.6 [A]

### Sommaire du guide de l'intégrateur

* [Introduction][15]
* [Fiche 1&nbsp;: Gabarit général][16]
* [Fiche 2&nbsp;: Navigation][17]
* [Fiche 3&nbsp;: Contenus][18]
* [Fiche 4&nbsp;: Tableaux][19]
* [Fiche 5&nbsp;: Liens][20]
* [Fiche 6&nbsp;: Formulaires][21]
* [Fiche 7&nbsp;: Prise de focus][22] 
* [Fiche 8&nbsp;: Respecter la distinction fond et forme][23]
* [Fiche 9&nbsp;: Images][24]
* [Fiche 10&nbsp;: Informations par la couleur et la forme][25] 
* [Fiche 11&nbsp;: Agrandissement des caractères][26]
* [Fiche 12&nbsp;: Multimédia][27]

[1]:	#introduction
[2]:	#cadres
[3]:	#titres
[4]:	#listes
[5]:	#langue
[6]:	#senslecture
[7]:	#nouvellesfenetres
[8]:	#telechargements
[9]:	#resume
[10]:	#ailleurs
[11]:	#criteres
[12]:	https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1
[13]:	https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1
[14]:	https://www.w3.org/TR/wai-aria/roles#list
[15]:	0-intro.md
[16]:	1-gabarit-general.md
[17]:	2-navigation.md
[18]:	3-contenus.md
[19]:	4-tableaux.md
[20]:	5-liens.md
[21]:	6-formulaires.md
[22]:	7-focus.md
[23]:	8-distinction-fond-forme.md
[24]:	9-images.md
[25]:	10-infos-forme-couleur.md
[26]:	11-agrandissement-des-caracteres.md
[27]:	12-multimedia.md
