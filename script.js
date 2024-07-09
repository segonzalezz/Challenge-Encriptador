const textarea = document.getElementById("textarea")
const btnEncriptar = document.getElementById("btn_Encriptar")
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
        var caracter = texto[i];
        switch(caracter) {
            case 'a':
                textoFinal += "1 ";
                break;
            case 'b':
                textoFinal += "2 ";
                break;
            case 'c':
                textoFinal += "3 ";
                break;
            case 'd':
                textoFinal += "4 ";
                break;
            case 'e':
                textoFinal += "5 ";
                break;
            case 'f':
                textoFinal += "6 ";
                break;
            case 'g':
                textoFinal += "7 ";
                break;
            case 'h':
                textoFinal += "8 ";
                break;
            case 'i':
                textoFinal += "9 ";
                break;
            case 'j':
                textoFinal += "10 ";
                break;
            case 'k':
                textoFinal += "11 ";
                break;
            case 'l':
                textoFinal += "12 ";
                break;
            case 'm':
                textoFinal += "13 ";
                break;
            case 'n':
                textoFinal += "14 ";
                break;
            case 'o':
                textoFinal += "15 ";
                break;
            case 'p':
                textoFinal += "16 ";
                break;
            case 'q':
                textoFinal += "17 ";
                break;
            case 'r':
                textoFinal += "18 ";
                break;
            case 's':
                textoFinal += "19 ";
                break;
            case 't':
                textoFinal += "20 ";
                break;
            case 'u':
                textoFinal += "21 ";
                break;
            case 'v':
                textoFinal += "22 ";
                break;
            case 'w':
                textoFinal += "23 ";
                break;
            case 'x':
                textoFinal += "24 ";
                break;
            case 'y':
                textoFinal += "25 ";
                break;
            case 'z':
                textoFinal += "26 ";
                break;
            case ' ':
                textoFinal += "27 ";
                break;
            case ',':
                textoFinal += "28 ";
                break;
            case '.':
                textoFinal += "29 ";
                break;
            case '!':
                textoFinal += "30 ";
                break;
            case '?':
                textoFinal += "31 ";
                break;
            case '0':
                textoFinal += "32 ";
                break;
            case '1':
                textoFinal += "33 ";
                break;
            case '2':
                textoFinal += "34 ";
                break;
            case '3':
                textoFinal += "35 ";
                break;
            case '4':
                textoFinal += "36 ";
                break;
            case '5':
                textoFinal += "37 ";
                break;
            case '6':
                textoFinal += "38 ";
                break;
            case '7':
                textoFinal += "39 ";
                break;
            case '8':
                textoFinal += "40 ";
                break;
            case '9':
                textoFinal += "41";
                break;
            default:
                textoFinal += caracter + " "; 
                break;
        }
    }
    return textoFinal.trim(); 
}

function desencriptar_Texto(textoEncriptado) {
    var numeros = textoEncriptado.split(" "); 
    var textoFinal = "";

    for(var i = 0; i < numeros.length; i++) {
        var numero = parseInt(numeros[i], 10); 

        switch(numero) {
            case 1:
                textoFinal += "a";
                break;
            case 2:
                textoFinal += "b";
                break;
            case 3:
                textoFinal += "c";
                break;
            case 4:
                textoFinal += "d";
                break;
            case 5:
                textoFinal += "e";
                break;
            case 6:
                textoFinal += "f";
                break;
            case 7:
                textoFinal += "g";
                break;
            case 8:
                textoFinal += "h";
                break;
            case 9:
                textoFinal += "i";
                break;
            case 10:
                textoFinal += "j";
                break;
            case 11:
                textoFinal += "k";
                break;
            case 12:
                textoFinal += "l";
                break;
            case 13:
                textoFinal += "m";
                break;
            case 14:
                textoFinal += "n";
                break;
            case 15:
                textoFinal += "o";
                break;
            case 16:
                textoFinal += "p";
                break;
            case 17:
                textoFinal += "q";
                break;
            case 18:
                textoFinal += "r";
                break;
            case 19:
                textoFinal += "s";
                break;
            case 20:
                textoFinal += "t";
                break;
            case 21:
                textoFinal += "u";
                break;
            case 22:
                textoFinal += "v";
                break;
            case 23:
                textoFinal += "w";
                break;
            case 24:
                textoFinal += "x";
                break;
            case 25:
                textoFinal += "y";
                break;
            case 26:
                textoFinal += "z";
                break;
            case 27:
                textoFinal += " ";
                break;
            case 28:
                textoFinal += ",";
                break;
            case 29:
                textoFinal += ".";
                break;
            case 30:
                textoFinal += "!";
                break;
            case 31:
                textoFinal += "?";
                break;
            case 32:
                textoFinal += "0";
                break;
            case 33:
                textoFinal += "1";
                break;
            case 34:
                textoFinal += "2";
                break;
            case 35:
                textoFinal += "3";
                break;
            case 36:
                textoFinal += "4";
                break;
            case 37:
                textoFinal += "5";
                break;
            case 38:
                textoFinal += "6";
                break;
            case 39:
                textoFinal += "7";
                break;
            case 40:
                textoFinal += "8";
                break;
            case 41:
                textoFinal += "9";
                break;
            default:
                textoFinal += numeros[i] + " "; 
                break;
        }
    }
    return textoFinal;
}

document.getElementById('btn_Encriptar').addEventListener('click', function() {
    if(textarea.value.trim().length >=2){
        btnEncriptar.disable = true;
        ocultar_contenedor();
        var texto = obtener_texto();
        resultado.textContent = encriptar_Texto(texto);
    }else{
        btnEncriptar.disable = false;
        mostrarMensaje("Ingrese por favor la palabra");
    }
});

document.getElementById('btn_Desencriptar').addEventListener('click', function() {
    ocultar_contenedor();
    var texto_Encriptado = resultado.textContent;
    resultado.textContent = desencriptar_Texto(texto_Encriptado);
});

document.getElementById('btn_Copiar').addEventListener('click', function() {
    var texto_Encriptado = resultado.textContent;
    var texto_Desencriptado = desencriptar_Texto(texto_Encriptado);
    var varTemporal = document.createElement('input');  
    varTemporal.value = texto_Desencriptado;
    document.body.appendChild(varTemporal);
    varTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(varTemporal);
    mostrarMensaje("Texto copiado en el portapapeles");
    resultado.innerHTML = " ";
});

function mostrarMensaje(mensaje) {
    var mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.position = 'absolute';
    mensajeElemento.style.bottom = '150px';
    mensajeElemento.style.right = '136px';
    mensajeElemento.style.padding = '10px';
    mensajeElemento.style.backgroundColor = 'lavender';
    mensajeElemento.style.border = '1px solid purple';
    mensajeElemento.style.borderRadius = '5px';
    document.body.appendChild(mensajeElemento);
    
    setTimeout(function() {
        document.body.removeChild(mensajeElemento);
    }, 3000);
}
