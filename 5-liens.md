# Guide de l'intégrateur

##  Fiche 5&nbsp;: Liens

- [Introduction - cas utilisateur][1]
- [Synthèse][6]
- [Liens explicites][2]
- [Liens images][3]
- [Liens vides][4]
- [Titre de liens <code>title</code>][5]
- [Voir ailleurs / Ressources][7]
- [Critères RGAA][8]

### <a name="introduction"></a>Introduction - cas utilisateurs

Pour un utilisateur présentant une déficience visuelle et qui n'a pas une vision globale de la page, il est essentiel de comprendre la fonction d'un lien. En effet, le contexte visuel et la proximité d'information ne sont pas toujours disponibles pour ces utilisateurs aveugles ou malvoyants.

Pour des utilisateurs présentant des déficiences cognitives, des liens peu explicites n'incitent pas à l'action. L'utilisateur ne sait pas et ne comprend pas vers quelle page il se dirige si l'intitulé du lien ne l'explique pas suffisamment.

Lorsque les liens sont constitués par des images seules, c'est le texte alternatif de l'image qui constitue l'intitulé du lien. À ce moment, le texte alternatif à renseigner n'est plus la description de l'image, mais la destination du lien. Si l'image n'a pas d'alternative, le lien est alors un lien vide. Un utilisateur qui navigue à la voix ne pourra par exemple pas cliquer sur ce lien, ne sachant pas comment le nommer.

### <a name="resume"></a>Synthèse

- Attention aux liens vides.
- Définissez des intitulés de liens pertinents.
- Respectez la construction des titres de liens.

### <a name="liensexplicites"></a>Liens explicites

Nous ne détaillerons pas ici les liens explicites, puisqu'ils ne sont généralement pas du ressort de l'intégrateur, mais plutôt du concepteur, du designer et du contributeur. Nous vous renvoyons à la [fiche «&nbsp;Créer du lien sans perdre son chemin&nbsp;» du guide «&nbsp;Contribuer sur le web de manière accessible&nbsp;»][9].

À titre d'information, un lien doit être explicite par lui-même (son intitulé) ou grâce à son contexte dont les principaux sont&nbsp;;
- le titre (<code>hx</code>) précédant le lien&nbsp;;
- le paragraphe (<code>p</code>) dans lequel est inséré le lien&nbsp;;
- la liste (<code>ul ol dl</code>) dans laquelle est inséré le lien&nbsp;;
- la ligne dans laquelle est inséré le lien.

Lorsqu'aucun de ces contextes ne permet de rendre le lien explicite, le recours au title, dont l'utilisation est détaillée plus bas, est la dernière solution possible.

### <a name="liensimages"></a>Liens images

[Page de démonstration][26]

Lorsqu'un lien est composé uniquement d'une image, c'est l'alternative de cette image qui constitue son intitulé.

Par exemple, pour les images `<img>`, c'est le contenu de l'attribut `alt` qui est l'intitulé du lien&nbsp;: 

````
<a href="#"><img src="home.png" alt="Accueil" /></a>
````
Dans ces cas, l'alternative de l'image indique à l'utilisateur la destination du lien.

#### Alternative en fonction du type d'image

Selon le type d'image, l'intitulé du lien (l'alternative de l'image), est défini différemment&nbsp;:

- balise `img` ou balise `area` possédant un attribut href, l’alternative est le contenu de l’attribut `alt`&nbsp;;
- balise `object`, l’alternative est contenue entre `<object>` et`</object>` &nbsp;;
- balise `canvas`, l’alternative est contenue entre `<canvas>`et `</canvas>` &nbsp;;
- balise `embed`, l’alternative est contenue entre `<embed>` et `</embed>`&nbsp;;
- balise `svg`, l’alternative est contenue dans les attributs `title`, `aria-label` ou la balise `<desc>`.

#### Liens composites&nbsp;: image et texte

Lorsque le lien est constitué d'une image et d'un texte, si le texte visible est suffisant à comprendre la destination du lien, alors l'image est une image de décoration et doit avoir un <code>alt</code> vide.

````
<a href="#"><img src="home.png" alt="" /> Accueil </a>
````

### <a name="liensvides"></a>Liens vides

Tous les liens doivent avoir un intitulé entre la balise <code>&lt;a&gt;</code> et <code>&lt;/a&gt;</code>. Peu importe la mise en forme par la suite, il faut obligatoirement un texte explicite entre ces balises.

