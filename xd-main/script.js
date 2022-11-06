
function novel(elemid){
    var ertekek = document.getElementsByClassName("hany_darab");
    ertekek[elemid].innerHTML++;
}

function csokkent(elemid){
    var ertekek = document.getElementsByClassName("hany_darab");
    if  (ertekek[elemid].innerHTML > 0){
        ertekek[elemid].innerHTML--;   
    }
}
