let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
    {id: 6, nome: "Laís", media: 6},
   ];
 
   for ( let contador = 0; contador < alunos.length; contador++ ) {
 
    let aluno = alunos[contador];
 
    if ( aluno.media < 6 ) {
    continue;
    }
 
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
 
   }
 