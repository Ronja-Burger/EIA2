"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjekte, prädikate, objekte);
    for (let index = 5; index >= 1; index--) {
        let solution = getVerse(subjekte, prädikate, objekte);
        //console.log(index);
        //console.log(solution);
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        let einVers = [""];
        //let test: string = "Alohomora";
        return einVers;
        //console.log(test);
    }
    //creation of numbers
    let eineZahl = Math.floor(Math.random() * 6);
    let dieZahl = eineZahl;
    console.log(dieZahl);
    // Zufallswert aus den Subjekten
    let removedSubject = subjekte.splice(dieZahl, 1);
    console.log(removedSubject + " ");
    // Zufallswert aus den Prädikaten
    let removedPrädikat = prädikate.splice(dieZahl, 1);
    console.log(removedPrädikat + " ");
    // Zufallswert aus den Objekten
    let removedObject = objekte.splice(dieZahl, 1);
    console.log(removedObject + " ");
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoemScript.js.map