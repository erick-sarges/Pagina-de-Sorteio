
let h1 = document.getElementsByClassName("cabeca")[0];

h1.addEventListener("mousemove", mudarCor);
h1.addEventListener("mouseout", voltarCor);

function mudarCor(){

 
 this.style.color = "#ff1493";
 

}

 function voltarCor(){

    this.style.color = "#00ff00";
    

 };

let botao = document.getElementById("botao");
botao.addEventListener("click", sortear)


let pessoas = ["Erick", "Maria", "Genoveva", "Pierre", "Rudolf"];

function sortear(){

    let rifas = pessoas.length;
    
    let numeroDaSorte = Math.floor(Math.random() * rifas);

    document.getElementById("h2").innerHTML = pessoas[numeroDaSorte];

};

