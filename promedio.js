function calcularMediaAritmetica(lista){

/*let sumaLista = 0

for(let i=0 ; i < lista.length; i++){
    sumaLista = sumaLista + lista[i]
}*/

//el metodo reduce() recibe una función y permite ir sumando cada elemento
const sumaLista = lista.reduce(  
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento
    }
) 


const promedioLista = sumaLista / lista.length

return promedioLista

}