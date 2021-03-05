var litButton = document.getElementById("lit");
var matButton = document.getElementById("mat");
var engButton = document.getElementById("eng");
var sciButton = document.getElementById("sci");
var socButton = document.getElementById("soc");
var allButton = document.getElementById("all")

litButton.onclick = function(){
    $(".card").filter(':not(.lit)').hide();
}

matButton.onclick = function(){
    $(".card").filter(':not(.mat)').hide();
}

engButton.onclick = function(){
    $(".card").filter(':not(.eng)').hide();
}

sciButton.onclick = function(){
    $(".card").filter(':not(.sci)').hide();
}

socButton.onclick = function(){
    $(".card").filter(':not(.soc)').hide();
}

allButton.onclick = function(){
    $(".card").show()
}
