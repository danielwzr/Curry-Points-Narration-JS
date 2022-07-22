let curryPoints = 0;
const firstNarration = "Curry opens the count. First three points for him!";
const pointCount = [" for him now.", " points for the jersey 30.", " points... what a shoot!"]
const mediumExcitementNarration = ["Another three for Curry!", "One more three for the GSW!", "Steph for the three..."];
const highExcitementNarration = ["FROM WAY DOWNTOWN, CURRYYY!!!", "SPLASHHHHHHH!", "FOR THE THREEEEE!!"];


while (curryPoints <= 45) {
    curryPoints += 3;
    
    curryPoints === 3 && 
    console.log(firstNarration);

    curryPoints >= 3 && curryPoints < 30 && 
    console.log(mediumExcitementNarration[randomNarration(3)], curryPoints, pointCount[randomNarration(3)]);

    curryPoints >= 30 && 
    console.log(highExcitementNarration[randomNarration(3)], curryPoints, pointCount[randomNarration(3)]);
}

function randomNarration(num) {
    const randomNarrationNum = Math.floor(Math.random() * num);
    return randomNarrationNum;
}