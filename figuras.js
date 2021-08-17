//Código del cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5
//console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm")

function perimetroCuadrado(lado){
    return lado * 4
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm")

//const areaCuadrado = ladoCuadrado * ladoCuadrado
function areaCuadrado(lado){
    return lado * lado
} 
//console.log("El área del cuadrado es: " + areaCuadrado +"cm^2")

console.groupEnd()

//Código del triangulo
console.group("Triángulos")
//const ladoTriangulo1 = 6
//const ladoTriangulo2 = 6
//const baseTriangulo = 4

/* console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
) */

/* const alturaTriangulo = 5.5
console.log("La altura del triángulo es de: " + alturaTriangulo +"cm") */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}
// console.log("El perimetro del triángulo es: " + perimetroTriangulo +"cm")

function areaTriangulo(base, altura){
    return (base * altura) / 2
} 
// console.log("El área del cuadrado es: " + areaTriangulo + "cm^2")

function alturaTrianguloIsosceles (trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){
    if(trianguloGrandeLadoA != trianguloGrandeLadoB){
        console.error("Los lados a y b no son iguales")
    }
    else{
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;

    }
}

console.groupEnd()

//Código del círculos
console.group("Círculos")

// Radio
// const radioCirculo = 4
// console.log("El radio del círculo es: " + radioCirculo +"cm")

// Diámetro
function diametroCirculo(radio){
    return radio * 2
}

// console.log("El diámetro del círculo es: " + diametroCirculo +"cm")

// PI
const PI = Math.PI
console.log("PI es: " + PI)

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
} 
// console.log("El perimetro del círculo es: " + perimetroCirculo +"cm")

// Área
function areaCirculo(radio){
    return (radio * radio) * PI
}
// console.log("El área del círculo es: " + areaCirculo +"cm^2")

console.groupEnd()


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function  calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = areaCuadrado(value)
    alert(perimetro)
    
}

function calcularPerimetroTriangulo(){
    const inputLadoA = document.getElementById("InputTrianguloLadoA")
    const valueLadoA = inputLadoA.value
    const inputLadoB = document.getElementById("InputTrianguloLadoB")
    const valueLadoB = inputLadoB.value
    const inputBase = document.getElementById("InputTrianguloBase")
    const valueBase = inputBase.value
    

    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase)
    alert(perimetro)
}

function  calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = areaCuadrado(value)
    alert(perimetro)
    
}
