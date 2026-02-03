import database from "../../../../infra/database.js";

async function status(require, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "Teste de api" });
}

export default status; // export default seta como a função de entrada
