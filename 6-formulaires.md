# Guide de l'intégrateur

##  Fiche 6&nbsp;: Formulaires

- [Introduction - cas utilisateur][1]
- [Synthèse][32]
- [Étiquettes][2]
- [Pertinence des étiquettes de champs][3]
- [Pertinence des intitulés de boutons][4]
- [Étiquettes correctement reliées][5]
- [Champs obligatoires][6]
- [Aides à la saisie][7]
- [Erreurs de saisie][8]
- [Listes de choix][9]
- [Regroupement de champs][10]
- [Voir ailleurs / Ressources][11]
- [Critères RGAA][12]

### <a name="introduction"></a>Introduction - cas utilisateurs

L'identification des champs de formulaire est un élément essentiel. Beaucoup d'utilisateurs handicapés vont accéder aux champs de manières très diverses.

Les utilisateurs de lecteurs d'écran disposent de raccourcis clavier leur permettant de naviguer rapidement d'un champ à l'autre et certains dispositifs de navigation vocale proposent d'accéder aux champs par leur nom.

Dans ce type de contexte, il est important que chaque champ de formulaire possède une étiquette liée, afin qu'elle soit restituée lors de la prise de focus. Cela permettra aux personnes aveugles d'utiliser à profit les raccourcis clavier et aux utilisateurs de navigation vocale d'accéder rapidement aux champs. Pour les utilisateurs de dispositifs de pointage adapté, l'étiquette d'un champ permet d'étendre la surface de clic et ainsi améliore l'efficacité des manipulations.

### <a name="resume"></a>Synthèse

- Définissez des étiquettes pertinentes.
- Utilisez une méthode conforme pour relier les champs à leurs étiquettes respectives.
- Pour les champs obligatoires avec un format de saisie, pensez toujours à l'indiquer (de préférence dans l'étiquette du champ).
- Pour les erreurs de saisie, reliez l'erreur au champ concerné et indiquez un exemple de saisie réelle lorsque nécessaire.

### <a name="etiquettes"></a>Étiquettes

Une étiquette de champ est un texte qui permet d'expliquer quelle donnée est attendue par le champ (nom, prénom, date de naissance, etc.).

Pour être conforme, une étiquette doit&nbsp;: 
- être pertinente&nbsp;; 
- être correctement reliée au champ correspondant.

#### <a name="etiquettepertinence"></a>Pertinence des étiquettes de champs

Une étiquette est pertinente si elle permet de comprendre la fonction du champ auquel elle est reliée. Il n'est pas forcément nécessaire d'écrire de grandes phrases, mais bien de rester concis. Il faut que l'utilisateur comprenne ce qu'on attend de sa saisie. Par exemple, pour les données d'identité, un label «&nbsp;Nom&nbsp;», un label «&nbsp;Prénom&nbsp;» et un label «&nbsp;Téléphone&nbsp;» sont des étiquettes pertinentes qui permettent de comprendre ce que l'on doit y inscrire.

#### <a name="boutonpertinence"></a>Pertinence des intitulés de boutons

Les boutons <code>input type="submit"</code>, <code>input type="reset"</code> ou encore <code>button</code> doivent avoir des intitulés pertinents qui permettent à l'utilisateur de comprendre l'action du bouton. Ils sont essentiels surtout pour les utilisateurs aveugles afin qu'ils soient sûrs de l'action qu'ils réalisent. Par exemple des intitulés comme «&nbsp;envoyer&nbsp;», «&nbsp;ok&nbsp;», «&nbsp;valider&nbsp;»… ne seront pas suffisamment pertinents. À l'inverse, des intitulés pertinents explicitent l'action, par exemple&nbsp;: «&nbsp;M'inscrire au cours de danse&nbsp;»,  «&nbsp;Réserver mes billets en ligne&nbsp;».

Pour rendre les intitulés de boutons pertinents, vous pouvez, soit rendre le texte contenu dans l'attribut <code lang="en">value</code> explicite, soit ajouter un <code lang="en">title</code> sur l'élément pour l’expliciter.

````
<input type="submit" value="Envoyer le message" />
<input type="submit" value="GO" title="Réserver les billets sélectionnés" />

````

#### <a name="liaisonetiquettechamp"></a>Étiquettes correctement reliées

Plusieurs moyens en HTML et reconnus par le RGAA sont à votre disposition pour labelliser un champ de formulaire.

[Page de démonstration de la construction des étiquettes de formulaire][13]

##### <code>for / id</code>

La méthode la plus courante est la relation HTML entre le champ et son étiquette&nbsp;: 

````
 <label for="nom">Nom</label>
 <input type="text" id="nom" />
````

