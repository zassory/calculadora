
let h3_pantalla = document.getElementsByClassName("h3-pantalla")[0];

//Ya tengo el resultado y es string


let resultado = parseInt(h3_pantalla);

let digitos = [];

let sieteBoton = document.getElementById("siete");
sieteBoton.addEventListener("click", function(){
    let siete = document.getElementById("siete").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += siete.trim();
    //digitos.push(siete);
});
let ochoBoton = document.getElementById("ocho");
ochoBoton.addEventListener("click", function(){
    let ocho = document.getElementById("ocho").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += ocho.trim();
    //digitos.push(ocho);    
});

let nueveBoton = document.getElementById("nueve");
nueveBoton.addEventListener("click", function(){
    let nueve = document.getElementById("nueve").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += nueve.trim();
    //digitos.push(nueve);    
});
let cuatroBoton = document.getElementById("cuatro");
cuatroBoton.addEventListener("click", function(){
    let cuatro = document.getElementById("cuatro").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += cuatro.trim();
    //digitos.push(cuatro);    
});
let cincoBoton = document.getElementById("cinco");
cincoBoton.addEventListener("click", function(){
    let cinco = document.getElementById("cinco").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += cinco.trim();
    //digitos.push(cinco);    
});
let seisBoton = document.getElementById("seis");
seisBoton.addEventListener("click", function(){
    let seis = document.getElementById("seis").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += seis.trim();
    //digitos.push(seis);    
});
let unoBoton = document.getElementById("uno");
unoBoton.addEventListener("click", function(){
    let uno = document.getElementById("uno").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += uno.trim();
    //digitos.push(uno);    
});
let dosBoton = document.getElementById("dos");
dosBoton.addEventListener("click", function(){
    let dos = document.getElementById("dos").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += dos.trim();
    //digitos.push(dos);    
});
let tresBoton = document.getElementById("tres");
tresBoton.addEventListener("click", function(){
    let tres = document.getElementById("tres").textContent;
    limpiarSiEsPrimerDigito();
    h3_pantalla.textContent += tres.trim();
    //digitos.push(tres);    
});
let ceroBoton = document.getElementById("cero");
ceroBoton.addEventListener("click", function(){
    let cero = document.getElementById("cero").textContent;
    h3_pantalla.textContent += cero.trim();
    digitos.push(cero);    
});
let masBoton = document.getElementById("mas");
masBoton.addEventListener("click", function(){
    let mas = document.getElementById("mas").textContent;
    if(h3_pantalla.textContent == "0"){
        return;
    }else if(h3_pantalla.textContent != "0"){
        h3_pantalla.textContent += mas.trim();
    }
});
let menosBoton = document.getElementById("menos");
menosBoton.addEventListener("click", function(){
    let menos = document.getElementById("menos").textContent;
    if(h3_pantalla.textContent == "0"){
        return;
    }else if(h3_pantalla.textContent != "0"){
        h3_pantalla.textContent += menos.trim();
    }
});
let porBoton = document.getElementById("por");
porBoton.addEventListener("click", function(){
    let por = document.getElementById("por").textContent;
    if(h3_pantalla.textContent == "0"){
        return;
    }else if(h3_pantalla.textContent != "0"){
        h3_pantalla.textContent += por.trim();
    }
});
let divBoton = document.getElementById("div");
divBoton.addEventListener("click", function(){
    let div = document.getElementById("div").textContent;
    if(h3_pantalla.textContent == "0"){
        return;
    }else if(h3_pantalla.textContent != "0"){
        h3_pantalla.textContent += div.trim();
    }
});
let igualBoton = document.getElementById("igual");
igualBoton.addEventListener("click", function(){
    //let igual = document.getElementById("igual").textContent;
    let digitos = h3_pantalla.textContent;
    let resultado = eval(digitos);
    h3_pantalla.textContent = `${digitos} = ${resultado}`;
});
let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", function(){
    h3_pantalla.textContent = "0";
});
let decimalBoton = document.getElementById("decimal");
decimalBoton.addEventListener("click", function(){
    let decimal = document.getElementById("decimal").textContent;
    h3_pantalla.textContent += decimal.trim();
    //digitos.push(tres);    
});

function primerDigitoSuma(){
    if(h3_pantalla.textContent == "0"){
        return;
    }
}

function limpiarSiEsPrimerDigito(){    
    if(h3_pantalla.textContent == "0"){
        h3_pantalla.innerHTML = '';
    }
}






