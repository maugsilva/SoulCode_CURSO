// Função com callback
function calcularSoma(a, b, callback) {
    setTimeout(() => {
      const resultado = a + b;
      callback(resultado);
    }, 1000);
  }
  
  function calcularProduto(a, b, callback) {
    setTimeout(() => {
      const resultado = a * b;
      callback(resultado);
    }, 1000);
  }
  
  // Função com Promises
  function calcularQuadrado(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a >= 0) {
          resolve(a * a);
        } else {
          reject("Número negativo não é permitido.");
        }
      }, 1000);
    });
  }
  
  function calcularCubo(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a >= 0) {
          resolve(a * a * a);
        } else {
          reject("Número negativo não é permitido.");
        }
      }, 1000);
    });
  }
  
  // Função com async/await
  async function calcularAreaRetangulo(base, altura) {
    try {
      const resultado = await calcularProduto(base, altura);
      console.log(`A área do retângulo é ${resultado}`);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function calcularAreaTriangulo(base, altura) {
    try {
      const resultado = await calcularProduto(base, altura);
      console.log(`A área do triângulo é ${resultado / 2}`);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Exemplos de uso
  
  // Callbacks
  calcularSoma(5, 3, (resultado) => {
    console.log(`A soma é ${resultado}`);
  });
  
  calcularProduto(4, 6, (resultado) => {
    console.log(`O produto é ${resultado}`);
  });
  
  // Promises
  calcularQuadrado(7)
    .then((resultado) => {
      console.log(`O quadrado é ${resultado}`);
    })
    .catch((error) => {
      console.error(error);
    });
  
  calcularCubo(3)
    .then((resultado) => {
      console.log(`O cubo é ${resultado}`);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Async/await
  calcularAreaRetangulo(5, 8);
  calcularAreaTriangulo(4, 6);
  