L'avantage de cette implémentation par rapport à toutes les autres est qu'elle étend la zone de clic. En effet, lorsque l'utilisateur clique sur le label, le focus est donné directement au champ correspondant. Dans le cas d’une case à cocher, cliquer sur le label permet de cocher la case à cocher.

**Attention aux labels implicites**&nbsp;:  Rien ne vous empêche de les utiliser, néanmoins, les seules méthodes reconnues de labellisations conformes sont celles décrites ici.

Exemple de label implicite avec une relation correcte&nbsp;:

````
 <label for="nom">
	Nom 
   <input type="text" id="nom" />
 </label>
````

##### <code>title</code>

Un champ peut également être labellisé via l'attribut <code>title</code>.

````
 <input type="text" id="recherche" title="Saisir un mot clé à rechercher" />
````

Cette implémentation est conforme, mais nous vous invitons à n'utiliser cette implémentation que dans des cas restreints. En effet, l'attribut <code>title</code> n'est visible qu'au survol de la souris. Un utilisateur voyant qui navigue exclusivement au clavier n'accédera pas à cette information. Dans le cas d'un formulaire complexe, ce type de labellisation peut être un frein à la compréhension pour certains utilisateurs. 

L'attribut <code>title</code> devrait être utilisé de préférence dans les cas où le contexte du champ de formulaire permet d'en comprendre la fonction, par exemple, le champ de recherche du site. Il est alors accompagné d'un bouton de validation «&nbsp;Rechercher&nbsp;» ou d'un bouton image en forme de loupe, qui permet de déduire la fonction du champ.

##### ARIA

ARIA va également permettre de réaliser des étiquettes de formulaires conformes et de réparer certaines implémentations.


````
 <p id="name">Votre Nom</p>
 <input type="text" aria-labelledby="name" />
````

````
 <p>Votre Nom</p>
 <input type="text" aria-label="Votre nom" />
````

**Attention à la priorité de restitution (calcul du nom accessible)**&nbsp;: <code>aria-labelledby</code> et <code>aria-label</code> viennent écraser n'importe quelle étiquette réalisée avec la balise <code>label</code> qui serait déjà implémentée sur un champ. Par exemple&nbsp;: 

````
  <label for="jfname">Votre nom de jeune fille</label>
  <input id="jfname" type="text" aria-labelledby="name" />
  <p id="name">Votre nom</p>
````

Ici, lors d'un parcours au lecteur d'écran, seule l'étiquette «Votre nom» sera restituée, l'étiquette «Votre nom de jeune fille» sera ignorée.

**Important&nbsp;:** tout comme l'attribut <code>title</code> n'est pas accessible à un utilisateur clavier, les implémentations <code>aria-labelledby</code> et <code>aria-label</code> ne sont accessibles qu'aux utilisateurs aveugles. Ainsi, afin que tous les utilisateurs aient le même niveau d'information, ces implémentations doivent toujours être accompagnées d'un texte visible cohérent avec l'étiquette référencée par ces attributs.

##### <code>placeholder</code>, attention.

<code>placeholder</code> n'est pas considéré comme une méthode de labellisation valide au regard du RGAA, si elle est implémentée seule. La première raison est son contraste insuffisant.

Ensuite, si on prend en compte l'[ordre de restitution des éléments définis par la spécification HTML5][14], l'attribut <code>placeholder</code> est restitué avant l'attribut <code>title</code>. De fait, si des informations importantes sont placées dans l'attribut <code>title</code> qu'on ne retrouve pas dans l'attribut <code>placeholder</code>, alors le champ est mal étiqueté puisque l'utilisateur perd de l'information.

Si vous souhaitez malgré tout utiliser <code>placeholder</code>, assurez-vous soit qu'il n'y a pas d'attribut <code>title</code> sur le champ correspondant, soit que le contenu de l'attribut <code>title</code> est le même que celui du <code>placeholder</code>.

### <a name="champsobligatoires"></a>Champs obligatoires

Le RGAA n'impose pas que les champs obligatoires soient systématiquement indiqués à l'utilisateur, par exemple il est inutile de le faire sur le seul champ d'un moteur de recherche. Par contre, si vous indiquez les champs obligatoires, cela doit être fait de manière accessible.

[Page de démonstration des indications de champs obligatoires][15]

#### Indication textuelle dans l'étiquette

Selon votre choix d'implémentation d'étiquette de champ (<code>label</code>, <code>title</code>, <code>aria-label</code>…), l'indication de champ obligatoire peut être mise directement dans cette étiquette, par exemple&nbsp;: «&nbsp;Nom (champ obligatoire)&nbsp;».

#### Indication par un symbole

Il est très courant de trouver l'indication de champs obligatoire au moyen d'un astérisque. Cette pratique est tout à fait conforme si vous donnez une légende à ce symbole, et ce **avant** le formulaire concerné.

