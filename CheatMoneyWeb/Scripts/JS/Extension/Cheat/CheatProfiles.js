if (document.location == "http://localhost/MoneyWeb/main/Profile.php") {

    console.log("Le client de cheat Pour les Profiles à était chargé !!");

    //Perfect Profile
    var PerfectProfileButton = document.createElement("button");
    PerfectProfileButton.setAttribute("id","profilePerfect");

    PerfectProfileButton.addEventListener("click", function() {

        AddPerfectProfile();

    });

    PerfectProfileButton.innerHTML = "Profile Parfait";

    //Profile Personnalisé
    var PersonnelProfile = document.createElement("button");
    PersonnelProfile.setAttribute("id","profilePersonnel");

    PersonnelProfile.addEventListener("click", function() {

        AddPersonnelProfile();

    });

    PersonnelProfile.innerHTML = "Profile Personnalisé";


    //Ajout des éléments dans la cheatFrame
    document.getElementById("cheatFrameProfiles").appendChild(PerfectProfileButton);
    document.getElementById("cheatFrameProfiles").appendChild(PersonnelProfile);




    function AddPerfectProfile(name) {

        console.warn("CHEAT 💀 : creation d'un Profile Parfait !!");
        name = prompt("Choissisez le nom du Profile");
    
    
        if (name.length > 10) name = prompt("le nom ne doit pas depasser 10 caractere");
        
        $.ajax({

            type: "POST",
            url: './Profile.php',
            data: {name:name,money:999999,auto:999,speed:999,plus:999,prixspeed:0,prixauto:0,prix:0}

        });


    }

    function AddPersonnelProfile(name,money,auto,speed,plus,prixspeed,prixauto,prix) {

        console.warn("CHEAT 💀 : creation d'un Profile Personnalisé !!");
        name = prompt("Choissisez le nom du Profile");
        money = prompt("quel est le montant de l'argent du profile du Profile");
        auto = prompt("Choissisez l'auto du Profile");
        speed = prompt("Choissisez la vitesse du Profile");
        plus = prompt("quel est le + du Profile");
        prixspeed = prompt("quel est le prix de Speed de départ");
        prixauto = prompt("quel est le prix de l'auto de départ");
        prix = prompt("quel est le prix de + de départ");

        if (name.length > 10) name = prompt("le nom ne doit pas depasser 10 caractere");

        $.ajax({

            type: "POST",
            url: './Profile.php',
            data: {name:name,money:parseInt(money),auto:parseInt(auto),speed:parseInt(speed),plus:parseInt(plus),prixspeed:parseInt(prixspeed),prixauto:parseInt(prixauto),prix:parseInt(prix)}

        });

    }

}