let ageCapitaine = document.getElementById("ageDuCapitaine");
let a = 0;

while (a < 51) {

    a++
    if (a < 18) {
        ageCapitaine.innerHTML += "Le capitaine a: " +a + ", Le capitaine est jeune" + "<br><br>";
    }

    else if (a <= 50) {
        ageCapitaine.innerHTML+= "Le capitaine a: " + a +", Le capitaine n'est pas très vieux" + "<br> <br>";
    }

    else if (a > 50) {
        ageCapitaine.innerHTML += "Le capitaine a:" + a + ", Le capitaine est vieux" + "<br> <br>"
    }


}