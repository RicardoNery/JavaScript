// function Pessoa(){
//     this.idade  = 0;

// // Executa a funcao definida em milisegundos (1 segundo (1000))
// // Posso passar uma funcao como parametro no JS
//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     }, 1000);
// }

// // Dispara a funcao
// new Pessoa; // Retorno NaN

// /// Dessa vez passo o parametro BIND e amarro ao objeto Pessoa
// function Pessoa(){
//     this.idade  = 0;

// // Executa a funcao definida em milisegundos (1 segundo (1000))
// // Posso passar uma funcao como parametro no JS
//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     }.bind(this), 1000); // Dessa vez o contador executa.
// }

// // Dispara a funcao
// new Pessoa; // Retorna o contador corretamente

/// Podemos encontrar isso em codigos JS
function Pessoa(){
    this.idade  = 0;

// Declara a constante self e passa a referencia do objeto para ela
// dessa forma a referencia sempre vai existir.    
    const self = this;  
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000); // Dessa vez o contador executa.
}

// // Dispara a funcao
new Pessoa;

