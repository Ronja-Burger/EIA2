namespace RandomPoem {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log (subjekte, prädikate, objekte);



    for (let index: number = 5; index >= 1; index--) {
        let solution: string = getVerse(subjekte, praedikate, objekte);
        //console.log(index);
        console.log(solution);
    }




    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {

        //creation of numbers: SUBJECT
        let zahlSub: number = Math.floor(Math.random() * _subjekte.length);
        //console.log(subZahl);

        // Zufallswert aus den Subjekten
        let removedSubject: string[] = subjekte.splice(zahlSub, 1);
        //console.log(removedSubject + " ");






        //creation of numbers: PRÄDIKAT
        let zahlPra: number = Math.floor(Math.random() * _prädikate.length);
        //console.log(präZahl);

        // Zufallswert aus den Prädikaten
        let removedPraedikat: string[] = praedikate.splice(zahlPra, 1);
        //console.log(removedPrädikat + " ");






        //creation of numbers: OBJEKT
        let zahlObj: number = Math.floor(Math.random() * _objekte.length);
        //console.log(objZahl);

        // Zufallswert aus den Objekten
        let removedObject: string[] = objekte.splice(zahlObj, 1);
        //console.log(removedObject + " ");







        let einVers: string = removedSubject[0] + " " + removedPraedikat[0] + " " + removedObject[0];
        //console.log(einVers);
        return einVers;
    }
}