# Guide de l'intégrateur

## Fiche 1&nbsp;: Gabarit général

- [Introduction - cas utilisateur][1]
- [Synthèse][5]
- [L'essentiel (Doctype et langue de traitement)][2]
- [Éléments HTML5 et landmarks ARIA][3]
- [Pour aller plus loin][4]
- [Voir ailleurs / Ressources][6]
- [Critères RGAA][7]

### <a name="introduction"></a>Introduction - cas utilisateurs

Dans cette fiche, nous expliquons la structure de base d'une page web et les éléments primordiaux que vous devez mettre en place avant toute autre intégration. C'est le squelette de votre site web. Vous verrez comment structurer votre gabarit avec les éléments HTML5 et les landmarks ARIA.

Les utilisateurs aveugles ne perçoivent pas les mises en forme. Pourtant, celles-ci aident à la compréhension de la fonction de certaines régions de la page.

Par exemple, on trouve généralement le menu de navigation sous forme horizontale avec une certaine mise en exergue, de façon à faire comprendre que cet élément permet de naviguer dans le site. Pour un utilisateur aveugle, cette navigation n'est rien d'autre qu'une liste de liens, comme il peut y en avoir d'autres dans la page. 

Utiliser des marqueurs sémantiques (balises HTML5 et landmarks ARIA) va permettre d'enrichir la restitution pour ces utilisateurs&nbsp;: la navigation principale ne sera plus perçue simplement comme une liste de liens, elle sera restituée à l'utilisateur comme un élément de navigation, par l’intermédiaire du lecteur d'écran. L'utilisateur peut alors la distinguer des autres listes de liens. 

De plus, ces marqueurs sémantiques vont également constituer des éléments de navigation rapide dans la page. Grâce à un raccourci clavier, certains utilisateurs vont pouvoir naviguer entre les régions que vous aurez identifiées.

### <a name="resume"></a>Synthèse

- Déclarez un <span lang="en">doctype</span> valide.
- Déclarez toujours la langue de traitement sur la balise <code>&lt;html&gt;</code>.
- Veillez à toujours valider votre code source.
- Structurez votre page avec les landmarks ARIA.
- Si votre site est en HTML5, structurez votre page avec les balises HTML5 et les landmarks ARIA.

### <a name="essentiel"></a>L'essentiel

#### Le <span lang="en">DOCTYPE</span> et la langue

Votre document doit débuter par une déclaration de <span lang="en">doctype</span>. Le W3C met à disposition [une liste des doctypes valides utilisables sur le web][8].

Une fois cette déclaration faite, vous devez définir la langue de traitement principal de votre page. Si votre site est en français, alors vous devez déclarer du français.

````
<!DOCTYPE html>
<html lang="fr">

</html>
````

#### Un code source valide

Cette déclaration du type de document induit que vous respectez ensuite les normes d'écriture correspondantes, et notamment que votre code source est valide. Pour valider votre code source, utilisez toujours le code source généré (avec JavaScript) avec l'<a href="https://validator.w3.org/">outil en ligne de validation du W3C</a>.

Un code source valide est essentiel pour la robustesse du site et pour s'assurer d'un rendu homogène avec tous les navigateurs. En effet, un code mal structuré est généralement «&nbsp;réparé&nbsp;» par le navigateur. Mais tous les navigateurs ne réparent pas de la même manière, ce qui peut générer des différences importantes d'un navigateur à l'autre. Un code source valide est donc un prérequis essentiel, car il assure un code robuste et univoque.

L'outil en ligne sort deux types de résultats&nbsp;: les <span lang="en">warnings</span> et les <span lang="en">errors</span>. Seules les erreurs sont à prendre en compte. Le RGAA ne demande pas un code source valide à 100%.
Par exemple, les erreurs relatives à l'écriture des URL (notamment la présence d'esperluette dans les URL) ne sont pas considérées comme des erreurs d'accessibilité. Si ce sont les seules erreurs sur votre page web, alors votre code source est valide au regard du RGAA.

Pour le RGAA, un code source valide est un code source&nbsp;:

- dont les balises respectent les règles d'écriture (les balises sont conformes au type de document déclaré)&nbsp;;
- dont l'imbrication des balises est conforme (par exemple, pas de lien imbriqué dans un autre lien)&nbsp;;
- dont l'ouverture et la fermeture des balises sont conformes (par exemple, la règle «&nbsp;premier ouvert, dernier fermé&nbsp;» est respectée)&nbsp;;
- dont les attributs respectent les règles d'écriture (par exemple, aucun élément obsolète n'est présent)&nbsp;;
- dont les valeurs des attributs respectent les règles d'écriture (par exemple, les valeurs d'identifiant dupliquées ne sont pas conformes).

