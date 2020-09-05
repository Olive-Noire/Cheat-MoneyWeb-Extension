let first = false;

chrome.webNavigation.onCompleted.addListener(function() {

    if (!first) {
        alert("Vous avez chargé la version Online !!");
        first = true;
    }


}, {url: [{urlMatches: "http://localhost/MoneyWeb/main/Profile.php"}]});