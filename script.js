function sumar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var resultado = parseInt(numero1) + parseInt(numero2);

    document.getElementById("resultado").innerHTML = resultado;
}

function restar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var resultado = parseInt(numero1) - parseInt(numero2);

    document.getElementById("resultado").innerHTML = resultado;

}

function multiplicar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var resultado = parseInt(numero1) * parseInt(numero2);

    document.getElementById("resultado").innerHTML = resultado;
}
