# Guide de l'intégrateur

##  Fiche 9&nbsp;: Images

- [Introduction - cas utilisateur][1]
- [Synthèse][8]
- [Alternative obligatoire][2]
- [Image de décoration&nbsp;: alternative vide][3]
- [Image porteuse d'information&nbsp;: alternative renseignée][4]
- [Images textes][5]
- [Captcha][6]
- [Image légendée][7]
- [Voir ailleurs / Ressources][9]
- [Critères RGAA][10]

### <a name="introduction"></a>Introduction - cas utilisateurs

Les images véhiculent parfois une information non textuelle. Cette information, qui peut aider à comprendre le contenu auquel elle se rapporte, doit être accessible à tous.

Fournir une alternative est indispensable pour les utilisateurs qui ne perçoivent pas le contenu visuel. Un lecteur d'écran ou une loupe vocalisée vont pouvoir accéder à cette alternative et la restituer à l'utilisateur ou bien l'information sera affichée si l'utilisateur désactive les images.

### <a name="resume"></a>Synthèse

- Définir un <code>alt</code> sur toutes les images `<img />`.
- Définir un <code>alt=""</code> sur les images `<img />` de décoration.
- Définir une alternative conforme et pertinente en fonction du type d'image lorsqu'elle est porteuse d'information.
- Éviter au maximum les images textes.

### <a name="alternativeobligatoire"></a>Alternative obligatoire

Toutes les images doivent avoir un attribut <code>alt</code>. Cette obligation tient au fait qu'en l'absence de cet attribut, un lecteur d'écran restitue le chemin ou le nom du fichier source, ce qui n'a pas de sens pour l'utilisateur.

Les éléments concernés sont&nbsp;: 

- les images <code>&lt;img&gt;</code>&nbsp;;
- les zones réactives <code>&lt;area&gt;</code>&nbsp;;
- les champs de formulaire <code>&lt;input type="image"&gt;</code>.

### <a name="imagedecoration"></a>Image de décoration&nbsp;: alternative vide

Si l'image ne véhicule aucune information, l'image n'a pas vocation à être restituée. Son alternative doit alors être vide. De plus, elle ne doit pas posséder d'attribut <code>title</code>.

````
<img src="url.png" alt="" />
````

Nous vous renvoyons à la [fiche «&nbsp;Quand une image vaut mille mots&nbsp;» du guide «&nbsp;Contribuer sur le web de manière accessible&nbsp;»][11] pour de plus amples informations sur les différences entre les images de décoration et les images porteuses d'information.

#### Cas des images <code>&lt;object&gt;</code>, <code>&lt;canvas&gt;</code> et <code>&lt;embed&gt;</code>

Dans le cas des images `<object>` ou `<canvas>`, vous devez ajouter la propriété <code>aria-hidden="true"</code> et vous devez vous assurer qu'aucun attribut ou aucune balise ne sont présents afin de labelliser l'image&nbsp;:

- l’alternative textuelle entre les balises ouvrantes et fermantes (`<object>` et `</object>`, ou `<canvas>` et `</canvas>`) est vide&nbsp;;
- la balise (`<object>` ou `<canvas>`), ou l’un des ses enfants, est dépourvue de rôle, propriété ou état ARIA visant à labelliser l’image (`aria-label`, `aria-describedby`, `aria-labelledby` par exemple).

Concernant la balise `<embed>`, elle doit posséder un attribut `aria-hidden="true"` et elle, ou l’un des ses enfants, doit être dépourvue de rôle, propriété ou état ARIA visant à labelliser l’image (`aria-label`, `aria-describedby`, `aria-labelledby` par exemple).


#### Cas des images <code>svg</code>

Dans le cas des images vectorielles, vous devez ajouter la propriété <code>aria-hidden="true"</code> et vous assurer qu'aucun attribut ou aucune balise ne sont présents afin de labelliser l'image&nbsp;:

- les balises `<title>` et `<desc>` sont absentes ou vides&nbsp;;
- la balise `<svg>`, ou l’un de ses enfants, est dépourvue d’attribut `title`&nbsp;;
- la balise `<svg>`, ou l’un de ses enfants, est dépourvue de rôle, propriété ou état ARIA visant à labelliser l’image vectorielle (`aria-label`, `aria-describedby`, `aria-labelledby` par exemple).

En résumé, une image vectorielle de décoration devrait ressembler à ceci&nbsp;:

````
<svg aria-hidden="true">
</svg>
````

### <a name="imageinformation"></a>Image porteuse d'information&nbsp;: alternative renseignée

Une image porteuse d'information apporte une information par elle-même ou essentielle à la compréhension du contenu auquel elle est associée. L'alternative doit être courte et suffisante pour que les utilisateurs qui ne peuvent pas voir l'image comprennent l'information véhiculée.

Pour les images (<code>img</code>, <code>input type="image"</code>, <code>area</code>), vous devez renseigner l'attribut <code>alt</code>.

S'il est présent, le contenu de l'attribut `title` est égal au contenu de l'attribut `alt`.

#### Images vectorielles

Pour les images vectorielles, vous devez&nbsp;: 

- ajouter un <code>role="img"</code> sur la balise <code>&lt;svg&gt;</code>&nbsp;;
- ajouter une propriété <code>aria-label</code> contenant l'alternative de l'image&nbsp;;
- ajouter une balise <code>&lt;desc&gt;</code> qui contient un passage de texte identique à la propriété `aria-label`.

Attention, s'il est présent, l'attribut <code>title</code> doit être équivalent à <code>aria-label</code> et <code>&lt;desc&gt;</code>.

Si ces implémentations ne sont pas possibles, vous pouvez créer un lien adjacent à l'image qui mène vers une alternative pertinente et identique au contenu de la balise <code>&lt;desc&gt;</code>.

#### Images <code>&lt;object type="image"&gt;</code>, <code>&lt;canvas&gt;</code> et <code>&lt;embed type="image"&gt;</code>

Pour ce type d'images, vous pouvez soit labelliser l'image directement, soit mettre en place une alternative. 

Si vous souhaitez mettre en place une alternative, vous devez&nbsp;:

- faire suivre l'image d'un lien adjacent permettant d'afficher une page ou un passage de texte contenant une alternative pertinente&nbsp;;
- proposer un mécanisme qui permet à l'utilisateur de remplacer l'image par un texte alternatif pertinent&nbsp;;
- ou proposer un mécanisme qui permet à l'utilisateur de remplacer l'image par une image possédant une alternative pertinente.

Note&nbsp;: dans le cas des images `<canvas>`, l'alternative peut être donnée par un texte présent entre les balises `<canvas>` et `</canvas>`.

Si vous souhaitez labelliser l'image&nbsp;: 

- ajouter la propriété `aria-label` qui contient le texte permettant de donner l'alternative pertinente de l'image&nbsp;;
- ou ajouter la propriété `aria-labelledby` qui référence un passage de texte pertinent.

Attention, s'il est présent, l'attribut <code>title</code> doit être équivalent à <code>aria-label</code> ou <code>aria-labelledby</code> selon l'implémentation choisie.


#### Compatibilité avec les technologies d'assistance

Pour les implémentations d'images avec les éléments <code>&lt;svg&gt;</code> et <code>&lt;canvas&gt;</code>, assurez-vous de la restitution des alternatives avec les lecteurs d'écran et navigateurs de la base de référence. En effet, les implémentations, notamment ARIA, étant très changeantes dans les navigateurs et lecteurs d'écran, l'important, au-delà de respecter le balisage, est de vous assurer de leur restitution par un lecteur d'écran.

### <a name="imagestextes"></a>Images textes

Lorsque des images textes peuvent être reproduites en HTML et CSS, vous ne devez pas utiliser d'image. Ceci est tout à fait possible&nbsp;:
- lorsque les polices utilisées ne sont pas des polices complexes, 
- lorsque l'image ne joue pas sur une déformation de la police,
- ou encore, lorsque la police n'est pas une police qu'il serait  compliqué à reproduire. 

Dans tous les autres cas, les textes doivent être réalisés en HTML et CSS, afin de permettre aux utilisateurs qui en ont besoin d’adapter leur lisibilité (agrandissement des caractères, modification des couleurs, des polices&hellip;).

Il est également possible de conserver les images textes et de fournir à l'utilisateur un mécanisme de remplacement qui lui permet, avec un bouton par exemple, de remplacer toutes les images textes en textes stylés.

### <a name="captcha"></a>Captcha

Dans le cas des images tests (Captcha), il faut renseigner l'alternative de manière à permettre à l'utilisateur de comprendre la nature et le rôle de l'image.

Par exemple, <code>alt="saisir le code présent dans l'image"</code>. 

Ce mécanisme devra être complété par une méthode alternative permettant à l'utilisateur de récupérer le code pour pouvoir poursuivre.

### <a name="imagelegendee"></a>Image légendée

HTML5 introduit les balises <code>figure</code> et <code>figcaption</code> afin de pouvoir associer une légende à une image.

Il est important de le faire lorsque la légende contient des informations sur l'image, par exemple un copyright, qu'un utilisateur aveugle pourrait mal interpréter en pensant que l'information de la légende concerne le texte associé.

L'utilisation de <code>figure</code> et <code>figcaption</code> réclame certaines adaptions pour combler le manque de support éventuel par les technologies d'assistance.

````
<figure role="group">
 <img alt="illustration" src="img.png"/>
 <figcaption>
  Illustration - copyright 2016 Simon Jérémi
 </figcaption>
</figure>
````

Le texte «&nbsp;illustration&nbsp;» dans l'alternative de l'image crée une liaison sémantique entre l'image et sa légende, dans le cas où l'élément figure ne serait pas restitué par les lecteurs d'écran. Le texte «&nbsp;illustration&nbsp;» est repris dans la légende pour établir la liaison sémantique.

[Voir la démonstration d'images légendées][12]

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [Fiche «&nbsp;Quand une image vaut mille mots&nbsp;» du guide «&nbsp;Contribuer sur le web de manière accessible&nbsp;»][13]

### <a name="criteres"></a>Critères RGAA

- 1.1 [A]
- 1.2 [A]
- 1.3 [A]
- 1.4 [A]
- 1.5 [A]
- 1.8 [AA]
- 1.9 [AAA]
- 1.10 [A]

### Sommaire du guide de l'intégrateur

* [Introduction][14]
* [Fiche 1&nbsp;: Gabarit général][15]
* [Fiche 2&nbsp;: Navigation][16]
* [Fiche 3&nbsp;: Contenus][17]
* [Fiche 4&nbsp;: Tableaux][18]
* [Fiche 5&nbsp;: Liens][19]
* [Fiche 6&nbsp;: Formulaires][20]
* [Fiche 7&nbsp;: Prise de focus][21] 
* [Fiche 8&nbsp;: Respecter la distinction fond et forme][22]
* [Fiche 9&nbsp;: Images][23]
* [Fiche 10&nbsp;: Informations par la couleur et la forme][24] 
* [Fiche 11&nbsp;: Agrandissement des caractères][25]
* [Fiche 12&nbsp;: Multimédia][26]

[1]:	#introduction
[2]:	#alternativeobligatoire
[3]:	#imagedecoration
[4]:	#imageinformation
[5]:	#imagestextes
[6]:	#captcha
[7]:	#imagelegendee
[8]:	#resume
[9]:	#ailleurs
[10]:	#criteres
[11]:	http://disic.github.io/guide-contribuer_accessible/images.html
[12]:	demo/9-images/index.html
[13]:	http://disic.github.io/guide-contribuer_accessible/images.html
[14]:	0-intro.md
[15]:	1-gabarit-general.md
[16]:	2-navigation.md
[17]:	3-contenus.md
[18]:	4-tableaux.md
[19]:	5-liens.md
[20]:	6-formulaires.md
[21]:	7-focus.md
[22]:	8-distinction-fond-forme.md
[23]:	9-images.md
[24]:	10-infos-forme-couleur.md
[25]:	11-agrandissement-des-caracteres.md
[26]:	12-multimedia.md
