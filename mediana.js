function calcularMediana(lista){
    function calcularMediaAritmetica(lista){

        //el metodo reduce() recibe una función y permite ir sumando cada elemento
        const sumaLista = lista.reduce(  
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento
            }
        ) 
        
        
        const promedioLista = sumaLista / lista.length
        
        return promedioLista
        
        }
    
    const mitadLista = parseInt(lista.length / 2)
    
    function esPar(numero){
        if(numero % 2 === 0){
            return true
        }
        else{
            return false
        }
    
    }
    
    const listaOrdenada = lista.sort(
        function compararNumeros(a,b){
            return a - b
        }
    )
    
    
    let mediana
    
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1]
        const elemento2 = lista[mitadLista]
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
    
        mediana = promedioElemento1y2
    }
    else{
        mediana = lista[mitadLista]
    }

    return mediana

}


