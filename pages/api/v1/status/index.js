function status(require, response) {
  response.status(200).json({ chave: "Teste de api" });
}

export default status; // export default seta como a função de entrada
