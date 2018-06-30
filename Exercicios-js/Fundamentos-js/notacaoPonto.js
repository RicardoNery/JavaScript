console.log(Math.ceil(6.1)); // Arredonda para cima
console.log(Math.floor(6.1)); // Arredonda para baixo

function obj(Nome){
    this.nome = Nome;
    this.executar = function() {
        console.log("teste");
    }
    console.log(nome);
}
obj('Ricardo');
//obj.executar(); // ASSIM NAO executa

// Instanciando uma funcao
const f_func = new obj('Marilha');
console.log(f_func.nome);
console.log(f_func.executar()); // 
