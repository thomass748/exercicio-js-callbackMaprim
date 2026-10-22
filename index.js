
function saudacao() {
  console.log("Olá! Bem-vindo ao Back-End com Node.js!");
}

function executar(callback) {
  console.log("Iniciando processo...");
  callback();
}

console.log("--- Exercício 1 ---");
// Passando a função por referência (sem parênteses)
executar(saudacao);


// ==========================================
function calcularDobro(numero, callbackResultado) {
  const valorDobrado = numero * 2;
  callbackResultado(valorDobrado);
}

function imprimirFormatado(valor) {
  console.log("[RESULTADO]: O valor calculado é " + valor);
}

console.log("\n--- Exercício 2 ---");
calcularDobro(25, imprimirFormatado);


// ==========================================
function operar(a, b, operacaoCallback) {
  return operacaoCallback(a, b);
}

function somar(x, y) {
  return x + y;
}

function multiplicar(x, y) {
  return x * y;
}

console.log("\n--- Exercício 3 ---");
console.log(operar(10, 4, somar));      
console.log(operar(10, 4, multiplicar));  



// ==========================================
function processarTexto(texto, callbackModificadora) {
  callbackModificadora(texto);
}

console.log("\n--- Exercício 4 ---");
processarTexto("senai valinhos", (t) => console.log(t.toUpperCase()));


// ==========================================
function simularDownload(nomeArquivo, callbackConclusao) {
  console.log(`Iniciando download de ${nomeArquivo}...`);
  setTimeout(() => {
    callbackConclusao();
  }, 1500);
}

console.log("\n--- Exercício 5 ---");
simularDownload("dados_clientes.csv", () => {
  console.log("Download finalizado com sucesso no disco!");
});
