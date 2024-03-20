/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da primeira prova;
*/


const students = [
    {
      name: "Luiz",
      nota1: "9",
      nota2: "7",
    },
    {
      name: "Alexandra",
      nota1: "8",
      nota2: "6",
    },
    {
      name: "Carlos",
      nota1: "5",
      nota2: "7",
    },
    {
      name: "Maria",
      nota1: "9",
      nota2: "10",
    },
  ]

/* 
- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

for(let student of students) {
    let firstGrade = student.nota1
    let secondGrade = student.nota2
    let name = student.name

    let media = (Number(firstGrade) + Number(secondGrade))/2

    if(media >= 7){
        alert(`A media do(a) aluno(a) ${name} é ${media}
        Parabéns, ${name}! Você foi aprovado(a) no concurso!
        `)
    }else{
        alert(`A media do(a) aluno(a) ${name} é ${media}
        Não foi dessa vez, ${name}! Tente novamente!
        `)
    }
}