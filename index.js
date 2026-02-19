const botones = document.querySelectorAll("button");
const botones2 = document.querySelectorAll(".mena")
const primerEstilo = document.getElementById('boton1');
const segundoEstilo = document.getElementById('boton2');
const terceroEstilo = document.getElementById('boton3');

botones2.forEach(function (boton) {
  boton.addEventListener('click', () => {
    if (boton.id === 'boton1') {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
      document.getElementsByClassName('Calculadora')[0].style.backgroundColor = "hsl(223, 31%, 20%)";
      primerEstilo.style.backgroundColor = "#d03f2f";
      primerEstilo.style.transition = "0.2s";
      segundoEstilo.style.backgroundColor = "transparent";
      terceroEstilo.style.backgroundColor = "transparent";
       for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "white";
        botones[i].style.boxShadow = "0px 4px hsl(28, 16%, 65%)";
        botones[i].style.color = "hsl(221, 14%, 31%)";
      }
      document.getElementById("pantalla").style.backgroundColor = "hsl(224, 36%, 15%)";
      document.getElementById("pantalla").style.color = "white";
      document.getElementById("eliminar").style.backgroundColor = "hsl(225, 21%, 49%)";
      document.getElementById("eliminar").style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
      document.getElementById("eliminar").style.color = "white";
      document.getElementById("reinicio").style.backgroundColor = "hsl(225, 21%, 49%)";
      document.getElementById("reinicio").style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
      document.getElementById("reinicio").style.color = "white";
      document.getElementById("igual").style.backgroundColor = "hsl(6, 63%, 50%)";
      document.getElementById("igual").style.boxShadow = "0px 4px hsl(6, 70%, 34%)";
      document.getElementById("igual").style.color = "white";
      document.getElementsByClassName("oo")[0].style.color = "white";
      document.getElementById("n").style.color = "white";
      document.getElementById("mover").style.color = "white";
    }
    else if (boton.id === 'boton2') {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
      document.getElementsByClassName('Calculadora')[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      primerEstilo.style.backgroundColor = "transparent";
      segundoEstilo.style.backgroundColor = "hsl(25, 98%, 40%)";
      segundoEstilo.style.transition = "0.2s";
      terceroEstilo.style.backgroundColor = "transparent";
      for (let i = 0; i < botones.length; i++) {
      botones[i].style.backgroundColor = "hsl(0, 0%, 90%)";
      botones[i].style.boxShadow = "0px 4px hsl(35, 11%, 61%)";
      botones[i].style.color = "hsl(60, 10%, 19%)";
      }
      document.getElementById("pantalla").style.backgroundColor = "hsl(0, 0%, 93%)";
      document.getElementById("pantalla").style.color = "hsl(60, 10%, 19%)"
      document.getElementById("eliminar").style.backgroundColor = "hsl(185, 42%, 37%)";
      document.getElementById("eliminar").style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
      document.getElementById("eliminar").style.color = "white";
      document.getElementById("reinicio").style.backgroundColor = "hsl(185, 42%, 37%)";
      document.getElementById("reinicio").style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
      document.getElementById("reinicio").style.color = "white";
      document.getElementById("igual").style.backgroundColor = "hsl(25, 98%, 40%)";
      document.getElementById("igual").style.boxShadow = "0px 4px hsl(25, 99%, 27%)";
      document.getElementById("igual").style.color = "white";
      document.getElementsByClassName("oo")[0].style.color = "hsl(60, 10%, 19%)";
      document.getElementById("n").style.color = "hsl(60, 10%, 19%)";
      document.getElementById("mover").style.color = "hsl(60, 10%, 19%)";
    }
    else {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
      document.getElementsByClassName('Calculadora')[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      primerEstilo.style.backgroundColor = "transparent";
      segundoEstilo.style.backgroundColor = "transparent";
      terceroEstilo.style.backgroundColor = "hsl(176, 100%, 44%)";
      terceroEstilo.style.transition = "0.2s";
      for (let i = 0; i < botones.length; i++) {
      botones[i].style.backgroundColor = "hsl(268, 47%, 21%)";
      botones[i].style.boxShadow = "0px 4px hsl(290, 70%, 36%)";
      botones[i].style.color = "hsl(52, 100%, 62%)";
      }
      document.getElementById("pantalla").style.backgroundColor = "hsl(268, 71%, 12%)";
      document.getElementById("pantalla").style.color = "hsl(52, 100%, 62%)";
      document.getElementById("eliminar").style.backgroundColor = "hsl(281, 89%, 26%)";
      document.getElementById("eliminar").style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
      document.getElementById("eliminar").style.color = "white";
      document.getElementById("reinicio").style.backgroundColor = "hsl(281, 89%, 26%)";
      document.getElementById("reinicio").style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
      document.getElementById("reinicio").style.color = "white";
      document.getElementById("igual").style.backgroundColor = "hsl(176, 100%, 44%)";
      document.getElementById("igual").style.boxShadow = "0px 4px hsl(177, 92%, 70%)";
      document.getElementById("igual").style.color = "hsl(198, 20%, 13%)";
      document.getElementsByClassName("oo")[0].style.color = "hsl(52, 100%, 62%)";
      document.getElementById("n").style.color = "hsl(52, 100%, 62%)";
      document.getElementById("mover").style.color = "hsl(52, 100%, 62%)";
    }
  })
});


let pantalla = document.getElementById("pantalla");


botones.forEach(function (boton) {
  boton.addEventListener("click", function () {

    let valor = this.value;

    if (this.id === "reinicio") {
      pantalla.value = "0";
      return;
    }

    if (this.id === "eliminar") {
      pantalla.value = pantalla.value.slice(0, -1);
      if (pantalla.value === "") {
        pantalla.value = "0";
      }
      return;
    }

    if (this.id === "igual") {
      try {
        pantalla.value = eval(
          pantalla.value.replace("x", "*")
        );
      } catch {
        pantalla.value = "Error";
      }
      return;
    }

    if (pantalla.value === "0") {
      pantalla.value = valor;
    } else {
      pantalla.value += valor;
    }

  });
});
