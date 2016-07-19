# Guide de l'intégrateur

## Fiche 7&nbsp;: La prise de focus et la navigation clavier

- [Introduction - cas utilisateur][1]
- [Synthèse][7]
- [Conserver l'outline][2]
- [Visibilité du survol et la prise de focus pour les liens][3]
- [Ordre de tabulation cohérent][4]
- [Ordre de tabulation et textes cachés][5]
- [Piège au clavier][6]
- [Critères RGAA][8]

### <a name="introduction"></a>Introduction - cas utilisateurs

La prise de focus est l'état renvoyé par un élément qui reçoit l'attention suite à une action de l'utilisateur. Il y a trois moyens en HTML de donner le focus à un élément&nbsp;:

- en activant l'élément par un dispositif de pointage (souris)&nbsp;;
- en activant l'élément par la touche tabulation&nbsp;;
- en activant l'élément par un raccourci clavier.

La prise de focus concerne particulièrement les utilisateurs naviguant exclusivement au clavier. Sont concernés les utilisateurs qui ont des problèmes de motricité et qui ne peuvent pas utiliser une souris efficacement. Ils vont donc utiliser principalement le clavier pour se déplacer sur la page. Sont concernés également, les utilisateurs dépourvus de motricité comme les tétraplégiques et qui ne peuvent utiliser que des outils externes pour utiliser un ordinateur. Ils vont utiliser des systèmes de pointages particuliers&nbsp;: vue, licorne (<span lang="en">headstick</span>), etc.

En CSS, la prise de focus est contrôlable par le pseudo-évènement `:focus`, l'aspect de l'indication visuelle du focus par la propriété `outline`.

### <a name="resume"></a>Synthèse

- Ne définissez jamais de valeurs pour les propriétés de l'`outline` qui dégraderaient sa visibilité.
- Pour les liens indiqués uniquement par la couleur, définissez une mise en forme autre que la couleur qui permet d'identifier le survol de la souris et la prise de focus.
- Naviguez sur vos pages à la tabulation et assurez-vous que la prise de focus est cohérente et que vous ne restez pas bloqué sur un élément (piège au clavier).

### <a name="outline"></a>Conserver l'outline

Le RGAA impose de conserver la propriété `outline`. Dans les feuilles de style, il est interdit de trouver des propriétés visant à supprimer cet outline à la prise de focus (`:focus`), notamment&nbsp;:

- `outline: 0`
- `outline: none`
- `outline: transparent`

De même, les propriétés suivantes ne doivent pas être dégradées, c'est-à-dire que les valeurs définies ne doivent pas aboutir à une perte de visibilité&nbsp;:

- `outline-color`&nbsp;: par exemple `outline-color:transparent` est considéré comme non conforme&nbsp;;
- `outline-width`&nbsp;: `outline-width:0` est considéré comme non conforme&nbsp;;
- `outline-style`&nbsp;: `outline-style:hidden` est considéré comme non conforme.

Même si vous utilisez une bordure (`border`) pour signifier la prise de focus, cette alternative n'est pas considérée comme pertinente.

En effet, `outline` est une propriété gérée par le navigateur. Certains navigateurs proposent des mécanismes qui permettent d'augmenter la visibilité de cet outline. Ainsi, si dans vos feuilles de style, vous indiquez `outline:0`, les paramètres du navigateur visant à augmenter l'outline seront invisibles.

**Remarque&nbsp;: désactiver la propriété `outline` pour les états `:hover` et `:active` n'est pas considéré comme non conforme. Seules les propriétés attachées à l'état `:focus` d'un élément sont prises en compte ici.**

### <a name="survoletfocus"></a>Visibilité du survol et la prise de focus pour les liens

Lorsque les liens en environnement de texte sont signalés uniquement par la couleur (la couleur différente est suffisamment contrastée par rapport au texte environnant), notamment parce que la propriété native `text-decoration` des liens a été annulée (`text-decoration:none`), alors une indication visuelle autre que la couleur permet de signifier la prise de focus et le survol de la souris.

Cette indication visuelle peut être l'apparition d'un soulignement, la mise en gras du texte du lien, l'insertion d'une icône.

### <a name="ordretabulation"></a>Ordre de tabulation cohérent

L'ordre de tabulation est l'ordre dans lequel le focus se déplace (vers un élément suivant ou vers un élément précédent). L'ordre naturel est l'ordre de succession des éléments dans le code source. La tabulation va se déplacer successivement entre tous les éléments interactifs.

Une mise en forme en grille qui ferait que le focus parcourt d'abord la colonne visuellement au centre puis la colonne de droite n'est pas nécessairement considérée comme un ordre incohérent, si dans le code source, les éléments se succèdent de manière logique et compréhensible. Un ordre cohérent n'est pas nécessairement une prise de focus de gauche à droite.

Un ordre de tabulation incohérent peut être la conséquence d'une redéfinition des index de tabulation via l'attribut `tabindex`. L'attribut `tabindex` peut recevoir des valeurs numériques, et si ces valeurs sont supérieures à 0, alors l'ordre n'est plus l'ordre naturel, mais celui redéfini par `tabindex`. Cette modification de l'ordre de tabulation peut également être la conséquence d'un script (JavaScript) qui redéfinit les prises de focus.

Par exemple&nbsp;:

````
 <a href="#" tabindex="3">Lien 1</a>
 <a href="#" tabindex="1">Lien 2</a>
````

La tabulation ira d'abord sur le «&nbsp;Lien 2&nbsp;», puis le «&nbsp;Lien 1&nbsp;».

Il est fortement déconseillé d'utiliser des valeurs différentes de `0` ou `-1` pour `tabindex`. `tabindex="0"` permet à un élément qui ne reçoit pas naturellement le focus d'entrer dans le parcours de la tabulation. 
Par exemple, les éléments qui reçoivent naturellement le focus sont les liens `<a>`, boutons `<button>`, champs de formulaires `<input />`, etc. À l'opposé, une image `<img />` ne reçoit jamais le focus. Si, sur cette image, nous implémentons `tabindex="0"`, alors l'image entre dans le parcours du focus.
À l'inverse, `tabindex="-1"` permet de retirer un élément du parcours du focus. L'élément qui possède cet attribut ne recevra plus le focus.

````
<a href="#" tabindex="-1">Lien</a>
````

**Attention : contrôlez toujours les éléments pour lesquels vous définissez `tabindex="-1"`. Vérifiez bien son utilisation dans vos pages et les problèmes de restitution ou d'accès que cela pourrait engendrer.**


#### <a name="textescaches"></a>Ordre de tabulation et textes cachés

Un cas courant d'ordre de tabulation non cohérent se rencontre dans l'utilisation de composants interactifs qui permettent d'afficher ou masquer des éléments. 

En effet, vous devez vous assurer que les textes cachés sont correctement restitués. Une façon de s'en assurer est de faire se succéder logiquement dans le code source l'élément qui permet de déclencher l'apparition d'un contenu caché et le contenu caché. Si, en plus, ce contenu caché possède des éléments interactifs (formulaires par exemple), alors l'ordre de tabulation sera cohérent.

**Lorsque le texte caché est contrôlé par un motif de conception ARIA, alors l'ordre de tabulation est défini par le motif de conception. Il doit être scrupuleusement respecté.**

### <a name="piegeauclavier"></a>Piège au clavier

Lorsque le parcours de tous les éléments interactifs de la page, à l'aide de la seule touche de tabulation, est impossible, alors on se trouve devant un piège au clavier. 

Exemples de piège au clavier&nbsp;: 

- Lorsque le focus quitte un lien, un script lance le rechargement de la page. L'utilisateur qui navigue au clavier est condamné à ne jamais pouvoir dépasser ce lien (et atteindre l'élément suivant focusable) puisque le fait de quitter le lien recharge la page et renvoie le focus en haut de la page.
- Un formulaire capture le focus et empêche le focus de quitter le champ tant qu'une date n'a pas été sélectionnée. Malheureusement, la saisie d'une date n'est possible qu'en cliquant sur un calendrier. De fait, l'utilisateur qui navigue au clavier ne peut pas sortir de ce champ pour aller sélectionner une date, il est condamné à rester bloquer à ce niveau et ne pourra jamais aller au-delà. 

