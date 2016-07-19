# Guide de l'intégrateur

## Fiche 11&nbsp;: Agrandissement des caractères

- [Introduction - cas utilisateur][1]
- [Synthèse][7]
- [Agrandissement des caractères en fonction du navigateur][2]
- [Tailles de polices en unités relatives exclusivement][3]
- [Lisibilité lorsque la taille de la police est agrandie.][4]
- [Convertir ses tailles de polices du pixel au em][5]
- [<span lang="en">Responsive</span> et agrandissement des caractères&nbsp;: une pierre deux coups][6]
- [Voir ailleurs / Ressources][8]
- [Critères RGAA][9]

[Page de démonstration][10]

### <a name="introduction"></a>Introduction - cas utilisateurs

La bonne adaptation des contenus d'une page web lorsque la taille de la police est augmentée est primordiale pour les utilisateurs malvoyants. Ces utilisateurs vont vouloir agrandies uniquement la taille de la police, et non pas la page (zoom graphique). La mise en forme doit alors s'adapter convenablement pour que tous les textes restent lisibles et compréhensibles à certains niveaux de zoom.

### <a name="resume"></a>Synthèse

- Il ne faut pas définir des tailles de police en pixels.
- Il faut éviter de fixer des hauteurs de boîte en pixels.
- Il faut utiliser la propriété `overflow:hidden` avec précaution.
- Il est préférable de définir des points de rupture en em.

### <a name="agrandissementcaracteres"></a>Agrandissements des caractères en fonction du navigateur

L'agrandissement des caractères (taille de la police) est à différencier du zoom graphique. Dans de nombreux navigateurs, le zoom (<kbd>Ctrl +</kbd>) agrandit l'ensemble de la page. Vous pouvez vous en rendre compte, car même les images sont agrandies.

<img src="img/agrandissement-des-caracteres-1.png" alt="" />

Pour augmenter uniquement la taille de la police, selon le navigateur&nbsp;: 

- Dans <span lang="en">Firefox</span>, dans «&nbsp;Affichage&nbsp;» aller à «&nbsp;Zoom&nbsp;» et sélectionner «&nbsp;Zoom texte seulement&nbsp;». À partir de ce moment, <kbd>Ctrl +</kbd> agrandit uniquement les tailles de polices.
- Dans Safari, dans «&nbsp;Présentation&nbsp;» cochez «&nbsp;Réduire/agrandir le texte seulement&nbsp;». À partir de ce moment, <kbd>Ctrl +</kbd> agrandit uniquement les tailles de polices.
- Dans Internet <span lang="en">Explorer</span>, dans «&nbsp;Affichage&nbsp;» (ou «&nbsp;Page&nbsp;» selon la version) aller à «&nbsp;Taille du texte&nbsp;» et sélectionner une des valeurs proposées (par exemple «&nbsp;La plus grande&nbsp;»).

Toutes les recommandations et explications données ici sur les tailles de polices ne concernent que les feuilles de style et les déclarations à destination des écrans (`media="screen"` ou `media="all"`). 

### <a name="unitesrelatives"></a>Tailles de polices en unités relatives exclusivement

La première des choses est de s'assurer que **toutes vos tailles de polices déclarées** le soient en **unités relatives**.

Vous pouvez utiliser les unités suivantes&nbsp;: 
- em, rem&nbsp;;
- %&nbsp;;
- vw, vh (unités relatives à la taille du <span lang="en">viewport</span>)&nbsp;;
- xsmall, small, large&hellip; (mots clés).

A contrario, les unités fixes pour définir des tailles de police sont interdites. Parmi les tailles fixes, on trouve par exemple&nbsp;: 
- px (pixel)&nbsp;;
- pt (point)&nbsp;; 
- cm (centimètres).

Cette obligation tient du fait que dans certains navigateurs (notamment Internet <span lang="en">Explorer</span>), si les tailles de polices sont définies en unités fixes, les paramètres d'agrandissement de la taille des caractères restent sans effet.


### <a name="lisibilite"></a>Lisibilité lorsque la taille de la police est agrandie.

Au niveau AA du RGAA, le texte doit rester lisible et on ne doit pas perdre d'informations lorsque la taille de la police par défaut est augmentée de 200%.

200% correspond à 6 fois l'action <kbd>Ctrl +</kbd> sur Firefox (avec l'option «&nbsp;Texte seul&nbsp;» du zoom). À noter&nbsp;: le contrôle de cette lisibilité ne peut être fait efficacement que sur Firefox ou Safari, Internet Explorer ne disposant pas de l'option zoom texte seul.

#### Attention aux tailles de boîtes fixées

Lorsque vous réalisez vos mises en forme, vous êtes souvent tentés de fixer les hauteurs ou les largeurs pour avoir un rendu harmonieux pour certains éléments.

Lorsque les tailles de boîtes sont fixées par les propriétés CSS&nbsp;: `height`, `width`, `max-height` et `max-width` dont les valeurs sont définies en pixels, elles ne peuvent s'agrandirent proportionnellement à la taille de la police. Le contenu qui débordera ne sera plus totalement lisible, voire illisible.

Attention toutefois, cela ne concerne que les boîtes qui contiennent ou sont susceptibles de contenir du texte.

