# Guide de l'intégrateur

##  Fiche 4&nbsp;: Tableaux

- [Introduction - cas utilisateur][1]
- [Synthèse][6]
- [Tableaux de mise en forme][2]
- [Tableaux de données simples][3]
- [Tableaux de données complexes][4]
- [Pour aller plus loin][5]
- [Voir ailleurs / Ressources][7]
- [Critères RGAA][8]

### <a name="introduction"></a>Introduction - cas utilisateurs

Un tableau est toujours complexe à utiliser avec un lecteur d'écran. Une personne aveugle n'a pas une vision globale du tableau. Elle le parcourt de manière séquentielle&nbsp;: une case après l'autre et ligne à ligne. Afin d'améliorer son expérience, les lecteurs d'écran offrent des fonctionnalités de parcours étendues en utilisant les flèches de direction.

Pour adapter le tableau aux capacités de restitution et aux fonctionnalités de navigation étendues, il est important de définir des en-têtes de colonnes ou de lignes et de les relier explicitement aux cellules de données.

### <a name="resume"></a>Synthèse

- Implémenter le <code>role="presentation"</code> sur les tableaux de mise en forme.
- Déclarer les cellules d'en-têtes dans des éléments <code>&lt;th&gt;</code>.
- Implémenter un attribut <code>scope="col"</code> pour les en-têtes de colonnes.
- Implémenter un attribut <code>scope="row"</code> pour les en-têtes de lignes.
- Utiliser les relations <code>id</code>, <code>headers</code> pour relier les cellules de données à leurs en-têtes dans le cas de cellules fusionnées.

### <a name="miseenforme"></a>Tableaux de mise en forme

Le premier conseil serait simplement de ne pas utiliser de tableau (<code>&lt;table&gt;</code>) pour réaliser des mises en forme. Les tableaux sont utiles pour présenter des données tabulaires. C’est leur fonction principale.

Si malgré tout, vous êtes amenés à utiliser des éléments <code>&lt;table</code> pour réaliser certaines mises en forme, alors vous devez&nbsp;:

- Implémenter <code>role="presentation"</code> sur l'élément <code>&lt;table&gt;</code>.
- Ne pas utiliser les éléments propres aux tableaux de données&nbsp;: <code>&lt;caption&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tfoot&gt;</code>&nbsp;;
- Ne pas utiliser les attributs propres aux tableaux de données&nbsp;: <code>scope</code>, <code>headers</code>.

Si vous utilisez un tableau de données, la structure doit ressembler à celle-ci&nbsp;:

````
	<table role="presentation">
	    <tr>
	        <td>[votre contenu]</td>
	        <td>[votre contenu]</td>
	    </tr>
	    <tr>
	        <td>[votre contenu]</td>
	        <td>[votre contenu]</td>
	    </tr>
	
	</table>
````

De plus, vous devez vous assurer que la linéarisation du tableau permet la compréhension du contenu&nbsp;: un tableau est lu de gauche à droite. Assurez-vous que le contenu reste compréhensible de cette manière.

Note&nbsp;: L’API ARIA propose un mécanisme permettant de surcharger le rôle natif d’un élément pour proposer des composants. Ainsi, il est possible d’utiliser des tableaux de mise en forme pour construire des listes, par exemple en implémentant les rôles `list` et `listitem` sur les éléments du tableau. Si cet usage est fortement déconseillé, il est néanmoins conforme. Le tableau étant restitué comme une liste et non plus comme un tableau, il n’est pas utile de signaler qu’il s’agit d’un tableau de présentation via le rôle `presentation`.

#### À propos du <code>role="presentation"</code>

Le <code>role="presentation"</code> permet d'annuler la sémantique native de l'élément qui la possède. 

Dans notre cas, si le tableau possède le <code>role="presentation"</code>, un lecteur d'écran ne restituera pas le tableau, mais uniquement les contenus dans l'ordre dans lequel ils sont insérés dans les cellules. L'utilisateur aura l'impression d'être sur du simple texte.

De plus, les comportements clavier disponibles sur ces éléments (par exemple <kbd>flèche droite</kbd> pour aller à la cellule suivante) ne sont plus actifs et retrouvent leur fonctionnalité d'origine (par exemple, <kbd>flèche droite</kbd> permet de se déplacer de caractère en caractère).