### <a name="html5aria"></a>Éléments HTML5 et landmarks ARIA

À partir de la maquette graphique, avant de vous lancer dans l'intégration, observez et repérez&nbsp;:

- l'en-tête principal&nbsp;;
- le contenu principal&nbsp;;
- le pied de page (informations légales, etc.)&nbsp;;
- le moteur de recherche&nbsp;;
- la navigation principale et les éventuelles navigations secondaires.

À chacune de ces zones correspond une propriété ARIA particulière qui va permettre de les identifier avec certitude. Ces propriétés s'implémentent avec l'attribut <code>role</code>&nbsp;:

- l'en-tête principal&nbsp;: <code lang="en">role="banner"</code>&nbsp;;
- le contenu principal&nbsp;: <code lang="en">role="main"</code>&nbsp;;
- le pied de page (informations légales, etc.)&nbsp;: <code lang="en">role="contentinfo"</code>&nbsp;;
- le moteur de recherche&nbsp;: <code lang="en">role="search"</code>&nbsp;;
- la navigation principale et les éventuelles navigations secondaires&nbsp;: <code lang="en">role="navigation"</code>.

Dans le cas où votre site est en HTML5, chacune de ces zones est identifiée par une balise HTML5 particulière&nbsp;:

- l'en-tête principal&nbsp;: <code lang="en">&lt;header&gt;</code>&nbsp;;
- le contenu principal&nbsp;: <code lang="en">&lt;main&gt;</code>&nbsp;;
- le pied de page (informations légales, etc.)&nbsp;: <code lang="en">&lt;footer&gt;</code>&nbsp;;
- la navigation principale et les éventuelles navigations secondaires&nbsp;: <code lang="en">&lt;nav&gt;</code>.

De plus, afin de créer des points de navigation, la zone de contenu et la navigation principale (et les éventuelles navigations secondaires) doivent être identifiées, à l’aide de l'un des procédés suivants&nbsp;: 
- un attribut `id`&nbsp;;
- une ancre précédant immédiatement la zone&nbsp;;
- une ancre avant le premier élément de la zone.

Si votre site est en HTML5, votre structure de départ doit ressembler à ceci&nbsp;: 

````
<header role="banner">
</header>
<nav role="navigation" id="menu-de-navigation">
 <ul>
  <li>...</li>
 </ul>
</nav>
<div role="search">
 <form>
 </form>
</div>
<main role="main" id="contenu-principal">
</main>
<footer role="contentinfo">
</footer>
````

Si votre site utilise une autre déclaration de <span lang="en">doctype</span> (XHTML, HTML4.0&hellip;), vous devez simplement implémenter les landmarks ARIA sur les éléments correspondants. La structure doit ressembler à ceci&nbsp;: 

````
<div role="banner">
</div>
<div role="navigation" id="menu-de-navigation">
 <ul>
  <li>...</li>
 </ul>
</div>
<div role="search">
 <form>
 </form>
</div>
<div role="main" id="contenu-principal">
</div>
<div role="contentinfo">
</div>
````

**Important**&nbsp;: 

- On peut trouver plusieurs balises `header`, mais le `role="banner` doit être unique dans la page.
- La balise `main` et le `role="main"` sont uniques dans la page.
- On peut trouver plusieurs balises `footer`, mais le `role="contentinfo"` doit être unique dans la page.
- On peut trouver plusieurs balises `nav` et plusieurs `role="navigation"`
- Le `role="search"` est unique dans la page.

#### Comment déterminer ce qu'est&hellip;

##### L'en-tête principal&nbsp;?

L'en-tête principal est généralement le titre de votre site, avec sa <span lang="en">baseline</span>, si elle existe. 
Très souvent, il s'agit du titre de niveau 1 de votre site (`h1`).

L'en-tête principal contient généralement peu d'éléments.

##### Le contenu principal&nbsp;?

Le contenu principal d'une page est le contenu d'intérêt. C'est le contenu qui donne un sens à votre page et sans lequel votre page est inutile.

##### Les navigations principales et secondaires&nbsp;?

Pour rappel, le RGAA 3 demande à ce que le site possède deux systèmes de navigation parmi&nbsp;: une navigation principale, un plan du site et un moteur de recherche.

