

imparPar = prompt("Escolha entra par ou ímpar: ")

x = 100 * Math.random()
x = Math.trunc(x)
alert("O número sorteado foi: " + x)




y = x % 2
if (y == 0) {
  console.log("Par")
  if (imparPar == "par") {
    alert("Ganhou!")
  }
  else {
    alert("Perdeu!")
  }
}
else {
  console.log("Ímpar")
  if (imparPar == "ímpar") {

    alert("Ganhou!")
  }
  else {
    alert("Perdeu!")
  }
}

