//Exercice 1 : Les bases des variables

console.log("Exercice 1 : Les bases des variables")
let prenom = "Fanny"; //J'ai déclaré la variable "prenom"
let nom = "Saez";//J'ai déclaré la variable "nom"
console.log("")
//Affichage sur la console de ma variable prénom qui contient mon prénom
console.log("1. J'ai déclaré une variable prénom qui contient mon prénom")
console.log("Fanny")

//Affichage sur la console de ma variable nom qui contien mon nom
console.log("2. J'ai déclaré une variable nom qui contient mon nom")
console.log("Saez")

//Affichage d'une phrase sur ma console "Bonjour, je m'appelle [nom] [prenom]"
console.log("3. J'affiche une phrase dans la console : Bonjour, je m'appelle [nom] [prénom].")
console.log("Bonjour" + "," + " je m'appelle" + " " + nom + " " + prenom + ".")
console.log("")


console.log("_________________________________________________________________________________________")
//Exercice 2 : Conditions simples avec input
console.log("Exercice 2 : Conditions simples avec input")
console.log("")
console.log("1. Contient un champ input où l'utilisateur peut entrer son âge.")
console.log("")
console.log("Contient un bouton qui, lorsqu'on clique dessus :")
console.log("")
console.log("Vérifie si l'utilisateur est majeur (18 ans ou plus).")
console.log("")
console.log("Affiche un message dans une balise div en dessous")
console.log("Vous êtes mineur. si l'âge est inférieur à 18 | Vous êtes majeur. sinon")
console.log("")
console.log("")
console.log("_________________________________________________________________________________________")


//Exercice 3 : Les Boucles
console.log("Exercice 3 : Compter jusqu'à 10")
console.log("")
console.log("for (initialisation ; condition ; incrémentation) { instructions à répéter}")
console.log("Affiche les nombres de 1 à 10")
for (let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("")
console.log("_________________________________________________________________________________________")


//Exercice 4 : Les Fonctions
console.log("Exercice 4 : Fonction de calcul")
console.log("")
console.log("Addition")
//1-Fonction addition  qui prend deux nombres
console.log("function addition(nombre1, nombre2)")
console.log("retourne nombre1 + nombre2")
function addition(nombre1, nombre2){
    return nombre1 + nombre2; //retourne leur somme
}
console.log("")
console.log("J'ai déclaré la variable somme afin d'additionner les deux deux nombres")
console.log("let somme = addition(10, 15)")
let somme = addition(10 , 15); //j'ai déclaré la variable somme qui additionne deux nombres
console.log("")
console.log("Affiche le résultat de la somme")
console.log(somme);//Affiche le résultat de la somme des deux nombres
console.log("_________________________________________________________________________________________")
