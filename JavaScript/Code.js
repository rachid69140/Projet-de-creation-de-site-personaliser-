

function Test() {
var Utilisateur = prompt("Entrer le nom d'utilisateur : ")
var Mdp = prompt("Entrer votre Mot de passe: ")
if (Utilisateur ==="Admin" && Mdp === "Root"){
    window.open("Pages/PageAdmin/indexAdmin.html")
    
    

}
else if  (Utilisateur ==="Admin"){
    alert("Mot de passe eronner")
}
else if  (Mdp ==="Root"){
    alert("Utilisateur  eronner")
}
    
else{
    alert("Utilisateur et MDP  erroner")
}
   
}


var  TableauMembre = new Array();// creation du tableau ou seron stocker les membres
var TableIdMembre = new Array();// creation du tableau ou seron stocker les membres




 
function CreationMembre(){


    var CreationMembre = prompt("voulez vous crée un nouveau memrbe (Oui/Non) : "); // demande de creation de mmembre
    var NombreMembre = parseInt(prompt("Combient de mmbre voulez vous crée"));// demande du nombre de mmebre a crée
    var IdMembre = 0; // initialisation de la variable ID
    var Indice = 0 // initialisation de la variable Indice

    if (CreationMembre = "Oui") {
        for (Indice; Indice < NombreMembre;Indice++){ // Tant que l'indice est plus petit que le nombre de membre que l'on veut entrer on repete la boucle de saisie et de contage des membres
            
            var prenom = prompt("Entrer le prenom du membre");//saisie du prenom du membre
            TableauMembre.push(prenom); // ajout du prenom dans le tableau 
        }
    }

    else {
            
            if ( CreationMembre === "Non") {                                            
                document.write("non");
            }
            
            else{
                document.write("Saisie incorecte");
            }
        }
    

    

    }

function AfficherMembre(){
    
    document.getElementById("ZoneAffichage").innerHTML="Voici la liste des membres: " +TableauMembre;
}