````
  <p>Les champs précédés d'une étoile (*) sont obligatoires</p>
  <form>
	<label for="nom">Nom *</label>
	<input type="text" id="nom" />
  </form>
````

#### Indication par la couleur

Si vous décidez de placer les labels des champs obligatoires en rouge pour signifier les champs obligatoires, assurez-vous que cette couleur soit toujours doublée d'un symbole clairement explicité. En effet, un utilisateur aveugle n'a pas accès aux couleurs et un utilisateur ne distinguant pas les couleurs ne pourra pas les percevoir.

#### <code>required</code> et <code>aria-required</code>

En HTML5, il est maintenant possible d'utiliser l'[API de contrainte de validation][16], qui permet notamment de définir les champs obligatoires et de gérer un contrôle côté client géré par le navigateur, avec l'attribut <code>required</code>. Cet attribut a aussi la particularité d'être restitué à un utilisateur de lecteur d'écran.

Rien ne vous oblige à utiliser cet attribut, mais si vous l'utilisez, vous devez toujours fournir une alternative visible pour tous les autres utilisateurs. La recommandation est la même si vous utilisez <code>aria-required</code>. Si vous mentionnez les champs obligatoires à l’aide de la propriété <code>aria-label</code>, vous devez également fournir une alternative visible à tous.

### <a name="aidessaisie"></a>Aides à la saisie

Pour tous les champs obligatoires qui attendent un format particulier, vous devez l'indiquer à l'utilisateur.

Par exemple, un champ de date attend que les valeurs jour, mois et année soient distinguées par une barre oblique pour être conforme. Vous devez donc indiquer «&nbsp;jj/mm/aaaa&nbsp;» qui correspond au format de saisie.

Pour l'indiquer, vous avez à votre disposition les méthodes citées précédemment&nbsp;: 
- dans la balise <code>label</code>&nbsp;;
- dans l'attribut <code>title</code>&nbsp;;
- dans le passage de texte relié via l'attribut <code>aria-labelledby</code>.

Vous disposez également de l'attribut <code>aria-describedby</code> qui vous permet de référencer la valeur de l'identifiant d'un passage de texte contenant l'indication de format. L'utilisation de <code>aria-describedby</code> sur le champ de formulaire aura pour effet de restituer le passage de texte en complément du label quelle que soit la méthode qui aura été employée &nbsp;: <code>&lt;label&gt;</code>, <code>title</code>, etc. contrairement à <code>aria-labelledby</code>.

````
  <label for="date">Jour de naissance</label>
  <input type="text" id="date" aria-describedby="format-date" />
  <p id="format-date">jj/mm/aaaa</p>
````

### <a name="erreursdesaisie"></a>Erreurs de saisie

Lorsque le formulaire retourne des erreurs, l'erreur doit être mentionnée soit&nbsp;: 
- dans l'étiquette du champ (<code>&lt;label&gt;</code>, <code>title</code>, <code>aria-label</code>, <code>aria-labelledby</code>)&nbsp;; 
- dans un passage de texte avant le formulaire, qui rassemble la liste de tous les champs erronés&nbsp;;
- dans un passage de texte relié au champ de saisie avec l'attribut <code>aria-describedby</code>.

Il vous est également possible d'indiquer ces erreurs avec la propriété <code>aria-label</code> et la propriété <code>aria-invalid</code>. Dans ces cas, vous devez toujours fournir une alternative visible pour tous les autres utilisateurs.

````
  <label for="date">Jour de naissance - Erreur - Veuillez renseigner ce champ obligatoire</label>
  <input type="text" id="date" aria-invalid="true" aria-describedby="format-date" />
  <p id="format-date">jj/mm/aaaa</p>
````
Au niveau AA, les messages d'erreur de saisie relative à l'utilisation d'un mauvais format de données, par exemple une erreur de saisie de courriel, doivent comporter un exemple de saisie réelle.

**Astuces** <code>aria-describedby</code> et <code>aria-labelledby</code> peuvent recevoir plusieurs valeurs d'identifiants séparées par des espaces. L'ordre de déclaration correspond à l'ordre de restitution par un lecteur d'écran.

### <a name="listesdechoix"></a>Listes de choix

Les listes de choix <code>&lt;select&gt;</code> doivent être, comme tout champ de formulaire, labellisées correctement.

Si la liste propose un choix limité de réponses, alors rien n'est demandé, mis à part que les options soient présentées dans un ordre cohérent (par exemple par ordre alphabétique).

````
  <label for="civilite">Civilité</label>
  <select id="civilite">
	<option>Madame</option>
	<option>Monsieur</option>
  </select>
````

