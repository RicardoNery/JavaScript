/// Nesse contexto com arrow function considera o objeto chamador PESSOA(está no mesmo contexto)
function Pessoa(){
    this.idade  = 0;

// Executa a funcao definida em milisegundos (1 segundo (1000))
// Posso passar uma funcao como parametro no JS
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

// Dispara a funcao
new Pessoa; // Retorna valor já que this faz parte do mesmo contexto, e nao é necessario o uso do (BIND)
