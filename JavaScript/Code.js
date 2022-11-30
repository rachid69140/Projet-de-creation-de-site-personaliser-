

function Test() {
var Utilisateur = prompt("Entrer le nom d'utilisateur : ")
var Mdp = prompt("Entrer votre Mot de passe: ")
if (Utilisateur ==="Admin" && Mdp === "Root"){
    window.open("../Pages/PageAdmin/indexAdmin.html")
    
    

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




