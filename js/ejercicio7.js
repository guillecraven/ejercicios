let numero1 = parseInt(prompt("primer numero: "))
let numero2 = parseInt(prompt("segundo numero: "))
let numero3 = parseInt(prompt("tercer numero: "))
if (numero1 > numero2 && numero1 > numero3) { document.write(numero1) }
if (numero2 > numero1 && numero2 > numero3) { document.write(numero2) }
if (numero3 > numero2 && numero3 > numero1) { document.write(numero3) }