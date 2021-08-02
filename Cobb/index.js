let boton = document.getElementById("call-to-action");
let pmgk = document.getElementById("PMgK");
let pmgl = document.getElementById("PMgL");

function derivarRespectoaK (constante, alfa, k, l) {
    let multiplicar = constante * alfa;
    let resta = alfa - 1;
    let restaPositiva = resta * -1;
    let kapital = k;
    let labor = l;
    let division = labor / kapital;
    let resultado = multiplicar * (division**(restaPositiva));
    let resultadoFIN = resultado.toFixed(3)
    let productoMarginalyK = `PMgK = ${resultadoFIN}`;
    pmgk.innerHTML = productoMarginalyK;
    
}    

function derivarRespectoaL (constante, beta, k, l) {
    let multiplicar = constante * beta;
    let resta = beta - 1;
    let restaPositiva = resta * -1;
    let kapital = k;
    let labor = l;
    let division = kapital / labor;
    let resultado = multiplicar * (division**(restaPositiva));
    let resultadoFIN2 = resultado.toFixed(2)
    let productoMarginalyL = `PMgL = ${resultadoFIN2}`;
    pmgl.innerHTML = productoMarginalyL;
}

boton.addEventListener("click", () => {
   let capital = document.getElementById("capital").value;
   let alfaNumerador = document.getElementById("alfa-numerador").value;
   let alfaDenominador = document.getElementById("alfa-denominador").value;
   let fraccionAlfa = alfaNumerador / alfaDenominador;
   let betaNumerador = document.getElementById("beta-numerador").value;
   let betaDenominador = document.getElementById("beta-denominador").value;
   let fraccionBeta = betaNumerador / betaDenominador;
   let k = parseInt(prompt("¿Cual es el valor de K?"));
   let l = parseInt(prompt("Cual es el valor de L?"));
   derivarRespectoaK(capital, fraccionAlfa, k, l);
   derivarRespectoaL(capital, fraccionBeta, k, l);
})