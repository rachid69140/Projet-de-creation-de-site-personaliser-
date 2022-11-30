

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


function AdministrationMembre(){
        var NumIdMembre = 0;
                
        class Membre {
            constructor( ID, Nom, Prenom, AnnerNaissance, Portable, Majeur){ //      
                this.ID = ID;//
                this.Nom = Nom;//
                this.Prenom = Prenom;  //                                             // Creation de l'objet Membre
                this.AnnerNaissance = AnnerNaissance;//
                this.Portable = Portable;//
                this.Majeur = Majeur;//
        
            
                
            }
    MontrerInformation() {   
                    document.write ( "Id : " + this.ID + "<br> Nom : " + this.Nom + "<br> Prenom : " + this.Prenom + "<br> Portable : " + this.Portable + "<br> Majeur: " + this.Majeur ); 
                    // creation de la fonction qui afficher les information d'un membre
                }
                        
                }
                
                    AskCreationMembre = prompt("voulez vous crée un nouveau memrbe (Oui/Non) : ");

                    if (AskCreationMembre = "Oui") {
                    
                        NumIdMembre += 1; // comptage pour l'id du membre
                        var nom = prompt("Entrer le nom du membre"); //
                        var prenom = prompt("Entrer le prenom du membre");//
                        var annerNaissance = parseInt(prompt("Entrer l'anner de naissancce du membre"));   // bloc des saisies des informations
                        var portable = prompt("Entrer le portable du membre");//
                        var age = (2022 - annerNaissance);
                        
                        if( age >= 18) {
                                majeur = "oui";             // verification de l'age
                        }

                        else {
                                majeur = "non";
                        }
                
                        const nouveau = new Membre(NumIdMembre ,nom, prenom, annerNaissance, portable, majeur);  //creation avec l'objet membre avec les information saisie
                        nouveau.MontrerInformation();
                        

                    }

                    else {
                        
                        if (AskCreationMembre === "Non") {                                             // creation de la fonction qui demande la creation d'un nouveau membre
                        document.write("non");
                        }
                        else{
                        document.write("Saisie incorecte");
                        }
                    }

            let TableMembre = [Membre];    // creation d'un tableau qui stoque les instance de l'objet membre
    }