Il est courant de trouver des liens vides dépourvus de texte. C'est souvent le cas des liens mis en forme par des icônes générées en CSS ou des images en propriété de fond, mais également souvent le cas d'images HTML (<code>img</code>) dépourvues d'alternative.

Dans le cas des liens mis en forme en CSS avec des icônes, la réparation consiste à mettre un intitulé texte pertinent positionné hors écran. Le graphisme est conservé et les utilisateurs de lecteurs d'écran accèdent à l'information textuelle.

### <a name="titreliens"></a>Titre de liens <code>title</code>

L'attribut <code>title</code> sert surtout à apporter une information complémentaire à l'intitulé du lien et à le rendre explicite. Il doit toujours être construit sur le modèle&nbsp;: intitulé du lien + informations complémentaires.

````
<a href="#" title="En savoir plus sur l'accessibilité numérique">En savoir plus</a>
````

Les cas de <code lang="en">title</code> non conforme sont&nbsp;; 
- les <code lang="en">title</code> identiques aux intitulés de lien&nbsp;;
- les <code lang="en">title</code> vides&nbsp;;
- les <code lang="en">title</code> qui ne reprennent pas au moins le contenu de l'intitulé du lien.

Les seuls cas où l'utilisation de <code lang="en">title</code> identiques aux intitulés de lien est acceptable sont les cas des liens-images ou mis en forme par une icône en CSS. Dans ces cas, pour permettre à tous d'accéder à l'information (une icône n'est pas nécessairement comprise par tous, et la destination d'un lien-image n'est pas évidente pour tout le monde), un <code lang="en">title</code> identique est autorisé, voire encouragé.

**Important&nbsp;: la présence seule d'un `title` sur un lien n'en fait pas un lien conforme. Un lien doit toujours avoir un intitulé texte entre les balises `<a>` et `</a>`**

````
<a href="#" title="Référentiel technique"><img src="img.png" alt="Référentiel technique" /></a>
<a href="#" title="Paramètres"><span class="sr">Paramètres<span><span class="fa fa-gear" aria-hidden="true"></span></a>
/** la classe .sr positionne le texte hors écran pour qu'il puisse être restitué à un utilisateur de lecteur d'écran **/
````

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [Fiche «&nbsp;Créer du lien sans perdre son chemin&nbsp;» du guide «&nbsp;Contribuer sur le web de manière accessible&nbsp;»][12]

### <a name="criteres"></a>Critères RGAA

- 6.1 [A]
- 6.2 [A]
- 6.3 [AAA]
- 6.4 [A]
- 6.5 [A]

### Sommaire du guide de l'intégrateur

* [Introduction][13]
* [Fiche 1&nbsp;: Gabarit général][14]
* [Fiche 2&nbsp;: Navigation][15]
* [Fiche 3&nbsp;: Contenus][16]
* [Fiche 4&nbsp;: Tableaux][17]
* [Fiche 5&nbsp;: Liens][18]
* [Fiche 6&nbsp;: Formulaires][19]
* [Fiche 7&nbsp;: Prise de focus][20] 
* [Fiche 8&nbsp;: Respecter la distinction fond et forme][21]
* [Fiche 9&nbsp;: Images][22]
* [Fiche 10&nbsp;: Informations par la couleur et la forme][23] 
* [Fiche 11&nbsp;: Agrandissement des caractères][24]
* [Fiche 12&nbsp;: Multimédia][25]

[1]:	#introduction
[2]:	#liensexplicites
[3]:	#liensimages
[4]:	#liensvides
[5]:	#titreliens
[6]:	#resume
[7]:	#ailleurs
[8]:	#criteres
[9]:	http://disic.github.io/guide-contribuer_accessible/liens.html
[12]:	http://disic.github.io/guide-contribuer_accessible/liens.html
[13]:	0-intro.md
[14]:	1-gabarit-general.md
[15]:	2-navigation.md
[16]:	3-contenus.md
[17]:	4-tableaux.md
[18]:	5-liens.md
[19]:	6-formulaires.md
[20]:	7-focus.md
[21]:	8-distinction-fond-forme.md
[22]:	9-images.md
[23]:	10-infos-forme-couleur.md
[24]:	11-agrandissement-des-caracteres.md
[25]:	12-multimedia.md
[26]:   demo/5-liens/index.html
