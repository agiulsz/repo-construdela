debugger
nomeAluno1 = prompt("Nome do aluno 1: ")
nota1Aluno1 = prompt("Nota 1: ")
nota2Aluno1 = prompt("Nota 2: ")
nota3Aluno1 = prompt("Nota 3: ")
nota = (nota1Aluno1 + ", " + nota2Aluno1 + ", " + nota3Aluno1)
nota1 = parseInt(nota1Aluno1)
nota2 = parseInt(nota2Aluno1)
nota3 = parseInt(nota3Aluno1)
media1 = (nota1 + nota2 + nota3) / 3


nomeAluno2 = prompt("Nome do aluno 2: ")
nota1Aluno2 = prompt("Nota 1: ")
nota2Aluno2 = prompt("Nota 2: ")
nota3Aluno2 = prompt("Nota 3: ")
nota_ = (nota1Aluno2 + ", " + nota2Aluno2 + ", " + nota3Aluno2)
nota1_ = parseInt(nota1Aluno2)
nota2_ = parseInt(nota2Aluno2)
nota3_ = parseInt(nota3Aluno2)
media2 = (nota1_ + nota2_ + nota3_) / 3


nomeAluno3 = prompt("Nome do aluno 3: ")
nota1Aluno3 = prompt("Nota 1: ")
nota2Aluno3 = prompt("Nota 2: ")
nota3Aluno3 = prompt("Nota 3: ")
notaB = (nota1Aluno3 + ", " + nota2Aluno3 + ", " + nota3Aluno3)
nota1B = parseInt(nota1Aluno1)
nota2B = parseInt(nota2Aluno1)
nota3B = parseInt(nota3Aluno1)
media3 = (nota1B + nota2B + nota3B) / 3


nomeAluno4 = prompt("Nome do aluno 4: ")
nota1Aluno4 = prompt("Nota 1: ")
nota2Aluno4 = prompt("Nota 2: ")
nota3Aluno4 = prompt("Nota 3: ")
notaC = (nota1Aluno4 + ", " + nota2Aluno4 + ", " + nota3Aluno4)
nota1C = parseInt(nota1Aluno4)
nota2C = parseInt(nota2Aluno4)
nota3C = parseInt(nota3Aluno4)
media4 = (nota1C + nota2C + nota3C) / 3

nomeAluno5 = prompt("Nome do aluno 5: ")
nota1Aluno5 = prompt("Nota 1: ")
nota2Aluno5 = prompt("Nota 2: ")
nota3Aluno5 = prompt("Nota 3: ")
notaA = (nota1Aluno5 + ", " + nota2Aluno5 + ", " + nota3Aluno5)
nota1A = parseInt(nota1Aluno5)
nota2A = parseInt(nota2Aluno5)
nota3A = parseInt(nota3Aluno5)
media5 = (nota1 + nota2 + nota3) / 3

alert("Aluno(a)" + nomeAluno1 + " teve as notas " + nota)
if (media1 > 5) {
    alert("APROVADO")
}
else {
    alert("REPROVADO")
}

alert("Aluno(a)" + nomeAluno2 + " teve as notas " + nota_)
if (media2 > 5) {
    alert("APROVADO")
}
else {
    alert("REPROVADO")
}


alert("Aluno(a)" + nomeAluno3 + " teve as notas " + notaB)
if (media3 > 5) {
    alert("APROVADO")
}
else {
    alert("REPROVADO")
}

alert("Aluno(a)" + nomeAluno4 + " teve as notas " + notaC)
if (media4 > 5) {
    alert("APROVADO")
}
else {
    alert("REPROVADO")
}

alert("Aluno(a)" + nomeAluno5 + " teve as notas " + notaA)
if (media5 > 5) {
    alert("APROVADO")
}
else {
    alert("REPROVADO")
}
