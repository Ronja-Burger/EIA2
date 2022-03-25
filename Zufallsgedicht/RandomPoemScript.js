"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log (subjekte, prädikate, objekte);
    for (let index = 5; index >= 1; index--) {
        let solution = getVerse(subjekte, prädikate, objekte);
        //console.log(index);
        //console.log(solution);
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        //creation of numbers: SUBJECT
        let zahlSub = Math.floor(Math.random() * 6);
        let subZahl = zahlSub;
        //console.log(subZahl);
        // Zufallswert aus den Subjekten
        let removedSubject = subjekte.splice(subZahl, 1);
        //console.log(removedSubject + " ");
        //creation of numbers: PRÄDIKAT
        let zahlPrä = Math.floor(Math.random() * 6);
        let präZahl = zahlPrä;
        //console.log(präZahl);
        // Zufallswert aus den Prädikaten
        let removedPrädikat = prädikate.splice(präZahl, 1);
        //console.log(removedPrädikat + " ");
        //creation of numbers: OBJEKT
        let zahlObj = Math.floor(Math.random() * 6);
        let objZahl = zahlObj;
        //console.log(objZahl);
        // Zufallswert aus den Objekten
        let removedObject = objekte.splice(objZahl, 1);
        //console.log(removedObject + " ");
        let einVers = [removedSubject[], removedPrädikat[], removedObject[]];
        console.log(einVers);
        return;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoemScript.js.map