Par contre, si la liste de choix propose un certain nombre d'options pour lesquelles il est possible de faire des regroupements, alors vous devez utiliser la balise de regroupement <code>optgroup</code> pourvue d'un attribut <code>label</code> qui titre ce regroupement.

````
  <label for="categorie">Catégorie de recherche</label>
  <select id="categorie">
	<optgroup label="Véhicules">
	  <option>Voitures</option>
	  <option>Motos</option>
	  <option>Bateaux</option>
	</optgroup>
	<optgroup label="Habitation">
	  <option>Vente</option>
	  <option>Achat</option>
	  <option>Location</option>
	</optgroup>
  <select>
````

### <a name="regroupement"></a>Regroupement de champs

Dans certains formulaires, il est nécessaire de créer des regroupements de champs. Ces regroupements de champs sont utiles pour ne pas induire certains utilisateurs, notamment aveugles, en erreur. Par exemple, un formulaire d'achat en ligne propose un formulaire avec la saisie d'une adresse de livraison et une adresse de facturation. Puisque les deux vont posséder des champs avec des étiquettes similaires, il est impératif de créer un regroupement pour que l'utilisateur comprenne quelle adresse il renseigne. Les regroupements de champs doivent posséder eux aussi une étiquette pertinente dans la balise <code>&lt;legend&gt;</code>.

````
<fieldset>
  <legend>Adresse de facturation</legend>
  <label for="nomf">Nom</label>
  <input type="text" id="nomf" />
  <label for="ruef">Rue</label>
  <input type="text" id="ruef" />
  <label for="villef">Ville</label>
  <input type="text" id="villef" />
</fieldset>
<fieldset>
  <legend>Adresse de livraison</legend>
  <label for="noml">Nom</label>
  <input type="text" id="noml" />
  <label for="ruel">Rue</label>
  <input type="text" id="ruel" />
  <label for="villel">Ville</label>
  <input type="text" id="villel" />
</fieldset>
````

Les autres cas typiques d'application sont les groupes de cases à cocher ou de boutons radio.

[Page de démonstration pour les regroupements de champs][31]

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [Calcul du nom accessible des éléments de formulaires (ressource en anglais)][17]

### <a name="criteres"></a>Critères RGAA

- 11.1 [A]
- 11.2 [A]
- 11.3 [AA]
- 11.4 [A]
- 11.5 [A]
- 11.6 [A]
- 11.7 [A]
- 11.8 [A]
- 11.9 [A]
- 11.10 [A]
- 11.11 [AA]
- 11.14 [AAA]
- 11.15 [AAA]

### Sommaire du guide de l'intégrateur

* [Introduction][18]
* [Fiche 1&nbsp;: Gabarit général][19]
* [Fiche 2&nbsp;: Navigation][20]
* [Fiche 3&nbsp;: Contenus][21]
* [Fiche 4&nbsp;: Tableaux][22]
* [Fiche 5&nbsp;: Liens][23]
* [Fiche 6&nbsp;: Formulaires][24]
* [Fiche 7&nbsp;: Prise de focus][25] 
* [Fiche 8&nbsp;: Respecter la distinction fond et forme][26]
* [Fiche 9&nbsp;: Images][27]
* [Fiche 10&nbsp;: Informations par la couleur et la forme][28] 
* [Fiche 11&nbsp;: Agrandissement des caractères][29]
* [Fiche 12&nbsp;: Multimédia][30]

[1]:	#introduction
[2]:	#etiquettes
[3]:	#etiquettepertinence
[4]:	#boutonpertinence
[5]:	#liaisonetiquettechamp
[6]:	#champsobligatoires
[7]:	#aidessaisie
[8]:	#erreursdesaisie
[9]:	#listesdechoix
[10]:	#regroupement
[11]:	#ailleurs
[12]:	#criteres
[13]:	demo/6-formulaires/etiquettes.html#article1
[14]:	https://www.w3.org/TR/html-aam-1.0/#h-accessible-name-and-description-calculation
[15]:	demo/6-formulaires/etiquettes.html#article2
[16]:	https://www.w3.org/TR/html5/forms.html#constraints
[17]:	https://www.w3.org/TR/html-aam-1.0/#h-accessible-name-and-description-calculation
[18]:	0-intro.md
[19]:	1-gabarit-general.md
[20]:	2-navigation.md
[21]:	3-contenus.md
[22]:	4-tableaux.md
[23]:	5-liens.md
[24]:	6-formulaires.md
[25]:	7-focus.md
[26]:	8-distinction-fond-forme.md
[27]:	9-images.md
[28]:	10-infos-forme-couleur.md
[29]:	11-agrandissement-des-caracteres.md
[30]:	12-multimedia.md
[31]: demo/6-formulaires/regroupement.html
[32]: #resume
