namespace RandomPoem {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"] ;
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log (subjekte, prädikate, objekte);
    for (let index: number = 5; index >= 1; index--) {
        let solution: string = getVerse(subjekte, prädikate, objekte);
        //console.log(index);
        //console.log(solution);
    }

    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
        let einVers: string[] = [""];
        //let test: string = "Alohomora";
        return einVers;
        //console.log(test);
    }

    //creation of numbers

    let eineZahl: number = Math.floor(Math.random() * 6 );
    let dieZahl: number = eineZahl;
    console.log(dieZahl);

    // Zufallswert aus den Subjekten
    let removedSubject: string = subjekte.splice(dieZahl, 1);
    console.log(removedSubject + " ");

     // Zufallswert aus den Prädikaten
     let removedPrädikat: string = prädikate.splice(dieZahl, 1);
     console.log(removedPrädikat + " ");

      // Zufallswert aus den Objekten
    let removedObject: string = objekte.splice(dieZahl, 1);
    console.log(removedObject + " ");
    }