console.log("Le client de cheat à bien était ajouté !!");
//cheatFrame
var CheatFrame = document.createElement("div");


//Profiles
if (document.location == "http://localhost/MoneyWeb/main/Profile.php") {
    
    for (let i = 0;i < 3;i++) document.body.appendChild(document.createElement("br"));
    CheatFrame.setAttribute("id","cheatFrameProfiles");

};

//Game
if (document.location == "http://localhost/MoneyWeb/main/MoneyWeb.php") {
    
    for (let i = 0;i < 3;i++) document.body.appendChild(document.createElement("br"));
    CheatFrame.setAttribute("id","cheatFrameGame");

};


CheatFrame.innerHTML = "CheatFrame 💀💀💀";
document.body.appendChild(CheatFrame);
