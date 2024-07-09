
var icono = document.querySelector(".contenedor_icono")
var contenedor = document.querySelector(".contenedor_parrafo")
var resultado =  document.querySelector(".texto_resultado")

function obtener_texto() {
    var texto_area = document.querySelector(".texto_area");
    return texto_area.value;
}

function ocultar_contenedor(){
    icono.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}


function encriptar_Texto(mensaje) {
    var texto = mensaje.toLowerCase(); 
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        switch(texto[i]) {
            case "a":
                textoFinal += "@";
                break;
            case "e":
                textoFinal += "3";
                break;
            case "i":
                textoFinal += "!";
                break;
            case "o":
                textoFinal += "*";
                break;
            case "u":
                textoFinal += "#";
                break;
            default:
                textoFinal += texto[i];
                break;
        }
    }
    return textoFinal;
}

function desencriptar_Texto(textoEncriptado) {
    var texto = textoEncriptado;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        switch(texto[i]) {
            case "@":
                textoFinal += "a";
                break;
            case "3":
                textoFinal += "e";
                break;
            case "!":
                textoFinal += "i";
                break;
            case "*":
                textoFinal += "o";
                break;
            case "#":
                textoFinal += "u";
                break;
            default:
                textoFinal += texto[i];
                break;
        }
    }
    return textoFinal;
}

document.getElementById('btn_Encriptar').addEventListener('click', function() {
    ocultar_contenedor();
    var texto = obtener_texto();
    resultado.textContent = encriptar_Texto(texto);
});

document.getElementById('btn_Desencriptar').addEventListener('click', function() {
    ocultar_contenedor();
    var texto_Encriptado = resultado.textContent;
    resultado.textContent = desencriptar_Texto(texto_Encriptado);
});
