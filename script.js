let h1 = document.getElementsByClassName("cabeca")[0];

h1.addEventListener("mousemove", mudarCor);
h1.addEventListener("mouseout", voltarCor);

function mudarCor(e){

 
 this.style.color = "lime";

}

 function voltarCor(e){

    this.style.color = "#ff1493";

 };



