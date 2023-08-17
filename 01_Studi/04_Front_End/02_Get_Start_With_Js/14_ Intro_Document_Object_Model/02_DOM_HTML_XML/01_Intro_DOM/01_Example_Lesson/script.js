// Exemple 1
/*
<section></section>
*/

console.log('---------------------------------------')

// Exemple 2
/*
<section>
    <div></div>
</section>
*/

console.log('---------------------------------------')

// Exemple 3
/*
<section class=”comment”>
    <div class=”name”></div>
    <div id=”important”></div>
</section>
*/

console.log('---------------------------------------')

// Exemple 4
/*
<section> 
    <div><p>Un texte qui accompagne l’image</p></div> 
    <div><img src="mesImages/monImage.jpg"></div> 
</section>
*/

console.log('---------------------------------------')

// Exemple 5
/*
<espece> 
<animale> 
<chat>felix</chat> 
<chien>médor</chien> 
</animale> 
<vegetale> 
<arbre>chêne</arbre> 
<fleur>paquerette</fleur> 
</vegetale> 
</espece>
*/

console.log('---------------------------------------')

// Exemple 6
/*
   « 'espece » : { 
              « animale » : { « chat » : « felix », 
                                      « chien » : « 'médor » 
                                   }, 
               « 'vegetale » : { « arbre » : « chêne », 
                                        « fleur » : « pâquerette » 
                                       } 
                      } 
*/

console.log('---------------------------------------')

// Exemple 7
/*
<div id="example">Ceci est un exemple</div>
*/

console.log('---------------------------------------')

// Exemple 8
/*
<img src="monimage.jpg" alt="C’est une imagede petit chien">
*/

console.log('---------------------------------------')

// Exemple 9
/*
// Accéder à l’élément img
var img = document.getElementsByTagName("img")[0];

// Lire la valeur de l’attribut alt
var altValeur = img.getAttribute("alt");
*/

console.log('---------------------------------------')

// Exemple 10
/*
<p> Voici un court texte </p>
*/

console.log('---------------------------------------')

// Exemple 11
/*
// Accéder à l’élément p
var p = document.getElementsByTagName("p")[0];

// Accéder au texte de l’élément p
var textNode = p.childNodes[0];

// Modifier le texte
textNode.nodeValue = "Voici un texte un peu plus long";
*/

console.log('---------------------------------------')

// Exemple 12
/*
<!-- Voici un comment node -->
*/

console.log('---------------------------------------')

// Exemple 13
/*
<!DOCTYPE html>
*/

console.log('---------------------------------------')

// Exemple 14
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Ceci est mon document node</title>
  </head>
  <body>
    <h1>Titre de la page</h1>
    <p>Ceci est un texte</p>
  </body>
</html>
*/