Vous pouvez utiliser le pixel pour les dimensions et les positionnements des boîtes qui ne contiennent pas de texte ou ne sont pas susceptibles de contenir ou de servir de fond à du texte.

De préférence, remplacez dans vos feuilles de style&nbsp;: 

- `width` par `min-width`&nbsp;;
- `height` par `min-height`.

À noter que `width` et `height` ne posent aucun problème lorsque les valeurs sont définies en em.

Évitez également au maximum d'utiliser les propriétés `max-height` et `max-width` sans en contrôler le contenu et le comportement à l'agrandissement des caractères.

#### Autres propriétés CSS à utiliser avec précaution

##### `overflow:hidden`

Pour contrôler des débordements et pour coller à un graphisme défini, vous pouvez être tentés d'utiliser la propriété `overflow:hidden`. Si la boîte en question ne contient pas de texte, vous pouvez à peu près être assurés que cela ne posera pas de problème. Par contre, si cette boîte contient du texte et qu'en plus vous avez défini une hauteur fixée en pixel, le texte disparaîtra.

##### Les positionnements

Attention aux positionnements qui ne suivent pas le flux standard, notamment les positionnements `absolute` et `fixed`. Assurez-vous que l'agrandissement des caractères ne provoque pas de chevauchement avec ces boîtes positionnées hors du flux.

##### Gérer les espaces et les retours à la ligne

La propriété `white-space: nowrap` empêche le contenu texte d'être soumis au retour à la ligne automatique. Cette propriété doit donc être utilisée avec précaution. Effectuez toujours des tests pour évaluer le comportement à l'agrandissement des caractères.


### <a name="taillesdepolice"></a>Convertir ses tailles de polices du pixel au em
On dit qu'une unité est relative par rapport à l'élément parent. Par exemple, vous avez un élément `div` qui possède une taille de police de 1.5em. Cet élément `div` possède un élément `p` qui possède une taille de police de 0.9em. Alors la taille calculée de votre élément `p`, et donc celle appliquée est de 1.35em c'est-à-dire 0.9em x 1.5em.

### <a name="responsive"></a><span lang="en">Responsive</span> et agrandissement des caractères&nbsp;: une pierre, deux coups

Aujourd'hui, la plupart des sites web sont dits <span lang="en">responsive</span>, ils s'adaptent aux différentes tailles d'écrans. Cela se fait très majoritairement par l'utilisation des `media-queries` en CSS.

Les points de rupture déclarés dans ces `media-queries` dépendent très fortement des différentes tailles d'écrans sur le marché, elles sont donc très souvent déclarées en pixels.

Mais vous pourriez très bien les déclarer en em, et ainsi provoquer le réarrangement des éléments que vous avez définis pour les tailles d'écrans, à la taille de la police. Et d'une pierre deux coups ! En effet, le fonctionnement est simple&nbsp;: plus vous augmentez la taille de police par défaut (<kbd>Ctrl +</kbd>), plus la taille disponible en em diminue.

Par exemple&nbsp;: 

<pre><code class="css">@media screen and (min-width:767px){

}</code></pre>

pourrait être remplacé par 

<pre><code class="css">@media screen and (min-width:47.9375em){ 
  /** 767px / 16 = 47.9375em **/
}</code></pre>

16px correspond à la taille par défaut définie par le navigateur.

Ce dispositif est excellent pour adapter vos contenus aux capacités réelles des tailles d'écrans de vos utilisateurs.

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [Article du W3C sur les unités en CSS][11]

### <a name="criteres"></a>Critères RGAA

- Critère 10.4 [AA]
- Critère 10.10 [AAA]

### Sommaire du guide de l'intégrateur

* [Introduction][12]
* [Fiche 1&nbsp;: Gabarit général][13]
* [Fiche 2&nbsp;: Navigation][14]
* [Fiche 3&nbsp;: Contenus][15]
* [Fiche 4&nbsp;: Tableaux][16]
* [Fiche 5&nbsp;: Liens][17]
* [Fiche 6&nbsp;: Formulaires][18]
* [Fiche 7&nbsp;: Prise de focus][19] 
* [Fiche 8&nbsp;: Respecter la distinction fond et forme][20]
* [Fiche 9&nbsp;: Images][21]
* [Fiche 10&nbsp;: Informations par la couleur et la forme][22] 
* [Fiche 11&nbsp;: Agrandissement des caractères][23]
* [Fiche 12&nbsp;: Multimédia][24]

[1]:	#introduction
[2]:	#agrandissementcaracteres
[3]:	#unitesrelatives
[4]:	#lisibilite
[5]:	#taillesdepolice
[6]:	#responsive
[7]:	#resume
[8]:	#ailleurs
[9]:	#criteres
[10]:	demo/11-agrandissement-des-caracteres/index.html
[11]:	https://www.w3.org/Style/Examples/007/units.fr.html
[12]:	0-intro.md
[13]:	1-gabarit-general.md
[14]:	2-navigation.md
[15]:	3-contenus.md
[16]:	4-tableaux.md
[17]:	5-liens.md
[18]:	6-formulaires.md
[19]:	7-focus.md
[20]:	8-distinction-fond-forme.md
[21]:	9-images.md
[22]:	10-infos-forme-couleur.md
[23]:	11-agrandissement-des-caracteres.md
[24]:	12-multimedia.md
