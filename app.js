// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//función que añade un nombre a la lista "amigos"
function agregarAmigo(){
    //Captura el input con id "amigo"
    const amigo = document.getElementById("amigo");
    
    //Se comprueba que el input no este vacío antes de añadir amigo a la lista
    if(amigo.value == ""){
        alert("Por favor, ingrese un nombre");
    }else{
        //Si no está vacío, se añade el nombre a la lista "amigos"
        amigos.push(amigo.value);
        //se ejecuta otra función que se encarga de mostrar todos los amigos de la lista
        retornarAmigos();
    }
    //Se limpia el input
    amigo.value = "";
 
};

//función que se encarga de mostrar todos los amigos de la lista
function retornarAmigos(){
    const listaAmigos = document.getElementById("listaAmigos");
    let lis = "";
    listaAmigos.innerHTML = "";

    //Itera la lista de amigos
    for(let i = 0; i < amigos.length; i++){
        lis += `<li>${amigos[i]}</li>`
    }
    //Todos los <li> generados en el for se añaden al <ul>
    listaAmigos.innerHTML = lis;
};

//Función que retorna un num al azar entre 0 y la cantidad total de una lista
function indiceAlAzar(lista){
    return  Math.floor(Math.random() * lista.length);
}

//Funcion que elije un amigo al azar entre la lista de amigos
function sortearAmigo(){
    //Comprueba que la lista no esté vacía
    if(amigos.length != 0){
        const etiqueta = document.getElementById("resultado");
        etiqueta.innerHTML = "";
        let indiceGanador = indiceAlAzar(amigos);

        etiqueta.innerHTML = `<li>El amigo ganador es: ${amigos[indiceGanador]}`;
    }else{
        //Mensaje que se lanza si la lista de amigos está vacía
        alert("Aún no hay amigos en la lista!");
    }
}