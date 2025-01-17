// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const amigo = document.getElementById("amigo");
    //console.log(amigo.value);

    if(amigo.value == ""){
        alert("Por favor, ingrese un nombre");
    }else{
        amigos.push(amigo.value);
    }
    amigo.value = "";
    retornarAmigos();
}

function retornarAmigos(){
    const listaAmigos = document.getElementById("listaAmigos");
    let lis = "";
    console.log(amigos);
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        lis += `<li>${amigos[i]}</li>`
    }
    listaAmigos.innerHTML = lis;
}