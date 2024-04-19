function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("qual o melhor dia da semana?");

    
    if (respostaTime.toLowerCase() === "sexta feira") {
      alert("o melhor dia é sexta");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}