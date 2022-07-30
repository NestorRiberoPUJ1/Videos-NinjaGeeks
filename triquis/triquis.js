var turno = "boton"

var TodasLasCasillas = document.getElementsByClassName("casilla")
TodasLasCasillas = Array.from(TodasLasCasillas);

var labelTurno = document.getElementById("labelTurno");
labelTurno.innerHTML = "Turno de: " + turno;

var Matriz = [
    "", "", "",
    "", "", "",
    "", "", ""
]

function VerificarGanador(Matriz) {
    let winner = document.getElementById("winner");
    if (Matriz[0] != "" && Matriz[0] == Matriz[1] && Matriz[0] == Matriz[2]) {
        winner.innerHTML = "Ganador: " + turno;
    }
}


for (const index in TodasLasCasillas) {
    console.log("Creando Evento para la casilla: " + index);
    let Elemento = TodasLasCasillas[index];
    Elemento.addEventListener("click", () => {
        let img = Elemento.querySelector("img");
        console.log(img.src + "");
        if (turno == "boton" && !img.src.endsWith("star.svg") && !img.src.endsWith("button.svg")) {
            img.src = "button.svg";
            Matriz[index] = "o";
            VerificarGanador(Matriz);
            turno = "estrella";

        }
        else if (turno == "estrella" && !img.src.endsWith("button.svg") && !img.src.endsWith("star.svg")) {
            img.src = "star.svg";
            Matriz[index] = "x";
            VerificarGanador(Matriz);
            turno = "boton";
        }
        console.log(Matriz);
        labelTurno.innerHTML = "Turno de: " + turno;
    })

}

var resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    for (const index in TodasLasCasillas) {
        console.log("Creando Evento para la casilla: " + index);
        let Elemento = TodasLasCasillas[index];
        let img = Elemento.querySelector("img");
        img.src = "";
        turno = "boton";
        labelTurno.innerHTML = "Turno de: " + turno;
    }
})