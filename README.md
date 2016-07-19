# Guide de l’intégrateur RGAA 3

## Introduction

Ce guide de l’intégrateur vous est proposé dans le cadre des ressources accompagnant la prise en main de la version&nbsp;3 du référentiel général d’accessibilité pour les administrations (RGAA&nbsp;3).

Toutes les règles et tous les exemples d’implémentation donnés ici se réfèrent à la version&nbsp;3 du RGAA. 

Le RGAA&nbsp;3 est composé d’un [document d’introduction][1], d’un [guide d’accompagnement][2] et d’un [référentiel technique][3]. Cet ensemble de documents a une portée réglementaire puisqu’ils ont été rendus officiels par l'[arrêté du 29 avril 2015][4], lui-même venant préciser l'[article 47 de la loi 2005-102 du 11 février 2005][5] et l'[arrêté 2009-546 du 14 mai 2009][6].

Les ressources complémentaires sont des supports sans valeur réglementaire et visent à vous aider à rendre vos contenus numériques accessibles et conformes au RGAA&nbsp;3.

### À qui s’adresse ce guide&nbsp;?

Ce guide s’adresse aux intégrateurs chargés de réaliser les gabarits HTML et CSS et se focalise sur les problématiques de respect de la sémantique et de la mise en forme. Il n’est pas question dans ce guide de JavaScript, qui fait l’objet avec ARIA, d’un tout autre guide. 

#### À chacun son métier

Certaines problématiques ne sont volontairement pas abordées, car elles dépendent d’autres acteurs que l’intégrateur web. Par exemple, les contrastes de couleurs ou la pertinence des liens ne sont pas du ressort de l’intégrateur. Ce sont aux concepteurs, designers ou contributeurs de s’attacher à respecter ces contraintes.

### Mode d’emploi du guide

Le guide a été pensé comme une série de fiches pratiques sur le même modèle pour en faciliter l’utilisation. Vous pouvez les lire en fonction de vos besoins, sans avoir à suivre un ordre particulier, chaque fiche étant indépendante.

Certaines fiches proposent également des démonstrations d’implémentation conforme et non conforme. Les démonstrations, exemples et explications s’appuient uniquement sur les navigateurs utilisés dans [la base de référence][7] et sur les recommandations de la version&nbsp;3 du RGAA.

Vous retrouverez dans chaque fiche&nbsp;:

* **Sommaire**&nbsp;: pour naviguer à travers l’ensemble des fiches du guide&nbsp;;
* **Synthèse**&nbsp;: les principaux points à retenir&nbsp;;
* **Correspondances RGAA&nbsp;3**&nbsp;: les correspondances avec les critères du référentiel technique du RGAA&nbsp;3.

## Sommaire des fiches

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

### Intégration web et RGAA&nbsp;3

Thématiques du RGAA&nbsp;3 abordées à travers ces fiches&nbsp;:

- Images
- Cadres
- Tableaux
- Liens
- Éléments obligatoires
- Structuration de l’information
- Présentation de l’information
- Formulaires
- Navigation
- Consultation

### Ressources connexes et références

- Guide [«&nbsp;Contribuer sur le web de manière accessible&nbsp;»][31]
- [Méthodologie de test RGAA 3][36]
- [Comprendre les WCAG&nbsp;: description de cas utilisateurs et d’impacts par type de handicap][32]
- [Liste des techniques et échecs WCAG&nbsp;2.0 (ressource en anglais)][35]

### Licence d’utilisation

Ce document est la propriété du Secrétariat général à la modernisation de l’action publique français (SGMAP). Il est placé sous la [licence ouverte 1.0 ou ultérieure][33], équivalente à une licence <i lang="en">Creative Commons BY</i>. Pour indiquer la paternité, ajouter un lien vers la version originale du document disponible sur le [compte <span lang="en">GitHub</span> de la DInSIC][34].

[1]:	http://references.modernisation.gouv.fr/rgaa/
[2]:	http://references.modernisation.gouv.fr/rgaa/guide-accompagnement-RGAA.html
[3]:	http://references.modernisation.gouv.fr/rgaa/criteres.html
[4]:	http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000030540064&dateTexte=20150921
[5]:	http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000809647&fastPos=1&fastReqId=1497340759&categorieLien=cid&oldAction=rechTexte#LEGIARTI000006682279
[6]:	http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000030540064&categorieLien=id
[7]:	http://references.modernisation.gouv.fr/rgaa/base-de-reference.html
[8]:	0-intro.md
[9]:	1-gabarit-general.md
[10]:	2-navigation.md
[11]:	3-contenus.md
[12]:	4-tableaux.md
[13]:	5-liens.md
[14]:	6-formulaires.md
[15]:	7-focus.md
[16]:	8-distinction-fond-forme.md.md
[17]:	9-images.md
[18]:	10-infos-forme-couleur.md
[19]:	11-agrandissement-des-caracteres.md
[20]:	12-multimedia.md
[31]:	http://disic.github.io/guide-contribuer_accessible/
[32]:	http://www.w3.org/Translations/NOTE-UNDERSTANDING-WCAG20-fr/Overview.html#contents
[33]:	https://www.etalab.gouv.fr/licence-ouverte-open-licence
[34]:	https://github.com/DISIC
[35]: 	https://www.w3.org/TR/WCAG20-TECHS/
[36]: 	http://disic.github.io/rgaa_methodologie/

Ce guide est rédigé au format Markdown Vous trouverez sur ce [lien Wikipedia](https://fr.wikipedia.org/wiki/Markdown) des précisions sur ce langage. Il peut également être consulté en ligne ou au format PDF.