La navigation principale, généralement appelée le «&nbsp;menu&nbsp;», est un élément que l'on retrouve sur toutes les pages de votre site web. C'est celle que l'on retrouve en début de contenu pour atteindre les rubriques principales de votre site.

Très souvent, on rencontre également des navigations contextuelles dans des rubriques spécifiques. Ces éléments sont à considérer comme des navigations secondaires et doivent être implémentés de la même manière que la navigation principale.

**Astuce**&nbsp;: Afin de permettre aux utilisateurs qui naviguent avec un lecteur d'écran de distinguer toutes les navigations que vous aurez définies, vous pouvez les titrer grâce à la propriété `aria-label`.

````
<nav role="navigation" aria-label="menu principal"></nav>

<nav role="navigation" aria-label="menu rubrique formations"></nav>
````

##### Le moteur de recherche&nbsp;?

Le moteur de recherche peut être une alternative intéressante pour les utilisateurs qui ne pourraient pas utiliser le menu ou le plan du site. Pour qu'il soit considéré comme une alternative, il faut néanmoins qu'il permette, à partir de ses résultats, d’atteindre n'importe quel contenu du site.

Ainsi, un moteur de recherche limité à un catalogue ne peut pas être considéré comme un système de navigation.

##### Le pied de page&nbsp;?

Le pied de page est à considérer comme étant un élément qui apporte des informations sur le site. On va y placer généralement, si elles sont présentes, les informations légales (<span lang="en">copyright</span>, lien vers les mentions légales&hellip;), les informations de contact (adresse, téléphone&hellip;).

La région de pied de page n'est pas nécessairement équivalente au pied de page de la maquette graphique. 

Souvent, dans le pied de page des maquettes de site web, on trouve des éléments comme la répétition de la navigation (sorte de plan du site en pied de page). Cet élément n'est pas à inclure dans le pied de page (`footer role="contentinfo"`).

#### Pourquoi doubler les balises HTML5 avec les landmarks ARIA&nbsp;?

Ajouter les landmarks ARIA aux balises HTML5 correspondantes permet de distinguer les autres éléments du même type qui pourraient être utilisés.

Vous pourriez mettre plusieurs balises `header` ou `footer` dans votre structure de site. Ces balises pouvant être contenus dans des balises `article` ou `section` pour créer des en-têtes d'articles et des pieds d'article. Ajouter les landmarks permet de différencier toutes ces balises des balises structurant le corps principal de la page.

Le validateur ressort une alerte (<span lang="en">warning</span>), mais ce n'est pas une erreur. L'alerte correspond simplement au fait que les balises HTML5 ont déjà des rôles implicites correspondant à ces propriétés (`banner` est le rôle implicite de la balise `header`). L'alerte vous signifie simplement que l'utilisation de ces rôles est peut-être inutile. Néanmoins, pour les raisons évoquées au-dessus, la position du RGAA 3 reste stricte à ce sujet.

Vous pouvez consulter à ce sujet [les rôles ARIA implicites sur les éléments HTML][9].

#### Utilisation optimale

Afin de rendre l'utilisation des régions (balise HTML5 et landmarks) optimale, il est toujours préférable de ne pas inclure dans l'en-tête la navigation principale par exemple. De manière générale, il est préférable de ne pas imbriquer les régions principales définies ici.

### <a name="plusloin"></a>Pour aller plus loin

- [Explications détaillées des éléments de structure dans la spécification HTML5 du W3C][10]
- [Les rôles ARIA implicites sur les éléments HTML][11]

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [Liste des <span lang="en">doctypes</span> par le W3C][12]
- [Validateur de code du W3C][13]
- [Voir la fiche sur les contenus, principalement la section sur les changements de langue pour une explication des codes de langue][14]

### <a name="criteres"></a>Critères RGAA

- 8.1 [A]
- 8.2 [A]
- 8.3 [A]
- 8.4 [A]
- 9.2 [A]
- 12.10 [A]

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
[2]:	#essentiel
[3]:	#html5aria
[4]:	#plusloin
[5]:	#resume
[6]:	#ailleurs
[7]:	#criteres
[8]:	https://www.w3.org/QA/2002/04/valid-dtd-list.html
[9]:	https://www.w3.org/TR/html-aria/#sec-strong-native-semantics
[10]:	https://www.w3.org/TR/html5/sections.html
[11]:	https://www.w3.org/TR/html-aria/#sec-strong-native-semantics
[12]:	https://www.w3.org/QA/2002/04/valid-dtd-list.html
[13]:	https://validator.w3.org/
[14]:	3-contenus.md
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
