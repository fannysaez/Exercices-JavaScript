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
console.log("Bonjour je m\'appelle" + " " + prenom + " " + nom + ".")
console.log(`Bonjour je m'appelle ${nom} ${prenom}`)
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
console.log("Condition qui va me permettre de vérifier si l'utilisateur est majeur '18 ans ou plus'")
function verifierAge() {
    const age = document.getElementById('age').value;

    if (age >= 18) {
        console.log ("Vous êtes majeur.")
    } else {
        console.log ("Vous êtes mineur.")
    }
}

console.log("")
console.log("Affiche un message dans une balise div en dessous")
console.log("Vous êtes mineur. si l'âge est inférieur à 18 | Vous êtes majeur. sinon")
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
console.log("J'ai déclaré la variable somme afin d'additionner les deux nombres")
console.log("let somme = addition(10, 15)")
let somme = addition(10 , 15); //j'ai déclaré la variable somme qui additionne deux nombres
console.log("")
console.log("Affiche le résultat de la somme")
console.log(somme);//Affiche le résultat de la somme des deux nombres
console.log("_________________________________________________________________________________________")


//Exercice 5 : Les Tableaux
console.log("Exercice 5 : Manipulation de tableaux")
console.log("")
console.log("1. Créez un tableau contenant les jours de la semaine")
const joursSemaine = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
console.log("let joursSemaine = [Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi]")
console.log("")
console.log("2- Affichez le premier jour et le dernier jour")
console.log("Premier jour :" + " " + joursSemaine[0]);
console.log("Dernier jour :" + " " + joursSemaine[5]);
console.log("")
console.log("3- Aoutez 'Dimanche' au tableau et affichez-le")
//J'ajoute Dimanche à la fin du tableau
joursSemaine.push("Dimanche");
//J'affiche le tableau complet (pour vérification)
console.log("Tableau complet :" + " " +  joursSemaine);
console.log("_________________________________________________________________________________________")

console.log("")
//Exercice 6 : Objets
console.log("Exercice 6 : Créer un objet")
console.log("")
console.log("1. Créer un objet 'utilisateur' avec les propriétés suivantes : nom : votre prénom, age : votre âge, estConnecte :  true")
console.log("")
//Création de l'objet utilisateur
let utilisateur = {
    monNom : "Fanny",
    age : 38,
    estConnecte : true
};

console.log("2. Affichez la phrase suivante :")
console.log()
//Vérification de l'état de connexion et affichage du message
if(utilisateur.estConnecte){
    console.log("Bienvenue" + " " + utilisateur.monNom + " !");
}

console.log("_________________________________________________________________________________________")
console.log("")
// Exercice 7 : Événements DOMS (si HTML inclus)
console.log("Exercice 7 : Bouton interactif")
console.log("")
//Récupérer monBouton par son ID
let monBouton = document.getElementById("monBouton");
console.log("1- document.getElementById('monBouton') permet de sélectionner l'élément HTML ayant l'ID 'monBouton' et de le stocker dans la variable 'monBouton'")
console.log("")
//J'ai ajouté un écouteur d'événement "click" au bouton 
monBouton.addEventListener("click", function() {
    console.log("Exercice 7 : Bouton intéractif");
    console.log("Bouton cliqué !");
  }); //lorsque je clique sur le bouton intéractif, ça s'affiche "Bouton cliqué !"
console.log("2- addEventListener('click', function() {...}) ajoute un 'écouteur d'événement' au bouton. Lorsqu'un clic est détecté sur le bouton, la fonction à l'intérieur est exécultée")

console.log("_________________________________________________________________________________________")

console.log("")
// Exercice 8 : Manipulation des chaînes de caractères
console.log("Exercice 8 : Nombre de lettres")
console.log("")
console.log("_________________________________________________________________________________________")

console.log("")
//Devinette de l'exercice 9
console.log("Aléatoire")
console.log("")
console.log("Exercice 9 : Devinette")

console.log("_________________________________________________________________________________________")

console.log("")