Il existe d'autres cas, mais ceci devrait vous permettre de les identifier facilement.

La meilleure solution est de vous assurer de l'absence de ces pièges au clavier et de trouver un moyen de les éviter tant que possible. Toutefois, si ce piège au clavier est inévitable, compte tenu d'une conception particulière (ou d’une insertion d'un script tiers sur lequel vous n'avez pas la main), vous devez mettre un moyen à disposition de l'utilisateur, et l'en informer, lui permettant d'accéder au clavier à l'élément suivant ou précédent pouvant recevoir le focus. Ce peut être par exemple, un lien d'évitement qui permet de ne pas prendre le focus sur cet élément et ainsi éviter le piège.

### <a name="criteres"></a>Critères RGAA

- 10.7 [A]
- 10.13 [A]
- 12.13 [A]
- 12.14 [A]

### Sommaire du guide de l'intégrateur

* [Introduction][10]
* [Fiche 1&nbsp;: Gabarit général][11]
* [Fiche 2&nbsp;: Navigation][12]
* [Fiche 3&nbsp;: Contenus][13]
* [Fiche 4&nbsp;: Tableaux][14]
* [Fiche 5&nbsp;: Liens][15]
* [Fiche 6&nbsp;: Formulaires][16]
* [Fiche 7&nbsp;: Prise de focus][17] 
* [Fiche 8&nbsp;: Respecter la distinction fond et forme][18]
* [Fiche 9&nbsp;: Images][19]
* [Fiche 10&nbsp;: Informations par la couleur et la forme][20] 
* [Fiche 11&nbsp;: Agrandissement des caractères][21]
* [Fiche 12&nbsp;: Multimédia][22]

[1]:	#introduction
[2]:	#outline
[3]:	#survoletfocus
[4]:	#ordretabulation
[5]:	#textescaches
[6]:	#piegeauclavier
[7]:	#resume
[8]:	#criteres
[10]:	0-intro.md
[11]:	1-gabarit-general.md
[12]:	2-navigation.md
[13]:	3-contenus.md
[14]:	4-tableaux.md
[15]:	5-liens.md
[16]:	6-formulaires.md
[17]:	7-focus.md
[18]:	8-distinction-fond-forme.md
[19]:	9-images.md
[20]:	10-infos-forme-couleur.md
[21]:	11-agrandissement-des-caracteres.md
[22]:	12-multimedia.md