[Voir l'explication du <code>role="presentation"</code> dans la spécification WAI-ARIA][9]

### <a name="tableauxsimples"></a>Tableaux de données simples

Un tableau est considéré comme simple s'il ne possède pas de cellules fusionnées qui rendent la compréhension délicate et s'il ne présente pas une structure (notamment des sous-contextes) qui rend sa compréhension dépendante d'une mise en forme.

Une manière d'identifier un tableau de donnée simple est de considérer les en-têtes&nbsp;: si les en-têtes concernent toute une ligne ou toute une colonne alors il s'agit d'un tableau de données simple.

Pour un tableau de données simple, vous devez&nbsp;:

- Implémenter un élément <code>&lt;caption&gt;</code> qui est le titre du tableau, il permet aux utilisateurs de comprendre quelles données ils vont rencontrer.
- Implémenter les en-têtes dans des éléments <code>&lt;th&gt;</code>&nbsp;;
- Pour les en-têtes de colonnes, l'élément <code>&lt;th&gt;</code> doit avoir l'attribut <code>scope="col"</code>&nbsp;;
- Pour les en-têtes de lignes, l'élément <code>&lt;th&gt;</code> doit avoir l'attribut <code>scope="row"</code>.

Un tableau simple ressemble à ceci&nbsp;: 

<table>
    <caption>Accessibilité des lignes du réseau de surface RATP</caption>
    <tr>
        <th scope="col">Équipements</th>
        <th scope="col">Nombre de lignes</th>
        <th scope="col">Pourcentage du total de lignes</th>
    </tr>
    <tr>
        <td>Rampe d'accès</td>
        <td>260</td>
        <td>70,46&nbsp;%</td>
    </tr>
    <tr>
        <td>Annonce sonore</td>
        <td>318</td>
        <td>86,17&nbsp;%</td>
    </tr>
</table>

La structure de notre tableau sera donc la suivante&nbsp;:

````
	<table>
	    <caption>Accessibilité des lignes du réseau de surface RATP</caption>
	    <tr>
	        <th scope="col">Équipements</th>
	        <th scope="col">Nombre de lignes</th>
	        <th scope="col">Pourcentage du total de lignes</th>
	    </tr>
	    <tr>
	        <td>Rampe d'accès</td>
	        <td>260</td>
	        <td>70,46&nbsp;%</td>
	    </tr>
	    <tr>
	        <td>Annonce sonore</td>
	        <td>318</td>
	        <td>86,17&nbsp;%</td>
	    </tr>
	</table>
````

*Ces données sont issues [du site data.gouv.fr][10]. Leur exploitation dans ce contexte n'est faite qu'à titre d'illustration, elle ne relève en rien d'une statistique officielle.*

### <a name="tableauxcomplexes"></a>Tableaux de données complexes

Les tableaux de données complexes sont généralement des tableaux qui possèdent des cellules fusionnées ou des sous-contextes. 

Voici un exemple de tableau de données complexe&nbsp;: 

<table>
    <caption>Nombre de gares et points d'arrêts TER, en fonction du type de handicap et du type de dispositif par handicap</caption>
    <tr>
        <th colspan="2">Malvoyants</th>
        <th colspan="2">Aveugles</th>
    </tr>
    <tr>
        <th>Obstacles contrastés</th>
        <th>Portes contrastées</th>
        <th>Obstacles détectables à la canne</th>
        <th >Guidage en braille</th>
    </tr>
    <tr>
        <td style="text-align:center;">73</td>
        <td style="text-align:center;">65</td>
        <td style="text-align:center;">103</td>
        <td style="text-align:center;">0</td>
    </tr>
    <tr>
        <td style="text-align:center;font-weight:bold" colspan="2">138</td>
        <td style="text-align:center;font-weight:bold" colspan="2">103</td>
    </tr>
</table>

Dans ce tableau, on trouve des en-têtes et des cellules de données fusionnées. La réparation consiste à relier chaque cellule de données explicitement grâce à des identifiants sur les en-têtes et des attributs <code>headers</code> sur les cellules de données. 

````
<table>
    <caption>Nombre de gares et points d'arrêts TER, en fonction du type de handicap et du type de dispositif par handicap</caption>
    <tr>
        <th id="malvoyant" colspan="2">Malvoyants</th>
        <th id="aveugle" colspan="2">Aveugles</th>
    </tr>
    <tr>
        <th id="data1" headers="malvoyant">Obstacles contrastés</th>
        <th id="data2" headers="malvoyant">Portes contrastées</th>
        <th id="data3" headers="aveugle">Obstacles détectables à la canne</th>
        <th id="data4" headers="aveugle">Guidage en braille</th>
    </tr>
    <tr>
        <td headers="malvoyant data1">73</td>
        <td headers="malvoyant data2">65</td>
        <td headers="aveugle data3">103</td>
        <td headers="aveugle data4">0</td>
    </tr>
    <tr>
        <td colspan="2" headers="malvoyant">138</td>
        <td colspan="2" headers="aveugle">103</td>
    </tr>
</table>
````

*Ces données sont issues du site data.gouv.fr ([Accessibilité des gares et points d'arrêt TER aux personnes à mobilité réduite en 2013][11]). Leur exploitation dans ce contexte n'est faite qu'à titre d'illustration, elle ne relève en rien d'une statistique officielle.*

### <a name="plusloin"></a>Pour aller plus loin

- [Le role="presentation" dans la spécification WAI-ARIA][12]

### <a name="ailleurs"></a>Voir ailleurs / Ressources

- [Fiche «&nbsp;Des tableaux pour présenter des données&nbsp;» dans le guide «&nbsp;Contribuer sur le Web de manière accessible&nbsp;»][13]

### <a name="criteres"></a>Critères RGAA

- 5.1 [A]
- 5.2 [A]
- 5.3 [A]
- 5.4 [A]
- 5.5 [A]
- 5.6 [A]
- 5.7 [A]
- 5.8 [A]

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
[2]:	#miseenforme
[3]:	#tableauxsimples
[4]:	#tableauxcomplexes
[5]:	#plusloin
[6]:	#resume
[7]:	#ailleurs
[8]:	#criteres
[9]:	https://www.w3.org/TR/wai-aria/roles#presentation
[10]:	https://www.data.gouv.fr/fr/datasets/accessibilite-des-lignes-du-reseau-de-surface-ratp-ratp/
[11]:	https://www.data.gouv.fr/fr/datasets/accessibilite-des-gares-et-points-d-arret-ter-aux-personnes-a-mobilite-reduite-en-2013-npc/
[12]:	https://www.w3.org/TR/wai-aria/roles#presentation
[13]:	http://disic.github.io/guide-contribuer_accessible/tableaux.html
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
