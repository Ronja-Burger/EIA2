namespace RandomPoem {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"] ;
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log (subjekte, prädikate, objekte);



    for (let index: number = 5; index >= 1; index--) {
        let solution: string = getVerse(subjekte, prädikate, objekte);
        //console.log(index);
        //console.log(solution);
    }




    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
    
        //creation of numbers: SUBJECT
    let zahlSub: number = Math.floor(Math.random() * 6 );
    let subZahl: number = zahlSub;
    //console.log(subZahl);

        // Zufallswert aus den Subjekten
    let removedSubject: string = subjekte.splice(subZahl, 1);
    //console.log(removedSubject + " ");






        //creation of numbers: PRÄDIKAT
    let zahlPrä: number = Math.floor(Math.random() * 6 );
    let präZahl: number = zahlPrä;
    //console.log(präZahl);

        // Zufallswert aus den Prädikaten
    let removedPrädikat: string = prädikate.splice(präZahl, 1);
    //console.log(removedPrädikat + " ");






        //creation of numbers: OBJEKT
    let zahlObj: number = Math.floor(Math.random() * 6 );
    let objZahl: number = zahlObj;
    //console.log(objZahl);

        // Zufallswert aus den Objekten
    let removedObject: string = objekte.splice(objZahl, 1);
    //console.log(removedObject + " ");







    let einVers: string = removedSubject[0], removedPrädikat[0], removedObject[0];
    console.log(einVers);
    return einVers;
    }
    }